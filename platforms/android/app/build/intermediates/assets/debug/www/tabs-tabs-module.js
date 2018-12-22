(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"] }])
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_5__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\n    <ion-grid class=\"MyGrid\">\n        <ion-row wrap>\n            <ion-col  *ngFor=\"let album of Albums\" >\n                <img (click)=\"loadAlbum(album)\" src=\"assets/icon/albums.jpg\" />\n                <ion-label align=\"center\">{{album}}</ion-label>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-buttons>\n            <ion-button (click)=\"addAlbum()\">\r\n                <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n                Add Album\r\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".MyGrid {\n  --ion-grid-columns: 2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxhbWl0LnBhdWxcXEZpbGVVcGxvYWQvc3JjXFxhcHBcXGFib3V0XFxhYm91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTXlHcmlkIHtcclxuICAgIC0taW9uLWdyaWQtY29sdW1uczogMjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/services/masterdetail.service */ "./src/app/services/masterdetail.service.ts");
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




var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, masterDetailService, alertController) {
        this.navCtrl = navCtrl;
        this.masterDetailService = masterDetailService;
        this.alertController = alertController;
        this.Albums = [];
    }
    AboutPage.prototype.ngOnInit = function () {
        this.Albums = this.masterDetailService.getAlbums().split(",");
    };
    AboutPage.prototype.loadAlbum = function (strAlbum) {
        this.masterDetailService.setCurrAlbum(strAlbum);
        this.masterDetailService.setListMode("ALBUM");
        this.navCtrl.navigateForward('imglist');
    };
    AboutPage.prototype.addAlbum = function () {
        this.presentPrompt();
    };
    AboutPage.prototype.presentPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Add Album",
                            inputs: [
                                {
                                    name: 'albumname',
                                    placeholder: 'Album Name'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Create',
                                    handler: function (data) {
                                        console.log(data);
                                        console.log(data.albumname);
                                        var strAlbum = data.albumname;
                                        _this.masterDetailService.addAlbum(strAlbum.toUpperCase().replace("-", "_"));
                                        _this.Albums = _this.masterDetailService.getAlbums().split(",");
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_2__["MasterDetailService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"] }])
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.html":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Follow us on Twitter\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>\n        <ion-icon name=\"logo-ionic\" slot=\"start\"></ion-icon>\n        @ionicframework\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactPage = /** @class */ (function () {
    function ContactPage() {
    }
    ContactPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.page.html */ "./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        })
    ], ContactPage);
    return ContactPage;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"] }])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n<!--<div class=\"swiper-container\">-->\r\n    <!--<div class=\"swiper-wrapper\">-->\r\n    <!--<ion-slides pager=\"false\" autoHeight=\"true\" (ionSlideDidChange)=\"slideDidChange()\" (ionSlideWillChange)=\"slideWillChange()\" [ngStyle]=\"{ 'height': slideIndex===0 ? 'auto' : '100vh' }\">-->\r\n    <!--<ion-slides ion-fixed pager=\"false\" [options]=\"slideOpts\" (ionSlideDidChange)=\"slideDidChange()\" [ngStyle]=\"{ 'height': slideIndex===1 ? '100vh': 'auto' }\">\r\n       \r\n            <ion-slide>-->\r\n                <!--<ion-content>-->\r\n\r\n                <ion-grid style=\"width:100%;\">\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">This Week</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color: darkred;font-size:12px;\">Last Week</ion-label>\r\n                            </ion-item>\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">2 Weeks Ago</ion-label>\r\n                            </ion-item>\r\n\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">3 Week Ago</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_W4\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'W4')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">Last Month</ion-label>\r\n                            </ion-item>\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">2 Month Ago</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\">Earlier this Year</ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_M3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'M3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y1')\">1 Year ago </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y1\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y1')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y2')\">2 Years ago </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y2\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y2')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y3')\">3 Years ago </ion-label>\r\n                            </ion-item>\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y3\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y3')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <ion-item>\r\n                                <ion-label style=\"color:darkred;font-size:12px;\" (click)=\"setImgFilter('Y4')\">Older... </ion-label>\r\n                            </ion-item>\r\n\r\n\r\n\r\n                            <ion-grid>\r\n                                <ion-row *ngFor=\"let row of grid_Y4\">\r\n                                    <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                                        <div class=\"square\" (click)=\"LoadImage(file_uri,'Y4')\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n                            </ion-grid>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n\r\n                <!--</ion-content>-->\r\n\r\n          <!--  </ion-slide>-->\r\n        <!--</ion-content>-->\r\n\r\n\r\n            <!--<ion-slide >\r\n               \r\n                <h2> Album SLide</h2>\r\n               \r\n            </ion-slide>\r\n\r\n</ion-slides>\r\n        </div>-->\r\n\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button color=\"secondary\" (click)=\"LoadSourceOptions()\" ion-fab mini><ion-icon name=\"add\"></ion-icon></ion-fab-button>\r\n</ion-fab>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square {\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.wrapper * {\n  /*height: 100%;*/\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGFtaXQucGF1bFxcRmlsZVVwbG9hZC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2Qix5QkFBd0I7RUFDeEIsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUM5Qjs7QUFFRDtFQUNJLGlCQUFpQjtFQUNqQixZQUFXLEVBRWQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNxdWFyZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4ud3JhcHBlciAqIHtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_services_community_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/services/community.service */ "./src/app/services/community.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app/services/masterdetail.service */ "./src/app/services/masterdetail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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














var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, transfer, camera, file, loadingCtrl, toastCtrl, httpClient, communityService, photoViewer, alertController, imagePicker, masterDetailService, route) {
        this.navCtrl = navCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.httpClient = httpClient;
        this.communityService = communityService;
        this.photoViewer = photoViewer;
        this.alertController = alertController;
        this.imagePicker = imagePicker;
        this.masterDetailService = masterDetailService;
        this.route = route;
        this.newImgArray = [];
        this.slideIndex = 0;
        this.slideOpts = {
            autoHeight: 'true'
        };
    }
    HomePage.prototype.ngOnInit = function () {
        this.slideIndex = 0;
        this.presentAlertMultipleButtons();
        //this.getImageList();
    };
    HomePage.prototype.presentImageSOurceOptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Input Required!',
                            message: 'Please select image source',
                            buttons: [
                                {
                                    text: 'Camera',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.getImage();
                                        console.log('Camera Selected');
                                    }
                                }, {
                                    text: 'Library',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.LoadImagePicker();
                                        console.log('Image Picker Selected');
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Upload Cancelled');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.LoadSourceOptions = function () {
        this.presentImageSOurceOptions();
    };
    HomePage.prototype.presentAlertMultipleButtons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Attention!',
                            message: 'Please select the environment',
                            buttons: [
                                {
                                    text: 'Android',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        _this.communityService.baseUrl = "http://10.0.2.2:49168/api";
                                        _this.getImageList();
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Browser',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.communityService.baseUrl = "http://localhost:49168/api";
                                        _this.getImageList();
                                        console.log('Confirm Okay');
                                    }
                                }, {
                                    text: 'Production',
                                    handler: function () {
                                        // this.navCtrl.navigateForward('add_news');
                                        _this.communityService.baseUrl = " https://azcommunityrestapi20181209100659.azurewebsites.net/api";
                                        _this.getImageList();
                                        //this.slides.options = this.slideOpts;
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.LoadImage = function (imgUrl, strFilter) {
        if (imgUrl === 'assets/icon/more.png') {
            this.setImgFilter(strFilter);
        }
        else {
            var intIndex = this.masterDetailService.getImages().filter(function (p) { return p.period === strFilter; }).findIndex(function (x) { return x.imgUrl === imgUrl; });
            if (intIndex != -1) {
                this.masterDetailService.setIndex(intIndex);
            }
            else {
                intIndex = this.getGridIndex(imgUrl, strFilter);
                this.masterDetailService.setIndex(intIndex);
            }
            //this.masterDetailService.setImages(this.objImageList.filter(p => p.period === strFilter));
            this.masterDetailService.setFilter(strFilter);
            this.masterDetailService.setListMode("GENERAL");
            this.navCtrl.navigateForward('gallery');
        }
        //this.photoViewer.show(this.objImageList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);
    };
    HomePage.prototype.LoadImagePicker = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 5,
            quality: 75,
            outputType: 0
        };
        this.imagePicker.getPictures(options).then(function (file_uris) {
            console.log(file_uris);
            _this.masterDetailService.setUris(file_uris);
            //this.navCtrl.navigateForward('gallery');
            for (var i = 0; i < file_uris.length; i++) {
                _this.getBase64String(file_uris[i]);
            }
            //////this.getImageList();
        }, function (err) { console.log('uh oh'); });
    };
    HomePage.prototype.getBase64String = function (imageUri) {
        var _this = this;
        var fileName = imageUri.split('/').pop();
        var path = imageUri.substring(0, imageUri.lastIndexOf("/") + 1);
        this.file.readAsDataURL(path, fileName)
            .then(function (base64File) {
            _this.base64Image = base64File.replace("data:image/jpeg;base64,", '');
            _this.uploadFile();
        })
            .catch(function () {
            console.log('Error reading file');
            return '';
        });
    };
    HomePage.prototype.getImageList = function () {
        var _this = this;
        this.communityService.getImageList().subscribe(function (resp) {
            _this.masterDetailService.setImages(resp);
            console.log(_this.masterDetailService.setImages);
            _this.populateGrid("W1");
            _this.populateGrid("W2");
            _this.populateGrid("W3");
            _this.populateGrid("W4");
            _this.populateGrid("M1");
            _this.populateGrid("M2");
            _this.populateGrid("M3");
            _this.populateGrid("Y1");
            _this.populateGrid("Y2");
            _this.populateGrid("Y3");
            _this.populateGrid("Y4");
        });
        //this.objcommunity = this.communityService.getCommunity(id);
        //console.log(this.objcommunity);
    };
    HomePage.prototype.getGridIndex = function (imgUrl, strFilter) {
        var localGrid;
        var gridIndex = 0;
        var tempGridName = "grid_" + strFilter;
        localGrid = this[tempGridName];
        for (var i = 0; i < localGrid.length; i++) {
            for (var j = 0; j < localGrid[i].length; j++) {
                if (localGrid[i][j] === imgUrl) {
                    return gridIndex;
                }
                else {
                    gridIndex++;
                }
            }
        }
    };
    HomePage.prototype.populateGrid = function (periodFilter) {
        var localImgList = this.masterDetailService.getImages().filter(function (p) { return p.period === periodFilter; });
        var rowCount;
        if (localImgList.length > 20) {
            this.localGrid = Array(5);
            rowCount = 20;
        }
        else {
            this.localGrid = Array(Math.ceil(localImgList.length / 4));
            rowCount = localImgList.length;
        }
        this.rowNum = 0;
        for (var i = 0; i < rowCount; i += 4) {
            this.localGrid[this.rowNum] = Array(4);
            if (localImgList[i]) {
                this.localGrid[this.rowNum][0] = localImgList[i].imgUrl;
                //this.createArrayEntry(localImgList[i].imgUrl, localImgList[i].imgParentUrl);
                this.colNum = 0;
            }
            if (localImgList[i + 1]) {
                this.localGrid[this.rowNum][1] = localImgList[i + 1].imgUrl;
                this.colNum = 1;
            }
            else {
                this.localGrid[this.rowNum][1] = "";
            }
            if (localImgList[i + 2]) {
                this.localGrid[this.rowNum][2] = localImgList[i + 2].imgUrl;
                this.colNum = 2;
            }
            else {
                this.localGrid[this.rowNum][2] = "";
            }
            if (localImgList[i + 3]) {
                this.localGrid[this.rowNum][3] = localImgList[i + 3].imgUrl;
                this.colNum = 3;
            }
            else {
                this.localGrid[this.rowNum][3] = "";
            }
            //if (localImgList[i + 4]) {
            //    this.localGrid[this.rowNum][4] = localImgList[i + 4].imgUrl;
            //    this.colNum = 4;
            //}
            //else {
            //    this.localGrid[this.rowNum][4] = "";
            //}
            this.rowNum++;
        }
        if (localImgList.length > 20) {
            this.localGrid[4][3] = 'assets/icon/more.png';
        }
        if (periodFilter === 'W1') {
            this.grid_W1 = this.localGrid;
        }
        else if (periodFilter === 'W2') {
            this.grid_W2 = this.localGrid;
        }
        else if (periodFilter === 'W3') {
            this.grid_W3 = this.localGrid;
        }
        else if (periodFilter === 'W4') {
            this.grid_W4 = this.localGrid;
        }
        else if (periodFilter === 'M1') {
            this.grid_M1 = this.localGrid;
        }
        else if (periodFilter === 'M2') {
            this.grid_M2 = this.localGrid;
        }
        else if (periodFilter === 'M3') {
            this.grid_M3 = this.localGrid;
        }
        else if (periodFilter === 'Y1') {
            this.grid_Y1 = this.localGrid;
        }
        else if (periodFilter === 'Y2') {
            this.grid_Y2 = this.localGrid;
        }
        else if (periodFilter === 'Y3') {
            this.grid_Y3 = this.localGrid;
        }
        else if (periodFilter === 'Y4') {
            this.grid_Y4 = this.localGrid;
        }
        this.rowNum--;
    };
    HomePage.prototype.setImgFilter = function (strFilter) {
        this.masterDetailService.setFilter(strFilter);
        //(this.objImageList.filter(p => p.period === strFilter));
        this.masterDetailService.setListMode("GALLERY");
        this.masterDetailService.setIsDirty(false);
        this.navCtrl.navigateForward('imglist');
    };
    HomePage.prototype.addToGrid = function (imgUrl) {
        if (this.colNum < 3) {
            this.colNum++;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
        else {
            var rowArray = Array(4);
            var x = void 0;
            x = this.grid.push(["", "", "", ""]);
            this.rowNum++;
            this.colNum = 0;
            this.grid[this.rowNum][this.colNum] = imgUrl;
        }
    };
    HomePage.prototype.createArrayEntry = function (imgUrl, parentUrl) {
        var imgEntry = {
            "imgUrl": imgUrl,
            "imgParentUrl": parentUrl
        };
        this.newImgArray.push(imgEntry);
    };
    HomePage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 65,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.getBase64String(imageData);
            //this.file.resolveLocalFilesystemUrl(imageData).then(oneFile => {
            //    this.imageFileName = oneFile.name;
            //    this.file.readAsArrayBuffer(this.file.tempDirectory, oneFile.name).then(realFile=>{
            //        this.imageURI = realFile;
            //        console.log(this.imageFileName);
            //    });
            //});
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    HomePage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Uploading...',
                            duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.getDateTime = function () {
        var currentdate = new Date();
        var datetime = currentdate.toISOString().split("T")[0].split("-")[0] +
            +currentdate.toISOString().split("T")[0].split("-")[1] +
            +currentdate.toISOString().split("T")[0].split("-")[2] + "-"
            + currentdate.toISOString().split("T")[1].split(":")[0] +
            +currentdate.toISOString().split("T")[1].split(":")[1] +
            +currentdate.toISOString().split("T")[1].split(":")[2].split(".")[0]
            + "-" + currentdate.toISOString().split("T")[1].split(":")[2].split(".")[1].replace("Z", "");
        return datetime;
    };
    HomePage.prototype.getDatePart = function (strPart) {
        var currentdate = new Date();
        if (strPart === "Y") {
            return currentdate.toISOString().split("T")[0].split("-")[0];
        }
        else if (strPart === "M") {
            return currentdate.toISOString().split("T")[0].split("-")[1];
        }
    };
    HomePage.prototype.uploadFile = function () {
        var _this = this;
        this.presentLoading();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({ headers: headers });
        var fileTransfer = this.transfer.create();
        var picDetail = {
            "imgName": this.getDateTime() + "-APP.jpg",
            "imgData": this.base64Image
        };
        this.httpClient.post(this.communityService.baseUrl + '/ImageUpload/File/xyz.jpg/', picDetail, requestOptions)
            .subscribe(function (data) {
            _this.base64Image = "";
            console.log(data['_body']);
            _this.appendToImgList(JSON.parse(data['_body']));
            _this.loadingCtrl.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (error) {
            console.log(error);
            _this.loadingCtrl.dismiss();
            _this.presentToast(error);
        });
    };
    HomePage.prototype.appendToImgList = function (newImg) {
        var newEntry = {
            "imgName": newImg.imgName,
            "imgUrl": newImg.imgUrl,
            "imgParentUrl": newImg.imgParentUrl,
            "period": "W1",
            "imgAlbum": "",
            "imgYear": this.getDatePart("Y"),
            "imgMonth": this.getDatePart("M")
        };
        this.masterDetailService.pushImage(newEntry);
        this.populateGrid("W1");
    };
    HomePage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 3000,
                            position: 'bottom'
                        })];
                    case 1:
                        toast = _a.sent();
                        //toast.onDidDismiss(() => {
                        //    console.log('Dismissed toast');
                        //});
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.slideDidChange = function () {
        var _this = this;
        this.slidesMoving = false;
        this.slides.getActiveIndex().then(function (val) {
            var slideIndex = val;
            _this.slideIndex = val;
            //let currentSlide: Element = this.slides
            //let slideNumbers : number = this.slides.length();
            //if (slideIndex === 1) {
            //    this.slidesHeight = 200;
            //}
        });
    };
    HomePage.prototype.slideWillChange = function () {
        this.slidesMoving = true;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
        if (this.masterDetailService.getFilter() != '' && this.masterDetailService.getIsDirty()) {
            this.presentLoading();
            this.populateGrid(this.masterDetailService.getFilter());
            this.masterDetailService.setIsDirty(false);
            this.loadingCtrl.dismiss();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], HomePage.prototype, "slides", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slide"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slide"])
    ], HomePage.prototype, "slide", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_2__["FileTransfer"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _app_services_community_service__WEBPACK_IMPORTED_MODULE_6__["CommunityService"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"],
            _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_9__["MasterDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.module */ "./src/app/contact/contact.module.ts");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.module */ "./src/app/about/about.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomePageModule"],
                _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutPageModule"],
                _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__["ContactPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab tab=\"Gallery\">\n    <ion-router-outlet name=\"home\"></ion-router-outlet>\n  </ion-tab>\n  <ion-tab tab=\"Albums\">\n    <ion-router-outlet name=\"about\"></ion-router-outlet>\n  </ion-tab>\n  <!--<ion-tab tab=\"contact\">\n    <ion-router-outlet name=\"contact\"></ion-router-outlet>\n  </ion-tab>-->\n\n  <ion-tab-bar slot=\"top\" translucent=\"true\" color=\"primary\">\n\n    <ion-tab-button tab=\"Gallery\" href=\"/tabs/(home:home)\">\n      <ion-icon name=\"film\"></ion-icon>\n      <ion-label>Gallery</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"Albums\" href=\"/tabs/(about:about)\">\n      <ion-icon name=\"albums\"></ion-icon>\n      <ion-label>Albums</ion-label>\n    </ion-tab-button>\n\n    <!--<ion-tab-button tab=\"contact\" href=\"/tabs/(contact:contact)\">\n      <ion-icon name=\"contacts\"></ion-icon>\n      <ion-label>Contact</ion-label>\n    </ion-tab-button>-->\n\n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs .tab-button[aria-selected=true] {\n  padding: 0;\n  border-top: black;\n  border-style: solid;\n  border-width: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXGFtaXQucGF1bFxcRmlsZVVwbG9hZC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFVO0VBQ1Ysa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixtQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIC50YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQ9dHJ1ZV0ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweFxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _about_about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/about.page */ "./src/app/about/about.page.ts");
/* harmony import */ var _contact_contact_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/contact.page */ "./src/app/contact/contact.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            },
            {
                path: 'about',
                outlet: 'about',
                component: _about_about_page__WEBPACK_IMPORTED_MODULE_4__["AboutPage"]
            },
            {
                path: 'contact',
                outlet: 'contact',
                component: _contact_contact_page__WEBPACK_IMPORTED_MODULE_5__["ContactPage"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map