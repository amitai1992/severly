import React, { useState, useEffect } from 'react';
import Row from '../Row/Row';
import { getServersList } from '../../services/service';

export default function Table(props) {
    let [serversList, setList] = useState([]);
    
    useEffect(() => {
        getServersList().then(data => {
            setList(serversList = [...data])});
    }, []);

    let rowHeadlines = ['Ip', 'Server Name', 'Time Running', 'Toggle', 'Type', 'Price', 'Delete'];
    let tHeads = [];

    rowHeadlines.forEach(head => {
        let htag = <th scope="col">{head}</th>;
        tHeads.push(htag);
    });

    let rows = [];

    serversList.forEach(server => {
        let row = <Row data = {server} />
        rows.push(row);
    })

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
        </div>
    )
}
