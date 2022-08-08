
import { action, makeAutoObservable, observable } from "mobx";


export interface IConfig {
}

export default class Config implements IConfig {
    @observable configObj = {};
    constructor() {
        makeAutoObservable(this);
    }

}
