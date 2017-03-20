"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.isControlValuePresented = function (control) {
        var value = control.value;
        if (value === undefined || value === null)
            return false;
        return value !== '';
    };
    ;
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map