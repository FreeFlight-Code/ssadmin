const {getData} = require('./functions')

module.exports = function (days, companyId){
    return getData("streams", days).then((res)=>{
        if (companyId) res.totalStreams = res.totalStreams.filter((el)=>{
            return el.user === companyId;
        })
        let filteredArray = res.totalStreams.reduce((total, el)=>{
            return total += el.views
        }, 0)
        return {
            staticContent: filteredArray
        }
    })
}