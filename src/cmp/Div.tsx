

import React from "react";

const DivConfig = {
    props: { text: '' },
    component: (props: any) => {
        const { children, ...others } = props;
        return <div {...others} >{children}</div >
    }
}
export default DivConfig;