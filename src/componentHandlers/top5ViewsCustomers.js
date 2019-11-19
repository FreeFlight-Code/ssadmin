const getViews = require('./viewsPerUser')

module.exports = (days)=>{
    return getViews(days).then(res=>{
        //return an array of arrays
        //with user then total sales

        let max = 0;
        let maxIndex = 0;
        let returnArray = [];
        let returnArrayLength = 5;
        returnArray.length = returnArrayLength;
        for (let topFive = 0; topFive < returnArrayLength; topFive++){
            for (let i = 0; i < res.data.length; i++){
                if (res.data[i] > max) {
                    max = res.data[i]; maxIndex = i
                };
            }
            if (!returnArray[topFive]) returnArray[topFive] = [];
            returnArray[topFive][0] = (res.labels.splice(maxIndex, 1)[0]);
            returnArray[topFive][1] = (res.data.splice(maxIndex, 1)[0]);
            max = 0;
            maxIndex = 0
        }
        return returnArray;
    })
}