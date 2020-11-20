let serverSheetID = "1cAbSk2mLzwuLwLgKxX_-Ve8-8UrUgSCWG7qj_OQ7MVM";
let serverApiUrl = " sheet api";

class ehhServer {
  static doGet(e) {
    Logger.log(e);
    var op = e.parameter.action;
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




