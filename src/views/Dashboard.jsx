
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
const getSalesPerStream = require('../componentHandlers/salesPerStream');
const totalSales = require('../componentHandlers/totalSales');
const totalApiCalls = require('../componentHandlers/totalApiCalls');
const totalViews = require('../componentHandlers/totalViews');
const salesPerId = require('../componentHandlers/salesPerId');

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

  handleCompany(val){
    this.setState({
      company: val
    })
  }

  handleDaysFilter(val){
    this.setState({
      days: parseInt(val)
    })
  }

  render() {

    return (
        <div className="content">
          <Row>
            <div className="inputHeader">
              <Select handleCompany={this.handleCompany} location={document.location.pathname.split('/')[2]}/>
              <select value={this.state.days} onChange={e=>this.handleDaysFilter(e.target.value)}>
                <option value={7} >7 days</option>
                <option value={30}>30 days</option>
                <option value={90}>90 days</option>
                <option value={180}>180 days</option>
                <option value={365}>last year</option>
              </select>
            </div>
          </Row>
          <Row>
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
            <Col md="12">
              < Simpleview 
                title="Sales Per Stream" 
                type="line"
                days={this.state.days}
                functionCall={getSalesPerStream}
                unit="Sales"
              />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              < Simpleview 
                title="Sales Per Id" 
                type="line"
                days={this.state.days}
                functionCall={salesPerId}
                unit="Sales"
              />
            </Col>
          </Row>
        </div>
    );
  }
}

export default Dashboard;
