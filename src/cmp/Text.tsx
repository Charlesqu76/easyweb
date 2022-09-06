

import React from "react";




const Text = (props: any) => {
    const { children, ...others } = props;
    return <span {...others} >{children}</span >
}
export default Text;




const textConfig = {
    props: { text: 'string' },
    component: (props: any) => {
        const { children, ...others } = props;
        return <span {...others} >{children}</span >
    }
}