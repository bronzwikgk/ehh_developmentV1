urlReq = {
    url = 'https://jsonplaceholder.typicode.com/todos/1',
    urlReqParameters = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
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