(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/register/register.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/register/register.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Registrarse\n    </ion-title>\n    <!--<ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" defaultHref=\"/session\"></ion-back-button>\n    </ion-buttons>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row margin-top justify-content-center>\n    <ion-avatar class=\"avatar\">\n      <img [src]=\"usr.foto\" class=\"back\">\n      <ion-icon (click)=\"Show_Action_Sheet()\" class=\"circle-button front\" name=\"add-circle\"></ion-icon>\n    </ion-avatar>\n  </ion-row>  \n  <ion-row justify-content-center margin-bottom>\n    <h6>\n      Registrate\n    </h6>\n  </ion-row>\n  <div text-center>\n    <ion-row class=\"input-container-up\">\n      <ion-input class=\"input-login\" placeholder=\"Nombre(s)\" (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"usr.nombre\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input class=\"input-login\" placeholder=\"Apellido Paterno\" (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"usr.apellidoPaterno\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input class=\"input-login\" placeholder=\"Apellido Materno\" (ionInput)=\"validate_inputs($event.target,'text')\" [(ngModel)]=\"usr.apellidoMaterno\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input class=\"input-login\" placeholder=\"Email\" (ionInput)=\"validate_inputs($event.target,'email')\" [(ngModel)]=\"usr.email\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Contraseña\" class=\"input-login\" type=\"password\" (ionInput)=\"validate_inputs($event.target,'password')\" [(ngModel)]=\"usr.contrasena\"></ion-input>\n    </ion-row>\n    <ion-row class=\"input-container-down\">\n      <ion-input placeholder=\"Confirmar Contraseña\" class=\"input-login\" type=\"password\" (ionInput)=\"validate_inputs($event.target,'password')\" [(ngModel)]=\"confirmPassword\"></ion-input>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Create_Account()\" class=\"login-text\" router-direction=\"forward\">Crear cuenta</a>\n    </ion-row>\n    <ion-row justify-content-center>\n      <a (click)=\"Cancel()\" class=\"password-text\" router-direction=\"back\">Cancelar</a>\n    </ion-row>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/register/register.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  width: 23vh;\n  height: 23vh; }\n\n.input-login {\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 12px;\n  height: 5vh; }\n\n.input-container-up {\n  width: 65%;\n  margin: auto; }\n\n.input-container-down {\n  width: 65%;\n  margin: 4% auto 4% auto; }\n\n.login-text {\n  color: #3880ff;\n  margin-top: 10spx;\n  font-size: 18px; }\n\n.password-text {\n  color: #f04141;\n  margin-top: 15px;\n  font-size: 18px; }\n\n.circle-button {\n  margin-top: -6vh;\n  margin-right: -1vh;\n  color: #f04141;\n  width: 7vh;\n  height: 7vh;\n  float: right; }\n\n.back {\n  z-index: 0;\n  position: relative; }\n\n.front {\n  z-index: 1;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXhzb2Z0d2FyZS9EZXNrdG9wL0VzdG9yL3JlcGFydGlkb3IvcmVwYXJ0aWRvckVzdG9yL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxzQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdmO0VBQ0ksVUFBVTtFQUNWLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWE7RUFDYixnQkFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcbiAgICB3aWR0aDogMjN2aDtcbiAgICBoZWlnaHQ6IDIzdmg7XG59XG5cbi5pbnB1dC1sb2dpbntcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGhlaWdodDogNXZoO1xufVxuXG4uaW5wdXQtY29udGFpbmVyLXVwe1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbi5pbnB1dC1jb250YWluZXItZG93bntcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogNCUgYXV0byA0JSBhdXRvO1xufVxuXG4ubG9naW4tdGV4dHtcbiAgICBjb2xvcjojMzg4MGZmO1xuICAgIG1hcmdpbi10b3A6MTBzcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucGFzc3dvcmQtdGV4dHtcbiAgICBjb2xvcjojZjA0MTQxO1xuICAgIG1hcmdpbi10b3A6MTVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jaXJjbGUtYnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IC02dmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMXZoO1xuICAgIGNvbG9yOiAjZjA0MTQxO1xuICAgIHdpZHRoOiA3dmg7XG4gICAgaGVpZ2h0OiA3dmg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYmFja3tcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZyb250e1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/register/register.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global/funciones-globales.service */ "./src/app/services/global/funciones-globales.service.ts");
/* harmony import */ var src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/interfaces/user.interface */ "./src/interfaces/user.interface.ts");
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
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









var RegisterPage = /** @class */ (function () {
    function RegisterPage(NavCtrl, ASController, camera, imagePicker, globalFunctions, userService, storage) {
        this.NavCtrl = NavCtrl;
        this.ASController = ASController;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.globalFunctions = globalFunctions;
        this.userService = userService;
        this.storage = storage;
        this.usr = new src_interfaces_user_interface__WEBPACK_IMPORTED_MODULE_5__["user"]();
        this.confirmPassword = "";
        this.usr.foto = "assets/user.png";
    }
    //cuando se da click en registrar obtiene la foto y datos y los manda 
    RegisterPage.prototype.Create_Account = function () {
        var _this = this;
        if (this.usr.nombre != "" && this.usr.apellidoPaterno != "" && this.usr.apellidoMaterno != "" && this.usr.email != "" && this.usr.contrasena != "" && this.confirmPassword != "") {
            if (this.usr.foto != "assets/user.png") {
                if (this.usr.contrasena == this.confirmPassword) {
                    this.usr.foto = this.usr.foto.substring(this.usr.foto.indexOf(",") + 1, this.usr.foto.length - 1);
                    this.userService.createNewUser(this.usr).subscribe(function (response) {
                        if (response.status == "success") {
                            _this.Clear_Data();
                            _this.globalFunctions.Show_Ok_Alert('Exito!', 'Se ha registrado con exito, Por favor incie sesi&oacute;n para continuar.');
                            _this.NavCtrl.navigateForward('session');
                        }
                        else {
                            _this.globalFunctions.Show_Ok_Alert('Error', 'Hubo un problema. Por favor intentalo nuevamente.');
                        }
                    }, function (error) {
                        _this.globalFunctions.Show_Ok_Alert('Hubo problemas', 'problema del server');
                        console.log(error);
                    });
                }
                else
                    this.globalFunctions.Show_Ok_Alert('Error', 'Las contraseñas no coinciden');
            }
            else
                this.globalFunctions.Show_Ok_Alert('Error', 'La foto de perfil es un dato obligatorio');
        }
        else
            this.globalFunctions.Show_Ok_Alert('Error', 'Los datos ingresados no son correctos. Intentalo nuevamente.');
    };
    //limpia los datos y regresa a pantalla inicial
    RegisterPage.prototype.Cancel = function () {
        this.Clear_Data();
        this.NavCtrl.navigateBack('session');
    };
    //se deshace de todos los datos
    RegisterPage.prototype.Clear_Data = function () {
        this.usr.clear();
        this.confirmPassword = "";
    };
    //checa que la cadena cumpla con la expresion regular , sino, borra el ultimo digito ingresado
    RegisterPage.prototype.validate_inputs = function (target, option) {
        target.value = this.globalFunctions.validate_fields(target.value, option);
    };
    //muestra action sheet para que seleccione camara o galeria y devuelve la imagen en base 64
    RegisterPage.prototype.Show_Action_Sheet = function () {
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
                                            _this.usr.foto = value;
                                        });
                                    }
                                }, {
                                    text: 'Usar camara',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.globalFunctions.Use_Camera().then(function (value) {
                                            _this.usr.foto = value;
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
    RegisterPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/register/register.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"],
            src_app_services_global_funciones_globales_service__WEBPACK_IMPORTED_MODULE_4__["FuncionesGlobalesService"],
            src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map