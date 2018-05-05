function targetTerdekat (arr) {
  var hurufo = arr.indexOf('o');
  console.log(hurufo);
  var jarak = 0;
  var jarakTerdekat = arr.length;
  console.log(jarakTerdekat);
  if (arr.indexOf('x') === -1) {
      return 0;
  }

  for (var i = 0; i <= arr.length - 1; i++) {
    if(arr[i] === 'x') {
      jarak = Math.abs(i - hurufo);
      if(jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    }
  }
  return jarakTerdekat;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));