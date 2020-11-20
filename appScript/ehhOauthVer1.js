let deployedURL ="https://script.google.com/macros/s/AKfycbzs1uHX-vtR_Vj2uwNoBvOt5kHAO0m8t9eFXOujtgof9pJW0qqA/exec"
let serverSheetID = "1cAbSk2mLzwuLwLgKxX_-Ve8-8UrUgSCWG7qj_OQ7MVM";
let serverApiUrl = " sheet api";


function doGet(e){

  return response = ehhServer.doGet(e);
}


function doPost(e){
  var requestType = (e.parameter.TypeOfRequest);
  if (requestType == "updateUserInformation") {
    return updateUserInformation(e);
  }
  if (requestType == "signUpUser") {
    return signUpUser(e);
  }
  if (requestType == "loginUser"){
    return loginUser(e);
  }
}



class ehhServer {
  static doGet(e) {
    var op = e.parameter.action;
    Logger.log(e,op);
    var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1UUBGKGvm4b9LOhqbdh0UDG6vYz9Phr1DqGyg8DvCiUc/edit?usp=sharing");
    var sheet = ss.getSheetByName("Sheet1");
    if (op == "insert")
      
      return insert_value(e, sheet);
    //Make sure you are sending proper parameters
    if (op == "read")
      return read_value(e, ss);

    if (op == "update")
      return update_value(e, sheet);

    if (op == "delete")
      return delete_value(e, sheet);

  }
  static doPost() {
    

  }

}




