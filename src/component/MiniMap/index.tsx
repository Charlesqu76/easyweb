/*
 * @Author: Charles.qu 
 * @Date: 2022-08-10 14:58:19 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-10 16:14:23
 */

import React from "react";
import { observer, inject } from "mobx-react";
import { IExhibition } from '@/store/exhibition';
import { toAntdTreeData } from '@/util';
import { Tree } from 'antd';
import './index.scss';


type Iprops = Partial<{
    exhibition: IExhibition;
}>

@inject('exhibition')
@observer
export default class MiniMap extends React.Component<Iprops> {
    handleTreeItemSelect = (item: any) => {
        const id = item[0];
        console.log(id);
    }
    render(): React.ReactNode {
        const treeData = toAntdTreeData(this.props.exhibition.data);
        return <div className="ew__minimap-con">
            <div className="ew__minimap-con-header">
                <span>MiniMap</span>
            </div>
            <div className="ew__minimap-con-tree">
                <Tree treeData={treeData} onSelect={this.handleTreeItemSelect} />
            </div>
        </div>
    }

}