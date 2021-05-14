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

class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 7, vars: 0, template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Helloooo im a placehoder for help!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Feel free to implement me :)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5jc3MifQ== */"] });


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
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 87vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:space-evenly;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%]    > .background[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 120%;\r\n  width: 100%;\r\n\r\n  background-image: url('home_background.jpg');\r\n  background-color: rgb(112, 112, 112);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;  \r\n  background-position-y: -20vh;\r\n  filter:grayscale(70%) blur(7px);\r\n  transform: scale(1.4);\r\n  z-index: -1;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%] {\r\n  \r\n  transition: 0.5s;\r\n  padding: 2% 2%;\r\n  width: 20vw;\r\n  height: 4vh;\r\n  font-size: 90%;\r\n  opacity: 0.9;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover {\r\n  transition: 0.4;\r\n  background-color: darkslategray;\r\n  box-shadow: 0 0 10px darkslategray;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n\r\n}\r\n\r\n#container0[_ngcontent-%COMP%]:hover {\r\n  height: 53%;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]:hover {\r\n  height: 70%;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]:hover {\r\n  height: 30%;\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  transition: 0.5s 0.1s;\r\n  opacity: 1;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  color: white;\r\n  font-size: 1.5vmax;\r\n  text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  height:0.5px;\r\n  border-width:0;\r\n  background-color:white;\r\n  width: 100%;\r\n  margin: 1% 0% 5% 0%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.1s;\r\n   text-align: justify;\r\n   color: lightgray;\r\n   margin: 0% 1% 0% 1%;\r\n   font-weight: 200;\r\n   opacity: 0;\r\n   font-size: 2.1vmin;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0VBRVgsNENBQXVEO0VBQ3ZELG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QiwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFdBQVc7O0FBRWI7O0FBRUE7RUFDRTs7OztHQUlDO0VBQ0QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZOztBQUVkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxXQUFXOztBQUViOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7R0FDZixtQkFBbUI7R0FDbkIsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsVUFBVTtHQUNWLGtCQUFrQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLndvcmtzcGFjZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogODd2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLndvcmtzcGFjZSA+IC5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAxMjAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2hvbWVfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgIFxyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTIwdmg7XHJcbiAgZmlsdGVyOmdyYXlzY2FsZSg3MCUpIGJsdXIoN3B4KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XHJcbiAgei1pbmRleDogLTE7XHJcblxyXG59XHJcblxyXG4udGV4dENvbnRhaW5lciB7XHJcbiAgLypcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgbGVmdDogNDAlO1xyXG4gICovXHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nOiAyJSAyJTtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDR2aDtcclxuICBmb250LXNpemU6IDkwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcblxyXG59XHJcblxyXG4udGV4dENvbnRhaW5lcjpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogMC40O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggZGFya3NsYXRlZ3JheTtcclxufVxyXG5cclxuI2NvbnRhaW5lcjEge1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjA6aG92ZXIge1xyXG4gIGhlaWdodDogNTMlO1xyXG59XHJcblxyXG4jY29udGFpbmVyMTpob3ZlciB7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbn1cclxuXHJcbiNjb250YWluZXIyOmhvdmVyIHtcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLnRleHRDb250YWluZXI6aG92ZXIgcCB7XHJcbiAgdHJhbnNpdGlvbjogMC41cyAwLjFzO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNXZtYXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5ociB7XHJcbiAgaGVpZ2h0OjAuNXB4O1xyXG4gIGJvcmRlci13aWR0aDowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxJSAwJSA1JSAwJTtcclxufVxyXG4gXHJcbnAge1xyXG4gIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgIG1hcmdpbjogMCUgMSUgMCUgMSU7XHJcbiAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgIG9wYWNpdHk6IDA7XHJcbiAgIGZvbnQtc2l6ZTogMi4xdm1pbjtcclxufVxyXG5cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


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
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 0, consts: [[1, "background"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "dashboard-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_1__["DashboardTableComponent"]], styles: ["*[_ngcontent-%COMP%] {\r\n    background-color: rgb(112, 112, 112);\r\n\r\n}\r\n\r\n\r\n.background[_ngcontent-%COMP%] {\r\n    position: static;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    z-index: -9999;    \r\n    top: -13%;\r\n    background-color: rgb(112, 112, 112);\r\n}\r\n\r\n\r\ndashboard-table[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 13%;\r\n    left: 50%;\r\n    transform: translate(-50%, 0%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsU0FBUztJQUNULG9DQUFvQztBQUN4Qzs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG5cclxufVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgei1pbmRleDogLTk5OTk7ICAgIFxyXG4gICAgdG9wOiAtMTMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMiwgMTEyLCAxMTIpO1xyXG59XHJcblxyXG5kYXNoYm9hcmQtdGFibGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMyU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _components_dashboard_dashboard_table_dashboard_table_component__WEBPACK_IMPORTED_MODULE_10__["DashboardTableComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]] }); })();


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








function DashboardTableComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Datum");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r17.datum);
} }
function DashboardTableComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Beh\u00F6rdennummer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r18.behoerdennummer);
} }
function DashboardTableComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Abflugort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r19.abflugort);
} }
function DashboardTableComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ankunftsort");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r20.ankunftsort);
} }
function DashboardTableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Bef\u00F6rderungsklasse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r21.befoerderungsklasse);
} }
function DashboardTableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "PersonenAnzahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r22.personenAnzahl);
} }
function DashboardTableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Emissionen");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DashboardTableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r23.emissionen);
} }
function DashboardTableComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 17);
} }
function DashboardTableComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 18);
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class DashboardTableComponent {
    constructor() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['datum', 'behoerdennummer', 'abflugort', 'ankunftsort', 'befoerderungsklasse', 'personenAnzahl', 'emissionen'];
        this.dataSource = new _dashboard_table_datasource__WEBPACK_IMPORTED_MODULE_3__["DashboardTableDataSource"]();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
DashboardTableComponent.ɵfac = function DashboardTableComponent_Factory(t) { return new (t || DashboardTableComponent)(); };
DashboardTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardTableComponent, selectors: [["dashboard-table"]], viewQuery: function DashboardTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 27, vars: 7, consts: [[1, "mat-elevation-z8", "data-table"], ["mat-table", "", "matSort", "", "aria-label", "Elements", 1, "full-width-table"], ["matColumnDef", "datum"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "behoerdennummer"], ["matColumnDef", "abflugort"], ["matColumnDef", "ankunftsort"], ["matColumnDef", "befoerderungsklasse"], ["matColumnDef", "personenAnzahl"], ["matColumnDef", "emissionen"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DashboardTableComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.dataSource == null ? null : ctx.dataSource.data == null ? null : ctx.dataSource.data.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".full-width-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.data-table[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 20px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZGFzaGJvYXJkLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mdWxsLXdpZHRoLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXRhLXRhYmxlIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbiJdfQ== */"] });


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

class InputsComponent {
    constructor() { }
    ngOnInit() {
    }
}
InputsComponent.ɵfac = function InputsComponent_Factory(t) { return new (t || InputsComponent)(); };
InputsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputsComponent, selectors: [["app-inputs"]], decls: 7, vars: 0, template: function InputsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inputs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Helloooo im a placehoder for inputs!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Feel free to implement me :)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dHMuY29tcG9uZW50LmNzcyJ9 */"] });


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



// TODO: replace this with real data from your application
const EXAMPLE_DATA = [
    { datum: "2020/04/01", behoerdennummer: "11111", abflugort: "AAA", ankunftsort: "LLL", befoerderungsklasse: "ECO", personenAnzahl: "1", emissionen: "5kg" },
    { datum: "2020/04/02", behoerdennummer: "22222", abflugort: "BBB", ankunftsort: "KKK", befoerderungsklasse: "BUS", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/03", behoerdennummer: "33333", abflugort: "CCC", ankunftsort: "JJJ", befoerderungsklasse: "ECO", personenAnzahl: "3", emissionen: "5kg" },
    { datum: "2020/04/04", behoerdennummer: "44444", abflugort: "DDD", ankunftsort: "III", befoerderungsklasse: "BUS", personenAnzahl: "4", emissionen: "5kg" },
    { datum: "2020/04/05", behoerdennummer: "55555", abflugort: "EEE", ankunftsort: "HHH", befoerderungsklasse: "ECO", personenAnzahl: "5", emissionen: "5kg" },
    { datum: "2020/04/06", behoerdennummer: "66666", abflugort: "FFF", ankunftsort: "GGG", befoerderungsklasse: "BUS", personenAnzahl: "6", emissionen: "5kg" },
    { datum: "2020/04/07", behoerdennummer: "77777", abflugort: "GGG", ankunftsort: "FFF", befoerderungsklasse: "ECO", personenAnzahl: "7", emissionen: "5kg" },
    { datum: "2020/04/08", behoerdennummer: "88888", abflugort: "HHH", ankunftsort: "EEE", befoerderungsklasse: "BUS", personenAnzahl: "8", emissionen: "5kg" },
    { datum: "2020/04/09", behoerdennummer: "99999", abflugort: "III", ankunftsort: "DDD", befoerderungsklasse: "ECO", personenAnzahl: "9", emissionen: "5kg" },
    { datum: "2020/04/10", behoerdennummer: "00000", abflugort: "JJJ", ankunftsort: "CCC", befoerderungsklasse: "BUS", personenAnzahl: "10", emissionen: "5kg" },
    { datum: "2020/04/11", behoerdennummer: "12345", abflugort: "KKK", ankunftsort: "BBB", befoerderungsklasse: "ECO", personenAnzahl: "11", emissionen: "5kg" },
    { datum: "2020/04/12", behoerdennummer: "12345", abflugort: "LLL", ankunftsort: "AAA", befoerderungsklasse: "BUS", personenAnzahl: "12", emissionen: "5kg" },
    { datum: "2020/04/13", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/14", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/15", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/16", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/17", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/18", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/19", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/20", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/21", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/22", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/23", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/24", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/25", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/26", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
    { datum: "2020/04/27", behoerdennummer: "12345", abflugort: "MUC", ankunftsort: "LAX", befoerderungsklasse: "ECO", personenAnzahl: "2", emissionen: "5kg" },
];
/**
 * Data source for the DashboardTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
class DashboardTableDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["DataSource"] {
    constructor() {
        super();
        this.data = EXAMPLE_DATA;
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function FormsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 16);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FormsComponent_div_5_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.startDate = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-datepicker-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-datepicker", null, 20);
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
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_div_5_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r14.inputData[ctx_r14.currentIndex][1] = "Economy"; return ctx_r14.goToIndex(ctx_r14.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ECO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_div_5_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r16.inputData[ctx_r16.currentIndex][1] = "Business"; return ctx_r16.goToIndex(ctx_r16.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "BUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FormsComponent_div_5_div_1_Template, 2, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormsComponent_div_5_div_2_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormsComponent_div_5_div_3_Template, 5, 0, "div", 14);
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
function FormsComponent_ng_template_6_div_2_Template(rf, ctx) { if (rf & 1) {
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
    const entry_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r18[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r18[1]);
} }
function FormsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FormsComponent_ng_template_6_div_2_Template, 9, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.inputData);
} }
function FormsComponent_img_34_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_34_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.goToIndex(ctx_r19.currentIndex - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormsComponent_img_35_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_35_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.goToIndex(ctx_r21.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FormsComponent {
    constructor() {
        /**
         * Array with the information we need from the user
         */
        this.startDate = new Date("2021-10-8");
        this.inputData = [
            ["Datum", this.datePrint(this.startDate)],
            ["Behördennummer", ""],
            ["Abflugsort", ""],
            ["Ankunftsort", ""],
            ["Beförderungsklasse", ""],
            ["Personenanzahl", ""]
        ];
        /**
         * Placeholder information for input fields. Helps the user understand what belongs into that field
         * DE = German
         */
        this.placeholder_DE = ["z.B. 012345", "z.B. MUC", "z.B. SPC", "z.B. ECO/BUS", "z.B. 1"];
        /**
         * Title for the titles
         */
        this.inputTitle_DE = ["Datum", "Behördennummer", "Abflugsort", "Ankunftsort", "Beförderungsklasse", "Personenanzahl", "Zusammenfassung"];
        this.progressPercent = [0, 11, 25, 37.5, 51, 70, 82, 100];
        this.currentIndex = 0;
        this.showSummary = false;
        this.correctAns = true;
        /**
         * Specifies RegExpressions for answers in the forms
         */
        this.regExps = [
            //DATE
            new RegExp("^[0-9][0-9]*$"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("Economy|Business"),
            new RegExp("^[1-9][0-9]*$")
        ];
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
        if (this.currentIndex > 0) {
            this.correctAns = this.currentIndex < 6 ?
                this.regExps[this.currentIndex - 1].test(this.inputData[this.currentIndex][1]) : true;
        }
        if (this.correctAns) {
            this.currentIndex = index;
            this.showSummary = this.currentIndex > 5;
        }
    }
    datePrint(date) {
        let dateString = this.startDate.getUTCDay() + "/" + this.startDate.getMonth() + "/" + this.startDate.getFullYear();
        return dateString;
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], decls: 36, vars: 9, consts: [[1, "workspace"], [1, "container"], ["id", "inputTitle"], [4, "ngIf", "ngIfElse"], ["summary", ""], [1, "progressbarContainer"], ["id", "doneBar", 1, "progressbar"], ["id", "currentBar", 1, "progressbar"], ["id", "leftBar", 1, "progressbar"], [3, "click"], ["class", "navArrow", "id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 3, "click", 4, "ngIf"], ["class", "navArrow", "id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 3, "click", 4, "ngIf"], ["class", "inputField", 4, "ngIf"], ["class", "datepicker", 4, "ngIf"], ["class", "flightclass", 4, "ngIf"], [1, "inputField"], ["type", "text", 1, "inputField", 3, "value", "placeholder", "keyup", "keyup.enter"], [1, "datepicker"], ["matInput", "", 1, "datepickerInput", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["datepicker", ""], [1, "flightclass"], [1, "eco", 3, "click"], [1, "bus", 3, "click"], [1, "summary"], [4, "ngFor", "ngForOf"], ["id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 1, "navArrow", 3, "click"], ["id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 1, "navArrow", 3, "click"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FormsComponent_div_5_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FormsComponent_ng_template_6_Template, 3, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_14_listener() { return ctx.goToIndex(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Datum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_17_listener() { return ctx.goToIndex(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Beh\u00F6rdennr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_20_listener() { return ctx.goToIndex(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Abflugsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_23_listener() { return ctx.goToIndex(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Ankunftsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_26_listener() { return ctx.goToIndex(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Bef\u00F6rderungsklasse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_29_listener() { return ctx.goToIndex(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Personen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_32_listener() { return ctx.goToIndex(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Zusammenfassung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, FormsComponent_img_34_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, FormsComponent_img_35_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.inputTitle_DE[ctx.currentIndex]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 6 ? ctx.progressPercent[ctx.currentIndex] : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 6 ? ctx.progressPercent[ctx.currentIndex + 1] : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentIndex != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".workspace[_ngcontent-%COMP%] {\r\n  height: 88vh;\r\n  background-color: rgb(172,190,171);\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover {\r\n  width: 71vw;\r\n  height: 60.5vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  transition: 200ms;\r\n  position: relative;\r\n  background-color: rgb(108,136,110);\r\n  width: 70vw;\r\n  height: 60vh;\r\n  margin: auto auto;\r\n  border-radius: 50px;\r\n  box-shadow: 0 0 3px black;\r\n}\r\n\r\n#inputTitle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 35%;\r\n  color: white;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 150%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 9999em;\r\n  height: 25px;\r\n  outline: none;\r\n  text-align: center;\r\n  font-size: 1em;\r\n  background-color: rgb(219, 219, 219);\r\n  color: #53833c;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #4c723a;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.datepicker[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 54%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 25px;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 12%;\r\n  height: 6%;\r\n  width: auto;\r\n  transition: 200ms;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  height: 6.5%;\r\n}\r\n\r\n#leftNavArrow[_ngcontent-%COMP%] {\r\n  left: 46%;\r\n}\r\n\r\n#rightNavArrow[_ngcontent-%COMP%] {\r\n  right: 46%;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.summary[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 60%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  font-size: 1.7vmin;\r\n  font-weight: 200;\r\n  color: rgb(214, 214, 214);\r\n}\r\n\r\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-weight: 400;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 5%;\r\n  width: 90%;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  list-style: none;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: initial;\r\n\r\n  width: 100%;\r\n  height: 3vh;\r\n  margin: 0 3% 0 3%;\r\n  padding: 0;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 1.5vmin;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 100;\r\n  padding-left: 6.2%;\r\n  padding-right: 6.5%;\r\n  -webkit-user-select: none;   \r\n  user-select: none; \r\n  cursor: pointer;\r\n  transition: 500ms ease-out;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  font-size: 100%;\r\n}\r\n\r\n.progressbar[_ngcontent-%COMP%] {\r\n  height: 2vh;\r\n  position: absolute;\r\n  border-radius: 999rem;\r\n  top: 15%;\r\n  transition: 500ms ease-in-out;\r\n}\r\n\r\n#doneBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #436b2f;\r\n  z-index: 3;\r\n}\r\n\r\n#currentBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #508238;\r\n  z-index: 2;\r\n  transition-delay: 400ms;\r\n}\r\n\r\n#leftBar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #99ac90;\r\n  z-index: 1;\r\n}\r\n\r\n  .mat-focused .mat-form-field-label {\r\n  opacity: 0;\r\n }\r\n\r\n .mat-form-field-underline {\r\n  opacity: 0;\r\n }\r\n\r\n  .mat-form-field-label {\r\n  opacity: 0;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n  background-color: rgb(214, 214, 214);\r\n  color: #53833c;\r\n  width: 100px;\r\n  height: 25px;\r\n  font-size: 1em;\r\n  transition: 500ms;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.flightclass[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:focus  {  \r\n  background-color: white;\r\n}\r\n\r\n.eco[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 9999px;\r\n  border-bottom-left-radius: 9999px;\r\n}\r\n\r\n.bus[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 9999px;\r\n  border-bottom-right-radius: 9999px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFFLFdBQVcsRUFDZCxZQUFZLEVBQ2IsZUFBZTtFQUN0QyxpQkFBaUIsRUFBRSxhQUFhO0VBQ2hDLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0NBQ1g7O0FBRUE7RUFDQyxVQUFVO0NBQ1g7O0FBRUE7RUFDQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsOEJBQThCO0VBQzlCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7QUFDcEMiLCJmaWxlIjoiZm9ybXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jrc3BhY2Uge1xyXG4gIGhlaWdodDogODh2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcyLDE5MCwxNzEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIge1xyXG4gIHdpZHRoOiA3MXZ3O1xyXG4gIGhlaWdodDogNjAuNXZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwOCwxMzYsMTEwKTtcclxuICB3aWR0aDogNzB2dztcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4jaW5wdXRUaXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMzUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OTllbTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE5LCAyMTkpO1xyXG4gIGNvbG9yOiAjNTM4MzNjO1xyXG59XHJcblxyXG4uaW5wdXRGaWVsZDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRjNzIzYTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5kYXRlcGlja2VyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLm5hdkFycm93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMiU7XHJcbiAgaGVpZ2h0OiA2JTtcclxuICB3aWR0aDogYXV0bztcclxuICB0cmFuc2l0aW9uOiAyMDBtcztcclxufVxyXG5cclxuLm5hdkFycm93OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaGVpZ2h0OiA2LjUlO1xyXG59XHJcblxyXG4jbGVmdE5hdkFycm93IHtcclxuICBsZWZ0OiA0NiU7XHJcbn1cclxuXHJcbiNyaWdodE5hdkFycm93IHtcclxuICByaWdodDogNDYlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5zdW1tYXJ5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMS43dm1pbjtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XHJcbn1cclxuLnN1bW1hcnkgaDMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNSU7XHJcbiAgbGVmdDogNSU7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIHVsIHtcclxuICB6LWluZGV4OiAxMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGluaXRpYWw7XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogM3ZoO1xyXG4gIG1hcmdpbjogMCAzJSAwIDMlO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhckNvbnRhaW5lciBsaSB7XHJcbiAgZm9udC1zaXplOiAxLjV2bWluO1xyXG59XHJcbi5wcm9ncmVzc2JhckNvbnRhaW5lciBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDYuMiU7XHJcbiAgcGFkZGluZy1yaWdodDogNi41JTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRTEwKy9FZGdlICovXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXJDb250YWluZXIgYTpob3ZlciB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXIge1xyXG4gIGhlaWdodDogMnZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlyZW07XHJcbiAgdG9wOiAxNSU7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNkb25lQmFyIHtcclxuICAvKndpZHRoIGlzIGRlbGNhcmVkIGJ5IG5nKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM2YjJmO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuI2N1cnJlbnRCYXIge1xyXG4gIC8qd2lkdGggaXMgZGVsY2FyZWQgYnkgbmcqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDgyMzg7XHJcbiAgei1pbmRleDogMjtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtcztcclxufVxyXG5cclxuI2xlZnRCYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTlhYzkwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gfVxyXG4gXHJcbiA6Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gfSBcclxuXHJcbiA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbiBcclxuLmZsaWdodGNsYXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uZmxpZ2h0Y2xhc3MgPiBidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICBjb2xvcjogIzUzODMzYztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIHRyYW5zaXRpb246IDUwMG1zO1xyXG59XHJcblxyXG4uZmxpZ2h0Y2xhc3MgPiBidXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZsaWdodGNsYXNzID4gYnV0dG9uOmZvY3VzICB7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5lY28ge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDk5OTlweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA5OTk5cHg7XHJcbn1cclxuXHJcbi5idXMge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5OTk5cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDk5OTlweDtcclxufVxyXG5cclxuIl19 */"], data: { animation: [
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