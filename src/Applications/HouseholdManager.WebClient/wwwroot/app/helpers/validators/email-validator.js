"use strict";
var utils_1 = require("../common/utils");
var EmailValidator = (function () {
    function EmailValidator() {
    }
    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    EmailValidator.createValidator = function () {
        return function validate(control) {
            if (!utils_1.Utils.isControlValuePresented(control))
                return null;
            var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (pattern.test(control.value)) {
                return null;
            }
            return { format: true };
        };
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email-validator.js.map