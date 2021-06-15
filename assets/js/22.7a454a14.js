(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{398:function(e,t,a){"use strict";a.r(t);var s=a(44),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"advanced-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-rules"}},[e._v("#")]),e._v(" Advanced Rules")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("An advanced rule is a rule that contains both a condition and an action, and the corresponding action will be executed only when the specified condition is met. Advanced rules improve flexibility at the cost of performance.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("The relevant syntax is being designed, and we are looking forward to your suggestions.")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("The following example returns an HTTP status code 403 if the "),a("code",[e._v("url")]),e._v(" contains "),a("code",[e._v("/install")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("id: 'example'\nif: url contains '/install'\ndo: return\nstatus: 403\n")])])]),a("hr"),e._v(" "),a("p",[e._v("The following example indicates that if "),a("code",[e._v("user-agent")]),e._v(" does not contain "),a("code",[e._v("secret")]),e._v(" then the HTTP status code 403 is returned.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("id: 'example'\nif: user-agent not equals 'secret'\ndo: return \nstatus: 403\n")])])]),a("hr"),e._v(" "),a("p",[e._v("The following example shows that if "),a("code",[e._v("url")]),e._v(" matches the regular expression "),a("code",[e._v("^/admin")]),e._v(", or "),a("code",[e._v("user-agent")]),e._v(" is equal to "),a("code",[e._v("secret")]),e._v(", then all subsequent inspections will be stopped and let the request go.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("id: 'example'\nif: url matches '^/admin' || user-agent equals 'secret'\ndo: allow\n")])])]),a("h2",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("h3",{attrs:{id:"general-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-format"}},[e._v("#")]),e._v(" General format")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("id: 'value'\nif: condition\ndo: action\naction_paramter: value\n\nid: 'value'\nif: condition\ndo: action\naction_paramter: value\n")])])]),a("p",[e._v("Multiple rules are separated by at least one blank line.")]),e._v(" "),a("ul",[a("li",[e._v("id: identifier of the rule, which will be written to the log when triggered. Each rule can only have one ID, and one ID can be owned by multiple rules.")])]),e._v(" "),a("h3",{attrs:{id:"condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#condition"}},[e._v("#")]),e._v(" Condition")]),e._v(" "),a("p",[e._v("Here is the general format of condition.")]),e._v(" "),a("div",{staticClass:"language-bison extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bison"}},[a("code",[e._v("condition   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("    field comparison_operator "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'value'")]),e._v("\ncondition   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("    field logical_operator comparison_operator "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'value'")]),e._v("\ncondition   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("    condition "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" condition\ncondition   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("    condition "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("||")]),e._v(" condition\ncondition   "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),a("ul",[a("li",[e._v("field: currently contains only the following values.\n"),a("ul",[a("li",[e._v("url: The request path, without the query string.")]),e._v(" "),a("li",[e._v("user-agent: HTTP.Header.User-Agent.")])])]),e._v(" "),a("li",[e._v("comparison_operator: currently contains only the following values.\n"),a("ul",[a("li",[e._v("equals: equals.")]),e._v(" "),a("li",[e._v("contains: contains.")]),e._v(" "),a("li",[e._v("matches: Can be matched by regular expressions.")])])]),e._v(" "),a("li",[e._v("logical_operator: currently contains only the following values.\n"),a("ul",[a("li",[e._v("not: logical not.")])])]),e._v(" "),a("li",[e._v("&&: logical and.")]),e._v(" "),a("li",[e._v("||: logical or.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("String operations are case-sensitive unless otherwise specified.")])]),e._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[e._v("#")]),e._v(" Action")]),e._v(" "),a("p",[e._v("The following is the general format of an action.")]),e._v(" "),a("div",{staticClass:"language-bison extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bison"}},[a("code",[e._v("action  "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("->")]),e._v("  name\n")])])]),a("ul",[a("li",[e._v("name: currently contains only the following values.\n"),a("ul",[a("li",[e._v("return: Returns the specified http status code.")]),e._v(" "),a("li",[e._v("allow: stop all subsequent inspections and let the request go.")])])])]),e._v(" "),a("h3",{attrs:{id:"action-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-parameters"}},[e._v("#")]),e._v(" Action Parameters")]),e._v(" "),a("p",[e._v("When the action is "),a("code",[e._v("return")]),e._v(", you need to specify the following parameters.")]),e._v(" "),a("ul",[a("li",[e._v("status: An integer indicating the http status code to be returned.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);