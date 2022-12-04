(window.webpackJsonp=window.webpackJsonp||[]).push([[13,2,3,4,5,6,7,9,10,11,12],{283:function(t,e,r){var content=r(286);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(109).default)("766d4388",content,!0,{sourceMap:!1})},284:function(t,e,r){"use strict";r.r(e);var n={props:{type:{type:String,required:!0}}},o=(r(285),r(46)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return"users"===t.type?e("svg",{attrs:{viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"}})]):"mail"===t.type?e("svg",{attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"}})]):"youtube"===t.type?e("svg",{attrs:{viewBox:"0 0 576 512"}},[e("path",{attrs:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}})]):"linkedin"===t.type?e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}})]):t._e()}),[],!1,null,"0e37b34d",null);e.default=component.exports},285:function(t,e,r){"use strict";r(283)},286:function(t,e,r){var n=r(108)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\nsvg[data-v-0e37b34d]{\n  width:1em;\n  fill:currentcolor;\n  height:auto\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},287:function(t,e,r){"use strict";r.r(e);r(28);var n={props:{person:{type:Object,required:!0}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"},[null!==t.person.photo?e("a",{attrs:{href:t.person.linkedin,target:"_blank"}},[e("img",{staticClass:"flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4",attrs:{src:t.person.photo}})]):e("div",{staticClass:"flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"}),t._v(" "),e("div",{staticClass:"flex-grow sm:pl-8"},[e("h2",{staticClass:"title-font font-medium text-lg text-gray-900"},[t._v("\n      "+t._s(t.person.name)+"\n    ")]),t._v(" "),e("h3",{staticClass:"text-gray-500 mb-3"},[t._v("\n      "+t._s(t.person.job)+"\n    ")]),t._v(" "),e("p",{staticClass:"mb-2"},[t._v("\n      Time: "),e("strong",[t._v(t._s(t.person.team))])]),t._v(" "),e("p",{staticClass:"mb-4"},[t._v("\n      Na empresa desde "+t._s(t.person.since)+"\n    ")]),t._v(" "),e("span",{staticClass:"inline-flex"},[e("a",{staticClass:"text-gray-500 hover:text-red-500",attrs:{href:t.person.linkedin,title:"LinkedIn"}},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 448 512"}},[e("path",{attrs:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}})])]),t._v(" "),t.person.cv?e("a",{staticClass:"text-gray-500 ml-2 hover:text-red-500",attrs:{href:t.person.cv,title:"Currículo"}},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 384 512"}},[e("path",{attrs:{d:"M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"}})])]):t._e(),t._v(" "),t.person.page?e("a",{staticClass:"text-gray-500 ml-2 hover:text-red-500",attrs:{href:t.person.page,title:"Página pessoal"}},[e("svg",{staticClass:"w-5 h-5",attrs:{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z"}})])]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,r){"use strict";var n=r(2),o=r(80).find,l=r(132),c="find",d=!0;c in[]&&Array(1).find((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},289:function(t,e,r){"use strict";var n=r(2),o=r(7),l=r(39),c=r(25),d=r(31),f=r(200),m=r(13),v=r(3),x=r(198),h=r(133),C=r(290),y=r(291),_=r(81),w=r(292),k=[],V=o(k.sort),S=o(k.push),z=v((function(){k.sort(void 0)})),j=v((function(){k.sort(null)})),H=h("sort"),M=!v((function(){if(_)return _<70;if(!(C&&C>3)){if(y)return!0;if(w)return w<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:z||!j||!H||!M},{sort:function(t){void 0!==t&&l(t);var e=c(this);if(M)return void 0===t?V(e):V(e,t);var r,n,o=[],v=d(e);for(n=0;n<v;n++)n in e&&S(o,e[n]);for(x(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:m(e)>m(r)?1:-1}}(t)),r=d(o),n=0;n<r;)e[n]=o[n++];for(;n<v;)f(e,n++);return e}})},290:function(t,e,r){var n=r(63).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},291:function(t,e,r){var n=r(63);t.exports=/MSIE|Trident/.test(n)},292:function(t,e,r){var n=r(63).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},293:function(t,e,r){"use strict";var n=r(2),o=r(80).findIndex,l=r(132),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},294:function(t,e,r){"use strict";r.r(e);r(64),r(65),r(28),r(289),r(15),r(288),r(199),r(293);var n={props:{team:{type:Array,required:!0}},data:function(){return{teams:this.team.reduce((function(t,e){return null===(t.find((function(t){return t.name===e.team}))||null)&&t.push({name:e.team}),t}),[]).sort((function(a,b){return a.name===b.name?0:a.name<b.name?-1:1})),selectedTeams:[]}},methods:{test:function(t){console.log(t)},toggleTeam:function(t){this.selectedTeams.includes(t.name)?this.selectedTeams.splice(this.selectedTeams.findIndex((function(e){return e.name===t.name})),1):this.selectedTeams.push(t.name)}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"profissionais"}},[e("div",{staticClass:"text-gray-700 body-font border-t border-gray-200"},[e("div",{staticClass:"container px-5 py-24 mx-auto"},[t._m(0),t._v(" "),t._e(),t._v(" "),e("div",{staticClass:"md:flex md:flex-wrap md:-m-4"},t._l(t.team,(function(r,n){return e("div",{key:n,class:t.selectedTeams.includes(r.team)||0===t.selectedTeams.length?"p-4 lg:w-1/2":""},[t.selectedTeams.includes(r.team)||0===t.selectedTeams.length?e("PersonCard",{attrs:{person:r}}):t._e()],1)})),0)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col text-center w-full mb-20"},[e("h2",{staticClass:"text-xs text-red-500 tracking-widest font-medium title-font mb-1"},[t._v("\n          Os profissionais impactados\n        ")]),t._v(" "),e("h3",{staticClass:"sm:text-3xl text-2xl font-medium title-font text-gray-900"},[t._v("\n          Especialistas em SEO, tecnologia, mídias digitais, parcerias e mais...\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PersonCard:r(287).default})},295:function(t,e,r){"use strict";r.r(e);r(28),r(29),r(196),r(197),r(83),r(15);var n={data:function(){return{name:"",email:"",message:"",contactStatus:null,emailPattern:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"}},computed:{isValid:function(){return this.name.length>3&&null!==this.email.match(new RegExp(this.emailPattern))&&this.message.length>3}},methods:{sendContact:function(){var t=this,data={name:this.name,message:this.message,email:this.email};!0===this.isValid&&fetch("https://script.google.com/macros/s/AKfycbzF8dnuJfff0fXxIYeskdFJTvWzXYHqDxHhfWNx_4vOga__WFWptJKv0VN063YIS-CGfw/exec",{method:"POST",headers:{"Content-Type":"application/json"},mode:"no-cors",body:JSON.stringify(data)}).then((function(e){t.contactStatus="success"})).catch((function(){t.contactStatus="error"}))}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-600 body-font relative border-t border-gray-200"},[e("div",{staticClass:"container px-5 py-24 mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"lg:w-1/2 md:w-2/3 mx-auto"},[null===t.contactStatus?e("div",{staticClass:"flex flex-wrap -m-2"},[e("div",{staticClass:"p-2 w-1/2"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"leading-7 text-sm text-gray-600",attrs:{for:"name"}},[t._v("Seu nome")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",attrs:{id:"name",minlength:"3",type:"text",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"p-2 w-1/2"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"leading-7 text-sm text-gray-600",attrs:{for:"email"}},[t._v("Seu email")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",attrs:{id:"email",pattern:t.emailPattern,minlength:"3",type:"email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"p-2 w-full"},[e("div",{staticClass:"relative"},[e("label",{staticClass:"leading-7 text-sm text-gray-600",attrs:{for:"message"}},[t._v("Sua mensagem para o time")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out",attrs:{id:"message",minlength:"3",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}})])]),t._v(" "),e("div",{staticClass:"p-2 w-full"},[e("button",{staticClass:"flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg",class:!1===t.isValid?"opacity-50 pointer-events-none":"",attrs:{disabled:!1===t.isValid},on:{click:function(e){return t.sendContact()}}},[e("span",[t._v("Enviar")])])])]):"success"===t.contactStatus?e("div",{staticClass:"p-2 w-full",attrs:{role:"alert"}},[e("p",{staticClass:"bg-blue-500 text-white font-bold rounded-t px-4 py-2"},[t._v("\n          Mensagem enviada com sucesso\n        ")]),t._v(" "),e("p",{staticClass:"border border-t-0 border-blue-400 rounded-b bg-blue-100 px-4 py-3 text-blue-700"},[t._v("\n          Aguarde contato do time em breve\n        ")])]):"error"===t.contactStatus?e("div",{staticClass:"p-2 w-full",attrs:{role:"alert"}},[e("p",{staticClass:"bg-red-500 text-white font-bold rounded-t px-4 py-2"},[t._v("\n          Ocorreu um problema ao enviar a mensagem\n        ")]),t._v(" "),e("p",{staticClass:"border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"},[t._v("\n          Por favor tente novamente em breve\n        ")])]):t._e()])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col text-center w-full mb-12"},[e("h2",{staticClass:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"},[t._v("\n        Contato\n      ")]),t._v(" "),e("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base"},[t._v("\n        Para mais informações, oportunidades, sugestões entre em contato\n      ")])])}],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);var n={components:{VectorIcon:r(284).default}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-600 body-font border-t border-gray-200"},[e("div",{staticClass:"container px-5 py-24 mx-auto"},[e("div",{staticClass:"lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"},[e("h2",{staticClass:"flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"},[t._v("\n        Compartilhe essa página com sua base de contatos e contribua na realoção de profissionais altamente capacitados\n      ")]),t._v(" "),e("a",{staticClass:"flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0",attrs:{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://layoffvd.com.br",target:"_blank"}},[e("span",{staticClass:"inline-block"},[t._v("Compartilhar")]),t._v(" "),e("VectorIcon",{staticClass:"inline-block mb-1 ml-2",attrs:{type:"linkedin"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VectorIcon:r(284).default})},297:function(t,e,r){"use strict";r.r(e);var n=r(46),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-700 body-font"},[e("div",{staticClass:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"},[e("div",{staticClass:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},[e("h1",{staticClass:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},[t._v("\n        Viva Decora: Layoff\n      ")]),t._v(" "),e("p",{staticClass:"mb-8 leading-relaxed"},[t._v("\n        A Viva Decora, sucesso em SEO, portal de decoração mais acessado da América Latina desligou 15 funcionários de uma só vez em Novembro de 2022.\n      ")]),t._v(" "),e("div",{staticClass:"flex justify-center"},[e("a",{staticClass:"inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg",attrs:{href:"https://docs.google.com/spreadsheets/d/1o0eqkr7T0AJmtTWQYZ3Gcu-DizmbFOLS7JWCAYkRY2w/edit?usp=sharing",target:"_blank"}},[e("span",[t._v("Planilha Google")]),t._v(" "),e("svg",{staticStyle:{width:"1em","font-size":"inherit",fill:"currentColor","margin-left":"10px"},attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"}})])]),t._v(" "),e("a",{staticClass:"ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg",attrs:{href:"https://layoffvd.com.br/slides/slides-export.pdf",target:"_blank"}},[e("span",[t._v("Slides")]),t._v(" "),e("svg",{staticStyle:{width:"1em","font-size":"inherit",fill:"currentColor","margin-left":"10px"},attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"}})])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6"},[t("embed",{staticClass:"object-cover object-center rounded max-w-full",attrs:{src:"https://layoffvd.com.br/slides/slides-export.pdf",width:"500",height:"395",type:"application/pdf"}})])}],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var n=r(46),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"text-gray-700 body-font border-t border-gray-200"},[e("div",{staticClass:"bg-gray-200"},[e("div",{staticClass:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"},[e("p",{staticClass:"text-gray-500 text-sm text-center sm:text-left"},[t._v("\n        © 2022 Layoffvd —\n        "),e("a",{staticClass:"text-gray-600 ml-1",attrs:{href:"https://github.com/layoffvd",target:"_blank",rel:"noopener noreferrer"}},[t._v("github")])])])])])}],!1,null,null,null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var n=r(46),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("header",{staticClass:"text-gray-700 body-font border-b border-gray-200"},[e("div",{staticClass:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"},[e("a",{staticClass:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",attrs:{href:"/",target:"_blank"}},[e("svg",{staticStyle:{"border-radius":"50%",width:"36px","enable-background":"new 0 0 250.5 251.1"},attrs:{version:"1.1",x:"0",y:"0",viewBox:"0 0 250.5 251.1","xml:space":"preserve"}},[e("path",{staticStyle:{fill:"#ff5656"},attrs:{d:"M0 .6h250.5v250.5H0z"}}),e("path",{staticClass:"st1",attrs:{fill:"#fff",d:"M142.4 48.7c6.4 0 9.4 4.7 5.9 10l-14.1 24c-2.9 5.3-8.8 5.3-11.7 0l-14.1-24c-3.6-5.3-.6-10 5.9-10h28.1zm4.7 51.1c-7 0-9.4-4.7-5.9-10l13.5-24.1c3.6-5.3 8.8-5.3 12.3 0l14.1 24.1c2.9 5.3.6 10-5.9 10h-28.1zM108.9 106.8c6.4 0 9.4 4.1 5.9 10l-17.6 29.9c-3.6 5.9-8.8 5.9-11.7 0l-18.2-29.9c-2.9-5.9-.6-10 5.9-10h35.7zM175.3 106.8c6.4 0 8.8 4.1 5.9 10l-14.1 23.5c-3.6 5.9-8.8 5.9-12.3 0l-13.5-23.5c-3.6-5.9-1.2-10 5.9-10h28.1zm-61.1 50.5c-6.4 0-9.4-4.1-5.9-10l14.1-24.1c2.9-5.3 8.8-5.3 11.7 0l14.1 24.1c3.6 5.9.6 10-5.9 10h-28.1zm28.2 7c6.4 0 9.4 4.7 5.9 10l-14.1 24.1c-3.6 5.3-8.8 5.3-11.7 0l-14.2-24.1c-3.6-5.3-.6-10 5.9-10h28.2z"}})]),t._v(" "),e("span",{staticClass:"ml-3 text-xl"},[t._v("Layoff - Viva Decora")])])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n={components:{VectorIcon:r(284).default},props:{results:{type:Array,required:!0}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-600 body-font border-t border-gray-200"},[e("div",{staticClass:"container px-5 py-24 mx-auto"},[t._m(0),t._v(" "),e("div",{staticClass:"flex flex-wrap -m-4 text-center"},t._l(t.results,(function(r,n){return e("div",{key:n,staticClass:"p-4 md:w-1/4 sm:w-1/2 w-full"},[e("div",{staticClass:"border-2 border-gray-200 px-4 py-6 rounded-lg"},[e("VectorIcon",{staticClass:"text-red-500 w-12 h-12 mb-3 inline-block",staticStyle:{"font-size":"50px",height:"60px"},attrs:{type:r.icon}}),t._v(" "),e("h2",{staticClass:"title-font font-medium text-3xl text-gray-900"},[t._v("\n            "+t._s(r.title)+"\n          ")]),t._v(" "),e("p",{staticClass:"leading-relaxed"},[t._v("\n            "+t._s(r.subtitle)+"\n          ")])],1)])})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col text-center w-full mb-20"},[e("h2",{staticClass:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"},[t._v("\n        Resultados conquistados\n      ")]),t._v(" "),e("p",{staticClass:"lg:w-2/3 mx-auto leading-relaxed text-base"},[t._v("\n        Esse foi o time que proporcionou grandes resultados e autoridade para a empresa.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{VectorIcon:r(284).default})},301:function(t,e,r){"use strict";r.r(e);var n={props:{person:{type:Object,required:!0}},data:function(){return{isClosed:!1}}},o=r(46),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{directives:[{name:"show",rawName:"v-show",value:!1===t.isClosed,expression:"(isClosed === false)"}],staticClass:"relative z-10",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 z-10 overflow-y-auto",on:{click:function(e){t.isClosed=!0}}},[e("div",{staticClass:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[e("div",{staticClass:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},[e("div",{staticClass:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},[e("div",{staticClass:"sm:flex sm:items-start"},[e("div",{staticClass:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},[e("PersonCard",{attrs:{person:t.person}})],1)])]),t._v(" "),e("div",{staticClass:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[e("a",{staticClass:"inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button",href:t.person.linkedin,target:"_blank"}},[t._v("\n            LinkedIn\n          ")]),t._v(" "),e("button",{staticClass:"mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",attrs:{type:"button"},on:{click:function(e){t.isClosed=!0}}},[t._v("\n            Ver mais profissionais\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PersonCard:r(287).default})},302:function(t,e,r){"use strict";r.r(e);var n=r(24),o=r(10),l=(r(66),r(48),r(47),r(29),r(196),r(82),r(84),r(40),r(15),r(28),r(288),r(294)),c=r(297),d=r(298),f=r(299),m=r(295),v=r(296);function x(){return(x=Object(o.a)(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://script.google.com/macros/s/AKfycbwih-5BgPB6ZJFHa32sKfqSab2azL3fqkCejuuQGV4o5RQagz2wsjpaKL3j_zi7gB2xlg/exec?id=".concat(e,"&sheet=").concat(r)).then((function(t){return t.json()}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(t,e){return x.apply(this,arguments)},C={name:"IndexPage",components:{TeamSection:l.default,HeroSection:c.default,PageFooter:d.default,ContactSection:m.default,PageHeader:f.default,ShareSection:v.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,d,f,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(t){var e=t.match(/([0-9]{4})-([0-9]{2})/).slice(1).map((function(t){return parseInt(t)})),r=Object(n.a)(e,2),o=r[0],l=r[1];return"".concat(["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"][l-1],"/").concat(o)},o=function(t){return t.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")},l="1vvzVhkBfLG3XtM7be8370vauQrLu53K4HR2E4JjXTdA",e.next=5,h(l,"layoff-novembro-2022").then((function(t){return t.map((function(t){return{name:t.name,slug:o(t.name),team:t.team,since:r(t.since),linkedin:t.linkedin,job:t.job,available:t.available,photo:"https://layoffvd.com.br/slides/assets/pessoas/".concat(t.photo),page:t.page,cv:t.cv}})).filter((function(t){return!0===t.available}))}));case 5:return c=e.sent,e.next=8,h(l,"depoimentos");case 8:return d=e.sent,e.next=11,h(l,"resultados");case 11:return f=e.sent,m=t.query&&t.query.p?t.query.p:null,e.abrupt("return",{team:c,recommendations:d,results:f,selectedPerson:c.find((function(t){return t.slug===m}))||null});case 14:case"end":return e.stop()}}),e)})))()}},y=r(46),component=Object(y.a)(C,(function(){var t=this,e=t._self._c;return e("main",[e("PageHeader"),t._v(" "),e("HeroSection"),t._v(" "),e("TeamSection",{attrs:{team:t.team}}),t._v(" "),e("ResultsSection",{attrs:{results:t.results}}),t._v(" "),e("ShareSection"),t._v(" "),e("ContactSection"),t._v(" "),e("PageFooter"),t._v(" "),null!==t.selectedPerson?e("PersonModal",{attrs:{person:t.selectedPerson}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(299).default,HeroSection:r(297).default,TeamSection:r(294).default,ResultsSection:r(300).default,ShareSection:r(296).default,ContactSection:r(295).default,PageFooter:r(298).default,PersonModal:r(301).default})}}]);