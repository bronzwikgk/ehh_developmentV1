
//curretn process is a tempopary variable to help monitor the console.*tobe ignored
// a temporary workinProgress variable, used to build output until mutated/created

let wip;

function ehhProcessEntity(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess) { 
  currentProcess = "ehhProcessEntity"; console.log(currentProcess);

  if (!reqEntity || !processingEntity) { return; };

  if (processingEntity === 'CSSRuleList') {
    // console.log(currentProcess, getEntityType(processingEntity), entity2Find);
    var processingEntity = document.styleSheets[0].cssRules;
    
   
    var result = Object.values(processingEntity).filter(function (obj, index, searchThis) {
      if (reqEntity.matches(obj.selectorText) === true) {
       console.log(obj)
        return obj;
      }
    });

    var response = Object.values(result).map(function (ele) {
      console.log(ele);
      return getRequested(ele, "key", "style");
    });
     
   
    console.log("response",response);

   


    //var response = clean(result);

  }


}



//this function loops through either key's or values and searches for matching Lookfor Array Item

function getRequested(obj, lookAt, lookfor) {

  for (var key in obj) {
    if (key === lookfor && lookAt === "key") {
   //   console.log("foundKey", obj[key]);
      if (obj[key] != null && obj[key] != undefined && obj[key] != '' ) {
        return obj[key];  
      }
      
    } else if (obj[key] === lookfor && lookAt === "value") {
    //  console.log("found value");
      return obj[key];
    }
  }
}



function clean(obj) {
  var propNames = Object.getOwnPropertyNames(obj);
  for (var i = 0; i < propNames.length; i++) {
    var propName = propNames[i];
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
  return obj;
}


function iterateEntity(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess){ 
  currentProcess = "iterateEntity";
//  console.log(currentProcess);
  if (isArray(processingEntity)) {
   // console.log(request, typeof processingEntity, processingEntity);
   iterateArray(reqEntity, processingEntity, entity2Find, values, output, outputType, request, currentProcess); 
  } else if ((typeof processingEntity === 'object') && (processingEntity !== null)) {
  // console.log("foundObject", processingEntity);
  iterateObject(reqEntity, processingEntity, entity2Find, values, output, outputType, request,currentProcess);
    } else {
   // console.log(processingEntity);
  }

}

function iterateArray(reqEntity, arr, entity2Find, values, output, outputType, request, currentProcess) {
  currentProcess = "iterateArray";
  //console.log(currentProcess);
  for (i = 0; i <= arr.length; i++) {
    if (arr[i]) {
      //console.log("foundEntity in Array", arr[i], typeof arr[i]);
      ehhProcessEntity(reqEntity, arr[i], entity2Find, values, output, outputType, request, currentProcess);
    }
  }
}



function iterateObject(reqEntity, obj, entity2Find, values, output, outputType, request) {
  currentProcess = "iterateObject";
  //console.log(currentProcess);
 // if (!obj) { return; } 
  for (var key in obj) {
    if (obj[key] && obj[key]!= 'function') {
 //  console.log("found key",key, obj[key]);    
   ehhProcessEntity(reqEntity, key, entity2Find, values, output, outputType, request);
    }
  }
}

function isArray(o) {
    return o.length;
 }


function save(entity, keyTitle) {
    // console.log("saving", keyTitle, JSON.stringify(entity));
    window.localStorage.setItem(keyTitle, JSON.stringify(entity));
}

function find(entity, keyTofind) {
    //console.log("finding", keyTofind, "in", entity);
    var result = Object.keys(entity).filter(function (key, index, self) {
      return !key.indexOf(keyTofind);
    });
    return result;
  }


function getEntityType(entity) {
  return Object.getPrototypeOf(entity).constructor.name;//entity.__proto__.constructor.name
}
