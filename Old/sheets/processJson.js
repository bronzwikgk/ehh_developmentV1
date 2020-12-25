var jsonUrl = "https://raw.githubusercontent.com/bronzwikgk/ehh_developmentV1/main/json/sampleData/sampleSchemaV2.json";

function test(){
 var options = {
      recurse :'true',
      ignore : ['function','null',]
                };
                
     var json4rmUrl = printValues(jsonUrl);
     console.log("here",json4rmUrl);

}              
                

function processJsonUrl() {
    var response = UrlFetchApp.fetch(jsonUrl);
    var json = response.getContentText();
    var data = JSON.parse(json);//Logger.log(data);
    var options = {
      recurse :'false',
      ignore : ['function','null',]
                };
    var jsonOutput = json2dArray(data);
   
console.log("output",jsonOutput, typeof jsonOutput)
  
  return jsonOutput;
}

                
function collectNodes(rootNode) {
    const nodes = []
    function visitNode(node) {
   console.log(node)
   nodes.push(node)
      console.log(nodes)

        if (node.children) {
            node.children.forEach(visitNode)
        }
    }

    visitNode(rootNode)

    return nodes
}

   

// Define recursive function to print nested values
function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(k,obj[k]);
        } else {
          console.log(k,obj[k]);
        };
    }
};








