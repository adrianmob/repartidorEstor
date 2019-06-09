(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-session-session-module"],{

/***/ "./src/app/pages/session/session.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/session/session.module.ts ***!
  \*************************************************/
/*! exports provided: SessionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPageModule", function() { return SessionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _session_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session.page */ "./src/app/pages/session/session.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _session_page__WEBPACK_IMPORTED_MODULE_5__["SessionPage"]
    }
];
var SessionPageModule = /** @class */ (function () {
    function SessionPageModule() {
    }
    SessionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_session_page__WEBPACK_IMPORTED_MODULE_5__["SessionPage"]]
        })
    ], SessionPageModule);
    return SessionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/session/session.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/session/session.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <ion-row justify-content-center>\n    <img class=\"logo\" src=\"assets/ElEstorLogoCuadroyAza.png\">\n  </ion-row>\n  <ion-row justify-content-center>\n    <h1 class=\"version-app\">\n      <strong>Repartidor</strong>\n    </h1>\n  </ion-row>\n  <ion-row justify-content-center text-center margin-bottom>\n    <p>Bienvenido a la app de El Estor para socios repartidores</p>\n  </ion-row>\n  <ion-row margin justify-content-center>\n    <ion-col size=\"6\">\n      <ion-button fill=\"clear\" (click)=\"Login()\" style=\"font-size:18px; --color:#3880ff; --background-activated:#fff;\"\n        router-direction=\"forward\">\n        Iniciar Sesi&oacute;n</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"New_User()\" style=\"font-weight:bold; font-size:18px; --border-radius:0;\" color=\"primary\"\n        router-direction=\"forward\">Registrarse</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/session/session.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/session/session.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 30%;\n  width: 80%;\n  margin-top: 10vh; }\n\n.version-app {\n  margin-top: -10%;\n  margin-bottom: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXhzb2Z0d2FyZS9EZXNrdG9wL0VzdG9yL3JlcGFydGlkb3IvcmVwYXJ0aWRvckVzdG9yL3NyYy9hcHAvcGFnZXMvc2Vzc2lvbi9zZXNzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2Vzc2lvbi9zZXNzaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICAgIGhlaWdodDogMzAlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbn1cblxuLnZlcnNpb24tYXBwe1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/session/session.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/session/session.page.ts ***!
  \***********************************************/
/*! exports provided: SessionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionPage", function() { return SessionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionPage = /** @class */ (function () {
    function SessionPage(NavCtrl) {
        this.NavCtrl = NavCtrl;
    }
    SessionPage.prototype.Login = function () {
        this.NavCtrl.navigateForward('login');
    };
    SessionPage.prototype.New_User = function () {
        this.NavCtrl.navigateForward('register');
    };
    SessionPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session',
            template: __webpack_require__(/*! ./session.page.html */ "./src/app/pages/session/session.page.html"),
            styles: [__webpack_require__(/*! ./session.page.scss */ "./src/app/pages/session/session.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], SessionPage);
    return SessionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-session-session-module.js.map