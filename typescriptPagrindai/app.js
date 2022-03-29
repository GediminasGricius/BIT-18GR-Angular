var bdd = function (x, y) {
    for (var i = Math.min(x, y); i > 0; i--)
        if (x % i == 0 && y % i == 0)
            return i;
    return 1;
};
var faktorialas = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
var myElem = document.getElementById('ElemID');
if (myElem != null) {
    myElem.onclick = function () {
        var ssa = document.getElementById('ina');
        console.log("ZZZZ" + ssa.value);
    };
}
var app = document.getElementById("app");
if (app != null) {
    app.innerHTML = "ZZZZaa";
}
console.log(bdd(10, 15));
