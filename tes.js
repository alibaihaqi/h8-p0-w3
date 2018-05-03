var masuk = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]; 

function dataHandling2(input) {
masuk.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
masuk.splice(4, 1, 'SMA Internasional Metro');
    
console.log(masuk);
   
var bulan = masuk[3].split('/')[1];

switch (bulan) {
        case '01':
        console.log("Januari");
        break;
        case '02':
        console.log("Februari");
        break;
        case '03':
        console.log("Maret");
        break;
        case '04':
        console.log("April");
        break;
        case '05':
        console.log("Mei");
        break;
        case '06':
        console.log("Juni");
        break;
        case '07':
        console.log("Juli");
        break;
        case '08':
        console.log("Agustus");
        break;
        case '09':
        console.log("September");
        break;
        case '10':
        console.log("Oktober");
        break;
        case '11':
        console.log("November");
        break;
        case '12':
        console.log("Desember");
        break;
}

var tanggalan = masuk[3].split('/');
var tanggalan1 = masuk[3].split('/');
for (var i = 0; i <= tanggalan1.length - 1; i++) {
  tanggalan1[i] = Number(tanggalan1[i]);
}
tanggalan1.sort(function(value1, value2) { return value1 < value2 });
for (var i = 0; i <= tanggalan1.length - 1; i++) {
    tanggalan1[i] = String(tanggalan1[i]);
}
console.log(tanggalan1);

console.log(tanggalan.join('-'));

console.log(masuk[1].slice(0,15));
}