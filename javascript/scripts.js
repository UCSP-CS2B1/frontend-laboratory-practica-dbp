//Place your javascript code related with HTML and CSS here

function sort(){

    var sortVal = document.getElementById("text-sort").value;
    var list = sortVal.split(",");
    var result = insertion_sort(list);
    document.getElementById("result-sort").innerHTML = result;
}
        
document.getElementById("button-sort").addEventListener("click", sort);

function fact(){

    var factVal = document.getElementById("number-fact").value;
    var result = factorial(factVal);
    document.getElementById("result-fact").innerHTML = result;
}

document.getElementById("button-fact").addEventListener("click", fact);

function fibo(){

    var fiboVal = document.getElementById("number-fibo").value;
    var result = fibonacci(fiboVal);
    document.getElementById("result-fibo").innerHTML = result;
}

document.getElementById("button-fibo").addEventListener("click", fibo);

function expr(){

    var exprVal = document.getElementById("text-expr").value;
    var result = evaluation(exprVal);
    document.getElementById("result-expr").innerHTML = result;
}

document.getElementById("button-expr").addEventListener("click", expr);
