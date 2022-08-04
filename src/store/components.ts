
import { action, makeAutoObservable, observable } from "mobx";


export interface IComponents {
    configObj: any,
}


export default class Components implements IComponents {
    @observable configObj = {};
    constructor() {
        makeAutoObservable(this);
    }
    setConfigObj = (obj: any) => {
        this.configObj = obj
    }
}
