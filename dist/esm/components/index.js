import React, { useRef, useState } from "react";
import { useOutsideAlerter } from "../hooks";
function OutsideWrapper(props) {
    // destructuring props
    var children = props.children, onClickOutside = props.onClickOutside;
    // use ref for detect element
    var wrapperRef = useRef(null);
    var _a = useState(false), isClicked = _a[0], setIsClicked = _a[1];
    var firstClicked = function () {
        setIsClicked(true);
    };
    var lastClicked = function () {
        setIsClicked(false);
    };
    // use hooks outside and every change compare to current ref
    useOutsideAlerter(wrapperRef, function (e) {
        if (onClickOutside && isClicked) {
            lastClicked();
            onClickOutside(e);
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: wrapperRef, onClick: firstClicked }, children)));
}
export default React.memo(OutsideWrapper);
//# sourceMappingURL=index.js.map