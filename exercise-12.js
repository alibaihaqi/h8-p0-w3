function tentukanDeretGeometri(arr) {
  var rasio = arr[1]/arr[0];
  var poin = true;

  for (var i = 0; i < arr.length - 1; i++) {
    
    if(rasio !== (arr[i+1]/arr[i])) {
      poin = false;
    }

  }
  return poin;
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));