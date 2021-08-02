import React, { useState, useEffect } from 'react';

export default function Row(props) {
    let data = props.data;
    return(
        <tr>
            <td>{data.ip}</td>
            <td>{data.name}</td>
            <td>0</td> 
            <td>Turn Off</td>
            <td>{data.type.name}</td>
            <td>{data.type.price}</td>
            <td><button>Delete</button></td>
        </tr>
    )
}