import React from 'react';

import {
    Card,
    CardTitle,
    CardHeader,
    CardBody,
    Table
  } from "reactstrap";

export default function BasicTable (props){
  let shouldRender = true;

  let {title, headers} = props;

  const TableHeader = ()=>{

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
    } else shouldRender = false;
  }


  if (shouldRender) return (
      <Card>
      <CardHeader>
        <CardTitle tag="h4">{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <Table className="tablesorter" responsive>
          <TableHeader/>
          <tbody>
            <tr>
              <td>Dakota Rice</td>
              <td>Niger</td>
              <td>Oud-Turnhout</td>
              <td>$36,738</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )

}