import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// data options
import ViewsData from '../data/GetViews';
import SalesData from '../data/GetSales';

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

class Multiview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "week"
    };
  }
  todaysDate = new Date().getDate();

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

  months = ()=>{
    let array = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC"
    ]
    let thisMonth = new Date().getMonth();
    for(let i = 0; i < (11 - thisMonth); i++){
      let lastMonth = array.pop();
      array.unshift(lastMonth);
    }
    return array;
  }

  labels = {
    week: [
      this.todaysDate - 6,
      this.todaysDate - 5,
      this.todaysDate - 4,
      this.todaysDate - 3,
      this.todaysDate - 2,
      this.todaysDate - 1,
      this.todaysDate,

    ],
    month: [
      this.todaysDate - 29,
      this.todaysDate - 28,
      this.todaysDate - 27,
      this.todaysDate - 26,
      this.todaysDate - 25,
      this.todaysDate - 24,
      this.todaysDate - 23,
      this.todaysDate - 22,
      this.todaysDate - 21,
      this.todaysDate - 20,
      this.todaysDate - 19,
      this.todaysDate - 18,
      this.todaysDate - 17,
      this.todaysDate - 16,
      this.todaysDate - 15,
      this.todaysDate - 14,
      this.todaysDate - 13,
      this.todaysDate - 12,
      this.todaysDate - 11,
      this.todaysDate - 10,
      this.todaysDate - 9,
      this.todaysDate - 8,
      this.todaysDate - 7,
      this.todaysDate - 6,
      this.todaysDate - 5,
      this.todaysDate - 4,
      this.todaysDate - 3,
      this.todaysDate - 2,
      this.todaysDate - 1,
      this.todaysDate,

    ],
    year: this.months()
  }

  passChartJS = canvas => {
      const ctx = canvas.getContext("2d");
  
      const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

      return {
        labels: this.labels[this.state.bigChartData],
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
            data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
          }
        ]
      };
    }
  

  setBgChartData = name => {
    this.setState({
      bigChartData: name
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
    const {title, summary, type} = this.props;
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
                            active: this.state.bigChartData === "week"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("week")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Last Week
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
                            active: this.state.bigChartData === "month"
                          })}
                          onClick={() => this.setBgChartData("month")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Last Month
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
                            active: this.state.bigChartData === "year"
                          })}
                          onClick={() => this.setBgChartData("year")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Last Year
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
                    {this.chartType(type)}
                  </div>
                </CardBody>
              </Card>
    );
  }
}

export default Multiview;