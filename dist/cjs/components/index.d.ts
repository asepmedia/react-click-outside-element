import React from "react";
/**
 * Declare Interface for OutsideWrapper
 */
interface IOutsideWrapperProps {
    onClickOutside?: React.MouseEventHandler<MouseEvent>;
    children: React.ReactNode;
}
declare function OutsideWrapper(props: IOutsideWrapperProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof OutsideWrapper>;
export default _default;
