const {getData} = require('./functions')

module.exports = function (days){
    // returns sales per stream
    // labels are stream id's
    // data is $$ total sold per stream

    
    return getData("sales", days).then(res=>{
    
        const data = [], labels = [];
        for(let i = 0; i < res.totalOrders.length; i++){
            
            const {totalOrders} = res;

                if (data.indexOf(totalOrders[i].user)){
                    data.push(totalOrders[i].amount)
                    labels.push(totalOrders[i].user)
                } else {
                    let indexOfStreamName = data.indexOf(totalOrders[i].user);
                    data[indexOfStreamName]+= totalOrders[i].amount;
                }
        }
        let reducedData = data.reduce((total, num)=>total + num, 0)

        
        // summary is what will be displayed at top of card
        let summary = `$${reducedData} Sales`;
        
            return {
                data: data, 
                labels: labels,
                summary: summary
            }
    })

}