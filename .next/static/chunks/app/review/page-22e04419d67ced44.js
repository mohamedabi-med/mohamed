(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{4379:function(e,t,r){Promise.resolve().then(r.bind(r,4454))},7969:function(e,t,r){"use strict";r.d(t,{I:function(){return c}});var n=r(6093),l=r(3827),a=r(4090),s=r(7276),i=r(6696),o=r(5507),d=r(7996);function u(){let e=(0,n._)(["\n        radial-gradient(\n          "," circle at ","px ","px,\n          var(--blue-500),\n          transparent 80%\n        )\n      "]);return u=function(){return e},e}let c=a.forwardRef((e,t)=>{let{className:r,type:n,...c}=e,[f,m]=a.useState(!1),p=(0,i.c)(0),x=(0,i.c)(0);return(0,l.jsx)(o.E.div,{style:{background:(0,d.Y)(u(),f?"100px":"0px",p,x)},onMouseMove:function(e){let{currentTarget:t,clientX:r,clientY:n}=e,{left:l,top:a}=t.getBoundingClientRect();p.set(r-l),x.set(n-a)},onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,l.jsx)("input",{type:n,className:(0,s.cn)("flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",r),ref:t,...c})})});c.displayName="Input"},7910:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var n=r(3827),l=r(4090),a=r(6130),s=r(7276);let i=l.forwardRef((e,t)=>{let{className:r,...l}=e;return(0,n.jsx)(a.f,{ref:t,className:(0,s.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",r),...l})});i.displayName=a.f.displayName},4454:function(e,t,r){"use strict";r.r(t);var n=r(3827),l=r(4090),a=r(7447);r(7853);var s=r(7910),i=r(7969),o=r(7276);a.Z.initializeApp({databaseURL:"https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/"});let d=e=>{let{children:t,className:r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 w-full",r),children:t})};t.default=()=>{let[e,t]=(0,l.useState)({name:"",email:"",review:""}),r=r=>{let{name:n,value:l}=r.target;t({...e,[n]:l})},o=async()=>{try{let r=a.Z.database();await r.ref("reviews").push(e),t({name:"",email:"",review:""}),console.log("Review data submitted successfully!")}catch(e){console.error("Error submitting review data:",e)}};return(0,n.jsxs)("div",{className:"m-10 flex flex-col-reverse md:flex-row mb-15 pb-10",children:[(0,n.jsxs)("div",{className:"w-full md:w-1/2 pr-0 md:pr-4 relative",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold text-white-900 mb-4",children:"Leave a Review!"}),(0,n.jsx)("h2",{className:"text-lg font-semibold text-gray-400 mb-8",children:"We would love to hear your feedback. Please leave your review below."}),(0,n.jsxs)(d,{children:[(0,n.jsx)(s._,{htmlFor:"name",children:"Name"}),(0,n.jsx)(i.I,{name:"name",value:e.name,onChange:r,placeholder:"Your Name",type:"text"})]}),(0,n.jsxs)(d,{children:[(0,n.jsx)(s._,{htmlFor:"email",children:"Email Address"}),(0,n.jsx)(i.I,{name:"email",value:e.email,onChange:r,placeholder:"Your Email Address",type:"email"})]}),(0,n.jsxs)(d,{className:"mb-12",children:[(0,n.jsx)(s._,{htmlFor:"review",children:"Review"}),(0,n.jsx)(i.I,{name:"review",value:e.review,onChange:r,placeholder:"Your Review",type:"text"})]}),(0,n.jsx)("button",{className:"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",onClick:o,children:"Submit Review"})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden",children:[(0,n.jsx)("div",{className:"w-full h-full absolute top-0 left-0 bg-black opacity-60 "}),(0,n.jsx)("img",{className:"w-full h-full object-cover rounded-lg",src:"review.jpeg",alt:"worldwebSolutions"})]})]})}},7276:function(e,t,r){"use strict";r.d(t,{cn:function(){return a}});var n=r(3167),l=r(1367);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}}},function(e){e.O(0,[481,361,150,420,971,655,744],function(){return e(e.s=4379)}),_N_E=e.O()}]);