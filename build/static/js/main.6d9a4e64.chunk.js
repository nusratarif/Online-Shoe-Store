(this["webpackJsonpshoe-store"]=this["webpackJsonpshoe-store"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/BlackNike.d130a41a.jpg"},function(e,t,a){e.exports=a.p+"static/media/BlueSimple.00479544.jpg"},function(e,t,a){e.exports=a.p+"static/media/CutShoes.0b56bf9c.jpg"},function(e,t,a){e.exports=a.p+"static/media/GrayShoes.2675febc.jpg"},function(e,t,a){e.exports=a.p+"static/media/LeatherShoe.552053b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/LoveJoggers.d498cdba.jpg"},function(e,t,a){e.exports=a.p+"static/media/MenSportsShoes.c2375148.jpg"},function(e,t,a){e.exports=a.p+"static/media/MulticolorNike.ef754a1a.jpg"},function(e,t,a){e.exports=a.p+"static/media/RainbowSports.81d05a4c.jpg"},function(e,t,a){e.exports=a.p+"static/media/MenWhiteNikeShoes.1c9e5c81.jpg"},function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(11),i=a.n(r),s=a(5),l=a(1),m=(a(27),a(8)),o=a(7),u=a(3),p=function(e,t){var a,n,c,r,i=e.shoppingCart,s=e.totalPrice,l=e.qty;switch(t.type){case"ADD_TO_CART":return i.find((function(e){return e.id===t.id}))?e:((a=t.product).qty=1,r=l+1,c=s+a.price,{shoppingCart:[a].concat(Object(u.a)(i)),totalPrice:c,qty:r});case"INCREAMENT":return(a=t.cart).qty=a.qty+1,c=s+a.price,r=l+1,n=i.findIndex((function(e){return e.id===t.id})),i[n]=a,{shoppingCart:Object(u.a)(i),totalPrice:c,qty:r};case"DECREAMENT":return(a=t.cart).qty>1?(a.qty=a.qty-1,c=s-a.price,r=l-1,n=i.findIndex((function(e){return e.id===t.id})),i[n]=a,{shoppingCart:Object(u.a)(i),totalPrice:c,qty:r}):e;case"DELETE":var m=i.filter((function(e){return e.id!==t.id}));return r=l-(a=t.cart).qty,c=s-a.price*a.qty,{shoppingCart:Object(u.a)(m),totalPrice:c,qty:r};default:return e}},d=Object(n.createContext)(),E=function(e){var t=Object(n.useReducer)(p,{shoppingCart:[],totalPrice:0,qty:0}),a=Object(o.a)(t,2),r=a[0],i=a[1];return c.a.createElement(d.Provider,{value:Object(m.a)(Object(m.a)({},r),{},{dispatch:i})},e.children)},h=function(){var e=Object(n.useContext)(d).qty;return c.a.createElement("nav",null,c.a.createElement("ul",{className:"left"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"Home"))),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"cart"},c.a.createElement("span",{className:"shoppingCart"},c.a.createElement("i",{className:"fas fa-cart-plus"}),c.a.createElement("span",{className:"cartCount"},e))))))},N=a(12),f=a.n(N),g=a(13),v=a.n(g),y=a(14),j=a.n(y),C=a(15),b=a.n(C),S=a(16),x=a.n(S),O=a(17),q=a.n(O),k=a(18),w=a.n(k),T=a(19),R=a.n(T),P=a(20),M=a.n(P),A=a(21),D=a.n(A),I=Object(n.createContext)(),L=function(e){var t=Object(n.useState)([{id:1,name:"Black Nike",price:6e3,image:f.a,status:"hot"},{id:2,name:"Blue Simple Shoe",price:2500,image:v.a,status:"new"},{id:3,name:"Cut Shoes",price:5e3,image:j.a,status:"new"},{id:4,name:"Gray style Shoe",price:4500,image:b.a,status:"hot"},{id:5,name:"Leather Shoe",price:6500,image:x.a,status:"new"},{id:6,name:"Love Joggers",price:4e3,image:q.a,status:"new"},{id:7,name:"Sports Men",price:3500,image:w.a,status:"new"},{id:8,name:"Nike Multicolor Shoe",price:3e3,image:R.a,status:"hot"},{id:9,name:"Rainbow Sports Shoe",price:3e3,image:M.a,status:"hot"},{id:10,name:"Men White Nike",price:6500,image:D.a,status:"hot"}]),a=Object(o.a)(t,1)[0];return c.a.createElement(I.Provider,{value:{products:Object(u.a)(a)}},e.children)},B=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"headerText"},c.a.createElement("div",null,c.a.createElement("h1",null,"Welcome to Super Shoe Store"),c.a.createElement("p",null,"Enjoy Online Shopping with Us! "))))},J=function(){var e=Object(n.useContext)(I).products,t=Object(n.useContext)(d).dispatch;return c.a.createElement("div",{className:"container"},c.a.createElement(B,null),c.a.createElement("div",{className:"products"},e.map((function(e){return c.a.createElement("div",{className:"product",key:e.id},c.a.createElement("div",{className:"product-image"},"hot"===e.status?c.a.createElement("div",{className:"hot"},"Hot"):"","new"===e.status?c.a.createElement("div",{className:"new"},"New"):"",c.a.createElement("img",{src:e.image,alt:"not found"})),c.a.createElement("div",{className:"product-details"},c.a.createElement("div",{className:"product-name"},e.name),c.a.createElement("div",{className:"product-price"},"Rs.",e.price)),c.a.createElement("div",{className:"add-to-cart",onClick:function(){return t({type:"ADD_TO_CART",id:e.id,product:e})}},"Add to Cart"))}))))},_=function(){var e=Object(n.useContext)(d),t=e.shoppingCart,a=e.totalPrice,r=e.qty,i=e.dispatch;return c.a.createElement("div",{className:"cart-container"},c.a.createElement("div",{className:"cart-details",style:{marginTop:"100px"}},t.length>0?t.map((function(e){return c.a.createElement("div",{className:"cart",key:e.id},c.a.createElement("span",{className:"cart-image"},c.a.createElement("img",{src:e.image,alt:"not found"})),c.a.createElement("span",{className:"cart-product-name"},e.name),c.a.createElement("span",{className:"cart-product-price"},"Rs.",e.price),c.a.createElement("span",{className:"inc",onClick:function(){return i({type:"INCREAMENT",id:e.id,cart:e})}},c.a.createElement("i",{className:"fas fa-plus"})),c.a.createElement("span",{className:"product-quantity"},e.qty),c.a.createElement("span",{className:"dec",onClick:function(){return i({type:"DECREAMENT",id:e.id,cart:e})}},c.a.createElement("i",{className:"fas fa-minus"})),c.a.createElement("span",{className:"product-total-price"},"Rs.",e.price*e.qty),c.a.createElement("span",{className:"delete-product",onClick:function(){return i({type:"DELETE",id:e.id,cart:e})}},c.a.createElement("i",{className:"fas fa-trash"})))})):"Sorry your cart is empty!"),t.length>0?c.a.createElement("div",{className:"cart-summary"},c.a.createElement("div",{className:"summary"},c.a.createElement("h3",null,"Cart Summary"),c.a.createElement("div",{className:"total-items"},c.a.createElement("div",{className:"items"},"Total Items"),c.a.createElement("div",{className:"item-count"},r)),c.a.createElement("div",{className:"total-price-section"},c.a.createElement("div",{className:"just-title"},"Total Price"),c.a.createElement("div",{className:"item-price"},"Rs.",a)))):"")},W=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"not-found"},c.a.createElement("h2",null,"Page Not Found")))};var G=function(){return c.a.createElement("div",null,c.a.createElement(L,null,c.a.createElement(E,null,c.a.createElement(s.a,null,c.a.createElement(h,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",element:c.a.createElement(J,null)}),c.a.createElement(l.a,{path:"cart",element:c.a.createElement(_,null)}),c.a.createElement(l.a,{path:"*",element:c.a.createElement(W,null)}))))))};i.a.render(c.a.createElement(G,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.6d9a4e64.chunk.js.map