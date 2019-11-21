const {getData} = require('./functions')
const {filterBy, createArray} = require('./functions')


module.exports = function (days, companyId){
    if(days){
        return getData("sales", days).then(res=>{

            let {totalOrders} = res;
            if (companyId) totalOrders = filterBy(totalOrders, "stream", companyId);
            const data = createArray(totalOrders, "amount");

            let reducedData = data.reduce((total, num)=>total + num, 0)
            // summary is what will be displayed at top of card
            let summary = `$${reducedData} Sales`;
            
            return {
                staticContent: summary
            }
        })
    }
}