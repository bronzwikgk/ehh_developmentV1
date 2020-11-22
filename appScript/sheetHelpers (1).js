

//Global Variables
var sheetId="1cAbSk2mLzwuLwLgKxX_-Ve8-8UrUgSCWG7qj_OQ7MVM";
var tabName = 'test';
var spreadsheet = SpreadsheetApp.openById(sheetId);
var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(tabName);



//var fields ="namedRanges";


/* READ DATA */
function readData(request){
  var request = {
  requestSheetid : sheetId,
  request : 'getNamedRanges',
  requestedEntity : 'namedRanges',
  entityFields : [ 'name','namedRangeId']
}
  var response = processSheet.loadSheet(request);

}




class processSheet{
  
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












//var tabSheet = spreadsheet.getSheetByName(tabName);
//var sheetData = sheet.getDataRange().getValues();

//var namedRanges = SpreadsheetApp.openById(sheetId).getNamedRanges().forEach(element => console.log(element));

//for (i=0;i<=namedRanges.length; i++){
//var namedRange = namedRanges[i].name;
//  console.log("from here ",namedRange);
//}

//console.log(namedRanges);
//namedRangesopt2 =[];
//var namedRangesopt2 = Sheets.Spreadsheets.get(sheetId,{fields: "namedRanges"}).namedRanges.forEach(function(e) {console.log("ename",e.name);namedRangesopt2.push(e.name)});
//console.log("named Opt 2",namedRangesopt2);

// The code below deletes all the named ranges in the spreadsheet. * To note works only for open Spreadsheet hence to be used with extension or addon

//var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
//for (var i = 0; i < namedRanges.length; i++) {
//  namedRanges[i].get();
//}


function getNamedRanges2(spreadsheetId) {
    var ss = SpreadsheetApp.openById(spreadsheetId);
    var sheetIdToName = {};
    ss.getSheets().forEach(function(e) {
        sheetIdToName[e.getSheetId()] = e.getSheetName();
    });
  //console.log(sheetIdToName);
    var result = {};
    Sheets.Spreadsheets.get(spreadsheetId, {fields: "namedRanges"})
        .namedRanges.forEach(function(e) {
       //   console.log(e.name);
            var sheetName = sheetIdToName[e.range.sheetId.toString()];
//            var a1notation = ss.getSheetByName(sheetName).getRange(
//                e.range.startRowIndex + 1,
//                e.range.startColumnIndex + 1,
//                e.range.endRowIndex - e.range.startRowIndex,
//                e.range.endColumnIndex - e.range.startColumnIndex
//            ).getA1Notation();
            result[e.name] = sheetName + "!" ;
        });
    return result;
}

function main() {
  
    var response = getNamedRanges2(sheetId);
   // Logger.log(JSON.stringify(response));
}







function remove(){
  var spreadsheet = SpreadsheetApp.openById("1gV-9635qEKCAHtJdjeUEH_Tojqu5CiB5lUoNBYox9LI");
  var named = spreadsheet.getNamedRanges()
   named.forEach(function(value,index){
    value.remove();
  })
}


function getNamedRangeValues() {
  var spreadsheetId = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';
  var rangeName = 'Class Data!A2:E';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  if (!values) {
    Logger.log('No data found.');
  } else {
    Logger.log('Name, Major:');
    for (var row = 0; row < values.length; row++) {
      // Print columns A and E, which correspond to indices 0 and 4.
      Logger.log(' - %s, %s', values[row][0], values[row][4]);
    }
  }
}