
class processSchema{

   static create(input, outout,value) { 
      
      if (getEntityType(output).includes("HTML")) {
         const nwEle = document.createElement(input);
         const nwText = document.createTextNode(value);
         nwEle.appendChild(nwText);
         return nwEle;
      }

   }
   static update() { 


   }
   static setAppendEntity(input, output, key) {
    
   // console.log(input, input.nodeType, output, output.nodeType,key,typeof key)
      if (getEntityType(output).includes("HTML")) {
         
         if (getEntityType(input).includes("HTML") && typeof key !== 'string') {
            output.appendChild(input);
            
         }
         if (getEntityType(input).includes("String") && typeof key !== 'string') {
            //   console.log("string found")           
            var currentNode = processSchema.create(input, output);
            output.appendChild(currentNode);

         }
         if (typeof key === 'string') {
            
          //  console.log("setting Attributes", key, input, "in", output)
            output.setAttribute(input, key);

         }
    
     
        
      }
      return output;
   }

    static schema2(input, output) {
     if (!Object.keys(input).length) return;// if there's no keys, then the call returns undefined
      switch (input?.constructor) {
         case Object:
            processSchema.processObj(input, output);
         case Array:
            processSchema.processArr(input, output);
         case String:
            //processSchema.processString(input, output);
         default:
         // return
      }
     return output;
   }

   static processObj(input, output) {

      for (var key in input) {
      //   if (!input.hasOwnProperty(key)) continue;
         if (getEntityType(input[key]) === 'Object' || getEntityType(input[key]) === 'Array') {
            var currentNode = processSchema.create(key, output,key);
            processSchema.schema2(input[key], currentNode)
            processSchema.setAppendEntity(currentNode, output);
          //  console.log(currentNode,output);   
         } else if (getEntityType(input[key]) === 'String' || getEntityType(input[key]) === 'Function' || getEntityType(input[key]) === 'Boolean') {
        console.log( output,currentNode,key , input[key]);
           var currentNode = processSchema.create(key, output, input[key]);

      //  processSchema.setAppendEntity(key, output, input[key])
            console.log("string", currentNode);
         } else {
          
         }
        
      }
      return output;
   }



   static processArr(input, output) { 
      
      for (var i = 0; i < input.length; i++) { 
           { 
//            console.log(input[i], getEntityType(input[i]));
       processSchema.setAppendEntity(input[i], output,input[i]);


         }




      }

      return output;
   }





}

function getEntityType(entity) {
   return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}

function processTest(e) {
    e.preventDefault();

   var in2 = basic;

   console.log(in2)
   outputElement = processSchema.create("output", document.getElementById("output"));
       console.log(outputElement)
   var outputE = processSchema.schema2(in2, outputElement);
    console.log("outputElement", outputE)
  //  const depth = getMax(outputArray,2);

   // var table = createTable(outputArray);
   // outputJson = arr2(outputArray,{} ,depth);
 // console.log(outputJson);
    //  document.getElementById("output").innerText = JSON.stringify(outputArray);
   document.getElementById("output").appendChild(outputE);
}


document.getElementById("get").addEventListener("click", processTest);
