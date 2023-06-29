"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var hooks_1 = require("../hooks");
function OutsideWrapper(props) {
    // destructuring props
    var children = props.children, onClickOutside = props.onClickOutside;
    // use ref for detect element
    var wrapperRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isClicked = _a[0], setIsClicked = _a[1];
    var firstClicked = function () {
        setIsClicked(true);
    };
    var lastClicked = function () {
        setIsClicked(false);
    };
    // use hooks outside and every change compare to current ref
    (0, hooks_1.useOutsideAlerter)(wrapperRef, function (e) {
        if (onClickOutside && isClicked) {
            lastClicked();
            onClickOutside(e);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { ref: wrapperRef, onClick: firstClicked }, children)));
}
exports.default = react_1.default.memo(OutsideWrapper);
//# sourceMappingURL=index.js.map