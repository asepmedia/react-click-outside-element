import React, { useState } from "react";
import OutsideWrapperElement from "./lib";

function App() {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive((prev) => !prev);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                rowGap: 10,
                padding: "20px",
                fontSize: "17px",
            }}
        >
            <span
                style={{
                    fontSize: "50px",
                    marginBottom: "10px",
                }}
            >
                <b>react-click-outside-element</b>
            </span>
            <span
                style={{
                    backgroundColor: "green",
                    padding: "8px",
                    borderRadius: "8px",
                    color: "white",
                }}
            >
                {"<"} 10KB
            </span>
            <pre
                style={{
                    background: "#eee",
                    padding: "8px",
                    borderRadius: "8px",
                    fontSize: "18px",
                }}
            >
                <code>npm install react-click-outside-element</code>
            </pre>
            <div>Click outside here, and check the console</div>
            <OutsideWrapperElement
                onClickOutside={(
                    e: React.MouseEvent<MouseEvent, MouseEvent>
                ) => {
                    const { clientX, clientY } = e;
                    console.log({ clientX, clientY });
                    console.log(e, "Element where clicked");
                    alert("You click at outside input");
                }}
            >
                <input
                    type="text"
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px 12px 10px 12px",
                        minWidth: "350px",
                        borderRadius: "8px",
                        fontSize: "16px",
                    }}
                    placeholder="Type something here..."
                />
            </OutsideWrapperElement>
            <div>Click outside here, and check the console</div>
        </div>
    );
}

export default App;
