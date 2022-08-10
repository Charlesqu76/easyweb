
import { action, makeAutoObservable, observable } from "mobx";




export interface IConfig {
    configMode: { isFixed: boolean };
    handleChangeConfigMode: (isFixed: boolean) => void;
    miniMap: { show: boolean };
    handleChangeMiniMapShow: (show: boolean) => void;

}

export default class Config implements IConfig {
    @observable configMode = { isFixed: true };
    @observable miniMap = { show: true };
    constructor() {
        makeAutoObservable(this);
    }

    handleChangeConfigMode = (isFixed: boolean) => {
        this.configMode.isFixed = isFixed;
    }

    handleChangeMiniMapShow = (show: boolean) => {
        this.miniMap.show = show;
    }
}