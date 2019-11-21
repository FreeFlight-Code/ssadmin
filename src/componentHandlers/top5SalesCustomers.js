
const {getData, sortBy, getFirstOfArray, mergeDuplicates} = require('./functions')

module.exports = (days)=>{
    return getData("sales", days).then(res=>{

        let {totalOrders} = res;
        totalOrders = mergeDuplicates(totalOrders, "stream", "amount")
        let sortedArray = sortBy.hl(totalOrders, "amount");
        let returnedArray = getFirstOfArray(sortedArray, 5);
        return returnedArray;

    })
}
