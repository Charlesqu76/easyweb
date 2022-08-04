/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 16:24:18 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-04 14:37:24
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
        event.dataTransfer.setData('', '');
    }
    render(): React.ReactNode {
        return <div className="ew__cmp-con">
            <Collapse>
                {Object.keys(cmpData).map((key: any) => {
                    // @ts-ignore
                    const Cmp = cmpData[key]
                    return <Panel header={key} key={key}>
                        <Cmp draggable='true' onDragStart={(e: DragEvent) => this.handleDragStart(e, 'data')} />
                    </Panel>
                })}

            </Collapse>
        </div>
    }
}