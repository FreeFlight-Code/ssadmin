import React, { useState, useRef } from 'react';

import './App.css';

function App() {



  const [salesData, setSalesData] = useState();
  const [streamsData, setStreamsData] = useState();
  const [date, setDate] = useState();

  const datePicker = useRef(null);

  function dateHandler (event) {
    let _date = event.target.value;
    const salesUrl = `https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${_date}&type=sales`
    const streamsUrl = `https://api-v1.simustream.com/api/v1/daily-updates/daily-stats/get-total-stats?maxDate=${_date}&type=streams`
    
    fetch(salesUrl)
      .then(res=>res.json())
      .then(res=>setSalesData(res.body))
    fetch(streamsUrl)
      .then(res=>res.json())
      .then(res=>setStreamsData(res.body));
  }

  function viewStream (id) {
    window.open(`https://play.simustream.com/?id=${id}`)
  }

  function getStreamDataById(streamId){
    if (streamsData && streamsData.totalStreams && streamsData.totalStreams.length){
      return streamsData.totalStreams.filter((el, i)=>{
        return el._id === streamId
      })[0];
    }
  }

  function cartRender(index){
    if(salesData.totalOrders[index].checkout && salesData.totalOrders[index].checkout.length && salesData.totalOrders[index].checkout[0].lineItems){
      return salesData.totalOrders[index].checkout[0].lineItems.map((el, i)=>{
        return (
          <div className="hidden">
            <span>Qnty: {el.quantity}</span>
            <span className="preview left" style={{backgroundImage: `url(${el.image_url})`}}></span>
          </div>
        )
      })
    } else {
      return null
    }
  }

  function salesListRender (){
    if (salesData && salesData.totalOrders && salesData.totalOrders.length){
      return (salesData.totalOrders.map((el, index)=>{
        let _date = new Date(el.createdAt);
        let streamViewData = getStreamDataById(el.stream);
        let title = streamViewData ? streamViewData.name : "unknown";
        return(
          <div onClick={()=>{viewStream(el.stream)}} className="item" key={`sale-${index}`}>
            <span className="amount">${el.amount}</span>
            <span className="date">{_date.toLocaleDateString()}</span>
            <span className="title">{title}</span>
            <div>Items: {el.checkout.length}</div>
            <div>{el.customerEmail}</div>
            {cartRender(index)}
          </div>
        )
      }))
    } else {
      return null;
    }
  }

  function streamsListRender () {
    if (streamsData && streamsData.totalStreams && streamsData.totalStreams.length){
      return (streamsData.totalStreams.map((el, index)=>{
        let _date = new Date(el.createdAt);
        return(
          <div onClick={()=>{viewStream(el._id)}} className="item" key={`stream-${index}`}>
              <span className="views">{el.views}</span>
              <span className="date">{_date.toLocaleDateString()}</span>
              <span className="title">{el.name}</span>
              <div className="hidden">
                <span className="preview right" style={{backgroundImage: `url(${el.thumbnail})`}}></span>
                <div className="description">{el.description}</div>
              </div>
          </div>
        )
      }))
    } else {
      return null;
    }
  }

  function renderStreamsData(){
    if(salesData && streamsData){
      return (
        <div className="dataContainer">
          <div className="left">
            <div className="header">
              <span>Purchases: {salesData.totalOrdersCount}</span>
              <span>Total Sales: ${salesData.orderSales}</span>
            </div>
            {salesListRender()}
          </div>
          <div className="right">
            <div className="header">
              <span>Streams Created: {streamsData.totalStreamsCount}</span>
              <span>Stream Views: {streamsData.streamViews}</span>
            </div>
            {streamsListRender()}
          </div>
        </div>
      )
    } else {
      return <div>No data</div>;
    }
  }

  return (
    <div>
      <h1>SIMUSTREAM DATA</h1>
      <input ref={datePicker} placeholder={new Date().now} onChange={ e =>{dateHandler(e)}} value={date} type="date"></input>
      <div>{renderStreamsData()}</div>
    </div>
  );
}

export default App;
