
import { action, makeAutoObservable, observable } from "mobx";




export interface IConfig {
    configMode: { isFixed: boolean }
    handleChangeConfigMode: (isFixed: boolean) => void
}

export default class Config implements IConfig {
    @observable configMode = { isFixed: true };
    constructor() {
        makeAutoObservable(this);
    }

    handleChangeConfigMode = (isFixed: boolean) => {
        this.configMode.isFixed = isFixed;
    }
}