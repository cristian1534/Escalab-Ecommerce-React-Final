"use strict";(self.webpackChunkfake_store_api=self.webpackChunkfake_store_api||[]).push([[261],{97876:function(e,t,a){a.d(t,{o:function(){return l},r:function(){return n}});var l=function(e){return{type:"SET_FAVORITE",payload:e}},n=function(e){return{type:"DELETE_FAVORITE",payload:e}}},86261:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(67294),n=a(86706),r=a(73727),c=function(){return l.createElement("div",{className:"container"},l.createElement("img",{src:"https://luxeaccessoria.com/shop/assets/img/no-product-found.png",className:"img-fluid container",alt:"Not-Product-Found"}))},o=a(97876),d=function(){return l.createElement("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.createElement("div",{class:"modal-dialog",role:"document"},l.createElement("div",{class:"modal-content"},l.createElement("div",{class:"modal-header"},l.createElement("h5",{class:"modal-title text-success",id:"exampleModalLabel"},"Removed"),l.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.createElement("span",{"aria-hidden":"true"},"×"))),l.createElement("div",{class:"modal-body"},"Product has been removed from favorite list. "),l.createElement("div",{class:"modal-footer"},l.createElement("button",{type:"button",class:"btn btn-outline-success","data-dismiss":"modal"},"Close")))))},s=a(45697),m=a.n(s),i=function(e){var t=e.favoritesProducts;return l.createElement("div",null,t.length?t.map((function(t){return l.createElement("div",{className:"container mt-5",key:t.data.id},l.createElement("table",{className:"table"},l.createElement("thead",{className:"thead-dark"},l.createElement("tr",null,l.createElement("th",{scope:"col"},"Image"),l.createElement("th",{scope:"col"},"Product"),l.createElement("th",{scope:"col"},"Price"),l.createElement("th",{scope:"col"},"Remove"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,l.createElement("img",{src:t.data.image,alt:"fp",className:"w-25"})),l.createElement("th",{scope:"row"},t.data.title),l.createElement("td",null,"$ ",t.data.price),l.createElement("td",null,l.createElement("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){return a=t.data.id,void e.deleteFavorite(a);var a},"data-toggle":"modal","data-target":"#exampleModal"},"Confirm"))))),l.createElement(d,null))})):l.createElement("div",{className:"container"},l.createElement(c,null),l.createElement(r.rU,{to:"/"},l.createElement("button",{type:"button",className:"btn btn-outline-dark btn-sm ml-2 container"},"Back Home"))))};i.prototype={favoritesProducts:m().array,handleDeleteFavorite:m().func,deleteFavorite:m().func};var u={deleteFavorite:o.r},E=(0,n.$j)((function(e){return{favoritesProducts:e.favoritesProducts}}),u)(i),f=function(){return l.createElement("div",null,l.createElement(E,null))}}}]);
//# sourceMappingURL=261.main.js.map