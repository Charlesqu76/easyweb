/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 14:42:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-04 16:28:20
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { mergeObj } from '@/util/index';
import { componentProp, IExhibition } from '@/store/exhibition';
import { IConfig } from '@/store/config';
import cmpData from '@/cmp/index';
import { defaultExhibition } from "@/config/defaultExhibition";

import './index.scss';

type IProp = Partial<{
    exhibition: IExhibition
    config: IConfig
}>

@inject('exhibition')
@observer
export default class Exhibiton extends React.Component<IProp> {

    renderTree = (tree: componentProp, ...prop: any) => {
        const { tagName, tagProps, child, id } = tree;
        const obj = mergeObj(defaultExhibition, { ...tagProps, id });
        // @ts-ignore
        const Cmp = cmpData[tagName as string];
        return <Cmp {...obj} key={id} onClick={(e: Event) => obj.onClick(e, obj, ...prop)}> {child && child.map((item) => this.renderTree(item, ...prop))} </Cmp>
    }

    render(): React.ReactNode {
        return <div className="ew__exhibition-con">{this.renderTree(this.props.exhibition.data, { exhibition: this.props.exhibition, config: this.props.config })}</div>
    }
}