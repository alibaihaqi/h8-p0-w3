var input = 'hello world!';
var newinput = '';

for (var i = input.length - 1; i >= 0; i--) {
    newinput = newinput + input[i];
}
console.log(newinput);