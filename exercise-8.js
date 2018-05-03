function pasanganTerbesar (num) {
  var strnum = String(num).split('');
  var max = Number(strnum.slice(0,2).join(''));

  for (var i = 0; i <= num.length - 1; i++) {
    var num2 = Number(strnum.slice(i+1,i+3).join(''));
    
    if (max > num2) {
      max = max;
    }
    else {
      max = num2;
    }
  }
  return max;
}

var tes = pasanganTerbesar(1768);
console.log(tes)