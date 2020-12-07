class processData { 
    static Obj2(input, output, current, previous) { 
        switch (input?.constructor) {
            case Object:
                var a = Object.entries(input);
                a.forEach((element,i,o) => {
                    console.log(element,"kzjdh", o, i)
                })
                console.log(a, typeof a);
                for (var key in a) { 
                    console.log(key,a[key])
                }
                    
                return Object.entries(input);
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
    console.log(outputArray)
    outputJson = array2Obj(outputArray);
    console.log(outputJson)
    document.getElementById("output").innerText = JSON.stringify(outputArray);
}


document.getElementById("get").addEventListener("click", processTest);

