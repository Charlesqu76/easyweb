
import { action, makeAutoObservable, observable } from "mobx";
import { generateId, getItemFromTree } from '@/util/index';

export type componentProp = {
    tagName: string;
    tagProps: Record<string, any>;
    child?: Array<componentProp>;
    id?: number
}

export interface IExhibition {
    data: componentProp,
    changeItem: (param: { id: number, key: string, value: string }) => void,
    configData: componentProp | {},
    setConfigData: (obj: any) => void
}

export default class Exhibition implements IExhibition {
    @observable configData = {};
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
    changeItem(param: { id: number, key: string, value: string }) {
        const { id, key, value } = param;
        const item = getItemFromTree(this.data, id);
        if (!item) { console.log('not find item'); return };
        const { tagProps } = item;
        tagProps[key] = value;
        const configData = this.configData
        if (this.configData[key as keyof typeof configData]) {
            // @ts-ignore
            this.setConfigData({ ...this.configData, [key]: value });
        } else {
            // @ts-ignore
            this.setConfigData({ ...this.configData, style: { ...this.configData.style, [key]: value } })
        }
        // @ts-ignore
    }
    @action
    setConfigData(obj: componentProp) {
        this.configData = obj;
    }

}
