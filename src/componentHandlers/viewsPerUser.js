const {getData} = require('./functions')

module.exports = function (days, companyId){
    // returns views per User
    // labels are user ids
    // data is views per stream
    
    return getData("streams", days).then(res=>{
        // console.log(res.totalStreams)
        try{
            const data = [], labels = [];
            if (companyId) res.totalStreams = res.totalStreams.filter((el)=>{
                return el.user === companyId;
            })
            console.log(res.totalStreams)
            for(let i = 0; i < res.totalStreams.length; i++){
                const {totalStreams} = res;
                console.log(res)
                // if user is found in labels
                if (labels.indexOf(totalStreams[i].user)){
                    data.push(totalStreams[i].views)
                    labels.push(totalStreams[i].user)
                // otherwise add views to 
                } else {
                    let indexOfStreamName = labels.indexOf(totalStreams[i].user);
                    data[indexOfStreamName]+= totalStreams[i].views;
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
        }catch (e){
            console.error(e)
        }
    })
}