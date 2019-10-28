
import React from "react";

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";


export default class Simpleview extends React.Component {

  passChartJS = canvas => {
    const ctx = canvas.getContext("2d");

    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: [1, 2, 3, 4, 5, 6, 7, 8],
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
        console.log('error with chart type')
        return null
    }
  }


  render() {
    const {title, summary, icon, type} = this.props;
    return (
      <Card className="card-chart">
      <CardHeader>
          <h5 className="card-category">{title}</h5>
          <CardTitle tag="h3">
          {icon ? <i className={`tim-icons ${icon} text-info`}/> : null}
          {summary}
          </CardTitle>
      </CardHeader>
      <CardBody>
          <div className="chart-area">
              {this.chartType(type)}
          </div>
      </CardBody>
      </Card>
    )
  }
}
