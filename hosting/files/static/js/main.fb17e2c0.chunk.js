(this.webpackJsonpswagstore=this.webpackJsonpswagstore||[]).push([[0],{33:function(e,t,a){e.exports=a(51)},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),o=(a(38),a(6)),i=a(7),s=a(9),m=a(8),d=a(15),u=a(10),p=(a(39),a(3)),h=function(e){var t=e.children;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top"},c.a.createElement("span",{className:"before"}),c.a.createElement("div",{className:"container"},c.a.createElement("span",null),t,c.a.createElement("span",{className:"after"})),c.a.createElement("span",{className:"after"}))},v=function(e){var t=e.href,a=e.src;return c.a.createElement("ul",{className:"nav-brand-ul mr-auto"},c.a.createElement(p.b,{className:"a-navbar-brand",to:t},c.a.createElement("li",{className:"nav-logo-holder"},c.a.createElement("img",{className:"nav-logo-img",src:a,alt:""})),c.a.createElement("li",{className:"nav-copy"},"Swag Store")))},f=function(e){var t=e.link,a=e.title,n=e.icon,r=e.badge;return c.a.createElement("li",{className:"nav-item"},c.a.createElement(p.c,{exact:!0,className:"link nav-link base",activeStyle:{fontWeight:"bold"},to:t},n&&c.a.createElement("i",{className:n,style:{marginRight:"5px"}}),a,r>0&&c.a.createElement("span",{className:"badge badge-notify"},r)))},E=function(e){var t=e.children;return c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTargetContent"},c.a.createElement("ul",{className:"nav navbar-nav ml-auto"},t))},g=function(){return c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTargetContent","aria-controls":"navbarTargetContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"}))},b=(a(44),function(e){var t=e.items;return c.a.createElement("div",{className:"left navbar-dark bg-dark"},t.map((function(e){return c.a.createElement(N,Object.assign({key:e.title},e))})))}),N=function(e){var t=e.link,a=e.title,n=e.icon;return c.a.createElement(p.c,{className:"item nav-link nav-item",activeStyle:{fontWeight:"bold",color:"#0056b3"},to:t},c.a.createElement("i",{className:"icon ".concat(n)}),a)},y=a(14),k=a(19),w=function(e){var t=e.component,a=e.stitchClient,n=Object(k.a)(e,["component","stitchClient"]);return c.a.createElement(y.b,Object.assign({},n,{render:function(e){return a.auth.isLoggedIn?c.a.createElement(t,Object.assign({stitchClient:a},e,n)):c.a.createElement(y.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},C=a(25),O=a.n(C),j=a(31),x=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),T=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}),S=function(e){var t=e.products,a=e.handleAddToCart;return c.a.createElement("div",{className:"card-deck"},t.map((function(e,t){var n=[c.a.createElement(P,{key:e.id,product:e,handleAddToCart:a})];return(t+1)%2===0&&n.push(c.a.createElement("div",{key:"2-spacer-".concat(t+1),className:"w-100 d-none d-sm-block d-md-none"})),(t+1)%3===0&&n.push(c.a.createElement("div",{key:"3-spacer-".concat(t+1),className:"w-100 d-none d-md-block d-lg-none"})),(t+1)%4===0&&n.push(c.a.createElement("div",{key:"4-spacer-".concat(t+1),className:"w-100 d-none d-lg-block d-xl-none"})),(t+1)%5===0&&n.push(c.a.createElement("div",{key:"5-spacer-".concat(t+1),className:"w-100 d-none d-xl-block"})),n})))},P=function(e){var t=e.product;e.handleAddToCart;return c.a.createElement("div",{className:"card mb-4",style:{maxWidth:"15rem"}},c.a.createElement("img",{className:"card-img-top img-fluid",src:t.image.large,alt:t.name}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},c.a.createElement(p.b,{to:"/products/".concat(t.id)},t.name)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",null,t.overview))),t.price&&c.a.createElement("div",{className:"card-footer"},c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},x.format(t.price)))))},I=a(18),A=function(e){var t=e.personalized_recs;return c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{className:"img-fluid",src:"/images/swag.jpg",alt:""}))),t.length>0&&c.a.createElement("div",{className:"row",style:{marginTop:"10px"}},c.a.createElement("div",{className:"col col-md-12"},c.a.createElement("h3",null,"Recommended for you"),c.a.createElement(S,{products:t}))))},_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={redirectToReferrer:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.stitchClient.auth.hasRedirectResult()){e.next=4;break}return e.next=3,this.props.stitchClient.auth.handleRedirectResult().catch(console.error);case 3:console.log("processed redirect result");case 4:this.props.stitchClient.auth.isLoggedIn&&this.setState({redirectToReferrer:!0});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=(this.props.location.state||{from:{pathname:"/"}}).from,a=this.state.redirectToReferrer;return"/cart"===t.pathname&&"".concat(window.location.protocol,"//").concat(window.location.host).concat(t.pathname),a?c.a.createElement(y.a,{to:t}):c.a.createElement("div",{className:"container Login"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"card mx-auto"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h4",null,"Login")),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Please login to continue."),c.a.createElement("div",{onClick:function(){var t=new I.a;e.props.stitchClient.auth.loginWithRedirect(t)},className:"signin-button"},c.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"18px",height:"18px",viewBox:"0 0 48 48"},c.a.createElement("g",null,c.a.createElement("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),c.a.createElement("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),c.a.createElement("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),c.a.createElement("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),c.a.createElement("path",{fill:"none",d:"M0 0h48v48H0z"}))),c.a.createElement("span",{className:"signin-button-text"},"Sign in with Google"))))))}}]),t}(n.Component),U=function(e){var t=e.product,a=e.handleUpdateCartItem;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2 col-6"},c.a.createElement("img",{src:t.image.thumb,alt:t.name})),c.a.createElement("div",{className:"col-md-6 col-6"},c.a.createElement(p.b,{to:"/products/".concat(t.id)},t.name)),c.a.createElement("div",{className:"col-md-2 col-4"},c.a.createElement("input",{type:"number",value:t.quantity,className:"form-control col-md-5",onChange:function(e){return a(t.id,parseInt(e.target.value,10))}})),c.a.createElement("div",{className:"col-md-1 col-4"},x.format(t.price)),c.a.createElement("div",{className:"col-md-1 col-4"},c.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(){return a(t.id)}},"X")))},D=function(e){var t=e.cart,a=e.handleUpdateCartItem,n=e.handleCheckout,r=e.history,l=t.products;return c.a.createElement("div",{className:"container page"},c.a.createElement("h2",null,"Cart"),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},l.length>0&&c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"}),c.a.createElement("div",{className:"col-6 col-md-6 d-none d-sm-block"},c.a.createElement("strong",null,"Name")),c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"},c.a.createElement("strong",null,"Quantity")),c.a.createElement("div",{className:"col-1 col-md-1 d-none d-sm-block"},c.a.createElement("strong",null,"Price")),c.a.createElement("div",{className:"col-1 col-md-1 d-none d-sm-block"})),l.map((function(e){return c.a.createElement(U,{key:e.id,product:e,handleUpdateCartItem:a})}))),0===l.length&&c.a.createElement("div",{className:"alert alert-info"},"Cart is empty"),c.a.createElement("div",{className:"cart__total"},c.a.createElement("strong",null,"Total:")," ",x.format(t.totalPrice)),l.length>0&&c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-primary",onClick:function(){n(),r.push("/profile")}},"Check Out")))))},B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={products:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getProducts",value:function(){var e=this;this.props.db.collection("products").find({category:this.props.match.params.category}).toArray().then((function(t){e.setState({products:t})})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getProducts()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.category!==e.match.params.category&&this.getProducts()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,this.props.match.params.category)),c.a.createElement("div",{className:"row"},c.a.createElement(S,{products:this.state.products,handleAddToCart:this.props.handleAddToCart})))}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={product:{image:{}},quantity:1,notifying:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getProduct",value:function(){var e=this;this.props.db.collection("products").findOne({id:this.props.match.params.id}).then((function(t){e.setState({product:t,notifying:Boolean(e.props.notify.find((function(t){return t.id===e.props.match.params.id})))}),e.props.handleBrowsedProduct(t)})).catch((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){this.getProduct()}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;this.props.match.params.id!==e.match.params.id&&this.getProduct(),this.props.notify!==e.notify&&this.setState({notifying:Boolean(this.props.notify.find((function(e){return e.id===n.props.match.params.id})))})}},{key:"render",value:function(){var e=this,t=this.state.product,a=(t._id,t.name),n=t.id,r=t.price,l=t.image,o=t.overview,i=t.inventory,s=Object(k.a)(t,["_id","name","id","price","image","overview","inventory"]),m=i>0;return c.a.createElement("div",{className:"container page"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-md-10"},c.a.createElement("h3",null,a)),c.a.createElement("div",{className:"col col-md-2 text-right"},c.a.createElement("h3",null,x.format(r)))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-md-6 text-center"},c.a.createElement("img",{src:l.large,height:"300",alt:a})),c.a.createElement("div",{className:"col col-md-6"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Overview"),c.a.createElement("p",{className:"card-text"},o)))),c.a.createElement("div",{className:"row",style:{marginTop:"10px"}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Add to Cart"),m?[c.a.createElement("p",{key:"txtInStock",className:"card-text text-success"},"In Stock : ",i),c.a.createElement("form",{key:"formAddToCart",className:"form-inline"},c.a.createElement("label",{htmlFor:"txtQuantity"},"Quantity: "),c.a.createElement("input",{id:"txtQuantity",type:"number",className:"form-control col-2",value:this.state.quantity,onChange:function(t){e.setState({quantity:t.target.value})}}),c.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){e.props.handleAddToCart(n,parseInt(e.state.quantity,10))}},c.a.createElement("i",{className:"fa fa-plus"})," Add to cart"))]:c.a.createElement("p",{className:"card-text text-danger"},"Out of Stock"),!m&&this.state.notifying&&c.a.createElement("p",{className:"card-text"},"We'll Notify you when it's back in stock."),!m&&!this.state.notifying&&c.a.createElement("form",{className:"form-inline"},c.a.createElement("button",{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){e.props.handleProductNotification(n)}},"Notify When in Stock"))))))),c.a.createElement("div",{className:"row",style:{marginTop:"10px"}},c.a.createElement("div",{className:"col col-md-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Additional Information"),c.a.createElement("div",{className:"card-body"},s&&c.a.createElement("table",{className:"table table-striped"},c.a.createElement("tbody",null,Object.keys(s).map((function(e){return c.a.createElement("tr",{key:e},c.a.createElement("td",null,e),c.a.createElement("td",null,s[e].toString()))})))))))))}}]),t}(n.Component),F=(a(49),function(e){var t=e.product;return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col-6"}),c.a.createElement("div",{className:"col-md-2 col-2"},c.a.createElement("strong",null,"Qty")),c.a.createElement("div",{className:"col-md-2 col-2"},c.a.createElement("strong",null,"Price")),c.a.createElement("div",{className:"col-md-2 col-2"},c.a.createElement("strong",null,"Total")),c.a.createElement("div",{className:"col-md-6 col-6"},c.a.createElement("img",{src:t.image.thumb,alt:t.name}),c.a.createElement("br",null),c.a.createElement(p.b,{to:"/products/".concat(t.id)},c.a.createElement("small",null,t.name))),c.a.createElement("div",{className:"col-md-2 col-2"},t.quantity),c.a.createElement("div",{className:"col-md-2 col-2"},x.format(t.price)," "),c.a.createElement("div",{className:"col-md-2 col-2"},x.format(t.price*t.quantity)," "))}),R=function(e){var t=e.products;return c.a.createElement("div",{className:"col-12 col-md-12 order-total"},c.a.createElement("div",{className:"text-right"},c.a.createElement("strong",null,"Order Total:"),"\xa0",x.format(t.reduce((function(e,t){return e+t.quantity*t.price}),0))),c.a.createElement("hr",null))},W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"ordersTotal",value:function(e){}},{key:"render",value:function(){var e=this.props.userInfo;return e.orders=e.orders.sort((function(e,t){return t.date_created-e.date_created})),c.a.createElement("div",{className:"container page"},c.a.createElement("br",null),c.a.createElement("h2",null,"Profile"),c.a.createElement("br",null),c.a.createElement("div",{className:"col-xs-12 col-sm-9"},c.a.createElement("h4",{className:"blue"},c.a.createElement("span",{className:"middle"},e.firstname," ",e.lastname)),c.a.createElement("div",{className:"profile-user-info"},c.a.createElement("div",{className:"profile-info-row"},c.a.createElement("div",{className:"profile-info-name"}," Email "),c.a.createElement("div",{className:"profile-info-value"},c.a.createElement("span",null,e.email))),c.a.createElement("div",{className:"profile-info-row"},c.a.createElement("div",{className:"profile-info-name"}," Telephone "),c.a.createElement("div",{className:"profile-info-value"},c.a.createElement("span",null,e.phone))),c.a.createElement("div",{className:"profile-info-row"},c.a.createElement("div",{className:"profile-info-name"}," Shipping Address "),c.a.createElement("div",{className:"profile-info-value"},c.a.createElement("span",null,e.address))),c.a.createElement("div",{className:"profile-info-row"},c.a.createElement("div",{className:"profile-info-name"}," City "),c.a.createElement("div",{className:"profile-info-value"},c.a.createElement("span",null,e.city))),c.a.createElement("div",{className:"profile-info-row"},c.a.createElement("div",{className:"profile-info-name"}," State, Zip "),c.a.createElement("div",{className:"profile-info-value"},c.a.createElement("span",null,e.state," ",e.zip)))),c.a.createElement("div",{className:"hr hr-8 dotted"})),c.a.createElement("br",null),c.a.createElement("h2",null,"My Orders"),c.a.createElement("br",null),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},e.orders.length>0&&c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"},c.a.createElement("strong",null,"## Order Date")),c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"},c.a.createElement("strong",null,"Status")),c.a.createElement("div",{className:"col-6 col-md-6 d-none d-sm-block"},c.a.createElement("strong",null,"Products"))),e.orders.map((function(e,t){return c.a.createElement("div",{className:"row",key:e.id.toString()},c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"},t+1,"\xa0",T.format(e.date_created)),c.a.createElement("div",{className:"col-2 col-md-2 d-none d-sm-block"},e.status),c.a.createElement("div",{className:"col-8 col-md-8 d-none d-sm-block"},e.products.map((function(e){return c.a.createElement(F,{key:e.id,product:e})}))),c.a.createElement("div",{className:"row col-md-12"},c.a.createElement(R,{products:e.products,key:e.id.toString()})))}))),0===e.orders.length&&c.a.createElement("div",{className:"alert alert-info"},"No orders"))))}}]),t}(n.Component),M=(a(50),[{link:"/products/category/apparel",title:"apparel",icon:"fas fa-tshirt"},{link:"/products/category/bags",title:"bags",icon:"fas fa-shopping-bag"},{link:"/products/category/kids",title:"kids",icon:"fas fa-child"},{link:"/products/category/travel",title:"travel",icon:"fas fa-globe"},{link:"/products/category/accessories",title:"accessories",icon:"fa fa-suitcase"},{link:"/products/category/vintage",title:"vintage",icon:"fab fa-shirtsinbulk"}]),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={authData:{},cart:{products:[],totalQuantity:0,totalPrice:0},orders:[],notify:[],browsed_products:[],personalized_recs:[]},a.handleAddToCart=a.handleAddToCart.bind(Object(d.a)(a)),a.handleUpdateCartItem=a.handleUpdateCartItem.bind(Object(d.a)(a)),a.handleCheckout=a.handleCheckout.bind(Object(d.a)(a)),a.handleProductNotification=a.handleProductNotification.bind(Object(d.a)(a)),a.handleBrowsedProduct=a.handleBrowsedProduct.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.stitchClient.auth.isLoggedIn&&this.props.stitchClient.callFunction("getUserInfo").then((function(t){e.setState(t)}))}},{key:"handleAddToCart",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.props.stitchClient.callFunction("addToCart",[e,a]).then((function(e){var a=e.cart;t.setState({cart:a})}))}},{key:"handleUpdateCartItem",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.props.stitchClient.callFunction("updateCartItem",[e,a]).then((function(e){var a=e.cart;t.setState({cart:a})}))}},{key:"handleCheckout",value:function(e){var t=this;this.props.stitchClient.callFunction("checkout",[e]).then((function(e){var a=e.cart,n=e.orders;t.setState({cart:a,orders:n})})).catch((function(e){console.log(e)}))}},{key:"handleProductNotification",value:function(e){var t=this;this.props.stitchClient.callFunction("registerProductNotification",[e]).then((function(e){var a=e.notify;t.setState({notify:a})}))}},{key:"handleBrowsedProduct",value:function(e){var t=this,a=e.id,n=e.name,c=this.props.db.collection("users");c.updateOne({user_id:this.props.stitchClient.auth.user.id},{$addToSet:{browsed_products:{id:a,name:n,date_visited:new Date}}}).then((function(){return c.findOne({user_id:t.props.stitchClient.auth.user.id},{_id:0,browsed_products:1}).then((function(e){var a=e.browsed_products;t.setState({browsed_products:a})}))}))}},{key:"render",value:function(e){var t=this,a=this.props.stitchClient.auth.isLoggedIn;return c.a.createElement("div",null,c.a.createElement(h,null,c.a.createElement(v,{href:"/",src:"/images/logo.png"}),c.a.createElement(g,null),a&&c.a.createElement(E,null,c.a.createElement("li",{key:"user-welcome",className:"nav-item"},c.a.createElement("span",{className:"navbar-text link"},"Hello, ",this.state.authData.first_name)),c.a.createElement(f,{key:"home",link:"/",title:"home"}),c.a.createElement(f,{key:"profile",link:"/profile",title:"profile"}),c.a.createElement(f,{key:"cart",link:"/cart",title:"cart",icon:"fa fa-shopping-cart",badge:this.state.cart.totalQuantity}),c.a.createElement("li",{key:"logout",className:"nav-item"},c.a.createElement("button",{type:"button",className:"btn btn-link link nav-link base",onClick:function(){return t.props.stitchClient.auth.logout().then((function(){return window.location.reload()}))}},"logout")))),a&&c.a.createElement(b,{items:M}),c.a.createElement("div",{className:"main"},c.a.createElement(y.d,null,c.a.createElement(w,Object.assign({exact:!0,path:"/",component:A},this.props,{personalized_recs:this.state.personalized_recs})),c.a.createElement(y.b,{exact:!0,path:"/login",render:function(e){return c.a.createElement(_,Object.assign({},t.props,e))}}),c.a.createElement(w,Object.assign({exact:!0,path:"/cart",component:D},this.props,{cart:this.state.cart,handleUpdateCartItem:this.handleUpdateCartItem,handleCheckout:this.handleCheckout})),c.a.createElement(w,Object.assign({exact:!0,path:"/profile",component:W},this.props,{userInfo:this.state})),c.a.createElement(w,Object.assign({exact:!0,path:"/products/category/:category",component:B},this.props,{handleAddToCart:this.handleAddToCart})),c.a.createElement(w,Object.assign({exact:!0,path:"/products/:id",component:z},this.props,{handleAddToCart:this.handleAddToCart,handleProductNotification:this.handleProductNotification,handleBrowsedProduct:this.handleBrowsedProduct,notify:this.state.notify})))))}}]),t}(n.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=I.c.initializeDefaultAppClient("swagstore-kdsnu"),J=H.getServiceClient(I.b.factory,"mongodb-atlas"),$={stitchClient:H,db:J.db("swagstore")};l.a.render(c.a.createElement(p.a,null,c.a.createElement(q,$)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");L?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Q(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.fb17e2c0.chunk.js.map