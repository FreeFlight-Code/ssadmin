
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
const {
  top5SalesCustomers,
  top5ViewsCustomers,
  totalProducts,
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
      defaultLabels: [],
      company: "",
      streamsData: {},
      salesData: {},
      days: 365
    }
    this.handleCompanyFilter = this.handleCompanyFilter.bind(this);
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

  handleCompanyFilter(val){
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
              <SelectCompany id='companyIdDropdown' handleCompanyFilter={this.handleCompanyFilter} location={document.location.pathname.split('/')[2]}/>
              <SelectDay handleDaysFilter={this.handleDaysFilter} value={this.state.days}/>
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
              days={this.state.days} // required
              title="Most Sales"
              headers={["Client", "Sales"]}
              functionCall={top5SalesCustomers}
            />
          </Row>
          <Row>
            <BasicTable 
              days={this.state.days} // required
              title="Most Views"
              headers={["Client", "Views"]}
              functionCall={top5ViewsCustomers}
            />
          </Row>
        </div>
    );
  }
}

export default Dashboard;
