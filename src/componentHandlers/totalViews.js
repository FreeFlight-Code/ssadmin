const {getData} = require('./functions');
const {createArray, filterBy} = require('./functions')


module.exports = function (days, companyId){
    if(days){
        return getData("streams", days).then(res=>{

            let {totalStreams} = res;
            if (companyId) totalStreams = filterBy(totalStreams, "user", companyId);
            const data = createArray(totalStreams, "views");

            let reducedData = data.reduce((total, num)=>total + num, 0)
            // summary is what will be displayed at top of card
            let summary = `${reducedData} Views`;
            
            return {
                staticContent: summary
            }
        })
    }
}