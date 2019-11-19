const {getData} = require('./functions')

module.exports = function (days, companyId){
    // returns views per User
    // labels are user ids
    // data is views per stream
    
    return getData("streams", days).then(res=>{
        try{
            const data = [], labels = [];
            if (companyId) res.totalStreams = res.totalStreams.filter((el)=>{
                return el.user === companyId;
            })
            const {totalStreams} = res;
            for(let i = 0; i < totalStreams.length; i++){
                // if user is found in labels add it
                if (labels.indexOf(totalStreams[i].user) === -1){
                    data.push(totalStreams[i].views)
                    labels.push(totalStreams[i].user)
                // otherwise add views to labels
                } else {
                    let indexOfStreamName = labels.indexOf(totalStreams[i].user);
                    data[indexOfStreamName]+= totalStreams[i].views;
                }
            }
            let reducedData = data.reduce((total, num)=>total + num, 0)
            
            // summary is what will be displayed at top of card
            let summary = `${reducedData} Views`;
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