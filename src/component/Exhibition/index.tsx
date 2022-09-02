/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 14:42:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-11 14:47:54
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { mergeObj } from '@/util/index';
import { componentProp, IExhibition } from '@/store/exhibition';
import { IConfig } from '@/store/config';
import Config from '@/component/Config'
import cmpData from '@/cmp/index';
import { defaultExhibition } from "@/config/defaultExhibition";
import MiniMap from '@/component/MiniMap';
import Draggable from "react-draggable";
import classNames from "classnames";

import './index.scss';

type IProp = Partial<{
    exhibition: IExhibition
    config: IConfig
}>

@inject('exhibition', 'config')
@observer
export default class Exhibiton extends React.Component<IProp> {

    renderTree = (tree: componentProp, ...prop: any) => {
        const { tagName, tagProps, child, id } = tree;
        const obj = mergeObj(defaultExhibition, { ...tagProps, id });
        // @ts-ignore
        const Cmp = cmpData[tagName as string];
        return <Cmp {...obj} key={id} onClick={(e: Event) => obj.onClick(e, obj, ...prop)} onDrop={(e: Event) => obj.onDrop(e, obj, ...prop)}> {child && child.map((item) => this.renderTree(item, ...prop))} </Cmp>
    }

    render(): React.ReactNode {
        const { exhibition, config } = this.props;
        const { configMode, miniMap } = this.props.config || {};
        const configcls = classNames({
            'ew__exhibition-con-config': true,
            'ew__exhibition-con-configunfixed': !configMode.isFixed
        });
        const minimapCls = classNames({
            'ew__exhibition-con-minimap': true,
            'ew__exhibition-con-minimaphidden': !miniMap.show
        });
        return <div className="ew__exhibition-con">
            {/* minimap */}
            <Draggable>
                <div className={minimapCls}>
                    <MiniMap />
                </div>
            </Draggable>
            <div className="ew__exhibition-con-show">
                <div className="ew__exhibition-con-show-con">
                    {this.renderTree(this.props.exhibition.data, { exhibition: exhibition, config: config })}
                </div>
            </div>
            {/* config */}
            <Draggable position={configMode.isFixed ? { x: 0, y: 0 } : null} disabled={configMode.isFixed}>
                <div className={configcls} >
                    <Config />
                </div>
            </Draggable>
        </div>
    }
}