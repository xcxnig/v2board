(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{Bl7J:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("3a4m"),r=a.n(s),c=a("/MKj"),l=a("20nU"),o=a("yWgo");class m extends i.a.Component{constructor(){super(...arguments),this.state={nav:[]}}componentDidMount(){var e=[{title:"\u4eea\u8868\u76d8",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8ba2\u9605",type:"heading"},{title:"\u6211\u7684\u8ba2\u9605",type:"item",href:"/subscribe",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-badge"})},{title:"\u8d2d\u4e70\u8ba2\u9605",type:"item",href:"/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u6211\u7684\u8ba2\u5355",type:"item",href:"/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u6211\u7684\u9080\u8bf7",type:"item",href:"/invite",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u7528\u6237",type:"heading"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",type:"item",href:"/profile",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user"})},{title:"\u6211\u7684\u5de5\u5355",type:"item",href:"/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})},{title:"\u6d41\u91cf\u660e\u7ec6",type:"item",href:"/traffic",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bar-chart"})},{title:"\u4f7f\u7528\u6559\u7a0b",type:"item",href:"/tutorial",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-book-open"})}],t=[{title:"\u8fd4\u56de\u7528\u6237\u4e2d\u5fc3",type:"item",href:"/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})},{title:"\u4eea\u8868\u76d8",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speedometer"})},{title:"\u8bbe\u7f6e",type:"heading"},{title:"\u7cfb\u7edf\u914d\u7f6e",type:"item",href:"/admin/config/system",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-equalizer"})},{title:"\u652f\u4ed8\u914d\u7f6e",type:"item",href:"/admin/config/payment",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-credit-card"})},{title:"\u670d\u52a1\u5668",type:"heading"},{title:"\u8282\u70b9\u7ba1\u7406",type:"item",href:"/admin/server",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-vector"})},{title:"\u6743\u9650\u7ec4\u7ba1\u7406",type:"item",href:"/admin/server/group",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-wrench"})},{title:"\u8d22\u52a1",type:"heading"},{title:"\u8ba2\u9605\u7ba1\u7406",type:"item",href:"/admin/plan",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-bag"})},{title:"\u8ba2\u5355\u7ba1\u7406",type:"item",href:"/admin/order",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-list"})},{title:"\u4f63\u91d1\u7ba1\u7406",type:"item",href:"/admin/commission",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-user-following"})},{title:"\u7528\u6237",type:"heading"},{title:"\u7528\u6237\u7ba1\u7406",type:"item",href:"/admin/user",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-users"})},{title:"\u516c\u544a\u7ba1\u7406",type:"item",href:"/admin/notice",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-speech"})},{title:"\u5de5\u5355\u7ba1\u7406",type:"item",href:"/admin/ticket",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-support"})}];Object(o["c"])("is_admin")&&e.unshift({title:"\u8fd4\u56de\u7ba1\u7406\u4e2d\u5fc3",type:"item",href:"/admin/dashboard",icon:i.a.createElement("i",{className:"nav-main-link-icon si si-action-undo"})}),this.isAdmin()?this.setState({nav:t}):this.setState({nav:e})}renderMenu(e,t,a,n){switch(e){case"heading":return i.a.createElement("li",{className:"nav-main-heading"},t);case"item":return i.a.createElement("li",{className:"nav-main-item"},i.a.createElement("a",{className:"nav-main-link ".concat(this.props.location.pathname===a&&"active"),onClick:()=>{r.a.push(a),this.props.dispatch({type:"header/showNav"})}},n&&n,i.a.createElement("span",{className:"nav-main-link-name"},t)))}}isAdmin(){return-1!==this.props.location.pathname.indexOf("admin")}render(){return i.a.createElement("nav",{id:"sidebar","aria-label":"Main Navigation"},i.a.createElement("div",{className:"smini-visible-block"},i.a.createElement("div",{className:"content-header bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},"X"),i.a.createElement("span",{className:"text-white"},"H")))),i.a.createElement("div",{className:"smini-hidden ".concat(1===l["a"].theme?"":"bg-header-dark")},i.a.createElement("div",{className:"content-header justify-content-lg-center bg-black-10"},i.a.createElement("a",{className:"link-fx font-size-lg text-white",href:"index.html"},i.a.createElement("span",{className:"text-white-75"},window.v2board.title?window.v2board.title:"V2Board")),i.a.createElement("div",{className:"d-lg-none"},i.a.createElement("a",{className:"text-white ml-2","data-toggle":"layout","data-action":"sidebar_close",href:"javascript:void(0)",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-times-circle"}))))),i.a.createElement("div",{className:"content-side content-side-full"},i.a.createElement("ul",{className:"nav-main"},this.state.nav.map(e=>{return this.renderMenu(e.type,e.title,e.href,e.icon)}))))}}var d=Object(c["c"])(e=>{var t=e.header;return{header:t}})(m),h=a("t3Un");class p extends i.a.Component{constructor(){super(...arguments),this.state={showAvatarMenu:!1,loading:!1,showSearchBar:!1}}componentDidMount(){var e=this;this.props.header.userInfo.email||this.setState({loading:!0},()=>{this.props.dispatch({type:"header/getUserInfo",complete:()=>e.setState({loading:!1})})})}showAvatarMenu(){var e=this;this.setState({showAvatarMenu:!this.state.showAvatarMenu},()=>{document.onclick=function(t){e.state.showAvatarMenu&&e.setState({showAvatarMenu:!1}),document.onclick=void 0}})}logout(){Object(h["a"])("/user/logout").then(e=>{r.a.push("/login")})}render(){return i.a.createElement("header",{id:"page-header"},i.a.createElement("div",{className:"content-header"},i.a.createElement("div",{className:"sidebar-toggle",style:{display:this.props.search?"block":"none"}},i.a.createElement("button",{type:"button",className:"btn btn-dual mr-1 d-lg-none","data-toggle":"layout","data-action":"sidebar_toggle",onClick:()=>this.props.dispatch({type:"header/showNav"})},i.a.createElement("i",{className:"fa fa-fw fa-bars"})),this.props.search&&i.a.createElement("button",{type:"button",className:"btn btn-dual",onClick:()=>{this.setState({showSearchBar:!0})}},i.a.createElement("i",{className:"fa fa-fw fa-search"})," ",i.a.createElement("span",{className:"ml-1 d-none d-sm-inline-block"},"\u641c\u7d22"))),i.a.createElement("div",null),i.a.createElement("div",null,this.state.loading?i.a.createElement("div",{className:"spinner-grow text-primary"}):i.a.createElement("div",{className:"dropdown d-inline-block"},i.a.createElement("button",{type:"button",className:"btn btn-dual",id:"page-header-user-dropdown","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:()=>this.showAvatarMenu()},i.a.createElement("img",{className:"img-avatar img-avatar32 img-avatar-thumb",src:this.props.header.userInfo.avatar_url,alt:""}),i.a.createElement("span",{className:"d-none d-lg-inline ml-1"},this.props.header.userInfo.email),i.a.createElement("i",{className:"fa fa-fw fa-angle-down ml-1"})),i.a.createElement("div",{className:"dropdown-menu dropdown-menu-right dropdown-menu-lg p-0 ".concat(this.state.showAvatarMenu&&"show"),"aria-labelledby":"page-header-user-dropdown"},i.a.createElement("div",{className:"p-2"},i.a.createElement("a",{className:"dropdown-item d-flex justify-content-between align-items-center",href:"javascript:;",onClick:()=>this.logout()},"\u9000\u51fa\u767b\u5f55",i.a.createElement("i",{className:"fa fa-fw fa-sign-out-alt text-danger ml-1"}))))))),this.props.search&&i.a.createElement("div",{className:"overlay-header bg-dark ".concat(this.state.showSearchBar?"show":"")},i.a.createElement("div",{className:"content-header bg-dark"},i.a.createElement("div",{className:"w-100"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:()=>{this.setState({showSearchBar:!1})}},i.a.createElement("i",{className:"fa fa-fw fa-times-circle"}))),i.a.createElement("input",{type:"text",className:"form-control border-0",placeholder:this.props.search.placeholder,onChange:e=>this.props.search.onChange(e.target.value)}))))))}}var u=Object(c["c"])(e=>{var t=e.header;return{header:t}})(p);class f extends i.a.Component{render(){return i.a.createElement("footer",{id:"page-footer",className:"bg-body-light"},i.a.createElement("div",{className:"content py-0"},i.a.createElement("div",{className:"row font-size-sm"},i.a.createElement("div",{className:"col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right"},i.a.createElement("i",{className:"fa fa-heart text-danger"})," ",window.v2board.title?window.v2board.title:"V2Board"),i.a.createElement("div",{className:"col-sm-6 order-sm-1 text-center text-sm-left"},i.a.createElement("a",{className:"font-w600",href:"/",target:"_blank"},"V2Board v0.2"),i.a.createElement("span",{"data-toggle":"year-copy"})))))}}class g extends i.a.Component{render(){return i.a.createElement("div",{id:"page-container",className:"sidebar-o ".concat(1===l["a"].theme?"sidebar-dark":"page-header-dark"," side-scroll page-header-fixed main-content-boxed side-trans-enabled ").concat(this.props.header.showNav&&"sidebar-o-xs")},i.a.createElement(d,this.props),i.a.createElement(u,{search:this.props.search}),this.props.loading?i.a.createElement("main",{id:"main-container"},i.a.createElement("div",{className:"content content-full"},i.a.createElement("div",{className:"spinner-grow text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))):this.props.children,i.a.createElement(f,null))}}t["a"]=Object(c["c"])(e=>{var t=e.header;return{header:t}})(g)},FPmv:function(e,t,a){"use strict";a.r(t);var n,i=a("jehZ"),s=a.n(i),r=(a("miYZ"),a("tsqr")),c=a("p0pE"),l=a.n(c),o=a("q1tI"),m=a.n(o),d=a("Bl7J"),h=a("/MKj"),p=a("t3Un"),u=(a("LbTH"),a("yW/I"));class f extends m.a.Component{constructor(){super(...arguments),this.state={message:[],loading:!0,submit:{},sendLoading:!1}}componentDidMount(){this.fetchData(),n=(()=>setTimeout(()=>{this.fetchData(),"function"===typeof n&&n()},5e3)),n()}componentWillUnmount(){n=void 0}fetchData(){Object(p["a"])("/user/ticket",{id:this.props.match.params.ticket_id}).then(e=>{200===e.code&&this.setState(l()({},e.data,{loading:!1}))})}reply(e){this.setState({sendLoading:!0},()=>{r["a"].loading("\u53d1\u9001\u4e2d"),Object(p["b"])("/user/ticket/reply",l()({id:this.props.match.params.ticket_id},this.state.submit)).then(t=>{r["a"].destroy(),this.setState({sendLoading:!1}),200===t.code&&(r["a"].success("\u53d1\u9001\u6210\u529f"),this.fetchData(),this.setState({submit:{}},()=>{e()}))})})}render(){return m.a.createElement(d["a"],s()({},this.props,{loading:this.state.loading}),m.a.createElement("main",{id:"main-container"},m.a.createElement("div",{className:"content content-full"},m.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},m.a.createElement("h2",{className:"font-w300 mt-4 mb-3"},"# \u5de5\u5355",this.props.match.params.ticket_id)),m.a.createElement(u["a"],{title:document.title,description:"Support",message:this.state.message,onKeyDown:(e,t)=>{13!==e.keyCode||this.state.sendLoading||this.reply(t)},onChange:e=>{this.setState({submit:{message:e.target.value}})}}))))}}t["default"]=Object(h["c"])(e=>{var t=e.header;return{header:t}})(f)},LbTH:function(e,t,a){"use strict";t["a"]={cycleText:{month_price:"\u6708\u4ed8",quarter_price:"\u5b63\u4ed8",half_year_price:"\u534a\u5e74\u4ed8",year_price:"\u5e74\u4ed8"},orderStatusText:["\u5f85\u652f\u4ed8","\u5f00\u901a\u4e2d","\u5df2\u53d6\u6d88","\u5df2\u5b8c\u6210"],commissionStatusText:["\u786e\u8ba4\u4e2d","\u5df2\u786e\u8ba4","\u5df2\u5b8c\u6210"],ticketStatusText:["\u5f00\u542f","\u5f85\u56de\u590d","\u5f85\u7b54\u590d","\u5173\u95ed"]}},"yW/I":function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a("q1tI"),i=a.n(n),s=a("wd/R"),r=a.n(s);class c extends i.a.Component{constructor(){super(...arguments),this.state={},this.chatCount=0}componentDidMount(){this.chatScroll()}componentDidUpdate(){this.chatCount!==this.props.message.length&&(this.chatCount=this.props.message.length,this.chatScroll())}chatScroll(){this.refs.chat&&this.refs.chat.scrollTo(0,this.refs.chat.scrollHeight)}render(){return i.a.createElement("div",{className:"block block-rounded"},i.a.createElement("div",{className:"block-content block-content-full bg-primary"},i.a.createElement("p",{className:"font-size-lg font-w600 text-white mt-0 mb-0"},this.props.title),i.a.createElement("p",{className:"text-white-75 mb-0"},this.props.description)),i.a.createElement("div",{className:"js-chat-messages block-content block-content-full text-wrap-break-word overflow-y-auto",style:{height:window.innerHeight-450},ref:"chat"},this.props.message.map(e=>{return e.is_me?i.a.createElement("div",null,i.a.createElement("div",{className:"font-size-sm font-italic text-muted animated fadeIn my-2 text-right"},r()(1e3*e.created_at).format("YYYY/MM/DD HH:mm")),i.a.createElement("div",{className:"text-right ml-4"},i.a.createElement("div",{className:"d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-right border-primary rounded-left text-left"},e.message))):i.a.createElement("div",null,i.a.createElement("div",{className:"font-size-sm font-italic text-muted animated fadeIn my-2"},r()(1e3*e.created_at).format("YYYY/MM/DD HH:mm")),i.a.createElement("div",{className:"mr-4"},i.a.createElement("div",{className:"d-inline-block font-w600 animated fadeIn bg-body-light border-3x px-3 py-2 mb-2 shadow-sm mw-100 border-left border-dark rounded-right"},e.message)))})),i.a.createElement("div",{className:"js-chat-form block-content p-2 bg-body-dark"},i.a.createElement("input",{onKeyDown:e=>this.props.onKeyDown(e,()=>{this.refs.message&&(this.refs.message.value="")}),ref:"message",type:"text",className:"js-chat-input form-control form-control-alt",placeholder:"\u8f93\u5165\u5185\u5bb9\u56de\u590d\u5de5\u5355...",onChange:e=>this.props.onChange(e)})))}}}}]);