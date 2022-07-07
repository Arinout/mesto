(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._response(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.profession})}).then((function(e){return t._response(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._response(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._response(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._response(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._response(e)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.data,r=t.template,o=t.userId,i=t.openImagePopup,u=t.deleteCardIcon,a=t.setLike,s=t.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=n.name,this._link=n.link,this._template=r,this._openImagePopup=i,this._userId=o,this._cardId=n._id,this._cardOwnerId=n.owner._id,this._deleteCardIcon=u,this._likes=n.likes,this._setLike=a,this._removeLike=s}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._template.content.querySelector(".photo-grid__element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._deleteButton=this._element.querySelector(".photo-grid__delete-button"),this._likeButton=this._element.querySelector(".photo-grid__button-like"),this._imageButton=this._element.querySelector(".photo-grid__image-button"),this._likesCounter=this._element.querySelector(".photo-grid__likes-counter"),this._likesCounter.textContent=this._likes.length,this._element.querySelector(".photo-grid__title").textContent=this._title,this._cardImage=this._element.querySelector(".photo-grid__image"),this._cardImage.setAttribute("src",this._link),this._cardImage.setAttribute("alt",this._title),this._hasDeleteButton(),this._isCardLiked(),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._deleteCardIcon(e._cardId)})),this._likeButton.addEventListener("click",(function(){e._likeButton.classList.contains("photo-grid__button-like_acive")?e._removeLike(e._cardId):e._setLike(e._cardId)})),this._imageButton.addEventListener("click",(function(){e._openImagePopup()}))}},{key:"deleteCard",value:function(){this._deleteButton.closest(".photo-grid__element").remove(),this._deleteButton=null}},{key:"_hasDeleteButton",value:function(){this._userId!==this._cardOwnerId&&this._deleteButton.remove()}},{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._likeButton.classList.add("photo-grid__button-like_acive")}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likesCounter.textContent=this._likes.length,this._likeButton.classList.toggle("photo-grid__button-like_acive")}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._inputElement=t.inputElement,this._submitButton=t.submitButton,this._inactiveButton=t.inactiveButton,this._inputError=t.inputError,this._error=t.error}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){this._errorElement=this._formSelector.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._error),e.classList.add(this._inputError)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formSelector.querySelector(".".concat(e.id,"-error")),this._errorElement.classList.remove(this._error),e.classList.remove(this._inputError),this._errorElement.textContent.reset}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formSelector.querySelectorAll(this._inputElement)),this._buttonElement=this._formSelector.querySelector(this._submitButton),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formSelector.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSumbitButton():this._enableSumbitButton()}},{key:"disableSumbitButton",value:function(){this._buttonElement.classList.add(this._inactiveButton),this._buttonElement.setAttribute("disabled",!0)}},{key:"_enableSumbitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButton),this._buttonElement.removeAttribute("disabled")}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=document.querySelector(".profile__edit"),a=document.querySelector(".popup__input_element_name"),s=document.querySelector(".popup__input_element_profession"),c=(document.querySelector(".profile__name"),document.querySelector(".profile__profession"),document.querySelector(".profile__image-btn")),l=document.querySelector(".profile__add-button"),f=document.querySelector(".photo-grid__elements"),p=document.getElementById("template");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_active")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".image-popup__image"),t._caption=t._popup.querySelector(".image-popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){this._image.src=e.link,this._image.alt=e.name,this._caption.textContent=e.name,b(w(u.prototype),"open",this).call(this)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function C(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n._sumbitButton=n._form.querySelector(".popup__submit-button"),n._sumbitButtonValue=n._sumbitButton.getAttribute("value"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;j(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){j(B(u.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){e?this._sumbitButton.setAttribute("value","Сохранение..."):this._sumbitButton.setAttribute("value",this._sumbitButtonValue)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.username,r=t.profession,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._professionElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,profession:this._professionElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e){this._nameElement.textContent=e.name,this._professionElement.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatarElement.src=e.avatar}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=D(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function D(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function V(e,t){return V=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},V(e,t)}function N(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"callBackSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;x(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M,z=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"f4349342-e78d-4d82-b5cb-b5888acdc182","Content-Type":"application/json"}});Promise.all([z.getUserInfo(),z.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];$.setUserInfo(o),$.setUserAvatar(o),M=o._id,ee.renderItems(i)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var $=new R({username:".profile__name",profession:".profile__profession",avatar:".profile__image"}),F=new q(".profile-popup",(function(e){F.renderLoading(!0),z.editUserInfo(e).then((function(e){$.setUserInfo(e),F.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){F.renderLoading(!1)}))}));F.setEventListeners();var K=new q(".card-popup",(function(e){K.renderLoading(!0),z.addNewCard(e).then((function(e){ee.addItem(Z(e)),K.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){K.renderLoading(!1)}))}));K.setEventListeners();var Q=new S(".popup_type_image");Q.setEventListeners();var W=new q(".popup_type_avatar",(function(e){W.renderLoading(!0),z.editAvatar(e).then((function(e){$.setUserAvatar(e),W.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){W.renderLoading(!1)}))}));W.setEventListeners();var X=new G(".popup_type_delete-card");X.setEventListeners();var Y,Z=function(e){var t=new r({data:e,template:p,userId:M,openImagePopup:function(){Q.open(e)},deleteCardIcon:function(e){X.open(),X.callBackSubmit((function(){z.deleteCard(e).then((function(e){X.close(),t.deleteCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},setLike:function(e){z.setLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},removeLike:function(e){z.deleteLike(e).then((function(e){t.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return t.generateCard()},ee=new d({renderer:function(e){ee.addItem(Z(e))}},f),te={};Y={formSelector:".popup__form",inputElement:".popup__input",submitButton:".popup__submit-button",inactiveButton:"popup__submit-button_inactive",inputError:"popup__input_error",error:"popup__error_visible"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(e){var t=new i(Y,e),n=e.getAttribute("name");te[n]=t,t.enableValidation()})),c.addEventListener("click",(function(){W.open(),te["avatar-form"].resetValidation()})),u.addEventListener("click",(function(){var e=$.getUserInfo(),t=e.name,n=e.profession;a.value=t,s.value=n,te["profile-form"].resetValidation(),te["profile-form"].disableSumbitButton(),F.open()})),l.addEventListener("click",(function(){K.open(),te["card-form"].resetValidation()}))})();