/*
 * @Author: Charles.qu 
 * @Date: 2022-08-03 14:42:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-04 16:28:20
 */
import React from "react";
import { inject, observer } from "mobx-react";
import { renderTree } from '@/util/index';
import { IExhibition } from '@/store/exhibition';
import { IConfig } from '@/store/config';

import './index.scss';

type IProp = Partial<{
    exhibition: IExhibition
    config: IConfig
}>

@inject('exhibition', 'config')
@observer
export default class Exhibiton extends React.Component<IProp> {
    render(): React.ReactNode {
        return <div className="ew__exhibition-con">{renderTree(this.props.exhibition.data, { exhibition: this.props.exhibition, config: this.props.config })}</div>
    }
}