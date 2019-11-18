import React from 'react';

import {
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    Table
  } from "reactstrap";

export default class BasicTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: []
    }
  }

  async componentDidMount(){
    const {days} = this.props;
    const rows = await this.props.functionCall(days)
    this.setState({
      rows: rows,
      days: days
    })
  }

  render (){
    const {title, headers} = this.props;
    const {rows} = this.state;
    if(rows && rows.length && title && headers && headers.length){
      return(
        <Card>
          <CardHeader>
            <CardTitle tag="h4">{title}</CardTitle>
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <TableHeader headers={headers}/>
              <tbody>
                <TableBody rows={rows}/>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      )
    } else return null
  }
}
function TableHeader (props) {
  const {headers} = props;
  if (headers && headers.length){
  const headerList = headers.map((el, i)=>{
    return <th key={`table-header-${i}`}>{el}</th>
  })
  return(
    <thead className="text-primary">
      <tr>
        {headerList}
      </tr>
    </thead>
  )
  }
}

function TableBody (props) {
  const {rows} = props;
    return rows.map((row, i)=>{
      return (
        <tr key={`table-${row}-${i}`}>
          <TableData rowData={row}/>
        </tr>
      )
    })
}

function TableData (props){
  const {rowData} = props;
  return rowData.map((data, i)=>{
    return <td key={`table-row-${data}-${i}`}>{data}</td>
  })
}