
var row = new Array('ehhid', 'd', 'parent', 'entityName', "typeOf");


class processData { 
    static createRow(input, output, parent, id, d, key, options, callback) {
        id = output.length;
        var newRow = [id, d, parent, key, getEntityType(input)];
        return newRow;
    }

    static processObj(input, output, current, previous) {
        console.log(input)
        var entries = Object.entries(input);
        entries.forEach((element, index, entries) => {


            console.log(element[0], index, entries); 
        });
    }

    static Obj2(input, output, current, previous) { 
        if (!d) { var d = 0; }
        switch (input?.constructor) {
            case Object:   
                return processData.processObj(input);
            case Array:
                return input
            default:
                return
        } 

    }

}




function processTest(e) {
    e.preventDefault();
    var in2 = sample;
    console.log(in2)
    var outputArray = processData.Obj2(in2, []);
  //  console.log(outputArray)
 //   outputJson = array2Obj(outputArray);
  //  console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

