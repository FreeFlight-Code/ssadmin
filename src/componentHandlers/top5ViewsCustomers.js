const {getData, sortBy, getFirstOfArray, mergeDuplicates} = require('./functions')

module.exports = (days)=>{
    return getData("streams", days).then(res=>{

        let {totalStreams} = res;
        let mergedStreams = mergeDuplicates(totalStreams, "user", "views")
        let sortedArray = sortBy.hl(mergedStreams, "views");
        let returnedArray = getFirstOfArray(sortedArray, 5);
        return returnedArray;

    })
}
