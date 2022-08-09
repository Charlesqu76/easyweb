/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 16:24:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-09 17:55:29
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
        event.dataTransfer.setData('sss', data);
    }
    render(): React.ReactNode {
        return <div className="ew__cmp-con">
            <Collapse>
                {Object.keys(cmpData).map((key: any) => {
                    const Cmp = cmpData[key as keyof typeof cmpData];
                    console.log(Cmp);
                    return <Panel header={key} key={key}>
                        <Cmp draggable='true' onDragStart={(e: DragEvent) => this.handleDragStart(e, 'data')} style={{ width: "100px", height: "100px" }} />
                    </Panel>
                })}

            </Collapse>
        </div>
    }
}