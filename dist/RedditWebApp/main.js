(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont {\r\n  padding-left:20px;\r\n  padding-right:20px;\r\n  margin-top: 130px;\r\n  height: 100%;\r\n  margin-bottom: 110px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"cont\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_subreddit_listing_subreddit_listing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/subreddit-listing/subreddit-listing.component */ "./src/app/components/subreddit-listing/subreddit-listing.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_my_reddit_home_my_reddit_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-reddit-home/my-reddit-home.component */ "./src/app/components/my-reddit-home/my-reddit-home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_subreddit_listing_subreddit_listing_component__WEBPACK_IMPORTED_MODULE_4__["SubredditListingComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_my_reddit_home_my_reddit_home_component__WEBPACK_IMPORTED_MODULE_7__["MyRedditHomeComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_my_reddit_home_my_reddit_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/my-reddit-home/my-reddit-home.component */ "./src/app/components/my-reddit-home/my-reddit-home.component.ts");
/* harmony import */ var _components_subreddit_listing_subreddit_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/subreddit-listing/subreddit-listing.component */ "./src/app/components/subreddit-listing/subreddit-listing.component.ts");



var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_my_reddit_home_my_reddit_home_component__WEBPACK_IMPORTED_MODULE_1__["MyRedditHomeComponent"] },
    { path: 'subreddit/:topic', component: _components_subreddit_listing_subreddit_listing_component__WEBPACK_IMPORTED_MODULE_2__["SubredditListingComponent"] },
    { path: '**', component: _components_my_reddit_home_my_reddit_home_component__WEBPACK_IMPORTED_MODULE_1__["MyRedditHomeComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer {\r\n  /*position: absolute;*/\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 70px;\r\n  line-height: 60px; /* Vertically center the text there */\r\n  /*background-color: #f5f5f5;*/\r\n  background-image:url('joanna-kosinska-439234-unsplash.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  text-align: center;\r\n  -webkit-text-decoration: whitesmoke;\r\n          text-decoration: whitesmoke;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer fixed-bottom bg-dark \">\n  <div class=\"container text-light\">\n\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/my-reddit-home/my-reddit-home.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/my-reddit-home/my-reddit-home.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\r\n  background-image: url('photo-1527049979667-990f1d0d8e7f.jpg');\r\n  background-size: contain;\r\n  padding: 75px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/my-reddit-home/my-reddit-home.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/my-reddit-home/my-reddit-home.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"position-relative overflow-hidden text-center bg-dark text-light hero\">\r\n    <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\r\n      <h1 class=\"display-4 font-weight-normal\">FIND REDDITS</h1>\r\n      <p class=\"lead font-weight-normal\">Search here about any topic</p>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"\"><i class=\"fa fa-search\"></i></span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Subreddit\" aria-label=\"Subreddit\"\r\n                   aria-describedby=\"basic-addon1\" [(ngModel)]=\"topic\"\r\n                   name=\"topic\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-light w-25\"\r\n              routerLink=\"/subreddit/{{topic!='' && topic!=null ? topic:' '}}\">Search\r\n      </button>\r\n    </div>\r\n    <div class=\"product-device box-shadow d-none d-md-block\"></div>\r\n    <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/my-reddit-home/my-reddit-home.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/my-reddit-home/my-reddit-home.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyRedditHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRedditHomeComponent", function() { return MyRedditHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyRedditHomeComponent = /** @class */ (function () {
    function MyRedditHomeComponent(router) {
        this.router = router;
    }
    MyRedditHomeComponent.prototype.ngOnInit = function () {
    };
    MyRedditHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-reddit-home',
            template: __webpack_require__(/*! ./my-reddit-home.component.html */ "./src/app/components/my-reddit-home/my-reddit-home.component.html"),
            styles: [__webpack_require__(/*! ./my-reddit-home.component.css */ "./src/app/components/my-reddit-home/my-reddit-home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MyRedditHomeComponent);
    return MyRedditHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title {\r\n  font-family: \"Fira Code Retina\";\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  color:black;\r\n}\r\n\r\n.nav-link {\r\n  font-family: \"Arial\";\r\n  font-size: large;\r\n\r\n}\r\n\r\n.background{\r\n  background-image:url('joanna-kosinska-439234-unsplash.jpg');\r\n  background-size: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg  fixed-top navbar-light background\">\n\n  <a class=\"navbar-brand \" href=\"#\"><i class=\"fa fa-registered fa-4x\"></i></a>\n  <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">MyReddit</h1></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item my-1\">\n        <a class=\"btn btn-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\n        <!--<span class=\"sr-only\">(current)</span>-->\n      </li>\n\n    </ul>\n    <!--<form class=\"form-inline\">-->\n      <!--<input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search Subreddit\" aria-label=\"Search\">-->\n      <!--<button class=\"btn btn-light font-weight-dark ml-3\" type=\"submit\">Search</button>-->\n    <!--</form>-->\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/subreddit-listing/subreddit-listing.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/subreddit-listing/subreddit-listing.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.active.joblist {*/\r\n  /*background-color: rgba(0, 170, 255, 0.65);*/\r\n  /*border-top-color: whitesmoke;*/\r\n  /*border-bottom-color: rgba(0, 170, 255, 0);*/\r\n  /*border-right-color: rgba(0, 170, 255, 0.02);*/\r\n  /*border-left-color: rgba(0, 170, 255, 0.02);*/\r\n  /*!*border-color: rgba(0, 170, 255, 0.65);*!*/\r\n  /*}*/\r\n  /*.active.joblist a {*/\r\n  /*color: white;*/\r\n  /*}*/\r\n  .background-pic{\r\n  background-image: url('photo-1527049979667-990f1d0d8e7f.jpg');\r\n  background-size: contain;\r\n}\r\n  .heading{\r\n\r\n  font-family: \"Bookman Old Style\";\r\n  /*background-color: rgba(15, 15, 15 ,0.6);*/\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/subreddit-listing/subreddit-listing.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/subreddit-listing/subreddit-listing.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic\">\n  <h1 class=\" text-center text-light rounded shadow p-2 mb-4 heading \">Listings for {{topic}}\n  </h1>\n  <div class=\"alert alert-danger\" [hidden]=\"toggleError\">\n    {{error}}\n  </div>\n\n\n  <nav class=\"navbar navbar-light justify-content-between mb-3\">\n\n    <a class=\"btn\" [hidden]=\"leftPage\" (click)=\"fetchListing()\"> <i\n      class=\"fas fa-arrow-circle-left fa-3x text-white\"></i></a>\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle \" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n        {{timeString}}\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'hour'); timeString='Past hour'\">Past Hour</a>\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'day'); timeString='Past 24 Hours'\">Past 24\n          Hours</a>\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'month'); timeString='Past Month'\">Past Month</a>\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'week'); timeString='Past Week'\">Past Week</a>\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'year'); timeString='Past year'\">Past Year</a>\n        <a class=\"dropdown-item btn\" (click)=\"fetchListing(topic,'all'); timeString='Of All Time'\">Of All Time</a>\n      </div>\n    </div>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <button class=\"btn bg-transparent\"></button>\n    <form class=\"form-inline\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTopic\" placeholder=\"Search\"\n             [ngModelOptions]=\"{standalone: true}\"\n             aria-label=\"Search\">\n      <button class=\"btn btn-success my-2 my-sm-0\" type=\"button\" (click)=\"fetchListing(searchTopic,listingTime)\">\n        Search\n      </button>\n    </form>\n    <a class=\"btn\" [hidden]=\"rightPage\" (click)=\"fetchListing(topic,listingTime, afterName)\"><i\n      class=\"fas fa-arrow-circle-right fa-3x text-white\"></i></a>\n  </nav>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let reddit of listings\"\n        class=\"list-group-item bg-light my-2 rounded shadow-sm\">\n      <div>\n        <div class=\"row text-dark\">\n          <div class=\"col-8\">\n            <h5 style=\"color: rgba(0,123,255,0.85);\">\n              <a href={{reddit.url}}>{{reddit.title}}</a></h5>\n          </div>\n          <div class=\"col-4\" style=\"text-align: right\">\n            <i class=\"fa  fa-thumbs-up\">&nbsp; {{reddit.ups}}</i> <br>\n            <i class=\"fa  fa-comments\">&nbsp; {{reddit.num_comments}}</i>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-8\">\n            <small>Posted By : {{reddit.author}}</small>\n          </div>\n          <div class=\"col-4\" style=\"text-align: right\">\n            <small>Posted on: {{ reddit.created}}</small>\n          </div>\n        </div>\n      </div>\n\n\n    </li>\n  </ul>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/subreddit-listing/subreddit-listing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/subreddit-listing/subreddit-listing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SubredditListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditListingComponent", function() { return SubredditListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_subreddit_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/subreddit-service.service */ "./src/app/services/subreddit-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubredditListingComponent = /** @class */ (function () {
    function SubredditListingComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.listings = [];
        this.afterName = null;
        this.leftPage = true;
        this.rightPage = true;
        this.timeString = 'Past 24 hours';
        this.listingTime = 'day';
        this.topic = '';
        this.toggleError = true;
        this.error = '';
        this.route.params.subscribe(function (param) {
            _this.topic = param['topic'];
        });
        if (this.topic !== ' ') {
            this.fetchListing(this.topic, this.listingTime);
        }
    }
    SubredditListingComponent.prototype.fetchListing = function (topic, time, after) {
        var _this = this;
        if (time === void 0) { time = null; }
        if (after === void 0) { after = null; }
        this.listingTime = time;
        this.topic = topic;
        // this.afterName = after;
        this.service.fetchUReddits(topic, time, after).then(function (listings) {
            if (listings != null && listings.error !== 404) {
                _this.afterName = listings.data.after;
                if (_this.afterName == null) {
                    _this.rightPage = true;
                }
                else {
                    _this.rightPage = false;
                }
                _this.listings = listings.data.children.map(function (obj) { return obj.data; }).map((function (obj) {
                    var newObj = obj;
                    newObj.created = new Date(obj.created * 1000).toDateString();
                    return newObj;
                }));
                _this.toggleError = true;
            }
            else {
                _this.error = 'Something went wrong. Please select the keyword judicially.';
                _this.toggleError = false;
            }
        }).catch(function (error) {
            _this.error = error.toString().split(':')[1];
            _this.toggleError = false;
        });
    };
    SubredditListingComponent.prototype.ngOnInit = function () {
    };
    SubredditListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subreddit-listing',
            template: __webpack_require__(/*! ./subreddit-listing.component.html */ "./src/app/components/subreddit-listing/subreddit-listing.component.html"),
            styles: [__webpack_require__(/*! ./subreddit-listing.component.css */ "./src/app/components/subreddit-listing/subreddit-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_subreddit_service_service__WEBPACK_IMPORTED_MODULE_2__["SubredditServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SubredditListingComponent);
    return SubredditListingComponent;
}());



/***/ }),

/***/ "./src/app/services/subreddit-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/subreddit-service.service.ts ***!
  \*******************************************************/
/*! exports provided: SubredditServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditServiceService", function() { return SubredditServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubredditServiceService = /** @class */ (function () {
    function SubredditServiceService() {
        this.url = 'https://www.reddit.com/r/default/top/.json';
    }
    SubredditServiceService.prototype.fetchUReddits = function (topic, time, after) {
        var url = this.url;
        url = url.replace('default', topic) + ((time !== null) ? '?t=' + time : '') + ((after != null) ? '?after=' + after : '');
        console.log(url);
        return fetch(url).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SubredditServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubredditServiceService);
    return SubredditServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shubh\Dropbox\CiscoRedditApp\RedditWebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map