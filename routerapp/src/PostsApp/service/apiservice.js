const apiBase = 'https://jsonplaceholder.typicode.com/';
export  const  getData = (url) =>{
    return fetch(`${apiBase}${url}`).then(body => {
        return body.json()
    })
}
