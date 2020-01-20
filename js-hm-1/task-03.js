"use strict"

const ADMIN_PASSWORD = "jqueryismyjam";
const massageEror = "Отменено пользователем!";
const massageWelcome = "Добро пожаловать!";
const massageLock = "Доступ запрещен, неверный пароль!";
let password ;
let massage ;

password = prompt ("Введите Пароль");
if(password === null){
    massage = massageEror;
    }else{
    if (password === ADMIN_PASSWORD){
       massage = massageWelcome;
    }else{
    massage = massageLock;
    }
    }
alert (massage);