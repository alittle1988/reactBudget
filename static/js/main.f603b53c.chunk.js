(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(33)},23:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(23),a(7)),s=a(6),m=(a(25),a(27),a(34)),u=a(35),i=a(30),g=a(38);function E(e){var t=Object(n.useState)(new Date),a=Object(s.a)(t,2),r=a[0],c=a[1],o=r.toDateString();return Object(n.useEffect)(function(){var e=setInterval(function(){c(new Date)},1e3);return function(){return clearInterval(e)}},[]),l.a.createElement("div",{className:"date-time"},l.a.createElement("p",{className:"date"},o))}function d(){alert("super duper gang")}var y=function(e){var t=e.years,a=e.months;return e.onYearchange,l.a.createElement(m.a,{className:"header",fluid:!0},l.a.createElement("h1",{className:"text-center"},"Budget App"),l.a.createElement(E,null),l.a.createElement(u.a,{className:"headerRow"},l.a.createElement(i.a,{className:"headerCol"},l.a.createElement(g.a,{style:{display:"flex"},className:"my-2"},l.a.createElement(g.a.Label,{style:{fontSize:25},className:"mx-4"},"years: "),l.a.createElement(g.a.Select,{className:"yearSelect",style:{width:120,height:40}},t.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)})))),l.a.createElement(i.a,{className:"headerCol"},l.a.createElement(g.a,{style:{display:"flex"},className:"my-2"},l.a.createElement(g.a.Label,{style:{fontSize:25},className:"mx-3"},"Months:"),l.a.createElement(g.a.Select,{onChange:d,style:{width:120,height:40}},a.map(function(e,t){return l.a.createElement("option",{key:t,value:e},e)}))))))},h=a(39);var b=function(e){var t=e.label,a=e.things,n=e.amount,r=e.validate;return l.a.createElement(m.a,null,l.a.createElement(u.a,{className:"justify-content-center"},l.a.createElement(g.a,null,l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{htmlFor:"input-name"},t),function(t){switch(t){case"Tips":case"Gas":case"Groceries":return l.a.createElement(g.a.Control,{id:"input-name",onChange:e.onThingsChange,type:"date",value:a,placeholder:"What",style:{width:150}});default:return l.a.createElement(g.a.Control,{id:"input-name",onChange:e.onThingsChange,type:"text",value:a,placeholder:"What",style:{width:150}})}}(t)),l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,{htmlFor:"input-amount"},"Amount"),l.a.createElement(g.a.Control,{id:"input-amount",onChange:e.onAmountChange,type:"text",value:n,placeholder:"$0.00",style:{width:150}}))),l.a.createElement("div",{className:"validate"},r)),l.a.createElement(h.a,{onClick:e.onButtonClick,className:"submitButton"},"Submit"))};var p=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],E=u[1],d=Object(n.useState)(""),y=Object(s.a)(d,2),h=y[0],p=y[1],f=e.onIncomeChange,v=e.category;function S(){r&&i?(f(v,r,i),c(""),E(""),p("")):p("Please enter Things and Amount")}function O(e){c(e.target.value)}function C(e){E(e.target.value)}switch(v){case"income":return l.a.createElement(m.a,null,l.a.createElement(g.a,{style:{display:"flex"},className:"my-5"},l.a.createElement(g.a.Label,{style:{fontSize:30},className:"mx-2"},"Category:"),l.a.createElement(g.a.Select,{onChange:e.onCategoryChange,style:{width:200},className:"categoryDrop",id:"categoryDropdown",value:v},l.a.createElement("option",{value:"",disabled:!0},"Select Category"),e.categorys.map(function(e){return l.a.createElement("option",{value:e.toLocaleLowerCase(),key:e,className:"categorySelect"},e)}))),l.a.createElement(b,{onButtonClick:S,onThingsChange:O,onAmountChange:C,label:e.category[0].toUpperCase()+e.category.substring(1),things:r,amount:i,validate:h}));case"tips":case"expenses":case"myself":case"eating out":case"misc":case"gas":case"groceries":return l.a.createElement(m.a,null,l.a.createElement(g.a,{style:{display:"flex"},className:"my-5"},l.a.createElement(g.a.Label,{style:{fontSize:30},className:"mx-2"},"Category:"),l.a.createElement(g.a.Select,{onChange:e.onCategoryChange,style:{width:200},className:"categoryDrop",id:"categoryDropdown",value:e.category},l.a.createElement("option",{value:"",disabled:!0},"Select Category"),e.categorys.map(function(e){return l.a.createElement("option",{value:e.toLocaleLowerCase(),key:e,className:"categorySelect"},e)}))),l.a.createElement(b,{onButtonClick:S,onThingsChange:O,onAmountChange:C,things:r,amount:i,validate:h,label:e.category[0].toUpperCase()+e.category.substring(1)}));default:return l.a.createElement(m.a,null,l.a.createElement(g.a,{style:{display:"flex"},className:"my-5"},l.a.createElement(g.a.Label,{style:{fontSize:30},className:"mx-2"},"Category:"),l.a.createElement(g.a.Select,{onChange:e.onCategoryChange,style:{width:200},className:"categoryDrop",id:"categoryDropdown",value:e.category},l.a.createElement("option",{value:"",disabled:!0},"Select Category"),e.categorys.map(function(e){return l.a.createElement("option",{value:e.toLocaleLowerCase(),key:e,className:"categorySelect"},e)}))))}},f=a(36);var v=function(e){var t=e.title,a=e.array,n=e.onCellDeleteBtn,r=0;for(var c in a)r+=Number(a[c].amount);return l.a.createElement(f.a,{striped:!0,bordered:!0,hover:!0,className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"title"},t),l.a.createElement("th",{className:"amount",style:{backgroundColor:"green"}},"Amount"),l.a.createElement("th",{className:"delete"},"Delete"))),l.a.createElement("tbody",null,a.map(function(e,r){return l.a.createElement("tr",{style:{margin:"0, auto"},key:r},l.a.createElement("td",null,e.name),l.a.createElement("td",null,"$",Number(e.amount).toFixed(2)),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-success",onClick:function(){return n(a,e,t)}},"delete")))}),l.a.createElement("tr",null,l.a.createElement("td",null,"Total"),l.a.createElement("td",null,"$",r.toFixed(2)))))};function S(e){var t=e.categorys,a=e.income,n=e.tips,r=e.expenses,c=e.myself,o=e.eatingOut,s=e.misc,m=e.gas,u=e.groceries,i=e.onShowTotal;function g(e){var t=0;return e.forEach(function(e){t+=Number(e.amount)}),t}return l.a.createElement("div",{className:"popUp-table"},l.a.createElement("h4",{className:"text-end p-2 close",onClick:i},"X"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("h3",null,"Totals"))),l.a.createElement("tr",null,l.a.createElement("td",null,t[0]),l.a.createElement("td",null,"$",g(a))),l.a.createElement("tr",null,l.a.createElement("td",null,t[1]),l.a.createElement("td",null,"$",g(n))),l.a.createElement("tr",null,l.a.createElement("td",null,t[2]),l.a.createElement("td",null,"$",g(r))),l.a.createElement("tr",null,l.a.createElement("td",null,t[3]),l.a.createElement("td",null,"$",g(c))),l.a.createElement("tr",null,l.a.createElement("td",null,t[4]),l.a.createElement("td",null,"$",g(o))),l.a.createElement("tr",null,l.a.createElement("td",null,t[5]),l.a.createElement("td",null,"$",g(s))),l.a.createElement("tr",null,l.a.createElement("td",null,t[6]),l.a.createElement("td",null,"$",g(m))),l.a.createElement("tr",null,l.a.createElement("td",null,t[7]),l.a.createElement("td",null,"$",g(u))))))}var O=["Income","Tips","Expenses","Myself","Eating Out","Misc","Gas","Groceries"],C=[2022,2023,2024,2025,2026,2027,2028,2029,2030],N=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];var j=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(2022),u=Object(s.a)(c,2),i=u[0],g=u[1],E=Object(n.useState)(function(){var e=localStorage.getItem("income");return JSON.parse(e)||[]}),d=Object(s.a)(E,2),h=d[0],b=d[1],f=Object(n.useState)(function(){var e=localStorage.getItem("tips");return JSON.parse(e)||[]}),j=Object(s.a)(f,2),w=j[0],x=j[1],k=Object(n.useState)(function(){var e=localStorage.getItem("expenses");return JSON.parse(e)||[]}),I=Object(s.a)(k,2),D=I[0],J=I[1],B=Object(n.useState)(function(){var e=localStorage.getItem("myself");return JSON.parse(e)||[]}),T=Object(s.a)(B,2),L=T[0],$=T[1],A=Object(n.useState)(function(){var e=localStorage.getItem("eatingOut");return JSON.parse(e)||[]}),F=Object(s.a)(A,2),G=F[0],M=F[1],z=Object(n.useState)(function(){var e=localStorage.getItem("misc");return JSON.parse(e)||[]}),P=Object(s.a)(z,2),U=P[0],Y=P[1],R=Object(n.useState)(function(){var e=localStorage.getItem("gas");return JSON.parse(e)||[]}),W=Object(s.a)(R,2),H=W[0],V=W[1],X=Object(n.useState)(function(){var e=localStorage.getItem("groceries");return JSON.parse(e)||[]}),q=Object(s.a)(X,2),K=q[0],Q=q[1],Z=Object(n.useState)(!1),_=Object(s.a)(Z,2),ee=_[0],te=_[1];Object(n.useEffect)(function(){localStorage.setItem("income",JSON.stringify(h)),localStorage.setItem("tips",JSON.stringify(w)),localStorage.setItem("expenses",JSON.stringify(D)),localStorage.setItem("myself",JSON.stringify(L)),localStorage.setItem("eatingOut",JSON.stringify(G)),localStorage.setItem("misc",JSON.stringify(U)),localStorage.setItem("gas",JSON.stringify(H)),localStorage.setItem("groceries",JSON.stringify(K))},[h,w,D,L,G,U,H,K]);var ae=function(){te(!ee)},ne=function(e,t,a){var n=Object(o.a)(e);n.forEach(function(e){if(e.name===t.name){var l=n.indexOf(e);n.splice(l,1);var r=0;switch(n.forEach(function(e){e.id=r,r++}),a){case"Income":b(n);break;case"Tips":x(n);break;case"Expenses":J(n);break;case"Myself":$(n);break;case"Eating Out":M(n);break;case"Misc":Y(n);break;case"Gas":V(n);break;case"Groceries":Q(n);break;default:alert("You lose the Game")}}})};return console.log(i),l.a.createElement("div",{className:"App"},l.a.createElement(y,{years:C,months:N,onYearchange:function(e){g(e)}}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(p,{onIncomeChange:function(e,t,a){var n=0;"income"===e?(n=h.length,b([].concat(Object(o.a)(h),[{id:n,name:t,amount:a}]))):"tips"===e?(n=w.length,x([].concat(Object(o.a)(w),[{id:n,name:t,amount:a}]))):"expenses"===e?(n=D.length,J([].concat(Object(o.a)(D),[{id:n,name:t,amount:a}]))):"myself"===e?(n=L.length,$([].concat(Object(o.a)(L),[{id:n,name:t,amount:a}]))):"eating out"===e?(n=G.length,M([].concat(Object(o.a)(G),[{id:n,name:t,amount:a}]))):"misc"===e?(n=U.length,Y([].concat(Object(o.a)(U),[{id:n,name:t,amount:a}]))):"gas"===e?(n=H.length,V([].concat(Object(o.a)(H),[{id:n,name:t,amount:a}]))):"groceries"===e&&(n=K.length,Q([].concat(Object(o.a)(K),[{id:n,name:t,amount:a}])))},onCategoryChange:function(e){r(e.target.value)},income:h,categorys:O,category:a})),l.a.createElement("div",{className:"col-4",style:{marginTop:60}},l.a.createElement("button",{className:"btn btn-primary",onClick:ae},"View Category totals"))),!0===ee?l.a.createElement(S,{categorys:O,income:h,tips:w,expenses:D,myself:L,eatingOut:G,misc:U,gas:H,groceries:K,onShowTotal:ae}):l.a.createElement("div",null),l.a.createElement(m.a,{className:"tableContainer"},l.a.createElement("h1",{className:"tableContainerH1"},"Tables"),h.length>0?l.a.createElement(v,{title:O[0],array:h,onCellDeleteBtn:ne}):l.a.createElement("div",null),w.length>0?l.a.createElement(v,{title:O[1],array:w,onCellDeleteBtn:ne}):l.a.createElement("div",null),D.length>0?l.a.createElement(v,{title:O[2],array:D,onCellDeleteBtn:ne}):l.a.createElement("div",null),L.length>0?l.a.createElement(v,{title:O[3],array:L,onCellDeleteBtn:ne}):l.a.createElement("div",null),G.length>0?l.a.createElement(v,{title:O[4],array:G,onCellDeleteBtn:ne}):l.a.createElement("div",null),U.length>0?l.a.createElement(v,{title:O[5],array:U,onCellDeleteBtn:ne}):l.a.createElement("div",null),H.length>0?l.a.createElement(v,{title:O[6],array:H,onCellDeleteBtn:ne}):l.a.createElement("div",null),K.length>0?l.a.createElement(v,{title:O[7],array:K,onCellDeleteBtn:ne}):l.a.createElement("div",null)))},w=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null))),w()}},[[14,3,2]]]);
//# sourceMappingURL=main.f603b53c.chunk.js.map