import React, { useState, useEffect } from 'react';
import { deleteChosenServer, getServersList, turnServerOnOF } from '../../services/service';
export default function Row(props) {
    let [runningTime, setTime] = useState(0);
    let [data, setData] = useState({ ...props.data });


    let switchBtn = '';

    if (data.isRunning) {
        switchBtn = 'Turn Off';
    }
    else {
        switchBtn = 'Turn On';
    }
    const deleteServer = (e) => {
        deleteChosenServer(data).then(getServersList().then(data => props.setList({servers:[...data]})));
    }

    const turnOnServer = (e) => {
        const tempData = { ...data };
        tempData.isRunning = !data.isRunning;
        turnServerOnOF(tempData).then(obj => {
            setData(obj);
        });
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (data.isRunning === true) {
                setTime((runningTime++));

            }
            else {
                setTime(0);

            }

        }, 60000);
        return () => clearInterval(interval);
    })
    return (
        <tr>
            <td>{data.ip}</td>
            <td>{data.name}</td>
            <td>{data.isRunning === true ? runningTime : 0}</td>
            <td><button onClick={turnOnServer} type="button" className="btn btn-link">{switchBtn}</button></td>
            <td>{data.type.name}</td>
            <td>{data.isRunning === true ? data.type.price * runningTime : data.type.price}</td>
            <td><button className="btn btn-outline-danger btn-sm" onClick={deleteServer}>Delete</button></td>
        </tr>
    )
}