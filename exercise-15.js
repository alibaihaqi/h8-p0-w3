// function groupAnimals(animals) {

//   // you can only write your code here!
// }
var animals = ['cacing', 'ayam', 'kuda', 'anoa', 'kancil'];
var animals1 = animals.sort();
var grup = [];
for (var i = 0; i <= animals1.length - 1; i++) {
  var animalsSeabjad = [];
  var hurufAwal = animals1[i][0];
  var urutan = [animals1[i]];
  for (var j = animals1.length - 1; j > i; j--) {
    if (hurufAwal === animals1[j][0]) {
      urutan.push(animals1[j]);
      animals1.splice(j,1);
    }

  }
  animalsSeabjad.push(urutan);
  grup.push(animalsSeabjad);

}
console.log(grup)
// TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]