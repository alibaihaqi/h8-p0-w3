function palindromeAngka (angka) {
  var nonPalindrome = true;
  do {
    angka = angka + 1;
    var str1 = String(angka);
    var str2 = str1.split('').reverse().join('');
    if(str1 === str2) {
      nonPalindrome = false;
    }

  }
  while (nonPalindrome);
  return angka;
}

palindromeAngka(1045)