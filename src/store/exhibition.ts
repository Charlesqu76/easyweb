
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
    changeItem: (param: { id: number, key: string, value: string | Object }) => void,
    configData: componentProp | {},
    setConfigData: (obj: any) => void,
    addItemToTree: (id: number, key: string) => void,
    selectedId: number,
    selectedParentIds: Array<number>,
    setSelectedId: (id: number) => void,
    changeTemp: (param: { id: number, key: string, value: string, parentKey: string[] }) => void,

}

export default class Exhibition implements IExhibition {
    @observable configData = {};
    @observable data = {
        tagName: "div", tagProps: { style: {} }
    };
    @observable selectedId = 1;
    // 暂时不用
    @observable selectedParentIds = [] as Array<number>;
    constructor() {
        makeAutoObservable(this);
        // 初始化，数据添加ID
        generateId(this.data);
        this.setSelectedId(1);
        try {
            // 优先使用本地缓存
            const data = localStorage.getItem('data');
            const realData = JSON.parse(data);
            this.data = realData;
        } catch {

        }

    }

    @action
    changeItem(param: { id: number, key: string, value: string }) {
        const { id, key, value } = param;
        const { item } = getItemFromTree(this.data, id);
        if (!item) { console.log('not find item'); return };
        const { tagProps } = item;
        tagProps[key] = value;
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
        const res = formatDataToObj(obj);
        this.configData = res;
    }

    @action
    changeTemp = (param: { id: number, key: string, value: string, parentKey: string[] }) => {
        const { key, value, parentKey } = param;
        console.log(parentKey);
        console.log(this.configData);
        let item = null;
        // console.log(parentKey);
        // @ts-ignore
        // const item = this.configData[parentKey];
        // if (item) {
        //     // @ts-ignore
        //     this.setConfigData({ ...this.configData, [parentKey]: { ...this.configData[parentKey], [key]: value } })
        // } else {
        //     this.setConfigData({ ...this.configData, [key]: value });

        // }
    }

    @action
    addItemToTree(id: number, key: string) {
        const { item } = getItemFromTree(this.data, Number(id));
        if (!item) { console.log('not find item'); return };
        const defaultObj = { tagName: key, tagProps: { style: {} } };
        if (item.child) {
            item.child.push(defaultObj)
        } else {
            item.child = [defaultObj]
        }
        generateId(this.data);
    }

}
