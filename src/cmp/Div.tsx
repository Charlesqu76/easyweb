

import React from "react";

const Div = (props: any) => {
    const { children, ...others } = props;
    return <div {...others} >{children}</div >
}
export default Div;