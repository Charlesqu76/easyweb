
import React from "react";
import Cmp from '@/component/Cmp/index';
import Exhibition from '@/component/Exhibition/index';
import './app.scss';

export default () => {
    return <div className="ew-con">
        <div className="ew-con-header"></div>
        <div className="ew-con-body">
            <div className="ew-con-body-cmp"><Cmp /></div>
            <div className="ew-con-body-exhibition"><Exhibition /></div>
            <div className="ew-con-body-config"></div>
        </div>
    </div>
}
