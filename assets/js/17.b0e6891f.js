(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{393:function(e,t,a){"use strict";a.r(t);var n=a(44),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h2",{attrs:{id:"how-does-this-module-perform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-this-module-perform"}},[e._v("#")]),e._v(" How does this module perform?")]),e._v(" "),a("p",[e._v("IP inspection and CC defense take constant time, other inspections take "),a("code",[e._v("O(nm)")]),e._v(", where "),a("code",[e._v("n")]),e._v(" is the number of relevant rules and "),a("code",[e._v("m")]),e._v(" is the time complexity to perform regular matching, but the results of this inspection are automatically cached after each inspection, so that the next time the same target is inspected, the cache can be used instead of checking all the rules. The result of the POST request body check is not cached.")]),e._v(" "),a("h2",{attrs:{id:"cache-policy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-policy"}},[e._v("#")]),e._v(" Cache Policy")]),e._v(" "),a("p",[e._v("LRU")]),e._v(" "),a("h2",{attrs:{id:"post-inspection-failure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-inspection-failure"}},[e._v("#")]),e._v(" Post Inspection Failure")]),e._v(" "),a("p",[e._v("For performance reasons, this module will inspect whether it is in the memory before inspecting the request body. If it is, it will inspect normally, otherwise skip the inspection. You can try to edit nginx.conf.")]),e._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("http")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_buffer_size")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("client_body_in_file_only")]),e._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_buffer_size",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_buffer_size"),a("OutboundLink")],1),e._v("\nand "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#client_body_in_file_only",target:"_blank",rel:"noopener noreferrer"}},[e._v("client_body_in_file_only"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-failed-while-spawning-worker-process-12-cannot-allocate-memory"}},[e._v("#")]),e._v(' fork() failed while spawning "worker process" (12: Cannot allocate memory)')]),e._v(" "),a("p",[e._v("It may be caused by excessive use of "),a("code",[e._v("nginx -s reload")]),e._v(". The module requests some memory when reading the configuration, but somehow the memory is not released immediately after "),a("code",[e._v("nginx -s reload")]),e._v(", so frequent "),a("code",[e._v("nginx -s reload")]),e._v(" in a short period of time will most likely cause this error.")]),e._v(" "),a("h2",{attrs:{id:"can-i-change-the-rules-at-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-change-the-rules-at-runtime"}},[e._v("#")]),e._v(" Can I change the rules at runtime?")]),e._v(" "),a("p",[e._v("No, this module will only read the rules when nginx reads the configuration.\nnginx will read the configuration on startup and reload.")]),e._v(" "),a("h2",{attrs:{id:"is-ip-inspection-affected-by-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-ip-inspection-affected-by-cdn"}},[e._v("#")]),e._v(" Is IP inspection affected by CDN?")]),e._v(" "),a("p",[e._v("If you use the "),a("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_realip_module.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ngx_http_realip_module"),a("OutboundLink")],1),e._v(" module to get the real IP, then this module will use the real IP for inspection.")]),e._v(" "),a("h2",{attrs:{id:"regular-expression-denial-of-service-redos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-expression-denial-of-service-redos"}},[e._v("#")]),e._v(" Regular expression Denial of Service (ReDoS)")]),e._v(" "),a("blockquote",[a("p",[e._v("The regular expression denial of service (ReDoS) is an algorithmic complexity attack that produces a denial-of-service by providing a regular expression that takes a very long time to evaluate. "),a("br"),a("br"),e._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/ReDoS",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReDoS - Wikipedia"),a("OutboundLink")],1)])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("This module uses the PCRE library to execute regular expressions. The PCRE library can specify the upper limit of the main loop counter at compile time and stop automatically when the upper limit is exceeded. The default limit is 500000. You can also adjust it manually at compile time, see the "),a("a",{attrs:{href:"https://www.pcre.org/current/doc/html/pcre2build.html#SEC11",target:"_blank",rel:"noopener noreferrer"}},[e._v("pcre2 build man page"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("This module caches all regular inspections (except POST inspections), so that the next time you encounter a string for an attack, you do not need to execute the regular expression again without triggering the cache cleanup process.")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);