function pasanganTerbesar (num) {
  var strnum = String(num).split('');
  var max = Number(strnum.slice(0,2).join(''));

  for(var i = 0; i <= strnum.length - 2; i++) {
    var num2 = Number(strnum.slice(i,i+2).join(''))
    if (max < num2) {
      max = num2;
    }
  }
  return max;
}

var tes = pasanganTerbesar(1768);
console.log(tes)