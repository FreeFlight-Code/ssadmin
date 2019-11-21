const {getData, sortBy, createArray, filterBy, mergeDuplicates} = require('./functions')

module.exports = function (days, companyId){
    //  returns sales per stream
    //  labels are stream id's
    //  data is $$ total sold per stream
    //  if companyId run company filter
    //  if days run days filter

    if(days){
        return getData("sales", days).then(res=>{



            let {totalOrders} = res;
            if (companyId) totalOrders = filterBy(totalOrders, "stream", companyId);
            totalOrders = mergeDuplicates(totalOrders, "stream", "amount")
            totalOrders = sortBy.hl(totalOrders, "amount");
            const labels = createArray(totalOrders, "stream");
            const data = createArray(totalOrders, "amount");


            let reducedData = data.reduce((total, num)=>total + num, 0)
            // summary is what will be displayed at top of card
            let summary = `$${reducedData} Sales`;
            
                return {
                    data: data, 
                    labels: labels,
                    summary: summary
                }
        })
    } else console.error('no days filter set')

}