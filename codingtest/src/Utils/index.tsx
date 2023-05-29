import Data from "../data"
export const getUniqueTag = () => {
    if (!Data) {
        return
    }
    // find unique item from array
    return findUniqueItem(Data)
}
function findUniqueItem(arr: any) {
    var found: any = {};
    arr.forEach((d: any) => {
        // map array to look for unique article lable and add into found variable
        found[d.articleTag.label] = d;
    });
    return Object.keys(found).map(key => found[key]);
}