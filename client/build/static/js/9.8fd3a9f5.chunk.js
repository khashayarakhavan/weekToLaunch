(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{284:function(n,e,t){"use strict";var a=t(0),i=t.n(a),r=t(14),c=t(19),o=t(6),u=t(5),l=t(77);function d(){var n=Object(o.a)(["\n  width: 10%;\n  text-align: right;\n"]);return d=function(){return n},n}function m(){var n=Object(o.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return m=function(){return n},n}function p(){var n=Object(o.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]);return p=function(){return n},n}function s(){var n=Object(o.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return s=function(){return n},n}function f(){var n=Object(o.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px) {\n    display: block;\n    opacity: 0.9;\n    min-width: unset;\n    padding: 0 10px;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(o.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    &:hover {\n      .image {\n        opacity: unset;\n      }\n\n      button {\n        opacity: unset;\n      }\n    }\n  }\n"]);return b=function(){return n},n}var v=u.d.div(b()),g=Object(u.d)(l.a)(f());g.displayName="AddButton";var h=u.d.div(s(),function(n){var e=n.imageUrl;return"url(".concat(e,")")});h.displayName="BackgroundImage";var x=u.d.div(p());x.displayName="CollectionFooterContainer";var y=u.d.span(m());y.displayName="NameContainer";var j=u.d.span(d());j.displayName="PriceContainer";e.a=Object(r.b)(null,function(n){return{addItem:function(e){return n(Object(c.a)(e))}}})(function(n){var e=n.item,t=n.addItem,a=e.name,r=e.price,c=e.imageUrl;return i.a.createElement(v,null,i.a.createElement(h,{className:"image",imageUrl:c}),i.a.createElement(x,null,i.a.createElement(y,null,a),i.a.createElement(j,null,r)),i.a.createElement(g,{onClick:function(){return t(e)},inverted:!0},"Add to cart"))})},467:function(n,e,t){"use strict";t.r(e);var a=t(14),i=t(25),r=t(8),c=t(81),o=t(269),u=t(0),l=t.n(u),d=t(284),m=t(285),p=t(6),s=t(5);function f(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n\n  & > div {\n    margin-bottom: 30px;\n  }\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(p.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return b=function(){return n},n}function v(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return v=function(){return n},n}var g=s.d.div(v()),h=s.d.h2(b()),x=s.d.div(f());x.displayName="CollectionItemsContainer";var y=Object(a.b)(function(n,e){return{collection:Object(c.a)(e.match.params.collectionId)(n),isFetching:Object(c.c)(n)}})(function(n){var e=n.collection,t=n.isFetching;return l.a.createElement("div",null,t?l.a.createElement(m.a,null):l.a.createElement(g,null,l.a.createElement(h,null,e.title),l.a.createElement(x,null,e.items.map(function(n){return l.a.createElement(d.a,{key:n.id,item:n})}))))}),j=Object(r.b)({isLoading:function(n){return!Object(c.d)(n)}}),w=Object(i.d)(Object(a.b)(j),o.a)(y);e.default=w}}]);
//# sourceMappingURL=9.8fd3a9f5.chunk.js.map