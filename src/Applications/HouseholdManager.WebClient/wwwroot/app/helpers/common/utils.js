"use strict";
class Utils {
    static isControlValuePresented(control) {
        let value = control.value;
        if (value === undefined || value === null)
            return false;
        return value !== '';
    }
    ;
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map