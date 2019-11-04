
import React from "react";

import Multiview from '../charts/Multiview.jsx';
import Simpleview from '../charts/Simpleview.jsx';

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

class Dashboard extends React.Component {

  render() {
    return (
        <div className="content">
          <Row>
              <Col md="12">
                <Multiview 
                  title="SimuStream" 
                  summary="Sales" 
                  chartType="line"
                  dataType="sales"
                  labels={[
                    ["Last Week", "days", 7],
                    ["Last Month", "days", 30],
                    ["Last Year", "months", 12]
                  ]}
                />
              </Col>
          </Row>

          <Row>
            <Col md="4">
              < Simpleview 
                title="test 1" 
                summary="views" 
                icon="icon-bell-55"
                type="line"
              />
            </Col>
            <Col md="4">
              < Simpleview 
                title="test 2" 
                summary="demo data" 
                icon="icon-delivery-fast"
                type="line"
              />
            </Col>
            <Col md="4">
              < Simpleview 
                title="test 3" 
                summary="demo data" 
                icon="icon-delivery-fast"
                type="line"
              />
            </Col>
          </Row>
        </div>
    );
  }
}

export default Dashboard;
