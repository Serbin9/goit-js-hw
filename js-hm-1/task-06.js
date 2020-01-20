'use strict'

let input;
let total = 0;

while (input !== null){
    input = prompt("ВВедите число");
    if (Number.isNaN(Number(input))){
        alert("Было введено не число, попробуйте еще раз")
    }
   else { total = Number(input) + total;
}
}
alert(`Общая сумма чисел равна ${total}`)


