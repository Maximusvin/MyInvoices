(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{232:function(n,e,t){},233:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(1),i=t.n(c),a=t(47),o=t.n(a),d=t(39),u=t(35),s=t(6),b=t(3),p=t(4);function l(){var n=Object(b.a)(["\n  width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media (max-width: 1283px) {\n    width: 940px;\n  }\n\n  @media (max-width: 992px) {\n    width: 700px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);return l=function(){return n},n}var j=p.a.div(l()),x=function(n){var e=n.children;return Object(r.jsx)(j,{children:e})};var h=function(){return Object(r.jsx)(x,{children:Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/",exact:!0,component:G}),Object(r.jsx)(s.a,{path:"/create-invoice",component:Q})]})})};function f(){var n=Object(b.a)([""]);return f=function(){return n},n}function O(){var n=Object(b.a)(["\n  width: 100%;\n  position: relative;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  color: rgba(128, 128, 128, 1);\n  border-left: 4px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n\n  ::before {\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 85%;\n    content: '';\n    background: rgba(128, 128, 128, 0.4);\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  }\n"]);return O=function(){return n},n}var m=p.a.header(O()),v=p.a.h3(f()),g=function(n){var e=n.children;return Object(r.jsx)(m,{children:e&&Object(r.jsx)(v,{children:e})})};g.defaultProps={children:""};var w=g;function y(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n"]);return y=function(){return n},n}function k(){var n=Object(b.a)(["\n  padding-top: 35px;\n  padding-bottom: 35px;\n  background-color: #fff;\n  padding-left: 24px;\n  padding-right: 24px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n"]);return k=function(){return n},n}var S=p.a.div(k()),D=p.a.h3(y()),I=function(n){var e=n.title,t=n.children;return Object(r.jsxs)(S,{children:[e&&Object(r.jsx)(D,{children:e}),t]})};I.defaultProps={title:"",children:""};var q=I,E=t(25),C=t.n(E),R=t(36),_=t(51),A=t.n(_);function M(){return F.apply(this,arguments)}function F(){return(F=Object(R.a)(C.a.mark((function n(){var e,t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.get("/invoices");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return(N=Object(R.a)(C.a.mark((function n(e){return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.a.post("/invoices",e);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}A.a.defaults.baseURL="http://localhost:4030";var P=t(16),z=Object(P.b)("invoices/fetchInvoicesRequest"),J=Object(P.b)("invoices/fetchEInvoicesSuccess"),L=Object(P.b)("invoices/fetchInvoicesError"),V=function(n){return n.invoices.entities};function B(){var n=Object(b.a)(["\n  padding: 10px 25px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 600;\n  background-color: rgb(11, 11, 255);\n  cursor: pointer;\n"]);return B=function(){return n},n}function T(){var n=Object(b.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]);return T=function(){return n},n}var U=p.a.section(T()),Y=Object(p.a)(u.b)(B()),G=function(){var n=Object(d.b)(),e=Object(d.c)(V);return Object(c.useEffect)((function(){n(function(){var n=Object(R.a)(C.a.mark((function n(e){var t;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(z()),n.prev=1,n.next=4,M();case 4:t=n.sent,e(J(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),e(L(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}())}),[n]),Object(r.jsxs)(U,{children:[Object(r.jsx)(w,{children:"Invoices"}),Object(r.jsx)(q,{title:"Actions",children:Object(r.jsx)(Y,{to:"/create-invoice",children:"Add new"})}),Object(r.jsx)(q,{title:"Invoices",children:Object(r.jsx)(Fn,{invoices:e})})]})};function H(){var n=Object(b.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]);return H=function(){return n},n}var K=p.a.section(H()),Q=function(){return Object(r.jsxs)(K,{children:[Object(r.jsx)(w,{children:"Create Invoice"}),Object(r.jsx)(q,{children:Object(r.jsx)(xn,{})})]})},W=t(40),X=t(22),Z=t(31);function $(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 25px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 600;\n  background-color: rgb(11, 11, 255);\n  cursor: pointer;\n  margin-left: auto;\n"]);return $=function(){return n},n}function nn(){var n=Object(b.a)(["\n  display: block;\n  font-weight: 600;\n"]);return nn=function(){return n},n}function en(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 15px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 10px;\n  outline: none;\n"]);return en=function(){return n},n}function tn(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 15px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 10px;\n"]);return tn=function(){return n},n}function rn(){var n=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-gap: 35px;\n  margin-bottom: 35px;\n"]);return rn=function(){return n},n}function cn(){var n=Object(b.a)(["\n  padding: 35px 25px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n"]);return cn=function(){return n},n}var an=p.a.div(cn()),on=p.a.div(rn()),dn=p.a.input(tn()),un=p.a.textarea(en()),sn=p.a.label(nn()),bn=p.a.button($()),pn=Z.b().shape({inv:Z.a().required().test(3,"Minimum 3 and maximum 10 characters",(function(n){return n&&n.toString().length>=3&&n.toString().length<=10})).integer().positive(),invoiceDate:Z.c().required("Required"),supplyDate:Z.c().required("Required"),comment:Z.c().required("Required").min(3,"Minimum 3 characters").max(160,"Maximum 160 characters")});function ln(n){var e=n.field,t=n.placeholder,c=n.type;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(dn,Object(W.a)(Object(W.a)({},e),{},{type:c,placeholder:t})),Object(r.jsx)(X.a,{name:e.name,component:"span"})]})}function jn(n){var e=n.field,t=n.placeholder;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,Object(W.a)(Object(W.a)({},e),{},{placeholder:t})),Object(r.jsx)(X.a,{name:e.name,component:"span"})]})}var xn=function(){var n=Object(s.g)(),e=Object(s.f)(),t=function(t){!function(n){N.apply(this,arguments)}({number:t.inv,date_created:t.invoiceDate,date_supplied:t.supplyDate,comment:t.comment}),e.push(n.pathname="/")};return Object(r.jsx)(X.d,{initialValues:{inv:"",invoiceDate:"",supplyDate:"",comment:""},validationSchema:pn,onSubmit:function(n,e){t(n),e.setSubmitting(!1),e.resetForm({})},children:Object(r.jsxs)(X.c,{children:[Object(r.jsxs)(an,{children:[Object(r.jsxs)(on,{children:[Object(r.jsxs)(sn,{children:["Number:",Object(r.jsx)(X.b,{name:"inv",type:"number",placeholder:"Enter the number",component:ln})]}),Object(r.jsxs)(sn,{children:["Invoice Date:",Object(r.jsx)(X.b,{name:"invoiceDate",type:"date",placeholder:"Select date",component:ln})]}),Object(r.jsxs)(sn,{children:["Supply Date:",Object(r.jsx)(X.b,{name:"supplyDate",type:"date",placeholder:"Select date",component:ln})]})]}),Object(r.jsxs)(sn,{children:["Comment:",Object(r.jsx)(X.b,{name:"comment",component:jn})]})]}),Object(r.jsx)(bn,{type:"submit",children:"Save"})]})})};function hn(){var n=Object(b.a)(["\n  cursor: pointer;\n  background: transparent;\n  font-size: 16px;\n  color: rgba(128, 128, 128, 1);\n  transition: color 0.2s linear;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n\n  :hover {\n    color: #000;\n  }\n"]);return hn=function(){return n},n}function fn(){var n=Object(b.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 15px 20px;\n  color: ",";\n\n  :first-child {\n    width: 15%;\n  }\n\n  :nth-child(2) {\n    width: 15%;\n  }\n\n  :nth-child(3) {\n    width: 15%;\n  }\n\n  /* :not(:last-child) {\n    width: 23%;\n  } */\n\n  :last-child {\n    width: 10%;\n  }\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return fn=function(){return n},n}function On(){var n=Object(b.a)(["\n  padding: 15px 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return On=function(){return n},n}function mn(){var n=Object(b.a)(["\n  & ",":hover {\n    background-color: rgba(211, 211, 211, 0.4);\n  }\n"]);return mn=function(){return n},n}function vn(){var n=Object(b.a)(["\n  border-bottom: 1px solid rgba(128, 128, 128, 0.4);\n  transition: all 0.2s linear;\n"]);return vn=function(){return n},n}function gn(){var n=Object(b.a)(["\n  background-color: #ddd;\n  border-radius: 5px 5px 0 0;\n  color: rgba(128, 128, 128, 1);\n"]);return gn=function(){return n},n}function wn(){var n=Object(b.a)(["\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n"]);return wn=function(){return n},n}var yn=p.a.table(wn()),kn=p.a.thead(gn()),Sn=p.a.tr(vn()),Dn=p.a.tbody(mn(),Sn),In=p.a.th(On()),qn=p.a.td(fn(),(function(n){return n.isActive?"blue":"rgba(128, 128, 128, 1)"})),En=p.a.button(hn()),Cn=t(105),Rn=t(106),_n=function(n){var e=n.invoices;return Object(r.jsxs)(yn,{children:[Object(r.jsx)(kn,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsx)(In,{children:"Create"}),Object(r.jsx)(In,{children:"No"}),Object(r.jsx)(In,{children:"Supple"}),Object(r.jsx)(In,{children:"Comment"}),Object(r.jsx)(In,{children:"Edit"})]})}),Object(r.jsx)(Dn,{children:e.map((function(n){var e=n._id,t=n.id,c=n.number,i=n.date_created,a=n.date_supplied,o=n.comment;return Object(r.jsxs)(Sn,{children:[Object(r.jsx)(qn,{children:i}),Object(r.jsx)(qn,{isActive:!0,children:"INV-".concat(c)}),Object(r.jsx)(qn,{children:a}),Object(r.jsx)(qn,{children:o}),Object(r.jsxs)(qn,{children:[Object(r.jsx)(En,{children:Object(r.jsx)(Cn.a,{})}),Object(r.jsx)(En,{children:Object(r.jsx)(Rn.a,{})})]})]},e||t)}))})]})};_n.defaultProps={invoices:[]};var An,Mn,Fn=_n,Nn=t(11),Pn=t(37),zn=t(20),Jn=t(19),Ln=Object(P.c)([],Object(zn.a)({},J,(function(n,e){return e.payload}))),Vn=Object(P.c)(!1,(An={},Object(zn.a)(An,z,(function(){return!0})),Object(zn.a)(An,J,(function(){return!1})),Object(zn.a)(An,L,(function(){return!1})),An)),Bn=Object(P.c)(null,(Mn={},Object(zn.a)(Mn,L,(function(n,e){return e.payload})),Object(zn.a)(Mn,z,(function(){return null})),Mn)),Tn=Object(Jn.b)({entities:Ln,isLoading:Vn,error:Bn}),Un=[].concat(Object(Nn.a)(Object(P.d)({serializableCheck:!1})),[Pn.a]),Yn=Object(P.a)({reducer:{invoices:Tn},devTools:!1,middleware:Un});t(232);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d.a,{store:Yn,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(h,{})})})}),document.getElementById("root"))}},[[233,1,2]]]);
//# sourceMappingURL=main.a6a8534d.chunk.js.map