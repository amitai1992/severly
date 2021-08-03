import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import { getServersList, getServersTypes, addServer, currencyApi } from '../../services/service';
import './Table.css';


export default function Table(props) {
    let [serversAndCurrency, setInfo] = useState(
        {
            servers: [],
            currentCurrency: 'USD'
        }
    );
    
    let [serversTypes, setTypes] = useState([]);

    let currencyController = serversAndCurrency.currentCurrency;
    useEffect(() => {
        getServersList().then(data => {
            setInfo({ servers: [...data], currentCurrency: currencyController })
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


    serversAndCurrency.servers.forEach(server => {
        let row = <Row data={server} setList={setInfo} />
        rows.push(row);
    });

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
            addServer(newServer).then(getServersList().then(data => { setInfo({ servers: [...data] }) }));
        }
    }

    const changeCurrency = (e) => {
        let newCurrency = e.target.value;
        let current = serversAndCurrency.currentCurrency;
        let tempServers = [...serversAndCurrency.servers];
        let amount = 0;
        for (let i = 0; i < tempServers.length; i++) {
            amount = tempServers[i].type.price;
            currencyApi(current, newCurrency, amount).then(res => {
                tempServers[i].type.price = res.conversion_result 
            });
        }
        setInfo({
            servers:[...tempServers],
            currentCurrency: newCurrency
        });
    }

    return (
        <div>
            <table className='table table-bordered table-sm table-servers' >
                <thead>
                    <tr>
                        {tHeads}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table >
            {/* <select id="currency" onChange={changeCurrency}>
                <option value="USD">USD</option>
                <option value="ILS">ILS</option>
                <option value="EUR">EUR</option>
            </select> */}

            <div className='input-row'>
                <input className='form-filed input-filed' id='serverName' type='text' placeholder='server name' />
                <input className='form-filed input-filed'  id='serverIp' type='text' placeholder='server ip' />
            </div>
            <div className='input-row'>
                <select className='form-filed input-filed'  id='serverType'>
                    {toggleTypes}
                </select>
                <button className='btn btn-primary btn-sm form-filed add-btn' onClick={addNewServer}>Add Server</button>
            </div>
        </div>
    )
}
