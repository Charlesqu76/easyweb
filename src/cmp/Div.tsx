

import React from "react";

const Div = (props: any) => {
    const { style, className, ...others } = props;
    return <div style={{ width: '100px', height: '100px', ...style }} className={`ewcmp ${className}`} {...others}></div >
}
export default Div