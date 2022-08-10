/*
 * @Author: Charles.qu 
 * @Date: 2022-08-10 14:46:07 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-10 16:01:49
 */


const getItemFromTree = (tree: any, targetId: number): any => {
    let res = null;
    const recursion = (tree: any) => {
        const { id, child = [] } = tree;
        if (id === targetId) {
            res = tree;
            return;
        }
        child.forEach((item: any) => {
            recursion(item);
        });
    }
    recursion(tree)
    return res;
}

export default getItemFromTree