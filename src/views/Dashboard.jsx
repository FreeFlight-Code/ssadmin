
import React from "react";

import Static from '../charts/Static.jsx';
// import Views from '../charts/Views.jsx';
import Simpleview from '../charts/Simpleview'
import Select from '../components/Inputs/Select'
// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

class Dashboard extends React.Component {
  constructor(props){
    super(props)
    this.handleCompany = this.handleCompany.bind(this);
    this.handleDaysFilter = this.handleDaysFilter.bind(this);
  }

  handleCompany(val){
    console.log(val)
  }

  handleDaysFilter(val){
    console.log(val)
  }

  render() {

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
          {/* <Row>
              <Col md="12">
                < Static 
                  title="SimuStream" 
                  summary="Views" 
                  chartType="line"
                  dataType="streams"
                  labels={[
                    ["Streams Created - 30", "days", 7],
                    ["Stream Views - 30", "days", 30],
                    ["Stream Views - 365", "days", 365]
                  ]}
                />
              </Col>
          </Row> */}
          {/* <Row>
              <Col md="12">
                < Views 
                  title="SimuStream" 
                  summary="Views" 
                  chartType="line"
                  dataType="streams"
                  labels={[
                    ["Streams Created - 30", "days", 7],
                    ["Stream Views - 30", "days", 30],
                    ["Stream Views - 365", "days", 365]
                  ]}
                />
              </Col>
          </Row> */}

          {/* <Row> */}
            <Col md="12">
              < Simpleview 
                title="test 1" 
                summary="views" 
                type="line"

              />
            </Col>
            {/* <Col md="4">
              < Simpleview 
                title="test 2" 
                summary="demo data" 
                icon="icon-delivery-fast"
                type="line"
              />
            </Col> */}
            {/* <Col md="4">
              < Simpleview 
                title="test 3" 
                summary="demo data" 
                icon="icon-delivery-fast"
                type="line"
              />
            </Col> */}
          {/* </Row> */}
        </div>
    );
  }
}

export default Dashboard;
