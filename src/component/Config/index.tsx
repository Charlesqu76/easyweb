/*
 * @Author: Charles.qu 
 * @Date: 2022-08-04 11:48:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-04 16:41:55
 */
import { inject, observer } from "mobx-react";
import React from "react";
import { IConfig } from '@/store/config'
import './index.scss'


type IProp = Partial<{
    config: IConfig
}>

@inject('config')
@observer
export default class Config extends React.Component<IProp> {

    renderConfig = (obj: any) => {
        console.log(obj);
        const keys = Object.keys(obj);
        console.log(keys);
        return <div>asdf</div>

    }

    render(): React.ReactNode {
        const { config } = this.props;
        console.log(this.props.config.configObj)
        const { configObj = {} } = config || {};
        return <div className="ew__config-con">{this.renderConfig(configObj)}</div>
    }
}