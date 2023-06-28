"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var lib_1 = tslib_1.__importDefault(require("./lib"));
function App() {
    return (react_1.default.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 10,
            padding: "20px",
        } },
        react_1.default.createElement("div", null, "Click outside here, and check the console"),
        react_1.default.createElement(lib_1.default, { onClickOutside: function (e) {
                var clientX = e.clientX, clientY = e.clientY;
                console.log({ clientX: clientX, clientY: clientY });
                console.log(e, "Element where clicked");
                alert("You click at outside input");
            } },
            react_1.default.createElement("input", { type: "text", style: {
                    border: "1px solid #ddd",
                    padding: "6px 8px 6px 8px",
                    minWidth: "350px",
                    borderRadius: "8px",
                }, placeholder: "Type something here..." })),
        react_1.default.createElement("div", null, "Click outside here, and check the console")));
}
exports.default = App;
//# sourceMappingURL=App.js.map