(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["work"],{"411e":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("577e"),o=r("5899"),i="["+o+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(t){return function(e){var r=a(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var o,i;return a&&"function"==typeof(o=e.constructor)&&o!==r&&n(i=o.prototype)&&i!==r.prototype&&a(t,i),t}},7405:function(t,e,r){},7904:function(t,e,r){"use strict";r("411e")},"99af":function(t,e,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),c=r("50c4"),u=r("8418"),f=r("65f0"),l=r("1dde"),d=r("b622"),p=r("2d00"),b=d("isConcatSpreadable"),v=9007199254740991,_="Maximum allowed index exceeded",h=p>=51||!a((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),m=l("concat"),k=function(t){if(!i(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},g=!h||!m;n({target:"Array",proto:!0,forced:g},{concat:function(t){var e,r,n,a,o,i=s(this),l=f(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],k(o)){if(a=c(o.length),d+a>v)throw TypeError(_);for(r=0;r<a;r++,d++)r in o&&u(l,d,o[r])}else{if(d>=v)throw TypeError(_);u(l,d++,o)}return l.length=d,l}})},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),o=r("94ca"),i=r("6eeb"),s=r("5135"),c=r("c6b6"),u=r("7156"),f=r("d9b5"),l=r("c04e"),d=r("d039"),p=r("7c73"),b=r("241c").f,v=r("06cf").f,_=r("9bf2").f,h=r("58a8").trim,m="Number",k=a[m],g=k.prototype,j=c(p(g))==m,w=function(t){if(f(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,a,o,i,s,c,u=l(t,"number");if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(o=u.slice(2),i=o.length,s=0;s<i;s++)if(c=o.charCodeAt(s),c<48||c>a)return NaN;return parseInt(o,n)}return+u};if(o(m,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var E,N=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof N&&(j?d((function(){g.valueOf.call(r)})):c(r)!=m)?u(new k(w(e)),r,N):w(e)},I=n?b(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),y=0;I.length>y;y++)s(k,E=I[y])&&!s(N,E)&&_(N,E,v(k,E));N.prototype=g,g.constructor=N,i(a,m,N)}},cde9:function(t,e,r){"use strict";r("7405")},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),i=o("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},db69:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("router-link",{attrs:{to:"/work"}},[r("span",{staticClass:"iconlink"},[t._v("↩")])]),t.data?r("div",[t.data.title?r("fragment",[r("h1",[t._v(t._s(t.data.title))]),t.data.link?r("a",{attrs:{href:t.data.link}},[r("h2",[t._v(t._s(t.data.org))])]):r("h1",[t._v(t._s(t.data.org))]),r("h2",[t._v(t._s(t.data.project))])]):r("fragment",[t.data.link?r("a",{attrs:{href:t.data.link}},[r("h1",[t._v(t._s(t.data.project))])]):r("h1",[t._v(t._s(t.data.project))]),r("h2",[t._v(t._s(t.data.org))])]),r("h2",[t._v(t._s(t.data.span))]),r("ul",t._l(t.data.details,(function(e,n){return r("li",{key:n},[t._v(" "+t._s(e)+" ")])})),0)],1):r("h1",[t._v("no job here :(")])],1)},a=[],o=r("3f08"),i={name:"WorkSingle",props:{data:Object},components:{Fragment:o["a"]}},s=i,c=r("2877"),u=Object(c["a"])(s,n,a,!1,null,null,null);e["default"]=u.exports},f18b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content worklist"},[r("Header",{attrs:{title:"Work History",subtitle:"& Selected Projects"}}),r("div",{staticClass:"wrapper"},t._l(t.combinedWorkAndProjects,(function(t){return r("WorkTile",{key:t.work.id,attrs:{job:t.work,isjob:t.isJob}})})),1),r("ResumeDL")],1)},a=[],o=(r("99af"),r("d81d"),r("0418")),i=r("394d"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tile"},[r("div",{staticClass:"timespan"},[t._v(t._s(t.job.span))]),r("router-link",{attrs:{to:{name:"worksingle",params:{id:t.job.url}}}},[t._v(t._s(t.isjob?t.job.org:t.job.project))])],1)},c=[],u=(r("a9e3"),{name:"WorkTile",props:{id:Number,job:Object,isjob:Boolean}}),f=u,l=(r("7904"),r("2877")),d=Object(l["a"])(f,s,c,!1,null,"cbb5a296",null),p=d.exports,b={props:{data:Object},name:"WorkList",components:{Header:o["a"],ResumeDL:i["a"],WorkTile:p},computed:{combinedWorkAndProjects:function(){return this.data.jobs.map((function(t){return{work:t,isJob:!0}})).concat(this.data.projects.map((function(t){return{work:t,isJob:!1}})))}}},v=b,_=(r("cde9"),Object(l["a"])(v,n,a,!1,null,"5cc3afaf",null));e["default"]=_.exports}}]);
//# sourceMappingURL=work.0d5e8f00.js.map