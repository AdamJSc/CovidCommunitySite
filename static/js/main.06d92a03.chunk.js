(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,n,r){"use strict";r.r(n);var a=r(0),o=r.n(a),t=(r(71),r(72),r(18)),i=r.n(t),s=r(19),d=r(20),c=r(27),l=r(21),y=r(28),m=(r(77),r(12)),u=r(65),h=r(52),g=r(9),p=r(62),b=r(66),f=r(34),C=r(36),w=r(35),v=r(51),k=r(37),S=r(39),A=r(31),T=r(47);var E=r(26),B={cardHeader:{backgroundColor:"rgba(0,0,0,0.03",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",borderBottom:"1px solid rgba(0,0,0,0.13)"}},L=function(e){function n(e){var r;return Object(s.a)(this,n),(r=Object(c.a)(this,Object(l.a)(n).call(this,e))).callNumber=function(e){window.open("tel:".concat(e))},r.openLink=function(e){window.open(e,"_blank")},r.renderDescription=function(e){return e.split("\n").map(function(e,n){return o.a.createElement("p",{style:{marginBottom:0},key:n},e)})},r}return Object(y.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this,n=this.props,r=n.t,a=n.resource,t=function(e,n){if(!e)return null;var r=[e.name,e.street,e.city,e.postcode];return(r=r.map(function(e){return"string"===typeof e?e:e?e[n||"en"]:void 0})).filter(Boolean).join(", ")}(a.address,this.props.locale);return o.a.createElement(T.a,{style:this.props.style},o.a.createElement("div",{className:"d-flex flex-row align-items-center justify-content-between",style:B.cardHeader},o.a.createElement("h5",{style:{marginBottom:0,lineHeight:void 0}},"string"===typeof a.name?a.name:a.name[this.props.locale]),a.number&&o.a.createElement(A.a,{onClick:this.callNumber.bind(this,a.number),style:{alignSelf:"flex-end",marginLeft:12}},a.number)),o.a.createElement(T.a.Body,null,o.a.createElement("p",null,o.a.createElement(k.a,{style:{marginRight:10},icon:S.a}),"string"===typeof a.city?a.city:a.city[this.props.locale],t&&" - ".concat(t)),o.a.createElement("hr",null),o.a.createElement(T.a.Title,{style:{textTransform:"capitalize"}},r("subCategory.".concat(a.subCategory))),a.description&&this.renderDescription(a.description[this.props.locale||"en"]),a.organisers&&a.organisers.length>0&&a.organisers.map(function(n,r){return o.a.createElement("p",{key:r,style:{marginBottom:0}},n.name,n.role&&" - ".concat(n.role[e.props.locale||"en"]),n.number&&o.a.createElement("span",{style:{fontWeight:"700"}},": ","    "+n.number))}),o.a.createElement("div",{style:{marginTop:12}},a.links&&a.links.length>0&&a.links.map(function(n,r){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,{style:{marginBottom:6},key:r,onClick:e.openLink.bind(e,n.url),variant:"secondary"},n.title[e.props.locale||"en"]),"  ")}))))}}]),n}(o.a.Component);L.defaultProps={};var D=Object(E.b)()(L),F=r(44),I=r(46),P=r.n(I),M=r(94),O=r(95),H=r(96),_=["community","food","foodbank","groceries","healthcare","laundry","services","transport"],N={container:{backgroundColor:"white",border:"2px solid #ececec",borderRadius:4,marginTop:20,padding:12},emptyTitle:{color:"#6C757D",marginTop:64,marginBottom:64,textAlign:"center"}},G=function(e){function n(e){var r;Object(s.a)(this,n);var a=null,o=O.find(function(n){return e.location.hash==="#".concat(n.id)});return o&&(a=o.id),(r=Object(c.a)(this,Object(l.a)(n).call(this,e))).onCategorySelected=function(e){r.setState({category:"_all_"==e?null:e})},r.onLocaleSelected=function(e){F.a.changeLanguage(e,function(n,a){n||r.setState({locale:e})})},r.onRegionSelected=function(e){r.setState({regionId:"_all_"==e?null:e})},r.handleSearchTermChanged=function(e){r.setState({searchTerm:e.target.value})},r.filterResources=function(e){var n=r.props.t,a=Object(u.a)(e),o=r.state.searchTerm.toUpperCase();return a=a.filter(function(e){if(r.state.regionId&&r.state.regionId!=e.regionId)return!1;if(r.state.category&&r.state.category!=e.category)return!1;if(!o||""===o)return!0;var a="string"===typeof e.name?e.name:e.name[r.state.locale],t="string"===typeof e.city?e.city:e.city[r.state.locale],i=n("category.".concat(e.category)),s=n("subCategory.".concat(e.subCategory)),d=e.description?e.description[r.state.locale]:null;return a.toUpperCase().indexOf(o)>-1||d&&d.toUpperCase().indexOf(o)>-1||t&&t.toUpperCase().indexOf(o)>-1||i&&i.toUpperCase().indexOf(o)>-1||s&&s.toUpperCase().indexOf(o)>-1})},r.state={category:null,locale:M[0].id,regionId:a,searchTerm:""},r}return Object(y.a)(n,e),Object(d.a)(n,[{key:"componentDidUpdate",value:function(e){var n=this;if(e.location.hash!==this.props.location.hash)if(""===this.props.location.hash)this.setState({regionId:null});else{var r=O.find(function(e){return n.props.location.hash==="#".concat(e.id)});r&&this.setState({regionId:r.id})}}},{key:"render",value:function(){var e=this,n=this.props.t,r=this.state.locale,a=this.filterResources(Array.isArray(H)?H:H.data);a.sort(function(e,n){var a=("string"===typeof e.name?e.name:e.name[r]).toUpperCase(),o=("string"===typeof n.name?n.name:n.name[r]).toUpperCase();return a<o?-1:a>o?1:0});var t=M.find(function(n){return n.id===e.state.locale});return o.a.createElement("div",{className:"App"},o.a.createElement(w.a,{bg:"primary",variant:"dark",expand:"lg"},o.a.createElement(w.a.Brand,{href:"/"},n("home.title")),o.a.createElement(w.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(w.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(C.a,{activeKey:this.state.regionId,className:"mr-auto",onSelect:this.onRegionSelected},o.a.createElement(C.a.Link,{active:!this.state.regionId,eventKey:"_all_"},n("regions.all")),O.map(function(n,r){return o.a.createElement(C.a.Link,{key:r,eventKey:n.id,href:"#".concat(n.id)},"string"===typeof n.name?n.name:n.name[e.state.locale])})),M.length>1&&o.a.createElement(C.a,{onSelect:this.onLocaleSelected},o.a.createElement(v.a,{alignRight:!0,active:!0,title:t.name,id:"collasible-nav-dropdown"},M.map(function(e,n){return o.a.createElement(v.a.Item,{eventKey:e.id,key:n},e.name)}))))),H.updated&&o.a.createElement("p",{style:{textAlign:"center",marginTop:16,color:"#6C757D"}},n("home.updated",{time_ago:P.a.duration(P()(H.updated).diff(P()())).humanize(!0)})),o.a.createElement(h.a,{fluid:"md"},o.a.createElement("div",{style:N.container},o.a.createElement(f.a,null,o.a.createElement(f.a.Prepend,null,o.a.createElement(f.a.Text,null,o.a.createElement(k.a,{icon:S.b}))),o.a.createElement(b.a,{value:this.state.searchTerm,onChange:this.handleSearchTermChanged,size:"lg",type:"text",placeholder:n("home.searchPlaceholder")}),o.a.createElement(p.a,{alignRight:!0,as:f.a.Append,onSelect:this.onCategorySelected,title:this.state.category?n("category.".concat(this.state.category)):n("category.all"),variant:"secondary"},o.a.createElement(g.a.Item,{eventKey:"_all_"},n("category.all")),_.map(function(e,r){return o.a.createElement(g.a.Item,{key:r,eventKey:e},n("category.".concat(e)))}))))),o.a.createElement(h.a,{fluid:"md",style:{marginTop:22}},a.map(function(n,r){return o.a.createElement(D,{key:r,locale:e.state.locale,resource:n,style:{marginBottom:24}})}),0===a.length&&o.a.createElement("h5",{style:N.emptyTitle},n("home.noResults"))))}}]),n}(o.a.Component),R=Object(E.b)()(Object(m.e)(G)),x=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(R,{routerProps:e})}}))}}]),n}(a.Component),W=r(49);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));F.a.use(E.a).init({resources:{cy:{translation:{category:{all:"Popeth",services:"Gwasanaethau",food:"Bwyd",groceries:"Bwydydd",community:"Cymuned",healthcare:"Gofal Iechyd",foodbank:"Banc Bwyd",laundry:"Golchdy",transport:"Trafnidiaeth"},regions:{all:"Popeth"},subCategory:{community_support:"Cefnogaeth Gymunedol",community_information:"Gwybodaeth Gymunedol",fruit_and_veg:"Ffrwythau a Llysiau",meals_on_wheels:"Pryd ar Glud",restaurant:"Bwyty",cafe:"Caffi",bakery:"Pobydd",butchers:"Cigyddion",fish_and_chips:"Pysgod a Sglodion",fishmonger:"Pysgod",laundry:"Golchdy",shop:"Siop",foodbank:"Banc Bwyd",hotel:"Gwesty",tv:"Teledu",milkman:"Dyn Llaeth",pharmacist:"Fferyllydd",taxi:"Tasci"},home:{searchPlaceholder:"Chwilio yn \xf4l enw, tref, neu gategori",title:"Adnoddau Ceredigion",updated:"Wedi'i ddiweddaru ddiwethaf: {{time_ago}}",noResults:"Dim canlyniadau. Trio chwilo am rhywbeth arall"}}},en:{translation:{category:{all:"All",services:"Services",food:"Food",community:"Community",groceries:"Groceries",healthcare:"Healthcare",foodbank:"Food Bank",laundry:"Laundry",transport:"Transport"},regions:{all:"All"},subCategory:{community_support:"Community Support",community_information:"Community Information",fruit_and_veg:"Fruit & Veg",meals_on_wheels:"Meals on Wheels",restaurant:"Restaurant",bakery:"Bakery",cafe:"Caf\xe9",butchers:"Butchers",fish_and_chips:"Fish & Chips",fishmonger:"Fishmonger",laundry:"Laundy",shop:"Shop",foodbank:"Food Bank",hotel:"Hotel",tv:"TV",milkman:"Milkman",pharmacist:"Pharmacist",taxi:"Taxi"},home:{searchPlaceholder:"Search by name, town, or category",title:"Ceredigion Resources",updated:"Last updated: {{time_ago}}",noResults:"No results. Try searching for something else or switching to another area"}}}},lng:"en",fallbackLng:"en",interpolation:{escapeValue:!1}}),i.a.render(o.a.createElement(W.a,{basename:""},o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,n,r){e.exports=r(102)},72:function(e,n,r){},77:function(e,n,r){},94:function(e){e.exports=[{id:"en",name:"English"},{id:"cy",name:"Cymraeg"}]},95:function(e){e.exports=[{name:{cy:"Gogledd",en:"North"},id:"north"},{name:{cy:"Gogledd Canol",en:"North-Mid"},id:"north-mid"},{name:{cy:"Canol De",en:"Mid-South"},id:"south-mid"},{name:{cy:"De",en:"South"},id:"south"}]},96:function(e){e.exports={updated:"2020-03-21T19:38:00+0000",data:[{address:{name:"Cwtch Coffi",street:"Bridge Street",city:"Aberaeron",postcode:"SA46 0AP"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"Cwtch Coffi",organisers:[{name:"Diana",number:"01545 570310"},{name:"Teresa",number:"01545 570310"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570310"},{address:{name:"The Hive",street:"Cadwgan Place",city:"Aberaeron",postcode:"SA46 0BU"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Takeaway/Home Delivery.\n\nDelivery within a 2 mile radius of Aberaeron only.\n\nAvailable all week:\nLunch 12pm-3pm / Evening 5pm-7pm.",en:"Takeaway/Home Delivery.\n\nDelivery within a 2 mile radius of Aberaeron only.\n\nAvailable all week:\nLunch 12pm-3pm / Evening 5pm-7pm."},name:"The Hive",regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570445"},{address:{name:"Zuko's",street:"Market Street",city:"Aberaeron",postcode:"SA46 0AT"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"Zuko's",organisers:[{name:"Julian Bransden",number:"01545 571150"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 571150"},{address:{name:"The New Celtic Restaurant",street:"8 Market Street",city:"Aberaeron",postcode:"SA46 0AS"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref",en:"Meal Delivery In Town"},name:"The New Celtic Restaurant",organisers:[{name:"Rhodri, Neris, Gary, Iestyn",number:"01545 570369"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570369"},{address:{name:"Ambassadors Caf\xe9",street:"3 Alban Square",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Cludiant Bwyd yn y Dref ac yn fodlon cludo bwyd i 6+ person o fewn dwy filltir.",en:"Meal Delivery In town.\n\nWill deliver 6 plus meals within 2 mile radius."},name:"Ambassadors Caf\xe9",organisers:[{name:"Louise Clemas",number:"01545 574737"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 574737"},{address:{name:"McCowans",street:"35 Alban Square",city:"Aberaeron",postcode:"SA46 0AJ"},category:"food",subCategory:"cafe",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd",en:"Meal Delivery"},name:"McCowans",organisers:[{name:"Clare McCowans",number:"07779 600731"}],regionId:"south-mid",city:"Aberaeron, Ciliau Aeron, Creuddyn Bridge, Cribyn, Cwrtnewydd, Felinfach, Temple Bar, Llanwnen",links:[],number:"07779 600731"},{address:{name:"Llond Plat",street:"7 Sgwar Alban",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"fish_and_chips",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd.\n\nDelivery commences at 12:00pm each day. Minimum order outside Aberaeron \xa310. Card payment taken over the phone or cash on delivery",en:"Meal Delivery. Delivery commences at 12:00pm each day. Minimum order outside Aberaeron \xa310. Card payment taken over the phone or cash on delivery"},name:"Llond Plat",organisers:[{name:"Sharys",number:"01545 570848"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570848"},{address:{name:"Harbourmaster",street:"1 Quay Parade",city:"Aberaeron",postcode:"SA46 0AD"},category:"food",subCategory:"restaurant",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Bwyd. Baking 20 loaves of bread this Saturday for locals to come and buy. Take away meals to those living in Aberaeron \u2013 Lunch and Dinner. Also DVD players and DVDS offered to those in isolation",en:"Meal Delivery. Baking 20 loaves of bread this Saturday for locals to come and buy. Take away meals to those living in Aberaeron \u2013 Lunch and Dinner. Also DVD players and DVDS offered to those in isolation"},name:"Harbourmaster",organisers:[],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570755"},{address:{name:"Golwyg-y-Mor",street:"3 Bridge Street",city:"Aberaeron",postcode:"SA46 0AP"},category:"food",subCategory:"butchers",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Dosbarthu Cig",en:"Meat Delivery"},name:"Golwyg-y-Mor",organisers:[{name:"Maria",number:"01545 570242"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 570242"},{address:{name:"Holy Trinity Church",city:"Aberaeron"},category:"foodbank",subCategory:"foodbank",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Food donations for foodbank (No food bank in Aberaeron)",en:"Food donations for foodbank (No food bank in Aberaeron)"},name:"Holy Trinity Church (Food bank donations)",regionId:"south-mid",city:"Aberaeron",links:[]},{address:{name:"Hatfield & John",street:"1 North Road",city:"Aberaeron"},category:"foodbank",subCategory:"foodbank",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Food donations for foodbank (No food bank in Aberaeron)",en:"Food donations for foodbank (No food bank in Aberaeron)"},name:"Hatfield & John (Food bank donations)",regionId:"south-mid",city:"Aberaeron",links:[]},{address:{name:"Pengarreg Laundry",street:"Clos Pengarreg",city:"Aberaeron",postcode:"SA46 0DX"},category:"laundry",subCategory:"laundry",council:{cy:"Cyngor Tref Aberaeron",en:"Aberaeron Town Council"},councillors:["Elizabeth Evans"],description:{cy:"Laundry Service. Will collect from property",en:"Laundry Service. Will collect from property"},name:"Pengarreg Laundry",organisers:[{name:"Meinir",number:"01545 574847, 07581413086"}],regionId:"south-mid",city:"Aberaeron",links:[],number:"01545 574847"},{address:{name:"Dryslwyn Stores & Filling Station",street:"Llwyncelyn",city:"Aberaeron",postcode:"SA46 0HF"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Henfynyw",en:"Henfynyw Community Council"},councillors:["Marc Davies"],description:{cy:"Yn barod i helpu a dosbarthu dros gyfnod y Coronafeirws",en:"Will assist & deliver during COVID-19"},name:"Dryslwyn Stores & Filling Station",organisers:[{name:"Nance Jones",number:"01545 580381"}],regionId:"south-mid",city:"Derwen Gam Oakford, Ffosyffin, Llwyncelyn",links:[],number:"01545 580381"},{address:{name:"Costcutter Ystrad Garage",street:"Felinfach",city:"Lampeter",postcode:"SA48 8AE"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Llanfihangel Ystrad",en:"Llanfihangel Ystrad Community Council"},councillors:["Lynford Thomas"],description:{cy:"Arechebu cyn 10 o\u2019r gloch y bore, dosbarthu o Dydd Llun \u2013 Dydd Gwener Derbyn arian parod neu siec neu talu gyda carden dros y ff\xf4n",en:"Order before 10a.m. for same day delivery, will deliver Monday \u2013 Friday Cash or cheque on delivery or can pay by card over the telephone"},name:"Costcutter Ystrad Garage",organisers:[{name:"Audrey, Lyn, Emma",number:"01570 471168"}],regionId:"south-mid",city:"Felinfach",links:[],number:"01570 471168"},{address:{name:{en:"Lampeter Foodbank",cy:"Banc Bwyd Lanbed"},street:"78 Bridge Street",city:"Lampeter",postcode:"SA48 7AB"},category:"foodbank",subCategory:"foodbank",description:{cy:"Llun/Mercher/Gwener. 9:00am-5:00pm",en:"Mon/Wed/Friday. 9:00am-5:00pm"},name:{en:"Lampeter Foodbank",cy:"Banc Bwyd Lanbed"},regionId:"south-mid",city:{cy:"Llanbedr Pont Steffan",en:"Lampeter"},links:[],number:"07582905743"},{address:{name:"Black Lion Hotel",street:"High Street Lampeter",city:"Lampeter"},category:"food",subCategory:"hotel",council:{cy:"Cyngor Tref Llanbedr Pont Steffan",en:"Lampeter Town Council"},councillors:["Hag Harris","Ivor Williamns"],description:{cy:"Dosbarthu Prydiau Bwyd",en:"Meal delivery"},name:"Black Lion Hotel",organisers:[{name:"Nick Wright",number:"01570 422 172"}],regionId:"south-mid",city:{en:"Lampeter",cy:"Llanbedr Pont Steffan"},links:[],number:"01570 422 172"},{address:{name:"Yr Hedyn Mwstard",street:"17 College Street",city:"Lampeter"},category:"food",subCategory:"hotel",council:{cy:"Cyngor Tref Llanbedr Pont Steffan",en:"Lampeter Town Council"},councillors:["Hag Harris","Ivor Williamns"],description:{cy:"Dosbarthu Prydiau Bwyd",en:"Meal delivery"},name:"Yr Hedyn Mwstard",organisers:[{name:"Liz Jones",number:"01570 423344, 07805 896013"}],regionId:"south-mid",city:{en:"Lampeter",cy:"Llanbedr Pont Steffan"},links:[],number:"01570 423344"},{address:{name:"Llanfair Clydogau Shop/Post Office",street:"Llanfair Clydogau",city:"Lampeter",postcode:"SA48 8LA"},category:"groceries",subCategory:"shop",council:{cy:"Cyngor Cymuned Llanfair Clydogau",en:"Llanfair Clydogau Community Council"},councillors:["Odwyn Davies"],description:{cy:"Dosbarthu siopa i\u2019r henoed dros gynod y Coronafeirws",en:"Grocery Deliveries for the Elderly will assist during the COVID19"},name:"Llanfair Clydogau Shop/Post Office",organisers:[{name:"Jean Entwistle",number:"01570 493203"}],regionId:"south-mid",city:"Llanfair Clydogau",links:[],number:"01570 493203"},{address:{name:"The Moody Cow",street:"Llwyncelyn",city:"Aberaeron",postcode:"SA46 OHL"},category:"food",subCategory:"restaurant",description:{cy:"Dosbarthu Bwyd",en:"Food Delivieries"},name:"The Moody Cow",organisers:[{name:"Geraint Thomas",number:"07989590997"}],regionId:"south-mid",city:"Llwyncelyn",links:[],number:"07989590997"},{address:{name:"Slaters Bakery",city:"Abersytwyth"},category:"food",subCategory:"bakery",description:{cy:"Dosbarthu bara/cacennau. Gogledd Ceredigion",en:"Bread and cake delivery. North Ceredigion"},name:"Slaters Bakery",organisers:[{name:"",number:"01970 611 522, 01970 612658"}],regionId:"north",city:"Aberystwyth",links:[],number:"01970 611 522"},{address:{name:"Robert Rattrays",city:"Abersytwyth"},category:"food",subCategory:"butchers",description:{cy:"Cigydd. Dosbarthy Gogledd Ceredigion",en:"Butcher. Deliver to North Ceredigion"},name:"Robert Rattrays",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615353"},{address:{name:"Treehouse",city:"Abersytwyth, Borth"},category:"food",subCategory:"shop",description:{cy:"Bwyd sych, organig ffrrwythau, llysiau, cig a.y.b",en:"Dry foods, organic wholefoods, fruit, veg, meat etc"},name:"Treehouse",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615791"},{address:{name:"Express Caf\xe9",city:"Abersytwyth"},category:"food",subCategory:"cafe",description:{cy:"Pryd ar Glud",en:"Meals on Wheels"},name:"Express Caf\xe9",regionId:"north",city:"Aberystwyth, Capel Bangor, Llandre",links:[],number:"01970 832113"},{address:{name:"Jonah's Fresh & Frozen Fish",city:"Abersytwyth"},category:"food",subCategory:"fishmonger",description:{cy:"Dosbarthu Pysgod",en:"Fresh & Frozen Fish Delivery"},name:"Jonah's Fresh & Frozen Fish",regionId:"north",city:"Aberystwyth, Borth, Bow Street, Penrhyncoch",links:[],number:"01970 615492"},{address:{name:"Food Bank",city:"Aberystwyth"},category:"foodbank",subCategory:"foodbank",description:{cy:"Food bank",en:"Food bank"},name:"Food Bank",regionId:"north",city:"Aberystwyth",links:[],number:"08002425844"},{address:{name:"Aberystwyth Food Distribution Hub",city:"Aberystwyth"},category:"foodbank",subCategory:"foodbank",description:{cy:"Food supply and contactless delivery for elderly vulnerable and financially vulnerable in Aberystwyth Town centre and reasonable walking distance. Limited supply but what we have is for the community.",en:"Food supply and contactless delivery for elderly vulnerable and financially vulnerable in Aberystwyth Town centre and reasonable walking distance. Limited supply but what we have is for the community."},name:"Aberystwyth Food Distribution Hub",regionId:"north",city:"Aberystwyth",links:[],number:"07411 038302"},{address:{name:"Penrhyncoch FC Roosters Carvery",city:"Penrhyncoch"},category:"food",subCategory:"meals_on_wheels",description:{cy:"Dydd Iau, Gwener, Sadwrn, Sul pryd o fwyd a pwdin \xa36.50. Yn fodlon dosbarthu yn Borth os fydd 10 neu fwy o ymholidau wedi dod i law.",en:"Thurs, Fri, Sat, Sunday one meal and pudding \xa36.50. Will deliver to Borth if more than 10 enquiries are received."},name:"Penrhyncoch FC Roosters Carvery",regionId:"north",city:"Borth, Bow Street, Capel Dewi, Llandre",links:[],number:"07813 714799"},{address:{name:"Premier Shop Family Stores",city:"Borth"},category:"groceries",subCategory:"shop",description:{cy:"Can take orders over the phone for corner shop items and pack up ready for delivery or provide contactless delivery on certain days",en:"Can take orders over the phone for corner shop items and pack up ready for delivery or provide contactless delivery on certain days"},name:"Premier Shop Family Stores",regionId:"north",city:"Borth",links:[],number:"01970 871543"},{address:{name:"SPAR",city:"Bow Street"},category:"groceries",subCategory:"shop",description:{cy:"SPAR corner shop delivery",en:"SPAR corner shop delivery"},name:"SPAR - Bow Street",regionId:"north",city:"Bow Street",organisers:[{name:"SPAR",number:"01970 867888, 07970820291"}],links:[],number:"01970 867888"},{address:{name:"MJ Ariels"},category:"services",subCategory:"tv",description:{cy:"Help gyda Teledu",en:"To have good TV signal and get TV sets up and running"},name:"MJ Ariels",regionId:"north",city:"Ceredigion",links:[],number:"07539333393"},{address:{name:"Clettwr Community Caf\xe9 & Shop",city:"Llancynfelyn"},category:"food",subCategory:"shop",description:{cy:"Dosbarthu Bwyd a Siopa",en:"Meal Deliveries and Groceries"},name:"Clettwr Community Caf\xe9 & Shop",regionId:"north",city:"Llancynfelyn, Taliesin, Tre'r Ddol",links:[],number:"01970 832113"},{address:{name:"Sean Fitzpatrick",city:"Penrhyncoch"},category:"groceries",subCategory:"milkman",name:"Sean Fitzpatrick",regionId:"north",city:"Penrhyncoch",links:[],number:"01970 820287"},{address:{name:"Glanarthen Stores",city:"Cross inn, Llanon"},category:"groceries",subCategory:"shop",description:{cy:"Grocery delivieries",en:"Grocery delivieries"},name:"Glanarthen Stores",regionId:"north-mid",city:"Cross Inn, Llanon",organisers:[{name:"Robby John Sweet",number:"01974 272505"}],links:[],number:"01974 272505"},{address:{name:{en:"Rhos Yr Hafod Pub",cy:"Tafarn Rhos Yr Hafod"},city:"Cross inn, Llanon"},category:"foodbank",subCategory:"foodbank",name:{en:"Rhos Yr Hafod Pub",cy:"Tafarn Rhos Yr Hafod"},regionId:"north-mid",city:"Cross Inn, Llanon",organisers:[{name:"Bridget Evans"}],links:[]},{address:{name:{en:"Carwyn's Caf\xe9",cy:"Cegin Carwyn"},city:"Penparcau"},category:"food",subCategory:"cafe",name:{en:"Carwyn's Cafe",cy:"Cegin Carwyn"},regionId:"north-mid",city:"Penparcau",organisers:[{name:"Carwyn",number:"01974 821201"}],number:"01974 821201",links:[]},{address:{name:"Huw Evans Pharmacist Tregaron",city:"Tregaron"},category:"healthcare",description:{cy:"Dosbarthu Meddyginiaeth",en:"Medication Deliveries"},subCategory:"pharmacist",name:"Huw Evans Pharmacist Tregaron",regionId:"north-mid",city:"Tregaron",organisers:[{name:"Huw Evans",number:"01974 298265"}],number:"01974 298265",links:[]},{address:{name:"SPAR",street:"Chapel Street",city:"Tregaron"},category:"healthcare",description:{cy:"Grocery Deliveries. Tregaron Town Only",en:"Grocery Deliveries. Tregaron Town Only"},subCategory:"pharmacist",name:"SPAR - Tregaron",regionId:"north-mid",city:"Tregaron",number:"01974 298281",links:[]},{address:{name:"Cardigan Bay Trading",city:"Newcastle Emlyn"},category:"groceries",description:{en:"Fresh fruit and veg boxes - delivered to people. Order in advance",cy:"Fresh fruit and veg boxes - delivered to people. Order in advance"},subCategory:"fruit_and_veg",name:"Cardigan Bay Trading",regionId:"south",city:"Newcastle Emlyn and Surrounding (Does do Cardigan)",number:"01239 710703",links:[]},{address:{name:"Caffi Emlyn",city:"Tanygroes"},category:"food",description:{en:"Home cooked meal. Call and order. Every day - Order in advance",cy:"Home cooked meal. Call and order. Every day - Order in advance"},subCategory:"meals_on_wheels",name:"Caffi Emlyn",regionId:"south",city:"South Ceredigion",number:"01239 810143",links:[]},{address:{name:"Cardigan Bay Brownies / Pantri",city:"Cardigan"},category:"food",description:{en:"Delivery service - lunchtime menu/brownies/blondies. 12:00pm-1:30pm Monday-Friday",cy:"Delivery service - lunchtime menu/brownies/blondies. 12:00pm-1:30pm Monday-Friday"},subCategory:"cafe",name:"Cardigan Bay Brownies / Pantri",regionId:"south",city:"Cardigan",number:"01239 611733",links:[]},{address:{name:"Tom Samways Butchers",city:"Cardigan"},category:"food",description:{en:"Butchers and local shop - home delivery. Can call outside shop and have placed in boot - no contact. Order in advance. Monday-Saturday business hours - Order in advance for delivery and to collect",cy:"Butchers and local shop - home delivery. Can call outside shop and have placed in boot - no contact. Order in advance. Monday-Saturday business hours - Order in advance for delivery and to collect"},subCategory:"butchers",name:"Tom Samways Butchers",regionId:"south",city:"Cardigan and Surrounding Area",number:"01239 621225",links:[]},{address:{name:"Dewi James a'i Gwmni",city:"Cardigan"},category:"food",description:{en:"Butchers - home delivery within 30 miles. Order in advance. Monday - Saturday business hours. Order in advance for delivery",cy:"Butchers - home delivery within 30 miles. Order in advance. Monday - Saturday business hours. Order in advance for delivery"},subCategory:"butchers",name:"Dewi James a'i Gwmni",regionId:"south",city:"Cardigan and 30 mile radius",number:"01239 612063",links:[{url:"https://www.dewijamesbutchers.co.uk",title:{en:"Order Online",cy:"Archebwch Ar-lein"}}]},{category:"community",description:{en:"Cardigancoronahelp@gmail.com. Cardigan - Coronavirus Help FB page",cy:"Cardigancoronahelp@gmail.com. Cardigan - Coronavirus Help FB page"},subCategory:"community_information",name:"Community information",regionId:"south",city:"Cardigan",links:[{url:"mailto:cardigancoronahelp@gmail.com",title:{en:"Email",cy:"E-bost"}}]},{address:{name:"Aberporth"},category:"community",description:{en:"Community Council coordinating assistance to the community. clerk@aberporthcommunitycouncil.gov.uk",cy:"Community Council coordinating assistance to the community. clerk@aberporthcommunitycouncil.gov.uk"},subCategory:"community_support",name:"Community Support Coordination",regionId:"south",city:"Aberporth Ward",links:[{url:"mailto:clerk@aberporthcommunitycouncil.gov.uk",title:{en:"Email",cy:"E-bost"}}]},{category:"transport",description:{en:"Taxi company offering assistance shopping or getting supplies delivered. Monday-Sunday",cy:"Taxi company offering assistance shopping or getting supplies delivered. Monday-Sunday"},subCategory:"taxi",name:"Home James Taxis",number:"01239 841258",regionId:"south",city:"South Ceredigion to Aberaeron"},{address:{name:"Teifi Chips",city:"Newcastle Emlyn"},category:"food",description:{en:"Fish and Chip shop offering delivery service between 5:30pm - 7:30pm (working around on need). Also can call ahead and park outside shop and have food placed in boot of car without contact. Monday-Saturday Shop open 11:30am - 8:30pm, Delivery 5:30pm - 7:30pm",cy:"Fish and Chip shop offering delivery service between 5:30pm - 7:30pm (working around on need). Also can call ahead and park outside shop and have food placed in boot of car without contact. Monday-Saturday Shop open 11:30am - 8:30pm, Delivery 5:30pm - 7:30pm"},subCategory:"fish_and_chips",name:"Teifi Chips",number:"01239 711367 ",regionId:"south",city:"Newcastle Emlyn and close surrounding area"},{category:"community",description:{en:"Community Information on Facebook. Newcastle Emlyn Community Help",cy:"Community Information on Facebook. Cymorth Cymunedol CNE"},subCategory:"community_information",name:"NCE Community Group - Facebook",regionId:"south",city:"Newcastle Emlyn and Surrounding Area",links:[{url:"https://www.facebook.com/groups/334088600124981/",title:{en:"Group",cy:"Gr\u0175p"}}]},{name:"Y Ffynnon",category:"community",subCategory:"community_support",regionId:"south",city:"Llandysul",organisers:[{name:"Steffan",number:"07581 274246"},{name:"Lleucu",number:"07966 014348"},{name:"Sarah",number:"07554 005423"}],description:{en:"Food shopping/Meal preparation Collecting prescriptions/Medication Any other needs. Working closely with Llandysul Food Bank and Calon Teifi",cy:"Food shopping/Meal preparation Collecting prescriptions/Medication Any other needs. Working closely with Llandysul Food Bank and Calon Teifi"}},{name:"Penparc YFC",category:"community",subCategory:"community_support",regionId:"south",city:"Penparc and Surrounding Area",organisers:[{name:"Angharad",number:"07772 347631"},{name:"Fflur",number:"07792 538241"},{name:"Delor",number:"07972 034787"},{name:"Gwenllian",number:"07980 001427"},{name:"Beca",number:"07375 566450"},{name:"Carys",number:"07852 512085"},{name:"Leah (Aberporth/Parcllyn)",number:"07817 731355"}],description:{en:"Food shopping, Collecting medication, Anything else",cy:"Food shopping, Collecting medication, Anything else"}},{number:"07971 101811",name:"Cllr Dan Potter",category:"community",subCategory:"community_support",regionId:"south",city:"New Quay",organisers:[{name:"Dan Potter",number:"07971 101811 | dan.potter@ceredigion.gov.uk"}],description:{en:"Liaising with New Quay Surgery, Food deliveries, Medication deliveries. Coordinating New Quay Support",cy:"Liaising with New Quay Surgery, Food deliveries, Medication deliveries. Coordinating New Quay Support"},links:[{title:{en:"Email",cy:"E-bost"},url:"mailto:dan.potter@ceredigion.gov.uk"}]},{number:"01545 560007",name:"Cross Inn Village Shop",category:"groceries",subCategory:"shop",regionId:"south",city:"Cross Inn, New Quay",organisers:[{name:"Messages",number:"01545 900060"}],description:{en:"Shop Delivery during Working hours of shop",cy:"Dosbarthu Siopa. Working hours of shop"}},{address:{name:"New Life Christian Centre",street:"Quay Street",city:"Cardigan"},category:"foodbank",description:{en:"Monday - 11:00am - 15:00pm. Wednesday morning. Friday - 11:00am - 14:00pm",cy:"Monday - 11:00am - 15:00pm. Wednesday morning. Friday - 11:00am - 14:00pm"},subCategory:"foodbank",name:"New Life Christian Centre",regionId:"south",city:"Cardigan",organisers:[{name:"Mob",number:"07949 127307"},{name:"Email",number:"info@cardigan.foodbank.org.uk"}],links:[{title:{en:"Mobile",cy:"Ffon Symudol"},url:"tel://07949127307"},{title:{en:"Email",cy:"E-bost"},url:"mailto:info@cardigan.foodbank.org.uk"},{title:{en:"Website",cy:"Gwefan"},url:"https://cardigan.foodbank.org.uk"},{title:{en:"Facebook",cy:"Facebook"},url:"https://www.facebook.com/cardiganfoodbank/"}],number:"01239 615864"},{address:{name:"Capel Seion, Rhiw Seion",city:"Llandysul"},category:"foodbank",description:{en:"Tuesday & Thursday 9:00am - 12:00pm",cy:"Tuesday & Thursday 9:00am - 12:00pm"},subCategory:"foodbank",name:{en:"Llandysul Food Bank",cy:"Banc Bwyd Llandysul"},regionId:"south",city:"Llandysul",organisers:[{name:"Email",number:"bancbwyd@gloau.cymru"}],links:[{title:{en:"Email",cy:"E-bost"},url:"mailto:bancbwyd@gloau.cymru"},{title:{en:"Facebook",cy:"Facebook"},url:"https://www.facebook.com/BancBwydLlandysul/"}],number:"07508 366423"},{category:"groceries",description:{en:"Mobile Shop. Call and discuss if there are requests to call at properties. Monday, Wednesday, Friday. Caerwedros (Old Primary School) - 2pm. Llwyndafydd (outside Crown inn) - 2:20pm. Ffostrasol (Square next to pub) 3:00pm. Mydroilyn (Hall carpark) - 3:45pm. Dihewyd (On the square) - 4:30pm. Synod Inn (On the square) - 5:15pm. Pentre'r Bryn (Brownhill entrance) - 5:40pm. Times may be revised",cy:"Mobile Shop. Call and discuss if there are requests to call at properties. Monday, Wednesday, Friday. Caerwedros (Old Primary School) - 2pm. Llwyndafydd (outside Crown inn) - 2:20pm. Ffostrasol (Square next to pub) 3:00pm. Mydroilyn (Hall carpark) - 3:45pm. Dihewyd (On the square) - 4:30pm. Synod Inn (On the square) - 5:15pm. Pentre'r Bryn (Brownhill entrance) - 5:40pm. Times may be revised"},subCategory:"shop",name:"Parc-y-Pant Produce",regionId:"south",city:"Caerwedros, Llwyndafydd, Ffostrasol, Mydroilyn, Dihewyd, Synod Inn, Pentre'r Bryn",organisers:[{name:"Mobile",number:"07931 294547"}],links:[{title:{en:"Mobile",cy:"Ffon Symudol"},url:"tel://07931 294547"}],number:"01545 560612"},{category:"groceries",description:{en:"Phone and collect service available. - Take shopping list over the phone. - Staff will pack the shopping. - Staff will call back and take payment over the phone. Normal business hours",cy:"Phone and collect service available. - Take shopping list over the phone. - Staff will pack the shopping. - Staff will call back and take payment over the phone. Normal business hours"},subCategory:"shop",name:"Siop Hoffnant Stores - Londis",regionId:"south",city:"Brynhoffnant",number:"01239 654053"},{category:"groceries",description:{en:"Delivery service between 4pm - 6pm. Minimum orders apply and the most vulnerable will be prioritised. Delivery radius 15 miles from shop. Free delivery for orders over \xa330. Message on Facebook also to order. Call or message before midday to receive same day delivery.",cy:"Delivery service between 4pm - 6pm. Minimum orders apply and the most vulnerable will be prioritised. Delivery radius 15 miles from shop. Free delivery for orders over \xa330. Message on Facebook also to order. Call or message before midday to receive same day delivery."},subCategory:"shop",name:"Storfa JJ's Stores - Premier",regionId:"south",city:"Pentrecwrt and 15 mile radius",number:"01559 363747",links:[{title:{en:"Facebook",cy:"Facebook"},url:"https://www.facebook.com/Storfajjstorespremier/"}]},{category:"food",description:{en:"Home delivery - Order before 3pm day before. Delivery Hours Wednesday - Sunday 11:00am - 2:00pm",cy:"Home delivery - Order before 3pm day before. Delivery Hours Wednesday - Sunday 11:00am - 2:00pm"},subCategory:"restaurant",name:"Crwst",regionId:"south",city:"Cardigan, Penparc, Blaenannerch, Aberporth, Tanygroes, Tresaith, Llechryd, Cenarth",number:"01239 611278"},{category:"food",description:{en:"Home delivery in Cardigan and call and collect. Normal business hours. Can deliver to Llandygwydd after 7pm. Contactless payment, cash, pay over the phone",cy:"Home delivery in Cardigan and call and collect. Normal business hours. Can deliver to Llandygwydd after 7pm. Contactless payment, cash, pay over the phone"},subCategory:"fish_and_chips",name:"Pendre Caf\xe9",regionId:"south",city:"Cardigan",number:"01239 613193"},{category:"food",description:{en:"Home delivery in Cardigan. Call and collect. Normal business hours. Can deliver to Llandygwydd after 7pm. Coffees, sandwiches, paninis, cakes. Contactless payment, cash, pay over the phone",cy:"Home delivery in Cardigan. Call and collect. Normal business hours. Can deliver to Llandygwydd after 7pm. Coffees, sandwiches, paninis, cakes. Contactless payment, cash, pay over the phone"},subCategory:"cafe",name:"La Fontana",regionId:"south",city:"Cardigan",number:"07947 251093"},{category:"community",description:{en:"Food shopping. Medication/Prescription collection. Any other needs",cy:"Food shopping. Medication/Prescription collection. Any other needs"},subCategory:"community_support",name:"CFFI Troedyraur YFC",regionId:"south",city:"Troedyraur and surrounding area",organisers:[{name:"Gethin",number:"07585 004012"},{name:"Llew",number:"07837 738673"},{name:"Dafydd",number:"07701 347349"},{name:"Tomos",number:"07474 337327"}]}]}}},[[68,1,2]]]);
//# sourceMappingURL=main.06d92a03.chunk.js.map