//1le verilmis eded arasinda kvadratlari cemi
var a = 4;
var sum = 0
for (var i = 1; i < a; i++) {
    sum += i ** 2;
}
console.log(sum)

//Daxil edilən ədədin vurma cədvəlini çap edən funksiya yazın

var a = 6;
for (var i = 1; i <= 10; i++) {
    console.log(a * i)
}

//Verilmiş ededin ədədlər array-inin içərisindəki olub olmadigini çap edən proqram yazın.


var a = 12;
var array = [2, 4, 5, 9, 11.13, 14];
for (var i = 0; i < array.length; i++) {
    if (a == array[i]) {
        console.log("yes")
        break;
    }
    else if (i == array.length - 1) {
        console.log("no")
    }
}


//İlk 100 Fibonacci ədədini çap edən funksiya yazın.
var a = []
a[0] = 0;
a[1] = 1
console.log(a[0])
console.log(a[1])
for (var i = 2; i <= 5; i++) {
    a[i] = a[i - 1] + a[i - 2]

    console.log(a[i])

}

//Daxil edilmiş sözün palindrom olub olmadığını yoxlayan proqram yazın.
var a = "20002";
var ters = [];
for (var i = a.length - 1; i >= 0; i--) {
    ters += a[i]

}
for (var i = 0; i < a.length; i++) {
    if (a[i] == ters[i]) {
        if (i == a.length - 1) {
            console.log(a, " polindromdur")
        }
    }
    else {
        console.log(a, "polindrom deyil")
    }
}
//Hərflərinin sayı cüt ədəd olan sözləri iki bərabər hissəyə ayıraraq çap edən proqram yazın.


var str = "javascript";
var lngth = str.length;
if (lngth % 2 == 0) {
    console.log(str.slice(0, str.length / 2))
}


/*İstifadəçinin yaşı 30-dan kiçikdirsə istifadəçinin yaşının kvadratını ekrana çap edin
Yaş 30-40 aralığındadırsa daxil edilən ədədin son rəqəmini ekrana çap edin
Yaş 0-dan kiçik vəya 100-dən böyükdürsə ekrana "Düzgün məlumat daxil etməmisiniz" yazdırın.*/

var age = 500;
if (age < 30) {
    console.log(age ** 2)
}
else if (age > 30 & age < 40) {
    lastdigit = age % 10;
    console.log(lastdigit)
}
else if (age < 0 || age > 100) {
    console.log("Düzgün məlumat daxil etməmisiniz")
}



