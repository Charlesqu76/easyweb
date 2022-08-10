
import React from "react";
import Header from "@/component/Header";
import Cmp from '@/component/Cmp/index';
import Exhibition from '@/component/Exhibition/index';
import { observer, inject } from "mobx-react";
import { IConfig } from "@/store/config";

import './app.scss';


type IProp = Partial<{
    config: IConfig
}>

@inject('config')
@observer
export default class extends React.Component<IProp> {


    render(): React.ReactNode {

       
        return <div className="ew-con">
            <div className="ew-con-header"><Header /></div>
            <div className="ew-con-body">
                <div className="ew-con-body-cmp"><Cmp /></div>
                <div className="ew-con-body-exhibition"><Exhibition /></div>
            </div>
        </div>
    }
}


