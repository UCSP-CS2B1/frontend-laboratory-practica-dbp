// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    //Write your code here
    for (let i = 0; i < numbers.length; i++){
        for (let j = i; j > 0; j--){
            
            if (numbers[j] < numbers[j - 1]){
                let temp = numbers[j];
                numbers[j] = numbers[j-1];
                numbers[j-1] = temp;
            }
        }
    }
    return numbers;
}


// Param number: single integer
// Returns a single integer
function factorial(number) {

    console.log(number);
    if (number == 1){
        return 1;
    }
    else{
        return number * factorial(number - 1);
    }
}

// Param number: single integer
// Returns a single integer
function fibonacci(number) {

    if (number == 0)
        return 0;
    else if (number == 1)
        return 1;
    else
        return fibonacci(number - 1) + fibonacci(number - 2);
}

// Param expression: string containing a mathematical expression
// Returns an integer value
function evaluation(expression) {
   eval(expression);
}
 
if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
