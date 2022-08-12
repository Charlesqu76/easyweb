/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 16:24:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-11 14:29:12
 */
import React from "react";
import { observer, inject } from "mobx-react";
import { IComponents } from '@/store/components'
import { Collapse } from 'antd';
const { Panel } = Collapse;
import cmpData from '@/cmp/index';
import './index.scss';



type IProp = Partial<{ components: IComponents }>

@inject('components')
@observer
export default class Cmp extends React.Component<IProp>  {
    componentDidMount(): void {
    }
    handleDragStart = (event: DragEvent, data: any) => {
        event.dataTransfer.setData('cmpKey', data);
    }
    render(): React.ReactNode {
        return <div className="ew__cmp-con">
            <div className="ew__cmp-con-header">
                <span>组件区</span>
            </div>
            <div className="ew__cmp-con-body">
                <Collapse>
                    {Object.keys(cmpData).map((key: any) => {
                        const Cmp = cmpData[key as keyof typeof cmpData];
                        return <Panel header={key} key={key}>
                            <Cmp draggable='true' onDragStart={(e: DragEvent) => this.handleDragStart(e, key)}>
                                <span>{key}</span></Cmp>
                        </Panel>
                    })}
                </Collapse>
            </div>
        </div>
    }
}