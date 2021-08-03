
export const getServersList = async () => { // get servers list from the database
    const response = await fetch('/api/getServers');
    return response.json();
}

export const getServersTypes = async () => { // get types from database
    const res = await fetch('/api/getTypes');
    return res.json();
}

export const addServer = async (data) => { // add server to database
    return fetch('/api/addServer', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() });
}

export const deleteChosenServer = async (data) => { // delete server from database

    fetch('/api/deleteServer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() });
}

export const turnServerOnOF = async (data) => { // change isRunnig of the server
    return fetch('/api/RunServer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            return res.json();

        });
}

export const currencyApi = async (from, to, amount) => { // use currency api for currency changes
   return fetch(`https://v6.exchangerate-api.com/v6/016ab28fb588d983c8cc8cf7/pair/${from}/${to}/${amount}`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.error(err);
        });
}