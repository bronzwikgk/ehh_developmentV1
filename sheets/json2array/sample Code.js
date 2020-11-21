


function jsonArrayTo2D(arrayOfObjects){
  let header = [],
      AoA = [];
  arrayOfObjects.forEach(obj => {
    Object.keys(obj).forEach(key => header.includes(key) || header.push(key))
    let thisRow = new Array(header.length);
    header.forEach((col, i) => thisRow[i] = obj[col] || '')
    AoA.push(thisRow);
  })
  AoA.unshift(header);
  return AoA;
}