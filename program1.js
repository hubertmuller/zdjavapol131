//alert('Witaj');

const naglowek = "body > header";
let zmienna = "costam";
var zmienna2 = 2;
globalny = 3;

function dodaj(l1, l2) {
    var a = 8;
    let x = 20;
    for (let x = 0; x < 10; x++) {
        console.log('W petli:', a, x);
    }
    console.log('PO petli:', a, x);
    console.log('globalne', zmienna, globalny);
    return l1 + l2;
}

const dodaj2 = function (a1, a2) {
    return a1 + a2;
}

const strzalkowa = (a1,a2) => {
    return a1 + a2;
}

console.log(dodaj(5,7));

document.querySelector(naglowek).addEventListener("click", function () {
    alert('Kliknales na naglowku');
})