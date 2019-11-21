const {getData, filterBy, createArray, mergeDuplicates} = require('./functions')

module.exports = function (days, companyId){
    // returns sales per stream
    // labels are stream id's
    // data is $$ total sold per stream

    
    return getData("sales", days).then(res=>{
        try{
            let {totalOrders} = res;
            if (companyId) totalOrders = filterBy(totalOrders, "user", companyId)
            totalOrders = mergeDuplicates(totalOrders, "user", "amount");
            const labels = createArray(totalOrders, "user");
            const data = createArray(totalOrders, "amount");

            let reducedData = data.reduce((total, num)=>total + num, 0)
            // summary is what will be displayed at top of card
            let summary = `$${reducedData} Sales`;
            
                return {
                    data: data, 
                    labels: labels,
                    summary: summary
                }
        }catch (e){
            console.error(e)
        }

    })

}