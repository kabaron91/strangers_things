(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{59:function(e,t,r){"use strict";r.r(t);var n=r(5),s=r(1),c=r(28),i=r.n(c),a=r(2),o=r(7),l=r(10),u=r.n(l),p=r(4),j=r.n(p),d=r(12),b=r(0),h="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",O=function(e){var t=e.loggedIn,r=e.setLoggedIn,c=Object(s.useState)({user:{username:"",password:""}}),i=Object(n.a)(c,2),o=i[0],l=i[1];function p(){return(p=Object(d.a)(j.a.mark((function e(t){var n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(h,"/users/login"),t);case 3:n=e.sent,s=n.data.data.token,localStorage.setItem("token",s),r(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert("Incorrect Username or Password. Please try again.");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return!0===t?Object(b.jsx)(a.a,{to:"/profile"}):Object(b.jsxs)("div",{id:"login",children:[Object(b.jsx)("h1",{children:"Please Login Below"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){p.apply(this,arguments)}(o)},children:[Object(b.jsx)("label",{htmlFor:"loginUsername",children:"Username "}),Object(b.jsx)("input",{required:!0,type:"text",id:"loginUsername",name:"loginUsername",onChange:function(e){l((function(t){return{user:{username:e.target.value,password:t.user.password}}}))},value:o.user.username}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"loginPassword",children:"Password "}),Object(b.jsx)("input",{required:!0,type:"password",id:"loginPassword",name:"loginPassword",onChange:function(e){l((function(t){return{user:{username:t.user.username,password:e.target.value}}}))},value:o.user.password}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit"})]})]})},x="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",g=function(){var e=Object(s.useState)({user:{username:"",password:""}}),t=Object(n.a)(e,2),r=t[0],c=t[1],i=Object(s.useState)(!1),o=Object(n.a)(i,2),l=o[0],p=o[1];function h(){return(h=Object(d.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(x,"/users/register"),t);case 3:r=e.sent,n=r.data.data.token,localStorage.setItem("token",n),p(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("Username already taken. Please try again.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}return!0===l?Object(b.jsx)(a.a,{to:"/login"}):Object(b.jsxs)("div",{id:"register",children:[Object(b.jsx)("h1",{children:"Please Register Below"}),Object(b.jsx)("h3",{children:"Username and Password must be at least 5 characters long."}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"registerUsername",children:"Username "}),Object(b.jsx)("input",{required:!0,minLength:"5",type:"text",id:"registerUsername",name:"registerUsername",onChange:function(e){c((function(t){return{user:{username:e.target.value,password:t.user.password}}}))},value:r.user.username}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"registerPassword",children:"Password "}),Object(b.jsx)("input",{required:!0,minLength:"5",type:"password",id:"registerPassword",name:"registerPassword",value:r.user.password,onChange:function(e){c((function(t){return{user:{username:t.user.username,password:e.target.value}}}))}}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit",onClick:function(e){e.preventDefault(),function(e){h.apply(this,arguments)}(r)}})]})]})},m=function(e){var t=e.loggedIn,r=e.setLoggedIn;return Object(s.useEffect)((function(){localStorage.getItem("token")&&r(!0)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"topHeader",children:Object(b.jsx)("h1",{children:"Stranger's Things"})}),Object(b.jsxs)("div",{id:"bottomHeader",children:[Object(b.jsx)(o.b,{to:"/posts",children:Object(b.jsx)("h2",{children:"Posts"})}),t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.b,{to:"./profile",children:Object(b.jsx)("h2",{id:"profile",children:"Profile"})}),Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("h2",{id:"logOut",onClick:function(){localStorage.removeItem("token"),r(!1)},children:"Log Out"})})]}):Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("h2",{id:"login",children:"Log In"})}),Object(b.jsx)(o.b,{to:"/register",children:Object(b.jsx)("h2",{id:"signUp",children:"Sign Up"})})]})]})]})},f="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",v=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),r=t[0],c=t[1],i=Object(s.useState)(""),a=Object(n.a)(i,2),l=a[0],p=a[1];function h(){return(h=Object(d.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(f,"/posts"),{headers:{Authorization:"Bearer "+m}});case 3:t=e.sent,r=t.data,c(r.data.posts),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(s.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var O=function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t._id,e.next=3,u.a.delete("".concat(f,"/posts/").concat(r),{headers:{Authorization:"Bearer "+m}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var x=r.filter((function(e){return function(e,t){return!!(e.title.includes(t)||e.description.includes(t)||e.price.includes(t)||e.author.username.includes(t))}(e,l)})),g=(l.length?x:r).map((function(e,t,r){return Object(b.jsxs)("div",{id:"post",children:[Object(b.jsx)("h1",{children:r[t].title}),Object(b.jsx)("p",{children:r[t].description}),Object(b.jsx)("h3",{children:"Price"}),Object(b.jsx)("p",{children:r[t].price}),Object(b.jsx)("h3",{children:"Seller"}),Object(b.jsx)("p",{children:r[t].author.username}),Object(b.jsx)("h3",{children:"Location"}),Object(b.jsx)("p",{children:r[t].location}),Object(b.jsx)("h3",{children:"Will Deliver?"}),r[t].willDeliver?Object(b.jsx)("p",{children:"yes"}):Object(b.jsx)("p",{children:"no"}),r[t].isAuthor?Object(b.jsxs)(b.Fragment,{children:[" ",Object(b.jsx)("button",{onClick:function(){O(e)},children:"delete post"})," "]}):null]},e._id)})),m=localStorage.getItem("token");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Search Posts "}),Object(b.jsx)("input",{id:"search",type:"text",placeholder:"enter keywords...",value:l,onChange:function(e){p(e.target.value)}})]}),m?Object(b.jsx)(o.b,{to:"/newpost",children:"Create New Post"}):null,g]})},w="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",k=localStorage.getItem("token"),y=function(){var e=Object(s.useState)({post:{title:"",description:"",price:"",location:"[On Request]",willDeliver:!1}}),t=Object(n.a)(e,2),r=t[0],c=t[1];function i(){return(i=Object(d.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(w,"/posts"),t,{headers:{Authorization:"Bearer "+k}});case 3:r=e.sent,n=r.data.data.post,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{id:"addPost",children:[Object(b.jsx)("h1",{children:"Add New Post"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{required:!0,type:"text",id:"title",name:"title",onChange:function(e){c((function(t){return{post:{title:e.target.value,description:t.post.description,price:t.post.price,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.title}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"description",children:"Description"}),Object(b.jsx)("input",{required:!0,type:"text",id:"description",name:"description",onChange:function(e){c((function(t){return{post:{title:t.post.title,description:e.target.value,price:t.post.price,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.description}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"price",children:"Price"}),Object(b.jsx)("input",{required:!0,type:"text",id:"price",name:"price",onChange:function(e){c((function(t){return{post:{title:t.post.title,description:t.post.description,price:e.target.value,location:t.post.location,willDeliver:t.post.willDeliver}}}))},value:r.post.price}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"location",children:"Location"}),Object(b.jsx)("input",{type:"text",id:"location",name:"location",onChange:function(e){c((function(t){return{post:{title:t.post.title,description:t.post.description,price:t.post.price,location:e.target.value,willDeliver:t.post.willDeliver}}}))},value:r.post.location}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{htmlFor:"willDeliver",children:"Will deliver?"}),Object(b.jsx)("input",{type:"checkbox",id:"willDeliver",name:"willDeliver",onChange:function(e){c((function(t){return{post:{title:t.post.title,description:t.post.description,price:t.post.price,location:t.post.location,willDeliver:e.target.value}}}))},value:r.post.willDeliver}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"Submit",onClick:function(e){e.preventDefault(),function(e){i.apply(this,arguments)}(r)}})]})]})},I="https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT",S=function(){var e=localStorage.getItem("token"),t=Object(s.useState)(""),r=Object(n.a)(t,2),c=r[0],i=r[1];function a(){return(a=Object(d.a)(j.a.mark((function t(){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.get("".concat(I,"/users/me"),{headers:{Authorization:"Bearer "+e}});case 3:r=t.sent,n=r.data,i(n.data.username),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}return Object(s.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(b.jsxs)("h1",{id:"welcome",children:["Welcome to your profile, ",c,"!"]})},P=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),r=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{children:Object(b.jsx)(m,{loggedIn:r,setLoggedIn:c})}),Object(b.jsx)("main",{children:Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/register",component:g}),Object(b.jsx)(a.b,{path:"/login",render:function(){return Object(b.jsx)(O,{loggedIn:r,setLoggedIn:c})}}),Object(b.jsx)(a.b,{path:"/posts",component:v}),Object(b.jsx)(a.b,{path:"/newpost",component:y}),Object(b.jsx)(a.b,{path:"/profile",component:S}),Object(b.jsx)(a.b,{path:"/",component:v})]})})]})};i.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(P,{})}),document.getElementById("app"))}},[[59,1,2]]]);
//# sourceMappingURL=main.eae45c9a.chunk.js.map