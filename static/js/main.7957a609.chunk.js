(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),a=c(10),i=c.n(a),l=(c(16),c(5)),d=c(1),r=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"#todo"})})},o=function(e){var t=e.activeTab,c=e.setActiveTab,s=function(e){c(e.currentTarget.innerHTML)},n=function(e){return t===e&&"active"};return Object(d.jsxs)("div",{className:"tabsDisplay",children:[Object(d.jsxs)("ul",{className:"tabsDisplay__list",children:[Object(d.jsx)("li",{className:"tabsDisplay__list__item ".concat(n("All")),onClick:s,children:"All"}),Object(d.jsx)("li",{className:"tabsDisplay__list__item ".concat(n("Active")),onClick:s,children:"Active"}),Object(d.jsx)("li",{className:"tabsDisplay__list__item ".concat(n("Completed")),onClick:s,children:"Completed"})]}),Object(d.jsx)("hr",{className:"tabsDisplay__separator"})]})},j=c(3),u=function(e){var t=e.todos,c=e.setTodos,n=Object(s.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1];return Object(d.jsxs)("div",{className:"addItem",children:[Object(d.jsx)("input",{type:"text",className:"addItem__input",placeholder:"add details",onChange:function(e){r(e.target.value)},value:i}),Object(d.jsx)("button",{className:"addItem__btn",onClick:function(){return function(){if(i){var e=t.length>0?t.reduce((function(e,t){return t.id>e?t.id:e}),t[0].id):0,s=Object(j.a)(t);s.push({id:e+1,text:i,state:!1}),c(s),r("")}}()},children:"Add"})]})},b=c(9),m=c(11),O=function(e){var t=e.name,c=e.checkedState,s=e.handleOnChange,n=e.itemId,a=c&&"checked",i=c&&Object(d.jsx)(m.a,{});return Object(d.jsxs)("label",{className:"item",children:[i,Object(d.jsx)("input",{type:"checkbox",id:"custom-checkbox-".concat(n),className:"item__input ".concat(a),name:t,value:t,checked:c,onChange:function(){return s(n)}}),Object(d.jsx)("span",{children:t})]})},h=c(8),x=function(e){var t,c=e.todos,s=e.setTodos,n=e.activeTab,a=function(e){var t=c.findIndex((function(t){return t.id===e})),n=Object(j.a)(c);n[t]=Object(b.a)(Object(b.a)({},n[t]),{},{state:!n[t].state}),s(n)};return t="Active"===n?Object(d.jsx)("ul",{className:"items__list",children:c.filter((function(e){return!1===e.state})).map((function(e){return Object(d.jsx)("li",{className:"items__list__item",children:Object(d.jsx)(O,{name:e.text,checkedState:e.state,handleOnChange:a,itemId:e.id})},e.id)}))}):"Completed"===n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"items__list",children:c.filter((function(e){return!0===e.state})).map((function(e){return Object(d.jsxs)("li",{className:"items__list__item",children:[Object(d.jsx)(O,{name:e.text,checkedState:e.state,handleOnChange:a,itemId:e.id}),Object(d.jsx)("span",{onClick:function(){return function(e){var t=c.findIndex((function(t){return t.id===e})),n=Object(j.a)(c);n.splice(t,1),s(n)}(e.id)},children:Object(d.jsx)(h.a,{})})]},e.id)}))}),Object(d.jsx)("div",{className:"btn__wrapper",children:Object(d.jsxs)("button",{onClick:function(){return function(){var e=c.filter((function(e){return!1===e.state})),t=Object(j.a)(e);s(t)}()},children:[Object(d.jsx)(h.a,{}),"delete all"]})})]}):Object(d.jsx)("ul",{className:"items__list",children:c.map((function(e){return Object(d.jsx)("li",{className:"items__list__item",children:Object(d.jsx)(O,{name:e.text,checkedState:e.state,handleOnChange:a,itemId:e.id})},e.id)}))}),Object(d.jsx)("div",{className:"items",children:t})};var _=function(){var e=localStorage.getItem("todos"),t=Object(s.useState)(e?JSON.parse(e):[{id:1,text:"Do coding challenges",state:!1},{id:2,text:"Do coding challenges",state:!1},{id:3,text:"Do coding challenges",state:!0}]),c=Object(l.a)(t,2),n=c[0],a=c[1];Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);var i=Object(s.useState)("All"),j=Object(l.a)(i,2),b=j[0],m=j[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(r,{}),Object(d.jsx)(o,{activeTab:b,setActiveTab:m}),Object(d.jsx)(u,{todos:n,setTodos:a}),Object(d.jsx)(x,{todos:n,setTodos:a,activeTab:b})]})};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(_,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7957a609.chunk.js.map