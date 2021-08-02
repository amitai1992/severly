import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import { getServersList, getServersTypes, addServer } from '../../services/service';


export default function Table(props) {
    let [serversList, setList] = useState([]);
    let [serversTypes, setTypes] = useState([]);

    useEffect(() => {
        getServersList().then(data => {
            setList(serversList = [...data])
        });
    }, []);

    useEffect(() => {
        getServersTypes().then(data => {
            setTypes(serversTypes = [...data]);
        });
    }, []);

    let rowHeadlines = ['Ip', 'Server Name', 'Time Running', 'Toggle', 'Type', 'Price', 'Delete'];
    let tHeads = [];
    let rows = [];
    let toggleTypes = [];

    rowHeadlines.forEach(head => {
        let htag = <th scope="col">{head}</th>;
        tHeads.push(htag);
    });

    serversTypes.forEach(type => {
        let option = <option value={type.price}>{type.name}</option>;
        toggleTypes.push(option);
    });


    serversList.forEach(server => {
        let row = <Row data={server} setList = {setList} />
        rows.push(row);
    })

    const addNewServer = (e) => {
        const name = document.getElementById('serverName').value;
        const ip = document.getElementById('serverIp').value;
        const type = document.getElementById('serverType');
        const typeValue = type.value;
        const typeName = type.options[type.selectedIndex].text;

        if (name === '' || name === undefined) {
            alert('please add name');
        }
        else if (ip === '' || ip === undefined) {
            alert('please add ip');
        }
        else if (type === undefined) {
            alert('please choose type');
        }
        else {
            const newServer = {
                name: name,
                ip: ip,
                type: {
                    name: typeName,
                    price: typeValue
                },
                isRunning: false
            }
            addServer(newServer).then(getServersList().then(data => { setList([...data]) }));
        }


    }

    return (
        <div>
            <table className='table' >
                <thead>
                    <tr>
                        {tHeads}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <div>
                <input id='serverName' type='text' placeholder='server name' />
                <input id='serverIp' type='text' placeholder='server ip' />
            </div>
            <div>
                <select id='serverType'>
                    {toggleTypes}
                </select>
                <button onClick={addNewServer}>Add Server</button>
            </div>
        </div>
    )
}
