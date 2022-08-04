
import cloneDeep from 'lodash/cloneDeep'

const mergeObj = (obj1: Object, obj2: Object) => {
    const obj = cloneDeep(obj1) as any;
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    for (let key of obj2Keys) {
        const o1 = obj[key as keyof typeof obj1];
        const o2 = obj2[key as keyof typeof obj2];
        if (obj1Keys.includes(key)) {
            if (Array.isArray(o1) && Array.isArray(o2)) {
                continue;
            }
            if (typeof o1 === 'function' && typeof o2 === 'function') {
                obj[key] = function (): void {
                    o1.apply(this, arguments);
                    o2.apply(this, arguments);
                }
                continue;
            }
            if (typeof o1 === 'object' && typeof o2 === 'object') {
                obj[key] = mergeObj(o1, o2);;
                continue;
            }
            obj[key] = o2;
        } else {
            obj[key] = o2;
        }
    }
    return obj;
}


export default mergeObj;