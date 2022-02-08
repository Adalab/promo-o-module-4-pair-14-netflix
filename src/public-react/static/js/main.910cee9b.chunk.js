(this["webpackJsonpmodulo-3-repaso-final"]=this["webpackJsonpmodulo-3-repaso-final"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s(14),i=s.n(a),c=s(8),r=s(3),o=s(2),l={get:function(e,t){var s=localStorage.getItem(e);return null===s?t:JSON.parse(s)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},u=s(0),d=function(e){return Object(u.jsxs)("header",{className:"col2 border--medium",children:[Object(u.jsx)(c.b,{className:"nav__link",to:"/",children:Object(u.jsx)("h1",{className:"title--big",children:"Netflix"})}),Object(u.jsx)("nav",{className:"text-align-right",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(c.b,{className:"nav__link",to:"/",children:"Inicio"})}),function(){if(!1===e.isUserLogged)return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(c.b,{className:"nav__link",to:"/login",children:"Login"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(c.b,{className:"nav__link",to:"/signup",children:"Registro"})})]})}(),function(){if(!0===e.isUserLogged)return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(c.b,{className:"nav__link",to:"/profile",children:"Mi perfil"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)(c.b,{className:"nav__link",to:"/my-movies",children:"Mis pel\xedculas"})}),Object(u.jsx)("li",{className:"nav__item",children:Object(u.jsx)("span",{className:"nav__link",onClick:e.logout,children:"Cerrar sesi\xf3n"})})]})}()]})})]})},j=function(e){var t=function(){return e.movies.map((function(e){return Object(u.jsxs)("li",{className:"card",children:[Object(u.jsx)("img",{className:"card__img",src:e.image,alt:"Car\xe1tula de ".concat(e.title)}),Object(u.jsx)("h3",{className:"card__title",children:e.title}),Object(u.jsxs)("p",{className:"card__description",children:["G\xe9nero: ",e.gender]})]},e.id)}))};return e.movies.length?Object(u.jsx)("ul",{className:"cards",children:t()}):Object(u.jsx)("p",{children:"No hay pel\xedculas en este listado"})},m=(s(30),function(e){var t=function(t){e.handleAllMoviesOptions({value:t.target.value,key:t.target.name})};return Object(u.jsxs)("section",{className:"border--medium",children:[Object(u.jsx)("h1",{className:"title--medium",children:"Estas son todas las pel\xedculas de nuestro cat\xe1logo"}),Object(u.jsxs)("form",{className:"movies__filters",children:[Object(u.jsxs)("div",{className:"movies__filters--gender",children:[Object(u.jsx)("label",{htmlFor:"filterGender",children:"Filtrar por g\xe9nero"}),Object(u.jsxs)("select",{className:"form__input-text",id:"filterGender",name:"gender",value:e.allMoviesOptionGender,onChange:t,children:[Object(u.jsx)("option",{value:"",children:"Todas"}),Object(u.jsx)("option",{value:"Drama",children:"Drama"}),Object(u.jsx)("option",{value:"Comedia",children:"Comedia"})]})]}),Object(u.jsxs)("div",{className:"movies__filters--sort",children:[Object(u.jsxs)("label",{children:["Ordernar: A-Z",Object(u.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"asc",checked:"asc"===e.allMoviesOptionSort,onChange:t})]}),Object(u.jsxs)("label",{children:["Z-A",Object(u.jsx)("input",{className:"movies__radio",type:"radio",name:"sort",value:"desc",checked:"desc"===e.allMoviesOptionSort,onChange:t})]})]})]}),Object(u.jsx)(j,{movies:e.movies})]})}),b=function(e){return Object(u.jsxs)("section",{className:"border--medium",children:[Object(u.jsx)("h1",{className:"title--medium",children:"Estas son todas tus pel\xedculas"}),Object(u.jsx)(j,{movies:e.movies})]})},p=function(e){var t=Object(n.useState)(""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(""),o=Object(r.a)(c,2),l=o[0],d=o[1];return Object(u.jsxs)("section",{className:"border--medium",children:[Object(u.jsx)("h1",{children:"Identif\xedcate"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendLoginToApi({email:a,password:l})},children:[Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:a,onChange:function(e){i(e.target.value)}}),Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Entrar"}),function(){if(""!==e.loginErrorMessage)return Object(u.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el login: ",Object(u.jsx)("span",{className:"text--bold",children:e.loginErrorMessage})]})}()]})]})},f=function(e){var t=Object(n.useState)(e.userName||""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(e.userEmail||""),o=Object(r.a)(c,2),l=o[0],d=o[1],j=Object(n.useState)(e.userPassword||""),m=Object(r.a)(j,2),b=m[0],p=m[1];return Object(u.jsxs)("section",{className:"border--medium",children:[Object(u.jsx)("h1",{children:"Mi perfil"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendProfileToApi({name:a,email:l,password:b})},children:[Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"name",children:"Mi nombre"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"name",id:"name",value:a,onChange:function(e){i(e.target.value)}}),Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Mi email"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Mi contrase\xf1a"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:b,onChange:function(e){p(e.target.value)}}),Object(u.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Guardar"})]})]})},O=function(e){var t=Object(n.useState)(""),s=Object(r.a)(t,2),a=s[0],i=s[1],c=Object(n.useState)(""),o=Object(r.a)(c,2),l=o[0],d=o[1];return Object(u.jsxs)("section",{className:"border--medium",children:[Object(u.jsx)("h1",{children:"Reg\xedstrate"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.sendSingUpToApi({email:a,password:l})},children:[Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"email",children:"Escribe tu email"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"email",id:"email",value:a,onChange:function(e){i(e.target.value)}}),Object(u.jsx)("label",{className:"form__label display-block",htmlFor:"password",children:"Escribe tu contrase\xf1a"}),Object(u.jsx)("input",{className:"form__input-text",type:"text",name:"password",id:"password",value:l,onChange:function(e){d(e.target.value)}}),Object(u.jsx)("input",{className:"form__btn display-block",type:"submit",value:"Registrar"}),function(){if(""!==e.signUpErrorMessage)return Object(u.jsxs)("p",{className:"border--medium border--warning mt-1",children:["Error en el registro: ",Object(u.jsx)("span",{className:"text--bold",children:e.signUpErrorMessage})]})}()]})]})},h={getMoviesFromApi:function(e){return console.log("Se est\xe1n pidiendo las pel\xedculas de la app"),console.log(e),fetch("http://localhost:4000/movies?gender=".concat(e.gender,"&sort=").concat(e.sort),{method:"GET"}).then((function(e){return e.json()})).then((function(e){return e.movies}))}},x={sendLoginToApi:function(e){return console.log("Se est\xe1n enviando datos al login:",e),fetch("http://localhost:4000/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e}))},sendSingUpToApi:function(e){return console.log("Se est\xe1n enviando datos al signup:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!1,errorMessage:"Usuario ya existente"}}))},sendProfileToApi:function(e,t){return console.log("Se est\xe1n enviando datos al profile:",e,t),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json")},getProfileFromApi:function(e){return console.log("Se est\xe1n pidiendo datos del profile del usuario:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,name:"Maricarmen",email:"mari@mail.com",password:"1234567"}}))},getUserMoviesFromApi:function(e){return console.log("Se est\xe1n pidiendo datos de las pel\xedculas de la usuaria:",e),fetch("//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json").then((function(e){return e.json()})).then((function(){return{success:!0,movies:[{id:1,title:"Gambita de dama",gender:"Drama",image:"//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/images/gambito-de-dama.jpg"}]}}))}},g={redirect:function(e){window.location.replace("#".concat(e))},reload:function(e){window.location.reload()}},v=function(){var e=Object(n.useState)(l.get("userId")),t=Object(r.a)(e,2),s=t[0],a=t[1],i=Object(n.useState)(""),c=Object(r.a)(i,2),j=c[0],v=c[1],_=Object(n.useState)(""),N=Object(r.a)(_,2),S=N[0],y=N[1],k=Object(n.useState)(""),M=Object(r.a)(k,2),w=M[0],A=M[1],E=Object(n.useState)([]),F=Object(r.a)(E,2),C=F[0],T=F[1],U=Object(n.useState)(""),P=Object(r.a)(U,2),G=P[0],I=P[1],L=Object(n.useState)(""),D=Object(r.a)(L,2),J=D[0],R=D[1],Z=Object(n.useState)([]),q=Object(r.a)(Z,2),z=q[0],B=q[1],H=Object(n.useState)(""),K=Object(r.a)(H,2),Q=K[0],V=K[1],W=Object(n.useState)("asc"),X=Object(r.a)(W,2),Y=X[0],$=X[1];Object(n.useEffect)((function(){void 0!==s&&l.set("userId",s)}),[s]),Object(n.useEffect)((function(){var e={gender:Q,sort:Y};h.getMoviesFromApi(e).then((function(e){B(e)}))}),[Q,Y]),Object(n.useEffect)((function(){""!==s&&x.getProfileFromApi(s).then((function(e){v(e.name),y(e.email),A(e.password)}))}),[s]),Object(n.useEffect)((function(){""!==s&&x.getUserMoviesFromApi(s).then((function(e){T(e.movies)}))}),[s]);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{isUserLogged:!!s,logout:function(){g.redirect("/"),g.reload()}}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(m,{movies:z,allMoviesOptionGender:Q,allMoviesOptionSort:Y,handleAllMoviesOptions:function(e){"gender"===e.key?V(e.value):"sort"===e.key&&$(e.value)}})}),Object(u.jsx)(o.a,{path:"/my-movies",children:Object(u.jsx)(b,{movies:C})}),Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(p,{loginErrorMessage:G,sendLoginToApi:function(e){I(""),x.sendLoginToApi(e).then((function(e){!0===e.success?(a(e.userId),g.redirect("/")):I(e.errorMessage)}))}})}),Object(u.jsx)(o.a,{path:"/signup",children:Object(u.jsx)(O,{signUpErrorMessage:J,sendSingUpToApi:function(e){R(""),x.sendSingUpToApi(e).then((function(e){!0===e.success?(a(e.userId),g.redirect("/")):R(e.errorMessage)}))}})}),Object(u.jsx)(o.a,{path:"/profile",children:Object(u.jsx)(f,{userName:j,userEmail:S,userPassword:w,sendProfileToApi:function(e,t){x.sendProfileToApi(e,t).then((function(){x.getProfileFromApi(e).then((function(e){v(e.name),y(e.email),A(e.password)}))}))}})})]})]})};s(31);i.a.render(Object(u.jsx)(c.a,{children:Object(u.jsx)(v,{})}),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.910cee9b.chunk.js.map