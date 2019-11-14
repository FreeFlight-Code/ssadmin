const {getData} = require('./functions')

module.exports = function (days){
    return getData("sales", days).then((res)=>{
        return {
            staticContent: `$${res.orderSales}`
        }
    })
}