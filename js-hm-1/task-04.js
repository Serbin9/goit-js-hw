'use strict'
const credits = 23530;
const pricePerDroid = 3000;
const qestion = "Введите количество дронов которые вы хотите приобрести ?"
const cancel = "Отменено пользователем!"
let massage ;
let cost ;


let result = prompt(qestion);
if( result === null ){
    massage = cancel;
} else {
    result = Number(result);
    const totalPrice = result * pricePerDroid ;
     if( totalPrice < credits ){
        cost = credits - result*pricePerDroid;
        massage = `Вы купили ${result} дроидов, на счету осталось ${cost} кредитов.`;
    }
    else{
        massage = 'Недостаточно средств на счету!';
    }
}
alert(massage);