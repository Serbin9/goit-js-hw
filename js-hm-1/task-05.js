'use strict'

const china = "Китай";
const chili = "Чили";
const australia = "Австралия";
const indi = "Индия";
const jamaika = "Ямайка";
let priceDelivery;

let countryDelivery = prompt ("Страна доставки");
const countryDeliveryLow = countryDelivery.toLocaleLowerCase();

switch(countryDeliveryLow) {
    case("китай"):
        priceDelivery = 100;
        alert(`Доставка в ${china} будет стоить ${priceDelivery} кредитов`);
        break;
    case("чили"):
        priceDelivery = 250;
        alert(`Доставка в ${chili} будет стоить ${priceDelivery} кредитов`)
        break;
    case("австралия"):
        priceDelivery = 170;
        alert(`Доставка в ${australia} будет стоить ${priceDelivery} кредитов`)
        break;
    case("индия"):
        priceDelivery = 80;
        alert(`Доставка в ${indi} будет стоить ${priceDelivery} кредитов`)
        break;
    case("ямайка"):
        priceDelivery = 120;
        alert(`Доставка в ${jamaika} будет стоить ${priceDelivery} кредитов`)
        break;
        default:
            alert("В вашей стране доставка не доступна");
}


