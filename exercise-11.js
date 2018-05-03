function tentukanDeretAritmatika(arr) {
  var beda = arr[1]-arr[0];
  var poin = true;

  for (var i = 0; i < arr.length - 1; i++) {
    
    if(beda !== (arr[i+1]- arr[i])) {
      poin = false;
    }

  }
  return poin;
}
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24]));