
export const getServersList = async () => {
    const response = await fetch('/api/getServers');
    return response.json();
}

export const getServersTypes = async () => {
    const res = await fetch('/api/getTypes');
    return res.json();
}

export const addServer = async (data) => {
    return fetch('/api/addServer', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() });
}

export const deleteChosenServer = async (data) => {

    fetch('/api/deleteServer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => { return res.json() });
}

export const turnServerOnOF = async (data) => {
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

export const currencyApi = async (from, to, amount) => {
   return fetch(`https://v6.exchangerate-api.com/v6/016ab28fb588d983c8cc8cf7/pair/${from}/${to}/${amount}`)
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.error(err);
        });
}