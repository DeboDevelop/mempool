(this.webpackJsonpmempool=this.webpackJsonpmempool||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(8),a=n.n(c),o=n(19),s=n.n(o),i=n(16),u=n(11),d=(n(25),n(12));n(29).config();d.a.initializeApp({apiKey:"AIzaSyD5m9Gx3DzzGxkuVIarT2cpffqaorUyGd0",authDomain:"mempool-b40c7.firebaseapp.com",projectId:"mempool-b40c7",storageBucket:"mempool-b40c7.appspot.com",messagingSenderId:"183277498210",appId:"1:183277498210:web:a306f56b00a160ce66c63b"});var l=new d.a.auth.GoogleAuthProvider,b=d.a.auth(),f=d.a;var j=function(e){var t=e.id,n=e.front,c=e.back;return Object(r.jsxs)("div",{className:"bg-white h-24 w-40 m-4 card rounded-md border-gray-900 shadow-lg",children:[Object(r.jsx)("button",{className:"m-2 px-2 bg-red-600 rounded",onClick:function(){f.database().ref("/cards/".concat(t)).remove()},children:"x"}),Object(r.jsxs)("div",{className:"innercard",children:[Object(r.jsx)("div",{className:"cardface front",children:Object(r.jsx)("h1",{children:n})}),Object(r.jsx)("div",{className:"cardface back",children:Object(r.jsx)("h1",{children:c})})]})]})};var m=function(e){e.user;var t=e.cardState;return Object(r.jsx)("div",{className:"flex flex-row flex-wrap",children:t.map((function(e){return Object(r.jsx)(j,{id:e.id,front:e.front,back:e.back},e.id)}))})},p=n(13);var x=function(e){var t=e.user,n=e.setUser,a=e.setCardState,o=Object(c.useState)((function(){return{front:"",back:""}})),s=Object(u.a)(o,2),d=s[0],j=s[1];return Object(r.jsx)("nav",{className:"bg-blue-300 h-auto border-b-2",children:t.id?Object(r.jsxs)("div",{className:"md:flex md:justify-between",children:[Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.id;a((function(e){return[].concat(Object(i.a)(e),[{front:d.front,back:d.back,user:n}])})),f.database().ref("cards").push({front:d.front,back:d.back,user:n}),j((function(){return{front:"",back:""}}))},className:"md:flex md:justify-start",children:[Object(r.jsx)("input",{type:"text",placeholder:"Front",className:"border w-72 py-2 px-3 m-2 text-grey-darkest border-gray-600 rounded",value:d.front,onChange:function(e){j((function(t){return Object(p.a)(Object(p.a)({},t),{},{front:e.target.value})}))}}),Object(r.jsx)("input",{type:"text",placeholder:"Back",className:"border w-72 py-2 px-3 m-2 text-grey-darkest border-gray-600 rounded",value:d.back,onChange:function(e){j((function(t){return Object(p.a)(Object(p.a)({},t),{},{back:e.target.value})}))}}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"bg-yellow-300 hover:bg-yellow-400 text-lg px-2 py-1 m-2 rounded-lg",children:"Add Card"})})]})}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),b.signOut().then((function(){n({id:null})})).catch((function(e){return console.log(e)}))},className:"bg-pink-400 hover:bg-pink-600 text-lg px-2 py-1 m-2 rounded-lg flex-grow-0",children:"Logout"})," "]}):Object(r.jsxs)("div",{className:"sm:flex justify-between",children:[Object(r.jsx)("h1",{className:"my-auto text-lg mx-2",children:"Welcome to Mempool"}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),b.signInWithPopup(l).then((function(e){n({id:e.user.email})})).catch((function(e){return console.log(e)}))},className:"bg-pink-400 hover:bg-pink-600 text-lg px-2 py-1 m-2 rounded-lg",children:"Login"})]})})};var h=function(){var e=Object(c.useState)((function(){return{id:null}})),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)((function(){return[]})),s=Object(u.a)(o,2),d=s[0],l=s[1];return Object(c.useEffect)((function(){b.onAuthStateChanged((function(e){e&&a({id:e.email})}))}),[]),Object(c.useEffect)((function(){f.database().ref("cards").on("value",(function(e){var t=e.val(),r=[];for(var c in t)r.push({id:c,front:t[c].front,back:t[c].back,user:t[c].user});var a=n.id;r=r.filter((function(e){return e.user===a})),l((function(){return Object(i.a)(r)}))}))}),[n.id]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{user:n,setUser:a,setCardState:l}),Object(r.jsx)(m,{user:n,cardState:d})]})};n(32);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5f44490a.chunk.js.map