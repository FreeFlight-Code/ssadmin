import axios from 'axios';

async function GetSales (str) {
    // takes in a string ex: "days,7" this will get the last 7 days on the calendar (numerically), months gets month names, weeks gets the Sunday date
    let strArray = str.split(',');
    //default values
    let units = "months", num = 12;
    if (strArray[0]) units = strArray[0];
    if (strArray[1]) num = parseInt(strArray[1]);
    console.log(units, num)

    let today = new Date();           // Sun Oct 28 2018 17:44:43 GMT-0600 (Mountain Daylight Time)
    let year = today.getFullYear();   // ex: 1970-2019
    let month = today.getMonth();     // ex: 0-11
    let day = today.getDay();         // ex: 0-6
    let lastYear = (new Date().getFullYear())-1;
    let date = new Date(today.setFullYear(lastYear)).toISOString().split('T')[0];

    var labels, data = [];

    switch (units) {
        case "days":
            console.log("days")
            labels = [
                day - 6,
                day - 5,
                day - 4,
                day - 3,
                day - 2,
                day - 1,
                day,
            
            ]
            data = [9,133,2,34,63,78]
        break;
        case "months":
            labels = [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
                ]

                for(let i = 0; i < (11 - month); i++){
                    let moveMonth = labels.pop();
                    labels.unshift(moveMonth);
                }
                if (num) labels.splice(-(num));
                data = [9,133,2,34,63,78]
        break;
        case "years":
            labels = [
                "JAN",
                "FEB",
                "MAR",
                "APR",
                "MAY",
                "JUN",
                "JUL",
                "AUG",
                "SEP",
                "OCT",
                "NOV",
                "DEC"
                ]

                for(let i = 0; i < (11 - month); i++){
                    let moveMonth = labels.pop();
                    labels.unshift(moveMonth);
                }
                if (num) labels.splice(-(num));
                data = [9,133,2,34,63,78]
        break;

        default:
            data = [9,133,2,34,63,78]

    }
    console.log(labels, data, 'asjdljkasd')

    await axios.get(`https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${date}&type=sales`).then(res=>{
        if (res && res.data && res.data.status && res.data.status.code && res.data.status.code===200){


            return {
                labels: labels,
                data: data
            }
        } else {
            console.log('error with data format')
        }
    }).catch(e=>console.error('unable to retrieve "GetSales" from backend'))
}

export default GetSales;