
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
          {/* <Row>
              <Col md="12">
                <Multiview 
                  title="SimuStream" 
                  summary="Views" 
                  chartType="line"
                  dataType="views"
                />
              </Col>
          </Row> */}
          <Row>
              <Col md="12">
                <Multiview 
                  title="SimuStream" 
                  summary="Sales" 
                  chartType="line"
                  dataType="sales"
                />
              </Col>
          </Row>

          <Row>
            <Col md="4">
              < Simpleview 
                title="war games" 
                summary="wear" 
                icon="icon-bell-55"
                type="line"
              />
            </Col>
            <Col md="4">
              < Simpleview 
                title="help" 
                summary="ryoulive" 
                icon="icon-delivery-fast"
                type="line"
              />
            </Col>
            <Col md="4">
              < Simpleview 
                title="ToolboxOS" 
                summary="total views" 
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
