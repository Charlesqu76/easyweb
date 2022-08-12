/*
 * @Author: Charles.qu 
 * @Date: 2022-08-12 11:54:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-12 17:52:26
 */

import React from "react";
import { Input, AutoComplete } from 'antd';
import classNames from "classnames";
import { observer, inject } from "mobx-react";
import { IExhibition } from '@/store/exhibition'
import './index.scss';

type IProps = {
    objKey: string;
    objValue: string;
    objId: number;
    parentKey: Array<string>;
    parentValue: any
} & Partial<{ exhibition: IExhibition }>
type IState = {
    editKey: boolean;
    editValue: boolean;
}


@inject('exhibition')
@observer
export default class ObjInput extends React.Component<IProps, IState> {
    state = {
        editKey: false,
        editValue: false
    }

    handleOnfofusKey = () => {
        this.setState({ editKey: true })
    }

    handleOnBlurKey = () => {
        this.setState({ editKey: false })
    }

    handleOnfocusVal = () => {
        this.setState({ editValue: true })
    }

    handleOnBlurVal = () => {
        this.setState({ editValue: false })
    }

    handleChangeValue = (param: { key: string, value: any, id: number }) => {
        const { parentKey, parentValue } = this.props;
        console.log(parentValue);
        this.props.exhibition.changeTemp({ ...param, parentKey });
    }

    render(): React.ReactNode {
        const { objKey, objValue, parentKey, objId } = this.props;
        const { editKey, editValue } = this.state;
        const keycls = classNames({
            'ew__objinput-key': true,
            'ew__objinput-keyunfocus': !editKey
        });
        const valuecls = classNames({
            'ew__objinput-value': true,
            'ew__objinput-valueunfocus': !editValue
        });

        return <div className="ew__objinput">
            <AutoComplete className={keycls}
                value={objKey}
                onFocus={this.handleOnfofusKey}
                onBlur={this.handleOnBlurKey}
                onChange={(val) => { this.handleChangeValue({ key: objKey, value: val, id: objId }) }}
            />
            <span className="ew__objinput-ver">:</span>
            {objKey && <AutoComplete className={valuecls}
                value={objValue}
                onFocus={this.handleOnfocusVal}
                onBlur={this.handleOnBlurVal}
                onChange={(val) => { this.handleChangeValue({ key: objKey, value: val, id: objId }) }}
            />}

        </div>
    }
}