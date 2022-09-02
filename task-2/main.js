const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 let numbers = result.input.split(",")
    let say = 0
    for (let = if; i < numbers.length; i++){
        ig (numbers[i]>numbers[i-1]&&numbers[i]>numbers[i+1]){
            say = say + 1
        }
    }console.log(say);  
});
