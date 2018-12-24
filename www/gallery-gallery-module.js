(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"],{

/***/ "./src/app/gallery/gallery.module.ts":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.module.ts ***!
  \*******************************************/
/*! exports provided: GalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _gallery_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery.page */ "./src/app/gallery/gallery.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]
    }
];
var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_5__["GalleryPage"]]
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.page.html":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>\r\n    <ion-toolbar>\r\n        <ion-back-button (click)=\"goback()\" slot=\"start\"></ion-back-button>\r\n        <ion-title>Gallery</ion-title>\r\n    </ion-toolbar>\r\n\r\n</ion-header>-->\r\n<!--text-center  class=\"vertical-align-content\"-->\r\n<ion-content background-color=\"black\">\r\n\r\n    <!--<ion-slides style=\"height:100vh; background:black;\" scrollbar=\"true\" pager=\"false\" sliderperview=\"2\" (ionSlideDidChange)=\"slideChanged()\">-->\r\n    <ion-slides style=\"height:100vh; background:black;\" pager=\"false\" sliderperview=\"2\" (ionSlideDidChange)=\"slideChanged()\">\r\n        <ion-slide style=\"height:100vh;\" background-color=\"red\" *ngFor=\"let img of imgUrls\">\r\n            <div class=\"swiper-zoom-container\">\r\n                <img id={{img.imgUrl}} (load)=\"loaded(img.imgUrl)\" src={{img.imgUrl}} class=\"thumb-img\" style=\" display: block;  padding:5px; height: auto; margin: auto; \" imageViewer />\r\n            </div>\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"goback()\" color=\"light\" ion-fab mini><ion-icon name=\"ios-arrow-back\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"share()\" color=\"secondary\" ion-fab mini><ion-icon name=\"share\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n    <ion-fab id=\"AddToAlbum\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"hasAlbum === false\">\r\n        <ion-fab-button (click)=\"presentPopover($event)\" color=\"tertiary\" ion-fab mini><ion-icon name=\"filing\"></ion-icon></ion-fab-button>\r\n    </ion-fab>\r\n    <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button (click)=\"deleteImage()\" color=\"danger\" ion-fab mini><ion-icon name=\"ios-trash\"></ion-icon></ion-fab-button>\r\n    </ion-fab>-->\r\n    <!--<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" *ngIf=\"hasAlbum === true\">\r\n        <ion-fab-button (click)=\"removeFromAlbum()\" color=\"danger\" ion-fab mini><ion-icon name=\"remove\"></ion-icon></ion-fab-button>\r\n    </ion-fab>-->\r\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" >\r\n        <ion-fab-button color=\"danger\" mini>\r\n            <ion-icon name=\"more\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button *ngIf=\"hasAlbum === true\" (click)=\"removeFromAlbum()\" color=\"secondary\" ion-fab mini><ion-icon name=\"remove\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button (click)=\"deleteImage()\" color=\"danger\" ion-fab mini><ion-icon name=\"ios-trash\"></ion-icon></ion-fab-button>\r\n        </ion-fab-list>\r\n    </ion-fab>\r\n\r\n    <!--<ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\r\n        <ion-fab-button mini>\r\n            <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-list side=\"top\">\r\n            <ion-fab-button class=\"fab-button\"><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button (click)=\"fab_clicked('FACEBOOK','BLA_BLA')\"><ion-icon name=\"logo-facebook\"></ion-icon></ion-fab-button>\r\n            <ion-fab-button><ion-icon name=\"email\"></ion-icon></ion-fab-button>\r\n\r\n        </ion-fab-list>\r\n    </ion-fab>-->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/gallery/gallery.page.scss":
/*!*******************************************!*\
  !*** ./src/app/gallery/gallery.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-gallery ion-slide.swiper-slide {\n  left: 2%;\n  background: black; }\n\npage-gallery .slide-zoom {\n  background: #e6e6e6; }\n\npage-gallery .thumb-img {\n  padding: 0px;\n  vertical-align: middle;\n  width: 100%; }\n\n.square {\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXGFtaXQucGF1bFxcRmlsZVVwbG9hZC9zcmNcXGFwcFxcZ2FsbGVyeVxcZ2FsbGVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxTQUFRO0VBQ1Isa0JBQWlCLEVBRXBCOztBQU5MO0VBU1Esb0JBQW1CLEVBRXRCOztBQVhMO0VBY1EsYUFBWTtFQUNaLHVCQUFzQjtFQUN0QixZQUFVLEVBQ2I7O0FBRUw7RUFDSSxZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2Qix5QkFBd0I7RUFDeEIsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLWdhbGxlcnkge1xyXG5cclxuICAgIGlvbi1zbGlkZS5zd2lwZXItc2xpZGUge1xyXG4gICAgICAgIGxlZnQ6IDIlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZS16b29tIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1iLWltZyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxufVxyXG4uc3F1YXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.page.ts":
/*!*****************************************!*\
  !*** ./src/app/gallery/gallery.page.ts ***!
  \*****************************************/
/*! exports provided: GalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPage", function() { return GalleryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/masterdetail.service */ "./src/app/services/masterdetail.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _app_services_community_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/services/community.service */ "./src/app/services/community.service.ts");
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/popover.page */ "./src/app/popover/popover.page.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
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











var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, photoViewer, route, masterDetailService, loadingCtrl, communityService, alertController, toastCtrl, popoverCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.photoViewer = photoViewer;
        this.route = route;
        this.masterDetailService = masterDetailService;
        this.loadingCtrl = loadingCtrl;
        this.communityService = communityService;
        this.alertController = alertController;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.socialSharing = socialSharing;
        this.hasAlbum = false;
    }
    GalleryPage.prototype.goback = function () {
        this.objImage = [];
        this.imgUrls = [];
        this.navCtrl.goBack();
    };
    GalleryPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"],
                            event: ev,
                            translucent: true,
                            componentProps: {
                                filters: '',
                                curr_filter: '',
                                source: "ALBUM",
                                curr_album: this.masterDetailService.getLastActiveAlbum(),
                                albums: this.masterDetailService.getAlbums()
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            console.log(data.data);
                            if (data.data != '') {
                                try {
                                    _this.AddToAlbum(data.data.toString());
                                }
                                catch (err) {
                                }
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GalleryPage.prototype.slideChanged = function () {
        var _this = this;
        this.closeLists();
        var currentIndex;
        this.slides.getActiveIndex().then(function (val) {
            currentIndex = val;
            if (_this.objImage[val].imgAlbum === '') {
                _this.hasAlbum = false;
            }
            else {
                _this.hasAlbum = true;
            }
            if (_this.imgUrls[val].loaded === "0") {
                _this.presentLoading();
            }
            console.log("current Index:" + val);
            _this.reloadMore(val);
        });
    };
    GalleryPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Busy...',
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
    GalleryPage.prototype.loaded = function (imgIndex) {
        var _this = this;
        this.imgUrls[this.imgUrls.findIndex(function (p) { return p.imgUrl === imgIndex; })].loaded = "1";
        this.slides.getActiveIndex().then(function (val) {
            if (_this.imgUrls.findIndex(function (p) { return p.imgUrl === imgIndex; }) === val) {
                _this.loadingCtrl.dismiss();
            }
        });
    };
    GalleryPage.prototype.reloadMore = function (currIndex) {
        var startIndex;
        var endIndex;
        if (currIndex < 5) {
            var startIndex_1 = 0;
        }
        else {
            startIndex = currIndex - 5;
        }
        if (this.objImage.length > currIndex + 5) {
            endIndex = currIndex + 5;
        }
        else {
            endIndex = this.objImage.length - 1;
        }
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.imgUrls[i].imgUrl === '') {
                this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[i].imgParentUrl;
            }
        }
    };
    GalleryPage.prototype.slideTo = function (index) {
        if (this.objImage[index].imgAlbum != '') {
            this.hasAlbum = true;
        }
        this.slides.slideTo(index);
    };
    GalleryPage.prototype.removeFromAlbum = function () {
        this.AddToAlbum("APP");
    };
    GalleryPage.prototype.AddToAlbum = function (strAlbum) {
        var _this = this;
        this.presentLoading();
        this.slides.getActiveIndex().then(function (val) {
            _this.communityService.postAddToAlbum(strAlbum, _this.objImage[val].imgName).subscribe(function (resp) {
                console.log(resp);
                _this.setAlbumVals(resp, val);
                _this.masterDetailService.setImgAlbum(_this.objImage[val].imgName, resp);
                _this.loadingCtrl.dismiss();
                _this.presentToast('Added to Album');
            }, function (err) {
                _this.loadingCtrl.dismiss();
                _this.presentToast('Failed Adding to Album');
            });
        });
    };
    GalleryPage.prototype.setAlbumVals = function (resp, val) {
        //this.objImage[val].imgUrl = resp.imgUrl;
        this.objImage[val].imgParentUrl = resp.imgParentUrl;
        this.objImage[val].imgAlbum = resp.imgAlbum;
        if (resp.imgAlbum === '') {
            this.hasAlbum = false;
        }
        else {
            this.hasAlbum = true;
        }
        this.imgUrls[val].imgUrl = this.masterDetailService.getParentBase() + resp.imgParentUrl;
    };
    GalleryPage.prototype.presentAlertMultipleButtons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: 'Sure to delete image from Server',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.slides.getActiveIndex().then(function (val) {
                                            _this.presentLoading();
                                            _this.communityService.postDelete(_this.objImage[val].imgName.replace(".png", ".jpg")).subscribe(function (resp) {
                                                console.log(resp);
                                                _this.objImage[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                                _this.imgUrls[val].imgUrl = 'assets/icon/imgDeleted.jpg';
                                                _this.masterDetailService.setImgDeleted(_this.objImage[val].imgName);
                                                _this.loadingCtrl.dismiss();
                                                _this.presentToast('Image Deleted from Server');
                                            });
                                        });
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
    GalleryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.displaySource = this.masterDetailService.getListMode();
        if (this.masterDetailService.getImgFilterMonth() != '' && this.masterDetailService.getImgFilterYear() != '') {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgYear === _this.masterDetailService.getImgFilterYear() && p.imgMonth === _this.masterDetailService.getImgFilterMonth()); });
            }
            else if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === _this.masterDetailService.getImgFilterYear() && p.imgMonth === _this.masterDetailService.getImgFilterMonth()); });
            }
            else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.imgAlbum === _this.masterDetailService.getCurrAlbum() && p.imgYear === _this.masterDetailService.getImgFilterYear() && p.imgMonth === _this.masterDetailService.getImgFilterMonth()); });
            }
        }
        else {
            if (this.masterDetailService.getListMode() === "GENERAL") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return p.period === _this.masterDetailService.getFilter(); });
            }
            else if (this.masterDetailService.getListMode() === "GALLERY") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return p.period === _this.masterDetailService.getFilter() && p.imgAlbum === ''; });
            }
            else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return p.imgAlbum === _this.masterDetailService.getCurrAlbum(); });
            }
        }
        this.imgUrls = Array(this.objImage.length);
        for (var i = 0; i <= this.objImage.length - 1; i++) {
            this.imgUrls[i] = {
                "imgUrl": "",
                "loaded": "0"
            };
        }
        var currIndex = this.masterDetailService.getIndex();
        var startIndex;
        var endIndex;
        if (currIndex <= 4) {
            startIndex = 0;
        }
        else {
            startIndex = currIndex - 5;
        }
        if (this.objImage.length > currIndex + 5) {
            endIndex = currIndex + 5;
        }
        else {
            endIndex = this.objImage.length - 1;
        }
        if (this.imgUrls[currIndex].imgUrl === '') {
            this.imgUrls[currIndex].imgUrl = this.masterDetailService.getParentBase() + this.objImage[currIndex].imgParentUrl;
        }
        for (var i = startIndex; i <= endIndex; i++) {
            if (this.imgUrls[i].imgUrl === '') {
                this.imgUrls[i].imgUrl = this.masterDetailService.getParentBase() + this.objImage[i].imgParentUrl;
            }
        }
        this.slideTo(currIndex);
        this.loadingCtrl.dismiss();
        //this.socialSharing.sh
    };
    GalleryPage.prototype.loadImage = function (imgUrl) {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            _this.photoViewer.show(_this.objImage[val].imgParentUrl);
            console.log(_this.objImage[val].imgParentUrl);
        });
    };
    GalleryPage.prototype.deleteImage = function () {
        this.presentAlertMultipleButtons();
    };
    GalleryPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: msg,
                            duration: 2000,
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
    GalleryPage.prototype.share = function () {
        var _this = this;
        this.slides.getActiveIndex().then(function (val) {
            //this.photoViewer.show(this.objImage[val].imgParentUrl);
            //console.log(this.objImage[val].imgParentUrl);
            _this.socialSharing.share("Shared from my Gallery", "", _this.masterDetailService.getParentBase() + _this.objImage[val].imgParentUrl, "NewImage")
                .then(function (entries) {
                console.log('success ' + JSON.stringify(entries));
            })
                .catch(function (error) {
                alert('error ' + JSON.stringify(error));
            });
        });
    };
    GalleryPage.prototype.clickMainFAB = function (container) {
        var message = 'Clicked open social menu';
        //this.insertLog(message);
        this.toggleLists(container);
    };
    GalleryPage.prototype.toggleLists = function (container) {
        var fabButton = document.getElementById(container).querySelector('ion-fab-button');
        var fabLists = document.getElementById(container).querySelectorAll('ion-fab-list');
        fabButton.activated = !fabButton.activated;
        for (var i = 0; i < fabLists.length; i++) {
            fabLists[i].activated = !fabLists[i].activated;
        }
    };
    GalleryPage.prototype.closeLists = function () {
        var fabs = document.querySelectorAll('ion-fab');
        for (var i = 0; i < fabs.length; i++) {
            fabs[i].activated = false;
        }
    };
    GalleryPage.prototype.insertAfter = function (el, referenceNode) {
        referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
    };
    GalleryPage.prototype.insertLog = function (message) {
        console.log(message);
        var el = document.querySelector('#log');
        var oldHTML = el.innerHTML;
        el.innerHTML = oldHTML + '\n' + message;
    };
    GalleryPage.prototype.add = function () {
        var newEle = document.createElement('f');
        var ref = document.querySelector('f');
        this.insertAfter(newEle, ref);
        this.insertLog('add');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Slides"])
    ], GalleryPage.prototype, "slides", void 0);
    GalleryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.page.html */ "./src/app/gallery/gallery.page.html"),
            styles: [__webpack_require__(/*! ./gallery.page.scss */ "./src/app/gallery/gallery.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_3__["MasterDetailService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _app_services_community_service__WEBPACK_IMPORTED_MODULE_5__["CommunityService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]])
    ], GalleryPage);
    return GalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=gallery-gallery-module.js.map