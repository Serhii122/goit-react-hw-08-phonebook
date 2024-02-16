"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[484],{7484:function(e,t,i){i.r(t),i.d(t,{default:function(){return F}});var a=i(2791),n=i(4420),r=i(1037),s=i(7694),o=i.n(s),d=i(7689),l=i(3495),u=i(4708),m=i(2341),c=i(5527),f=i(1889),x=i(697),p=i(4942),h=i(3366),b=i(7462),g=i(3733),v=i(6642),Z=i(4657),w=i(838),W=i(7078),k=(0,i(2540).ZP)(),j=i(5295),C=i(184),y=["className","component","disableGutters","fixed","maxWidth","classes"],N=(0,j.Z)(),P=k("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,t["maxWidth".concat((0,v.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),S=function(e){return(0,W.Z)({props:e,name:"MuiContainer",defaultTheme:N})},G=function(e,t){var i=e.classes,a=e.fixed,n=e.disableGutters,r=e.maxWidth,s={root:["root",r&&"maxWidth".concat((0,v.Z)(String(r))),a&&"fixed",n&&"disableGutters"]};return(0,w.Z)(s,(function(e){return(0,Z.ZP)(t,e)}),i)};var R=i(4036),M=i(6934),T=i(1402),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,i=void 0===t?P:t,n=e.useThemeProps,r=void 0===n?S:n,s=e.componentName,o=void 0===s?"MuiContainer":s,d=i((function(e){var t=e.theme,i=e.ownerState;return(0,b.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&(0,p.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,i){var a=i,n=t.breakpoints.values[a];return 0!==n&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,i=e.ownerState;return(0,b.Z)({},"xs"===i.maxWidth&&(0,p.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&(0,p.Z)({},t.breakpoints.up(i.maxWidth),{maxWidth:"".concat(t.breakpoints.values[i.maxWidth]).concat(t.breakpoints.unit)}))})),l=a.forwardRef((function(e,t){var i=r(e),a=i.className,n=i.component,s=void 0===n?"div":n,l=i.disableGutters,u=void 0!==l&&l,m=i.fixed,c=void 0!==m&&m,f=i.maxWidth,x=void 0===f?"lg":f,p=(0,h.Z)(i,y),v=(0,b.Z)({},i,{component:s,disableGutters:u,fixed:c,maxWidth:x}),Z=G(v,o);return(0,C.jsx)(d,(0,b.Z)({as:s,ownerState:v,className:(0,g.Z)(Z.root,a),ref:t},p))}));return l}({createStyledComponent:(0,M.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,t["maxWidth".concat((0,R.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,T.Z)({props:e,name:"MuiContainer"})}}),I=q,D=i(7107),L=i(4507),_=(0,D.Z)(),F=function(){var e=(0,n.I0)(),t=(0,d.s0)();return(0,C.jsx)("div",{style:{backgroundColor:"rgb(105, 155, 248)",height:"100vh",padding:"30px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,C.jsx)(L.Z,{theme:_,children:(0,C.jsxs)(I,{component:"main",maxWidth:"xs",children:[(0,C.jsx)(u.ZP,{}),(0,C.jsx)(f.ZP,{item:!0,xs:12,sm:8,md:5,component:c.Z,elevation:6,square:!0,sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"30px",borderRadius:"20px",backgroundColor:"rgb(250, 250, 250)"},children:(0,C.jsx)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,C.jsxs)(x.Z,{component:"form",noValidate:!0,onSubmit:function(i){i.preventDefault();var a=new FormData(i.currentTarget),n={name:a.get("firstName")+" "+a.get("lastName"),email:a.get("email"),password:a.get("password")};if(!n.name||!n.email||!n.password)return o().Notify.failure("All fields must be filled out");e((0,r.y4)(n)).unwrap().then((function(){o().Notify.success("Registration successful"),t("/login")})).catch((function(e){return o().Notify.failure("This email is already in use. Please log in or use a different email.")}))},sx:{mt:3},children:[(0,C.jsxs)(f.ZP,{container:!0,spacing:2,children:[(0,C.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,C.jsx)(m.Z,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})}),(0,C.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,C.jsx)(m.Z,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name"})}),(0,C.jsx)(f.ZP,{item:!0,xs:12,children:(0,C.jsx)(m.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),(0,C.jsx)(f.ZP,{item:!0,xs:12,children:(0,C.jsx)(m.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),(0,C.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,backgroundColor:"#000000",color:"#ffffff","&:hover":{backgroundColor:"#646464"}},children:"SUBMIT"})]})})})]})})})}}}]);
//# sourceMappingURL=484.ded94713.chunk.js.map