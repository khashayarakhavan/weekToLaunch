(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{464:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(82),l=t(10),o=t(2),u=t.n(o),c=t(40),s=t(88),p=t(14),m=t(21),d=t(77),f=t(45),b=t(6),g=t(5);function v(){var n=Object(b.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.shrink {\n    ","\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(b.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return w=function(){return n},n}function h(){var n=Object(b.a)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return h=function(){return n},n}function x(){var n=Object(b.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return x=function(){return n},n}var y=Object(g.c)(x(),"black"),j=g.d.div(h()),O=g.d.input(w(),"grey","grey",y);O.displayName="FormInputContainer";var E=g.d.label(v(),"grey",y);E.displayName="FormInputLabel";var S=function(n){var e=n.handleChange,t=n.label,a=Object(f.a)(n,["handleChange","label"]);return r.a.createElement(j,null,r.a.createElement(O,Object.assign({onChange:e},a)),t?r.a.createElement(E,{className:a.value.length?"shrink":""},t):null)};function k(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return k=function(){return n},n}function C(){var n=Object(b.a)(["\n  margin: 10px 0;\n"]);return C=function(){return n},n}function I(){var n=Object(b.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return n},n}var N=g.d.div(I()),q=g.d.h2(C()),P=g.d.div(k()),z=Object(p.b)(null,function(n){return{googleSignInStart:function(){return n(Object(m.c)())},emailSignInStart:function(e,t){return n(Object(m.b)({email:e,password:t}))}}})(function(n){var e=n.emailSignInStart,t=n.googleSignInStart,o=Object(a.useState)({email:"",password:""}),p=Object(s.a)(o,2),m=p[0],f=p[1],b=m.email,g=m.password,v=function(){var n=Object(c.a)(u.a.mark(function n(t){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(b,g);case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),w=function(n){var e=n.target,t=e.value,a=e.name;f(Object(l.a)({},m,Object(i.a)({},a,t)))};return r.a.createElement(N,null,r.a.createElement(q,null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:v},r.a.createElement(S,{name:"email",type:"email",handleChange:w,value:b,label:"email",required:!0}),r.a.createElement(S,{name:"password",type:"password",value:g,handleChange:w,label:"password",required:!0}),r.a.createElement(P,null,r.a.createElement(d.a,{type:"submit"}," Sign in "),r.a.createElement(d.a,{type:"button",onClick:t,isGoogleSignIn:!0},"Sign in with Google"))))});function D(){var n=Object(b.a)(["\n  margin: 10px 0;\n"]);return D=function(){return n},n}function G(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return G=function(){return n},n}var U=g.d.div(G()),F=g.d.h2(D()),J=Object(p.b)(null,function(n){return{signUpStart:function(e){return n(Object(m.j)(e))}}})(function(n){var e=n.signUpStart,t=Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),o=Object(s.a)(t,2),p=o[0],m=o[1],f=p.displayName,b=p.email,g=p.password,v=p.confirmPassword,w=function(){var n=Object(c.a)(u.a.mark(function n(t){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),g===v){n.next=4;break}return alert("passwords don't match"),n.abrupt("return");case 4:e({displayName:f,email:b,password:g});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}(),h=function(n){var e=n.target,t=e.name,a=e.value;m(Object(l.a)({},p,Object(i.a)({},t,a)))};return r.a.createElement(U,null,r.a.createElement(F,null,"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:w},r.a.createElement(S,{type:"text",name:"displayName",value:f,onChange:h,label:"Display Name",required:!0}),r.a.createElement(S,{type:"email",name:"email",value:b,onChange:h,label:"Email",required:!0}),r.a.createElement(S,{type:"password",name:"password",value:g,onChange:h,label:"Password",required:!0}),r.a.createElement(S,{type:"password",name:"confirmPassword",value:v,onChange:h,label:"Confirm Password",required:!0}),r.a.createElement(d.a,{type:"submit"},"SIGN UP")))});function L(){var n=Object(b.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n    width: unset;\n    align-items: center;\n\n    > *:first-child {\n      margin-bottom: 50px;\n    }\n  }\n"]);return L=function(){return n},n}var A=g.d.div(L());e.default=function(){return r.a.createElement(A,null,r.a.createElement(z,null),r.a.createElement(J,null))}}}]);
//# sourceMappingURL=14.2230f28a.chunk.js.map