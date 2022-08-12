/*
 * @Author: Charles.qu 
 * @Date: 2022-08-09 10:42:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-11 17:54:44
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { Button, message } from 'antd';
import { IConfig } from '@/store/config';
import { IExhibition } from '@/store/exhibition';


import './index.scss';




type IProp = Partial<{
    config: IConfig,
    exhibition: IExhibition

}>

@inject('config', 'exhibition')
@observer
export default class Header extends React.Component<IProp> {

    handleModeClick = () => {
        this.props.config.handleChangeConfigMode(!this.props.config.configMode.isFixed)
    }

    handleMiniMapClick = () => {
        this.props.config.handleChangeMiniMapShow(!this.props.config.miniMap.show)
    }

    handleClickSave = () => {
        const { exhibition } = this.props;
        try {
            localStorage.setItem('data', JSON.stringify(exhibition.data));
            message.success('本地保存成功');
        } catch (e) {
            message.error('本地保存失败', e)
        }
    }

    render(): React.ReactNode {
        const { config } = this.props;
        const { miniMap, configMode } = config || {};
        return <div className="ew__header">
            <Button onClick={this.handleModeClick} size='small' >配置{configMode.isFixed ? '移动' : "固定"}模式</Button>
            <Button onClick={this.handleMiniMapClick} size='small'>{!miniMap.show ? '展示' : "折叠"} miniMap</Button>
            <Button onClick={this.handleClickSave} size='small'>保存</Button>

        </div>
    }
}