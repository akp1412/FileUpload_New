(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imglist-imglist-module"],{

/***/ "./src/app/imglist/imglist.module.ts":
/*!*******************************************!*\
  !*** ./src/app/imglist/imglist.module.ts ***!
  \*******************************************/
/*! exports provided: ImglistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImglistPageModule", function() { return ImglistPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _imglist_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imglist.page */ "./src/app/imglist/imglist.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _imglist_page__WEBPACK_IMPORTED_MODULE_5__["ImglistPage"]
    }
];
var ImglistPageModule = /** @class */ (function () {
    function ImglistPageModule() {
    }
    ImglistPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_imglist_page__WEBPACK_IMPORTED_MODULE_5__["ImglistPage"]]
        })
    ], ImglistPageModule);
    return ImglistPageModule;
}());



/***/ }),

/***/ "./src/app/imglist/imglist.page.html":
/*!*******************************************!*\
  !*** ./src/app/imglist/imglist.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<ion-header>\r\n    <ion-toolbar>\r\n        <ion-back-button (click)=\"goback()\" slot=\"start\"></ion-back-button>\r\n        <ion-title>Gallery</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n            <button ion-button icon-only (click)=\"presentPopover($event)\">\r\n                <ion-icon name=\"more\"></ion-icon>\r\n            </button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n</ion-header>-->\r\n<ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n        <ion-button color=\"primary\" (click)=\"goback()\">\r\n            <ion-icon color=\"light\" slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{strHeading}}</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button  color=\"primary\" (click)=\"presentPopover($event)\">\r\n            <ion-icon color=\"light\" slot=\"icon-only\" name=\"funnel\"></ion-icon>\r\n        </ion-button>\r\n    </ion-buttons>\r\n</ion-toolbar>\r\n<!--text-center  class=\"vertical-align-content\"-->\r\n\r\n<ion-content>\r\n    <!--<ion-item>-->\r\n        <p style=\"color: darkred;font-size:12px;\" >Current Filter: {{currFilter}}</p>\r\n    <!--</ion-item>-->\r\n        <ion-grid>\r\n            <ion-row *ngFor=\"let row of localGrid\">\r\n                <ion-col *ngFor=\"let file_uri of row\" style=\"padding:2px;\">\r\n                    <!-- <img src=\"{{file_uri}}\" (click)=\"LoadImage(file_uri)\" style=\"width:100%; display: block;-->\r\n                    <!--<div class=\"square\" (click)=\"LoadImage(file_uri)\" style=\"background-image: url(https://s3-us-west-2.amazonaws.com/azcommunityimages//Thumbnails/APP-01-04-2016-150909.png)\"></div>-->\r\n                    <div class=\"square\" (click)=\"LoadImage(file_uri)\" [style.background-image]=\"'url(' + file_uri + ')'\"></div>\r\n\r\n\r\n                    <!--margin-left: auto;  margin-right: auto; vertical-align:middle;\" />-->\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>\r\n    \r\n\r\n        <!--<!--<div >\r\n            <!-- Responsive Layout with Ion Grid-->\r\n        <!--<ion-grid >\r\n            <ion-row>\r\n                <ion-col col-6 col-md-4 col-xl-3 *ngFor=\"let objImg of objImage\">\r\n                     <div class=\"image-container\" [style.background-image]=\"'url(objImg.imgUrl)'\"></div>\r\n                    <img src={{objImg.imgUrl}}>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>-->\r\n        <!-- More Pinterest floating gallery style -->\r\n        <!--</div>-->\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/imglist/imglist.page.scss":
/*!*******************************************!*\
  !*** ./src/app/imglist/imglist.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".square {\n  width: 100%;\n  padding-bottom: 100%;\n  background-color: black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW1nbGlzdC9DOlxcVXNlcnNcXGFtaXQucGF1bFxcRmlsZVVwbG9hZC9zcmNcXGFwcFxcaW1nbGlzdFxcaW1nbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gscUJBQW9CO0VBQ3BCLHdCQUF1QjtFQUN2Qix5QkFBd0I7RUFDeEIsNkJBQTRCO0VBQzVCLDRCQUEyQixFQUU5QiIsImZpbGUiOiJzcmMvYXBwL2ltZ2xpc3QvaW1nbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3F1YXJlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/imglist/imglist.page.ts":
/*!*****************************************!*\
  !*** ./src/app/imglist/imglist.page.ts ***!
  \*****************************************/
/*! exports provided: ImglistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImglistPage", function() { return ImglistPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/services/masterdetail.service */ "./src/app/services/masterdetail.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _popover_popover_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover.page */ "./src/app/popover/popover.page.ts");
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







var ImglistPage = /** @class */ (function () {
    function ImglistPage(navCtrl, photoViewer, route, masterDetailService, loadingCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.photoViewer = photoViewer;
        this.route = route;
        this.masterDetailService = masterDetailService;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.galleryType = 'regular';
        this.imgYrs = '';
        this.strHeading = "";
        this.blnDidLeave = false;
    }
    ImglistPage.prototype.ngOnInit = function () {
        //this.presentLoading();
        var _this = this;
        if (this.masterDetailService.getListMode() === "GALLERY") {
            this.strHeading = "Gallery: " + this.masterDetailService.getFilter();
            if (this.masterDetailService.getY4Filter() === '') {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter()); });
                }
                else {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === ''); });
                }
            }
            else {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgYear === _this.masterDetailService.getY4Filter()); });
                }
                else {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === _this.masterDetailService.getY4Filter()); });
                }
            }
        }
        else if (this.masterDetailService.getListMode() === "ALBUM") {
            this.strHeading = "Album: " + this.masterDetailService.getCurrAlbum();
            this.objImage = this.masterDetailService.getImages().filter(function (p) { return p.imgAlbum === _this.masterDetailService.getCurrAlbum(); });
        }
        this.populateGrid();
        this.currFilter = "";
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        this.loadingCtrl.dismiss('done');
    };
    ImglistPage.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.masterDetailService.setImgListFilterOptions(this.imgYrs);
                        return [4 /*yield*/, this.popoverCtrl.create({
                                component: _popover_popover_page__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"],
                                event: ev,
                                translucent: true,
                                componentProps: {
                                    filters: this.imgYrs,
                                    curr_filter: this.currFilter,
                                    source: "GALLERY"
                                }
                            })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        popover.onDidDismiss().then(function (data) {
                            console.log(data.data);
                            _this.filterList(data.data);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImglistPage.prototype.filterList = function (strFilter) {
        var _this = this;
        if (strFilter === '0-0' || strFilter === '') {
            //this.objImage = this.objImage.filter(p => (p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]));
            if (this.masterDetailService.getY4Filter() === '') {
                this.currFilter = "";
            }
            else {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgYear === _this.masterDetailService.getY4Filter()); });
                }
                else {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === _this.masterDetailService.getY4Filter()); });
                }
                this.currFilter = "";
            }
            if (this.masterDetailService.getListMode() === "GALLERY") {
                if (this.masterDetailService.getY4Filter() === '') {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter()); });
                    }
                    else {
                        this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === ''); });
                    }
                }
                else {
                    if (this.masterDetailService.getListShowAlbum()) {
                        this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgYear === _this.masterDetailService.getY4Filter()); });
                    }
                    else {
                        this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgYear === _this.masterDetailService.getY4Filter()); });
                    }
                }
            }
            else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return p.imgAlbum === _this.masterDetailService.getCurrAlbum(); });
            }
            this.populateGrid();
        }
        else {
            this.currFilter = strFilter;
            if (this.masterDetailService.getListMode() === "GALLERY") {
                if (this.masterDetailService.getListShowAlbum()) {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]); });
                }
                else {
                    this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.period === _this.masterDetailService.getFilter() && p.imgAlbum === '' && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]); });
                }
            }
            else if (this.masterDetailService.getListMode() === "ALBUM") {
                this.objImage = this.masterDetailService.getImages().filter(function (p) { return (p.imgAlbum === _this.masterDetailService.getCurrAlbum() && p.imgMonth === strFilter.split("-")[0] && p.imgYear === strFilter.split("-")[1]); });
                ;
            }
            this.populateGrid();
        }
    };
    ImglistPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Busy...'
                            //,duration: 3000
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present().then(function (val) {
                                console.log(val);
                                loading.dismiss();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImglistPage.prototype.LoadImage = function (imgUrl) {
        this.presentLoading();
        var imgName = imgUrl.replace(this.masterDetailService.getThumbBase(), '');
        var intIndex = this.objImage.findIndex(function (x) { return x.imgName === imgName; });
        this.masterDetailService.setIndex(intIndex);
        //this.masterDetailService.setImages(this.objImageList.filter(p => p.period === strFilter));
        if (this.currFilter != "") {
            this.masterDetailService.setImgFilterMonth(this.currFilter.split("-")[0]);
            this.masterDetailService.setImgFilterYear(this.currFilter.split("-")[1]);
        }
        else {
            this.masterDetailService.setImgFilterMonth('');
            this.masterDetailService.setImgFilterYear('');
        }
        this.blnDidLeave = true;
        this.navCtrl.navigateForward('gallery');
        //this.photoViewer.show(this.objImageList.filter(p => p.imgUrl === imgUrl)[0].imgParentUrl);
    };
    ImglistPage.prototype.goback = function () {
        this.objImage = [];
        this.localGrid = [];
        this.masterDetailService.setImgFilterMonth("");
        this.masterDetailService.setImgFilterYear("");
        this.navCtrl.goBack();
    };
    ImglistPage.prototype.populateGrid = function () {
        var localImgList = this.objImage;
        this.localGrid = Array(Math.ceil(localImgList.length / 4));
        var rowNum = 0;
        for (var i = 0; i < localImgList.length; i += 4) {
            this.localGrid[rowNum] = Array(4);
            if (localImgList[i]) {
                this.localGrid[rowNum][0] = this.masterDetailService.getThumbBase() + localImgList[i].imgName;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            if (localImgList[i + 1]) {
                this.localGrid[rowNum][1] = this.masterDetailService.getThumbBase() + localImgList[i + 1].imgName;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            else {
                this.localGrid[rowNum][1] = "";
            }
            if (localImgList[i + 2]) {
                this.localGrid[rowNum][2] = this.masterDetailService.getThumbBase() + localImgList[i + 2].imgName;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            else {
                this.localGrid[rowNum][2] = "";
            }
            if (localImgList[i + 3]) {
                this.localGrid[rowNum][3] = this.masterDetailService.getThumbBase() + localImgList[i + 3].imgName;
                if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
                    this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
                }
            }
            else {
                this.localGrid[rowNum][3] = "";
            }
            //if (localImgList[i + 4]) {
            //    this.localGrid[rowNum][4] = this.masterDetailService.getThumbBase() + localImgList[i + 4].imgName;
            //    if (this.imgYrs.search(localImgList[i].imgMonth + '-' + localImgList[i].imgYear) === -1) {
            //        this.imgYrs = this.imgYrs.concat(localImgList[i].imgMonth + '-' + localImgList[i].imgYear + ",");
            //    }
            //}
            //else {
            //    this.localGrid[rowNum][4] = "";
            //}
            rowNum++;
        }
        if (this.imgYrs.length > 0) {
            if (this.imgYrs.substr(this.imgYrs.length - 1, this.imgYrs.length - 1) === ",") {
                this.imgYrs = this.imgYrs.substr(0, this.imgYrs.length - 1);
            }
        }
        else {
            this.imgYrs = this.imgYrs;
        }
    };
    ImglistPage.prototype.ionViewWillEnter = function () {
        console.log("ionViewWillEnter");
        console.log(this.objImage.length);
        console.log(this.blnDidLeave);
        if (this.blnDidLeave && this.masterDetailService.getIsDirty()) {
            this.presentLoading();
            this.filterList(this.currFilter);
            this.blnDidLeave = false;
            this.masterDetailService.setIsDirty(false);
            //this.populateGrid();
            this.loadingCtrl.dismiss();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popoverContent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImglistPage.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('popoverText', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ImglistPage.prototype, "text", void 0);
    ImglistPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imglist',
            template: __webpack_require__(/*! ./imglist.page.html */ "./src/app/imglist/imglist.page.html"),
            styles: [__webpack_require__(/*! ./imglist.page.scss */ "./src/app/imglist/imglist.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_services_masterdetail_service__WEBPACK_IMPORTED_MODULE_3__["MasterDetailService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], ImglistPage);
    return ImglistPage;
}());



/***/ })

}]);
//# sourceMappingURL=imglist-imglist-module.js.map