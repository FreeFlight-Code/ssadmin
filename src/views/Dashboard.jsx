
import React from "react";

import StaticComponent from '../charts/StaticComponent.jsx';
// import Views from '../charts/Views.jsx';
import Simpleview from '../charts/Simpleview'
// import SalesPerStream from '../charts/SalesPerStream'
import Select from '../components/Inputs/Select'
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
// const getLabels = require("../datahandlers/GetData").createDateLabels;
const salesPerStream = require('../componentHandlers/salesPerStream');
const totalSales = require('../componentHandlers/totalSales');
const totalApiCalls = require('../componentHandlers/totalApiCalls');
const totalViews = require('../componentHandlers/totalViews');
const salesPerUser = require('../componentHandlers/salesPerUser');
const totalProducts = require('../componentHandlers/totalProducts');

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      defaultLabels: [],
      company: "",
      streamsData: {},
      salesData: {},
      days: 365
    }
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDaysFilter = this.handleDaysFilter.bind(this);
  }
  componentDidMount(){
    let page = document.location.pathname.split('/')[2];
    switch(page){
      case "ent-client":
          this.setState({
            company: "5d4016512ffd5e0d2fc346b4"
          })
          break;
      case "sub-client":
          this.setState({
            company: 2
          })
          break;
      default:
        this.setState({
          company: ""
        })
    }
  }

  handleCompany(val){
    this.setState({
      company: val
    })
    // console.log(val)
  }

  handleDaysFilter(val){
    this.setState({
      days: parseInt(val)
    })
  }

  render() {
    // console.log(this.state)
    return (
        <div className="content">
          <Row>
            <div className="inputHeader">
              <Select value={this.state.company} handleCompany={this.handleCompany} location={document.location.pathname.split('/')[2]}/>
              <select value={this.state.days} onChange={e=>this.handleDaysFilter(e.target.value)}>
                <option value={7} >7 days</option>
                <option value={30}>30 days</option>
                <option value={90}>90 days</option>
                <option value={180}>180 days</option>
                <option value={365}>last year</option>
              </select>
            </div>
          </Row>
          {/* <Row>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days}
                functionCall={totalSales}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Views" 
                type="stat"
                days={this.state.days}
                functionCall={totalViews}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="API calls" 
                type="stat"
                days={this.state.days}
                functionCall={totalApiCalls}
              />
            </Col>
          </Row>
          <Row>
            <Col md="4">
              < StaticComponent 
                title="Products Sold" 
                type="stat"
                days={this.state.days}
                functionCall={totalProducts}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days}
                functionCall={totalSales}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days}
                functionCall={totalSales}
              />
            </Col>
          </Row> */}
          <Row>
            <Col md="12">
              < Simpleview 
                days={this.state.days} // required
                company={this.state.company} // required
                title="Sales Per Stream" 
                type="line"
                functionCall={salesPerStream}
                unit="Sales"
              />
            </Col>
          </Row>
          {/* <Row>
            <Col md="12">
              < Simpleview 
                title="Sales Per User" 
                type="line"
                days={this.state.days}
                functionCall={salesPerUser}
                unit="Sales"
              />
            </Col>
          </Row> */}
        </div>
    );
  }
}

export default Dashboard;
