(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),l=(a(25),a(2)),o=a.n(l),i=a(4),u=a(5),d=a(6),m=a(8),p=a(7),h=a(9),v=a(3),b=a.n(v),f=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleDelete=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/notes/delete/"+n.props.note._id);case 3:n.props.getItems(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),n.handleSave=function(){b.a.put("/notes/update/"+n.props.note._id,{title:n.state.title,body:n.state.body}).catch((function(e){return console.log(e)}))},n.state={title:n.props.note.title,body:n.props.note.body},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card border-dark mb-3"},r.a.createElement("button",{className:"close",onClick:this.handleDelete},"\xd7"),r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("strong",null,r.a.createElement(h.a,{className:"text-area-header",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})},onBlur:this.handleSave})))),r.a.createElement("div",{className:"card-body text-dark"},r.a.createElement(h.a,{className:"text-area-body",value:this.state.body,onChange:function(t){return e.setState({body:t.target.value})},onBlur:this.handleSave})))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleCreate=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/notes/create/");case 3:n.props.getItems(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar bg-dark navbar-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 text-warning"},"//todo"),r.a.createElement("span",null,r.a.createElement("button",{onClick:this.handleCreate,className:"btn btn-md btn-warning",type:"button"},r.a.createElement("i",{className:"fas fa-plus "}))))}}]),a}(r.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleGet=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.prev=1,e.next=4,b.a.get("/notes");case 4:t=e.sent,n.setState({info:t.data,loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.state={info:null,loading:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.handleGet()}},{key:"renderMainContent",value:function(){var e=this;return!0!==this.state.loading&&null!==this.state.info?r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"card-columns"},this.state.info.map((function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(f,{note:t,getItems:e.handleGet}))})))):r.a.createElement("div",{className:"centered"},r.a.createElement("div",{className:"spinner-border spinner-border-xl text-warning"}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{getItems:this.handleGet}),this.renderMainContent())}}]),a}(r.a.Component);function k(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))}s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.978a8c02.chunk.js.map