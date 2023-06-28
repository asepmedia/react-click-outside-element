import React, { useRef } from "react";
import { useOutsideAlerter } from "../hooks";
function OutsideWrapper(props) {
    // destructuring props
    var children = props.children, onClickOutside = props.onClickOutside;
    // use ref for detect element
    var wrapperRef = useRef(null);
    // use hooks outside and every change compare to current ref
    useOutsideAlerter(wrapperRef, function (e) {
        if (onClickOutside) {
            onClickOutside(e);
        }
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: wrapperRef }, children)));
}
export default React.memo(OutsideWrapper);
//# sourceMappingURL=index.js.map