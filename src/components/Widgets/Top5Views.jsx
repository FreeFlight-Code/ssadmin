import React from 'react';

import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";

const {
  top5ViewsCustomers
} = require('../../componentHandlers/apiCalls');


//  Needs an array of streams
//
//
//
//
//

class Top5Views extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      array: []
    }
  }

  componentDidMount(){
    this.updateNow()
  }
  componentDidUpdate(prev){
    if (prev.days !== this.props.days)this.updateNow();
  }
  async updateNow(){
    const data = await top5ViewsCustomers(this.props.days);
    this.setState({
      array:data
    })
  }

  render (){
    const {array} = this.state;
    return(
      <Card>
          <CardHeader>
              <CardTitle tag="h4">Top 5 Viewed Accounts</CardTitle>
          </CardHeader>
          <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>User</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  <TableData data={array}/>
                </tbody>
              </Table>
          </CardBody>
      </Card>
    )
  }
}

function TableData (props){
  const {data} = props;
  return data.map((data, i)=>{
    return (
      <tr key={`table-top5views-${i}`}>
        <td key={`top5views-user-${i}`}>{data.user}</td>
        <td key={`top5views-amount-${i}`}>{data.views}</td>
      </tr>
    )
  })
}

// function AddPropsHOC(WrappedComponent) {
//   return class extends React.Component {

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }
// }

// export default AddPropsHOC(Top5Views);

export default Top5Views;