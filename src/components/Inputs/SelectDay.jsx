import React from 'react';
import AddPropsHOC from '../HOC';

function SelectDay (props){
    const {days, handleDaysFilter} = props;
    return (
        <select value={days} onChange={e=>handleDaysFilter(e.target.value)}>
            <option value={7} >7 days</option>
            <option value={30}>30 days</option>
            <option value={90}>90 days</option>
            <option value={180}>180 days</option>
            <option value={365}>last year</option>
        </select>
    )
}

export default AddPropsHOC(SelectDay);