

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