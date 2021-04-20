// Param numbers: array of numbers
// Returns a sorted array
function insertion_sort(numbers) {

    //Write your code here
    for (let i = 0; i < numbers.length; i++){
        for (let j = i; j > 0; j--){
            
            if (numbers[j]*1 < numbers[j - 1]*1){
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

    // if (!isNaN(expression)){
    //   return expression;
    // }
    // else{
      
    //   let ultimoParentesisAbrir = 0;
    //   let primerParentesisCerrar = 0;
    //   // parentesis
    //   for (let i = 0; i < expression.length; i++){
        
    //     if (expression[i] == "("){
    //       ultimoParentesisAbrir = i;

    //     }
    //     else if(expression[i] == ")"){
            
    //         primerParentesisCerrar = i;
    //         break;
    //     }
    //   }

    //   // console.log(ultimoParentesisAbrir + " " + primerParentesisCerrar);
    //   let operaciones = ["*", "/","+", "-"];
    //   let iOperaciones = [];
    //   if (ultimoParentesisAbrir != primerParentesisCerrar){
        
    //     ultimoParentesisAbrir+=2;

    //     for (let i = ultimoParentesisAbrir; i < primerParentesisCerrar - 1; i++){
          
    //       for (let j = 0; j < operaciones.length; j++){
    //         if(expression[i] == operaciones[j]){
    //           iOperaciones.push(i);
    //         }
    //       }
    //     }
        

    //     let i_ = iOperaciones[0] - 1, j_ = iOperaciones[0]+1;
        
    //     for (i_; i_ > -1; i_--){
          
    //       if (i_ != 1 || i_ != 2 || i_ != 3 || i_ != 4 || i_ != 5 || i_ != 6 || i_ != 7 || i_ != 8 || i_ != 9 || i_ != 0){
    //         break;
            
    //       }
    //     }
        
    //     i_++;
        
    //     for (j_; j_ < expression.length; j_++){
          
    //       if (j_ != 1 || j_ != 2 || j_ != 3 || j_ != 4 || j_ != 5 || j_ != 6 || j_ != 7 || j_ != 8 || j_ != 9 || j_ != 0){

    //           break;
    //       }
    //     }
    //     j_--;
        
    //     let expression1 = expression.substring(0, i_ - 1);
    //     let expression2 = expression.substring(j_ + 2);

    //     if (expression[iOperaciones[0]] == "*"){

    //       let resultado = (expression.substring(i_, iOperaciones[0] - 1)* 1) * (expression.substring(iOperaciones[0] + 1, j_ +1)* 1);
    //       // encontrar numeros
    //       expression = expression1 + resultado + expression2;

    //     }
        

    //     for (let i = 0; i < expression.length; i++){
    //       if (expression[i] == "("){
    //         ultimoParentesisAbrir = i;
    //       }
    //       else if (expression[i] == ")"){
    //         primerParentesisCerrar = i;
    //         break;
    //       }
    //       else if (!(expression[i] != "+" && expression[i] != "-" && expression[i] != "*" && expression[i] != "/" )){

    //           return evaluation(expression);
    //       }
    //     }
        
    //     expression = expression.substring(0,ultimoParentesisAbrir) + expression.substring(ultimoParentesisAbrir+1,primerParentesisCerrar) + expression.substring(primerParentesisCerrar+1);
      
    //     return evaluation(expression);
    //     return 1;

    //   }
    //   else{
    //     expression = "(" + expression + ")";        
    //     return evaluation(expression);

    //   }
    // }
    return eval(expression);
}

if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}

console.log(evaluation("7*2"));