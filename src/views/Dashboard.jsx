
import React from "react";

import StaticComponent from '../charts/StaticComponent.jsx';
import Simpleview from '../charts/Simpleview';
import SelectCompany from '../components/Inputs/SelectCompany';
import SelectDay from '../components/Inputs/SelectDay';
import Top5Users from '../components/Widgets/Top5Users'
import Top5Views from '../components/Widgets/Top5Views'

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
const {
  totalProductsSold,
  totalViews,
  salesPerUser,
  salesPerStream,
  totalSales,
  totalApiCalls
} = require('../componentHandlers/apiCalls')

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      company: ""
    }
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

  render() {
    return (
        <div className="content">
          <Row>
            <div className="inputHeader">
              <SelectCompany id='companyIdDropdown'/>
              <SelectDay/>
            </div>
          </Row>
          <Row>
            <Col md="4" xl="2">
              < StaticComponent 
                title="Completed Sales" 
                type="stat"
                functionCall={totalSales}
              />
            </Col>
            <Col md="4" xl="2">
              < StaticComponent 
                title="Stream Views" 
                type="stat"
                functionCall={totalViews}
              />
            </Col>
            <Col md="4" xl="2">
              < StaticComponent 
                title="API calls" 
                type="stat"
                functionCall={totalApiCalls}
              />
            </Col>
            <Col md="4" xl="2">
              < StaticComponent 
                title="Products Clicked" 
                type="stat"
                functionCall={totalProductsSold}
              />
            </Col>
            <Col md="4" xl="2">
              < StaticComponent 
                title="Added to Cart" 
                type="stat"
                functionCall={totalProductsSold}
              />
            </Col>
            <Col md="4" xl="2">
              < StaticComponent 
                title="Products Sold" 
                type="stat"
                functionCall={totalProductsSold}
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
          {/* <Col md="12">
          <Row>
            <Top5Views
              days={this.state.days} // required
            />
          </Row>
          </Col>
          <Col md="12">
          <Row>
            <Top5Users
              days={this.state.days} // required
            />
          </Row>
          </Col> */}
        </div>
    );
  }
}

export default Dashboard;