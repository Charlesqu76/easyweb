/*
 * @Author: Charles.qu 
 * @Date: 2022-08-12 16:17:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-08-12 16:30:32
 */



// {[key]: value} => [{key, value}]
const formatDataToObj = (data: any) => {

    const recursion = (data: any) => {

        const res = Object.keys(data).reduce((acc, cur) => {
            const val = data[cur];
            const vType = typeof val;
            if (vType === 'object') {
                acc.push({ key: cur, value: recursion(val) })
            } else {
                acc.push({ key: cur, value: val });
            }
            return acc;
        }, []);
        return res;
    }
    const res = recursion(data);
    return res;
};

export { formatDataToObj }