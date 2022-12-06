

import React from "react";

const textConfig = {
    props: { text: '输入框' },
    component: (props: any) => {
        const { children, ...others } = props;
        return <span {...others} >{others.text || ''}</span >
    }
}

export default textConfig