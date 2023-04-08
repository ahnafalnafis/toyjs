"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
var BaseComponent = (function () {
    function BaseComponent(tagName, attrs) {
        this.tagName = tagName;
        this.attrs = attrs;
        this.element = document.createElement(this.tagName);
    }
    BaseComponent.prototype.render = function (selector) {
        var locations = document.querySelectorAll(selector);
        for (var i in locations) {
            console.log(i);
        }
    };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
