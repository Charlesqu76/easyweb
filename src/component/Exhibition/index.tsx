/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 14:42:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-03 15:14:48
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { renderTree } from '@/util/index';
import { IExhibition } from '@/store/exhibition';
import './index.scss';

type IProp = Partial<{
    exhibition: IExhibition
}>

@inject('exhibition')
@observer
export default class Exhibiton extends React.Component<IProp> {
    render(): React.ReactNode {
        return <div className="ew__exhibition-con">{renderTree(this.props.exhibition.data)}</div>
    }
}