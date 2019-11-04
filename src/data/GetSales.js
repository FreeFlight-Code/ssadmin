import axios from 'axios';
// import CreateDateLabels from './CreateDateLabels';

async function GetSales (str) {

    if (strArray[0]) units = strArray[0];
    if (strArray[1]) num = parseInt(strArray[1]);
    console.log(units, num)

    let today = new Date();           // Sun Oct 28 2018 17:44:43 GMT-0600 (Mountain Daylight Time)
    // let year = today.getFullYear();   // ex: 1970-2019
    let month = today.getMonth();     // ex: 0-11
    let day = today.getDay();         // ex: 0-6
    let lastYear = (new Date().getFullYear())-1;
    let date = new Date(today.setFullYear(lastYear)).toISOString().split('T')[0];


    await axios.get(`https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${date}&type=sales`).then(res=>{
        if (res && res.data && res.data.status && res.data.status.code && res.data.status.code===200){

            console.log(res.data)
            return {
                data: res.data
            }
        } else {
            console.log('error with data format')
        }
    }).catch(e=>console.error('unable to retrieve "GetSales" from backend'))
}

export default GetSales;