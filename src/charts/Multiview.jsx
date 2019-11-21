import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import CreateDateLabels from '../labelhandlers/CreateDateLabels'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// data
import GetData from "../datahandlers/GetData";
import AddPropsHOC from "../components/HOC";




class Multiview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [92,40,28],
      labelIndex: 0,
      labels:[]
    };
  }

  componentDidMount(){
    const { dataType, labels } = this.props;
    if(!dataType) throw new Error ("Incorrect datatype passed to multiview")
    if(!labels) throw new Error ("Incorrect label format passed to multiview")
    if (dataType){
      GetData(dataType).then(res=>console.log(res)).catch(e=>console.log(e))
      const currentLabels = CreateDateLabels(labels);
      switch (dataType){
        case "sales":
              this.setState({
                labels: currentLabels
              })
        break;
        case "streams":
              this.setState({
                labels: currentLabels
              })
        break;
        default:
          console.error("improper datatype passed to multiview component")

      }
    }
  }

  options = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "#f5f5f5",
      titleFontColor: "#333",
      bodyFontColor: "#666",
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.0)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }
      ]
    }
  };

  passChartJS = canvas => {
      const ctx = canvas.getContext("2d");
  
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: this.state.labels[this.state.labelIndex],
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.state.data
          }
        ]
      };
    }
  

  setLabelIndex = name => {
    this.setState({
      labelIndex: name
    });
  };

  chartType = (type) => {
    switch (type) {
      case "line":
        return (
          <Line
            data={this.passChartJS}
            options={this.options}
          />
        )
      case "bar":
        return (
          <Bar
            data={this.passChartJS}
            options={this.options}
          />
        )
    
      default:
        console.error('error with chart type')
        return null
    }

  }

  render() {
    // console.log(this.state)
    let {title, summary, chartType, labels} = this.props;
    let label1 = labels[0][0];
    let label2 = labels[1][0];
    let label3 = labels[2][0];
    if(!chartType) chartType = "line";
    if(title && summary && chartType){
      return (
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">{title}</h5>
                        <CardTitle tag="h2">{summary}</CardTitle>
                      </Col>
                      <Col sm="6">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.labelIndex === 0
                            })}
                            color="info"
                            id="0"
                            size="sm"
                            onClick={() => this.setLabelIndex(0)}
                          >
                            <input
                              defaultChecked
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              {label1}
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.labelIndex === 1
                            })}
                            onClick={() => this.setLabelIndex(1)}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              {label2}
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-gift-2" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.labelIndex === 2
                            })}
                            onClick={() => this.setLabelIndex(2)}
                          >
                            <input
                              className="d-none"
                              name="options"
                              type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              {label3}
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02" />
                            </span>
                          </Button>
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>

                  <CardBody>
                    <div className="chart-area">
                      {this.chartType(chartType)}
                    </div>
                  </CardBody>
                </Card>
      );
    } else {
      return null;
    }
  }
}

export default AddPropsHOC (Multiview);