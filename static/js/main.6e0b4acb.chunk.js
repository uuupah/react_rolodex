(this.webpackJsonpreact_rolodex=this.webpackJsonpreact_rolodex||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),s=(n(13),n(3)),i=n(4),l=n(6),f=n(5),u=n(7),h=(n(14),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"staff member",src:"https://faces.design/faces/".concat(m(e.staffMem.id)).concat(e.staffMem.id,".png")}),r.a.createElement("h2",null,e.staffMem.name),r.a.createElement("p",null,e.staffMem.email))});function m(e){return e%2===0?"m/m":"w/w"}n(15);var d=function(e){return r.a.createElement("div",{className:"card-list"},e.staff.map((function(e){return r.a.createElement(h,{key:e.id,staffMem:e})})))},p=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),v=(n(17),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(f.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={staff:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({staff:t})}))}},{key:"render",value:function(){var e=this.state,t=e.staff,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"ZooKeys Incorporated"),r.a.createElement(p,{placeholder:"search staff",handleChange:this.handleChange}),r.a.createElement(d,{staff:a}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6e0b4acb.chunk.js.map