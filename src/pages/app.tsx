
import React from "react";
import Header from "@/component/Header";
import Cmp from '@/component/Cmp/index';
import Exhibition from '@/component/Exhibition/index';
import Config from '@/component/Config/index';
import { observer, inject } from "mobx-react";
import { IConfig } from "@/store/config";
import Draggable from 'react-draggable';
import classNames from "classnames";

import './app.scss';


type IProp = Partial<{
    config: IConfig
}>

@inject('config')
@observer
export default class extends React.Component<IProp> {


    render(): React.ReactNode {

        const { configMode } = this.props.config || {};
        const configcls = classNames({
            'ew-con-body-config': true,
            'ew-con-body-configunfixed': !configMode.isFixed
        })
        return <div className="ew-con">
            <div className="ew-con-header"><Header /></div>
            <div className="ew-con-body">
                <div className="ew-con-body-cmp"><Cmp /></div>
                <div className="ew-con-body-exhibition"><Exhibition /></div>
                <Draggable position={configMode.isFixed ? { x: 0, y: 0 } : null} disabled={configMode.isFixed}><div className={configcls} ><Config /></div></Draggable>
            </div>
        </div>
    }
}


