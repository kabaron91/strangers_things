(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{59:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(28),c=r.n(s),i=r(2),a=r(7),o=r(10),l=r.n(o),u=r(4),p=r.n(u),j=r(12),d=r(5),b=r(0),h="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",O=function(){var e=Object(n.useState)({user:{username:"",password:""}}),t=Object(d.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(!1),a=Object(d.a)(c,2),o=a[0],u=a[1];function O(){return(O=Object(j.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(h,"/users/login"),t);case 3:r=e.sent,n=r.data.data.token,localStorage.setItem("token",n),u(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Incorrect Username or Password. Please try again.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return!0===o?Object(b.jsx)(i.a,{to:"/profile"}):Object(b.jsxs)("div",{id:"login",children:[Object(b.jsx)("h1",{children:"Please Login Below"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"loginUsername",children:"Username "}),Object(b.jsx)("input",{required:!0,type:"text",id:"loginUsername",name:"loginUsername",onChange:function(e){s((function(t){return{user:{username:e.target.value,password:t.user.password}}}))},value:r.user.username}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"loginPassword",children:"Password "}),Object(b.jsx)("input",{required:!0,type:"password",id:"loginPassword",name:"loginPassword",onChange:function(e){s((function(t){return{user:{username:t.user.username,password:e.target.value}}}))},value:r.user.password}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit",onClick:function(e){e.preventDefault(),function(e){O.apply(this,arguments)}(r)}})]})]})},x="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",g=function(){var e=Object(n.useState)({user:{username:"",password:""}}),t=Object(d.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(!1),a=Object(d.a)(c,2),o=a[0],u=a[1];function h(){return(h=Object(j.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(x,"/users/register"),t);case 3:r=e.sent,n=r.data.data.token,localStorage.setItem("token",n),u(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Username already taken. Please try again.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return!0===o?Object(b.jsx)(i.a,{to:"/login"}):Object(b.jsxs)("div",{id:"register",children:[Object(b.jsx)("h1",{children:"Please Register Below"}),Object(b.jsx)("h3",{children:"Username and Password must be at least 5 characters long."}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"registerUsername",children:"Username "}),Object(b.jsx)("input",{required:!0,minLength:"5",type:"text",id:"registerUsername",name:"registerUsername",onChange:function(e){s((function(t){return{user:{username:e.target.value,password:t.user.password}}}))},value:r.user.username}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"registerPassword",children:"Password "}),Object(b.jsx)("input",{required:!0,minLength:"5",type:"password",id:"registerPassword",name:"registerPassword",value:r.user.password,onChange:function(e){s((function(t){return{user:{username:t.user.username,password:e.target.value}}}))}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit",onClick:function(e){e.preventDefault(),function(e){h.apply(this,arguments)}(r)}})]})]})},m=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),r=t[0],s=t[1];return Object(n.useEffect)((function(){localStorage.getItem("token")&&s(!0)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"topHeader",children:Object(b.jsx)("h1",{children:"Stranger's Things"})}),Object(b.jsxs)("div",{id:"bottomHeader",children:[Object(b.jsx)(a.b,{to:"/posts",children:Object(b.jsx)("h2",{children:"Posts"})}),r?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(a.b,{to:"./profile",children:Object(b.jsx)("h2",{id:"profile",children:"Profile"})}),Object(b.jsx)(a.b,{to:"/login",children:Object(b.jsx)("h2",{id:"logOut",onClick:function(){localStorage.removeItem("token"),s(!1)},children:"Log Out"})})]}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)(a.b,{to:"/login",children:Object(b.jsx)("h2",{id:"login",children:"Log In"})}),Object(b.jsx)(a.b,{to:"/register",children:Object(b.jsx)("h2",{id:"signUp",children:"Sign Up"})})]})]})]})},f="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),r=t[0],s=t[1],c=Object(n.useState)(""),i=Object(d.a)(c,2),o=i[0],u=i[1];function h(){return(h=Object(j.a)(p.a.mark((function e(){var t,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.get("".concat(f,"/posts"),{headers:{Authorization:"Bearer "+m}});case 3:t=e.sent,r=t.data,s(r.data.posts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var O=function(){var e=Object(j.a)(p.a.mark((function e(t){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t._id,e.next=3,l.a.delete("".concat(f,"/posts/").concat(r),{headers:{Authorization:"Bearer "+m}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var x=r.filter((function(e){return function(e,t){return!!(e.title.includes(t)||e.description.includes(t)||e.price.includes(t)||e.author.username.includes(t))}(e,o)})),g=(o.length?x:r).map((function(e,t,r){return Object(b.jsxs)("div",{id:"post",children:[Object(b.jsx)("h1",{children:r[t].title}),Object(b.jsx)("p",{children:r[t].description}),Object(b.jsx)("h3",{children:"Price"}),Object(b.jsx)("p",{children:r[t].price}),Object(b.jsx)("h3",{children:"Seller"}),Object(b.jsx)("p",{children:r[t].author.username}),Object(b.jsx)("h3",{children:"Location"}),Object(b.jsx)("p",{children:r[t].location}),Object(b.jsx)("h3",{children:"Will Deliver?"}),r[t].willDeliver?Object(b.jsx)("p",{children:"yes"}):Object(b.jsx)("p",{children:"no"}),r[t].isAuthor?Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("button",{onClick:function(){O(e)},children:"delete post"})," "]}):null]},e._id)})),m=localStorage.getItem("token");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Search Posts "}),Object(b.jsx)("input",{id:"search",type:"text",placeholder:"enter keywords...",value:o,onChange:function(e){u(e.target.value)}})]}),m?Object(b.jsx)(a.b,{to:"/newpost",children:"Create New Post"}):null,g]})},w="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",k=localStorage.getItem("token"),y=function(){var e=Object(n.useState)({post:{title:"",description:"",price:"",location:"[On Request]",willDeliver:!1}}),t=Object(d.a)(e,2),r=t[0],s=t[1];function c(){return(c=Object(j.a)(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post("".concat(w,"/posts"),t,{headers:{Authorization:"Bearer "+k}});case 3:r=e.sent,n=r.data.data.post,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{id:"addPost",children:[Object(b.jsx)("h1",{children:"Add New Post"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{required:!0,type:"text",id:"title",name:"title",onChange:function(e){s((function(t){return{post:{title:e.target.value,description:t.post.description,price:t.post.price,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.title}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{required:!0,type:"text",id:"description",name:"description",onChange:function(e){s((function(t){return{post:{title:t.post.title,description:e.target.value,price:t.post.price,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.description}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"price",children:"Price"}),Object(b.jsx)("input",{required:!0,type:"text",id:"price",name:"price",onChange:function(e){s((function(t){return{post:{title:t.post.title,description:t.post.description,price:e.target.value,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.price}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"location",children:"Location"}),Object(b.jsx)("input",{type:"text",id:"location",name:"location",onChange:function(e){s((function(t){return{post:{title:t.post.title,description:t.post.description,price:t.post.price,location:e.target.value,willDeliver:t.post.willDeliver}}}))},value:r.post.location}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"willDeliver",children:"Will deliver?"}),Object(b.jsx)("input",{type:"checkbox",id:"willDeliver",name:"willDeliver",onChange:function(e){s((function(t){return{post:{title:t.post.title,description:t.post.description,price:t.post.price,location:t.post.location,willDeliver:e.target.value}}}))},value:r.post.willDeliver}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit",onClick:function(e){e.preventDefault(),function(e){c.apply(this,arguments)}(r)}})]})]})},S="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",P=function(){var e=localStorage.getItem("token"),t=Object(n.useState)(""),r=Object(d.a)(t,2),s=r[0],c=r[1];function i(){return(i=Object(j.a)(p.a.mark((function t(){var r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.get("".concat(S,"/users/me"),{headers:{Authorization:"Bearer "+e}});case 3:r=t.sent,n=r.data,c(n.data.username),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(b.jsxs)("h1",{id:"welcome",children:["Welcome to your profile, ",s,"!"]})},C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsx)(m,{})}),Object(b.jsx)("main",{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/register",component:g}),Object(b.jsx)(i.b,{path:"/login",component:O}),Object(b.jsx)(i.b,{path:"/posts",component:v}),Object(b.jsx)(i.b,{path:"/newpost",component:y}),Object(b.jsx)(i.b,{path:"/profile",component:P}),Object(b.jsx)(i.b,{path:"/",component:v})]})})]})};c.a.render(Object(b.jsx)(a.a,{children:Object(b.jsx)(C,{})}),document.getElementById("app"))}},[[59,1,2]]]);
//# sourceMappingURL=main.d3046987.chunk.js.map