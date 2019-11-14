const React = require("react");

// reactstrap components
const {
  Card,
  CardHeader,
  CardTitle
} = require("reactstrap");


export default class Simpleview extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      labels: ["no data found"],
      data: [0]
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
    data.then(res =>{
      const {staticContent} = res;
      this.setState({
        staticContent: staticContent
      })
    })
  }



  render() {
    // console.log(this.state);
    const {title, icon} = this.props;
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
      <h1>{staticContent}</h1>
      </Card>
    )
  }
}
