(this["webpackJsonptemplate-app"]=this["webpackJsonptemplate-app"]||[]).push([[0],{76:function(n,t,e){},77:function(n,t,e){"use strict";e.r(t);var r=e(2),c=e(1),a=e.n(c),i=e(26),o=e.n(i),u=e(16),s=e(18),d=e(6),b=e(3),p=e(4);function l(){var n=Object(b.a)(["\n  width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media (max-width: 1283px) {\n    width: 940px;\n  }\n\n  @media (max-width: 992px) {\n    width: 700px;\n  }\n\n  @media (max-width: 768px) {\n    width: 520px;\n  }\n\n  @media (max-width: 576px) {\n    width: 90%;\n  }\n"]);return l=function(){return n},n}var j=p.a.div(l()),f=function(n){var t=n.children;return Object(r.jsx)(j,{children:t})};var h=function(){return Object(r.jsx)(f,{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/",exact:!0,component:W}),Object(r.jsx)(d.a,{path:"/create-invoice",component:$}),Object(r.jsx)(d.a,{path:"/edit-invoice/:id",component:cn})]})})};function x(){var n=Object(b.a)([""]);return x=function(){return n},n}function O(){var n=Object(b.a)(["\n  width: 100%;\n  position: relative;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 20px;\n  color: rgba(128, 128, 128, 1);\n  border-left: 4px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n\n  ::before {\n    display: block;\n    position: absolute;\n    height: 1px;\n    width: 85%;\n    content: '';\n    background: rgba(128, 128, 128, 0.4);\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  }\n"]);return O=function(){return n},n}var v=p.a.header(O()),m=p.a.h3(x()),g=function(n){var t=n.children;return Object(r.jsx)(v,{children:t&&Object(r.jsx)(m,{children:t})})};g.defaultProps={children:""};var w=g;function k(){var n=Object(b.a)(["\n  margin-bottom: 15px;\n"]);return k=function(){return n},n}function y(){var n=Object(b.a)(["\n  padding-top: 35px;\n  padding-bottom: 35px;\n  background-color: #fff;\n  padding-left: 24px;\n  padding-right: 24px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n"]);return y=function(){return n},n}var I=p.a.div(y()),S=p.a.h3(k()),E=function(n){var t=n.title,e=n.children;return Object(r.jsxs)(I,{children:[t&&Object(r.jsx)(S,{children:t}),e]})};E.defaultProps={title:"",children:""};var C=E,_=e(8),D=e.n(_),A=e(15),L=e(21),P=e.n(L);function z(){return N.apply(this,arguments)}function N(){return(N=Object(A.a)(D.a.mark((function n(){var t,e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.get("/invoices");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return q.apply(this,arguments)}function q(){return(q=Object(A.a)(D.a.mark((function n(t){var e,r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.get("/invoices/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function J(){return(J=Object(A.a)(D.a.mark((function n(t){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.post("/invoices",t);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){return(T=Object(A.a)(D.a.mark((function n(t){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P()({method:"DELETE",url:"http://localhost:4030/invoices/".concat(t)});case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function B(){return(B=Object(A.a)(D.a.mark((function n(t,e){return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.patch("/invoices/".concat(t),e);case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}P.a.defaults.baseURL="http://localhost:4030";var M=e(7),U=Object(M.b)("invoices/fetchInvoicesRequest"),V=Object(M.b)("invoices/fetchInvoicesSuccess"),Y=Object(M.b)("invoices/fetchInvoicesError"),F=function(n){return n.invoices.entities};function G(){var n=Object(b.a)(["\n  padding: 10px 25px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 600;\n  background-color: rgb(11, 11, 255);\n  cursor: pointer;\n"]);return G=function(){return n},n}function H(){var n=Object(b.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]);return H=function(){return n},n}var K=p.a.section(H()),Q=Object(p.a)(s.b)(G()),W=function(){var n=Object(u.b)(),t=Object(u.c)(F);return Object(c.useEffect)((function(){n(function(){var n=Object(A.a)(D.a.mark((function n(t){var e;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(U()),n.prev=1,n.next=4,z();case 4:e=n.sent,t(V(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t(Y(n.t0));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}())}),[n]),Object(r.jsxs)(K,{children:[Object(r.jsx)(w,{children:"Invoices"}),Object(r.jsx)(C,{title:"Actions",children:Object(r.jsx)(Q,{to:"/create-invoice",children:"Add new"})}),t&&Object(r.jsx)(C,{title:"Invoices",children:Object(r.jsx)(Qn,{invoices:t})})]})};function X(){var n=Object(b.a)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]);return X=function(){return n},n}var Z=p.a.section(X()),$=function(){return Object(r.jsxs)(Z,{children:[Object(r.jsx)(w,{children:"Create Invoice"}),Object(r.jsx)(C,{children:Object(r.jsx)(In,{})})]})},nn=Object(M.b)("editInvoice/fetchInvoiceRequest"),tn=Object(M.b)("editInvoice/fetchInvoiceSuccess"),en=Object(M.b)("editInvoice/fetchInvoiceError"),rn=function(n){return n.editInvoice.invoice},cn=function(){var n=Object(d.h)().id,t=Object(u.b)(),e=Object(u.c)(rn);return Object(c.useEffect)((function(){t(function(n){return function(){var t=Object(A.a)(D.a.mark((function t(e){var r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(nn()),t.prev=1,t.next=4,R(n);case 4:r=t.sent,e(tn(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(en(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(n){return t.apply(this,arguments)}}()}(n))}),[t,n]),Object(r.jsxs)(Z,{children:[Object(r.jsx)(w,{children:"Edit Invoice"}),e.id&&Object(r.jsx)(C,{children:Object(r.jsx)(In,{invoice:e})})]})},an=e(25),on=function(n){var t=n.split("-");return t[0].length<3?t.reverse().join("-"):n};function un(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 25px;\n  border-radius: 5px;\n  color: #fff;\n  font-weight: 600;\n  background-color: rgb(11, 11, 255);\n  cursor: pointer;\n  margin-left: auto;\n"]);return un=function(){return n},n}function sn(){var n=Object(b.a)(["\n  display: block;\n  font-weight: 600;\n"]);return sn=function(){return n},n}function dn(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 15px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 10px;\n  outline: none;\n"]);return dn=function(){return n},n}function bn(){var n=Object(b.a)(["\n  display: block;\n  padding: 10px 15px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 10px;\n"]);return bn=function(){return n},n}function pn(){var n=Object(b.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n  grid-gap: 35px;\n  margin-bottom: 35px;\n"]);return pn=function(){return n},n}function ln(){var n=Object(b.a)(["\n  padding: 35px 25px;\n  border: 1px solid rgba(128, 128, 128, 0.4);\n  margin-bottom: 30px;\n"]);return ln=function(){return n},n}var jn=p.a.form(ln()),fn=p.a.div(pn()),hn=p.a.input(bn()),xn=p.a.textarea(dn()),On=p.a.label(sn()),vn=p.a.button(un()),mn="inv",gn="invoiceDate",wn="supplyDate",kn="comment",yn=function(n){var t=n.invoice,e=Object(d.g)(),a=Object(d.f)(),i=Object(c.useState)(t?t.number:""),o=Object(an.a)(i,2),u=o[0],s=o[1],b=Object(c.useState)(t?on(t.date_created):""),p=Object(an.a)(b,2),l=p[0],j=p[1],f=Object(c.useState)(t?on(t.date_supplied):""),h=Object(an.a)(f,2),x=h[0],O=h[1],v=Object(c.useState)(t?t.comment:""),m=Object(an.a)(v,2),g=m[0],w=m[1],k=function(n){var t=n.target,e=t.name,r=t.value;switch(!0){case e===mn:s(r);break;case e===gn:j(r);break;case e===wn:O(r);break;case e===kn:w(r);break;default:return}};return Object(r.jsxs)(jn,{onSubmit:function(n){n.preventDefault();var r={number:u,date_created:l,date_supplied:x,comment:g};t?function(n,t){B.apply(this,arguments)}(t.id,r):function(n){J.apply(this,arguments)}(r),a.push(e.pathname="/")},children:[Object(r.jsxs)(fn,{children:[Object(r.jsxs)(On,{children:["Number:",Object(r.jsx)(hn,{name:mn,type:"number",value:u,onChange:k,placeholder:"Enter the number"})]}),Object(r.jsxs)(On,{children:["Invoice Date:",Object(r.jsx)(hn,{name:gn,type:"date",value:l,placeholder:"Select date",onChange:k})]}),Object(r.jsxs)(On,{children:["Supply Date:",Object(r.jsx)(hn,{name:wn,type:"date",value:x,placeholder:"Select date",onChange:k})]})]}),Object(r.jsxs)(On,{children:["Comment:",Object(r.jsx)(xn,{name:kn,value:g,onChange:k})]}),Object(r.jsx)(vn,{type:"submit",children:"Save"})]})};yn.defaultProps={invoice:null};var In=yn,Sn=e(45),En=e(46);function Cn(){var n=Object(b.a)(["\n  cursor: pointer;\n  background: transparent;\n  font-size: 16px;\n  color: rgba(128, 128, 128, 1);\n  transition: color 0.2s linear;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n\n  :hover {\n    color: #000;\n  }\n"]);return Cn=function(){return n},n}function _n(){var n=Object(b.a)(["\n  cursor: pointer;\n  background: transparent;\n  font-size: 16px;\n  color: rgba(128, 128, 128, 1);\n  transition: color 0.2s linear;\n\n  :not(:last-child) {\n    margin-right: 5px;\n  }\n\n  :hover {\n    color: #000;\n  }\n"]);return _n=function(){return n},n}function Dn(){var n=Object(b.a)(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 15px 20px;\n  color: ",";\n\n  :first-child {\n    width: 15%;\n  }\n\n  :nth-child(2) {\n    width: 15%;\n  }\n\n  :nth-child(3) {\n    width: 15%;\n  }\n\n  /* :not(:last-child) {\n    width: 23%;\n  } */\n\n  :last-child {\n    width: 10%;\n  }\n\n  ::first-letter {\n    text-transform: uppercase;\n  }\n"]);return Dn=function(){return n},n}function An(){var n=Object(b.a)(["\n  padding: 15px 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return An=function(){return n},n}function Ln(){var n=Object(b.a)(["\n  & ",":hover {\n    background-color: rgba(211, 211, 211, 0.4);\n  }\n"]);return Ln=function(){return n},n}function Pn(){var n=Object(b.a)(["\n  border-bottom: 1px solid rgba(128, 128, 128, 0.4);\n  transition: all 0.2s linear;\n"]);return Pn=function(){return n},n}function zn(){var n=Object(b.a)(["\n  background-color: #ddd;\n  border-radius: 5px 5px 0 0;\n  color: rgba(128, 128, 128, 1);\n"]);return zn=function(){return n},n}function Nn(){var n=Object(b.a)(["\n  width: 100%;\n  text-align: center;\n  border-collapse: collapse;\n"]);return Nn=function(){return n},n}var Rn=p.a.table(Nn()),qn=p.a.thead(zn()),Jn=p.a.tr(Pn()),Tn=p.a.tbody(Ln(),Jn),Bn=p.a.th(An()),Mn=p.a.td(Dn(),(function(n){return n.isActive?"blue":"rgba(128, 128, 128, 1)"})),Un=p.a.button(_n()),Vn=Object(p.a)(s.b)(Cn()),Yn=function(n){var t=n.invoices,e=function(n){!function(n){T.apply(this,arguments)}(n)};return Object(r.jsxs)(Rn,{children:[Object(r.jsx)(qn,{children:Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Bn,{children:"Create"}),Object(r.jsx)(Bn,{children:"No"}),Object(r.jsx)(Bn,{children:"Supple"}),Object(r.jsx)(Bn,{children:"Comment"}),Object(r.jsx)(Bn,{children:"Edit"})]})}),Object(r.jsx)(Tn,{children:t.map((function(n){var t=n._id,c=n.id,a=n.number,i=n.date_created,o=n.date_supplied,u=n.comment;return Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Mn,{children:i}),Object(r.jsx)(Mn,{isActive:!0,children:"INV-".concat(a)}),Object(r.jsx)(Mn,{children:o}),Object(r.jsx)(Mn,{children:u}),Object(r.jsxs)(Mn,{children:[Object(r.jsx)(Vn,{to:"/edit-invoice/".concat(t||c),children:Object(r.jsx)(Sn.a,{})}),Object(r.jsx)(Un,{onClick:function(){return e(t||c)},children:Object(r.jsx)(En.a,{})})]})]},t||c)}))})]})};Yn.defaultProps={invoices:[]};var Fn,Gn,Hn,Kn,Qn=Yn,Wn=e(47),Xn=e(23),Zn=e(10),$n=e(17),nt=Object(M.c)([],Object(Zn.a)({},V,(function(n,t){return t.payload}))),tt=Object(M.c)(!1,(Fn={},Object(Zn.a)(Fn,U,(function(){return!0})),Object(Zn.a)(Fn,V,(function(){return!1})),Object(Zn.a)(Fn,Y,(function(){return!1})),Fn)),et=Object(M.c)(null,(Gn={},Object(Zn.a)(Gn,Y,(function(n,t){return t.payload})),Object(Zn.a)(Gn,U,(function(){return null})),Gn)),rt=Object($n.b)({entities:nt,isLoading:tt,error:et}),ct=Object(M.c)({},Object(Zn.a)({},tn,(function(n,t){return t.payload}))),at=Object(M.c)(!1,(Hn={},Object(Zn.a)(Hn,nn,(function(){return!0})),Object(Zn.a)(Hn,tn,(function(){return!1})),Object(Zn.a)(Hn,en,(function(){return!1})),Hn)),it=Object(M.c)(null,(Kn={},Object(Zn.a)(Kn,en,(function(n,t){return t.payload})),Object(Zn.a)(Kn,nn,(function(){return null})),Kn)),ot=Object($n.b)({invoice:ct,isLoading:at,error:it}),ut=[].concat(Object(Wn.a)(Object(M.d)({serializableCheck:!1})),[Xn.a]),st=Object(M.a)({reducer:{invoices:rt,editInvoice:ot},devTools:!1,middleware:ut});e(76);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:st,children:Object(r.jsx)(s.a,{children:Object(r.jsx)(h,{})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f734f13a.chunk.js.map