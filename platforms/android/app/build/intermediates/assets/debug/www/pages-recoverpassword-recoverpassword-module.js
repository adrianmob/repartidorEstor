(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recoverpassword-recoverpassword-module"],{

/***/ "./src/app/pages/recoverpassword/recoverpassword.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recoverpassword/recoverpassword.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecoverpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverpasswordPageModule", function() { return RecoverpasswordPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recoverpassword_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recoverpassword.page */ "./src/app/pages/recoverpassword/recoverpassword.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _recoverpassword_page__WEBPACK_IMPORTED_MODULE_5__["RecoverpasswordPage"]
    }
];
var RecoverpasswordPageModule = /** @class */ (function () {
    function RecoverpasswordPageModule() {
    }
    RecoverpasswordPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_recoverpassword_page__WEBPACK_IMPORTED_MODULE_5__["RecoverpasswordPage"]]
        })
    ], RecoverpasswordPageModule);
    return RecoverpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recoverpassword/recoverpassword.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recoverpassword/recoverpassword.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Restablecer Contraseña\n    </ion-title>\n    <!--<ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/session\"></ion-back-button>\n    </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row margin-top justify-content-center>\n    <ion-avatar class=\"avatar\">\n      <img src=\"assets/user.png\">\n    </ion-avatar>\n  </ion-row>\n  <ion-row justify-content-center margin-bottom>\n    <p class=\"avatar-description\">\n      Ingresa tus datos\n    </p>\n  </ion-row>\n  <div text-center margin-top>\n    <ion-row class=\"input-container-up\">\n      <ion-input class=\"input-login\" placeholder=\"Email\" (ionInput)=\"validate_input($event.target,'email')\"\n        [(ngModel)]=\"usr.email\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Nueva Contraseña\" class=\"input-login\"\n        (ionInput)=\"validate_input($event.target,'password')\" type=\"password\"\n        [(ngModel)]=\"usr.contrasena\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Confirmar Contraseña\" class=\"input-login\"\n        (ionInput)=\"validate_input($event.target,'new_pass')\" type=\"password\"\n        [(ngModel)]=\"confirmPassword\"></ion-input>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Change_Password()\" class=\"login-text\" router-direction=\"forward\">Guardar Contraseña</a>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Cancel()\" class=\"password-text\" router-direction=\"back\">Cancelar</a>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/recoverpassword/recoverpassword.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recoverpassword/recoverpassword.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  width: 23vh;\n  height: 23vh;\n  margin-top: 10%; }\n\n.input-login {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 12px; }\n\n.input-container-up {\n  width: 65%;\n  margin: auto; }\n\n.input-container-down {\n  width: 65%;\n  margin: 5% auto 5% auto; }\n\n.login-text {\n  color: #3880ff;\n  margin-top: 10px;\n  font-size: 18px; }\n\n.password-text {\n  color: #f04141;\n  margin-top: 20px;\n  font-size: 18px; }\n\n.avatar-description {\n  font-size: 17px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXhzb2Z0d2FyZS9EZXNrdG9wL0VzdG9yL3JlcGFydGlkb3IvcmVwYXJ0aWRvckVzdG9yL3NyYy9hcHAvcGFnZXMvcmVjb3ZlcnBhc3N3b3JkL3JlY292ZXJwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWE7RUFDYixnQkFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVjb3ZlcnBhc3N3b3JkL3JlY292ZXJwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFye1xuICAgIHdpZHRoOiAyM3ZoO1xuICAgIGhlaWdodDogMjN2aDtcbiAgICBtYXJnaW4tdG9wOjEwJTtcbn1cblxuLmlucHV0LWxvZ2lue1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZm9udC1zaXplOjEycHg7XG59XG5cbi5pbnB1dC1jb250YWluZXItdXB7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBtYXJnaW46YXV0bztcbn1cblxuLmlucHV0LWNvbnRhaW5lci1kb3due1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiA1JSBhdXRvIDUlIGF1dG87XG59XG5cbi5sb2dpbi10ZXh0e1xuICAgIGNvbG9yOiMzODgwZmY7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnBhc3N3b3JkLXRleHR7XG4gICAgY29sb3I6I2YwNDE0MTtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYXZhdGFyLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/recoverpassword/recoverpassword.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recoverpassword/recoverpassword.page.ts ***!
  \***************************************************************/
/*! exports provided: RecoverpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverpasswordPage", function() { return RecoverpasswordPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/global/funciones-globales.service */ "./src/app/services/global/funciones-globales.service.ts");
/* harmony import */ var src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/interfaces/user.interface */ "./src/interfaces/user.interface.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecoverpasswordPage = /** @class */ (function () {
    function RecoverpasswordPage(NavCtrl, globalFunctions, userService) {
        this.NavCtrl = NavCtrl;
        this.globalFunctions = globalFunctions;
        this.userService = userService;
        this.confirmPassword = "";
        this.usr = new src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_3__["user"]();
    }
    //cuando se da click en cambiar contraseña
    RecoverpasswordPage.prototype.Change_Password = function () {
        var _this = this;
        if (this.usr.contrasena.length < 8 && this.confirmPassword.length < 8) {
            if (this.usr.contrasena == this.confirmPassword) {
                this.userService.resetPassword(this.usr).subscribe(function (response) {
                    if (response.status == "success") {
                        _this.Clear_Data();
                        _this.globalFunctions.Show_Ok_Alert('Correcto', 'Su contraseña fue restablecida con exito.');
                        _this.NavCtrl.navigateForward('session');
                    }
                    else {
                        _this.globalFunctions.Show_Ok_Alert('Error', 'Hubo un problema. Por favor intentalo nuevamente.');
                    }
                }, function (error) {
                    _this.globalFunctions.Show_Ok_Alert('Error', 'Existen problemas con el servidor');
                    console.log(error);
                });
            }
            else {
                this.globalFunctions.Show_Ok_Alert('Error', 'Las contraseñas no coinciden');
            }
        }
        else {
            this.globalFunctions.Show_Ok_Alert('Error', 'Las contraseñas no pueden exceder los 8 caracteres');
        }
    };
    RecoverpasswordPage.prototype.Cancel = function () {
        this.Clear_Data();
        this.NavCtrl.navigateBack('session');
    };
    //checa que la cadena cumpla con la expresion regular , sino, borra el ultimo digito ingresado
    RecoverpasswordPage.prototype.validate_input = function (target, option) {
        target.value = this.globalFunctions.validate_fields(target.value, option);
    };
    //se deshace de todos los datos
    RecoverpasswordPage.prototype.Clear_Data = function () {
        this.usr.clear();
        this.confirmPassword = "";
    };
    RecoverpasswordPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recoverpassword',
            template: __webpack_require__(/*! ./recoverpassword.page.html */ "./src/app/pages/recoverpassword/recoverpassword.page.html"),
            styles: [__webpack_require__(/*! ./recoverpassword.page.scss */ "./src/app/pages/recoverpassword/recoverpassword.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_2__["FuncionesGlobalesService"], src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RecoverpasswordPage);
    return RecoverpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recoverpassword-recoverpassword-module.js.map