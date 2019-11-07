const axios = require('axios');

export function GetData (type, date) {

    return {"first":"david","last":"fischer"}

    // let today = new Date();           // Sun Oct 28 2018 17:44:43 GMT-0600 (Mountain Daylight Time)

    // let lastYear = (new Date().getFullYear())-1;
    // let newdate = date || new Date(today.setFullYear(lastYear)).toISOString().split('T')[0];
    // // console.log(date)


    // await axios.get(`https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${newdate}&type=${type}`).then(res=>{
    //     // if (res && res.data && res.data.status && res.data.status.code && res.data.status.code===200){

    //         console.log(res.data.body)
    //         return res.data.body
    //     // } else {
    //     //     console.log('error with data format')
    //     // }
    // }).catch(e=>console.error('unable to retrieve "GetData" from backend'))
}

