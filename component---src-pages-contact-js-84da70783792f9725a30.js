(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"/uZM":function(e,t,a){e.exports={container:"layout-module--container--2TGku",content:"layout-module--content--3nIku"}},"5vEI":function(e,t,a){e.exports=a.p+"static/me-d6cad76a9bcbc69c4ae72a0731d270d0.png"},Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("cK5w"),l=a("Wbzz"),c=a("oEq0"),i=a("5vEI"),u=a.n(i),s=a("aOmW"),m=a.n(s),p=function(){o.data;return r.a.createElement("header",{className:m.a.header},r.a.createElement("nav",{className:m.a.navWrapper},r.a.createElement("a",{className:m.a.logo},r.a.createElement(l.Link,{className:m.a.navItem,activeClassName:m.a.activeNavItem,to:"/"},r.a.createElement("img",{className:m.a.meImg,src:u.a}))),r.a.createElement("ul",{className:m.a.navList},r.a.createElement("li",null,r.a.createElement(l.Link,{className:m.a.navItem,activeClassName:m.a.activeNavItem,to:"/"},"HOME")),r.a.createElement("li",null,r.a.createElement(c.AnchorLink,{className:m.a.navItem,activeClassName:m.a.activeNavItem,to:"/#about"},"ABOUT ME")),r.a.createElement("li",null,r.a.createElement(c.AnchorLink,{className:m.a.navItem,activeClassName:m.a.activeNavItem,to:"/#projects"},"PROJECTS")),r.a.createElement("li",null,r.a.createElement(l.Link,{className:m.a.navItem,activeClassName:m.a.activeNavItem,to:"/contact"},"CONTACT")))))},d=a("Mqgm"),f=a("SxA4"),E=a.n(f),h=(a("kp/A"),a("nEA/")),g=a.n(h),v=function(){var e=d.data;return r.a.createElement("div",{className:E.a.footerWrapper},r.a.createElement("img",{className:E.a.backgroundImg,src:g.a,alt:"background"}),r.a.createElement("div",{className:E.a.container},r.a.createElement("div",{className:E.a.left},r.a.createElement("h4",null,"NEED A DEVELOPER? ",r.a.createElement("br",null),"LET'S BUILD SOMETHING."),r.a.createElement(l.Link,{to:"/contact"},r.a.createElement("button",{className:E.a.footerButton},"GET IN TOUCH"))),r.a.createElement("ul",{className:E.a.listWrapper},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/symoon94",target:"_blank"},"GITHUB")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/sooyoung-moon/",target:"_blank"},"LINKEDIN")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/sooyoung__moon/",target:"_blank"},"INSTAGRAM")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/Sooyoung_Luna",target:"_blank"},"TWITTER")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/msy0128",target:"_blank"},"FACEBOOK")))),r.a.createElement("footer",{className:E.a.footer},r.a.createElement("p",null,"© Copyright 2020 − ",e.site.siteMetadata.author)))},N=(a("sg+I"),a("/uZM")),b=a.n(N);t.a=function(e){return r.a.createElement("div",{className:b.a.container},r.a.createElement(p,null),r.a.createElement("div",{className:b.a.content},e.children),r.a.createElement(v,null))}},"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=(a("5vEI"),a("Bl7J")),l=a("ZPPm"),c=a.n(l);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("h1",{className:"naviTitle"},"Contact"),r.a.createElement("div",{className:c.a.contactWrapper},r.a.createElement("h2",null,"LET'S BUILD A THING"),r.a.createElement("div",{className:c.a.contactContainer},r.a.createElement("form",{method:"post",action:"https://formspree.io/msy0128@gmail.com"},r.a.createElement("div",{className:c.a.inputGroup},r.a.createElement("label",{className:c.a.inputWrapper},r.a.createElement("input",{type:"text",name:"fisrtname",id:"fisrtname",placeholder:"FIRST NAME *"})),r.a.createElement("label",{className:c.a.inputWrapper},r.a.createElement("input",{type:"text",name:"lastname",id:"lastname",placeholder:"LAST NAME *"}))),r.a.createElement("div",{className:c.a.inputGroup},r.a.createElement("label",{className:c.a.inputWrapper},r.a.createElement("input",{type:"email",name:"email",id:"email",placeholder:"EMAIL *"})),r.a.createElement("label",{className:c.a.inputWrapper},r.a.createElement("input",{type:"text",name:"phone",id:"phone",placeholder:"PHONE"}))),r.a.createElement("div",{className:c.a.inputGroup},r.a.createElement("label",{className:c.a.inputWrapperLong},r.a.createElement("input",{type:"text",name:"subject",id:"subject",placeholder:"SUBJECT *"}))),r.a.createElement("div",{className:c.a.inputGroup},r.a.createElement("label",{className:c.a.inputWrapperLong},r.a.createElement("textarea",{name:"message",id:"message",rows:"5",placeholder:"MESSAGE *"}))),r.a.createElement("button",{type:"submit"},"SEND IT"),r.a.createElement("input",{type:"hidden",name:"_next",value:"https://symoon94.github.io/contact"}))))))}},F0uZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=i;var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n},o=a("Wbzz"),l=a("dj5g"),c=a("PDH8");function i(e){var t=e.to,a=e.title,n=e.children,c=e.className,i=e.stripHash,u=void 0!==i&&i,s={to:u?(0,l.stripHashedLocation)(t):t,onClick:function(e){return u?(0,l.handleStrippedLinkClick)(t,e):(0,l.handleLinkClick)(t,e)}};return a&&(s.title=a),c&&(s.className=c),r.default.createElement(o.Link,s,Boolean(n)?n:a)}i.propTypes=c.anchorLinkTypes},Mqgm:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Sooyoung Moon"}}}}')},PDH8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.anchorLinkTypes=void 0;var n,r=(n=a("17x9"))&&n.__esModule?n:{default:n};var o={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,children:r.default.node};t.anchorLinkTypes=o},SxA4:function(e,t,a){e.exports={footer:"footer-module--footer--R2bpz",backgroundImg:"footer-module--background-img--1tVAN",footerWrapper:"footer-module--footer-wrapper--3UKdQ",container:"footer-module--container--2Y5FL",listWrapper:"footer-module--list-wrapper--20YCE",left:"footer-module--left--2bV-p",footerButton:"footer-module--footer-button--19_yX"}},Wbzz:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",(function(){return f})),a.d(t,"StaticQueryContext",(function(){return s})),a.d(t,"StaticQuery",(function(){return p})),a.d(t,"useStaticQuery",(function(){return d})),a.d(t,"prefetchPathname",(function(){return u}));a("xfY5");var n=a("q1tI"),r=a.n(n),o=a("+ZDr"),l=a.n(o);a.d(t,"Link",(function(){return l.a})),a.d(t,"withAssetPrefix",(function(){return o.withAssetPrefix})),a.d(t,"withPrefix",(function(){return o.withPrefix})),a.d(t,"parsePath",(function(){return o.parsePath})),a.d(t,"navigate",(function(){return o.navigate})),a.d(t,"push",(function(){return o.push})),a.d(t,"replace",(function(){return o.replace})),a.d(t,"navigateTo",(function(){return o.navigateTo}));var c=a("lw3w"),i=a.n(c);a.d(t,"PageRenderer",(function(){return i.a}));var u=a("emEt").default.enqueue,s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&o(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(s.Consumer,null,(function(e){return r.a.createElement(m,{data:t,query:a,render:n||o,staticQueryData:e})}))},d=function(e){r.a.useContext;var t=r.a.useContext(s);if(isNaN(Number(e)))throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+e+"`);\n");if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away. Unfortunately, something went wrong and the query was left in the compiled code.\n\nUnless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}},ZPPm:function(e,t,a){e.exports={contactImg:"contact-module--contact-img--3-akQ",contactWrapper:"contact-module--contact-wrapper--2WLVs",contactContainer:"contact-module--contact-container--22-w8",inputGroup:"contact-module--input-group--tZfT4",inputWrapper:"contact-module--input-wrapper--gPgpS",inputWrapperLong:"contact-module--input-wrapper-long--3Qlzb"}},aOmW:function(e,t,a){e.exports={header:"header-module--header--3A712",title:"header-module--title--33kOg",navWrapper:"header-module--nav-wrapper--33ske",logo:"header-module--logo--dkMqu",meImg:"header-module--me-img--1yvdX",navList:"header-module--nav-list--87D9u",navItem:"header-module--nav-item--1ixk0"}},cK5w:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Sooyoung Moon"}}}}')},"kp/A":function(e,t,a){e.exports={home:"home-module--home--2wMD0",backgroundImg:"home-module--background-img--2KXPu",root:"home-module--root--2stqD",homeText:"home-module--home-text--2J0wS"}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},"nEA/":function(e,t,a){e.exports=a.p+"static/foot-db83e6e7d1b5d400e78e25fc04f460e3.png"},oEq0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AnchorLink",{enumerable:!0,get:function(){return n.AnchorLink}});var n=a("F0uZ")},qncB:function(e,t,a){var n=a("XKFU"),r=a("vhPU"),o=a("eeVq"),l=a("/e88"),c="["+l+"]",i=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),s=function(e,t,a){var r={},c=o((function(){return!!l[e]()||"​"!="​"[e]()})),i=r[e]=c?t(m):l[e];a&&(r[a]=i),n(n.P+n.F*c,"String",r)},m=s.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(u,"")),e};e.exports=s},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var n=a("q1tI"),r=a.n(n),o=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},"sg+I":function(e,t,a){},xfY5:function(e,t,a){"use strict";var n=a("dyZX"),r=a("aagx"),o=a("LZWt"),l=a("Xbzi"),c=a("apmT"),i=a("eeVq"),u=a("kJMx").f,s=a("EemH").f,m=a("hswa").f,p=a("qncB").trim,d=n.Number,f=d,E=d.prototype,h="Number"==o(a("Kuth")(E)),g="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var a,n,r,o=(t=g?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+t}for(var l,i=t.slice(2),u=0,s=i.length;u<s;u++)if((l=i.charCodeAt(u))<48||l>r)return NaN;return parseInt(i,n)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof d&&(h?i((function(){E.valueOf.call(a)})):"Number"!=o(a))?l(new f(v(t)),a,d):v(t)};for(var N,b=a("nh4g")?u(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;b.length>y;y++)r(f,N=b[y])&&!r(d,N)&&m(d,N,s(f,N));d.prototype=E,E.constructor=d,a("KroJ")(n,"Number",d)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-84da70783792f9725a30.js.map