"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SafePipe = void 0;
var core_1 = require("@angular/core");
/**
 * Sanitize HTML
 */
var SafePipe = /** @class */ (function () {
    /**
     * Pipe Constructor
     *
     * @param _sanitizer: DomSanitezer
     */
    // tslint:disable-next-line
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * Transform
     *
     * @param value: string
     * @param type: string
     */
    SafePipe.prototype.transform = function (url, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(url);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(url);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(url);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(url);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(url);
            default:
                return this._sanitizer.bypassSecurityTrustHtml(url);
        }
    };
    SafePipe = __decorate([
        core_1.Pipe({
            name: 'safe'
        })
    ], SafePipe);
    return SafePipe;
}());
exports.SafePipe = SafePipe;
