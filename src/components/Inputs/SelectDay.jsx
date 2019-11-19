import React from 'react';

export default function SelectDay (props){
    const {value} = props;
    return (
        <select value={value} onChange={e=>props.handleDaysFilter(e.target.value)}>
            <option value={7} >7 days</option>
            <option value={30}>30 days</option>
            <option value={90}>90 days</option>
            <option value={180}>180 days</option>
            <option value={365}>last year</option>
        </select>
    )
}