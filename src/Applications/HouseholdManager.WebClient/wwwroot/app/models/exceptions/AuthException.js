"use strict";
const BaseException_1 = require("./BaseException");
class AuthException extends BaseException_1.BaseException {
    constructor(returnUrl, message) {
        super(message);
        this.returnUrl = returnUrl;
        this.name = "AuthException";
    }
}
exports.AuthException = AuthException;
//# sourceMappingURL=AuthException.js.map