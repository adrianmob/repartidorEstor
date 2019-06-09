(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-updateprofile-updateprofile-module"],{

/***/ "./src/app/pages/updateprofile/updateprofile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.module.ts ***!
  \*************************************************************/
/*! exports provided: UpdateprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePageModule", function() { return UpdateprofilePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _updateprofile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateprofile.page */ "./src/app/pages/updateprofile/updateprofile.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _updateprofile_page__WEBPACK_IMPORTED_MODULE_5__["UpdateprofilePage"]
    }
];
var UpdateprofilePageModule = /** @class */ (function () {
    function UpdateprofilePageModule() {
    }
    UpdateprofilePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_updateprofile_page__WEBPACK_IMPORTED_MODULE_5__["UpdateprofilePage"]]
        })
    ], UpdateprofilePageModule);
    return UpdateprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ver Mi Perfil\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row margin-top justify-content-center>\n    <ion-avatar class=\"avatar\">\n      <img [src]=\"foto\" class=\"back\">\n      <ion-icon (click)=\"Show_Action_Sheet()\" class=\"circle-button front\" name=\"add-circle\"></ion-icon>\n    </ion-avatar>\n  </ion-row>\n  <ion-row justify-content-center margin-bottom>\n    <h6>\n      Nombre del Repartidor\n    </h6>\n  </ion-row>\n  <div text-center margin-top>\n    <ion-row class=\"input-container-up\">\n      <ion-input class=\"input-login\" placeholder=\"Nombre del Repartidor\"\n        (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"userData.nombre\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input class=\"input-login\" placeholder=\"Apellido Paterno del Repartidor\"\n        (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"userData.apellidoPaterno\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input class=\"input-login\" placeholder=\"Apellido Materno del Repartidor\"\n        (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"userData.apellidoMaterno\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Contraseña Actual\" class=\"input-login\" type=\"password\"\n        (ionInput)=\"validate_inputs($event.target,'password')\" [(ngModel)]=\"userData.contrasena\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Confirmar Contraseña Actual\" class=\"input-login\" type=\"password\"\n        (ionInput)=\"validate_inputs($event.target,'password')\" [(ngModel)]=\"confirmPassword\"></ion-input>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Update_Account()\" class=\"login-text\" router-direction=\"forward\">Guardar Cambios</a>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Cancel()\" class=\"password-text\" router-direction=\"back\">Cancelar</a>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  width: 23vh;\n  height: 23vh; }\n\n.input-login {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 12px;\n  height: 5vh; }\n\n.input-container-up {\n  width: 65%;\n  margin: auto; }\n\n.input-container-down {\n  width: 65%;\n  margin: 5% auto 5% auto; }\n\n.login-text {\n  color: #3880ff;\n  margin-top: 10px;\n  font-size: 18px; }\n\n.password-text {\n  color: #f04141;\n  margin-top: 20px;\n  font-size: 18px; }\n\n.circle-button {\n  margin-top: -6vh;\n  margin-right: -1vh;\n  color: #f04141;\n  width: 7vh;\n  height: 7vh;\n  float: right; }\n\n.back {\n  z-index: 0;\n  position: relative; }\n\n.front {\n  z-index: 1;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXhzb2Z0d2FyZS9EZXNrdG9wL0VzdG9yL3JlcGFydGlkb3IvcmVwYXJ0aWRvckVzdG9yL3NyYy9hcHAvcGFnZXMvdXBkYXRlcHJvZmlsZS91cGRhdGVwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLFlBQVcsRUFBQTs7QUFHZjtFQUNJLFVBQVU7RUFDVix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGRhdGVwcm9maWxlL3VwZGF0ZXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcbiAgICB3aWR0aDogMjN2aDtcbiAgICBoZWlnaHQ6IDIzdmg7XG59XG5cbi5pbnB1dC1sb2dpbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGhlaWdodDogNXZoO1xufVxuXG4uaW5wdXQtY29udGFpbmVyLXVwe1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbi5pbnB1dC1jb250YWluZXItZG93bntcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogNSUgYXV0byA1JSBhdXRvO1xufVxuXG4ubG9naW4tdGV4dHtcbiAgICBjb2xvcjojMzg4MGZmO1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5wYXNzd29yZC10ZXh0e1xuICAgIGNvbG9yOiNmMDQxNDE7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNpcmNsZS1idXR0b257XG4gICAgbWFyZ2luLXRvcDogLTZ2aDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xdmg7XG4gICAgY29sb3I6ICNmMDQxNDE7XG4gICAgd2lkdGg6IDd2aDtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5iYWNre1xuICAgIHotaW5kZXg6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZnJvbnR7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/updateprofile/updateprofile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/updateprofile/updateprofile.page.ts ***!
  \***********************************************************/
/*! exports provided: UpdateprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateprofilePage", function() { return UpdateprofilePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/funciones-globales.service */ "./src/app/services/global/funciones-globales.service.ts");
/* harmony import */ var src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/interfaces/user.interface */ "./src/interfaces/user.interface.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var UpdateprofilePage = /** @class */ (function () {
    function UpdateprofilePage(NavCtrl, ASController, globalFunctions, menu, userService, storage, _sanitizer, events) {
        var _this = this;
        this.NavCtrl = NavCtrl;
        this.ASController = ASController;
        this.globalFunctions = globalFunctions;
        this.menu = menu;
        this.userService = userService;
        this.storage = storage;
        this._sanitizer = _sanitizer;
        this.events = events;
        this.confirmPassword = "";
        this.userData = new src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_5__["user"]();
        this.storage.get('user_Data').then(function (val) {
            _this.userData = val;
            _this.foto = _this._sanitizer.bypassSecurityTrustUrl("data:Image/*;base64," + _this.userData.fotografia);
        });
    }
    //cuando hace click en aceptar se actualizan datos y se mandan a menú lateral para que actualicé cambios, remueve los anteriores
    //del storage y pone los nuevos
    UpdateprofilePage.prototype.Update_Account = function () {
        var _this = this;
        if (this.userData.contrasena == this.confirmPassword) {
            this.userService.checkUserPassword(this.userData).subscribe(function (response) {
                if (response.status == "success") {
                    _this.userData.foto = _this.foto.substring(_this.foto.indexOf(",") + 1, _this.foto.length - 1);
                    _this.userService.updateUserData(_this.userData).subscribe(function (resp) {
                        if (response.status == "success") {
                            _this.userData.clear();
                            _this.confirmPassword = "";
                            _this.globalFunctions.Show_Ok_Alert('Exito', 'Sus datos fueron guardados con exito.');
                            _this.events.publish('emitUserData', resp.user[0]);
                            _this.storage.remove('user_Data').then(function () {
                                _this.storage.set('user_Data', resp.user[0]);
                                _this.Cancel();
                            });
                        }
                        else
                            _this.globalFunctions.Show_Ok_Alert('Error inesperado', 'Sus datos no pudieron ser modificados. Por favor intentelo nuevamente.' + response.message);
                    });
                }
                else
                    _this.globalFunctions.Show_Ok_Alert('Error', 'Sus datos no pudieron ser modificados. Por favor intentelo nuevamente.');
            });
        }
        else
            this.globalFunctions.Show_Ok_Alert('Error', 'Sus contraseñas no coinciden. Por favor intentelo nuevamente.');
    };
    //regresa al menú lateral cuando se hace click en cancelar
    UpdateprofilePage.prototype.Cancel = function () {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
        this.NavCtrl.navigateBack('home');
    };
    //checa que la cadena cumpla con la expresion regular , sino, borra el ultimo digito ingresado 
    UpdateprofilePage.prototype.validate_inputs = function (target, option) {
        target.value = this.globalFunctions.validate_fields(target.value, option);
    };
    //muestra action sheet para que seleccione camara o galeria y devuelve la imagen en base 64
    UpdateprofilePage.prototype.Show_Action_Sheet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ASController.create({
                            header: 'Foto del perfil',
                            buttons: [{
                                    text: 'Seleccionar foto',
                                    icon: 'image',
                                    handler: function () {
                                        _this.globalFunctions.Upload_Picture().then(function (value) {
                                            _this.foto = value;
                                        });
                                    }
                                }, {
                                    text: 'Usar camara',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.globalFunctions.Use_Camera().then(function (value) {
                                            _this.foto = value;
                                        });
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateprofilePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-updateprofile',
            template: __webpack_require__(/*! ./updateprofile.page.html */ "./src/app/pages/updateprofile/updateprofile.page.html"),
            styles: [__webpack_require__(/*! ./updateprofile.page.scss */ "./src/app/pages/updateprofile/updateprofile.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_4__["FuncionesGlobalesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"]])
    ], UpdateprofilePage);
    return UpdateprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-updateprofile-updateprofile-module.js.map