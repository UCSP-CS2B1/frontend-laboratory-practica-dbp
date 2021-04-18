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
    cadena = document.getElementById('calc').value;
    division=cadena.split('÷');
    adiv=division[0];
    mult1=adiv.split("*");
    amult=1;

    for(i=0; i<mult1.length; i++){  
      sumar = mult1[i].split('+');
      restar = sumar[0].split('-');
      res1 = restar[0];

      for(j = 1; j<restar.length; j++){
        res1 = res1-restar[j];
      }
      sum1 = res1;

      for(j = 1; j<sumar.length; j++){
          restar = sumar[j].split('-');
          res1 = restar[0];
          for(k = 1; k<restar.length; k++){
            res1 = res1-restar[k];
          }
        sum1=sum1*1+res1*1;
      }
      amult=amult*sum1;
    }
    adiv=amult;

    for(i=1; i<division.length; i++){
      adivn=division[i];
      multn=adivn.split("*");
      sumar=multn[0].split('+');
      
      restar=sumar[0].split('-');
      res1=restar[0];

      for(j=1; j<restar.length; j++){
        res1=res1-restar[j];
      }
      sumn=res1;

      for(h=1; h<sumar.length; h++){
          restar=sumar[h].split('-');
          res1=restar[0];
          for(k=1; k<restar.length; k++){
            res1=res1-restar[k];
          }
        sumn=sumn+res1*1;
      }
      adiv=adiv/sumn;

      for(j=1; j<multn.length; j++){
        
        sumar=multn[i].split('+');
        restar=sumar[0].split('-');
          res1=restar[0];

          for(k=1; k<restar.length; k++){
            res1=res1-restar[k];
          }
          sumn=res1;
        
        for(h=1; h<sumar.length; h++){
            restar=sumar[h].split('-');
            res1=restar[0];

            for(k=1; k<restar.length; k++){
              res1=res1-restar[k];
            }
          sumn=sumn*1+res1*1;
        }
        adiv=adiv*sumn;
      }
    }
    document.getElementById('calc').value=adiv;
  }
}


if(typeof process === 'object') {
    module.exports =  {
        insertion_sort,
        factorial,
        fibonacci,
        evaluation
    };
}
