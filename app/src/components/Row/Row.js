import React, { useState, useEffect } from 'react';
import { deleteChosenServer, getServersList, turnServerOnOF } from '../../services/service';
export default function Row(props) {
    let [runningTime, setTime] = useState(0);

    let data = props.data;
    let switchBtn = '';

    if (data.isRunning) {
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

    useEffect(() => {
        if (data.isRunning) {
            const interval = setInterval(() => {
                setTime(runningTime++);
                console.log(runningTime);
            }, 60000);
            return () => clearInterval(interval);
        }
         // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])
    return (
        <tr>
            <td>{data.ip}</td>
            <td>{data.name}</td>
            <td>{runningTime}</td>
            <td><button onClick={turnOnServer} type="button" className="btn btn-link">{switchBtn}</button></td>
            <td>{data.type.name}</td>
            <td>{data.type.price * runningTime}</td>
            <td><button onClick={deleteServer}>Delete</button></td>
        </tr>
    )
}