(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yobry\bems\code\frontend\src\main.ts */"zUnb");


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
    } }, styles: ["*[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 85vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content:space-evenly;\r\n}\r\n\r\n.workspace[_ngcontent-%COMP%]    > .background[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  height: 120%;\r\n  width: 100%;\r\n\r\n  background-image: url('home_background.jpg');\r\n  background-color: rgb(112, 112, 112);\r\n  background-repeat: no-repeat;\r\n  background-size: cover;  background-position-y: -20vh;\r\n  filter:grayscale(70%) blur(7px);\r\n  transform: scale(1.4);\r\n  z-index: -1;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%] {\r\n  \r\n  transition: 0.5s;\r\n  padding: 2% 2%;\r\n  width: 20vw;\r\n  height: 4vh;\r\n  font-size: 90%;\r\n  opacity: 0.9;\r\n\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover {\r\n  transition: 0.4;\r\n  background-color: darkslategray;\r\n  box-shadow: 0 0 10px darkslategray;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n\r\n}\r\n\r\n#container0[_ngcontent-%COMP%]:hover {\r\n  height: 53%;\r\n}\r\n\r\n#container1[_ngcontent-%COMP%]:hover {\r\n  height: 70%;\r\n}\r\n\r\n#container2[_ngcontent-%COMP%]:hover {\r\n  height: 30%;\r\n}\r\n\r\n.textContainer[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\r\n  transition: 0.5s 0.1s;\r\n  opacity: 1;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  color: white;\r\n  font-size: 1.5vmax;\r\n  text-align: center;\r\n}\r\n\r\nhr[_ngcontent-%COMP%] {\r\n  height:0.5px;\r\n  border-width:0;\r\n  background-color:white;\r\n  width: 100%;\r\n  margin: 1% 0% 5% 0%;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  transition: 0.1s;\r\n   text-align: justify;\r\n   color: lightgray;\r\n   margin: 0% 1% 0% 1%;\r\n   font-weight: 200;\r\n   opacity: 0;\r\n   font-size: 2.1vmin;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7O0VBRVgsNENBQXVEO0VBQ3ZELG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsc0JBQXNCLEdBQUcsNEJBQTRCO0VBQ3JELCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsV0FBVzs7QUFFYjs7QUFFQTtFQUNFOzs7O0dBSUM7RUFDRCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtHQUNmLG1CQUFtQjtHQUNuQixnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLGdCQUFnQjtHQUNoQixVQUFVO0dBQ1Ysa0JBQWtCO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud29ya3NwYWNlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ud29ya3NwYWNlID4gLmJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEyMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaG9tZV9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLCAxMTIsIDExMik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMjB2aDtcclxuICBmaWx0ZXI6Z3JheXNjYWxlKDcwJSkgYmx1cig3cHgpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbn1cclxuXHJcbi50ZXh0Q29udGFpbmVyIHtcclxuICAvKlxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIwJTtcclxuICBsZWZ0OiA0MCU7XHJcbiAgKi9cclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIHBhZGRpbmc6IDIlIDIlO1xyXG4gIHdpZHRoOiAyMHZ3O1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuXHJcbn1cclxuXHJcbi50ZXh0Q29udGFpbmVyOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAwLjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JheTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCBkYXJrc2xhdGVncmF5O1xyXG59XHJcblxyXG4jY29udGFpbmVyMSB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyMDpob3ZlciB7XHJcbiAgaGVpZ2h0OiA1MyU7XHJcbn1cclxuXHJcbiNjb250YWluZXIxOmhvdmVyIHtcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuI2NvbnRhaW5lcjI6aG92ZXIge1xyXG4gIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4udGV4dENvbnRhaW5lcjpob3ZlciBwIHtcclxuICB0cmFuc2l0aW9uOiAwLjVzIDAuMXM7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41dm1heDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhyIHtcclxuICBoZWlnaHQ6MC41cHg7XHJcbiAgYm9yZGVyLXdpZHRoOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDElIDAlIDUlIDAlO1xyXG59XHJcbiBcclxucCB7XHJcbiAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgbWFyZ2luOiAwJSAxJSAwJSAxJTtcclxuICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgb3BhY2l0eTogMDtcclxuICAgZm9udC1zaXplOiAyLjF2bWluO1xyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


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
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 0;\r\n  width: 99.5%;\r\n  height: 2vh;\r\n  line-height: 2vh;\r\n  background-color: #202020;\r\n  text-align: left;\r\n  padding: 0 0 0 0.5%;\r\n  color: white;\r\n  font-size: 1vh;\r\n  font-weight: 100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDk5LjUlO1xyXG4gIGhlaWdodDogMnZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAydmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjAyMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMCAwIDAuNSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMXZoO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuIl19 */"] });


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

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Helloooo im a placehoder for dashboard!! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Feel free to implement me :)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


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
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"], _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_8__["InputsComponent"], _components_help_help_component__WEBPACK_IMPORTED_MODULE_9__["HelpComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(400, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
        _components_inputs_inputs_component__WEBPACK_IMPORTED_MODULE_7__["InputsComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "background-color": a0 }; };
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { notify: "notify" }, decls: 25, vars: 11, consts: [[3, "ngStyle"], [1, "logo", 3, "click"], [1, "vertical-center"], ["src", "assets/simpleLogo.png", "alt", "BEMS logo", 1, "logo_pic"], [1, "text"], [1, "upperText"], [1, "bottomText"], [1, "item"], [3, "click"], [1, "divider", "divider1"], [1, "divider", "divider2"], [1, "divider", "divider3"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.loadPage("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BEMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Bavarian Emission Meausurement System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.loadPage("dashboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() { return ctx.loadPage("forms"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Formulare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_19_listener() { return ctx.loadPage("inputs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Eintr\u00E4ge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() { return ctx.loadPage("help"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hilfe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.page == "forms" ? "#334e33" : "#383838"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "dashboard" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "forms" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "inputs" ? "white" : "#b6b6b6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.page == "help" ? "white" : "#b6b6b6");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["@font-face {font-family: \"Microsoft Yi Baiti\"; src: url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.eot\"); src: url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/5d22bd0816f911a4c90e5d8661157ef9.svg#Microsoft Yi Baiti\") format(\"svg\"); }\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: left;\r\n  cursor: pointer;\r\n  transition: 200ms;\r\n  width: 24vw;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]:hover {\r\n  transform: scale(1.02);\r\n  -ms-transform:  scale(1.02);\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  height: 7vh;\r\n  transition: 200ms;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]  {\r\n  margin-left: 7%;\r\n  transform: translateY(-5%);\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]    > .upperText[_ngcontent-%COMP%] {\r\n  transform: translateY(28%);\r\n  font-weight: 400;\r\n  font-size: 4vmin;\r\n  letter-spacing: 0.5vmin;\r\n  font-family: 'Microsoft Yi Baiti';\r\n  color: white;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%]    > .bottomText[_ngcontent-%COMP%] {\r\n  font-weight: 200;\r\n  font-size: 0.8vw;\r\n  color: #8e9c9b;\r\n  border: none;\r\n  margin: 0;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  top: 0%;\r\n  height: 5vh;\r\n  padding: 4vh 3% 4vh 1%;\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  vertical-align: middle;\r\n  line-height: 5vh;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 300;\r\n  font-size: 2vw;\r\n\r\n  margin: 0 4vw;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]:last-child {\r\n  margin-right: 0;\r\n  border-right: none;\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: 0.3s;\r\n  color: #b6b6b6;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white !important;\r\n  cursor: pointer;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]    > .divider[_ngcontent-%COMP%] {\r\n  border-left: 1px solid #969696;\r\n  position: absolute;\r\n  height: 130%;\r\n  top: -15%;\r\n}\r\n\r\n.divider1[_ngcontent-%COMP%] {\r\n  left: 31.5%;\r\n}\r\n\r\n.divider2[_ngcontent-%COMP%] {\r\n  left: 60.5%;\r\n}\r\n\r\n.divider3[_ngcontent-%COMP%] {\r\n  left: 86.5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksaUNBQWlDLEVBQUUsMEVBQTBFLEVBQUUsK2RBQStkLEVBQUU7O0FBRTVsQjtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFFUiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFFZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFFRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYzs7RUFFZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcIk1pY3Jvc29mdCBZaSBCYWl0aVwiOyBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvNWQyMmJkMDgxNmY5MTFhNGM5MGU1ZDg2NjExNTdlZjkuZW90XCIpOyBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvNWQyMmJkMDgxNmY5MTFhNGM5MGU1ZDg2NjExNTdlZjkuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC81ZDIyYmQwODE2ZjkxMWE0YzkwZTVkODY2MTE1N2VmOS53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC81ZDIyYmQwODE2ZjkxMWE0YzkwZTVkODY2MTE1N2VmOS53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvNWQyMmJkMDgxNmY5MTFhNGM5MGU1ZDg2NjExNTdlZjkudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzVkMjJiZDA4MTZmOTExYTRjOTBlNWQ4NjYxMTU3ZWY5LnN2ZyNNaWNyb3NvZnQgWWkgQmFpdGlcIikgZm9ybWF0KFwic3ZnXCIpOyB9XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG59XHJcblxyXG4ubG9nbzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAtbXMtdHJhbnNmb3JtOiAgc2NhbGUoMS4wMik7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGhlaWdodDogN3ZoO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG59XHJcblxyXG4ubG9nbyA+IC50ZXh0ICB7XHJcbiAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxufVxyXG5cclxuLmxvZ28gPiAudGV4dCA+IC51cHBlclRleHQge1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjglKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjglKTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogNHZtaW47XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXZtaW47XHJcbiAgZm9udC1mYW1pbHk6ICdNaWNyb3NvZnQgWWkgQmFpdGknO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28gPiAudGV4dCA+IC5ib3R0b21UZXh0IHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44dnc7XHJcbiAgY29sb3I6ICM4ZTljOWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDAlO1xyXG4gIGhlaWdodDogNXZoO1xyXG4gIHBhZGRpbmc6IDR2aCAzJSA0dmggMSU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dmg7XHJcbn1cclxuXHJcbm5hdiA+IC5pdGVtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDJ2dztcclxuXHJcbiAgbWFyZ2luOiAwIDR2dztcclxufVxyXG5cclxubmF2ID4gLml0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuXHJcbm5hdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBjb2xvcjogI2I2YjZiNjtcclxufVxyXG5cclxubmF2ID4gLml0ZW0gYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uYXYgPiAuZGl2aWRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTY5Njk2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDEzMCU7XHJcbiAgdG9wOiAtMTUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjEge1xyXG4gIGxlZnQ6IDMxLjUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjIge1xyXG4gIGxlZnQ6IDYwLjUlO1xyXG59XHJcblxyXG4uZGl2aWRlcjMge1xyXG4gIGxlZnQ6IDg2LjUlO1xyXG59XHJcbiJdfQ== */"] });


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



function FormsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function FormsComponent_div_3_Template_input_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.getInputText($event.target.value); })("keyup.enter", function FormsComponent_div_3_Template_input_keyup_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goToIndex(ctx_r7.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.inputData[ctx_r0.currentIndex][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.inputData[ctx_r0.currentIndex][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx_r0.placeholder_DE[ctx_r0.currentIndex]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@validityState", ctx_r0.correctAns);
} }
function FormsComponent_ng_template_4_div_4_Template(rf, ctx) { if (rf & 1) {
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
    const entry_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r9[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](entry_r9[1]);
} }
function FormsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Zusammenfassung");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormsComponent_ng_template_4_div_4_Template, 9, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.inputData);
} }
function FormsComponent_img_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_26_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.goToIndex(ctx_r10.currentIndex - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FormsComponent_img_27_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_img_27_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.goToIndex(ctx_r12.currentIndex + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FormsComponent {
    constructor() {
        /**
         * Array with the information we need from the user
         */
        this.inputData = [
            ["Behördennummer", ""],
            ["Abflugsort", ""],
            ["Ankunftsort", ""],
            ["Flugklasse", ""]
        ];
        /**
         * Placeholder information for input fields. Helps the user understand what belongs into that field
         * DE = German
         */
        this.placeholder_DE = ["z.B. 012345", "z.B. MUC", "z.B. SPC", "z.B. ECO/BUS"];
        /**
         * Title for the
         */
        //TODO: CHANGE THIS DUPLICATEED CODE //FIX
        this.inputTitle_DE = ["Behördennummer", "Abflugsort", "Ankunftsort", "Flugklasse"];
        this.currentIndex = 0;
        this.showSummary = false;
        this.correctAns = true;
        /**
         * Specifies RegExpressions for answers in the forms
         */
        this.regExps = [
            new RegExp("[0-9][0-9]*"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("^([A-Z]{3})$"),
            new RegExp("ECO|BUS")
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
        this.correctAns = this.currentIndex < 4 ?
            this.regExps[this.currentIndex].test(this.inputData[this.currentIndex][1]) : true;
        if (this.correctAns) {
            this.currentIndex = index;
            this.showSummary = this.currentIndex > 3;
        }
    }
}
FormsComponent.ɵfac = function FormsComponent_Factory(t) { return new (t || FormsComponent)(); };
FormsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormsComponent, selectors: [["app-forms"]], decls: 28, vars: 8, consts: [[1, "workspace"], [1, "container"], [4, "ngIf", "ngIfElse"], ["summary", ""], [1, "progressbarContainer"], ["id", "doneBar", 1, "progressbar"], ["id", "currentBar", 1, "progressbar"], ["id", "leftBar", 1, "progressbar"], [3, "click"], ["class", "navArrow", "id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 3, "click", 4, "ngIf"], ["class", "navArrow", "id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 3, "click", 4, "ngIf"], ["id", "inputTitle"], ["type", "text", 1, "inputField", 3, "value", "placeholder", "keyup", "keyup.enter"], [1, "summary"], [4, "ngFor", "ngForOf"], ["id", "leftNavArrow", "src", "assets/nav_arrow.png", "alt", "Left Navigation Arrow", 1, "navArrow", 3, "click"], ["id", "rightNavArrow", "src", "assets/nav_arrow.png", "alt", "Right Navigation Arrow", 1, "navArrow", 3, "click"]], template: function FormsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FormsComponent_div_3_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FormsComponent_ng_template_4_Template, 5, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_12_listener() { return ctx.goToIndex(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Beh\u00F6rdennr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_15_listener() { return ctx.goToIndex(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Abflugsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_18_listener() { return ctx.goToIndex(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Ankunftsort");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_21_listener() { return ctx.goToIndex(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Flugklasse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FormsComponent_Template_a_click_24_listener() { return ctx.goToIndex(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Zusammenfassung");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, FormsComponent_img_26_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, FormsComponent_img_27_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 4 ? ctx.currentIndex * 20 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.currentIndex < 4 ? ctx.currentIndex * 20 + 18 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentIndex != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.showSummary);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".workspace[_ngcontent-%COMP%] {\r\n  height: 85vh;\r\n  background-color: #dcead6;\r\n  display: flex;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]:hover {\r\n  transition: 100ms;\r\n  width: 65.5vw;\r\n  height: 60.5vh;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  transition: 200ms;\r\n  position: relative;\r\n  background-color: #799f7a;\r\n  width: 65vw;\r\n  height: 60vh;\r\n  margin: auto auto;\r\n  border-radius: 50px;\r\n  box-shadow: 0 0 3px black;\r\n}\r\n\r\n#inputTitle[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 35%;\r\n  color: white;\r\n  text-align: center;\r\n  font-weight: 300;\r\n  font-size: 150%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  border-radius: 9999em;\r\n  height: 25px;\r\n  outline: none;\r\n  text-align: center;\r\n  font-size: 1em;\r\n  background-color: rgb(219, 219, 219);\r\n  color: #53833c;\r\n}\r\n\r\n.inputField[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #4c723a;\r\n  background-color: white;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 12%;\r\n  height: 6%;\r\n  width: auto;\r\n  transition: 200ms;\r\n}\r\n\r\n.navArrow[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  height: 6.5%;\r\n}\r\n\r\n#leftNavArrow[_ngcontent-%COMP%] {\r\n  left: 46%;\r\n}\r\n\r\n#rightNavArrow[_ngcontent-%COMP%] {\r\n  right: 46%;\r\n  transform: rotate(180deg);\r\n}\r\n\r\n.summary[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 55%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  font-weight: 200;\r\n  color: rgb(214, 214, 214);\r\n}\r\n\r\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  font-weight: 400;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: left;\r\n  position: absolute;\r\n  top: 15%;\r\n  left: 10%;\r\n  width: 80%;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  z-index: 10;\r\n  list-style: none;\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  text-align: initial;\r\n\r\n  width: 100%;\r\n  height: 3vh;\r\n  margin: 0 3% 0 3%;\r\n  padding: 0;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 1.5vmin;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: 100;\r\n  padding-left: 6.2%;\r\n  padding-right: 6.5%;\r\n  -webkit-user-select: none;   \r\n  user-select: none; \r\n  cursor: pointer;\r\n  transition: 500ms ease-out;\r\n}\r\n\r\n.progressbarContainer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  font-size: 105%;\r\n}\r\n\r\n.progressbar[_ngcontent-%COMP%] {\r\n  height: 2vh;\r\n  position: absolute;\r\n  border-radius: 999rem;\r\n  top: 15%;\r\n  transition: 500ms ease-in-out;\r\n}\r\n\r\n#doneBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #436b2f;\r\n  z-index: 3;\r\n}\r\n\r\n#currentBar[_ngcontent-%COMP%] {\r\n  \r\n  background-color: #508238;\r\n  z-index: 2;\r\n  transition-delay: 400ms;\r\n}\r\n\r\n#leftBar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  background-color: #99ac90;\r\n  z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1COztFQUVuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUUsV0FBVyxFQUNkLFlBQVksRUFDYixlQUFlO0VBQ3RDLGlCQUFpQixFQUFFLGFBQWE7RUFDaEMsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWiIsImZpbGUiOiJmb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmtzcGFjZSB7XHJcbiAgaGVpZ2h0OiA4NXZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2VhZDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciB7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbiAgd2lkdGg6IDY1LjV2dztcclxuICBoZWlnaHQ6IDYwLjV2aDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgdHJhbnNpdGlvbjogMjAwbXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTlmN2E7XHJcbiAgd2lkdGg6IDY1dnc7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDNweCBibGFjaztcclxufVxyXG5cclxuI2lucHV0VGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDM1JTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBib3JkZXItcmFkaXVzOiA5OTk5ZW07XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxOSwgMjE5KTtcclxuICBjb2xvcjogIzUzODMzYztcclxufVxyXG5cclxuLmlucHV0RmllbGQ6Zm9jdXMge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YzcyM2E7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ubmF2QXJyb3cge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEyJTtcclxuICBoZWlnaHQ6IDYlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zO1xyXG59XHJcblxyXG4ubmF2QXJyb3c6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDYuNSU7XHJcbn1cclxuXHJcbiNsZWZ0TmF2QXJyb3cge1xyXG4gIGxlZnQ6IDQ2JTtcclxufVxyXG5cclxuI3JpZ2h0TmF2QXJyb3cge1xyXG4gIHJpZ2h0OiA0NiU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLnN1bW1hcnkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDU1JTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xyXG59XHJcbi5zdW1tYXJ5IGgzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhckNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUlO1xyXG4gIGxlZnQ6IDEwJTtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3NiYXJDb250YWluZXIgdWwge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzdmg7XHJcbiAgbWFyZ2luOiAwIDMlIDAgMyU7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIGxpIHtcclxuICBmb250LXNpemU6IDEuNXZtaW47XHJcbn1cclxuLnByb2dyZXNzYmFyQ29udGFpbmVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHBhZGRpbmctbGVmdDogNi4yJTtcclxuICBwYWRkaW5nLXJpZ2h0OiA2LjUlO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFMTArL0VkZ2UgKi9cclxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogU3RhbmRhcmQgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogNTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhckNvbnRhaW5lciBhOmhvdmVyIHtcclxuICBmb250LXNpemU6IDEwNSU7XHJcbn1cclxuXHJcbi5wcm9ncmVzc2JhciB7XHJcbiAgaGVpZ2h0OiAydmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXJlbTtcclxuICB0b3A6IDE1JTtcclxuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2RvbmVCYXIge1xyXG4gIC8qd2lkdGggaXMgZGVsY2FyZWQgYnkgbmcqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzZiMmY7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4jY3VycmVudEJhciB7XHJcbiAgLyp3aWR0aCBpcyBkZWxjYXJlZCBieSBuZyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwODIzODtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDQwMG1zO1xyXG59XHJcblxyXG4jbGVmdEJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWFjOTA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"], data: { animation: [
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