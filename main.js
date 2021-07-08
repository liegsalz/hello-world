(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yobry\Documents\2 .Uni\4_Semester\BEMS\bems\code\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhVf":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EventService {
    constructor() {
        this._subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    emit(data) {
        this._subject.next(data);
    }
    on() {
        return this._subject.asObservable();
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "BikA":
/*!***************************************************!*\
  !*** ./src/app/components/help/help.component.ts ***!
  \***************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-accordion/faq-accordion.component */ "XAS7");
/* harmony import */ var _user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-manual/user-manual.component */ "XuBr");





function HelpComponent_faq_accordion_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "faq-accordion", 9);
} }
function HelpComponent_app_user_manual_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-user-manual", 10);
} }
function HelpComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manuel-Video CONTENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
class HelpComponent {
    constructor() {
        this.panelOpenState = false;
        this.currentMenuItem = 'faq';
    }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 13, vars: 12, consts: [["id", "faq-container"], ["id", "help-menu"], ["id", "faq", 1, "help-menu-item", 3, "ngClass", "click"], ["id", "user-manual", 1, "help-menu-item", 3, "ngClass", "click"], ["id", "manual-video", 1, "help-menu-item", 3, "ngClass", "click"], ["id", "help-content", "itemSize", "2"], ["id", "faq-content", 4, "ngIf"], ["id", "user-manual-content", 4, "ngIf"], ["id", "manual-video-content", 4, "ngIf"], ["id", "faq-content"], ["id", "user-manual-content"], ["id", "manual-video-content"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_div_click_3_listener() { return ctx.currentMenuItem = "faq"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_div_click_5_listener() { return ctx.currentMenuItem = "user-manual"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_div_click_7_listener() { return ctx.currentMenuItem = "manual-video"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manual Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "cdk-virtual-scroll-viewport", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HelpComponent_faq_accordion_10_Template, 1, 0, "faq-accordion", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HelpComponent_app_user_manual_11_Template, 1, 0, "app-user-manual", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HelpComponent_div_12_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.currentMenuItem == "faq"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentMenuItem == "user-manual"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currentMenuItem == "manual-video"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuItem === "faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuItem === "user-manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentMenuItem === "manual-video");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_3__["FaqAccordionComponent"], _user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_4__["UserManualComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n#faq-container[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: -9999;    \r\n    padding: 24px;\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n#help-menu[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding: 12px 12px 0px 0px;\r\n    width: 15%;\r\n}\r\n\r\n#help-content[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 75%;\r\n    height: 80vh;\r\n    overflow: auto;\r\n}\r\n\r\n.help-menu-item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: rgb(211,211,211);\r\n}\r\n\r\n.help-menu-item[_ngcontent-%COMP%]:hover {\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.help-menu-item.active[_ngcontent-%COMP%] {\r\n    font-weight: bolder;\r\n    color: rgb(56, 85, 85);\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n  }\r\n\r\n#faq-content[_ngcontent-%COMP%] {\r\n      width: 100vh;\r\n      height: 100vh;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxZQUFZO01BQ1osYUFBYTtFQUNqQiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcclxufVxyXG5cclxuI2ZhcS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIHotaW5kZXg6IC05OTk5OyAgICBcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbn1cclxuXHJcbiNoZWxwLW1lbnUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDEycHggMHB4IDBweDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbiNoZWxwLWNvbnRlbnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oZWxwLW1lbnUtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDIxMSwyMTEsMjExKTtcclxufSBcclxuXHJcbi5oZWxwLW1lbnUtaXRlbTpob3ZlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn0gXHJcbi5oZWxwLW1lbnUtaXRlbS5hY3RpdmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGNvbG9yOiByZ2IoNTYsIDg1LCA4NSk7XHJcbn0gXHJcblxyXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gICNmYXEtY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiAxMDB2aDtcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9Il19 */"] });


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/event.service */ "BhVf");


class HomeComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
    }
    requestPage(page) {
        this.eventService.emit(page);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 43, vars: 0, consts: [[1, "workspace"], [1, "background"], ["id", "container0", 1, "textContainer"], ["id", "container1", 1, "textContainer"], ["id", "container2", 1, "textContainer"], [3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Willkommen bei B.E.M.S.! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Willkommen bei \u201EBavarian Emissions Measurement System\u201C (B.E.M.S.), das System zur Erfassung dienstlicher Flugreisen und zur Ermittlung der entstandenen CO\u2082e- Emissionen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Das B.E.M.S. unterst\u00FCtzt Sie dabei Flugreisen schnell und einfach zu erfassen. Dabei werden die entstandenen CO\u2082e- Emissionen erfasst und automatisch berechnet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Was erm\u00F6glichen wir?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Dank B.E.M.S. erhalten Sie einen besseren \u00DCberblick \u00FCber die insgesamt entstandenen CO\u2082e-Emissionen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Klimaneutralit\u00E4t steht immer mehr im Fokus der \u00D6ffentlichkeit und stellt uns zunehmend vor Herausforderungen. Der Schutz unserer Umwelt spielt auch f\u00FCr zuk\u00FCnftige Generationen eine zentrale Rolle. Um das Ziel der klimaneutralen Staatsverwaltung bis zum Jahr 2030 verwirklichen zu k\u00F6nnen, wurde das Projekt zur Entwicklung einer Kompensationsplattform ins Leben gerufen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Das B.E.M.S. erfasst und berechnet die bei dienstlichen Flugreisen entstandenen CO\u2082e-Emissionen vollst\u00E4ndig und schafft so die Voraussetzung f\u00FCr eine sp\u00E4tere Kompensation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Wie kann ich Anfangen?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Um Ihren ersten Formular zu erstellen clicken Sie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_32_listener() { return ctx.requestPage("forms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "hier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Weitere Informationen und zus\u00E4tzliche Unterlagen finden Sie unter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_40_listener() { return ctx.requestPage("help"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Hilfe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 87vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:space-evenly;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%]    > .background[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 120%;\r\n  width: 100%;\r\n\r\n  background-image: url('home_background.jpg');\r\n  background-color: rgb(112, 112, 112);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;  \r\n  background-position-y: -20vh;\r\n  filter:grayscale(70%) blur(7px);\r\n  transform: scale(1.4);\r\n  z-index: 0;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%] {\r\n  \r\n  transition: 0.5s;\r\n  padding: 2% 2%;\r\n  width: 20vw;\r\n  height: 4vh;\r\n  font-size: 90%;\r\n  opacity: 0.9;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover {\r\n  transition: 0.4;\r\n  background-color: darkslategray;\r\n  box-shadow: 0 0 10px darkslategray;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n\r\n}\r\n\r\n#container0[_ngcontent-%COMP%]:hover {\r\n  height: 53%;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]:hover {\r\n  height: 70%;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]:hover {\r\n  height: 30%;\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  transition: 0.5s 0.1s;\r\n  opacity: 1;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  color: white;\r\n  font-size: 1.5vmax;\r\n  text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  height:0.5px;\r\n  border-width:0;\r\n  background-color:white;\r\n  width: 100%;\r\n  margin: 1% 0% 5% 0%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.1s;\r\n   text-align: justify;\r\n   color: lightgray;\r\n   margin: 0% 1% 0% 1%;\r\n   font-weight: 200;\r\n   opacity: 0;\r\n   font-size: 2.1vmin;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0VBRVgsNENBQXVEO0VBQ3ZELG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFVBQVU7O0FBRVo7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZOztBQUVkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7R0FDZixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsVUFBVTtHQUNWLGtCQUFrQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLndvcmtzcGFjZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLndvcmtzcGFjZSA+IC5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2hvbWVfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTIwdmg7XHJcbiAgZmlsdGVyOmdyYXlzY2FsZSg3MCUpIGJsdXIoN3B4KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgei1pbmRleDogMDtcclxuXHJcbn1cclxuXHJcbi50ZXh0Q29udGFpbmVyIHtcclxuICAvKlxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDIlIDIlO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuXHJcbn1cclxuXHJcbi50ZXh0Q29udGFpbmVyOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG4jY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyMDpob3ZlciB7XHJcbiAgaGVpZ2h0OiA1MyU7XHJcbn1cclxuXHJcbiNjb250YWluZXIxOmhvdmVyIHtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lcjI6aG92ZXIge1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4udGV4dENvbnRhaW5lcjpob3ZlciBwIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIDAuMXM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41dm1heDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6MC41cHg7XHJcbiAgYm9yZGVyLXdpZHRoOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDElIDAlIDUlIDAlO1xyXG59XHJcbiBcclxucCB7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgbWFyZ2luOiAwJSAxJSAwJSAxJTtcclxuICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgb3BhY2l0eTogMDtcclxuICAgZm9udC1zaXplOiAyLjF2bWluO1xyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "HrW9":
/*!************************************************************************!*\
  !*** ./src/app/components/inputs/input-table/input-table.component.ts ***!
  \************************************************************************/
/*! exports provided: InputTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTableComponent", function() { return InputTableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _input_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input-table-datasource */ "ycUU");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function InputTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r19.datum);
} }
function InputTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Beh\u00F6rdennummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r20.behoerdennummer);
} }
function InputTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Abflugort");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r21.abflugort);
} }
function InputTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Ankunftsort");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r22.ankunftsort);
} }
function InputTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Bef\u00F6rderungsklasse");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r23.befoerderungsklasse);
} }
function InputTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Personen Anzahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r24.personenAnzahl);
} }
function InputTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Emissionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](row_r25.emissionen);
} }
function InputTableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InputTableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputTableComponent_td_25_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function InputTableComponent_td_25_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r29); const row_r26 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return $event ? ctx_r28.selection.toggle(row_r26) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r15.selection.isSelected(row_r26))("aria-label", ctx_r15.checkboxLabel(row_r26));
} }
function InputTableComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 28);
} }
function InputTableComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 29);
} }
class InputTableComponent {
    constructor(http) {
        this.http = http;
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['datum', 'behoerdennummer', 'abflugort', 'ankunftsort', 'befoerderungsklasse', 'personenAnzahl', 'emissionen', 'select'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.dataSource = new _input_table_datasource__WEBPACK_IMPORTED_MODULE_3__["InputTableDataSource"]();
    }
    ngOnInit() {
        this.updateData();
    }
    updateData() {
        let tempData = [];
        const dataObserver = this.http.get("/api/input/view");
        dataObserver.subscribe(data => {
            data.data.forEach(elem => {
                tempData.push({
                    id: elem.id,
                    datum: elem.startingDate,
                    behoerdennummer: elem.authorityNumber,
                    abflugort: elem.iataStart,
                    ankunftsort: elem.iataDest,
                    befoerderungsklasse: elem.travelClass.toUpperCase(),
                    personenAnzahl: elem.number,
                    emissionen: elem.emission
                });
                this.dataSource.data = tempData;
            });
        });
        console.log(dataObserver);
        //forcing update, table.renderRows() does not trigger table update
        this.sort.sort(({ id: "datum", start: "asc" }));
        this.table.renderRows();
        console.log(this.table);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
    /** for the Toggles */
    updateActiveStatus(row) {
        row.activate = !row.activate;
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.behoerdennummer + 1}`;
    }
    deleteSelected() {
        console.log(this.selection.selected);
        this.selection.selected.forEach(flight => {
            const delObserver = this.http.delete("/api/input/data/" + flight.id);
            console.log(delObserver.subscribe());
        });
        this.updateData();
        alert("Einträge wurden gelöscht");
    }
    saveSelected() {
        const delObserver = this.http.delete("/api/input/merge");
        console.log(delObserver.subscribe());
        alert("Daten wurden gespeichert");
        const newTemp = this.http.post("/api/input/create", null);
        console.log(newTemp.subscribe());
        this.updateData();
    }
}
InputTableComponent.ɵfac = function InputTableComponent_Factory(t) { return new (t || InputTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
InputTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InputTableComponent, selectors: [["input-table"]], viewQuery: function InputTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 42, vars: 8, consts: [[1, "mat-elevation-z8", "data-table"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "datum"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "behoerdennummer"], ["matColumnDef", "abflugort"], ["matColumnDef", "ankunftsort"], ["matColumnDef", "befoerderungsklasse"], ["matColumnDef", "personenAnzahl"], ["matColumnDef", "emissionen"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "selectAll"], [3, "checked", "indeterminate", "aria-label", "change"], [3, "length", "pageIndex", "pageSize"], ["paginator", ""], [1, "save"], ["mat-raised-button", "", 3, "click"], [1, "delete"], [1, "update", 3, "click"], ["mat-raised-button", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", ""]], template: function InputTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, InputTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, InputTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, InputTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InputTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InputTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InputTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InputTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InputTableComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, InputTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, InputTableComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InputTableComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, InputTableComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, InputTableComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, InputTableComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, InputTableComponent_th_24_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, InputTableComponent_td_25_Template, 2, 2, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, InputTableComponent_tr_26_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, InputTableComponent_tr_27_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InputTableComponent_Template_mat_checkbox_change_29_listener($event) { return $event ? ctx.masterToggle() : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, " Select all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "mat-paginator", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputTableComponent_Template_button_click_34_listener() { return ctx.saveSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Speichern");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputTableComponent_Template_button_click_37_listener() { return ctx.deleteSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " L\u00F6schen");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InputTableComponent_Template_div_click_39_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.selection.hasValue() && ctx.isAllSelected())("indeterminate", ctx.selection.hasValue() && !ctx.isAllSelected())("aria-label", ctx.checkboxLabel());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 10);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n  \r\n.data-table[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n  \r\n.selectAll[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 1562px;\r\n}\r\n  \r\n.save[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 330px;\r\n  background-color: rgb(112, 112, 112);\r\n}\r\n  \r\n.update[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 170px;\r\n  background-color: rgb(112, 112, 112);\r\n}\r\n  \r\n.delete[_ngcontent-%COMP%] {\r\n  right: 480px;\r\n  position: absolute;\r\n  background-color: rgb(112, 112, 112);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7QUFDdEMiLCJmaWxlIjoiaW5wdXQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZnVsbC13aWR0aC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICBcclxuLmRhdGEtdGFibGUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbn1cclxuXHJcbi5zZWxlY3RBbGwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxNTYycHg7XHJcbn1cclxuXHJcbi5zYXZlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDMzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcclxufVxyXG5cclxuLnVwZGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIHJpZ2h0OiA0ODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Copyright \u00A9 Bavarian Emissions Measurement System - Hochschule M\u00FCnchen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 99.5%;\r\n  height: 15px;\r\n  line-height: 15px;\r\n  background-color: #202020;\r\n  text-align: left;\r\n  padding: 0 0 0 0.5%;\r\n  color: white;\r\n  font-size: 12px;\r\n  font-weight: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDk5LjUlO1xyXG4gIGhlaWdodDogMTVweDtcclxuICBsaW5lLWhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMDIwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAwIDAgMC41JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-table/dashboard-table.component */ "iXbb");


class DashboardComponent {
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, consts: [[1, "background"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dashboard-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_1__["DashboardTableComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\ndashboard-table[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 13%;\r\n    transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    width: 100%;\r\n    z-index: 99;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxXQUFXO0FBQ2YiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcclxufVxyXG5cclxuZGFzaGJvYXJkLXRhYmxlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTMlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms/forms.component */ "xX1k");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "ny1Q");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/help/help.component */ "BikA");










function AppComponent_app_home_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-home");
} }
function AppComponent_app_dashboard_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dashboard");
} }
function AppComponent_app_forms_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-forms");
} }
function AppComponent_app_inputs_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-inputs");
} }
function AppComponent_app_help_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-help");
} }
class AppComponent {
    constructor() {
        this.page = "home";
        this.title = 'bems';
    }
    ;
    setPage(page) {
        this.page = page;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 6, consts: [[3, "notify"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("notify", function AppComponent_Template_app_navbar_notify_1_listener($event) { return ctx.setPage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_app_home_4_Template, 1, 0, "app-home", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_app_dashboard_5_Template, 1, 0, "app-dashboard", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_app_forms_6_Template, 1, 0, "app-forms", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_app_inputs_7_Template, 1, 0, "app-inputs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_app_help_8_Template, 1, 0, "app-help", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page == "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page == "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page == "forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page == "inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.page == "help");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_8__["InputsComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"]], styles: ["body[_ngcontent-%COMP%] {\r\n    height: 87vh;\r\n    overflow: hidden;\r\n  }\r\n\r\napp-navbar[_ngcontent-%COMP%] {\r\n  z-index: 999;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7QUFFRjtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgaGVpZ2h0OiA4N3ZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG5hcHAtbmF2YmFyIHtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ])
            ])
        ] } });


/***/ }),

/***/ "XAS7":
/*!**************************************************************************!*\
  !*** ./src/app/components/help/faq-accordion/faq-accordion.component.ts ***!
  \**************************************************************************/
/*! exports provided: FaqAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAccordionComponent", function() { return FaqAccordionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");


class FaqAccordionComponent {
    constructor() {
        this.panelOpenState = false;
        this.currentFaqItem = 'faq-0';
    }
    ngOnInit() {
    }
}
FaqAccordionComponent.ɵfac = function FaqAccordionComponent_Factory(t) { return new (t || FaqAccordionComponent)(); };
FaqAccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqAccordionComponent, selectors: [["faq-accordion"]], decls: 108, vars: 0, consts: [[1, "faq-top-header"], [3, "opened", "closed"]], template: function FaqAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00DCber BEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_3_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_3_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " 1.\tWarum gibt es BEMS? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Die Zukunftsaufgabe Klimaschutz soll weiter aktiv vorangetrieben werden. Das Programm wurde entwickelt, um die bayerische Staatsverwaltung bei der Umsetzung des Ministerratsbeschluss zu unterst\u00FCtzen. Das Ziel ist die Realisierung der klimaneutralen Staatsverwaltung bis 2030. Durch BEMS werden die Flugreisen der unmittelbaren Staatsverwaltung und die dadurch entstandenen CO\u2082-\u00C4quivalente schnell und einfach erfasst. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_9_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_9_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 2.\tWelchen Nutzen bietet das Tool? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Das Programm vereinfacht den bisherigen Kompensationsprozess erheblich, da die manuelle Eingabe und das hin und her Verschicken von Excel-Dateien entf\u00E4llt. Das System berechnet die entstehenden CO\u2082-\u00C4quivalente au\u00DFerdem genauer, als es bisher der Fall war. Dadurch k\u00F6nnen die eingetragenen Daten nun zentral abgespeichert werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dateneingabe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_18_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_18_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 3.\tWie l\u00E4uft die Dateneingabe ab? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nach der erfolgreichen Anmeldung mit der eigenen Kennung, k\u00F6nnen die Daten unter \u201EFormulare\u201C eingetragen werden. Diese m\u00FCssen anschlie\u00DFend unter \u201EEintr\u00E4ge\u201C noch gepr\u00FCft und freigegeben werden. Nachdem die Daten gespeichert worden sind, werden diese automatisch im Dashboard angezeigt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_24_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_24_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 4.\tWelche Daten m\u00FCssen in das System eingetragen werden? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "- Abflugdatum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "- Abflugflughafen und Zielflughafen (Flughafencode/ IATA Code)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "- Bef\u00F6rderungsklasse ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "- Beh\u00F6rdennummer/Dienstnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_42_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_42_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 5.\tK\u00F6nnen auch Daten der RKS oder BayRMS in das System eingelesen werden? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ja, die \u00FCbermittelten Daten k\u00F6nnen automatisch in das Programm eingelesen werden. Die Daten m\u00FCssen anschlie\u00DFend nur noch \u00FCberpr\u00FCft und genehmigt werden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_48_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_48_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 6.\tK\u00F6nnen falsch eingetragenen Daten nach der Eingabe noch abge\u00E4ndert werden? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ja, das System \u00FCberpr\u00FCft automatisch, ob alle Daten vollst\u00E4ndig eingetragen wurden. Sollten bei der Eingabe fehlerhafte Daten eingegeben worden sein, besteht die M\u00F6glichkeit diese im Nachhinein zu \u00E4ndern. Ge\u00E4nderte Daten werden anschlie\u00DFend erneut \u00FCberpr\u00FCft (z.B. IATA Code-Stellen, 7-stellige Dienstellennummer).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_54_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_54_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 7.\tWas, wenn ich mir nicht mehr sicher bin, ob ich eine Flugreise schon einmal eingetragen habe? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Das System \u00FCberpr\u00FCft automatisch, ob eine Flugreise bereits eingegeben wurde und man wird sofort darauf aufmerksam gemacht. Sollten die Daten bereits in das System eingetragen worden sein fragt das System, ob die Flugreise erneut gespeichert werden soll. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_60_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_60_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 8.\tWie werde ich \u00FCber die entsprechende Abgabefrist der Daten informiert? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Zwischenlandungen gelten als Flugende. Folgt ein Anschlussflug ist dieser als neue Flugreise in das System einzugeben. Auch ungeplante (Zwischen-)Landungen sind soweit als m\u00F6glich auf diese Weise in das System einzutragen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_66_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_66_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 9.\tMein(e) Vorgesetzte(r) m\u00F6chten einen Report \u00FCber die Flugreisen der Abteilung, kann ich so etwas im System erstellen? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Ja, alle Elemente des Dashboards k\u00F6nnen in Excel exportiert werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_75_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_75_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 10.\tK\u00F6nnen Kollegen nachvollziehen, wie viel ich beruflich geflogen bin? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Nein, es werden keine personenbezogenen Daten gespeichert. Es l\u00E4sst sich lediglich nachvollziehen, welches z.B. Ministerium/Beh\u00F6rde eine Flugreise gebucht hat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_81_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_81_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 11.\tM\u00FCssen auch andere Transportmittel z.B. Zug- oder Autoreisen erfasst werden? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Nein, aktuell werden nur Flugreisen erfasst.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Allgemein");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_90_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_90_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " 12.\tKann ich mich auch auf anderen Endger\u00E4ten anmelden und das Programm nutzen? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Ja, es handelt sich um eine Webanwendung. Das Programm kann \u00FCberall und jederzeit von jedem Ger\u00E4t aufgerufen werden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_96_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_96_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " 13.\tWerden zur Nutzung Vorkenntnisse ben\u00F6tigt? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Nein, das Programm wurde so konzipiert, dass jeder das Programm einfach bedienen kann. \u201EHier\u201C finden Sie Lernunterlagen und werden Schritt f\u00FCr Schritt durch die Dateneingabe gef\u00FChrt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function FaqAccordionComponent_Template_mat_expansion_panel_opened_102_listener() { return ctx.panelOpenState = true; })("closed", function FaqAccordionComponent_Template_mat_expansion_panel_closed_102_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " 14.\tGibt es entsprechende \u201ELernunterlagen\u201C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Zur Schritt-f\u00FCr-Schritt Anleitung und dem Erkl\u00E4rvideo geht\u2018s \u201Ehier\u201C. Hier wurden alle wichtigen Informationen rund um die Dateneingabe und das Programm zusammengefasst dargestellt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"]], styles: [".mat-expansion-panel-body[_ngcontent-%COMP%] {\r\n    padding: 0 24px 0px !important;\r\n}\r\n\r\n.faq-top-header[_ngcontent-%COMP%] {\r\n    color: #2e2d2c;\r\n    font-weight: 800;\r\n    font-size: 1.4em;\r\n    padding: 0px 6px 12px;\r\n    color: rgb(211,211,211);\r\n}\r\n\r\n.faq-top-header[_ngcontent-%COMP%]:not(:first-child) {\r\n    padding: 12px 6px ;\r\n    \r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    background: #424242; \r\n\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    \r\n    color: #D3D3D3; \r\n}\r\n\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\r\n    \r\n    font-weight: 600;\r\n    color: #D3D3D3; \r\n}\r\n\r\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\r\n    color: #2e2d2c;\r\n    font-weight: 600;\r\n}\r\n\r\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\r\n    color: #2e2d2c;\r\n    font-weight: 200;\r\n}\r\n\r\n#faq-accordion-content[_ngcontent-%COMP%] {\r\n    height: 100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS1hY2NvcmRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUNBO0lBQ0ksbUJBQW1CLEVBQUUsbUJBQW1CO0FBQzVDLHdCQUF3QjtBQUN4Qjs7QUFFQTtJQUNJLHdCQUF3QixDQUFDLDRCQUE0QjtJQUNyRCxjQUFjLEVBQUUsdUJBQXVCO0FBQzNDOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixjQUFjLEVBQUUsb0JBQW9CO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImZhcS1hY2NvcmRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyNHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFxLXRvcC1oZWFkZXIge1xyXG4gICAgY29sb3I6ICMyZTJkMmM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgIHBhZGRpbmc6IDBweCA2cHggMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMjExLDIxMSwyMTEpO1xyXG59XHJcblxyXG4uZmFxLXRvcC1oZWFkZXI6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgcGFkZGluZzogMTJweCA2cHggO1xyXG4gICAgXHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjsgLyp0YWJzIGJhY2tncm91bmQgKi9cclxuLyogYmFja2dyb3VuZDogIzM4NTU1NTsqL1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjMzg1NTU1OyovLyp0YWJzIG9uIG1vdXNlIGJhY2tncm91bmQgKi9cclxuICAgIGNvbG9yOiAjRDNEM0QzOyAvKiBpbiB0YWJzIGZvbnQgY29sb3IgKi9cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRDNEM0QzOyAvKnRhYi1oZWFkZXIgY29sb3IgKi9cclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLCAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcclxuICAgIGNvbG9yOiAjMmUyZDJjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XHJcbiAgICBjb2xvcjogIzJlMmQyYztcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbiNmYXEtYWNjb3JkaW9uLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "XuBr":
/*!**********************************************************************!*\
  !*** ./src/app/components/help/user-manual/user-manual.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManualComponent", function() { return UserManualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserManualComponent {
    constructor() {
        this.pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        this.currentMenuItem = 'user-manual';
    }
    ngOnInit() {
    }
}
UserManualComponent.ɵfac = function UserManualComponent_Factory(t) { return new (t || UserManualComponent)(); };
UserManualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserManualComponent, selectors: [["app-user-manual"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function UserManualComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Angular 10 PDF Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLW1hbnVhbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forms/forms.component */ "xX1k");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/help/help.component */ "BikA");
/* harmony import */ var _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputs/inputs.component */ "ny1Q");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_dashboard_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard-table/dashboard-table.component */ "iXbb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_inputs_input_table_input_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/inputs/input-table/input-table.component */ "HrW9");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_help_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/help/faq-accordion/faq-accordion.component */ "XAS7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _components_help_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/help/user-manual/user-manual.component */ "XuBr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");





























//import {PdfViewerModule} from 'ng2-pdf-viewer'
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_24__["NgxCsvParserModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
        _components_inputs_input_table_input_table_component__WEBPACK_IMPORTED_MODULE_18__["InputTableComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_dashboard_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_10__["DashboardTableComponent"],
        _components_help_faq_accordion_faq_accordion_component__WEBPACK_IMPORTED_MODULE_22__["FaqAccordionComponent"],
        _components_help_user_manual_user_manual_component__WEBPACK_IMPORTED_MODULE_27__["UserManualComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckboxModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_24__["NgxCsvParserModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"]] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/event.service */ "BhVf");



class NavbarComponent {
    constructor(eventService) {
        this.eventService = eventService;
        this.page = "home";
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    ngOnInit() {
        this.eventService.on().subscribe(data => {
            if (data != "") {
                this.loadPage(data);
            }
        });
    }
    loadPage(page) {
        this.notify.emit(page);
        this.page = page;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { notify: "notify" }, decls: 25, vars: 8, consts: [[1, "logo", 3, "click"], [1, "vertical-center"], ["src", "assets/bems_logo_white.svg", "alt", "BEMS logo", 1, "logo_pic"], [1, "text"], [1, "upperText"], [1, "bottomText"], [1, "item"], [3, "click"], [1, "divider", "divider1"], [1, "divider", "divider2"], [1, "divider", "divider3"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.loadPage("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bavarian Emission Meausurement System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.loadPage("dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() { return ctx.loadPage("forms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Formulare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_19_listener() { return ctx.loadPage("inputs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Eintr\u00E4ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() { return ctx.loadPage("help"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hilfe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "dashboard" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "forms" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "inputs" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "help" ? "white" : "#b6b6b6");
    } }, styles: ["@font-face {font-family: \"Microsoft Yi Baiti\"; src: url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.eot\"); src: url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.svg#Microsoft Yi Baiti\") format(\"svg\"); }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: left;\r\n  width: 25vw;\r\n  cursor: pointer;\r\n  transition: 200ms;\r\n  width: 33vw;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  height: 7vh;\r\n  transition: 200ms;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .text[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]  {\r\n  margin-left: 7%;\r\n  transform: translateY(-5%);\r\n  transition: 0.3s;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]    > .upperText[_ngcontent-%COMP%] {\r\n  transform: translateY(28%);\r\n  font-weight: 400;\r\n  font-size: 4vmin;\r\n  letter-spacing: 0.5vmin;\r\n  font-family: 'Microsoft Yi Baiti';\r\n  color: white;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]    > .bottomText[_ngcontent-%COMP%] {\r\n  font-weight: 200;\r\n  font-size: 1.2vmin;\r\n  color: #8e9c9b;\r\n  border: none;\r\n  margin: 0;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.02);\r\n  -ms-transform:  scale(1.02);\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0%;\r\n  height: 5vh;\r\n  padding: 4vh 3% 4vh 1%;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  vertical-align: middle;\r\n  line-height: 5vh;\r\n  background-color: #383838;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 300;\r\n  font-size: 2vw;\r\n\r\n  margin: 0 4vw;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]:last-child {\r\n  margin-right: 0;\r\n  border-right: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: 0.3s;\r\n  color: #b6b6b6;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white !important;\r\n  cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .divider[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #969696;\r\n  position: absolute;\r\n  height: 130%;\r\n  top: -15%;\r\n}\r\n\r\n.divider1[_ngcontent-%COMP%] {\r\n  left: 31.5%;\r\n}\r\n\r\n.divider2[_ngcontent-%COMP%] {\r\n  left: 60.5%;\r\n}\r\n\r\n.divider3[_ngcontent-%COMP%] {\r\n  left: 86.5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksaUNBQWlDLEVBQUUsMEVBQTBFLEVBQUUsK2RBQStkLEVBQUU7O0FBRTVsQjtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBRVIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUVmLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFFRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjOztFQUVkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6IFwiTWljcm9zb2Z0IFlpIEJhaXRpXCI7IHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC81ZDIyYmQwODE2ZjkxMWE0YzkwZTVkODY2MTE1N2VmOS5lb3RcIik7IHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC81ZDIyYmQwODE2ZjkxMWE0YzkwZTVkODY2MTE1N2VmOS5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzVkMjJiZDA4MTZmOTExYTRjOTBlNWQ4NjYxMTU3ZWY5LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzVkMjJiZDA4MTZmOTExYTRjOTBlNWQ4NjYxMTU3ZWY5LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC81ZDIyYmQwODE2ZjkxMWE0YzkwZTVkODY2MTE1N2VmOS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvNWQyMmJkMDgxNmY5MTFhNGM5MGU1ZDg2NjExNTdlZjkuc3ZnI01pY3Jvc29mdCBZaSBCYWl0aVwiKSBmb3JtYXQoXCJzdmdcIik7IH1cclxuXHJcbi5sb2dvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIHdpZHRoOiAzM3Z3O1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBoZWlnaHQ6IDd2aDtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvID4gLnRleHQgIHtcclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5sb2dvID4gLnRleHQgPiAudXBwZXJUZXh0IHtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI4JSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI4JSk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDR2bWluO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjV2bWluO1xyXG4gIGZvbnQtZmFtaWx5OiAnTWljcm9zb2Z0IFlpIEJhaXRpJztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvID4gLnRleHQgPiAuYm90dG9tVGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDEuMnZtaW47XHJcbiAgY29sb3I6ICM4ZTljOWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ286aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgLW1zLXRyYW5zZm9ybTogIHNjYWxlKDEuMDIpO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwJTtcclxuICBoZWlnaHQ6IDV2aDtcclxuICBwYWRkaW5nOiA0dmggMyUgNHZoIDElO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM4Mzg7XHJcbn1cclxuXHJcbm5hdiA+IC5pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDJ2dztcclxuXHJcbiAgbWFyZ2luOiAwIDR2dztcclxufVxyXG5cclxubmF2ID4gLml0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuXHJcbm5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBjb2xvcjogI2I2YjZiNjtcclxufVxyXG5cclxubmF2ID4gLml0ZW0gYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYgPiAuZGl2aWRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTY5Njk2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEzMCU7XHJcbiAgdG9wOiAtMTUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjEge1xyXG4gIGxlZnQ6IDMxLjUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjIge1xyXG4gIGxlZnQ6IDYwLjUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjMge1xyXG4gIGxlZnQ6IDg2LjUlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "iXbb":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-table/dashboard-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DashboardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTableComponent", function() { return DashboardTableComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _dashboard_table_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-table-datasource */ "tRNh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-csv-parser */ "U7/n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











const _c0 = ["fileImportInput"];
function DashboardTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r18.datum);
} }
function DashboardTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Beh\u00F6rdennummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r19.behoerdennummer);
} }
function DashboardTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Abflugort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r20.abflugort);
} }
function DashboardTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ankunftsort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r21.ankunftsort);
} }
function DashboardTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Bef\u00F6rderungsklasse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r22.befoerderungsklasse);
} }
function DashboardTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Personen Anzahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r23.personenAnzahl);
} }
function DashboardTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Emissionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r24.emissionen);
} }
function DashboardTableComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
} }
function DashboardTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
const _c1 = function () { return [10]; };
class DashboardTableComponent {
    constructor(ngxCsvParser, http) {
        this.ngxCsvParser = ngxCsvParser;
        this.http = http;
        this.dataSource = new _dashboard_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DashboardTableDataSource"]();
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['datum', 'behoerdennummer', 'abflugort', 'ankunftsort', 'befoerderungsklasse', 'personenAnzahl', 'emissionen'];
        this.csvRecords = [];
        this.importedFile = null;
    }
    ngOnInit() {
        this.updateData();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
    updateData() {
        let tempData = [];
        let dataObserver = this.http.get("/api/dashboard");
        dataObserver.subscribe(data => {
            data.data.forEach(elem => {
                tempData.push({
                    datum: elem.startingDate,
                    behoerdennummer: elem.authorityNumber,
                    abflugort: elem.iataStart,
                    ankunftsort: elem.iataDest,
                    befoerderungsklasse: elem.travelClass.toUpperCase(),
                    personenAnzahl: elem.number,
                    emissionen: elem.emission
                });
            });
            this.dataSource.data = tempData;
        });
        console.log(dataObserver);
        //forcing update, table.renderRows() does not trigger table update
        this.sort.sort(({ id: "datum", start: "asc" }));
        this.table.renderRows();
        console.log(this.table);
    }
    fileChangeListener($event) {
        // Select the files from the event
        const files = $event.srcElement.files;
        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
            .pipe().subscribe((result) => {
            console.log('Result', result);
            this.csvRecords = result;
        }, (error) => {
            console.log('Error', error);
        });
    }
    datePrint(date) {
        let dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return dateString;
    }
    importData() {
        let flights = [];
        this.csvRecords.forEach((element) => {
            const data = {
                date: this.datePrint(new Date(element["Datum"])),
                authorityNumber: parseInt(element["Dienstellennummer"]),
                iataStart: element["IATA Startflughafen"],
                iataDest: element["IATA Ankunftsflughafen"],
                class: element["Flugklasse"],
                travelling: 1
            };
            flights.push(data);
        });
        console.log(flights);
        let observable = this.http.post("/api/data/add", { "flight": flights });
        observable.subscribe();
        console.log(observable);
        this.updateData();
        alert("Data was successfully imported!");
    }
}
DashboardTableComponent.ɵfac = function DashboardTableComponent_Factory(t) { return new (t || DashboardTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_5__["NgxCsvParser"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); };
DashboardTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardTableComponent, selectors: [["dashboard-table"]], viewQuery: function DashboardTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.fileImportInput = _t.first);
    } }, decls: 38, vars: 7, consts: [[1, "mat-elevation-z8", "data-table"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "datum"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "behoerdennummer"], ["matColumnDef", "abflugort"], ["matColumnDef", "ankunftsort"], ["matColumnDef", "befoerderungsklasse"], ["matColumnDef", "personenAnzahl"], ["matColumnDef", "emissionen"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [1, "utility"], [1, "left"], ["type", "file", "accept", ".csv", 1, "select", 3, "change"], ["fileImportInput", ""], [1, "right"], ["mat-raised-button", "", 1, "import", 3, "click"], ["mat-raised-button", "", "type", "submit", "onclick", "window.open('http://localhost:8080/api/file/download')", 1, "export"], ["mat-raised-button", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DashboardTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DashboardTableComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DashboardTableComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardTableComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DashboardTableComponent_td_7_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, DashboardTableComponent_th_9_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DashboardTableComponent_td_10_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DashboardTableComponent_th_12_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, DashboardTableComponent_td_13_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, DashboardTableComponent_th_15_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, DashboardTableComponent_td_16_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, DashboardTableComponent_th_18_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DashboardTableComponent_td_19_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, DashboardTableComponent_th_21_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, DashboardTableComponent_td_22_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DashboardTableComponent_tr_23_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, DashboardTableComponent_tr_24_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "mat-paginator", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DashboardTableComponent_Template_input_change_29_listener($event) { return ctx.fileChangeListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardTableComponent_Template_button_click_32_listener() { return ctx.importData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardTableComponent_Template_button_click_36_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.data-table[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: 20px auto;\r\n}\r\n\r\n.utility[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 90vw;\r\n  margin: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n  margin: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiZGFzaGJvYXJkLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZ1bGwtd2lkdGgtdGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0YS10YWJsZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuLnV0aWxpdHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ny1Q":
/*!*******************************************************!*\
  !*** ./src/app/components/inputs/inputs.component.ts ***!
  \*******************************************************/
/*! exports provided: InputsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputsComponent", function() { return InputsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _input_table_input_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-table/input-table.component */ "HrW9");


class InputsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], decls: 3, vars: 0, consts: [[1, "background"]], template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_input_table_input_table_component__WEBPACK_IMPORTED_MODULE_1__["InputTableComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: rgb(112, 112, 112);\r\n\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: -9999;    \r\n    top: -13%;\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\ninput-table[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 13%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGNBQWM7SUFDZCxTQUFTO0lBQ1Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxXQUFXO0FBQ2YiLCJmaWxlIjoiaW5wdXRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsIDExMiwgMTEyKTtcclxuXHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogLTk5OTk7ICAgIFxyXG4gICAgdG9wOiAtMTMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG59XHJcblxyXG5pbnB1dC10YWJsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "tRNh":
/*!************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-table/dashboard-table-datasource.ts ***!
  \************************************************************************************/
/*! exports provided: DashboardTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardTableDataSource", function() { return DashboardTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * Data source for the DashboardTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DashboardTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = [];
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
                return this.getPagedData(this.getSortedData([...this.data]));
            }));
        }
        else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        }
        else {
            return data;
        }
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            var _a, _b;
            const isAsc = ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.direction) === 'asc';
            switch ((_b = this.sort) === null || _b === void 0 ? void 0 : _b.active) {
                case 'datum': return compare(a.datum, b.datum, isAsc);
                case 'behoerdennummer': return compare(+a.behoerdennummer, +b.behoerdennummer, isAsc);
                case 'abflugort': return compare(+a.abflugort, +b.abflugort, isAsc);
                case 'ankunftsort': return compare(+a.ankunftsort, +b.ankunftsort, isAsc);
                case 'befoerderungsklasse': return compare(+a.befoerderungsklasse, +b.befoerderungsklasse, isAsc);
                case 'personenAnzahl': return compare(+a.personenAnzahl, +b.personenAnzahl, isAsc);
                case 'emissionen': return compare(+a.emissionen, +b.emissionen, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "xX1k":
/*!*****************************************************!*\
  !*** ./src/app/components/forms/forms.component.ts ***!
  \*****************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function FormsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FormsComponent_div_5_div_1_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.getInputText($event.target.value); })("keyup.enter", function FormsComponent_div_5_div_1_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.goToIndex(ctx_r10.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r5.inputData[ctx_r5.currentIndex][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r5.placeholder_DE[ctx_r5.currentIndex - 1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@validityState", ctx_r5.correctAns);
} }
function FormsComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormsComponent_div_5_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.startDate = $event; })("ngModelChange", function FormsComponent_div_5_div_2_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return (ctx_r14.inputData[0][1] = ctx_r14.datePrint(ctx_r14.startDate)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r11)("ngModel", ctx_r6.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r11);
} }
function FormsComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_div_5_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r15.inputData[ctx_r15.currentIndex][1] = "economy"; return ctx_r15.goToIndex(ctx_r15.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ECO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_div_5_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r17.inputData[ctx_r17.currentIndex][1] = "business"; return ctx_r17.goToIndex(ctx_r17.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormsComponent_div_5_div_1_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormsComponent_div_5_div_2_Template, 6, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormsComponent_div_5_div_3_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentIndex != 0 && ctx_r0.currentIndex != 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentIndex == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentIndex == 4);
} }
function FormsComponent_ng_template_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, ".............");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r19[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r19[1]);
} }
function FormsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormsComponent_ng_template_8_div_2_Template, 9, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_ng_template_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.confirmEntry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Senden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.inputData);
} }
function FormsComponent_img_36_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_36_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.goToIndex(ctx_r22.currentIndex - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormsComponent_img_37_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_37_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.goToIndex(ctx_r24.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FormsComponent {
    constructor(http, dateAdapter) {
        this.http = http;
        this.dateAdapter = dateAdapter;
        this.startDate = new Date("08/10/2021");
        /**
         * Array with the information we need from the user
         */
        this.inputData = [
            ["Datum", "10.08.2001"],
            ["Dienststellennr.", ""],
            ["Abflugsort", ""],
            ["Ankunftsort", ""],
            ["Beförderungsklasse", ""],
            ["Personenanzahl", ""],
            ["Zusammenfassung", "Überprüfen Sie die Daten"]
        ];
        /**
         * Placeholder information for input fields. Helps the user understand what belongs into that field
         * DE = German
         */
        this.placeholder_DE = ["z.B. 0123456", "z.B. MUC", "z.B. SPC", "z.B. ECO/BUS", "z.B. 1"];
        this.progressPercent = [0, 12, 27, 39, 53, 70, 84, 100];
        this.currentIndex = 0;
        this.showSummary = false;
        this.correctAns = true;
        /**
         * Specifies RegExpressions for answers in the forms
         */
        this.regExps = [
            //DATE
            new RegExp("^[0-9]{7}$"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("economy|business"),
            new RegExp("^[1-9][0-9]*$") //Personenanzahl
        ];
        this.expectedFormat = [
            "dd.MM.yyyy",
            "7-Stellige Zahl",
            "3 Buchstaben",
            "3 Buchstaben",
            "",
            "Eine Zahl"
        ];
        this.currentIndex = 0;
        this.dateAdapter.setLocale('de');
    }
    ngOnInit() {
    }
    /**
     * Gets the text from the forms input field
     * @param val text in input field
     */
    getInputText(val) {
        //assert not null. Object is always present when component is loaded
        this.inputData[this.currentIndex][1] = val;
    }
    /**
     * Checks for valid answer in input field. If given, jumps to specified page
     * @param index to page we want to jump
     */
    goToIndex(index) {
        if (index < this.currentIndex) {
            this.currentIndex = index;
        }
        else {
            if (this.currentIndex > 0) {
                this.correctAns = this.currentIndex < 6 ?
                    this.regExps[this.currentIndex - 1].test(this.inputData[this.currentIndex][1]) : true;
            }
            if (this.correctAns) {
                this.currentIndex = index;
            }
            else {
                alert("Erwateter Input: " + this.expectedFormat[this.currentIndex]);
            }
        }
        this.showSummary = this.currentIndex > 5;
    }
    datePrint(date) {
        let dateString = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        return dateString;
    }
    confirmEntry() {
        const data = {
            date: this.datePrint(this.startDate),
            authorityNumber: parseInt(this.inputData[1][1]),
            iataStart: this.inputData[2][1],
            iataDest: this.inputData[3][1],
            class: this.inputData[4][1],
            travelling: parseInt(this.inputData[5][1])
        };
        const testPost1 = this.http.post("/api/input/data/add", { "flight": [data] });
        console.log(data);
        console.log(testPost1.subscribe());
        this.currentIndex = 0;
        this.showSummary = !this.showSummary;
        for (let i = 1; i < 6; i++) {
            this.inputData[i][1] = "";
        }
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["DateAdapter"])); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], decls: 38, vars: 10, consts: [[1, "workspace"], [1, "container"], ["id", "inputTitle"], [4, "ngIf", "ngIfElse"], [1, "inputInfo"], ["summary", ""], [1, "progressbarContainer"], ["id", "doneBar", 1, "progressbar"], ["id", "currentBar", 1, "progressbar"], ["id", "leftBar", 1, "progressbar"], [3, "click"], ["class", "navArrow", "id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 3, "click", 4, "ngIf"], ["class", "navArrow", "id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 3, "click", 4, "ngIf"], ["class", "inputField", 4, "ngIf"], ["class", "datepicker", 4, "ngIf"], ["class", "flightclass", 4, "ngIf"], [1, "inputField"], ["type", "text", 1, "inputField", 3, "value", "placeholder", "keyup", "keyup.enter"], [1, "datepicker"], ["matInput", "", 1, "datepickerInput", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["startView", "year"], ["datepicker", ""], [1, "flightclass"], [1, "eco", 3, "click"], [1, "bus", 3, "click"], [1, "summary"], [4, "ngFor", "ngForOf"], [1, "confirmButton", 3, "click"], ["id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 1, "navArrow", 3, "click"], ["id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 1, "navArrow", 3, "click"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormsComponent_div_5_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FormsComponent_ng_template_8_Template, 5, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_16_listener() { return ctx.goToIndex(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Datum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_19_listener() { return ctx.goToIndex(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Dienststellennr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_22_listener() { return ctx.goToIndex(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Abflugsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_25_listener() { return ctx.goToIndex(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Ankunftsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_28_listener() { return ctx.goToIndex(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Bef\u00F6rderungsklasse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_31_listener() { return ctx.goToIndex(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Personen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_34_listener() { return ctx.goToIndex(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Zusammenfassung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, FormsComponent_img_36_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, FormsComponent_img_37_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputData[ctx.currentIndex][0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.expectedFormat[ctx.currentIndex], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 6 ? ctx.progressPercent[ctx.currentIndex] : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 6 ? ctx.progressPercent[ctx.currentIndex + 1] : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentIndex != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".workspace[_ngcontent-%COMP%] {\r\n  height: 88vh;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover {\r\n  width: 71vw;\r\n  height: 60.5vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  transition: 200ms;\r\n  position: relative;\r\n  background-color: darkslategray;\r\n  width: 70vw;\r\n  height: 60vh;\r\n  margin: auto auto;\r\n  border-radius: 50px;\r\n  box-shadow: 0 0 3px black;\r\n}\r\n\r\n#inputTitle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 35%;\r\n  color: white;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 150%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 9999em;\r\n  height: 25px;\r\n  outline: none;\r\n  text-align: center;\r\n  font-size: 1em;\r\n  background-color: rgb(219, 219, 219);\r\n  color: darkslategray;\r\n}\r\n\r\n.inputInfo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 67%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: lightgray;\r\n  font-size: 14px;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #4c723a;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.datepicker[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 54%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 25px;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 12%;\r\n  height: 6%;\r\n  width: auto;\r\n  transition: 200ms;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  height: 6.5%;\r\n}\r\n\r\n#leftNavArrow[_ngcontent-%COMP%] {\r\n  left: 46%;\r\n\r\n}\r\n\r\n#rightNavArrow[_ngcontent-%COMP%] {\r\n  right: 46%;\r\n  transform: rotate(180deg);\r\n\r\n}\r\n\r\n.summary[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 60%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.confirmButton[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 12%;\r\n  height: 6%;\r\n  width: auto;\r\n  transition: 200ms;\r\n  right: 46%; \r\n  background-color: #142222; \r\n  color: #6C886E;\r\n  border-radius: 10px;\r\n}\r\n\r\n.confirmButton[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n  color: white;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  font-size: 1.7vmin;\r\n  font-weight: 200;\r\n  color: rgb(214, 214, 214);\r\n}\r\n\r\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-weight: 400;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 5%;\r\n  width: 90%;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  list-style: none;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: initial;\r\n\r\n  width: 100%;\r\n  height: 3vh;\r\n  margin: 0 3% 0 3%;\r\n  padding: 0;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 1.5vmin;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 100;\r\n  padding-left: 6.2%;\r\n  padding-right: 6.5%;\r\n  -webkit-user-select: none;   \r\n  user-select: none; \r\n  cursor: pointer;\r\n  transition: 500ms ease-out;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  font-size: 100%;\r\n}\r\n\r\n.progressbar[_ngcontent-%COMP%] {\r\n  height: 2vh;\r\n  position: absolute;\r\n  border-radius: 999rem;\r\n  top: 15%;\r\n  transition: 500ms ease-in-out;\r\n}\r\n\r\n#doneBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: rgb(20, 34, 34);\r\n  z-index: 3;\r\n}\r\n\r\n#currentBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: rgb(43, 73, 61);\r\n  z-index: 2;\r\n  transition-delay: 400ms;\r\n}\r\n\r\n#leftBar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #6f7e67;\r\n  z-index: 1;\r\n}\r\n\r\n  .mat-focused .mat-form-field-label {\r\n  opacity: 0;\r\n }\r\n\r\n .mat-form-field-underline {\r\n  opacity: 0;\r\n }\r\n\r\n  .mat-form-field-label {\r\n  opacity: 0;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n  background-color: rgb(214, 214, 214);\r\n  color: #53833c;\r\n  width: 100px;\r\n  height: 25px;\r\n  font-size: 1em;\r\n  transition: 500ms;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:focus  {  \r\n  background-color: white;\r\n}\r\n\r\n.eco[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 9999px;\r\n  border-bottom-left-radius: 9999px;\r\n}\r\n\r\n.bus[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 9999px;\r\n  border-bottom-right-radius: 9999px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBRSxXQUFXLEVBQ2QsWUFBWSxFQUNiLGVBQWU7RUFDdEMsaUJBQWlCLEVBQUUsYUFBYTtFQUNoQyxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLFVBQVU7QUFDWjs7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtDQUNYOztBQUVBO0VBQ0MsVUFBVTtDQUNYOztBQUVBO0VBQ0MsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0FBQ3BDIiwiZmlsZSI6ImZvcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya3NwYWNlIHtcclxuICBoZWlnaHQ6IDg4dmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciB7XHJcbiAgd2lkdGg6IDcxdnc7XHJcbiAgaGVpZ2h0OiA2MC41dmg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrc2xhdGVncmF5O1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBtYXJnaW46IGF1dG8gYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbiNpbnB1dFRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAzNSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5OWVtO1xyXG4gIGhlaWdodDogMjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbn1cclxuXHJcbi5pbnB1dEluZm8ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY3JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5pbnB1dEZpZWxkOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNGM3MjNhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmRhdGVwaWNrZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU0JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4ubmF2QXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEyJTtcclxuICBoZWlnaHQ6IDYlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG59XHJcblxyXG4ubmF2QXJyb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDYuNSU7XHJcbn1cclxuXHJcbiNsZWZ0TmF2QXJyb3cge1xyXG4gIGxlZnQ6IDQ2JTtcclxuXHJcbn1cclxuXHJcbiNyaWdodE5hdkFycm93IHtcclxuICByaWdodDogNDYlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG59XHJcblxyXG4uc3VtbWFyeSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNjAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29uZmlybUJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTIlO1xyXG4gIGhlaWdodDogNiU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgcmlnaHQ6IDQ2JTsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjIyMjsgXHJcbiAgY29sb3I6ICM2Qzg4NkU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNvbmZpcm1CdXR0b246aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxLjd2bWluO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcclxufVxyXG4uc3VtbWFyeSBoMyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXJDb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE1JTtcclxuICBsZWZ0OiA1JTtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXJDb250YWluZXIgdWwge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgbWFyZ2luOiAwIDMlIDAgMyU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIGxpIHtcclxuICBmb250LXNpemU6IDEuNXZtaW47XHJcbn1cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctbGVmdDogNi4yJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2LjUlO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhckNvbnRhaW5lciBhOmhvdmVyIHtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciB7XHJcbiAgaGVpZ2h0OiAydmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcclxuICB0b3A6IDE1JTtcclxuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2RvbmVCYXIge1xyXG4gIC8qd2lkdGggaXMgZGVsY2FyZWQgYnkgbmcqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMzQsIDM0KTtcclxuICB6LWluZGV4OiAzO1xyXG59XHJcbiNjdXJyZW50QmFyIHtcclxuICAvKndpZHRoIGlzIGRlbGNhcmVkIGJ5IG5nKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDMsIDczLCA2MSk7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtcztcclxufVxyXG5cclxuI2xlZnRCYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY3ZTY3O1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gfVxyXG4gXHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gfSBcclxuXHJcbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbiBcclxuLmZsaWdodGNsYXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZmxpZ2h0Y2xhc3MgPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICBjb2xvcjogIzUzODMzYztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zO1xyXG59XHJcblxyXG4uZmxpZ2h0Y2xhc3MgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZsaWdodGNsYXNzID4gYnV0dG9uOmZvY3VzICB7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5lY28ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDk5OTlweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OTk5cHg7XHJcbn1cclxuXHJcbi5idXMge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5OTk5cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDk5OTlweDtcclxufVxyXG5cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('validityState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    border: '2px solid red',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '0.5px solid red',
                        transform: 'translate(50px -50%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '1px solid red',
                        transform: 'translate(-50x -50%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '1.5px solid red',
                        transform: 'translate(50% -50%)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '2px solid red',
                        transform: 'translate(-50% -50%)'
                    })
                ]))),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '2px solid red',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '1.5px solid darkgreen',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '1px solid darkgreen',
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        border: '0.5px solid darkgreen',
                    })
                ]))),
            ])
        ] } });


/***/ }),

/***/ "ycUU":
/*!*************************************************************************!*\
  !*** ./src/app/components/inputs/input-table/input-table-datasource.ts ***!
  \*************************************************************************/
/*! exports provided: InputTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTableDataSource", function() { return InputTableDataSource; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * Data source for the DashboardTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class InputTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = [];
    }
    /**
     * Connect this data source to the table. The table will only update when
     * the returned stream emits new items.
     * @returns A stream of the items to be rendered.
     */
    connect() {
        if (this.paginator && this.sort) {
            // Combine everything that affects the rendered data into one update
            // stream for the data-table to consume.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.data), this.paginator.page, this.sort.sortChange)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
                return this.getPagedData(this.getSortedData([...this.data]));
            }));
        }
        else {
            throw Error('Please set the paginator and sort on the data source before connecting.');
        }
    }
    /**
     *  Called when the table is being destroyed. Use this function, to clean up
     * any open connections or free any held resources that were set up during connect.
     */
    disconnect() { }
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getPagedData(data) {
        if (this.paginator) {
            const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
            return data.splice(startIndex, this.paginator.pageSize);
        }
        else {
            return data;
        }
    }
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    getSortedData(data) {
        if (!this.sort || !this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            var _a, _b;
            const isAsc = ((_a = this.sort) === null || _a === void 0 ? void 0 : _a.direction) === 'asc';
            switch ((_b = this.sort) === null || _b === void 0 ? void 0 : _b.active) {
                case 'datum': return compare(a.datum, b.datum, isAsc);
                case 'behoerdennummer': return compare(+a.behoerdennummer, +b.behoerdennummer, isAsc);
                case 'abflugort': return compare(+a.abflugort, +b.abflugort, isAsc);
                case 'ankunftsort': return compare(+a.ankunftsort, +b.ankunftsort, isAsc);
                case 'befoerderungsklasse': return compare(+a.befoerderungsklasse, +b.befoerderungsklasse, isAsc);
                case 'personenAnzahl': return compare(+a.personenAnzahl, +b.personenAnzahl, isAsc);
                case 'emissionen': return compare(+a.emissionen, +b.emissionen, isAsc);
                default: return 0;
            }
        });
    }
}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map