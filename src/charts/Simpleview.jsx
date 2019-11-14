
const React = require("react");

// react plugin used to create charts
const { Line, Bar } = require("react-chartjs-2");


// reactstrap components
const {Card,
  CardHeader,
  CardBody,
  CardTitle} =
require("reactstrap");


export default class Simpleview extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      labels: ["no data found"],
      data: [0],
      options: {
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
                suggestedMin: 0,
                suggestedMax: 10,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],
          xAxes: [
            {
              barPercentage: .8,
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
      }
    }
  }
  componentDidMount(){
    this.updateNow()
  }
  componentDidUpdate(prev){
    if (prev.days !== this.props.days){
      this.updateNow()
    }
  }
  updateNow(){
    let data = this.props.functionCall(this.props.days)
    console.log(data)
    data.then(res =>{
      const {data, labels, summary, staticContent} = res;
      if(staticContent){
        this.setState({
          staticContent: staticContent
        })
      } else {
        this.setState({
          data: data,
          labels: labels,
          summary: summary
        })
      }
    })
  }
 

  passChartJS = canvas => {
    const ctx = canvas.getContext("2d");

    const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.7)");
    gradientStroke.addColorStop(0.2, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: this.state.labels,
      datasets: [
        {
          label: "Sales",
          fill: true,
          backgroundColor: "rgba(100,100,255,.4)",
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

  chartType = (type) => {
    switch (type) {
      case "line":
        return (
          <Line
            data={this.passChartJS}
            options={this.state.options}
          />
        )
      case "bar":
        return (
          <Bar
          data={this.passChartJS}
          options={this.state.options}
          />
        )
      case "stat":
        return (
          <h1>Static Content</h1>
        )
    
      default:
        console.log('error with chart type')
        return null
    }
  }


  render() {
    console.log(this.state);
    const {title, icon, type} = this.props;
    const {summary, staticContent} = this.state;
    return (
      <Card className="card-chart">
      <CardHeader>
          <h5 className="card-category">{summary || ""}</h5>
          <CardTitle tag="h3">
          {icon ? <i className={`tim-icons ${icon} text-info`}/> : null}
          {title}
          </CardTitle>
      </CardHeader>
{      staticContent ? 
      <h1>{staticContent}</h1>
  
  

:


      <CardBody>
          <div className="chart-area">
              {this.chartType(type)}
          </div>
      </CardBody>}
      </Card>
    )
  }
}
