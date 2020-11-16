
//More like a writer Function
// This is the function that is called on each element of the array.
const reducerFunction = (data, element) => {
    // Add the current field to the object.
    data[element.name] = element.value;
    // For the demo only: show each step in the reducer’s progress.
    console.log(JSON.stringify(data));
    return data;
};
