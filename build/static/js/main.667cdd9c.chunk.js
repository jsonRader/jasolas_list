(this.webpackJsonpjasolas_list=this.webpackJsonpjasolas_list||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(13),s=n(6),c=n(1),a=n(20),o=n.n(a),i=n(2),l=n(4),u=n(3),j=n.n(u),d=n(9),h=n(11),p=(n(27),n(0)),b=function(e){var t=e.handleRegister,n=e.setLoggedIn,r=Object(c.useState)({username:"",password:""}),a=Object(s.a)(r,2),o=a[0],l=a[1],u=Object(c.useState)({username:"",password:""}),b=Object(s.a)(u,2),O=b[0],g=b[1],x=Object(i.f)();function m(e){var t=e.target.attributes.name.value,n=Object(h.a)({},o);n[t]=e.target.value,l(n)}function f(){return(f=Object(d.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),o.password!==O.password){e.next=8;break}return e.next=4,t(o);case 4:localStorage.getItem("token")&&(n(!0),localStorage.setItem("username",o.username),x.push("/")),e.next=9;break;case 8:x.push("/registererror");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"register-page",children:[Object(p.jsx)("h1",{children:"Register Here to Buy and Sell Today!"}),Object(p.jsxs)("form",{onSubmit:function(e){return f.apply(this,arguments)},children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"username",placeholder:"Username",value:o.username,onChange:m,required:!0})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:o.password,onChange:m,required:!0}),Object(p.jsx)("input",{type:"password",name:"password",placeholder:"Confirm Password",value:O.password,onChange:function(e){var t=e.target.attributes.name.value,n=Object(h.a)({},O);n[t]=e.target.value,g(n)},required:!0})]}),Object(p.jsx)("button",{children:"Register"})]})]})},O=(n(34),function(){return Object(p.jsxs)("div",{id:"register-error",children:[Object(p.jsx)("h1",{children:"Error! Please enter the correct password."}),Object(p.jsx)(l.b,{id:"register-link",to:"/register",children:"Back to Register"})]})}),g=(n(35),function(){return Object(p.jsxs)("div",{id:"log-in-error",children:[Object(p.jsx)("h1",{children:"Error! Username or Password is incorrect."}),Object(p.jsx)(l.b,{id:"login-link",to:"/login",children:"Back to Log In"})]})}),x=(n(36),function(e){var t=e.handleLogIn,n=e.setLoggedIn,r=Object(c.useState)({username:"",password:""}),a=Object(s.a)(r,2),o=a[0],u=a[1];function b(e){var t=e.target.attributes.name.value,n=Object(h.a)({},o);n[t]=e.target.value,u(n)}var O=Object(i.f)();function g(){return(g=Object(d.a)(j.a.mark((function e(r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(o);case 3:localStorage.getItem("token")?(n(!0),localStorage.setItem("username",o.username),O.push("/")):O.push("/loginerror");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"login-page",children:[Object(p.jsx)("h1",{children:"Log In"}),Object(p.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"text",name:"username",placeholder:"Username",onChange:b,required:!0})}),Object(p.jsx)("div",{children:Object(p.jsx)("input",{type:"password",name:"password",placeholder:"Password",onChange:b,required:!0})}),Object(p.jsx)("button",{className:"login-button",children:"Log In"})]}),Object(p.jsx)(l.b,{id:"register-link",to:"/register",children:"Don't have an account? Register now to Buy and Sell!"})]})}),m=(n(37),function(e){var t=e.loggedIn,n=e.setLoggedIn,r=Object(i.f)();return Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{id:"running-title",children:"Jasolas' List!"}),Object(p.jsxs)("div",{id:"nav-bar",children:[Object(p.jsx)(l.b,{to:"/",children:"Home"}),Object(p.jsx)(l.b,{to:"/market",children:"Market"}),t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(l.b,{to:"/profile",children:"Profile"}),Object(p.jsx)(l.b,{onClick:function(){n(!1),localStorage.removeItem("message"),localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("success"),r.push("/login")},children:"Log Out"})]}):Object(p.jsx)(l.b,{to:"/login",children:"Log in"})]})]})}),f=(n(38),function(e){var t=e.loggedIn;return Object(p.jsxs)("div",{id:"home-page",children:[Object(p.jsx)("h1",{children:"Jasolas' List!"}),t?Object(p.jsx)("div",{children:Object(p.jsxs)("h3",{children:["Logged in as ",localStorage.getItem("username")]})}):Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"Log in or Register to buy and sell today!"})})]})}),v="https://strangers-things.herokuapp.com/api",w="2105-OKU-RM-WEB-PT",S=localStorage.getItem("token");function I(e){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v,"/").concat(w,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:"".concat(t.username),password:"".concat(t.password)}})});case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).data&&localStorage.setItem("token",r.data.token),localStorage.setItem("message",r.error.message),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function y(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.setItem("username",t.username),e.next=4,fetch("".concat(v,"/").concat(w,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:"".concat(t.username),password:"".concat(t.password)}})}).then((function(e){return e.json()})).then((function(e){e.data&&localStorage.setItem("token",e.data.token),localStorage.setItem("message",e.error.message)}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(e){fetch("".concat(v,"/").concat(w,"/posts"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(e){return e.json()})).then((function(t){e(t.data.posts)})).catch((function(e){console.error(e)}))}function P(e){return B.apply(this,arguments)}function B(){return(B=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem("token"),e.next=4,fetch("".concat(v,"/").concat(w,"/posts"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({post:{title:"".concat(t.title),description:"".concat(t.description),price:"".concat(t.price),location:"".concat(t.location),willDeliver:"".concat(t.willDeliver)}})}).then((function(e){return e.json()}));case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function D(e){fetch("".concat(v,"/").concat(w,"/posts/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(e){return e.json()})).catch((function(e){console.error(e)}))}function N(e){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(v,"/").concat(w,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}});case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,t(r.data.messages),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}n(39);var T=function(e){var t=e.setNewUserPost,n=Object(c.useState)({title:"",description:"",price:"",location:"",willDeliver:!1}),r=Object(s.a)(n,2),a=r[0],o=r[1];function i(e,t){var n=Object(h.a)({},a);n[t]="willDeliver"===t?!!e.target.checked:e.target.value,o(n)}function l(){return(l=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,P(a);case 3:t(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsx)("div",{id:"new-post",children:Object(p.jsxs)("form",{children:[Object(p.jsx)("button",{onClick:function(){return t(!1)},children:"CLOSE"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{name:"title",onChange:function(e){return i(e,"title")},placeholder:"Title",required:!0}),Object(p.jsx)("input",{name:"description",onChange:function(e){return i(e,"description")},placeholder:"Description",multiline:!0,required:!0}),Object(p.jsx)("input",{name:"price",onChange:function(e){return i(e,"price")},placeholder:"Price",required:!0}),Object(p.jsx)("input",{name:"location",onChange:function(e){return i(e,"location")},placeholder:"Location"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{id:"checkbox",type:"checkbox",name:"willDeliver",onChange:function(e){return i(e,"willDeliver")}}),"Delivery?"]}),Object(p.jsx)("button",{onClick:function(e){return l.apply(this,arguments)},children:"List in Market"})]})]})})},U=function(e){var t=e.postBoard,n=e.setPostBoard,r=e.loggedIn,a=Object(c.useState)({content:""}),o=Object(s.a)(a,2),i=o[0],l=o[1],u=t._id,j=t.isAuthor;return Object(p.jsx)("div",{id:"featured-post",children:Object(p.jsxs)("div",{className:"post-inquiry",children:[Object(p.jsx)("button",{onClick:function(){return n(!1)},children:"CLOSE"}),Object(p.jsx)("h1",{children:t.title}),Object(p.jsx)("p",{children:t.description}),Object(p.jsxs)("h4",{children:["Price: ",t.price]}),Object(p.jsxs)("h3",{children:["Seller: ",t.author.username]}),Object(p.jsxs)("h4",{children:["Location: ",t.location]}),Object(p.jsxs)("h4",{children:["Delivery? ",t.willDeliver?"Yes":"No"]}),r?j?Object(p.jsx)("div",{className:"post-messages",children:Object(p.jsx)("h3",{children:"MESSAGES"})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h3",{children:["Message ",t.author.username," about this sale"]}),Object(p.jsx)("input",{id:"messenger",name:"content",placeholder:"Message",multiline:!0,onChange:function(e){return function(e,t){var n=Object(h.a)({},i);n[t]=e.target.value,l(n)}(e,"content")}}),Object(p.jsx)("button",{onClick:function(e){var t,n;e.preventDefault(),t=u,n=i,fetch("".concat(v,"/").concat(w,"/posts/").concat(t,"/messages"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)},body:JSON.stringify({message:{content:"".concat(n.content)}})}).then((function(e){return e.json()})).catch(console.error),document.getElementById("messenger").value=""},children:"Send Message"})]}):null,t.messages?Object(p.jsx)(p.Fragment,{children:t.messages.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsx)("p",{children:e.content}),Object(p.jsxs)("h5",{children:["From User: ",e.fromUser.username]})]},t)}))}):""]})})},M=function(e){var t=e.post,n=e.title,r=e.description,s=e.price,c=e.username,a=e.location,o=e.setPostBoard,i=e.isAuthor,l=e.postId,u=e.deleteListing;return Object(p.jsxs)("div",{id:"user-post",children:[Object(p.jsx)("h2",{children:n}),Object(p.jsx)("p",{children:r}),Object(p.jsxs)("h4",{children:["Price: ",s]}),Object(p.jsxs)("h3",{children:["Seller: ",c]}),Object(p.jsxs)("h4",{children:["Location: ",a]}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),o(t)},children:"View More"}),i?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{onClick:function(e){u(e,l)},children:"Delete Listing"})}):""]})},F=function(e){var t=e.search,n=e.setSearch;return Object(p.jsx)("input",{variant:"filled",placeholder:"Search Market...",type:"text",value:t,onChange:function(e){return n(e.target.value)}})},A=function(e){var t=e.loggedIn,n=e.userPosts,r=e.setUserPosts,a=e.postBoard,o=e.setPostBoard,i=Object(c.useState)(!1),l=Object(s.a)(i,2),u=l[0],h=l[1],b=Object(c.useState)(""),O=Object(s.a)(b,2),g=O[0],x=O[1],m=0===g.length?n:n.filter((function(e){return e.description.toLowerCase().includes(g.toLowerCase())||e.title.toLowerCase().includes(g.toLowerCase())||e.author.username.toLowerCase().includes(g.toLowerCase())||e.location.toLowerCase().includes(g.toLowerCase())||e.price.includes(g)}));function f(e,t){return v.apply(this,arguments)}function v(){return(v=Object(d.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D(n);case 3:L(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){L(r)}),[a,u,f]),Object(p.jsxs)("div",{id:"posts-page",children:[Object(p.jsxs)("div",{className:"posts-header",children:[Object(p.jsx)("h1",{children:"Market"}),Object(p.jsx)(F,{userPosts:n,setUserPosts:r,search:g,setSearch:x}),t&&Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),h(!0)},children:"Make Listing"})]}),u&&Object(p.jsx)(T,{setNewUserPost:h}),Object(p.jsx)("div",{className:"post-list",children:m.map((function(e,t){return Object(p.jsx)(M,{post:e,title:e.title,description:e.description,price:e.price,username:e.author.username,locaion:e.location,setPostBoard:o,isAuthor:e.isAuthor,postId:e._id,deleteListing:f},t)}))}),a?Object(p.jsx)(U,{postBoard:a,setPostBoard:o,loggedIn:t}):Object(p.jsx)(p.Fragment,{})]})},R=(n(40),function(e){var t=e.handleMessageInbox,n=e.postBoard,r=e.setPostBoard,a=e.loggedIn,o=Object(c.useState)([]),i=Object(s.a)(o,2),u=i[0],j=i[1];Object(c.useEffect)((function(){t(j)}),[]);var d=[],h=[];return u.map((function(e){e.fromUser.username==="".concat(localStorage.getItem("username"))?d.push(e):h.push(e)})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{id:"greeting",children:["Welcome ",localStorage.getItem("username")]}),Object(p.jsxs)("div",{id:"profile",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"inbox",children:"Inbox"}),Object(p.jsx)("div",{children:h.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsxs)("h2",{children:["From: ",e.fromUser.username]}),Object(p.jsx)("p",{children:e.content}),Object(p.jsx)(l.b,{onClick:function(t){return linkToPost(t,e.post._id)},children:Object(p.jsxs)("h4",{children:["INQUIRIES: ",e.post.title]})})]},t)}))})]}),Object(p.jsxs)("div",{className:"sent",children:[Object(p.jsx)("h3",{children:"Sent"}),Object(p.jsx)("div",{children:d.map((function(e,t){return Object(p.jsxs)("div",{className:"message",children:[Object(p.jsxs)("h2",{children:["From: ",e.fromUser.username]}),Object(p.jsx)("p",{children:e.content}),Object(p.jsx)(l.b,{children:Object(p.jsxs)("h4",{children:["INTERESTED IN: ",e.post.title]})})]},t)}))})]}),n?Object(p.jsx)(A,{postBoard:n,setPostBoard:r,loggedIn:a}):Object(p.jsx)(p.Fragment,{})]})]})}),q=function(){var e,t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1],l=Object(c.useState)([]),u=Object(s.a)(l,2),j=u[0],d=u[1],h=Object(c.useState)(null),v=Object(s.a)(h,2),w=v[0],S=v[1];return Object(c.useEffect)((function(){localStorage.getItem("token")?o(!0):o(!1)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(m,{loggedIn:a,setLoggedIn:o}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/login",children:Object(p.jsx)(x,{handleLogIn:y,loggedIn:a,setLoggedIn:o})}),Object(p.jsx)(i.a,{path:"/register",children:Object(p.jsx)(b,{handleRegister:I,setLoggedIn:o})}),Object(p.jsx)(i.a,{path:"/profile",children:Object(p.jsx)(R,{handleMessageInbox:N,userPosts:j,setUserPosts:d,postBoard:w,setPostBoard:S,loggedIn:a})}),Object(p.jsx)(i.a,{exact:!0,path:"/",children:Object(p.jsx)(f,{loggedIn:a,setLoggedIn:o})}),Object(p.jsx)(i.a,{path:"/market",children:Object(p.jsx)(A,(e={loggedIn:a,userPosts:j,setUserPosts:d},Object(r.a)(e,"userPosts",j),Object(r.a)(e,"postBoard",w),Object(r.a)(e,"setPostBoard",S),e))}),Object(p.jsx)(i.a,{path:"/loginerror",children:Object(p.jsx)(g,{})}),Object(p.jsx)(i.a,{path:"/registererror",children:Object(p.jsx)(O,{})})]})]})})};o.a.render(Object(p.jsx)(l.a,{children:Object(p.jsx)(q,{})}),document.getElementById("app"))}},[[41,1,2]]]);
//# sourceMappingURL=main.667cdd9c.chunk.js.map