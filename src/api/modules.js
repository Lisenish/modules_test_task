const API_HOST = 'https://sifivelearn-production.s3-us-west-1.amazonaws.com';

//TODO: handle potential errors in fetch
export async function getModules() {
    return fetch(`${API_HOST}/samples/fe-developer.json`).then(data => data.json());
}
