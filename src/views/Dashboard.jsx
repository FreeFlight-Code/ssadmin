
import React from "react";

import StaticComponent from '../charts/StaticComponent.jsx';
import Simpleview from '../charts/Simpleview';
import SelectCompany from '../components/Inputs/SelectCompany';
import SelectDay from '../components/Inputs/SelectDay';
import BasicTable from '../components/BasicTable/BasicTable.jsx';

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
const salesPerStream = require('../componentHandlers/salesPerStream');
const totalSales = require('../componentHandlers/totalSales');
const totalApiCalls = require('../componentHandlers/totalApiCalls');
const totalViews = require('../componentHandlers/totalViews');
const salesPerUser = require('../componentHandlers/salesPerUser');
const totalProducts = require('../componentHandlers/totalProducts');
const top5ViewsCustomers = require('../componentHandlers/top5ViewsCustomers');

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
            company: "5d4016512ffd5e0d2fc346b4"
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
              <SelectCompany id='companyIdDropdown' handleCompany={this.handleCompany} location={document.location.pathname.split('/')[2]}/>
              <SelectDay value={this.state.days}/>
            </div>
          </Row>
          <Row>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required
                functionCall={totalSales}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Views" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required
                functionCall={totalViews}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="API calls" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required
                functionCall={totalApiCalls}
              />
            </Col>
          </Row>
          <Row>
            <Col md="4">
              < StaticComponent 
                title="Products Sold" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required
                functionCall={totalProducts}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required
                functionCall={totalSales}
              />
            </Col>
            <Col md="4">
              < StaticComponent 
                title="Total Sales" 
                type="stat"
                days={this.state.days} // required
                company={this.state.company} // required 
                functionCall={totalSales}
              />
            </Col>
          </Row>
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
          <Row>
            <Col md="12">
              < Simpleview 
                days={this.state.days} // required
                company={this.state.company} // required 
                title="Sales Per User" 
                type="line"
                functionCall={salesPerUser}
                unit="Sales"
              />
            </Col>
          </Row>
          <Row>
            <BasicTable 
            title="happy table"
            headers={["Name", "Country", "City", "Salary"]}
            functionCall={top5ViewsCustomers}
            />
          </Row>
        </div>
    );
  }
}

export default Dashboard;
