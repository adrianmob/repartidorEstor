(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Iniciar sesi&oacute;n\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/session\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row margin-top justify-content-center>\n    <ion-avatar class=\"avatar\">\n      <img src=\"assets/user.png\">\n    </ion-avatar>\n  </ion-row>\n  <ion-row justify-content-center margin-bottom>\n    <h6>\n      Ingresa tus datos\n    </h6>\n  </ion-row>\n  <div text-center margin-top>\n    <ion-row class=\"input-container-up\">\n      <ion-input class=\"input-login\" placeholder=\"Email\" (ionInput)=\"validate_input($event.target,'email')\" [(ngModel)]=\"usr.email\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Contraseña\" class=\"input-login\" (ionInput)=\"validate_input($event.target,'password')\" type=\"password\" [(ngModel)]=\"usr.contrasena\"></ion-input>\n    </ion-row>\n    <ion-row justify-content-center>\n        <a (click)=\"Submit_Form()\" class=\"login-text\" router-direction=\"forward\">Iniciar Sesi&oacute;n</a>\n    </ion-row>\n    <ion-row justify-content-center >\n        <a (click)=\"Reset_Password()\" [ngClass]=\"{disabled:cont<3}\" class=\"password-text\" router-direction=\"forward\">Olvide mi contraseña</a>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  width: 23vh;\n  height: 23vh;\n  margin-top: 10%; }\n\n.input-login {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 12px; }\n\n.input-container-up {\n  width: 65%;\n  margin: auto; }\n\n.input-container-down {\n  width: 65%;\n  margin: 5% auto 5% auto; }\n\n.login-text {\n  color: #3880ff;\n  margin-top: 10px;\n  font-size: 18px; }\n\n.password-text {\n  color: #f04141;\n  margin-top: 20px;\n  font-size: 18px; }\n\n.disabled {\n  color: gray;\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXhzb2Z0d2FyZS9EZXNrdG9wL0VzdG9yL3JlcGFydGlkb3IvcmVwYXJ0aWRvckVzdG9yL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksc0JBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFjLEVBQUE7O0FBR2xCO0VBQ0ksVUFBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVU7RUFDVixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdmF0YXJ7XG4gICAgd2lkdGg6IDIzdmg7XG4gICAgaGVpZ2h0OiAyM3ZoO1xuICAgIG1hcmdpbi10b3A6MTAlO1xufVxuXG4uaW5wdXQtbG9naW57XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250LXNpemU6MTJweDtcbn1cblxuLmlucHV0LWNvbnRhaW5lci11cHtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjphdXRvO1xufVxuXG4uaW5wdXQtY29udGFpbmVyLWRvd257XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46IDUlIGF1dG8gNSUgYXV0bztcbn1cblxuLmxvZ2luLXRleHR7XG4gICAgY29sb3I6IzM4ODBmZjtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucGFzc3dvcmQtdGV4dHtcbiAgICBjb2xvcjojZjA0MTQxO1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5kaXNhYmxlZHtcbiAgICBjb2xvcjpncmF5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/interfaces/user.interface */ "./src/interfaces/user.interface.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global/funciones-globales.service */ "./src/app/services/global/funciones-globales.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(NavCtrl, userService, storage, globalFunctions) {
        this.NavCtrl = NavCtrl;
        this.userService = userService;
        this.storage = storage;
        this.globalFunctions = globalFunctions;
        this.cont = 0;
        this.usr = new src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_3__["user"]();
    }
    //cuando se da click en iniciar
    LoginPage.prototype.Submit_Form = function () {
        var _this = this;
        if (this.usr.email != "" && this.usr.contrasena != "") {
            console.log(this.usr);
            this.userService.getLoginResponse(this.usr).subscribe(function (response) {
                console.log(response.success);
                if (response.success && response.user.length > 0) {
                    _this.storage.set('user_Data', response.user[0]).then(function (val) {
                        _this.NavCtrl.navigateForward('home');
                    });
                }
                else {
                    _this.cont++;
                    _this.globalFunctions.Show_Ok_Alert('Error', 'Los datos ingresados no son correctos. Por favor intentalo nuevamente.');
                }
            }, function (error) {
                _this.globalFunctions.Show_Ok_Alert('Error', 'Existen problemas con el servidor');
                console.log(error);
            });
        }
        else {
            this.globalFunctions.Show_Ok_Alert('Error', 'Ambos campos son obligatorios.');
        }
    };
    //redirecciona a pagina de recuperar contraseña
    LoginPage.prototype.Reset_Password = function () {
        this.NavCtrl.navigateForward('recoverpassword');
    };
    //checa que la cadena cumpla con la expresion regular , sino, borra el ultimo digito ingresado 
    LoginPage.prototype.validate_input = function (target, option) {
        target.value = this.globalFunctions.validate_fields(target.value, option);
    };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_5__["FuncionesGlobalesService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map