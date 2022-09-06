

const generateId = (treeData: any, id: number) => {
    const { child = [] } = treeData;
    !treeData.id && (treeData.id = id);
    child.forEach((item: any) => {
        generateId(item, ++id);
    });
    return ++id;
}
export default generateId;