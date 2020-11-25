url = 'https://jsonplaceholder.typicode.com/todos/1';
data = {};
// Default options are marked with *
urlReqParameters = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
}
 
   

postData('https://example.com/answer', { answer: 42 })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });

var urlReq = {
    url = 'https://jsonplaceholder.typicode.com/todos/1',
    urlReqParameters = {
        method: 'POST',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
    }



class reqUrl{
    static initUrlRequest(url,parameters) {
        fetch('')
            .then(response => response.json())
            .then(json => console.log(json));
    }
    static processResponse() {
        

    }



}