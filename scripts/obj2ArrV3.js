
var row = new Array('ehhid', 'd', 'parent', 'entityName', "typeOf");

//A constructor class of creating any kind of object [ Object / Array / Node]
//has to be added, along with entire Crud operation.
class processData { 
    //this method returns a new empty object based on the desired output.
    //if the output is an Object it will create an object, if it's an array, will create an array or an HTML element
   
    static createRow(input, output, parent, d, key, options, callback) {
        var id = output.length;
        var newRow = [id, d, parent, key, input?.constructor.name];
        return newRow;
    }

    static processObj(input, output, current, previous,d,currentKey) {
      
        var entries = Object.entries(input);
        console.log(entries)
        entries.forEach((element, index, entries) => {
            console.log(element[index], index, entries)
          //  var current = processData.createRow(element[0], [],)
            var current = processData.createRow(input, output, previous, d, element[0]);
            output.push(current);
            console.log(element,element?.constructor.name);
            console.log(output)
          
   
        });
    }
    static Obj2(input, output, current, previous) { 
        if (!previous) {
            var previous = "root";
            output.push(row);
        };
        if (!d) { var d = 0; }
        d = d + 1;
        switch (input?.constructor) {
            case Object:   
                return processData.processObj(input, output, current, previous, d);
            case Array:
                return input
            default:
                return
        } 

    }

}




function processTest(e) {
    e.preventDefault();
    var in2 = sample2;
    console.log(in2)
    var outputArray = processData.Obj2(in2, []);
  //  console.log(outputArray)
 //   outputJson = array2Obj(outputArray);
  //  console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

