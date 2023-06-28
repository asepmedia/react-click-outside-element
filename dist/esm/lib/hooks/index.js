import { useEffect } from "react";
export function useOutsideAlerter(ref, onClick, deps) {
    if (deps === void 0) { deps = []; }
    useEffect(function () {
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
//# sourceMappingURL=index.js.map