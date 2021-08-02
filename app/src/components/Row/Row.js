import React, { useState, useEffect } from 'react';
import { deleteChosenServer, getServersList, turnServerOnOF } from '../../services/service';
export default function Row(props) {
    let data = props.data;
    let switchBtn = '';
    console.log(data);
    if(data.isRunning) {
        switchBtn = 'Turn Off';
    }
    else {
        switchBtn = 'Turn On';
    }
    const deleteServer = (e) => {
        deleteChosenServer(data).then(getServersList().then(data => props.setList([...data])));
    }

    const turnOnServer = (e) => {
        data.isRunning = !data.isRunning;
        turnServerOnOF(data).then(getServersList().then(list => props.setList([...list])));
    }
    return(
        <tr>
            <td>{data.ip}</td>
            <td>{data.name}</td>
            <td>0</td> 
            <td><button onClick={turnOnServer} type="button" className="btn btn-link">{switchBtn}</button></td>
            <td>{data.type.name}</td>
            <td>{data.type.price}</td>
            <td><button onClick= {deleteServer}>Delete</button></td>
        </tr>
    )
}