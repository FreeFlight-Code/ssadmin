const axios = require('axios');

export function getDateByDaysFromToday (showDays) {

        let todaysDate = new Date().getDate();       // Sun Oct 28 2018 17:44:43 GMT-0600 (Mountain Daylight Time)
        let todaysYear = new Date().getFullYear();
        let todaysMonth = new Date().getMonth();
        return new Date(todaysYear, todaysMonth, todaysDate - showDays).toISOString().split('T')[0];
}
export function createDateLabels(numOfLabels){
    let labels = [];
    for (let i = numOfLabels; i > 0; i--){
        labels.push(getDateByDaysFromToday(i))
    }
    return labels;
}


// type can be "sales" or "streams"
export async function getData (type, showDays) {

    let newDate = getDateByDaysFromToday(showDays)
    // console.log(newDate, "...", type)

    return axios.get(`https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${newDate}&type=${type}`).then(res=>{
        if (res && res.data && res.data.status && res.data.status.code && res.data.status.code===200){

            // console.log(res.data.body)
            return res.data.body
        } else {
            console.log('error with data format')
        }
    }).catch(e=>console.error('unable to retrieve "GetData" from backend'))
}

export function filterBy (array, key, keyValue){
    return array.filter( el => el[key] === keyValue)
}

export function createArray(array, key){
    return array.map( el => el[key]);
}

export const sortBy = {
    hl: function (array, key){
        if(key){
            return array.sort((a, b) => b[key]-a[key])
        }else {
            return array.sort((a, b) => b-a)
        }
    },
    lh: function (array, key){
        if(key){
            return array.sort((a, b) => a[key]-b[key])
        }else {
            return array.sort((a, b) => a-b)
        }
    },
    alpha: function (array, key){
        if(key){
            return array.sort((a, b) => a[key]-b[key])
        }else {
            return array.sort()
        }
    }
}
export function getFirstOfArray(array, num){
    array.splice(num);
    return array;
}
export function mergeDuplicates(array, idKey, mergeKey){
    try{
        if(array && array.length && idKey && mergeKey){
            let returnArray = [];
            // loop through array
            for(let i = 0; i < array.length;i++){
                let el = array[i];
                if(i === 0) {
                    returnArray.push(el)
                } else {
                    // loop through returnArray for matching id
                    for(let returnArrayIndex = 0; returnArrayIndex<returnArray.length; returnArrayIndex++){
                        if(el[idKey] === returnArray[returnArrayIndex][idKey]) {
                            returnArray[returnArrayIndex][mergeKey]+=el[mergeKey];
                            break;
                        } else if (el[idKey] !== returnArray[returnArrayIndex][idKey] && returnArrayIndex===returnArray.length-1) {
                            returnArray.push(el);
                            break;
                        }
                    }
        
                }
            }
            return returnArray;
        }
    } catch (e){
        throw new Error ("error at merge...")
    }
}


