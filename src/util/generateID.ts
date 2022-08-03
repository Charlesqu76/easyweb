
let id = 1;

const generateId = (treeData: any) => {
    const { child = [] } = treeData;
    !treeData.id && (treeData.id = id++);
    child.forEach((item: any) => {
        generateId(item);
    });
}
export default generateId;