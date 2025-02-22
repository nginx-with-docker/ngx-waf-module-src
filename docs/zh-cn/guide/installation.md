---
title: 安装
lang: zh-CN
sidebarDepth: 3
---

# 安装

本模块提供两种安装方式，分别是 Docker 和编译安装。

## Docker

本模块提供了两种获取 Docker 镜像方式，拉取远程镜像和本地构建镜像。

镜像基于 Docker 官方的镜像构建，默认规则文件已经拷贝到镜像中的 `/etc/nginx/waf-rules/` 中，
使用方法同 [Docker 官方镜像文档](https://hub.docker.com/_/nginx/)。

::: tip 注意

许多人对于非 Docker 官方的镜像信任度较低，我也是。如果您也是的话建议您在本地构建镜像。
如果您愿意信任本模块的作者的话，建议您直接拉取作者构建好的镜像。

:::

### 拉取远程镜像

本模块会在每次更新稳定版和开发版时上传对应的 Docker 镜像，并在协调世界时（UTC）周日零点零分零秒重新构建所有的镜像。

镜像的 tag 说明：

* `ngx_waf:stable`：基于 `nginx:stable` 构建并安装了稳定版的 `ngx_waf`。
* `ngx_waf:stable-alpine`：基于 `nginx:stable-alpine` 构建并安装了稳定版的 `ngx_waf`。
* `ngx_waf:dev`：基于 `nginx:stable` 构建并安装了开发版的 `ngx_waf`。
* `ngx_waf:latest`：同 `ngx_waf:dev`。
* `ngx_waf:dev-alpine`：基于 `nginx:stable-alpine` 构建并安装了开发版的 `ngx_waf`。


您可以选择下面两条命令中的一条来拉取已经构建好的镜像。

```sh
docker pull addsp/ngx_waf:stable

docker pull addsp/ngx_waf:stable-alpine
```

### 本地构建

本模块在根目录提供了两个 Dockerfile 文件用来指导镜像的构建，
分别是 `docker/Dockerfile.alpine` 和 `docker/Dockerfile.debian`，
前者是基于 `nginx:stable-alpine` 构建，后者则是基于 `nginx:stable` 构建。

您可以选择下面两条命令中的一条构建镜像。

```sh
docker build -t nginx:stable-alpine-with-ngx_waf --build-arg=CHANGE_SOURCE=true -f docker/Dockerfile.alpine .

docker build -t nginx:stable-with-ngx_waf --build-arg=CHANGE_SOURCE=true -f docker/Dockerfile.debian .
```

::: tip 注意

当 `CHANGE_SOURCE` 为 `true` 时会使用中国境内的软件源来加速资源下载速度，反之则使用默认软件源。
本参数默认值为 `false`。

:::

## 编译安装

nginx 提供两种安装模块的方式，即「静态链接」和「动态加载」，通过两种方式安装的模块也分别称为「静态模块」和「动态模块」。

::: warning 注意

编译安装模块可能需要一些依赖，比如 gcc，请自行解决依赖问题，本文不提供这类信息。

:::

::: danger 重要信息

编译安装一个新的模块需要知道当前的 nginx 的 `configure` 脚本的参数，您可以通过运行 `nginx -V` 来获取。
下面是一个例子。

```
nginx version: nginx/1.19.6
built by gcc 9.3.0 (Ubuntu 9.3.0-17ubuntu1~20.04)
built with OpenSSL 1.1.1i  8 Dec 2020
TLS SNI support enabled
configure arguments: --with-mail=dynamic --with-openssl=/usr/local/src/openssl-OpenSSL_1_1_1i --prefix=/usr/local/nginx --user=nginx --group=nginx --with-file-aio --with-http_ssl_module --with-http_geoip_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_perl_module --with-http_stub_status_module --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-debug --with-cc-opt='-O3 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic'
```

务必记住 `configure arguments:` 后面的内容，下文中将使用 `ARG` 来代替这块内容。

:::

### 静态模块

安装静态模块需要重新编译整个 nginx，花费的时间相对于安装动态模块比较长。

首先下载对应版本的 nginx，[下载页面](http://nginx.org/en/download.html)。
下面将以 `nginx-1.20.1` 为例。

```sh
cd /usr/local/src
wget https://nginx.org/download/nginx-1.20.1.tar.gz
tar -zxf nginx-1.20.1.tar.gz
```

然后下载本模块的源码，下文将使用稳定版的源码。

```sh
cd /usr/local/src
# 如果你想使用开发版的模块请将 -b master 替换为 -b dev。
git clone -b master https://github.com/ADD-SP/ngx_waf.git
cd ngx_waf
git clone https://github.com/libinjection/libinjection.git inc/libinjection
```

接下来应该运行配置脚本。

```sh
cd /usr/local/src/nginx-1.20.1
./configure ARG --add-module=/usr/local/src/ngx_waf
```

::: warning 注意

* `ARG` 的含义见[编译安装](#编译安装)。

* 如果您使用的编译器是 GCC，请在 `--with-cc-opt` 中追加 `-fstack-protector-strong`，
例如 `--with-cc-opt='-Werror -g'` ---> `--with-cc-opt='-Werror -g -fstack-protector-strong'`

:::

接着您开始编译了

```sh
# 不使用并行编译
make

# 使用并行编译
make -j$(nproc)
```

::: tip 注意

并行会提升编译速度，但是有概率出现莫名奇妙的错误，如果并行编译出错，可以禁用并行编译。

:::

最后您应该关闭 nginx，然后替换 nginx 的二进制文件，
此处假设 nginx 的二进制文件的绝对路径为 `/usr/local/nginx/sbin/nginx`。

```sh
cp objs/nginx /usr/local/nginx/sbin/nginx
```

::: tip 热部署

如果您不想在替换二进制文件时关闭 nginx，可以参考[官方文档的热部署方案](http://nginx.org/en/docs/control.html)。

:::

### 动态模块

编译安装动态模块并不需要重新编译整个 nginx，只需要重新编译所有的模块，所以
速度相对静态模块快一些，这也是本文档推荐的方式。

下载 nginx 源码和模块源码的过程同[静态模块](#静态模块)，不再赘述。

运行配置脚本

```sh
./configure --add-dynamic-module=/usr/local/src/ngx_waf --with-compat
```

::: warning 注意

* 如果您使用的编译器是 GCC，请在 `--with-cc-opt` 中追加 `-fstack-protector-strong`，
例如 `--with-cc-opt='-Werror -g'` ---> `--with-cc-opt='-Werror -g -fstack-protector-strong'`

:::

然后开始编译动态模块

```sh
make modules
```

接着您应该关闭 nginx，然后将动态模块拷贝到模块目录，
此处假设模块目录的绝对路径为 `/usr/local/nginx/modules`。

```sh
cp objs/*.so /usr/local/nginx/modules
```

最后在 nginx 的配置文件顶部添加一行
```vim
load_module "/usr/local/nginx/modules/ngx_http_waf_module.so";
```