(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{536:function(t,e,n){"use strict";n(14),n(13),n(8),n(20);var r=n(2),c=(n(3),n(50),n(70),n(36),n(16),n(34),n(71),n(520),n(47),n(521),n(522),n(523),n(524),n(525),n(526),n(527),n(528),n(529),n(530),n(531),n(532),n(533),n(48),n(15),n(317),n(1)),o=n(78),l=n(0);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=["sm","md","lg","xl"],j=["start","end","center"];function v(t,e){return y.reduce((function(n,r){return n[t+Object(l.w)(r)]=e(),n}),{})}var O=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},w=v("align",(function(){return{type:String,default:null,validator:O}})),h=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},m=v("justify",(function(){return{type:String,default:null,validator:h}})),C=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},P=v("alignContent",(function(){return{type:String,default:null,validator:C}})),R={align:Object.keys(w),justify:Object.keys(m),alignContent:Object.keys(P)},S={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=S[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var x=new Map;e.a=c.default.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},w),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:C}},P),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],R)R[e].forEach((function(t){var r=n[t],c=k(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},631:function(t,e,n){"use strict";n.r(e);var r=n(11),c=n(12),o=n(21),l=n(18),f=n(5),d=n(6),y=(n(8),n(3),n(40),n(23));function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=function(t){Object(o.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"head",value:function(){return{title:"Home"}}}]),n}(y.Vue),w=O=v([y.Component],O),h=n(31),m=n(33),C=n.n(m),P=n(216),R=n(616),S=n(536),component=Object(h.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",{staticClass:"logo py-4 d-flex justify-center"},[t._v(" うえるかむ！ ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;C()(component,{VCard:P.a,VCol:R.a,VRow:S.a})}}]);