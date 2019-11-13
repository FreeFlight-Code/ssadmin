export function salesPerStream(arrayOfStreams) {
    if (arrayOfStreams.length){
        const videosWithSales = arrayOfStreams.filter((el,i)=>{
            return el.amount > 0
        })
        // console.log(arrayOfStreams,"...", videosWithSales)
        return sortSalesMostToLeast(videosWithSales)
    }
}
function sortSalesMostToLeast (array) {
    return array.sort((a,b)=>{
        return b.amount - a.amount
    })
}