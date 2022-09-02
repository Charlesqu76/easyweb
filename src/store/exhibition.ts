
import { action, makeAutoObservable, observable } from "mobx";
import { generateId, getItemFromTree } from '@/util/index';
import { styleObjToText, formatDataToObj } from '@/util'

export type componentProp = {
    tagName: string;
    tagProps: Record<string, any>;
    child?: Array<componentProp>;
    id?: number
}

export interface IExhibition {
    data: componentProp,
    changeItem: (param: { id: number, key: string, value: string | Object, parentKey?: string }) => void,
    configData: componentProp | {},
    setConfigData: (obj: any) => void,
    // addItemToTree: (id: number, key: string) => void,
    selectedId: number,
    selectedParentIds: Array<number>,
    setSelectedId: (id: number) => void,
    // changeTemp: (param: { id: number, key: string, value: string, parentKey: string[] }) => void,

}
export default class Exhibition implements IExhibition {
    @observable configData = {};
    @observable data = {
        tagName: "div", tagProps: { style: {} }
    };
    @observable id = 1;
    @observable selectedId = 1;
    // 暂时不用
    @observable selectedParentIds = [] as Array<number>;
    constructor() {
        makeAutoObservable(this);
        try {
            // 优先使用本地缓存
            const data = localStorage.getItem('data');
            const realData = JSON.parse(data);
            this.data = realData || {
                tagName: "div", tagProps: { style: {} }
            };;
        } catch (e) {
            this.data = {
                tagName: "div", tagProps: { style: {} }
            };
        }
        // 初始化，数据添加ID
        generateId(this.data, this.id);
        this.setSelectedId(1);

    }

    @action
    changeItem(param: { id: number, key: string, value: string, parentKey?: string }) {
        const { id, key, value, parentKey } = param;
        const { item } = getItemFromTree(this.data, id);
        if (!item) { console.log('not find item'); return };
        const { tagProps } = item;
        const finalItem = parentKey ? tagProps[parentKey] : tagProps;
        finalItem[key] = value;
    }

    @action
    setSelectedId(id: number) {
        this.selectedId = id;
        const { item, parentIds } = getItemFromTree(this.data, id);
        if (!item) { console.log('not find item'); return };
        this.selectedParentIds = parentIds;
        const { tagProps } = item;
        this.setConfigData({ ...tagProps, id });
    }

    @action
    setConfigData(obj: any) {
        this.configData = obj;
    }

    @action
    addItemToTree(id: number, key: string) {
        const { item } = getItemFromTree(this.data, Number(id));
        if (!item) { console.log('not find item'); return };
        const defaultObj = { tagName: key, tagProps: { style: {}, id: this.id } };
        if (item.child) {
            item.child.push(defaultObj)
        } else {
            item.child = [defaultObj]
        }
        // generateId(this.data);
    }

}
