/*
 * @Author: Charles.qu 
 * @Date: 2022-08-10 14:46:07 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-11 16:20:05
 */


type func = (tree: any, targetId: number) => { parentIds: Array<number>, item: any }

const getItemFromTree: func = (tree: any, targetId: number) => {
    let res = null;
    let parentIds1 = [] as Array<number>
    const recursion = (tree: any, parentIds: Array<number>) => {
        const { id, child = [] } = tree;
        if (id === targetId) {
            res = tree;
            parentIds1 = parentIds
            return;
        }
        child.forEach((item: any) => {
            recursion(item, [...parentIds, id]);
        });
    }
    recursion(tree, []);
    return { parentIds: parentIds1, item: res };
}

export default getItemFromTree