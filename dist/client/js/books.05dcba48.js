(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{333:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=m(a(17)),n=m(a(4)),o=m(a(6)),s=m(a(3)),r=m(a(5)),d=a(1),i=m(d),u=m(a(9)),c=(a(31),m(a(33)));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){(0,n.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));g.call(a);var o=e.books,r=e.allNum,d=e.page,i=e.allPage,u=e.banner;return a.state={books:o,allNum:r,page:d,allPage:i,banner:u,isLoading:!1},a}return(0,r.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.bookLayoutDom=u.default.findDOMNode(this),this.headerDom=u.default.findDOMNode(this.refs.bookHeader),this.blogNavDom=document.getElementById("IdNav"),window.addEventListener("scroll",this.onscroll,!1),this.state.books.length||(this.getBooks(1),this.getBanners())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onscroll)}},{key:"getBanners",value:function(){var e=this;c.default.get("/api/get/banners",{params:{page:"BOOK"}}).then(function(t){var a=t.data;e.setState({banner:a.banners[0]})})}},{key:"render",value:function(){var e=this.state,t=e.books,a=e.isLoading,l=e.banner;return i.default.createElement("div",{className:"blog-books-layout clearfix "},i.default.createElement("div",{className:"blog-books-header",ref:"bookHeader"},i.default.createElement("img",{src:"//cdn.liayal.com/image/books_banner.jpg",alt:""}),i.default.createElement("div",{className:"text-wrap"},i.default.createElement("p",null,i.default.createElement("span",{style:{background:"#B6BABD"}},l.text[0]),l.text[1]),i.default.createElement("div",{className:"tr author"},i.default.createElement("a",{href:l.href||"javascript:void(0);",target:"_blank"},"—— 《",l.author,"》")))),i.default.createElement("div",{className:"middle-text tc "},i.default.createElement("h2",null,"杂而不精的读者"),i.default.createElement("p",null,"当我需要安静的时候，我想要一本书；当我安静的时候，我更想要一本书。不喜欢任何香水味，却惟独喜欢书香味。一本书，就是一个世界。躲进这个世界之中，就可以和当下的一切烦恼与琐碎隔离开来。")),i.default.createElement("div",{className:"books-list clearfix "},t.length?t.map(function(e){return i.default.createElement("div",{className:"blog-books-item",key:e.id},i.default.createElement("div",{className:"books-wrap clearfix"},i.default.createElement("div",{className:"cover"},i.default.createElement("img",{src:e.img,alt:""})),i.default.createElement("div",{className:"info"},i.default.createElement("h4",{className:"title"},e.title),i.default.createElement("p",{className:"author"},e.author),i.default.createElement("p",{className:"intro"},e.desc),e.href?i.default.createElement("div",{className:"btn"},i.default.createElement("a",{href:e.href,className:"read-btn"},"试读")):null),e.isReading?i.default.createElement("span",{className:"reading"},"Reading"):null))}):null),a?i.default.createElement("p",{className:"loading"},"加载中..."):null)}}]),t}(d.Component);f.defaultProps={books:[],page:0,allPage:0,banner:{text:["这个世界上的每样东西都生死未定，都充满了风险，那些不接受风险的人，那些不了解命运的人，在角落里日渐衰落。","我忽然明白为什么我没能拥有尼诺，而莉拉能够拥有他。我不能追随那些真实的感情，我无法使自己打破陈规旧矩，我没有莉拉那么强烈的情感，她可以不顾一切去享受那一天一夜。"],author:"新名字的故事"}};var g=function(){var e=this;this.onscroll=function(t){t=t||window.event;var a=window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||0,l=e.state,n=l.page,o=l.allPage;a+document.documentElement.clientHeight>e.bookLayoutDom.offsetHeight-200&&n<o&&e.getBooks(n+1)},this.getBooks=function(t){e.state.isLoading||(e.setState({isLoading:!0}),c.default.get("/api/get/books",{params:{page:t}}).then(function(t){var a=t.data;e.setState(function(e){return{books:e.books.concat(a.books),allNum:a.allNum,page:a.page,allPage:a.allPage,isLoading:!1}})}))}};t.default=f}}]);