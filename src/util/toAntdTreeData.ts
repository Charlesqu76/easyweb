/*
 * @Author: Charles.qu 
 * @Date: 2022-08-10 15:14:33 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-10 15:58:09
 */

const toAntdTreeData = (data: any) => {
    const obj = { children: [] } as any;
    const recursion = (d: any, parent: any) => {
        const { tagName, child, id } = d;
        const obj = {} as any
        obj['title'] = tagName;
        obj['key'] = id;
        obj['children'] = []
        parent['children'].push(obj);
        if (child) {
            for (const item of child) {
                recursion(item, obj);
            }
        }

        return obj
    };

    recursion(data, obj);

    return obj.children;
}

export default toAntdTreeData