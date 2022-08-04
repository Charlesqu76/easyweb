
import { action, makeAutoObservable, observable } from "mobx";


export interface IConfig {
    configObj: any,
}

export default class Config implements IConfig {
    @observable configObj = {};
    constructor() {
        makeAutoObservable(this);
    }
    setConfigObj = (obj: any) => {
        this.configObj = obj;
    }
}
