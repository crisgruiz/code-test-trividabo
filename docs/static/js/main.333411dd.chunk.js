(this.webpackJsonptrividabo=this.webpackJsonptrividabo||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);for(var s=n(1),c=n.n(s),a=n(16),r=n.n(a),i=n(8),o=(n(26),n(2)),j=n(17),l=n(18),u=n(21),b=n(20),h=(n(27),n(0)),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("main",{className:"main",children:[Object(h.jsx)("h1",{className:"main__title",children:"Trividabo"}),Object(h.jsx)("p",{className:"main__text",children:"Welcome to trividabo number quiz"}),Object(h.jsx)(i.b,{to:"/MainPage",className:"main__button",title:"Start",children:"Start"})]})})}}]),n}(c.a.Component),d=n(10),O=(n(34),function(){return Math.floor(100*Math.random())}),x=[],f=0;f<10;f++){var w=Math.floor(100*Math.random());x.push(w)}var _=function(e){var t=[e];do{var n=O();t.includes(n)||t.push(n)}while(t.length<4);return t.sort()},p=function(e){var t=e.split(" ");t[0]="What";var n=t.join(" ");return n.substring(0,n.length-1)+"?"},v=function(){return fetch("https://numbersapi.com/".concat(e||O(),"/trivia?json")).then((function(e){return e.json()})).then((function(e){return{text:p(e.text),number:e.number,choices:_(e.number)}}));var e},N=function(e,t){var n=JSON.parse(localStorage.getItem(e));return null===n?t:n},g=function(e,t){localStorage.setItem(e,JSON.stringify(t))},L=(n(35),n(36),function(e){return e.choices.map((function(t,n){return Object(h.jsx)("div",{id:n,className:"answersList",children:Object(h.jsxs)("label",{className:"answersList__answer",children:[Object(h.jsx)("span",{className:"answersList__btn"}),Object(h.jsx)("input",{type:"radio",id:t,value:t,name:"options",className:"answersList__radio",onClick:e.saveUserAnswer}),t]})},n)}))}),k=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:"mainPage__count",children:["Question ",e.count," of 10"]}),Object(h.jsxs)("div",{className:"question",children:[Object(h.jsx)("p",{className:"question__text",children:e.question}),Object(h.jsx)("form",{className:"respondList",children:Object(h.jsx)(L,{saveUserAnswer:e.saveUserAnswer,choices:e.answers})})]}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{className:"buttons__confirm",type:"button",onClick:e.handleConfirmAnswer,children:"Confirm"}),Object(h.jsx)("button",{className:"buttons__skip",type:"button",onClick:e.handleSkip,children:"Skip"}),Object(h.jsx)("button",{className:"buttons__new",type:"button",onClick:e.handleReset,children:"New game"})]})]})},S=(n(37),function(e){return e.answersList.map((function(e,t){return e.isCorrect?Object(h.jsxs)("div",{className:"answerList",children:[Object(h.jsx)("div",{className:"answerList__line"}),Object(h.jsxs)("div",{className:"answerList__container",children:[Object(h.jsx)("p",{className:"answerList__question",children:e.text}),Object(h.jsxs)("div",{className:"answerList__answer",children:[Object(h.jsx)("i",{className:"fas fa-check-circle answerList__answer--correctIcon"}),Object(h.jsx)("p",{className:"answerList__answer--number",children:e.number})]})]})]},t):Object(h.jsxs)("div",{className:"answerList",children:[Object(h.jsx)("div",{className:"answerList__line"}),Object(h.jsxs)("div",{className:"answerList__container",children:[Object(h.jsx)("p",{className:"answerList__question",children:e.text}),Object(h.jsxs)("div",{className:"answerList__answer",children:[Object(h.jsx)("i",{className:"fas fa-times-circle answerList__answer--wrongIcon"}),Object(h.jsx)("p",{className:"answerList__answer--skip",children:"Skipped"}),Object(h.jsxs)("p",{className:"answerList__answer--text",children:["- Right answer was ",e.number]})]})]})]},t)}))}),y=(n(38),function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"playAgainBtn",type:"button",onClick:e.handleReset,children:"Play Again"})})}),C=function(){var e=Object(s.useState)({choices:[]}),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(),r=Object(d.a)(a,2),i=r[0],o=r[1],j=Object(s.useState)(N("count",1)),l=Object(d.a)(j,2),u=l[0],b=l[1],m=Object(s.useState)(N("answersList",[])),O=Object(d.a)(m,2),x=O[0],f=O[1];Object(s.useEffect)((function(){N("trivia")?c(N("trivia")):v().then((function(e){return c(e)}))}),[]),Object(s.useEffect)((function(){g("trivia",n)}),[n]),Object(s.useEffect)((function(){g("count",u),g("answersList",x)}),[u,x]),console.log(n.number);var w=function(e){var t=parseInt(e.currentTarget.id);o(t)},_=function(){o(),b(1),f([]),v().then((function(e){return c(e)}))},p=function(){f(x.concat([n])),b(u+1),o(),v().then((function(e){return c(e)}))},L=function(){i&&(n.userAnswer=i,n.isCorrect=A(n),p())},C=function(){p()},A=function(e){return e.userAnswer===e.number};return console.log(x),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{className:"title",children:"Trividabo"}),Object(h.jsx)("div",{className:"mainPage",children:10===x.length?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(S,{answersList:x}),Object(h.jsx)(y,{answersList:x,handleReset:_})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(k,{question:n.text,answers:n.choices,handleNextQuestion:p,saveUserAnswer:w,count:u,handleConfirmAnswer:L,handleSkip:C,handleReset:_}),Object(h.jsx)(S,{answersList:x})]})})]})})},A=function(){return Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(h.jsx)(o.a,{path:"/MainPage",component:C})]})};r.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.333411dd.chunk.js.map