import React from 'react';

import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Table
} from "reactstrap";

// const {AddPropsHOC} = require('../HOC')
const {
  top5SalesCustomers
} = require('../../componentHandlers/apiCalls');


//  Needs an array of streams
//
//
//
//
//

class Top5Users extends React.Component {
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
    const data = await top5SalesCustomers(this.props.days);
    this.setState({
      array:data
    })
  }

  render (){
    const {array} = this.state;
    if(array && array.length){
      return(
        <Card>
            <CardHeader>
                <CardTitle tag="h4">Top 5 Accounts</CardTitle>
            </CardHeader>
            <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>User</th>
                      <th>Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableData data={array}/>
                  </tbody>
                </Table>
            </CardBody>
        </Card>
      )
    } else return null
  }
}

function TableData (props){
  const {data} = props;
  return data.map((data, i)=>{
    return (
      <tr key={`table-top5users-${i}`}>
        <td key={`top5users-user-${i}`}>{data.user}</td>
        <td key={`top5users-amount-${i}`}>{data.amount}</td>
      </tr>
    )
  })
}

// export default AddPropsHOC(Top5Users);

export default Top5Users;