
import React from "react";

// import Static from '../charts/Static.jsx';
// import Views from '../charts/Views.jsx';
import Simpleview from '../charts/Simpleview'
import SalesPerStream from '../charts/SalesPerStream'
import Select from '../components/Inputs/Select'
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
// const getData = require("../datahandlers/GetData").GetData;
// const getDateFromToday = require("../componentHandlers/GetData").getDateByDaysFromToday;
const getLabels = require("../datahandlers/GetData").createDateLabels;
// const filter = require("../datahandlers/filterData").filter;

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      defaultLabels: [],
      company: "Simustream",
      streamsData: {},
      salesData: {},
      days: 365
    }
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDaysFilter = this.handleDaysFilter.bind(this);
  }

  componentDidMount(){
    // this.updateData();
  }

  createLabels(){
    this.setState({
      defaultLabels: getLabels(this.state.days)
    })
  }

  // filterData(){

  //   this.setState({

  //   })
  // }

  // async updateData(){
  //   await getData("streams", this.state.days).then(res=>{
  //     // console.log(res)
  //     this.setState({
  //       streamsData: res
  //     })
  //   })
  //   await getData("sales", this.state.days).then(res=>{
  //     // console.log(res)
  //     this.setState({
  //       salesData: res
  //     })
  //     this.createLabels();
  //     this.filterData();
  //   })
  // }

  handleCompany(val){
    this.setState({
      company: val
    })
  }

  async handleDaysFilter(val){
    await this.setState({
      days: parseInt(val)
    })
    this.updateData();
  }

  render() {
    // console.log(this.state)
    // const {defaultLabels} = this.state;
    const {totalOrdersCount, orderSales} = this.state.salesData;
    const {streamViews, totalStreamsCount} = this.state.streamsData;
    return (
        <div className="content">
          <Row>
            <div className="inputHeader">
              <Select handleCompany={this.handleCompany} location={document.location.pathname.split('/')[2]}/>
              <select onChange={e=>this.handleDaysFilter(e.target.value)}>
                <option value={7} >7 days</option>
                <option value={30}>30 days</option>
                <option value={90}>90 days</option>
                <option value={180}>180 days</option>
                <option value={365}>last year</option>
              </select>
            </div>
          </Row>
          <Row>
            <Col md="12">
              < Simpleview 
                title="Views" 
                summary={`Total Views: ${streamViews}  |  Streams Created: ${totalStreamsCount}`} 
                type="line"
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              < Simpleview 
                title="Sales" 
                summary={`Total Orders: ${totalOrdersCount}  |  Revenue: $${orderSales}`}
                type="line"
              />
            </Col>

          </Row>
          <Row>
            <Col md="12">
              {/* < SalesPerStream 
                title="Sales per Stream" 
                summary={`Total Sales: $${orderSales}`} 
                type="line"
                days={this.state.days}
              /> */}
            </Col>
          </Row>
        </div>
    );
  }
}

export default Dashboard;
