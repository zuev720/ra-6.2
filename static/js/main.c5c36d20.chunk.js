(this["webpackJsonpra-6.2"]=this["webpackJsonpra-6.2"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(10),s=n.n(c),o=(n(15),n(16),n(1)),u=n.n(o),i=n(3),l=n(5),h=n(6),p=n(4),d=n(8),b=n(7),f=n(18),j=n(0),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsx)("button",{id:this.props.id,className:this.props.className,onClick:this.props.handleClick,children:this.props.children})}}]),n}(r.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("li",{className:this.props.className,children:[Object(j.jsx)(x,{id:this.props.id,className:"DeleteNoteButton",handleClick:this.props.handleClick,children:"\u274c"}),Object(j.jsx)("p",{className:"NoteItemText",children:this.props.content})]})}}]),n}(r.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsx)("ul",{className:this.props.className,children:this.props.children})}}]),n}(r.a.Component);function v(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(u.a.mark((function e(t){var n,a,r,c=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:"",a=c.length>2&&void 0!==c[2]?c[2]:null,e.prev=2,"DELETE"!==t){e.next=7;break}return e.next=6,fetch("".concat("https://ra-6-backend.herokuapp.com/notes","/").concat(n),{method:t});case 6:return e.abrupt("return");case 7:if("POST"!==t){e.next=11;break}return e.next=10,fetch("https://ra-6-backend.herokuapp.com/notes",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)});case 10:return e.abrupt("return");case 11:return e.next=13,fetch("https://ra-6-backend.herokuapp.com/notes");case 13:return r=e.sent,e.next=16,r.json();case 16:return e.abrupt("return",e.sent);case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}n(21);var k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={textAreaValue:"",notes:[]},a.onDeleteNoteClick=a.onDeleteNoteClick.bind(Object(p.a)(a)),a.updateNotesButton=a.updateNotesButton.bind(Object(p.a)(a)),a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(p.a)(a)),a.handleTextAreaValue=a.handleTextAreaValue.bind(Object(p.a)(a)),a.addNewNote=a.addNewNote.bind(Object(p.a)(a)),a.addNoteButton=a.addNoteButton.bind(Object(p.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("GET");case 2:t=e.sent,this.setState({notes:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentUpdate",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("GET");case 2:t=e.sent,this.setState({notes:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onDeleteNoteClick",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.id,e.next=3,v("DELETE",n,null);case 3:return e.next=5,this.componentUpdate();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateNotesButton",value:function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.componentUpdate();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleTextAreaChange",value:function(e){this.setState({textAreaValue:e.target.value})}},{key:"handleTextAreaValue",value:function(){var e=Object(i.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key){e.next=8;break}if(t.preventDefault(),""!==this.state.textAreaValue.trim()){e.next=5;break}return this.setState({textAreaValue:""}),e.abrupt("return");case 5:return e.next=7,this.addNewNote();case 7:t.target.blur();case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"addNewNote",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:f(),content:this.state.textAreaValue.trim()},e.next=3,v("POST",null,t);case 3:return e.next=5,this.componentUpdate();case 5:this.setState({textAreaValue:""});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addNoteButton",value:function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.textAreaValue){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.addNewNote();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"CrudApp",children:[Object(j.jsxs)("section",{className:"Content",children:[Object(j.jsxs)("header",{className:"CrudAppHeader",children:[Object(j.jsx)("h2",{className:"CrudHeader",children:"Note"}),Object(j.jsx)(x,{className:"UpdateNotesButton",handleClick:this.updateNotesButton,children:"\ud83d\uddd8"})]}),Object(j.jsx)(N,{className:"NotesList",children:this.state.notes.map((function(t){return Object(j.jsx)(O,{className:"NoteItem",id:t.id,handleClick:e.onDeleteNoteClick,content:t.content},t.id)}))})]}),Object(j.jsxs)("div",{className:"TextAreaBlock",children:[Object(j.jsx)("label",{htmlFor:"noteTextArea",children:"New Note"}),Object(j.jsx)("textarea",{className:"NoteTextArea",name:"NoteTextArea",id:"noteTextArea",value:this.state.textAreaValue,onChange:this.handleTextAreaChange,onKeyDown:this.handleTextAreaValue,required:!0}),Object(j.jsx)(x,{className:"AddNoteButton",handleClick:this.addNoteButton,children:"\u27a4"})]})]})}}]),n}(r.a.Component);var y=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(k,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[22,1,2]]]);
//# sourceMappingURL=main.c5c36d20.chunk.js.map