/*
 * @Author: Charles.qu 
 * @Date: 2022-08-12 11:54:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-12 17:52:26
 */

import React, { ChangeEvent } from "react";
import { Input, AutoComplete, Tooltip } from 'antd';
import classNames from "classnames";
import { observer, inject } from "mobx-react";
import { IExhibition } from '@/store/exhibition'
import './index.scss';

type IProps = {
    objKey: string;
    objValue: string;
    objId: number;
    parentKey?: string
} & Partial<{ exhibition: IExhibition }>
type IState = {
    editValue: boolean;
}


@inject('exhibition')
@observer
export default class ObjInput extends React.Component<IProps, IState> {
    state = {
        editValue: false
    }

    handleOnfocusVal = () => {
        this.setState({ editValue: true })
    }

    handleOnBlurVal = () => {
        this.setState({ editValue: false })
    }

    handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { objKey, objId, parentKey } = this.props
        const { value } = e.target;
        this.props.exhibition.changeItem({
            key: objKey,
            value,
            id: objId,
            parentKey
        });
    }

    render(): React.ReactNode {
        const { objKey, objValue, objId } = this.props;
        const { editValue } = this.state;

        const valuecls = classNames({
            'ew__objinput-value': true,
            'ew__objinput-valueunfocus': !editValue
        });

        return <div className="ew__objinput">
            <Tooltip title={objKey} placement='topLeft'>
                <span className="ew__objinput-key">{objKey}: </span>
            </Tooltip>
            <Input className={valuecls}
                value={objValue}
                onFocus={this.handleOnfocusVal}
                onBlur={this.handleOnBlurVal}
                onChange={this.handleChangeValue}
            />
        </div>
    }
}