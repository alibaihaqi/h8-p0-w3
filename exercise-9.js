arr = [1, 3, 3];

function cariMean(arr) {
  var jumlah = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    jumlah = jumlah + arr[i];
  }
  return Math.round(jumlah/arr.length);
}
console.log(cariMean(arr))