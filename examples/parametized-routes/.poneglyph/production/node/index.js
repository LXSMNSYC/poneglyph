var c=Object.create,g=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty;var D=e=>g(e,"__esModule",{value:!0});var x=(e,t,p)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of d(t))!h.call(e,a)&&a!=="default"&&g(e,a,{get:()=>t[a],enumerable:!(p=f(t,a))||p.enumerable});return e},r=e=>x(D(g(e!=null?c(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var o=r(require("poneglyph")),s=r(require("react"));var m=e=>({type:"success",value:{message:e.params.message}});function n(){let{message:e}=(0,o.usePageData)();return s.default.createElement("main",null,s.default.createElement(o.Head,null,s.default.createElement("title",null,`Hello ${e}`)),s.default.createElement("h1",null,`Hello ${e}`))}var i=r(require("poneglyph")),l=r(require("http")),y={buildDir:".poneglyph\\production\\browser"},P,E=[{path:"/[message]",resourceID:"0",entrypoint:"[message]",Component:n,getPageData:(P=m)!=null?P:void 0}];l.default.createServer((0,i.createServer)(y,E)).listen(3e3);
