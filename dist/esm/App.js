import React from "react";
import OutsideWrapperElement from "./lib";
function App() {
    return (React.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 10,
            padding: "20px",
        } },
        React.createElement("div", null, "Click outside here, and check the console"),
        React.createElement(OutsideWrapperElement, { onClickOutside: function (e) {
                var clientX = e.clientX, clientY = e.clientY;
                console.log({ clientX: clientX, clientY: clientY });
                console.log(e, "Element where clicked");
                alert("You click at outside input");
            } },
            React.createElement("input", { type: "text", style: {
                    border: "1px solid #ddd",
                    padding: "6px 8px 6px 8px",
                    minWidth: "350px",
                    borderRadius: "8px",
                }, placeholder: "Type something here..." })),
        React.createElement("div", null, "Click outside here, and check the console")));
}
export default App;
//# sourceMappingURL=App.js.map