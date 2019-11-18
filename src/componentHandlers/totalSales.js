const {getData} = require('./functions')

module.exports = function (days, companyId){
    return getData("sales", days).then((res)=>{
        if (companyId) res.totalOrders = res.totalOrders.filter((el)=>{
            return el.user === companyId;
        })
        let filteredArray = res.totalOrders.reduce((total, el)=>{
            return total += el.amount
        }, 0)
        return {
            staticContent: `$${filteredArray}`
        }
    })
}