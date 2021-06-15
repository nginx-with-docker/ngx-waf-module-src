(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{394:function(e,t,a){"use strict";a.r(t);var s=a(44),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-guide"}},[e._v("#")]),e._v(" Installation Guide")]),e._v(" "),a("p",[e._v("This module provides two ways of installation, Docker and compiled.")]),e._v(" "),a("h2",{attrs:{id:"docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),a("p",[e._v("This module provides two ways to get Docker images, pulling remote images and building images locally.")]),e._v(" "),a("p",[e._v("The image is built based on the official Docker image,\nsee "),a("a",{attrs:{href:"https://hub.docker.com/r/addsp/ngx_waf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker image repository"),a("OutboundLink")],1),e._v(" for usage.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),a("p",[e._v("Many people have less trust in non-official Docker images, and I do too.\nIf you do, it is recommended that you build the image locally.\nIf you are willing to trust the author of this module,\nit is recommended that you pull the image built by the author directly.")])]),e._v(" "),a("h3",{attrs:{id:"pulling-remote-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pulling-remote-images"}},[e._v("#")]),e._v(" Pulling Remote Images")]),e._v(" "),a("p",[e._v("This module uploads the corresponding Docker images each time the stable and development versions are updated,\nand rebuilds all images at 00:00:00 UTC on Sunday.")]),e._v(" "),a("p",[e._v("You can choose one of the following two commands to pull an image that has already been built.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker pull addsp/ngx_waf:stable\n\ndocker pull addsp/ngx_waf:stable-alpine\n")])])]),a("h3",{attrs:{id:"build-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-locally"}},[e._v("#")]),e._v(" Build Locally")]),e._v(" "),a("p",[e._v("This module provides two Dockerfile files in the root directory to guide the image build.\nThey are "),a("code",[e._v("docker/Dockerfile.alpine")]),e._v(" and "),a("code",[e._v("docker/Dockerfile.debian")]),e._v(", respectively.\nThe former is built based on "),a("code",[e._v("nginx:stable-alpine")]),e._v(" and the latter is built based on "),a("code",[e._v("nginx:stable")]),e._v(".")]),e._v(" "),a("p",[e._v("You can choose one of the following two commands to build the image")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker build -t nginx:stable-alpine-with-ngx_waf -f docker/Dockerfile.alpine "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n\ndocker build -t nginx:stable-with-ngx_waf -f docker/Dockerfile.debian "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("h2",{attrs:{id:"compile-and-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-and-install"}},[e._v("#")]),e._v(" Compile And Install")]),e._v(" "),a("p",[e._v('nginx provides two ways to install modules, namely "static linking" and "dynamic loading",\nand the modules installed in these two ways are called "static modules" and "dynamic modules" respectively.')]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Compiling and installing the module may require some dependencies,\nsuch as "),a("code",[e._v("gcc")]),e._v(",\nso please work out the dependencies yourself; this article does not provide such information.")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Compiling and installing a new module requires knowing the parameters of the current nginx's "),a("code",[e._v("configure")]),e._v(" script,\nwhich you can get by running "),a("code",[e._v("nginx -V")]),e._v(".\nHere is an example.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nginx version: nginx/1.19.6\nbuilt by gcc 9.3.0 (Ubuntu 9.3.0-17ubuntu1~20.04)\nbuilt with OpenSSL 1.1.1i  8 Dec 2020\nTLS SNI support enabled\nconfigure arguments: --with-mail=dynamic --with-openssl=/usr/local/src/openssl-OpenSSL_1_1_1i --prefix=/usr/local/nginx --user=nginx --group=nginx --with-file-aio --with-http_ssl_module --with-http_geoip_module --with-http_v2_module --with-http_realip_module --with-stream_ssl_preread_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_perl_module --with-http_stub_status_module --with-http_auth_request_module --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-debug --with-cc-opt='-O3 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic'\n")])])]),a("p",[e._v("Be sure to remember what comes after "),a("code",[e._v("configure arguments:")]),e._v(", which will be replaced by "),a("code",[e._v("ARG")]),e._v(" below.")])]),e._v(" "),a("h3",{attrs:{id:"static-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-modules"}},[e._v("#")]),e._v(" Static Modules")]),e._v(" "),a("p",[e._v("Installing a static module requires recompiling the entire nginx, which takes longer than installing a dynamic module.")]),e._v(" "),a("p",[e._v("First download the corresponding version of nginx, "),a("a",{attrs:{href:"http://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("download page"),a("OutboundLink")],1),e._v(".\nThe following is an example of "),a("code",[e._v("nginx-1.20.1")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("wget")]),e._v(" https://nginx.org/download/nginx-1.20.1.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("tar")]),e._v(" -zxf nginx-1.20.1.tar.gz\n")])])]),a("p",[e._v("Then download the source code of this module, the following will use the stable version of the source code")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/local/src\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# If you want to use the development version please replace '-b master' with '-b dev'.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone -b master https://github.com/ADD-SP/ngx_waf.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ngx_waf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/libinjection/libinjection.git inc/libinjection\n")])])]),a("p",[e._v("Next you should run the configuration script.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /usr/local/src/nginx-1.20.1\n./configure ARG --add-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/ngx_waf\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The meaning of "),a("code",[e._v("ARG")]),e._v(" is given in "),a("a",{attrs:{href:"#compile-and-install"}},[e._v("Compile And Install")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("If you are using GCC as your compiler, append "),a("code",[e._v("-fstack-protector-strong")]),e._v(" to "),a("code",[e._v("-with-cc-opt")]),e._v(".\nFor example "),a("code",[e._v("--with-cc-opt='-Werror -g'")]),e._v(" ---\x3e "),a("code",[e._v("--with-cc-opt='-Werror -g -fstack-protector-strong'")])])])])]),e._v(" "),a("p",[e._v("Then start compiling.")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Not using parallel compilation")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Use parallel compilation.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" -j"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("nproc"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Parallel compilation will improve the compilation speed, but there is a chance of strange errors,\nso you can disable parallel compilation if it goes wrong.")])]),e._v(" "),a("p",[e._v("Finally, you should stop nginx and replace the nginx binary.\nAssume here that the absolute path to the nginx binary is "),a("code",[e._v("/usr/local/nginx/sbin/nginx")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" objs/nginx /usr/local/nginx/sbin/nginx\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Hot Deployment")]),e._v(" "),a("p",[e._v("If you do not want to not nginx when replacing binaries, you can refer to the "),a("a",{attrs:{href:"http://nginx.org/en/docs/control.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation for hot deployment scenarios"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"dynamic-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-modules"}},[e._v("#")]),e._v(" Dynamic Modules")]),e._v(" "),a("p",[e._v("Compiling and installing dynamic modules does not require recompiling the entire nginx,\nonly all modules, which is faster than static modules,\nwhich is the recommended way in this document.")]),e._v(" "),a("p",[e._v("The process of downloading nginx source code and module source code is the same as for "),a("a",{attrs:{href:"#static-modules"}},[e._v("Static Modules")]),e._v(" and will not be repeated.")]),e._v(" "),a("p",[e._v("Run the configuration script")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("./configure --add-dynamic-module"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/local/src/ngx_waf --with-compat\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("ul",[a("li",[e._v("If you are using GCC as your compiler, append "),a("code",[e._v("-fstack-protector-strong")]),e._v(" to "),a("code",[e._v("-with-cc-opt")]),e._v(".\nFor example "),a("code",[e._v("--with-cc-opt='-Werror -g'")]),e._v(" ---\x3e "),a("code",[e._v("--with-cc-opt='-Werror -g -fstack-protector-strong'")])])])]),e._v(" "),a("p",[e._v("Then start compiling the dynamic module")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" modules\n")])])]),a("p",[e._v("You should then stop nginx and copy the dynamic modules to the modules directory.\nAssume here that the absolute path to the modules directory is "),a("code",[e._v("/usr/local/nginx/modules")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" objs/*.so /usr/local/nginx/modules\n")])])]),a("p",[e._v("Finally, add a line to the top of the nginx configuration file.")]),e._v(" "),a("div",{staticClass:"language-vim extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[e._v("load_module "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/usr/local/nginx/modules/ngx_http_waf_module.so"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);