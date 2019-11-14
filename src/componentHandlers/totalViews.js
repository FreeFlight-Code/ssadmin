const {getData} = require('./functions')

module.exports = function (days){
    return getData("streams", days).then((res)=>{
        return {
            staticContent: res.streamViews
        }
    })
}