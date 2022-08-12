

import React from "react";

const Span = (props: any) => {
    const { children, ...others } = props;
    return <span {...others} >{children}</span >
}
export default Span;