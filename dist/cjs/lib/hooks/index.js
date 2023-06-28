"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutsideAlerter = void 0;
var react_1 = require("react");
function useOutsideAlerter(ref, onClick, deps) {
    if (deps === void 0) { deps = []; }
    (0, react_1.useEffect)(function () {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClick(event);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, deps]);
}
exports.useOutsideAlerter = useOutsideAlerter;
//# sourceMappingURL=index.js.map