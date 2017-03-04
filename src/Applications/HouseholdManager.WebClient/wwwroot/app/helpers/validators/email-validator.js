"use strict";
const utils_1 = require("../common/utils");
class EmailValidator {
    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    static createValidator() {
        return function validate(control) {
            if (!utils_1.Utils.isControlValuePresented(control))
                return null;
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if (pattern.test(control.value)) {
                return null;
            }
            return { format: true };
        };
    }
}
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email-validator.js.map