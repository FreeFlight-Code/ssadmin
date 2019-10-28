import axios from 'axios';

async function GetViews () {

    let today = new Date();
    let lastYear = (new Date().getFullYear())-1;
    let date = new Date(today.setFullYear(lastYear)).toISOString().split('T')[0];

    await axios.get(`https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${date}&type=streams`).then(res=>{
        if (res && res.data && res.data.status && res.data.status.code && res.data.status.code===200){
            return (res.data.body)
        } else {
            console.log('error')
        }
    }).catch(e=>console.error('unable to retrieve "GetSales" from backend'))
}

export default GetViews;