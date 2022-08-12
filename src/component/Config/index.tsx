/*
 * @Author: Charles.qu 
 * @Date: 2022-08-04 11:48:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-12 17:52:07
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { IConfig } from '@/store/config'
import { IExhibition } from '@/store/exhibition'
import { Collapse, Input } from 'antd'
import TextArea from "antd/lib/input/TextArea";
import { styleTextToObj } from '@/util';
import ObjInput from '@/component/ObjInput'
import './index.scss'



type IProp = Partial<{
    config: IConfig
    exhibition: IExhibition
}>

@inject('exhibition', 'config')
@observer
export default class Config extends React.Component<IProp> {

    handleBlurInput = (param: { key: string, value: any, id: number }) => {
        const { exhibition } = this.props;
        const { key, value, id } = param;
        if (key === 'style') {
            const obj = styleTextToObj(value);
            exhibition.changeItem({ id, key, value: obj })
        }
    }

    renderConfig = (obj: any, parentObjs: Array<string>) => {
        return <div>{Array.isArray(obj) && obj.map((item: any) => {
            const { key, value } = item;
            if (key === 'id') return <></>;
            const vType = typeof value;
            if (vType === 'function') return <></>;
            if (vType === 'string') { return <ObjInput key={key} objKey={key} objValue={value} objId={this.props.exhibition.selectedId} parentKey={parentObjs} parentValue={obj} /> }
            if (vType === 'object') {
                return <div>
                    <div>{key}</div>
                    {this.renderConfig(value, [...parentObjs, key])}
                </div>
            }
        })}</div>
    }

    render(): React.ReactNode {
        const { exhibition } = this.props;
        const { configData = [] } = exhibition || {};
        return <div className="ew__config-con">
            <div className="ew__config-con-header">属性配置</div>
            <div className="ew__config-con-body">{this.renderConfig(configData, [])}</div>
        </div>
    }
}