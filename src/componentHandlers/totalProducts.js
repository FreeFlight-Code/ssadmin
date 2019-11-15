const {getData} = require('./functions')

module.exports = function (days){
    // returns total products sold res{totalOrder:[{totalProducts: n}]}

    
    return getData("sales", days).then(res=>{
    
        let reducedData = ()=>{
            let {totalOrders} = res;
            let total = 0;
            for (let i = 0;i < totalOrders.length ;i++){
                total += totalOrders[i].totalProducts;
            }
            return total;
        }
        
            return {
                staticContent: reducedData()
            }
    })

}