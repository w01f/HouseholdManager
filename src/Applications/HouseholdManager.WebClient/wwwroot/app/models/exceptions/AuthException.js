"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseException_1 = require("./BaseException");
var AuthException = (function (_super) {
    __extends(AuthException, _super);
    function AuthException(returnUrl, message) {
        _super.call(this, message);
        this.returnUrl = returnUrl;
        this.name = "AuthException";
    }
    return AuthException;
}(BaseException_1.BaseException));
exports.AuthException = AuthException;
//# sourceMappingURL=AuthException.js.map