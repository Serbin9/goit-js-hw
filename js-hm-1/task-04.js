'use strict'
let credits = 23530;
const pricePerDroid = 3000;
const qestion = "Введите количество дронов которые вы хотите приобрести ?"
const massage1 = credits - pricePerDroid;
const cancel = "Отменено пользователем!"
let massage ;

let result = prompt(qestion);
if( result === null ){
    massage = cancel;
} else {
    result = Number(result);
    const totalPrice = result * pricePerDroid ;
     if( totalPrice < credits ){
        credits = credits - result*pricePerDroid;
        massage = `Вы купили ${result} дроидов, на счету осталось ${credits} кредитов.`;
    }
    else{
        massage = 'Недостаточно средств на счету!';
    }
}
alert(massage);

