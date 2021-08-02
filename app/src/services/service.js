
export const getServersList = async() => {
    const response = await fetch('/api/getServers');
    return response.json();
}