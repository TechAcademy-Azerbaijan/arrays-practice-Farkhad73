const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let numbers = result.input.split(",");
let arr = [];
for (let i = 0; i < numbers.length; i++) {
    const element = parseInt(numbers[i]);
    let exist = false;

    for( let j = 0; j < numbers.length; j++){
        const next_element = parseInt(numbers[j]);
        if( element == next_element) {
            exist = true;
            break;
        }
    }
    if (exist == false) {
        arr.push(element);
    }
}
    console.log(arr);  
});
