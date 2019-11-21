import AddPropsHOC from "../components/HOC";

const React = require("react");

// reactstrap components
const {
  Card,
  CardHeader,
  CardTitle
} = require("reactstrap");


class Simpleview extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      data: [0]
    }
  }
  componentDidMount(){
    this.updateNow()
  }
  componentDidUpdate(prev){
    if (
      prev.days !== this.props.days ||
      prev.company !== this.props.company
    ){
      this.updateNow()
    }
  }
  updateNow(){
    let companyId = this.props.company ? this.props.company : null;
    let data = this.props.functionCall(this.props.days, companyId)
    data.then(res =>{
      const {staticContent} = res;
      this.setState({
        staticContent: staticContent
      })
    })
  }



  render() {
    // console.log(this.props)
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

export default AddPropsHOC(Simpleview)