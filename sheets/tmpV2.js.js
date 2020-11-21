
//Global Variables
var sheetId="1sOAYeOP87x-G9-T-05J2IJ7Y99dG8uokGWwz9zEo_bM";
var tabName = 'test';

var spreadsheet = SpreadsheetApp.openById(sheetId);



















function test(){
   
  var request = {
     requestSheetid : sheetId,
     request : 'getNamedRanges',
     requestedEntity : 'namedRanges',
     entityFields : [ 'name','namedRangeId']
   }
  
    var getSheetResponse = Sheets.Spreadsheets.get(request.requestSheetid, {fields: request.requestedEntity}).namedRanges.forEach(function(e) { console.log(e.name)});
}


class processSheet{
  
  
  static getNamedRange(){
  

  var spreadsheet = SpreadsheetApp.openById("1gV-9635qEKCAHtJdjeUEH_Tojqu5CiB5lUoNBYox9LI");
  var named = spreadsheet.getNamedRanges()
   named.forEach(function(value,index){
    value.remove();
  })
  
  }
  
  
  
  static loadSheet(request){
    
    
    var requestedEntity = request.requestedEntity;
   console.log(requestedEntity)
   var loadSheetResponse = Sheets.Spreadsheets.get(request.requestSheetid, {fields: requestedEntity}).requestedEntity;
   console.log(loadSheetResponse);
   return loadSheetResponse;
  
  }
  
  static getEntity(request){
    
    var loadSheetResponse = processSheet.loadSheet(request);
    
    var requestedEntity = request.requestedEntity;
    var request = request.request;  
    console.log(request)
   // console.log(loadSheetResponse);
   //console.log("trying to get Entity",requestedEntity,"from ", loadSheetResponse);
   
    var entityGetResponse = loadSheetResponse.request;
    
    console.log("entityGetResponse",entityGetResponse)
    
    return entityGetResponse;
                  
                  }
}

