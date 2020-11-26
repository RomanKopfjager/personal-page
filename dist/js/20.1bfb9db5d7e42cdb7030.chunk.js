(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"Zs/4":function(t,i,e){"use strict";e.r(i);var n=e("V0Rq");function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function a(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,i,e){return i&&a(t.prototype,i),e&&a(t,e),t}var r={name:"ContactAnimation",data:function(){return{el:this.$refs.canvas_el,count:0}},methods:{smoothScroll:function(){console.log(this.count++);var t=document.querySelector(".scroll");console.log(this.$refs.canvas_el);var i=this.$el.querySelector(".contacts__img__wrapper");n.a.destroy(t);var e=n.a.init(t,{syncCallbacks:!0});i.style.top=-100,e.addListener(function(t){var e=t.offset;i.style.top=e.y>0?e.y-100+"px":-100})}},updated:function(){},mounted:function(){var t=2*Math.PI,i=document.getElementById("canvas"),e=document.querySelector(".main"),n=document.querySelector(".contacts__img"),a=function(){function t(){var a=this;s(this,t),console.log(window.innerHeight),console.log(e.clientHeight),this.mainPadding=window.innerWidth<=1024?49:59,this.mainMargin=window.innerWidth<=1024?30:100,this.mainHeight=e.clientHeight>window.innerHeight?e.clientHeight-this.mainPadding:window.innerHeight-this.mainPadding,n.setAttribute("style","height: ".concat(this.mainHeight-this.mainMargin,"px")),this.canvas=i,this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=this.mainHeight,this.center={x:this.width/2,y:this.height/2},this.circleContainers=[],this.context.clearRect(0,0,this.width,this.height),window.addEventListener("resize",function(){return a.resizeCanvas()},!1)}return o(t,[{key:"resizeCanvas",value:function(){this.mainPadding=e.style.paddingTop,this.mainHeight=e.clientHeight>window.innerHeight?e.clientHeight-this.mainPadding:window.innerHeight-this.mainPadding,n.removeAttribute("style"),n.setAttribute("style","height: ".concat(this.mainHeight-this.mainMargin,"px")),console.log(e.clientHeight+" e"),console.log(window.innerHeight+" w"),console.log(e.clientHeight+" g"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=this.mainHeight,this.center={x:this.width/2,y:this.height/2},this.circleContainers=[],this.initializeCircleContainers()}},{key:"initializeCircleContainers",value:function(){for(var t=0;t<this.width+100;t+=100)for(var i=0;i<this.height+100;i+=100){var e=new r(this.context,t,i);e.initializeCircles(),this.circleContainers.push(e)}}},{key:"update",value:function(){for(var t=0;t<this.circleContainers.length;t++)this.circleContainers[t].update()}},{key:"render",value:function(){this.context.clearRect(0,0,this.width,this.height);for(var t=0;t<this.circleContainers.length;t++)this.circleContainers[t].render()}},{key:"loop",value:function(){var t=this;this.update(),this.render(),window.requestAnimationFrame(function(){return t.loop()})}},{key:"remove",value:function(){this.context.clearRect(0,0,this.width,this.height)}}]),t}(),r=function(){function i(e,n,a){s(this,i),this.context=e,this.position={x:n,y:a},this.numberOfCircles=19,this.circles=[],this.baseRadius=20,this.bounceRadius=150,this.singleSlice=t/this.numberOfCircles}return o(i,[{key:"initializeCircles",value:function(){for(var t=0;t<this.numberOfCircles;t++)this.circles.push(new c(this.position.x,this.position.y+Math.random(),this.baseRadius,this.bounceRadius,t*this.singleSlice))}},{key:"update",value:function(){for(var t=0;t<this.numberOfCircles;t++)this.circles[t].update(this.context)}},{key:"render",value:function(){for(var t=0;t<this.numberOfCircles;t++)this.circles[t].render(this.context)}}]),i}(),c=function(){function i(t,e,n,a,o){s(this,i),this.basePosition={x:t,y:e},this.position={x:t,y:e},this.speed=.03,this.baseSize=10,this.size=10,this.angle=t+e,this.baseRadius=n,this.bounceRadius=a,this.angleCircle=o}return o(i,[{key:"update",value:function(){this.position.x=this.basePosition.x+Math.cos(this.angleCircle)*(Math.sin(this.angle+this.angleCircle)*this.bounceRadius+this.baseRadius),this.position.y=this.basePosition.y+Math.sin(this.angleCircle)*(Math.sin(this.angle+this.angleCircle)*this.bounceRadius+this.baseRadius),this.size=8*Math.cos(this.angle)+this.baseSize,this.angle+=this.speed}},{key:"render",value:function(i){i.fillStyle="hsl(195, 100%, "+4*this.size+"%)",i.beginPath(),i.arc(this.position.x,this.position.y,this.size,0,t),i.fill()}}]),i}(),h=new a;h.initializeCircleContainers(),h.loop()}},c=e("KHd+"),h=Object(c.a)(r,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"contacts__img"},[e("div",{ref:"canvas_el",staticClass:"contacts__img__wrapper"},[e("canvas",{attrs:{id:"canvas"}}),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[e("defs",[e("filter",{attrs:{id:"shadowed-goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}}),t._v(" "),e("feGaussianBlur",{attrs:{in:"goo",stdDeviation:"3",result:"shadow"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"shadow",mode:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2",result:"shadow"}}),t._v(" "),e("feOffset",{attrs:{in:"shadow",dx:"1",dy:"1",result:"shadow"}}),t._v(" "),e("feBlend",{attrs:{in2:"shadow",in:"goo",result:"goo"}}),t._v(" "),e("feBlend",{attrs:{in2:"goo",in:"SourceGraphic",result:"mix"}})],1),t._v(" "),e("filter",{attrs:{id:"goo"}},[e("feGaussianBlur",{attrs:{in:"SourceGraphic",result:"blur",stdDeviation:"10"}}),t._v(" "),e("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"goo"}}),t._v(" "),e("feBlend",{attrs:{in2:"goo",in:"SourceGraphic",result:"mix"}})],1)])])])])},[],!1,null,null,null).exports,l=e("eAuE"),u=e("nhA9"),d=e("rk3E"),v={name:"AppContact",data:function(){return{count:0}},methods:{},components:{ContactAnimation:h,IconBehance:l.a,IconLinkein:u.a,IconInstagram:d.a},mounted:function(){console.log(this.count++)}},g=Object(c.a)(v,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"contacts"},[e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"contacts__content"},[e("div",{staticClass:"contacts__title"},[e("h1",[t._v(t._s(t.$t("contact.title")))])]),t._v(" "),t._l(t.$t("contact.items"),function(i,n){return e("div",{key:n,staticClass:"contacts__description"},[e("div",{staticClass:"contacts__description__title"},[e("h4",[t._v(t._s(i.title))])]),t._v(" "),e("div",{staticClass:"contacts__description__text"},[e("p",[t._v(t._s(i.description))])]),t._v(" "),e("div",{staticClass:"contacts__description__link"},[e("a",{attrs:{href:"mailto:"+i.email}},[e("span",[t._v(t._s(i.email))]),t._v(" "),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"11.828",height:"11.828",viewBox:"0 0 11.828 11.828"}},[e("g",{attrs:{id:"стрелочка",transform:"translate(1.414 1.414)"}},[e("path",{attrs:{id:"стрелочка-2","data-name":"стрелочка",d:"M5010.012,1879.807h7.489v7.009",transform:"translate(-5008.501 -1879.807)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),t._v(" "),e("path",{attrs:{id:"стрелочка-3","data-name":"стрелочка",d:"M5020.8,1879.807l-9,9",transform:"translate(-5011.801 -1879.807)",fill:"none",stroke:"#fff","stroke-linecap":"round","stroke-width":"2"}})])])])])])}),t._v(" "),e("div",{staticClass:"contacts__social"},[e("a",{attrs:{href:"https://www.behance.net/",target:"_blank"}},[e("IconBehance")],1),t._v(" "),e("a",{attrs:{href:"https://www.linked.in/",target:"_blank"}},[e("IconLinkein")],1),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/",target:"_blank"}},[e("IconInstagram")],1)])],2),t._v(" "),e("ContactAnimation")],1)])])},[],!1,null,null,null);i.default=g.exports}}]);