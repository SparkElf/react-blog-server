var re=Object.create;var R=Object.defineProperty;var oe=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var m=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var se=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ne(t))!ae.call(e,i)&&i!==o&&R(e,i,{get:()=>t[i],enumerable:!(r=oe(t,i))||r.enumerable});return e};var le=(e,t,o)=>(o=e!=null?re(ie(e)):{},se(t||!e||!e.__esModule?R(o,"default",{value:e,enumerable:!0}):o,e));var k=m((Oe,P)=>{"use strict";var I=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;function fe(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function he(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},o=0;o<10;o++)t["_"+String.fromCharCode(o)]=o;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(a){i[a]=a}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}P.exports=he()?Object.assign:function(e,t){for(var o,r=fe(e),i,a=1;a<arguments.length;a++){o=Object(arguments[a]);for(var l in o)ue.call(o,l)&&(r[l]=o[l]);if(I){i=I(o);for(var u=0;u<i.length;u++)ce.call(o,i[u])&&(r[i[u]]=o[i[u]])}}return r}});var W=m(s=>{"use strict";var j=k(),p=60103,D=60106;s.Fragment=60107;s.StrictMode=60108;s.Profiler=60114;var q=60109,N=60110,B=60112;s.Suspense=60113;var L=60115,A=60116;typeof Symbol=="function"&&Symbol.for&&(f=Symbol.for,p=f("react.element"),D=f("react.portal"),s.Fragment=f("react.fragment"),s.StrictMode=f("react.strict_mode"),s.Profiler=f("react.profiler"),q=f("react.provider"),N=f("react.context"),B=f("react.forward_ref"),s.Suspense=f("react.suspense"),L=f("react.memo"),A=f("react.lazy"));var f,C=typeof Symbol=="function"&&Symbol.iterator;function de(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};function y(e,t,o){this.props=e,this.context=t,this.refs=F,this.updater=o||M}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=y.prototype;function O(e,t,o){this.props=e,this.context=t,this.refs=F,this.updater=o||M}var x=O.prototype=new U;x.constructor=O;j(x,y.prototype);x.isPureReactComponent=!0;var S={current:null},V=Object.prototype.hasOwnProperty,Y={key:!0,ref:!0,__self:!0,__source:!0};function z(e,t,o){var r,i={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)V.call(t,r)&&!Y.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=o;else if(1<u){for(var c=Array(u),h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:p,type:e,key:a,ref:l,props:i,_owner:S.current}}function pe(e,t){return{$$typeof:p,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===p}function ye(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var $=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ye(""+e.key):t.toString(36)}function w(e,t,o,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case p:case D:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+_(l,0):r,Array.isArray(i)?(o="",e!=null&&(o=e.replace($,"$&/")+"/"),w(i,t,o,"",function(h){return h})):i!=null&&(E(i)&&(i=pe(i,o+(!i.key||l&&l.key===i.key?"":(""+i.key).replace($,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){a=e[u];var c=r+_(a,u);l+=w(a,t,o,c,i)}else if(c=de(e),typeof c=="function")for(e=c.call(e),u=0;!(a=e.next()).done;)a=a.value,c=r+_(a,u++),l+=w(a,t,o,c,i);else if(a==="object")throw t=""+e,Error(g(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function b(e,t,o){if(e==null)return e;var r=[],i=0;return w(e,r,"","",function(a){return t.call(o,a,i++)}),r}function me(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(o){e._status===0&&(o=o.default,e._status=1,e._result=o)},function(o){e._status===0&&(e._status=2,e._result=o)})}if(e._status===1)return e._result;throw e._result}var H={current:null};function d(){var e=H.current;if(e===null)throw Error(g(321));return e}var ge={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:j};s.Children={map:b,forEach:function(e,t,o){b(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return b(e,function(){t++}),t},toArray:function(e){return b(e,function(t){return t})||[]},only:function(e){if(!E(e))throw Error(g(143));return e}};s.Component=y;s.PureComponent=O;s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge;s.cloneElement=function(e,t,o){if(e==null)throw Error(g(267,e));var r=j({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=S.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)V.call(t,c)&&!Y.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=o;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:p,type:e.type,key:i,ref:a,props:r,_owner:l}};s.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:N,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:q,_context:e},e.Consumer=e};s.createElement=z;s.createFactory=function(e){var t=z.bind(null,e);return t.type=e,t};s.createRef=function(){return{current:null}};s.forwardRef=function(e){return{$$typeof:B,render:e}};s.isValidElement=E;s.lazy=function(e){return{$$typeof:A,_payload:{_status:-1,_result:e},_init:me}};s.memo=function(e,t){return{$$typeof:L,type:e,compare:t===void 0?null:t}};s.useCallback=function(e,t){return d().useCallback(e,t)};s.useContext=function(e,t){return d().useContext(e,t)};s.useDebugValue=function(){};s.useEffect=function(e,t){return d().useEffect(e,t)};s.useImperativeHandle=function(e,t,o){return d().useImperativeHandle(e,t,o)};s.useLayoutEffect=function(e,t){return d().useLayoutEffect(e,t)};s.useMemo=function(e,t){return d().useMemo(e,t)};s.useReducer=function(e,t,o){return d().useReducer(e,t,o)};s.useRef=function(e){return d().useRef(e)};s.useState=function(e){return d().useState(e)};s.version="17.0.2"});var J=m((Se,G)=>{"use strict";G.exports=W()});var Q=m(v=>{"use strict";k();var ve=J(),X=60103;v.Fragment=60107;typeof Symbol=="function"&&Symbol.for&&(T=Symbol.for,X=T("react.element"),v.Fragment=T("react.fragment"));var T,be=ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,we=Object.prototype.hasOwnProperty,ke={key:!0,ref:!0,__self:!0,__source:!0};function K(e,t,o){var r,i={},a=null,l=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)we.call(t,r)&&!ke.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:X,type:e,key:a,ref:l,props:i,_owner:be.current}}v.jsx=K;v.jsxs=K});var ee=m((Te,Z)=>{"use strict";Z.exports=Q()});var n=le(ee(),1);var te=function({text:e}){return React.createElement("p",{className:"brief"},e)};function _e(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(o,{})})):o();function o(){let r=Object.assign({p:"p",h3:"h3",ul:"ul",li:"li",hr:"hr",a:"a",pre:"pre",code:"code"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(te,{text:"Just some advice I would give to my younger self today."}),`
`,(0,n.jsx)(r.p,{children:"This post is supposed to be a self reflection on things I failed on or learned along the way, but it might also work well for any developers that are starting out on this business. There is a big mix of topics not in any specific order."}),`
`,(0,n.jsx)(r.h3,{children:"The list \u{1F447}"}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:"Be curious. Be proactive on asking questions. Don't be afraid of feeling dumb or exposing yourself. Your team mates are not there for judging you, and they might also not know many things."}),`
`,(0,n.jsx)(r.li,{children:"Be humble, accept knowledge and suggestions. Never be cocky. Listen, understand and apply the feedback even if you didn't ask for it."}),`
`,(0,n.jsx)(r.li,{children:"Don't be too defensive about code. It's just code. And you'll not care much as soon as you leave the office, so it is not worth it."}),`
`,(0,n.jsx)(r.li,{children:"Don't fight unnecessary battles. They'll end up undermining the team's mood and motivation. Pick battles that are worth it for the overall team progress."}),`
`,(0,n.jsx)(r.li,{children:"Read tech books if you enjoy doing it, ask for good book recommendations."}),`
`,(0,n.jsx)(r.li,{children:"Create, have side projects. They can boost your motivation and creativity a lot. They also help to try things out. Putting your hands into something teaches more than reading a thousand articles or books."}),`
`,(0,n.jsx)(r.li,{children:"This might sound contrary to the previous points, but do those things only while you still enjoy. Use them as a hobby, never as an obligation. The moment it starts feeling like work, do a hard stop \u{1F645}\u200D\u2642\uFE0F"}),`
`,(0,n.jsx)(r.li,{children:"Find hobbies unrelated to programming. I'm learning to play the piano and use to exercise for example. This makes a huge difference at the end of the day."}),`
`,(0,n.jsx)(r.li,{children:"Don't push yourself too hard. You don't need to be good at everything."}),`
`,(0,n.jsx)(r.li,{children:"Don\u2019t be hard at you if you fail at work, or your team mate had to explain you something. Tomorrow will be better. One more time, you don\u2019t need to be the best on everything every single day."}),`
`,(0,n.jsx)(r.li,{children:"Don\u2019t be too competitive or ambitious. Learn about the good values along the way. A bit can be good, but being too competitive leads to frustration when your end goals are not fulfilled."}),`
`,(0,n.jsx)(r.li,{children:"Learn to identify and find devs more experienced than you and ways to work with them (professionally or not). Ask them for advice, use them as mentors somehow."}),`
`,(0,n.jsx)(r.li,{children:"Be empathetic with everyone. Specially on the days you feel down. Many times a not very communicative developer is actually a person with a personal issue. Work on your communication with this person, more improvements will come later."}),`
`,(0,n.jsx)(r.li,{children:"Use your initial years as a professional to build up a career. Responsibilities you need to take care of likely grow with your age. Always keeping an eye on your mental health ofc."}),`
`,(0,n.jsx)(r.li,{children:"Don\u2019t be scared of moving abroad, or even just to a different region within your country. Live other cultures."}),`
`,(0,n.jsx)(r.li,{children:"Never be afraid of sharing knowledge. There will always be a person taking good value of it."}),`
`,(0,n.jsx)(r.li,{children:"Embrace failure. Fail as many times as you need to learn something."}),`
`,(0,n.jsx)(r.li,{children:"Shipping and delivering is always better than perfect."}),`
`,(0,n.jsx)(r.li,{children:"Hear your business people. Be empathetic with the company needs, make it happen. Deliver if you said you\u2019d deliver. That\u2019ll earn you value."}),`
`,(0,n.jsx)(r.li,{children:"Learn to axe stuff. Removing code or features can be very positive ultimately for both developer quality of life and the product (if that\u2019s your thing)."}),`
`,(0,n.jsx)(r.li,{children:"Relax. Life is not work, it actually happens outside of it. Learn to separate things well. It\u2019s great to have a good relationship with your workmates, but your family is at home."}),`
`,(0,n.jsx)(r.li,{children:"Once you feel fed up, consider moving back to your hometown and work remotely if you have the chance. That\u2019ll help you to stay closer to who you really are, and your people."}),`
`,(0,n.jsx)(r.li,{children:"Expose your progress, highlight it, make it visible to managers. They will not remember everything you did right when the time comes since they have other priorities also, and probably a lot of people to care of."}),`
`,(0,n.jsx)(r.li,{children:"Ask for salary raises or any other perks when you feel you deserve it. Many companies will negotiate an initial salary for you and keep it like that forever if you don\u2019t explicitly ask again. They\u2019ll assume you are happy with it."}),`
`,(0,n.jsx)(r.li,{children:"The same but the other way around: learn to identify when you are underperforming and you don\u2019t deserve more. We are sometimes all about our rights but, are we providing enough value to the company? Both points of view are equally relevant to make things work."}),`
`,(0,n.jsx)(r.li,{children:"Your mental health always goes first. If you are not happy somewhere and you have an option to leave and move to something more appealing to you, do it. Don\u2019t waste your time or put your mental health in risk for the wrong reasons. No money or perk can pay for that."}),`
`,(0,n.jsx)(r.li,{children:"Take care about yourself. Exercise, eat well, sleep well. There is no work or project that is worth not doing this."}),`
`,(0,n.jsx)(r.li,{children:"Give high priority to improve work-life balance. Things like salary are great but remote work, free time and working hours flexibility can have an invaluable impact on your happiness."}),`
`,(0,n.jsx)(r.li,{children:"Do one thing at a time, and do it well. Be an example for your team mates. Multitasking or spamming a thousand PRs might not be worth it, neither pushing code to production on day 1. Bragging about these things is stupid."}),`
`,(0,n.jsx)(r.li,{children:"Never accept crunch if you are able to. It can\u2019t yield any positive outcome under any possible scenario."}),`
`,(0,n.jsx)(r.li,{children:"Don\u2019t be afraid of saying no. To unrealistic deadlines, to estimations with no clear requirements, to too ambitious features. Don\u2019t push yourself to say yes and then work twice as hard to make it happen. That will drain you fast."}),`
`,(0,n.jsx)(r.li,{children:"In the same way, learn to provide alternative paths. Saying no might save you from burnout, but maybe you can help to reprioritize and provide a shortcut or a more desirable way to achieve the same or similar goals."}),`
`,(0,n.jsx)(r.li,{children:"Be communicative. Rancor and isolation can\u2019t lead to anything good. Don\u2019t hide your feelings. If you\u2019re not happy about something, tell your lead / manager / whatever, and keep telling her/him on every 1on1 if it is not addressed."}),`
`,(0,n.jsx)(r.li,{children:"Be positive and productive when reviewing code. Think on being unlocker rather than blocker. It doesn\u2019t make any sense to block progress because of a variable name. Leave a suggestion, approve."}),`
`,(0,n.jsx)(r.li,{children:"Leverage one of the biggest advantages we have in our profession: interact and learn from people from other countries and cultures."}),`
`]}),`
`,(0,n.jsx)(r.p,{children:"And for sure I\u2019m forgetting a ton of things. I\u2019ll probably keep adding more."}),`
`,(0,n.jsx)(r.p,{children:"Most of these tips I still need to repeat to me today. Theory on things is great, reality is always different and applying these becomes harder many days. So feel free to use it as a cheatsheet and come back every now and then if it works well for you. I will definitely need to."}),`
`,(0,n.jsx)(r.p,{children:"Thanks for reading! \u{1F64C}"}),`
`,(0,n.jsx)(r.hr,{}),`
`,(0,n.jsxs)(r.p,{children:["I also share thoughts and ideas ",(0,n.jsx)(r.a,{href:"http://localhost:9999/artical/1",children:"on Twitter"})," quite regularly. You can also find me on Instagram. See you there!"]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:`console.log('5')
`})}),`
`,(0,n.jsx)(r.p,{children:"More interesting stuff to come \u{1F64C}"})]})}}var Pe=_e;export{Pe as default};
