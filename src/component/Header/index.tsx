/*
 * @Author: Charles.qu 
 * @Date: 2022-08-09 10:42:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-09 10:45:26
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from 'antd';
import { IConfig } from '@/store/config'

import './index.scss';




type IProp = Partial<{
    config: IConfig
}>

@inject('config')
@observer
export default class Header extends React.Component<IProp> {

    handleModeClick = () => {
        this.props.config.handleChangeConfigMode(!this.props.config.configMode.isFixed)
    }

    render(): React.ReactNode {
        return <div className="ew__header">
            <Button onClick={this.handleModeClick} >模式</Button>
        </div>
    }
}