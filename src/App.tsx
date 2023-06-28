import React from "react";
import OutsideWrapperElement from "react-click-outside-element";

function App() {
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
            }}
        >
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
                        border: "1px solid #ddd",
                        padding: "6px 8px 6px 8px",
                        minWidth: "350px",
                        borderRadius: "8px",
                    }}
                    placeholder="Type something here..."
                />
            </OutsideWrapperElement>
            <div>Click outside here, and check the console</div>
        </div>
    );
}

export default App;
