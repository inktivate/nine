(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),i=n.n(o),c=(n(13),n(3)),s=n(4),u=n(6),l=n(5),v=n(7),h=(n(15),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={date:Date()},n}return Object(v.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillMount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:Date()})}},{key:"convertDate",value:function(t){var e=[parseInt(t[16]),+parseInt(t[17])],n=[parseInt(t[19]),+parseInt(t[20])];(1===e[0]&&e[1]>2||2===e[0])&&(e[0]-=1,e[1]-=2);var a=e[0]+e[1]+n[0]+n[1];return a>=10&&(a=String(a),a=parseInt(a[0])+parseInt(a[1])),a===e[0]||a===e[1]||a===n[0]||a===n[1]?"True":"False"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.convertDate(this.state.date)))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.33723f71.chunk.js.map