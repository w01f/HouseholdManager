"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseException_1 = require("./BaseException");
var ValidationException = (function (_super) {
    __extends(ValidationException, _super);
    function ValidationException(validationResults) {
        _super.call(this, "Validation is failed");
        this.validationResults = validationResults;
        this.name = "ValidationException";
    }
    return ValidationException;
}(BaseException_1.BaseException));
exports.ValidationException = ValidationException;
//# sourceMappingURL=ValidationException.js.map