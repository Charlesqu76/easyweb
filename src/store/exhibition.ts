
import { action, makeAutoObservable, observable } from "mobx";
export type componentProp = {
    tagName: string;
    tagProps: Record<string, any>;
    child?: Array<componentProp>;
}

export interface IExhibition {
    data: componentProp,
}

export default class Exhibition implements IExhibition {
    @observable data = {
        tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'red', display: 'flex' } }, child:
            [
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'black' } } },
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'blue' } }, },
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'grey' } } }
            ]
    };
    constructor() {
        makeAutoObservable(this);
    }
}
