(this["webpackJsonpsimple-todoapp"]=this["webpackJsonpsimple-todoapp"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=(n(14),n(1)),i=n(8),u=n(2),d=(n(15),n(7)),s=n.n(d);n(18);var m=function(e){var t=e.addTodo,n=Object(a.useState)({id:"",task:"",done:!1}),c=Object(u.a)(n,2),r=c[0],i=c[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r.task.trim()&&(t(Object(l.a)({},r,{id:s.a.v4()})),i(Object(l.a)({},r,{task:""})))}},o.a.createElement("input",{name:"task",type:"text",value:r.task,onChange:function(e){i(Object(l.a)({},r,{task:e.target.value}))}}),o.a.createElement("button",{type:"submit"},"ADD"))};n(19);var f=function(e){var t=e.todo,n=e.toggleDone,a=e.removeTodo;return o.a.createElement("div",{className:"item-container"},o.a.createElement("div",{className:"wrapper"},o.a.createElement("input",{className:"checkbox",type:"checkbox",onClick:function(){n(t.id)},defaultChecked:t.done}),o.a.createElement("div",{className:t.done?"line":null}),o.a.createElement("li",{className:t.done?"li-done":"li-notdone"},t.task)),o.a.createElement("button",{className:"del",onClick:function(){a(t.id)}},"x"))};var p=function(e){var t=e.todos,n=e.toggleDone,a=e.removeTodo;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(f,{key:e.id,todo:e,toggleDone:n,removeTodo:a})})))};var v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo-list-todos"));e&&c(e)}),[]),Object(a.useEffect)((function(){localStorage.setItem("react-todo-list-todos",JSON.stringify(n))}),[n]),o.a.createElement("div",{className:"App"},o.a.createElement("header",null,"S I M P L E ",o.a.createElement("strong",null,"T O D O")),o.a.createElement(m,{addTodo:function(e){c([e].concat(Object(i.a)(n)))}}),o.a.createElement(p,{todos:n,toggleDone:function(e){c(n.map((function(t){return t.id===e?Object(l.a)({},t,{done:!t.done}):t})))},removeTodo:function(e){c(n.filter((function(t){return t.id!==e})))}}))};r.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.e1203f60.chunk.js.map