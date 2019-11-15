// const {getData} = require('./functions')

module.exports = function (days){

    //api call for allApiCalls
    return new Promise ((resolve, reject)=>{
        let number = Math.floor(Math.random()*1000000)

        resolve({
            staticContent: number
        })
    })
}

