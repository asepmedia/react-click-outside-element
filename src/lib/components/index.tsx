import React, { useRef, useState } from "react";
import { useOutsideAlerter } from "../hooks";

/**
 * Declare Interface for OutsideWrapper
 */
interface IOutsideWrapperProps {
    onClickOutside?: React.MouseEventHandler<MouseEvent>;
    children: React.ReactNode;
}

function OutsideWrapper(props: IOutsideWrapperProps) {
    // destructuring props
    const { children, onClickOutside } = props;

    // use ref for detect element
    const wrapperRef = useRef(null);
    const [isClicked, setIsClicked] = useState(false);

    const firstClicked = () => {
        setIsClicked(true);
    };
    const lastClicked = () => {
        setIsClicked(false);
    };

    // use hooks outside and every change compare to current ref
    useOutsideAlerter(
        wrapperRef,
        (e: React.MouseEvent<MouseEvent, MouseEvent>) => {
            if (onClickOutside && isClicked) {
                lastClicked();
                onClickOutside(e);
            }
        }
    );

    return (
        <>
            <div ref={wrapperRef} onClick={firstClicked}>
                {children}
            </div>
        </>
    );
}

export default React.memo(OutsideWrapper);
