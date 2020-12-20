var data = {
    first: "firstName",
    last: "lastName",
    phoneNumber: "phoneNumber",
    city: "city",
  // serverNodeRequest: JSON.stringify(serverNodeRequest),
    serverNodeRequest : {
    serverActionRequest: 'create',
    entity: ["spreadsheet", "sheet", "namedRange", "range"],
    payloadType: ["JSON", "TEXT"],
    responseTypeReq : "TEXT",
    requestOrigin : window.location.href,
    resourceID : '1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk'
//resourceUrl = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";

}
};

//    var serverNodeRequest = {
//    // serverActionRequest: ['create', 'append', 'get', 'update', 'delete', 'validate'],
//        entity: "sheet",
//     //payloadType: ["JSON", "TEXT"],
//     responseTypeReq : "TEXT",
//     requestOrigin : window.location.href,
//     resourceID : '1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk'
// //resourceUrl = "https://docs.google.com/spreadsheets/d/1mBZJ01Ddhl9fByyJ5K-JEsruO7XV51i7ctdnRJ6-hGk/edit#gid=1449573075";
// }

serviceUrl = "https://script.google.com/macros/s/AKfycbyWWmSNyIQEWRGMmRaZ2D4FYHtI2HBVpsuHk2NtXuDyXcaukCHQ/exec";

let url = serviceUrl;
request = {
    method: 'GET',
    //mode: 'no-cors', 

 
      body: JSON.stringify(data)
}


