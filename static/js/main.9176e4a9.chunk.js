(this.webpackJsonpshopify=this.webpackJsonpshopify||[]).push([[0],{30:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},60:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(1),a=s.n(n),c=s(21),r=s.n(c),o=(s(30),s(4)),h=s(5),l=s(3),d=s(7),j=s(6),u=s(8),b=s.n(u),p=s(10),m=s.n(p),O=s(22),x=s(23),v=s.n(x),f=s(24),y=s.n(f),k=(s(57),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"nominate",value:function(){S.push(this.props.imdb),this.props.card.modal.current.hide(),this.props.nomi.setState({results:[]}),this.props.card.setState({hasNomination:!0,nominatedMovie:this.props.title,imdbID:this.props.imdb,release:this.props.release}),5===S.length&&this.props.card.props.home.setState({showBanner:!0})}},{key:"render",value:function(){if(!0===this.props.noresult)return Object(i.jsx)("div",{class:"optionCard",children:Object(i.jsx)("div",{class:"optionTitle",children:Object(i.jsx)("h3",{children:"No Results."})})});var e=S.includes(this.props.imdb);return Object(i.jsxs)("div",{class:"optionCard",children:[Object(i.jsxs)("div",{class:"optionTitle",children:[Object(i.jsx)("h3",{children:this.props.title}),Object(i.jsx)("p",{children:this.props.release})]}),Object(i.jsx)("button",{disabled:e,class:"nominateButton",onClick:this.nominate.bind(this),children:"nominate"})]})}}]),s}(a.a.Component)),w=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={results:[]},i}return Object(h.a)(s,[{key:"search",value:function(){var e=Object(O.a)(m.a.mark((function e(t,s){var n,a,c=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t.replace(/ /g,"+"),e.next=3,y()("http://www.omdbapi.com/?s=".concat(t,"&type=movie&apikey=c96ee350"));case 3:"False"===(n=e.sent).data.Response?this.setState({results:[Object(i.jsx)(k,{noresult:!0})]}):(a=[],n.data.Search.forEach((function(e){a.push(Object(i.jsx)(k,{nomi:c,card:s,title:e.Title,imdb:e.imdbID,release:e.Year}))})),this.setState({results:a}));case 5:case"end":return e.stop()}}),e,this)})));return function(t,s){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)(v.a,{placeholder:"Search for a movie",onEnter:function(t){return e.search(t,e.props.card)}}),Object(i.jsx)("div",{id:"results",children:Object(i.jsx)("div",{id:"resultschild",children:this.state.results})})]})}}]),s}(a.a.Component),C=(s(58),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(o.a)(this,s),(i=t.call(this,e)).state={hasNomination:!1,nominatedMovie:"",rank:e.num,imdbID:-1,release:-1},i.modal=a.a.createRef(),i}return Object(h.a)(s,[{key:"newNomination",value:function(){this.setState({hasNomination:!0})}},{key:"reset",value:function(){var e=S.indexOf(this.state.imdbID);S.splice(e,1),this.setState({hasNomination:!1}),S.length<5&&this.props.home.setState({showBanner:!1})}},{key:"render",value:function(){var e=this;return!1===this.state.hasNomination?Object(i.jsxs)("div",{class:"card",children:[Object(i.jsx)("div",{class:"cardnum",children:Object(i.jsx)("h1",{children:this.props.num})}),Object(i.jsxs)("div",{class:"detail",onClick:function(){return e.modal.current.show()},children:[Object(i.jsxs)("h2",{children:["Click here to nominate your no.",this.props.num," movie"]}),Object(i.jsx)("p",{}),Object(i.jsx)("p",{})]}),Object(i.jsx)("div",{class:"trashButton",style:{visibility:"hidden"},onClick:this.reset.bind(this),children:Object(i.jsx)("i",{class:"bx bxs-trash"})}),Object(i.jsx)("div",{class:"modal",children:Object(i.jsx)(b.a,{hideOnOverlayClicked:!0,ref:this.modal,title:"Nominate your no.".concat(this.props.num," movie"),children:Object(i.jsx)(w,{card:this})})})]}):!0===this.state.hasNomination?Object(i.jsxs)("div",{class:"card",children:[Object(i.jsx)("div",{class:"cardnum",children:Object(i.jsx)("h1",{children:this.props.num})}),Object(i.jsxs)("div",{class:"movieDetail",children:[Object(i.jsx)("h2",{children:this.state.nominatedMovie}),Object(i.jsx)("p",{children:this.state.release}),Object(i.jsx)("p",{children:"IMDB ID: ".concat(this.state.imdbID)})]}),Object(i.jsx)("div",{class:"trashButton",onClick:this.reset.bind(this),children:Object(i.jsx)("i",{class:"bx bxs-trash"})}),Object(i.jsx)("div",{class:"modal",children:Object(i.jsx)(b.a,{hideOnOverlayClicked:!0,ref:this.modal,title:"Nominate your no.".concat(this.props.num," movie"),children:Object(i.jsx)(w,{card:this})})})]}):void 0}}]),s}(a.a.Component)),S=(s(59),[]),g=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={cards:[Object(i.jsx)(C,{num:"1",home:Object(l.a)(n)}),Object(i.jsx)(C,{num:"2",home:Object(l.a)(n)}),Object(i.jsx)(C,{num:"3",home:Object(l.a)(n)}),Object(i.jsx)(C,{num:"4",home:Object(l.a)(n)}),Object(i.jsx)(C,{num:"5",home:Object(l.a)(n)})],showBanner:!1},n.modal=a.a.createRef(),n}return Object(h.a)(s,[{key:"render",value:function(){var e,t=this;return e=!1===this.state.showBanner?"Please select 5 movies first!":"Thank You!",Object(i.jsxs)("div",{children:[!0===this.state.showBanner&&Object(i.jsx)("div",{class:"banner",children:Object(i.jsx)("h3",{children:"You have selected your 5 movies! Scroll down and click submit!"})}),Object(i.jsx)("h1",{class:"title",children:"The Shoppies"}),Object(i.jsx)("h3",{children:"Nominate your top 5 movies for a Shoppie award!"}),this.state.cards,Object(i.jsx)("div",{class:"submitButtonContainer",children:Object(i.jsx)("button",{onClick:function(){return t.modal.current.show()},class:"submitButton",children:"Submit"})}),Object(i.jsx)(b.a,{hideOnOverlayClicked:!0,ref:this.modal,title:e,children:Object(i.jsxs)("div",{class:"about",children:[Object(i.jsx)("p",{children:"Currently, ths submit button does not actually do anything, but in a real application, this would be the point where a PUT request with the JSON stringified data would be sent to a server. The data would then be parsed added to a database of some sort."}),Object(i.jsx)("h2",{children:"About"}),Object(i.jsx)("p",{children:"This simple web app is built with React. The almost all components were made from scratch, and make use of numerous React states and props."}),Object(i.jsx)("a",{children:"Check out the source code on GitHub"}),Object(i.jsx)("h2",{children:"To Recruiters:"}),Object(i.jsx)("p",{children:"I have a few other projects that showcase my skills as a developer. Please checkout my personal website to learn more about them! "}),Object(i.jsx)("a",{href:"https://nicholas-chong.github.io/",target:"_blank",rel:"noreferrer",children:"Personal website"})]})})]})}}]),s}(a.a.Component),B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),i(e),n(e),a(e),c(e)}))};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),B()}},[[60,1,2]]]);
//# sourceMappingURL=main.9176e4a9.chunk.js.map