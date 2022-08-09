/*
 * @Author: Charles.qu 
 * @Date: 2022-08-04 11:48:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-09 17:34:20
 */
import { inject, observer } from "mobx-react";
import React from "react";
import { IConfig } from '@/store/config'
import { IExhibition } from '@/store/exhibition'
import { Collapse, Input } from 'antd'
import './index.scss'


type IProp = Partial<{
    config: IConfig
    exhibition: IExhibition
}>

@inject('exhibition', 'config')
@observer
export default class Config extends React.Component<IProp> {

    handleChangeValue = (param: { key: string, value: any, id: number }) => {
        const val = param.value.target.value;
        this.props.exhibition.changeItem({ ...param, value: val })
    }

    renderConfig = (obj: any) => {
        const keys = Object.keys(obj);
        return <div>{keys.map((key) => {
            if (key === 'id') return <></>
            const val = obj[key];
            if (key === 'style') {
                return <Collapse>
                    <Collapse.Panel header={'style'} key={'style'}>{this.renderConfig({ ...val, id: obj.id })}</Collapse.Panel>
                </Collapse>
            }
            if (typeof val === 'function') return <></>
            return <div className="ew__config-item"><span className="ew__config-item-key"> {key}</span> <Input value={val} onChange={(val) => { this.handleChangeValue({ key, value: val, id: obj.id }) }}></Input></div>
        })}</div>
    }

    render(): React.ReactNode {
        const { exhibition } = this.props;
        const { configData = {} } = exhibition || {};
        return <div className="ew__config-con"><div className="ew__config-con-header">属性配置</div> <div>{this.renderConfig(configData)}</div></div>
    }
}