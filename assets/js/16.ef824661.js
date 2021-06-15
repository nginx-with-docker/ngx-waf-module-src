(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{392:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-guide"}},[t._v("#")]),t._v(" Configuration Guide")]),t._v(" "),s("p",[t._v("You can enable ngx_waf by adding configuration to a "),s("code",[t._v("server")]),t._v(" block inside "),s("code",[t._v("nginx.conf")]),t._v(".\nHere is an example.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("The configurations listed below are required if you intend to change them unless you know what it means.")])]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# on means enabled, off means disabled.")]),t._v("\n        waf on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The absolute path to the directory where the rule file is located, must end with /.")]),t._v("\n        waf_rule_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ngx_waf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("assets"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Firewall working mode, STD indicates standard mode.")]),t._v("\n        waf_mode STD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CC defense parameter, 1000 requests per minute limit, ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# block the corresponding ip for 60 minutes after exceeding the limit.")]),t._v("\n        waf_cc_deny rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("r"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("m duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Cache detection results for up to 50 detection targets, ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# effective for all detections ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# except IP black and white list detection, CC protection and POST detection.")]),t._v("\n        waf_cache capacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);