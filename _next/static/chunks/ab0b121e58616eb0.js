(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var a=e.i(71645);let i=e=>{let a=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,i)=>i?i.toUpperCase():a.toLowerCase());return a.charAt(0).toUpperCase()+a.slice(1)},r=(...e)=>e.filter((e,a,i)=>!!e&&""!==e.trim()&&i.indexOf(e)===a).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let t=(0,a.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:t=2,absoluteStrokeWidth:l,className:d="",children:s,iconNode:o,...u},m)=>(0,a.createElement)("svg",{ref:m,...n,width:i,height:i,stroke:e,strokeWidth:l?24*Number(t)/Number(i):t,className:r("lucide",d),...!s&&!(e=>{for(let a in e)if(a.startsWith("aria-")||"role"===a||"title"===a)return!0})(u)&&{"aria-hidden":"true"},...u},[...o.map(([e,i])=>(0,a.createElement)(e,i)),...Array.isArray(s)?s:[s]])),l=(e,n)=>{let l=(0,a.forwardRef)(({className:l,...d},s)=>(0,a.createElement)(t,{ref:s,iconNode:n,className:r(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,l),...d}));return l.displayName=i(e),l};e.s(["default",()=>l],75254)},88143,(e,a,i)=>{"use strict";function r({widthInt:e,heightInt:a,blurWidth:i,blurHeight:r,blurDataURL:n,objectFit:t}){let l=i?40*i:e,d=r?40*r:a,s=l&&d?`viewBox='0 0 ${l} ${d}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${s}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${s?"none":"contain"===t?"xMidYMid":"cover"===t?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},87690,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return t},imageConfigDefault:function(){return l}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let t=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return o}}),e.r(33525);let r=e.r(43369),n=e.r(88143),t=e.r(87690),l=["-moz-initial","fill","none","scale-down",void 0];function d(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o({src:e,sizes:a,unoptimized:i=!1,priority:o=!1,preload:u=!1,loading:m,className:c,quality:f,width:k,height:x,fill:y=!1,style:p,overrideSrc:g,onLoad:b,onLoadingComplete:h,placeholder:z="empty",blurDataURL:v,fetchPriority:A,decoding:S="async",layout:j,objectFit:P,objectPosition:w,lazyBoundary:C,lazyRoot:M,...E},N){var T;let _,D,R,{imgConf:I,showAltText:B,blurComplete:O,defaultLoader:G}=N,H=I||t.imageConfigDefault;if("allSizes"in H)_=H;else{let e=[...H.deviceSizes,...H.imageSizes].sort((e,a)=>e-a),a=H.deviceSizes.sort((e,a)=>e-a),i=H.qualities?.sort((e,a)=>e-a);_={...H,allSizes:e,deviceSizes:a,qualities:i}}if(void 0===G)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let K=E.loader||G;delete E.loader,delete E.srcSet;let V="__next_img_default"in K;if(V){if("custom"===_.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=K;K=a=>{let{config:i,...r}=a;return e(r)}}if(j){"fill"===j&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(p={...p,...e});let i={responsive:"100vw",fill:"100vw"}[j];i&&!a&&(a=i)}let L="",U=s(k),F=s(x);if((T=e)&&"object"==typeof T&&(d(T)||void 0!==T.src)){let a=d(e)?e.default:e;if(!a.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(a)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!a.height||!a.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(a)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(D=a.blurWidth,R=a.blurHeight,v=v||a.blurDataURL,L=a.src,!y)if(U||F){if(U&&!F){let e=U/a.width;F=Math.round(a.height*e)}else if(!U&&F){let e=F/a.height;U=Math.round(a.width*e)}}else U=a.width,F=a.height}let Y=!o&&!u&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:L)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,Y=!1),_.unoptimized&&(i=!0),V&&!_.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let $=s(f),q=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:w}:{},B?{}:{color:"transparent"},p),W=O||"empty"===z?null:"blur"===z?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:U,heightInt:F,blurWidth:D,blurHeight:R,blurDataURL:v||"",objectFit:q.objectFit})}")`:`url("${z}")`,X=l.includes(q.objectFit)?"fill"===q.objectFit?"100% 100%":"cover":q.objectFit,Z=W?{backgroundSize:X,backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},Q=function({config:e,src:a,unoptimized:i,width:n,quality:t,sizes:l,loader:d}){if(i){let e=(0,r.getDeploymentId)();if(a.startsWith("/")&&!a.startsWith("//")&&e){let i=a.includes("?")?"&":"?";a=`${a}${i}dpl=${e}`}return{src:a,srcSet:void 0,sizes:void 0}}let{widths:s,kind:o}=function({deviceSizes:e,allSizes:a},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=i.exec(r);)n.push(parseInt(e[2]));if(n.length){let i=.01*Math.min(...n);return{widths:a.filter(a=>a>=e[0]*i),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>a.find(a=>a>=e)||a[a.length-1]))],kind:"x"}}(e,n,l),u=s.length-1;return{sizes:l||"w"!==o?l:"100vw",srcSet:s.map((i,r)=>`${d({config:e,src:a,quality:t,width:i})} ${"w"===o?i:r+1}${o}`).join(", "),src:d({config:e,src:a,quality:t,width:s[u]})}}({config:_,src:e,unoptimized:i,width:U,quality:$,sizes:a,loader:K}),J=Y?"lazy":m;return{props:{...E,loading:J,fetchPriority:A,width:U,height:F,decoding:S,className:c,style:{...q,...Z},sizes:Q.sizes,srcSet:Q.srcSet,src:g||Q.src},meta:{unoptimized:i,preload:u||o,placeholder:z,fill:y}}}},98879,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return d}});let r=e.r(71645),n="undefined"==typeof window,t=n?()=>{}:r.useLayoutEffect,l=n?()=>{}:r.useEffect;function d(e){let{headManager:a,reduceComponentsToState:i}=e;function d(){if(a&&a.mountedInstances){let e=r.Children.toArray(Array.from(a.mountedInstances).filter(Boolean));a.updateHead(i(e))}}return n&&(a?.mountedInstances?.add(e.children),d()),t(()=>(a?.mountedInstances?.add(e.children),()=>{a?.mountedInstances?.delete(e.children)})),t(()=>(a&&(a._pendingUpdate=d),()=>{a&&(a._pendingUpdate=d)})),l(()=>(a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null),()=>{a&&a._pendingUpdate&&(a._pendingUpdate(),a._pendingUpdate=null)})),null}},25633,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return x},defaultHead:function(){return m}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let t=e.r(55682),l=e.r(90809),d=e.r(43476),s=l._(e.r(71645)),o=t._(e.r(98879)),u=e.r(42732);function m(){return[(0,d.jsx)("meta",{charSet:"utf-8"},"charset"),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function c(e,a){return"string"==typeof a||"number"==typeof a?e:a.type===s.default.Fragment?e.concat(s.default.Children.toArray(a.props.children).reduce((e,a)=>"string"==typeof a||"number"==typeof a?e:e.concat(a),[])):e.concat(a)}e.r(33525);let f=["name","httpEquiv","charSet","itemProp"];function k(e){let a,i,r,n;return e.reduce(c,[]).reverse().concat(m().reverse()).filter((a=new Set,i=new Set,r=new Set,n={},e=>{let t=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;let i=e.key.slice(e.key.indexOf("$")+1);a.has(i)?t=!1:a.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(let a=0,i=f.length;a<i;a++){let i=f[a];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?t=!1:r.add(i);else{let a=e.props[i],r=n[i]||new Set;("name"!==i||!l)&&r.has(a)?t=!1:(r.add(a),n[i]=r)}}}return t})).reverse().map((e,a)=>{let i=e.key||a;return s.default.cloneElement(e,{key:i})})}let x=function({children:e}){let a=(0,s.useContext)(u.HeadManagerContext);return(0,d.jsx)(o.default,{reduceComponentsToState:k,headManager:a,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),a.exports=i.default)},18556,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return t}});let r=e.r(55682)._(e.r(71645)),n=e.r(87690),t=r.default.createContext(n.imageConfigDefault)},65856,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,a,i)=>{"use strict";function r(e,a){let i=e||75;return a?.qualities?.length?a.qualities.reduce((e,a)=>Math.abs(a-i)<Math.abs(e-i)?a:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let r=e.r(70965),n=e.r(43369);function t({config:e,src:a,width:i,quality:t}){if(a.startsWith("/")&&a.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${a}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,r.findClosestQuality)(t,e),d=(0,n.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(a)}&w=${i}&q=${l}${a.startsWith("/")&&d?`&dpl=${d}`:""}`}t.__next_img_default=!0;let l=t},85437,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return h}});let r=e.r(55682),n=e.r(90809),t=e.r(43476),l=n._(e.r(71645)),d=r._(e.r(74080)),s=r._(e.r(25633)),o=e.r(8927),u=e.r(87690),m=e.r(18556);e.r(33525);let c=e.r(65856),f=r._(e.r(1948)),k=e.r(18581),x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e,a,i,r,n,t,l){let d=e?.src;e&&e["data-loaded-src"]!==d&&(e["data-loaded-src"]=d,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==a&&n(!0),i?.current){let a=new Event("load");Object.defineProperty(a,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...a,nativeEvent:a,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,a.preventDefault()},stopPropagation:()=>{n=!0,a.stopPropagation()}})}r?.current&&r.current(e)}}))}function p(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g=(0,l.forwardRef)(({src:e,srcSet:a,sizes:i,height:r,width:n,decoding:d,className:s,style:o,fetchPriority:u,placeholder:m,loading:c,unoptimized:f,fill:x,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:h,setShowAltText:z,sizesInput:v,onLoad:A,onError:S,...j},P)=>{let w=(0,l.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&y(e,m,g,b,h,f,v))},[e,m,g,b,h,S,f,v]),C=(0,k.useMergedRef)(P,w);return(0,t.jsx)("img",{...j,...p(u),loading:c,width:n,height:r,decoding:d,"data-nimg":x?"fill":"1",className:s,style:o,sizes:i,srcSet:a,src:e,ref:C,onLoad:e=>{y(e.currentTarget,m,g,b,h,f,v)},onError:e=>{z(!0),"empty"!==m&&h(!0),S&&S(e)}})});function b({isAppRouter:e,imgAttributes:a}){let i={as:"image",imageSrcSet:a.srcSet,imageSizes:a.sizes,crossOrigin:a.crossOrigin,referrerPolicy:a.referrerPolicy,...p(a.fetchPriority)};return e&&d.default.preload?(d.default.preload(a.src,i),null):(0,t.jsx)(s.default,{children:(0,t.jsx)("link",{rel:"preload",href:a.srcSet?void 0:a.src,...i},"__nimg-"+a.src+a.srcSet+a.sizes)})}let h=(0,l.forwardRef)((e,a)=>{let i=(0,l.useContext)(c.RouterContext),r=(0,l.useContext)(m.ImageConfigContext),n=(0,l.useMemo)(()=>{let e=x||r||u.imageConfigDefault,a=[...e.deviceSizes,...e.imageSizes].sort((e,a)=>e-a),i=e.deviceSizes.sort((e,a)=>e-a),n=e.qualities?.sort((e,a)=>e-a);return{...e,allSizes:a,deviceSizes:i,qualities:n,localPatterns:"undefined"==typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:d,onLoadingComplete:s}=e,k=(0,l.useRef)(d);(0,l.useEffect)(()=>{k.current=d},[d]);let y=(0,l.useRef)(s);(0,l.useEffect)(()=>{y.current=s},[s]);let[p,h]=(0,l.useState)(!1),[z,v]=(0,l.useState)(!1),{props:A,meta:S}=(0,o.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:p,showAltText:z});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{...A,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:k,onLoadingCompleteRef:y,setBlurComplete:h,setShowAltText:v,sizesInput:e.sizes,ref:a}),S.preload?(0,t.jsx)(b,{isAppRouter:!i,imgAttributes:A}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),a.exports=i.default)},94909,(e,a,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return u},getImageProps:function(){return o}};for(var n in r)Object.defineProperty(i,n,{enumerable:!0,get:r[n]});let t=e.r(55682),l=e.r(8927),d=e.r(85437),s=t._(e.r(1948));function o(e){let{props:a}=(0,l.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(a))void 0===i&&delete a[e];return{props:a}}let u=d.Image},57688,(e,a,i)=>{a.exports=e.r(94909)},63921,e=>{"use strict";let a=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["default",()=>a])},51263,e=>{"use strict";var a=e.i(43476),i=e.i(75157),r=e.i(48148);function n({className:e}){let n=(0,r.useTranslations)("Blog");return(0,a.jsxs)("section",{className:(0,i.cn)("relative py-16 md:py-24","overflow-hidden",e),children:[(0,a.jsxs)("div",{className:"absolute inset-0 -z-10",children:[(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-neutral-50 to-transparent dark:from-neutral-950 dark:to-transparent"}),(0,a.jsx)("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 blur-3xl"})]}),(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[(0,a.jsxs)("div",{className:"inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur px-4 py-1.5 mb-6",children:[(0,a.jsxs)("span",{className:"relative flex h-2 w-2",children:[(0,a.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),(0,a.jsx)("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),(0,a.jsx)("span",{className:"text-sm font-medium text-neutral-600 dark:text-neutral-400",children:"Fresh Content"})]}),(0,a.jsx)("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-4",children:n("title")}),(0,a.jsx)("p",{className:"text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto",children:n("subtitle")}),(0,a.jsxs)("div",{className:"mt-12 flex justify-center gap-2",children:[(0,a.jsx)("div",{className:"h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700"}),(0,a.jsx)("div",{className:"h-1 w-16 rounded-full bg-neutral-400 dark:bg-neutral-600"}),(0,a.jsx)("div",{className:"h-1 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700"})]})]})]})}var t=e.i(44705),l=e.i(75254);let d=(0,l.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),s=(0,l.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var o=e.i(63921),o=o,u=e.i(57688);function m({post:e,className:n}){let l=(0,r.useTranslations)("Blog"),m=new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return(0,a.jsxs)(t.Link,{href:`/blog/${e.slug}`,className:(0,i.cn)("group relative flex flex-col overflow-hidden rounded-2xl","bg-white dark:bg-neutral-900","border border-neutral-200 dark:border-neutral-800","transition-all duration-300","hover:border-neutral-400 dark:hover:border-neutral-600","hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50","hover:-translate-y-1",n),children:[(0,a.jsxs)("div",{className:"relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800",children:[e.featuredImage?(0,a.jsx)(u.default,{src:e.featuredImage,alt:e.title,fill:!0,className:"object-cover transition-transform duration-500 group-hover:scale-105"}):(0,a.jsx)("div",{className:"flex h-full w-full items-center justify-center",children:(0,a.jsx)("div",{className:"text-4xl font-bold text-neutral-300 dark:text-neutral-600",children:e.title.charAt(0)})}),(0,a.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]}),(0,a.jsxs)("div",{className:"flex flex-1 flex-col p-5",children:[(0,a.jsx)("div",{className:"mb-3 flex flex-wrap gap-2",children:e.tags.slice(0,2).map(e=>(0,a.jsx)("span",{className:"rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400",children:e},e))}),(0,a.jsx)("h3",{className:"mb-2 text-lg font-semibold text-neutral-900 dark:text-white line-clamp-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors",children:e.title}),(0,a.jsx)("p",{className:"mb-4 flex-1 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3",children:e.excerpt}),(0,a.jsxs)("div",{className:"mt-auto flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500",children:[(0,a.jsxs)("span",{className:"flex items-center gap-1",children:[(0,a.jsx)(d,{className:"h-3.5 w-3.5"}),m]}),(0,a.jsxs)("span",{className:"flex items-center gap-1",children:[(0,a.jsx)(s,{className:"h-3.5 w-3.5"}),e.readTime," ",l("readTime")]})]}),(0,a.jsxs)("span",{className:"flex items-center gap-1 text-sm font-medium text-neutral-900 dark:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:[l("readMore"),(0,a.jsx)(o.default,{className:"h-4 w-4 transition-transform group-hover:translate-x-1"})]})]})]}),(0,a.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",children:(0,a.jsx)("div",{className:"absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 opacity-50 blur-sm"})})]})}let c=[{id:2,slug:"ai-destekli-harvard-style-cv-hazirlama-rehberi",title:"Modern Kariyerin Anahtarı: AI Destekli Harvard Style CV Hazırlama Rehberi",excerpt:"Günümüz iş dünyasında, özellikle teknoloji sektöründe, binlerce başvuru arasından sıyrılmak sadece ne bildiğinizle değil, bunu nasıl sunduğunuzla ilgili.",content:`
# Modern Kariyerin Anahtarı: AI Destekli Harvard Style CV Hazırlama Rehberi

G\xfcn\xfcm\xfcz iş d\xfcnyasında, \xf6zellikle teknoloji sekt\xf6r\xfcnde, binlerce başvuru arasından sıyrılmak sadece ne bildiğinizle değil, bunu nasıl sunduğunuzla ilgili. Şirketlerin kullandığı **ATS (Aday Takip Sistemleri)** yazılımları, karmaşık tasarımlı CV'leri anlamlandırmakta zorlanırken; sadelik, rakamlar ve netlik kazanan taraf oluyor.

Bu yazıda, d\xfcnyaca kabul g\xf6rm\xfcş **Harvard CV formatını** ve bu formatı sizin yerinize en m\xfckemmel şekilde uygulayacak **\xf6zel bir yapay zeka promptunu** paylaşacağım.

---

## Neden Harvard Style CV?

Harvard formatı; g\xf6sterişten uzak, tamamen başarı odaklı ve hiyerarşisi net bir yapı sunar. Bu formatın altın kurallarını bilmek, profesyonelliğinizi ilk bakışta kanıtlar:

*   **Sayfa Sınırı:** Eğer 3 yıldan az bir deneyime sahipseniz, CV'niz **kesinlikle tek sayfa** olmalıdır.
*   **G\xf6rsellik:** Fotoğraf, grafik veya karmaşık s\xfctunlar yok. Siyah metin, beyaz arka plan.
*   **Hiyerarşi:** En g\xfcncel deneyiminiz her zaman en \xfcstte yer alır.

---

## Kusursuz Bir CV İ\xe7in 7 Altın Kural

Bir CV'yi "iyi"den "m\xfckemmel"e taşıyan, profesyonel recruiter'ların dikkat ettiği 7 kritik nokta vardır:

1.  🔵 **Kişiselleştirilmiş \xd6zet:** Genel ifadelerden ka\xe7ının, doğrudan ilandaki beklentilere cevap verin.
2.  🟠 **Şirket Bağlamı:** Sadece şirket ismini yazmayın. Şirketin \xf6l\xe7eğini (\xf6rn: "100M+ kullanıcılı fintech girişimi") belirterek başarınıza derinlik katın.
3.  🔴 **G\xfc\xe7l\xfc Fiiller:** "Yaptım, yardım ettim" yerine "Geliştirdim (Built)", "Optimize ettim (Optimized)", "Y\xf6nettim (Spearheaded)" gibi aksiyon fiilleri kullanın.
4.  🟣 **Skill Entegrasyonu:** Yetkinliklerinizi sadece bir liste olarak değil, deneyimlerinizin i\xe7ine yedirerek kanıtlayın.
5.  🟡 **Rakamların G\xfcc\xfc (XYZ Form\xfcl\xfc):** "Performansı artırdım" değil, "Veritabanı sorgularını optimize ederek y\xfckleme s\xfcresini %40 azalttım" deyin.
6.  🟢 **Şirket Faydası:** Teknik başarınızın şirkete sağladığı maddi veya operasyonel faydayı vurgulayın.
7.  ⚪ **Sadelik:** Maksimum 1-2 yazı tipi, PDF formatı ve tertemiz bir d\xfczen.

---

## Kendi AI Kariyer Danışmanınızı Oluşturun

Aşağıdaki promptu GEMINI a' CANVAS modu ile vererek yukarıdaki t\xfcm kurallara uygun, ATS dostu bir HTML CV taslağı oluşturabilirsiniz.

### 🤖 Kullanılacak AI Promptu

\`\`\`markdown
# Role: Elite Technical Recruiter & Harvard Career Architect

Sen, adayları Google, Meta ve \xfcst d\xfczey teknoloji şirketlerine hazırlayan bir kariyer mimarısın. G\xf6revin, aşağıdaki 7 Altın Kuralı ve Harvard CV formatını %100 doğrulukla uygulayan bir HTML CV oluşturmaktır.

## 🔴 UYGULANACAK 7 ALTIN KURAL (KRİTİK)

1. **Format (Sadelik ve PDF Uyumu):** Sadece beyaz arka plan, siyah metin. Maksimum 2 font (serif/sans-serif). Kesinlikle FOTOĞRAF OLMAYACAK. Harvard standartlarında tek s\xfctun, temiz hiyerarşi.
2. **Kişiselleştirilmiş Summary & Skills:** Summary kısmını jenerik bırakma. Kullanıcının hedeflediği pozisyona ve şirketin vizyonuna g\xf6re terzi dikimi bir giriş ve yetkinlik seti oluştur.
3. **Şirket Bağlamı (Context):** Sadece şirket ismini yazma. Altına mutlaka 1 c\xfcmlelik bağlam ekle. \xd6rn: "Doğu Avrupa'nın en b\xfcy\xfck bankası, 100M+ m\xfcşteri" veya "T\xfcrkiye'nin lider SaaS girişimi".
4. **G\xfc\xe7l\xfc Aksiyon Fiilleri:** Her bir madde (bullet point) mutlaka şu fiillerden biriyle başlamalı: Built, Improved, Launched, Engineered, Spearheaded, Optimized. "Helped" veya "Involved" gibi zayıf ifadeleri yasakla.
5. **Skill Entegrasyonu (Soft & Hard):** Teknik ve yumuşak becerileri sadece listede bırakma; iş deneyimi maddelerinin i\xe7inde "nasıl kullanıldığını" g\xf6stererek kanıtla.
6. **Sayısal Sonu\xe7lar (Quantifiable Data):** Her başarıyı rakamla destekle. "Hızı artırdım" yerine "-40% response time", "100K+ users", "+25% accuracy" gibi net veriler kullan. Kullanıcı veri vermezse, tahmin yapması i\xe7in onu zorla.
7. **Şirkete Sağlanan Fayda (Value Proposition):** Sayısal sonu\xe7ları şirketin karına, zaman tasarrufuna veya operasyonel verimliliğine bağla. "Neden bu iş şirket i\xe7in \xf6nemliydi?" sorusuna yanıt ver.

---

## 🛠 \xc7ALIŞMA PROTOKOL\xdc

### Adım 1: Stratejik Bilgi Toplama
Kullanıcıya şu uyarıyı yap: "3 yıldan az deneyimin varsa CV'ni 1 sayfa olarak sınırlayacağız." Ardından şunları iste:
- Hedef İş İlanı / Rol Tanımı.
- İş Deneyimleri (Şirket, Pozisyon, Tarih).
- Eğitim Bilgileri.
- Teknik Yetkinlikler.

### Adım 2: Eksik Giderme (Sorgulama Fazı)
Kullanıcı bilgileri verdiğinde, 7 Altın Kural'a uymayan kısımları tespit et ve CV'yi yazmadan \xf6nce şu soruları sor:
- "X şirketindeki işin, şirketin hangi ana hedefine hizmet etti?"
- "Y projesindeki başarın i\xe7in net bir y\xfczde veya rakam verebilir misin? (\xd6rn: Ka\xe7 kullanıcı, ne kadar tasarruf?)"

### Adım 3: Harvard Style HTML/CSS \xdcretimi
T\xfcm veriler 7 kurala uygun hale geldiğinde; CSS'i i\xe7inde, Harvard formatına uygun (\xfcstte isim/iletişim, sağa yaslı tarihler, sola yaslı başlıklar) profesyonel HTML kodunu \xfcret.\`\`\`

---

## Sonu\xe7

Doğru bir CV, sadece bir liste değil; sizin iş d\xfcnyasındaki "değer \xf6nerinizdir". Yapay zekayı bir ara\xe7 olarak kullanıp Harvard standartlarını uygulayarak, hayalinizdeki pozisyonun kapısını aralayabilirsiniz.

**Siz de kendi deneyimlerinizi bu formatta optimize etmek ister misiniz? Instagram'dan CV'nizi bana atın, birlikte optimize edelim: [@caglarflint](https://instagram.com/caglarflint)**
    `,featuredImage:"/blog/harvard-cv-guide.png",date:"2026-01-18",readTime:"4",tags:["Kariyer","CV Hazırlama","Harvard Formatı","Yapay Zeka","ATS"],author:{name:"Çağlar Çakmak",avatar:"/profile.jpg"}},{id:1,slug:"0-dan-1-e-mvp-taslagi-adim-adim-tam-kilavuz",title:"0→1 MVP Taslağı: Adım Adım Tam Kılavuz",excerpt:"30 günde 3 ürün çıkarmak için kullandığım kesin iş akışı. Yazılımcı yok, büyük bütçeler yok. Sadece yapay zeka araçları ve bu sistem.",content:`
# 0→1 MVP Taslağı: Adım Adım Tam Kılavuz

## 30 G\xfcnde 3 \xdcr\xfcn \xc7ıkarmak İ\xe7in Kullandığım Kesin İş Akışı

Bu bir teori değil. Fikirden, yayına alınmış \xfcr\xfcne tam \xfc\xe7 kez, bir ay i\xe7inde gitmek i\xe7in harfiyen uyguladığım sistem bu. Yazılımcı yok. 50 bin dolarlık b\xfct\xe7eler yok. Sadece bu iş akışı ve birlikte \xe7alışan yapay zeka ara\xe7ları var.

Bu kılavuzu kaydedin. Bir şeyler inşa ederken referans alın. İhtiyacı olan girişimci arkadaşlarınıza g\xf6nderin.

### Bu Neden İşe Yarıyor?

\xc7oğu kurucu, kimsenin istemediği \xf6zellikleri geliştirmek i\xe7in 6 ayını \xe7\xf6pe atar. Sonra lansman yaparlar ve koca bir sessizlikle karşılaşırlar.

Bu sistem durumu tersine \xe7evirir. Tek bir satır kod yazmadan **\xd6NCE** talebi doğrularsınız. Yapay zeka ara\xe7larını, her birinin belirli bir işi yaptığı bir montaj hattı gibi kullanırsınız. Sonu\xe7? 48 saat i\xe7inde işlevsel MVP'ler (Minimum Uygulanabilir \xdcr\xfcn) \xe7ıkarır ve hemen ger\xe7ek kullanıcı geri bildirimi alırsınız.

İşte tam iş akışı.

---

## AŞAMA 1: DOĞRULAMA & TASLAK

### ADIM 1: Fikrinizi Doğrulayın (Perplexity AI)

Herhangi bir şey inşa etmeden \xf6nce, insanların bunu ger\xe7ekten istediğini kanıtlayın.

**Ara\xe7:** Perplexity AI

**Eylem:**

1. Perplexity'yi a\xe7ın ve aramayı "Social Media Only" (Sadece Sosyal Medya) olarak değiştirin.
2. Fikriniz hakkındaki tartışmaları doğal bir dille arayın.
3. Şunu sorun: "[Fikrinizi buraya yazın] yapmak istiyorum, insanlar bunu kullanmak ister mi?"
4. Anketlere veya oylamalara değil; Reddit, Twitter ve forumlardaki ger\xe7ek konuşmalara bakın.

**Tartışma Tekniği (Bu kritiktir):**

Perplexity'de iki yapay zeka ajanı oluşturun:

* **Ajan 1:** \xd6zelliğinizi SAVUNAN (neden değerli olduğunu tartışan)
* **Ajan 2:** \xd6zelliğinize KARŞI \xc7IKAN (neden \xe7alışmayacağını tartışan)

**Prompt (İstem):**

> "İki ajan oluştur. Biri [\xf6zelliğin] LEHİNE tartışsın, diğeri ALEYHİNE tartışsın. KARŞIT ajan ikna olana kadar tartışmalarını sağla."

**Altın Değerindeki \xc7ıktı:**

Tartışmadan sonra şunu sorun: *"KARŞIT ajanı ikna etmek i\xe7in gereken kesin minimum \xf6zellikler nelerdir?"*

Bu liste sizin nihai MVP \xf6zellik setiniz olur. Fazlası yok. Eksiği yok.

**Neden işe yarar:** Ger\xe7ek kullanıcı tartışmalarına erişimi olan ş\xfcpheci bir yapay zeka ajanını ikna edemiyorsanız, ger\xe7ek kullanıcıları da ikna edemezsiniz. Bu sizi kimsenin istemediği \xf6zellikler inşa etmekten kurtarır.

### ADIM 2: PRD'nizi Oluşturun (ChatGPT / Claude / Gemini)

Doğrulanmış \xf6zelliklerinizi yapılandırılmış bir taslağa d\xf6n\xfcşt\xfcr\xfcn.

**Ara\xe7:** ChatGPT, Claude veya Gemini (birini se\xe7in)

**Eylem:**

1. Adım 1'deki minimum \xf6zellik listesini alın.
2. Se\xe7tiğiniz LLM'e (B\xfcy\xfck Dil Modeli) besleyin.
3. Ek detayları anlatmak i\xe7in Ses Modunu (Voice Mode) kullanın:
   * Kullanıcı akışı (birisi uygulamanızda nasıl hareket eder)
   * Tasarım y\xf6n\xfc (minimal, cesur, eğlenceli, profesyonel)
   * Belirli davranışlar (bu butona tıkladıklarında ne olur)
   * U\xe7 durumlar (kocaman bir dosya y\xfcklerlerse ne olur)

**Prompt Şablonu:**

> MVP'm i\xe7in detaylı bir \xdcr\xfcn Gereksinim Belgesi'ne (PRD) ihtiyacım var.
> İşte doğrulanmış \xf6zellikler:
> [\xf6zellik listenizi yapıştırın]
> İşte ek d\xfcş\xfcncelerim:
> [ses modu d\xf6k\xfcm\xfcn\xfc yapıştırın veya beyin fırtınanızı yazın]
> Şunları i\xe7eren adım adım bir PRD oluştur:
> * Geliştirme s\xfcrecini sırasıyla par\xe7alara ayıran
> * Bir yapay zekanın kodlayabileceği kadar detaylı olan
> * Kullanıcı akışını, teknik gereksinimleri ve tasarım y\xf6n\xfcn\xfc i\xe7eren

**\xc7ıktı:** Tek doğruluk kaynağınız olacak eksiksiz bir PRD belgesi.

**Profesyonel İpucu:** Bu PRD'yi bir Google Dok\xfcmanına kaydedin. S\xfcrekli buna başvuracak ve birden fazla yapay zeka aracıyla paylaşacaksınız.

### ADIM 3: Aray\xfcz\xfc (UI) G\xf6rselleştirin (Vercel v0)

Fikrinizi inşa etmeye başlamadan \xf6nce g\xf6r\xfcn.

**Ara\xe7:** Vercel v0

**Eylem:**

1. v0.dev adresine gidin.
2. Adım 2'deki PRD'nizi y\xfckleyin.
3. **Prompt:** "Bu PRD'ye dayanarak bu \xfcr\xfcn i\xe7in UI (kullanıcı aray\xfcz\xfc) oluştur."
4. Kafanızdakiyle eşleşen bir versiyon alana kadar yineleyin (iterate).

**\xd6nemli:** Burada piksel piksel m\xfckemmelliği hedeflemiyorsunuz. Sadece konsepti g\xf6rselleştirmek ve akışın mantıklı olduğundan emin olmak istiyorsunuz.

**Aradığınız şey:**

* D\xfczen vizyonunuzla eşleşiyor mu?
* Kullanıcı akışı mantıklı mı?
* Kendinizi bunu kullanırken g\xf6rebiliyor musunuz?

Oturana kadar farklı promptlarla oynayın. Doğru hissettirdiğinde ekran g\xf6r\xfcnt\xfcleri alın. Bunları bir sonraki aşamada kullanacaksınız.

**Bu adım neden \xf6nemli:** G\xf6rselleştiremediğiniz bir şeyi inşa etmek, g\xf6z\xfc kapalı araba kullanmak gibidir. Bu adım, yolun yarısında fikrinizin aslında \xe7alışmadığını fark etmenizi engeller.

---

## AŞAMA 2: İNŞA (THE BUILD)

### ADIM 4: İlk Kod \xdcretimi (Google AI Studio)

*Not: İsterseniz bu adımı atlayıp doğrudan Adım 5'e ge\xe7ebilirsiniz. Bu adım sadece size bir avantaj sağlar.*

**Ara\xe7:** Google AI Studio

**Eylem:**

1. Google AI Studio'yu a\xe7ın.
2. PRD'nizi ve Adım 3'teki UI ekran g\xf6r\xfcnt\xfclerini y\xfckleyin.
3. **Prompt:** "Bu PRD'ye ve bu UI tasarımlarına dayanarak bu uygulamayı inşa et."
4. Kodu iyileştirmek i\xe7in yapay zeka ile karşılıklı konuşun.
5. \xd6nizlemede işlevselliği test edin.
6. Temel d\xfczeyde \xe7alıştığında, kodu indirin.
7. Bilgisayarınızdaki yerel bir klas\xf6re kaydedin.

**Elde ettiğiniz şey:** İşlevsel bir başlangı\xe7 noktası. M\xfckemmel olmayacak ama sıfırdan başlamak yerine \xfczerine inşa edebileceğiniz bir şey verir.

### ADIM 5: Ana Geliştirme (Cursor AI)

Sihrin ger\xe7ekleştiği yer burası. MVP'nizin ger\xe7eğe d\xf6n\xfcşt\xfcğ\xfc yer.

**Ara\xe7:** Cursor AI

**Kurulum:**

1. Cursor'ı a\xe7ın.
2. Yerel proje klas\xf6r\xfcn\xfcze gidin (Adım 4'ten gelen veya yeni oluşturduğunuz).
3. Teknoloji yığını (stack) se\xe7in:
   * **Veritabanı:** Supabase (yeni başlayanlar i\xe7in en kolayı)
   * **Kimlik Doğrulama (Auth):** Clerk (tak-\xe7alıştır auth)

**Geliştirme İş Akışı:**

**Birinci: Elinizdekini Doğrulayın**
PRD'nizi Cursor'a besleyin ve sorun:

> Bu kod tabanını bu PRD'ye karşı incele.
> T\xfcm MVP \xf6zellikleri mevcut ve \xe7alışıyor mu?
> Ne eksik?

**İkinci: Verimlilik i\xe7in Refactor (D\xfczenleme)**
**Prompt:**

> Daha iyi mantık ve verimlilik i\xe7in bu kodu refactor et (yeniden d\xfczenle).
> Temiz, s\xfcrd\xfcr\xfclebilir ve \xf6l\xe7eklenebilir olmasına odaklan.

Zaman harcayacağınız yer burası. Acele etmeyin. Burada sağlam bir temel, daha sonra saatlerce hata ayıklamaktan (debugging) kurtarır.

**\xdc\xe7\xfcnc\xfc: S\xfcrekli Commit Atın**
Her anlamlı ilerleme kaydettiğinizde GitHub'a commit atın:

\`\`\`bash
git add .
git commit -m "Kullanıcı kimlik doğrulaması eklendi"
git push
\`\`\`

Bu sizin sigorta poli\xe7enizdir. Bir şeyler bozulduğunda (ki bozulacaktır), geri alabilirsiniz.

**Model Stratejisi (Kritik):**
Her şey i\xe7in tek bir yapay zeka modeli kullanmayın. G\xf6reve g\xf6re ge\xe7iş yapın:

* **Mantık ve kodlama i\xe7in:** **Claude Opus 4.5**
  * *Kullanım yeri:* Fonksiyon yazma, veritabanı sorguları, API entegrasyonu, iş mantığı.

* **Tasarım ve UI i\xe7in:** **Gemini 3.0**
  * *Kullanım yeri:* Bileşenleri stillendirme, d\xfczen d\xfczeltmeleri, responsive (duyarlı) tasarım, g\xf6rsel cila.

Cursor'da ayarlardan modeller arasında ge\xe7iş yapabilirsiniz. Bunu stratejik kullanın.

**Sorun Giderme (Troubleshooting):**

*Supabase kurulumunda mı takıldınız? Prompt:*

> Bu proje i\xe7in Supabase'i yapılandırmam gerekiyor.
> Kurulumu bana adım adım anlat.
> Şunları dahil et: veritabanı oluşturma, tablo şeması ve uygulamama bağlama.

*Clerk auth'da mı takıldınız? Prompt:*

> Clerk kimlik doğrulamasını uygulamam gerekiyor.
> Beni y\xf6nlendir: kurulum, yapılandırma, rotaları koruma, kullanıcı verilerini alma.

Yapay zeka size kelimenin tam anlamıyla her t\xfcrl\xfc kurulumda rehberlik edebilir. Takılıp kalmayın. Sadece sorun.

**İyi bir sonu\xe7 neye benzer:**
Bu adımın sonunda şunlara sahip olmalısınız:

* \xc7alışan t\xfcm MVP \xf6zellikleri
* Temiz, verimli kod
* Bağlanmış veritabanı
* \xc7alışan kimlik doğrulama
* GitHub'a kaydedilmiş \xe7oklu commit'ler

---

## AŞAMA 3: CİLALAMA & G\xd6NDERİM (POLISH & SHIP)

### ADIM 6: Tasarım & Duyarlılık (Responsiveness)

Prototip gibi değil, ger\xe7ek bir \xfcr\xfcn gibi g\xf6r\xfcnmesini sağlayın.

**Eylem:**

**Tasarımı D\xfczeltin:**

* Fikrinizin havasına uyuyor mu?
* Sıradan "mor gradyanlı SaaS \xe7amuru"ndan ka\xe7ının.
* \xd6ğelerin d\xfczg\xfcn hizalandığını kontrol edin.
* Renklerin varsayılan değil, kasıtlı olduğundan emin olun.
* Tipografi okunabilir ve markaya uygun olmalı.

**Cursor i\xe7in Prompt (Gemini 3.0 kullanarak):**

> Bu tasarımı incele. [İstediğiniz estetiği tarif edin] ile eşleşmesini sağla.
> Hizalama sorunlarını d\xfczelt. Renk şemasını iyileştir. Cilalanmış hissettirmesini sağla.

**Duyarlılığı (Responsiveness) D\xfczeltin:**
Hem mobilde hem masa\xfcst\xfcnde test edin. Bu pazarlığa kapalıdır.

**Prompt:**

> Bu uygulamayı tamamen responsive (duyarlı) hale getir.
> Şunlar i\xe7in d\xfczenleri test et ve d\xfczelt:
> * Mobil (375px genişlik)
> * Tablet (768px genişlik)
> * Masa\xfcst\xfc (1440px genişlik)

Sonra ger\xe7ekten test edin. Tarayıcınızda geliştirici ara\xe7larını (dev tools) a\xe7ın, cihaz boyutlarını değiştirin ve her ekranı kontrol edin.

**G\xfcvenlik Kontrol\xfc:**
Commit atmadan \xf6nce, yanlışlıkla API anahtarlarını veya sırları (secrets) commit etmediğinizden emin olun:

\`\`\`bash
git status
\`\`\`

Neyin commit edildiğini inceleyin. Eğer \`.env\` dosyaları veya adında "secret" ya da "key" ge\xe7en bir şey g\xf6r\xfcrseniz, bunları \`.gitignore\`'a ekleyin:

\`\`\`bash
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git add .gitignore
git commit -m ".gitignore gizli dosyalar i\xe7in eklendi"
\`\`\`

### ADIM 7: G\xfcvenlik & A\xe7ık Denetimi

Kullanıcılardan \xf6nce sorunları bulup d\xfczeltin.

**Eylem:**

**Cursor i\xe7in Prompt:**

> Bu t\xfcm kod tabanını şunlar i\xe7in tara:
> * G\xfcvenlik a\xe7ıkları
> * Olası hatalar (bugs)
> * Mantık hataları
> * Performans sorunları
> 
> Bulduğun her şeyin ciddiyet derecesine g\xf6re sıralanmış bir listesini ver.

Listeyi inceleyin. \xd6nce kritik maddeleri d\xfczeltin, sonra orta ve d\xfcş\xfck \xf6ncelikli sorunlara ge\xe7in.

D\xfczeltmelerden sonra prompt:

> Kod tabanını tekrar tara.
> T\xfcm kritik ve y\xfcksek \xf6ncelikli sorunların \xe7\xf6z\xfcld\xfcğ\xfcn\xfc doğrula.

Temizlendikten sonra, son commit işleminizi yapın:

\`\`\`bash
git add .
git commit -m "G\xfcvenlik denetimi tamamlandı - dağıtım i\xe7in hazır"
git push
\`\`\`

### ADIM 8: Dağıtım (Deployment)

Uygulamanızı canlıya alın ve d\xfcnyanın erişimine a\xe7ın.

**Platformlar:** Netlify, Vercel veya Replit (birini se\xe7in)

**Neden bu platformlar:**

* \xdccretsiz paketleri var
* Kolay GitHub entegrasyonu
* Otomatik dağıtımlar
* Yerleşik SSL sertifikaları

**Dağıtım Adımları:**

**Se\xe7enek 1: Vercel (Next.js/React i\xe7in \xf6nerilir)**

1. vercel.com'a gidin
2. GitHub ile giriş yapın
3. "New Project"e tıklayın
4. GitHub deponuzu (repository) se\xe7in
5. Vercel framework'\xfc otomatik algılar
6. "Deploy"a tıklayın

**Se\xe7enek 2: Netlify (Statik siteler i\xe7in harika)**

1. netlify.com'a gidin
2. GitHub ile giriş yapın
3. "Add new site" → "Import an existing project"e tıklayın
4. GitHub deponuzu se\xe7in
5. Build ayarlarını yapılandırın (genellikle otomatik algılanır)
6. "Deploy site"a tıklayın

**Se\xe7enek 3: Replit (Hızlı dağıtımlar i\xe7in iyi)**

1. replit.com'a gidin
2. "Create Repl"e tıklayın
3. GitHub'dan i\xe7e aktarın (Import from GitHub)
4. Deponuzu se\xe7in
5. "Run"a tıklayın

**KRİTİK: Ortam Değişkenleri (Environment Variables)**
Uygulamanız bu adım olmadan \xe7alışmaz.

1. Yerel \`.env\` dosyanızı bulun (commit etmediğiniz dosya).
2. T\xfcm API anahtarlarını ve sırları kopyalayın.
3. Dağıtım platformunuzun ayarlarına gidin.
4. "Environment Variables" b\xf6l\xfcm\xfcn\xfc bulun.
5. Her anahtar-değer \xe7iftini ekleyin:
   * \`SUPABASE_URL = [url adresiniz]\`
   * \`SUPABASE_ANON_KEY = [anahtarınız]\`
   * \`CLERK_PUBLISHABLE_KEY = [anahtarınız]\`
   * \`CLERK_SECRET_KEY = [anahtarınız]\`
   * (ve kullandığınız diğerleri)
6. Kaydedin ve yeniden dağıtın (redeploy).

**Bu neden \xf6nemli:** Canlı uygulamanızın veritabanınıza ve auth sisteminize bağlanmak i\xe7in bu sırlara ihtiyacı vardır, ancak bunları herkese a\xe7ık GitHub deponuza koyamazsınız. Ortam değişkenleri, bunları g\xfcvende tutarken dağıtılmış uygulamanızın kullanımına sunmanızı sağlar.

### ADIM 9: G\xf6nder Gitsin (Ship It)

MVP'niz yayında. Şimdi ne olacak?

**Eylem:**

1. **Canlı versiyonu iyice test edin:**
   * Kayıt olma akışı
   * Ana \xf6zellikler
   * Mobil uyumluluk
   * T\xfcm butonlar (CTA) ve linkler

2. **Paylaşın:**
   * Twitter/X'te #BuildInPublic etiketiyle paylaşın
   * İlgili topluluklarda paylaşın (Reddit, Discord, Slack grupları)
   * D\xfcr\xfcst geri bildirim i\xe7in arkadaşlarınıza g\xf6nderin
   * Product Hunt'ta paylaşın (eğer hazırsanız)

3. **Temel analitikleri kurun:**
   * Google Analytics (\xfccretsiz)
   * Veya Vercel Analytics (yerleşik)
   * Veya Plausible (gizlilik odaklı)

4. **Basit bir geri bildirim mekanizması oluşturun:**
   * Uygulamaya g\xf6m\xfcl\xfc Typeform
   * Veya Discord/Telegram topluluğu
   * Veya sadece footer'da (alt bilgi) bir e-posta adresi

**Zihniyet Değişimi:**
Az \xf6nce bir MVP yayınladınız. M\xfckemmel değil. Ama\xe7 da bu zaten.
Ger\xe7ek kullanıcılar size neyi d\xfczelteceğinizi, neyi ekleyeceğinizi ve neyi kaldıracağınızı s\xf6yleyecek. Hi\xe7bir planlama miktarı, ger\xe7ek geri bildirimin yerini tutamaz.

---

### Ara\xe7 \xd6zeti

İşte bu kılavuzda bahsedilen her ara\xe7 ve ne işe yaradığı:

**Doğrulama:**
* **Perplexity AI:** Fikriniz hakkındaki ger\xe7ek tartışmaları sosyal medyada arar.

**Planlama:**
* **ChatGPT / Claude / Gemini:** PRD'nizi oluşturur ve beyin fırtınasına yardımcı olur.
* **Vercel v0:** PRD'nizden UI \xf6nizlemeleri oluşturur.

**İnşa Etme:**
* **Google AI Studio:** İlk kodu oluşturur.
* **Cursor AI:** Yapay zeka destekli ana kodlama ortamınız.
* **Claude Opus 4.5:** Mantık ve kodlama g\xf6revleri i\xe7in en iyisi.
* **Gemini 3.0:** Tasarım ve UI g\xf6revleri i\xe7in en iyisi.

**Altyapı:**
* **Supabase:** Veritabanı (Kolay API'li PostgreSQL).
* **Clerk:** Kimlik doğrulama ve kullanıcı y\xf6netimi.
* **GitHub:** S\xfcr\xfcm kontrol\xfc ve kod depolama.

**Dağıtım:**
* **Vercel:** Barındırma platformu (Next.js/React i\xe7in en iyisi).
* **Netlify:** Barındırma platformu (statik siteler i\xe7in harika).
* **Replit:** Hızlı dağıtım platformu.

---

### Ka\xe7ınılması Gereken Yaygın Hatalar

* **Hata 1: Doğrulamayı atlamak.**
  Kimsenin istemediği bir şeyi inşa etmeyin. Her zaman Adım 1 ile başlayın.

* **Hata 2: \xc7ok fazla \xf6zellik inşa etmek.**
  MVP'niz utandırıcı derecede basit olmalı. Eğer KARŞIT ajan ikna olmadıysa, o \xf6zellik i\xe7eri girmez.

* **Hata 3: GitHub'a commit atmamak.**
  Her anlamlı değişiklikten sonra commit atın. Gelecekteki siz, ge\xe7mişteki size teşekk\xfcr edecek.

* **Hata 4: Her şey i\xe7in tek bir yapay zeka modeli kullanmak.**
  Mantık i\xe7in Claude. Tasarım i\xe7in Gemini. Tek bir modelin her şeyi yapmasını beklemeyin.

* **Hata 5: Test etmeden dağıtmak.**
  Herkese a\xe7ık paylaşmadan \xf6nce canlı uygulamanızı iyice test edin. Bozuk demolar g\xfcveni \xf6ld\xfcr\xfcr.

* **Hata 6: API anahtarlarını commit etmek.**
  Sırlar i\xe7in her zaman \`.gitignore\` kullanın. Canlı ortamda (production) her zaman ortam değişkenlerini kullanın.

* **Hata 7: M\xfckemmeli beklemek.**
  M\xfckemmel olduğunda değil, \xe7alıştığında g\xf6nderin. Kullanıcılar size neyin d\xfczeltilmesi gerektiğini s\xf6yleyecektir.

---

### G\xf6nderdikten Sonra Ne Yapmalı

* **1. Hafta: G\xf6zlemle**
  * İnsanların \xfcr\xfcn\xfcn\xfcz\xfc nasıl kullandığını izleyin.
  * Her geri bildirimi okuyun.
  * Se\xe7imlerinizi savunmayın, sadece dinleyin.

* **2. Hafta: \xd6nceliklendir**
  * En yaygın şikayetlerin listesini yapın.
  * En b\xfcy\xfck s\xfcrt\xfcnme noktalarını belirleyin.
  * İlk neyi d\xfczelteceğinize karar verin.

* **3. Hafta: Yinele (Iterate)**
  * Kritik hataları d\xfczeltin.
  * En \xe7ok istenen \xf6zelliği ekleyin.
  * En b\xfcy\xfck acı noktasını iyileştirin.

* **4. Hafta: İlerlemeyi Paylaş**
  * Sosyal medyada g\xfcncellemeleri paylaşın.
  * Yineleme s\xfcrecinizi g\xf6sterin.
  * "Build in public" (halka a\xe7ık inşa et) yapın, insanlar yolculuğu sever.

Sonra bu d\xf6ng\xfcy\xfc tekrarla. G\xf6nder, g\xf6zlemle, \xf6nceliklendir, yinele, paylaş.

---

### Son D\xfcş\xfcnceler

Bu sistem işe yarıyor \xe7\xfcnk\xfc kurucuların karşılaştığı en b\xfcy\xfck iki engeli ortadan kaldırıyor:

1. "Bunu kimsenin isteyip istemediğini bilmiyorum" - **İnşa etmeden \xf6nce doğruluyorsunuz.**
2. "Kod yazmayı bilmiyorum" - **Teknik işi yapay zeka ara\xe7ları hallediyor.**

Bir sonraki "Unicorn"u inşa etmeye \xe7alışmıyorsunuz. Fikrinizi doğrulayan ve size ger\xe7ek kullanıcı geri bildirimi sağlayan işlevsel bir şey inşa etmeye \xe7alışıyorsunuz.

M\xfckemmel \xfcr\xfcn diye bir şey yoktur. Yayına alınmış \xfcr\xfcnler yinelemeyle (iteration) daha iyi hale gelir.

Fikriniz canlıya ge\xe7ene kadar hi\xe7bir değeri yoktur. Bu iş akışı sizi 48 saatte canlıya ge\xe7irir.

Planlamayı bırakın. G\xf6ndermeye başlayın.

**Bu Kılavuzu Kaydedin**

Bu sayfayı yer imlerine ekleyin. Notlarınıza kaydedin. İhtiyacı olan girişimci arkadaşlarınızla paylaşın.

Bu sistemi kullanarak MVP'nizi yayınladığınızda, beni etiketleyin ve ne inşa ettiğinizi paylaşın. G\xf6rmek istiyorum.

Şimdi gidin ve bir şeyler inşa edin.

Sorularınız mı var? Bir adımda takıldınız mı?
Aşağıya bir yorum bırakın veya DM atın. Takıldığınız yerden kurtulmanıza yardım edeceğim.

Bunun işe yaramamasının tek yolu, başlamamanızdır.

**Bug\xfcn başlayın.**
    `,featuredImage:"/blog/mvp-blueprint-cover.png",date:"2024-12-26",readTime:"25",tags:["MVP","Girişimcilik","Yapay Zeka","Startup","Ürün Geliştirme"],author:{name:"Çağlar Çakmak",avatar:"/profile.jpg"}}];function f(){return(0,a.jsxs)("div",{className:"bg-background text-foreground",children:[(0,a.jsx)("div",{className:"pt-20",children:(0,a.jsx)(n,{})}),(0,a.jsxs)("section",{className:"max-w-7xl mx-auto px-4 pb-20",children:[(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:c.map(e=>(0,a.jsx)(m,{post:e},e.id))}),0===c.length&&(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center py-20 text-center",children:[(0,a.jsx)("div",{className:"text-6xl mb-4",children:"📝"}),(0,a.jsx)("h3",{className:"text-xl font-semibold text-neutral-900 dark:text-white mb-2",children:"No posts yet"}),(0,a.jsx)("p",{className:"text-neutral-600 dark:text-neutral-400",children:"Check back soon for new content!"})]})]})]})}e.s(["default",()=>f],51263)}]);