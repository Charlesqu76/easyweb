
import { action, makeAutoObservable, observable } from "mobx";


export interface IComponents {
    index: number,
}


export default class Components implements IComponents {
    @observable index = 1;
    constructor() {
        makeAutoObservable(this);
    }

}
