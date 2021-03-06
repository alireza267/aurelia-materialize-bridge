"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var aurelia_framework_1 = require("aurelia-framework");
var MdScrollSpy = /** @class */ (function () {
    function MdScrollSpy(element) {
        this.element = element;
    }
    MdScrollSpy.prototype.attached = function () {
        $(this.target, this.element).scrollSpy();
    };
    MdScrollSpy.prototype.detached = function () {
        // destroy handler not available
    };
    tslib_1.__decorate([
        aurelia_framework_1.bindable,
        tslib_1.__metadata("design:type", String)
    ], MdScrollSpy.prototype, "target", void 0);
    MdScrollSpy = tslib_1.__decorate([
        aurelia_framework_1.customAttribute("md-scrollspy"),
        aurelia_framework_1.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdScrollSpy);
    return MdScrollSpy;
}());
exports.MdScrollSpy = MdScrollSpy;
