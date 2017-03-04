"use strict";
(function (RequestState) {
    RequestState[RequestState["Success"] = 1] = "Success";
    RequestState[RequestState["Failed"] = -1] = "Failed";
    RequestState[RequestState["NotAuth"] = 0] = "NotAuth";
})(exports.RequestState || (exports.RequestState = {}));
var RequestState = exports.RequestState;
//# sourceMappingURL=RequestState.js.map