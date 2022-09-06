/*
 * @Author: Charles.qu 
 * @Date: 2022-08-04 11:48:44 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-12 17:52:07
 */
import React, { ChangeEvent } from "react";
import { inject, observer } from "mobx-react";
import { IConfig } from '@/store/config'
import { IExhibition } from '@/store/exhibition'
import { Input, Tabs, Tooltip } from 'antd'
import { styleTextToObj } from '@/util';
import ObjInput from '@/component/ObjInput'
import './index.scss'

type IProp = Partial<{
    config: IConfig
    exhibition: IExhibition
}>

type IState = {
    styleList: Array<string>
    styleFilterWord: string
}

@inject('exhibition', 'config')
@observer
export default class Config extends React.Component<IProp, IState> {
    allStyleList = Object.keys(document.createElement('span').style);
    state = {
        styleList: this.allStyleList,
        styleFilterWord: ''
    }

    handleChangeStyleFilterWord = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const filterStyleList = this.allStyleList.filter((style) => style.includes(value));
        this.setState({ styleFilterWord: value, styleList: filterStyleList });
    }

    render(): React.ReactNode {
        const { styleFilterWord, styleList } = this.state;
        const { exhibition } = this.props;
        const { configData = {} } = exhibition || {};
        const { style: styleObj, id, ...other } = configData as any;
        return <div className="ew__config-con">
            <div className="ew__config-con-body">
                <Tabs>
                    <Tabs.TabPane tab='基础配置' key='baseConfig'></Tabs.TabPane>
                    <Tabs.TabPane tab='样式配置' key='styleConfig'>
                        <div className="ew__config_style">
                            <div className="ew__config_style-filter">
                                <span className="ew__config_style-filter-text">筛选: </span>
                                <Input value={styleFilterWord} onChange={this.handleChangeStyleFilterWord} allowClear />
                            </div>
                            <div className="ew__config_style-list">
                                {styleList.map((style) => {
                                    return <ObjInput key={style} objKey={style} objValue={styleObj[style] || ''} objId={id} exhibition={exhibition} parentKey='style' />
                                })}
                            </div>

                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    }
}