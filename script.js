"use strict";
exports.__esModule = true;
;
var Kilimanjaro = {
    name: "Kilimanjaro",
    height: 19341
};
var Everest = {
    name: "Everest",
    height: 29029
};
var Denali = {
    name: "Denali",
    height: 20310
};
var mountains = [Kilimanjaro, Everest, Denali];
function findNameOfTallestMountain(mtns) {
    var tallest = mtns[0];
    for (var i = 0; i < mtns.length; i++) {
        if (tallest.height < mtns[i].height) {
            tallest = mtns[i];
        }
    }
    console.log(tallest.name);
}
findNameOfTallestMountain(mountains);
;
var Chips = {
    name: "Chips",
    price: 1.99
};
var Soda = {
    name: "Soda",
    price: 1.99
};
var Smokes = {
    name: "Smokes",
    price: 5.99
};
var shopList = [Chips, Soda, Smokes];
function calcAveragePruductPrice(items) {
    var total = 0;
    var avg = 0;
    for (var i = 0; i < shopList.length; i++) {
        total = items[i].price;
    }
    avg = total / items.length;
    console.log(avg);
}
calcAveragePruductPrice(shopList);
;
var motor = {
    name: "motor",
    price: 10
};
var sensor = {
    name: "sensor",
    price: 12.50
};
var LED = {
    name: "LED",
    price: 1
};
var inventory = [
    { product: motor, quantity: 10 },
    { product: sensor, quantity: 4 },
    { product: LED, quantity: 20 }
];
function calcInventoryValue(inv) {
    var value = 0;
    for (var i = 0; i < inv.length; i++) {
        value += (inv[i].quantity * inv[i].product.price);
    }
    console.log(value);
}
calcInventoryValue(inventory);
