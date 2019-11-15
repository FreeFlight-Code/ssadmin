const {getData} = require('./functions')

module.exports = function (days, companyId){
    //  returns sales per stream
    //  labels are stream id's
    //  data is $$ total sold per stream
    //  if companyId run company filter
    //  if days run days filter

    if(days){
        return getData("sales", days).then(res=>{
        
            const data = [], labels = [];
            // console.log(companyId)
            if (companyId) res.totalOrders = res.totalOrders.filter((el)=>{
                return el.user === companyId;
            })
            console.log(res.totalOrders, "maybe???")
            for(let i = 0; i < res.totalOrders.length; i++){
                
                const {totalOrders} = res;

                //is there a name
                if(totalOrders[i].stream){

                    //is stream name already in array
                    if (data.indexOf(totalOrders[i].stream)){
                        data.push(totalOrders[i].amount)
                        labels.push(totalOrders[i].stream)
                    } else {
                        let indexOfStreamName = data.indexOf(totalOrders[i].stream);
                        data[indexOfStreamName]+= totalOrders[i].amount;
                    }
                }
            }
            console.log(data)
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