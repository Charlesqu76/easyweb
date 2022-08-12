/*
 * @Author: Charles.qu 
 * @Date: 2022-08-11 10:56:27 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-11 17:12:01
 */


const styleObjToText = (style: Record<string, string>): string => {
    const keys = Object.keys(style);
    const text = keys.reduce((acc, cur) => {
        acc += `${cur}: ${style[cur]}; \n`
        return acc;
    }, '');
    return text;
}

const styleTextToObj = (styleText: String): Record<string, string> => {
    const styleObjList = styleText.replace(/\n/, '').split(';').filter((v) => v);
    const styleObj = styleObjList.reduce((acc: any, cur) => {
        console.log(cur);
        const [attrName, attrValue] = cur.split(':');
        if (attrName && attrValue) {
            console.log(attrName, attrValue);
            acc[attrName] = attrValue

        }
        return acc;
    }, {});
    console.log(styleObj);
    return styleObj;

}

export { styleObjToText, styleTextToObj }