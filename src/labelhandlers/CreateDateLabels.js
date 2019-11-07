function CreateDateLabels (array){

    let today = new Date();           // Sun Oct 28 2018 17:44:43 GMT-0600 (Mountain Daylight Time)
    // let year = today.getFullYear();   // ex: 1970-2019
    let month = today.getMonth();     // ex: 0-11
    // let day = today.getDay();         // ex: 0-6
    // let lastYear = (new Date().getFullYear())-1;
    // let date = new Date(today.setFullYear(lastYear)).toISOString().split('T')[0];
    let oneDay = 86400000;
    // let oneWeek = oneDay*7;
    // let oneMonth = oneDay*30;
    
    let returnArray = array.map((ar, i)=>{
        var labels = [];
        let unit = ar[1];
        let num = ar[2];

    function convertDate(date){
        return new Date(date).toISOString().split('T')[0]
    }

    // console.log(units)
        switch (unit) {
            case "days":
                for(let i = 1; i <= num; i++){
                    // console.log(convertDate(today-(oneDay*i)))
                    labels.unshift(convertDate(today-(oneDay*i)))
                    // labels.push()
                }
            break;
            case "months":
                let months = [
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
                    let arrayIndex = month;
                    for(let i = 0; i < num; i++){
                        if(arrayIndex<0) arrayIndex = months.length-1;
                        labels.unshift(months[arrayIndex])
                        arrayIndex--
                    }
            break;
            default:
                console.error('incorrect unit passed to labels')
        }
        return labels;
    })
    return returnArray;
}

module.exports = CreateDateLabels;