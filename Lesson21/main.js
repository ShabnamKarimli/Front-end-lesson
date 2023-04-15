
//aşağıdakı array.də eyni zamanda 5-ə və 7-yə bölünən ədədlərin cəmini tapın.
sum = 0
let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2, 24, 34];
arr.forEach(element => {
    if (element % 5 == 0 & element % 7 == 0) {
        sum += element;

    }
});
console.log(sum)


//verilmis array-de en boyuk 3reqemli cut eded
var s = 0;
var l = 0;
arr.forEach(element => {
    if (element / 100 < 10 & element / 100 > 1) {

        if (element > l) {
            s = l;
            l = element;
        }
    }
});
console.log(l);

var div = 3;
var arrDiv = [];

arr.forEach(element => {
    if (element > div & element % div == 0) {
        arrDiv.push(element);
        arrDiv.sort(function (a, b) { return a - b })

    }

});
console.log(arrDiv[0]);

//switchcase ile kalkulyator yazin
var simvol = "*";
var nr1 = 5;
var nr2 = 7;
switch (simvol) {
    case "+":
        ans = nr1 + nr2;
        break;
    case "*":
        ans = nr1 * nr2;
        break;
    case "/":
        ans = nr1 / nr2;
        break;
    case "%":
        ans = nr1 % nr2;
        break;
    case "-":
        ans = nr1 - nr2;
        break;


}
console.log(ans);