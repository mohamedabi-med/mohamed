(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[609],{8437:function(e,t,n){Promise.resolve().then(n.bind(n,107))},7969:function(e,t,n){"use strict";n.d(t,{I:function(){return c}});var a=n(6093),s=n(3827),l=n(4090),r=n(7276),o=n(6696),i=n(5507),u=n(7996);function d(){let e=(0,a._)(["\n        radial-gradient(\n          "," circle at ","px ","px,\n          var(--blue-500),\n          transparent 80%\n        )\n      "]);return d=function(){return e},e}let c=l.forwardRef((e,t)=>{let{className:n,type:a,...c}=e,[m,f]=l.useState(!1),h=(0,o.c)(0),p=(0,o.c)(0);return(0,s.jsx)(i.E.div,{style:{background:(0,u.Y)(d(),m?"100px":"0px",h,p)},onMouseMove:function(e){let{currentTarget:t,clientX:n,clientY:a}=e,{left:s,top:l}=t.getBoundingClientRect();h.set(n-s),p.set(a-l)},onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),className:"p-[2px] rounded-lg transition duration-300 group/input",children:(0,s.jsx)("input",{type:a,className:(0,r.cn)("flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \n          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \n          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\n           disabled:cursor-not-allowed disabled:opacity-50\n           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]\n           group-hover/input:shadow-none transition duration-400\n           ",n),ref:t,...c})})});c.displayName="Input"},7910:function(e,t,n){"use strict";n.d(t,{_:function(){return o}});var a=n(3827),s=n(4090),l=n(6130),r=n(7276);let o=s.forwardRef((e,t)=>{let{className:n,...s}=e;return(0,a.jsx)(l.f,{ref:t,className:(0,r.cn)("text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",n),...s})});o.displayName=l.f.displayName},107:function(e,t,n){"use strict";n.r(t);var a=n(3827),s=n(4090),l=n(7447);n(7853);var r=n(7910),o=n(7969),i=n(7276);l.Z.initializeApp({databaseURL:"https://worldwebsolutions-79b54-default-rtdb.europe-west1.firebasedatabase.app/"});let u=e=>{let{children:t,className:n}=e;return(0,a.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-2 w-full",n),children:t})};t.default=()=>{let[e,t]=(0,s.useState)({name:"",subject:"",email:"",phone:"",message:""}),n=n=>{let{name:a,value:s}=n.target;t({...e,[a]:s})},i=async()=>{try{let n=l.Z.database();await n.ref("messages").push(e),t({name:"",subject:"",email:"",phone:"",message:""}),console.log("Form data submitted successfully!")}catch(e){console.error("Error submitting form data:",e)}};return(0,a.jsxs)("div",{className:"m-10 flex flex-col-reverse md:flex-row mb-15 pb-10",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/2 pr-0 md:pr-4 relative",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold text-white-900 mb-4",children:"Contact Us Now!"}),(0,a.jsx)("h2",{className:"text-lg font-semibold text-gray-400 mb-8",children:"What are you waiting for? No matter what you need, we will help you with it. All you need to do is reach out to us!"}),(0,a.jsxs)(u,{children:[(0,a.jsx)(r._,{htmlFor:"name",children:"Name"}),(0,a.jsx)(o.I,{name:"name",value:e.name,onChange:n,placeholder:"Your Name",type:"text"})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(r._,{htmlFor:"subject",children:"Subject"}),(0,a.jsx)(o.I,{name:"subject",value:e.subject,onChange:n,placeholder:"Subject of your message",type:"text"})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(r._,{htmlFor:"email",children:"Email Address"}),(0,a.jsx)(o.I,{name:"email",value:e.email,onChange:n,placeholder:"Your Email Address",type:"email"})]}),(0,a.jsxs)(u,{children:[(0,a.jsx)(r._,{htmlFor:"phone",children:"Phone"}),(0,a.jsx)(o.I,{name:"phone",value:e.phone,onChange:n,placeholder:"Your Phone Number",type:"text"})]}),(0,a.jsxs)(u,{className:"mb-12",children:[(0,a.jsx)(r._,{htmlFor:"message",children:"Message"}),(0,a.jsx)(o.I,{name:"message",value:e.message,onChange:n,placeholder:"Your Message",type:"text"})]}),(0,a.jsx)("button",{className:"inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",onClick:i,children:"Send The Message"})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/2 pl-0 md:pl-4 relative overflow-hidden",children:[(0,a.jsx)("div",{className:"w-full h-full absolute top-0 left-0 bg-black opacity-60 "}),(0,a.jsx)("img",{className:"w-full h-full object-cover rounded-lg",src:"learnen3.webp",alt:"worldwebSolutions"})]})]})}},7276:function(e,t,n){"use strict";n.d(t,{cn:function(){return l}});var a=n(3167),s=n(1367);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,a.W)(t))}}},function(e){e.O(0,[481,361,150,420,971,655,744],function(){return e(e.s=8437)}),_N_E=e.O()}]);