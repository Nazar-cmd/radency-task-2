(this["webpackJsonpradency-task-2"]=this["webpackJsonpradency-task-2"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/archive-solid.298c9f19.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/trash-solid.8b6b7284.svg"},,,function(e,t,n){var c={"./archive-solid.svg":13,"./head-side-virus-solid.svg":34,"./lightbulb-regular.svg":35,"./pen-solid.svg":18,"./quote-right-solid.svg":36,"./shopping-cart-solid.svg":37,"./times-solid.svg":38,"./trash-solid.svg":14};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id=17},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/pen-solid.4b1bdc1c.svg"},,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/head-side-virus-solid.a3eed105.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/lightbulb-regular.f46eecaa.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/quote-right-solid.48f83192.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/shopping-cart-solid.d146d6c3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/times-solid.ea7c95d7.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),i=n.n(r),o=n(3),s=n(0),l=function(e){var t=e.children,n=Object(o.c)((function(e){return e.notes})).notes,c=a.a.Children.map(t,(function(e){return a.a.isValidElement(e)?a.a.cloneElement(e,{notes:n}):e}));return Object(s.jsx)(s.Fragment,{children:c})},u=function(e){var t=e.children;return Object(s.jsx)("div",{className:"table__wrapper",children:Object(s.jsx)("div",{className:"table",children:t})})},d=function(e){var t=e.onClick,n=e.text;return Object(s.jsx)("div",{className:"add_note__container",children:Object(s.jsx)("button",{type:"button",className:"add_note__button",onClick:t,children:Object(s.jsx)("span",{className:"add_note__button_text",children:n})})})},j=function(e){var t=e.children;return Object(s.jsx)("div",{className:"table__cell",children:t})},p=function(){return Object(s.jsx)("div",{className:"table__row table__no_items",children:Object(s.jsx)(j,{children:"There are no notes!"})})},b=n(6),_=n(8),h=n.n(_),m=function(e){var t=e.children,n=e.parent,a=e.className,r=Object(c.useMemo)((function(){return document.createElement("div")}),[]);return Object(c.useEffect)((function(){var e=n&&n.appendChild?n:document.body,t=["portal-container"];return a&&a.split(" ").forEach((function(e){return t.push(e)})),t.forEach((function(e){return r.classList.add(e)})),e.appendChild(r),function(){e.removeChild(r)}}),[r,n,a]),i.a.createPortal(t,r)};m.propTypes={children:h.a.node.isRequired,className:h.a.string,parent:h.a.node};var v=m,O=n(12),x=n(2),f={task:"shopping-cart-solid.svg",random_thought:"head-side-virus-solid.svg",idea:"lightbulb-regular.svg",quote:"quote-right-solid.svg"},g=new RegExp("\\d{1,4}([.\\-/])\\d{1,2}([.\\-/])\\d{1,4}","g");function N(e){return f[e.replace(" ","_").toLowerCase()]}function y(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=e.toLocaleString("default",{month:"long"}),c=e.getFullYear();return"".concat(n," ").concat(t,", ").concat(c)}var C=function(e){var t=e.onClose,n=e.submitFunction,a=e.initialValue,r=Object(c.useState)(a),i=Object(b.a)(r,2),o=i[0],l=i[1],u=function(e){var t=e.target,n=t.name,c=t.value;l((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},n,c))}))};return Object(s.jsxs)("div",{className:"note__popup",children:[Object(s.jsx)("div",{className:"note__popup__exit",children:Object(s.jsx)("img",{className:"note__popup__exit_icon",src:"assets/icons/times-solid.svg",alt:"close",onClick:t})}),Object(s.jsxs)("form",{className:"note__popup_form",autoComplete:"off",onSubmit:function(e){e.preventDefault(),t();var c=Object(x.a)(Object(x.a)({},o),{},{created:y(),archived:!1});n(c)},children:[Object(s.jsxs)("div",{className:"popup__group",children:[Object(s.jsx)("input",{name:"name",type:"text",id:"note__name",className:"popup__input",placeholder:"Note name",value:o.name,onChange:u,required:!0}),Object(s.jsx)("label",{htmlFor:"note__name",className:"popup__label",children:"Note name"})]}),Object(s.jsxs)("div",{className:"popup__group popup__input_select",children:[Object(s.jsxs)("select",{name:"category",className:"popup__input",id:"note__category",value:o.category,onChange:u,required:!0,children:[Object(s.jsx)("option",{className:"popup__input_variant",value:"",disabled:!0}),Object(s.jsx)("option",{className:"popup__input_variant",value:"Random Thought",children:"Random Thought"}),Object(s.jsx)("option",{className:"popup__input_variant",value:"Task",children:"Task"}),Object(s.jsx)("option",{className:"popup__input_variant",value:"Idea",children:"Idea"}),Object(s.jsx)("option",{className:"popup__input_variant",value:"Quote",children:"Quote"})]}),Object(s.jsx)("span",{className:"select-highlight"}),Object(s.jsx)("label",{className:"popup__label",children:"Category"})]}),Object(s.jsxs)("div",{className:"popup__group",children:[Object(s.jsx)("textarea",{name:"content",id:"note__content",className:"popup__input popup__input_textarea",placeholder:"Note content",rows:"3",onChange:u,value:o.content,required:!0}),Object(s.jsx)("label",{htmlFor:"note__content",className:"popup__label",children:"Note content"})]}),Object(s.jsx)("button",{type:"submit",className:"popup__button popup__button_submit",children:Object(s.jsx)("h3",{children:"CONFIRM"})})]})]})};C.defaultProps={initialValue:{name:"",category:"",content:""}};var w=C,E=function(e){var t=e.open,n=e.closePopup,c=e.submitPopup,r=e.initialValue,i=a.a.useState(!1),o=Object(b.a)(i,2),l=o[0],u=o[1],d=a.a.useRef(null);a.a.useEffect((function(){var e=d.current,c=function(){return u(t)},a=function(e){return[27].indexOf(e.which)>=0&&n()},r=function(t){return t.target===e&&n()};return e&&(e.addEventListener("transitionend",c),e.addEventListener("click",r),window.addEventListener("keyup",a)),t&&window.setTimeout((function(){document.activeElement.blur(),u(t)}),10),function(){e&&(e.removeEventListener("transitionend",c),e.removeEventListener("click",r)),document.querySelector("#root").removeAttribute("inert"),window.removeEventListener("keyup",a)}}),[t,n]);var j=l&&t?"active":"closed";return Object(s.jsx)(s.Fragment,{children:(t||l)&&Object(s.jsx)(v,{children:Object(s.jsx)("div",{ref:d,className:"note__popup__container ".concat(j),children:Object(s.jsx)(w,{onClose:n,submitFunction:c,initialValue:r})})})})},k="CREATE_NOTE",T="DELETE_NOTE",L="UPDATE_NOTE",S="ARCHIVE_NOTE",A="DELETE_ALL_NOTES",P="ARCHIVE_ALL_NOTES",R=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return{closePopup:function(){return a(!1)},openPopup:function(){return a(!0)},popupOpen:n}},Q=(n(28),function(){var e=Object(o.b)(),t=Object(c.useCallback)((function(){return e({type:P,payload:{}})}),[e]),a=Object(c.useCallback)((function(){return e({type:A,payload:{}})}),[e]);return Object(s.jsxs)("div",{className:"table__header table__row",children:[Object(s.jsx)(j,{children:"Name"}),Object(s.jsx)(j,{children:"Created"}),Object(s.jsx)(j,{children:"Category"}),Object(s.jsx)(j,{children:"Content"}),Object(s.jsx)(j,{children:"Dates"}),Object(s.jsx)(j,{children:Object(s.jsxs)("div",{className:"table__cell_content table__header_content",children:[Object(s.jsx)("img",{src:n(13).default,className:"icon table__header_icon icon_archive_all",alt:"archive",onClick:t}),Object(s.jsx)("img",{src:n(14).default,className:"icon table__header_icon icon_delete_all",alt:"delete",onClick:a})]})})]})}),I=function(e){var t=R(),a=t.openPopup,r=t.closePopup,i=t.popupOpen,l=e.name,u=e.category,d=e.created,p=e.content,b=e.archived,_=e.index,h=function(e){var t=e.match(g);return t?t.join(", "):""}(p),m=N(u),v=b?"archived":"",O=Object(o.b)(),x=Object(c.useCallback)((function(e){return O(function(e,t){return{type:L,payload:{note:e,index:t}}}(e,_))}),[O,_]),f=Object(c.useCallback)((function(){return O(function(e){return{type:S,payload:{index:e}}}(_))}),[O,_]),y=Object(c.useCallback)((function(){return O(function(e){return{type:T,payload:{index:e}}}(_))}),[O,_]),C={name:l,category:u,content:p};return Object(s.jsxs)("div",{className:"table__row_content table__row ".concat(v),children:[Object(s.jsx)(E,{closePopup:r,open:i,submitPopup:x,initialValue:C}),Object(s.jsx)(j,{children:Object(s.jsxs)("div",{className:"table__cell_content table__cell_name",children:[Object(s.jsx)("img",{src:n(17)("./".concat(m)).default,className:"icon table__row_icon",alt:"category_icon"}),Object(s.jsx)("p",{className:"table__cell_text",title:l,children:l})]})}),Object(s.jsx)(j,{children:Object(s.jsx)("p",{className:"table__cell_text",title:d,children:d})}),Object(s.jsx)(j,{children:Object(s.jsx)("p",{className:"table__cell_text",children:u})}),Object(s.jsx)(j,{children:Object(s.jsx)("p",{className:"table__cell_text",title:p,children:p})}),Object(s.jsx)(j,{children:Object(s.jsx)("p",{className:"table__cell_text",title:h,children:h})}),Object(s.jsx)(j,{children:Object(s.jsxs)("div",{className:"table__cell_content table__header_content",children:[Object(s.jsx)("img",{src:n(18).default,className:"icon table__row_icon icon_archive",alt:"edit",onClick:a}),Object(s.jsx)("img",{src:n(13).default,className:"icon table__row_icon icon_archive",alt:"archive",onClick:f}),Object(s.jsx)("img",{src:n(14).default,className:"icon table__row_icon icon_delete",alt:"delete",onClick:y})]})})]})},D=function(e){var t=e.notes,n=R(),a=n.openPopup,r=n.closePopup,i=n.popupOpen,l=Object(o.b)(),j=Object(c.useMemo)((function(){return t.map((function(e,t){var n=e.name,c=e.category,a=e.created,r=e.content,i=e.archived;return Object(s.jsx)(I,{name:n,category:c,created:a,content:r,archived:i,index:t},t)}))}),[t]),b=!t.length&&Object(s.jsx)(p,{}),_=Object(c.useCallback)((function(e){return l(function(e){return{type:k,payload:{note:e}}}(e))}),[l]);return Object(s.jsxs)("div",{className:"notes_table",children:[Object(s.jsxs)(u,{children:[Object(s.jsx)(Q,{}),b,j]}),Object(s.jsx)(d,{text:"Add note!",onClick:a}),Object(s.jsx)(E,{closePopup:r,open:i,submitPopup:_})]})},F=n(4),M=function(e){var t=e.category,c=e.activeQuantity,a=e.archivedQuantity,r=N(t);return Object(s.jsxs)("div",{className:"table__row_content table__row",children:[Object(s.jsx)("div",{className:"table__cell",children:Object(s.jsxs)("div",{className:"table__cell_content table__cell_name",children:[Object(s.jsx)("img",{src:n(17)("./".concat(r)).default,className:"icon table__row_icon",alt:"idea"}),Object(s.jsx)("p",{className:"table__cell_text",children:t})]})}),Object(s.jsx)("div",{className:"table__cell",children:Object(s.jsx)("p",{className:"table__cell_text",children:c})}),Object(s.jsx)("div",{className:"table__cell",children:Object(s.jsx)("p",{className:"table__cell_text",children:a})})]})},q=function(){return Object(s.jsxs)("div",{className:"table__header table__row",id:"cols",children:[Object(s.jsx)(j,{children:"Note Category"}),Object(s.jsx)(j,{children:"Active"}),Object(s.jsx)(j,{children:"Archived"})]})},V=function(e){var t=e.notes,n=Object(F.a)(new Set(t.map((function(e){return e.category})).sort())).map((function(e){var n=t.filter((function(t){return t.category===e&&!t.archived})).length,c=t.filter((function(t){return t.category===e&&t.archived})).length;return{name:e,archivedQuantity:c,activeQuantity:n}})),a=Object(c.useMemo)((function(){return n.map((function(e,t){var n=e.name,c=e.activeQuantity,a=e.archivedQuantity;return Object(s.jsx)(M,{category:n,archivedQuantity:a,activeQuantity:c},t)}))}),[n]);return Object(s.jsxs)(u,{children:[Object(s.jsx)(q,{}),a]})},U=function(){return Object(s.jsx)("div",{className:"start_page",children:Object(s.jsxs)(l,{children:[Object(s.jsx)(D,{}),Object(s.jsx)(V,{})]})})},B=function(){return Object(s.jsx)("div",{className:"page__container",children:Object(s.jsx)(U,{})})},H=n(7),J=n(19),W={notes:[{name:"Shopping list",created:"April 20, 2021",category:"Task",content:"Tomatoes, bread",archived:!1},{name:"The theory of evolution",created:"April 27, 2021",category:"Random Thought",content:"The evolution of human caused dying of thousands species",archived:!1},{name:"New Feature",created:"May 05, 2021",category:"Idea",content:"Implement new types in store. Start on 3/5/2021, end 5/5/2021",archived:!1},{name:"William Gaddis",created:"May 07, 2021",category:"Quote",content:"Power doesn\u2019t corrupt people; people corrupt power.",archived:!1},{name:"Books",created:"May 07, 2021",category:"Task",content:"The Lean Startup",archived:!1},{name:"Redux idea",created:"April 21, 2021",category:"Random Thought",content:"To create global state management in project",archived:!1},{name:"Shopping list",created:"April 20, 2021",category:"Task",content:"Tomatoes, bread",archived:!1},{name:"Margaret Thatcher",created:"April 28, 2021",category:"Quote",content:"I love argument. I love debate. I don't expect anyone just to sit there and agree with me - that's not their job.",archived:!1}]};var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var n=Object(F.a)(e.notes),c=t.payload.note;return n.push(c),Object(x.a)(Object(x.a)({},e),{},{notes:n});case T:var a=Object(F.a)(e.notes);return a.splice(t.payload.index,1),Object(x.a)(Object(x.a)({},e),{},{notes:a});case L:var r=t.payload,i=r.index,o=r.note,s=Object(F.a)(e.notes),l=s[i];return s[i]=Object(x.a)(Object(x.a)({},l),o),Object(x.a)(Object(x.a)({},e),{},{notes:s});case S:var u=Object(F.a)(e.notes),d=u[t.payload.index].archived;return u[t.payload.index].archived=!d,Object(x.a)(Object(x.a)({},e),{},{notes:u});case A:return Object(x.a)(Object(x.a)({},e),{},{notes:[]});case P:var j=e.notes.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{archived:!0})}));return Object(x.a)(Object(x.a)({},e),{},{notes:j});default:return e}},Y=Object(H.combineReducers)({notes:G}),z=Object(H.createStore)(Y,{},Object(J.composeWithDevTools)());var K=function(){return Object(s.jsx)(o.a,{store:z,children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(B,{})})})};n(39);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(K,{})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.e0bd7f8b.chunk.js.map