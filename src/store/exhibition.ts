
import { action, makeAutoObservable, observable } from "mobx";
import { generateId } from '@/util/index'
export type componentProp = {
    tagName: string;
    tagProps: Record<string, any>;
    child?: Array<componentProp>;
    id?: number
}

export interface IExhibition {
    data: componentProp,
    changeItem: (id: number, obj: any) => void
}

export default class Exhibition implements IExhibition {
    @observable data = {
        tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'red', display: 'flex' } }, child:
            [
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'black' } } },
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'blue' } }, },
                { tagName: "div", tagProps: { className: "hhhhh", style: { backgroundColor: 'grey' } } }
            ] as Array<any>
    };
    constructor() {
        makeAutoObservable(this);
        // 初始化，数据添加ID
        generateId(this.data);
    }

    @action
    changeItem(id: number, obj: any) {
        console.log(id);
    }

}
