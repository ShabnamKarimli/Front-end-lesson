let SET = 'SET_DATA';
let GET = 'GET_DATA';
let DELETE = 'DELETE_DATA';

switch () {
    case 'SET':
        console.log('SET')
        break;
    case 'GET':
        console.log('GET')
        break;
    case 'DELETE':
        console.log('DELETE')
        break;


    default:
        break;
}




let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',]
mL.forEach(element => {
    switch (element) {
        case 'January':
            console.log(element + '-31')
            break;
        case 'February':
            console.log(element + '-28-29')
            break;
        case 'March':
            console.log(element + '-31')
            break;
        case 'April':
            console.log(element + '-30')
            break;
        case 'May':
            console.log(element + '-31')
            break;
        case 'June':
            console.log(element + '-30')
            break;
        case 'July':
            console.log(element + '-31')
            break;
        case 'August':
            console.log(element + '-31')
            break;
        case 'September':
            console.log(element + '-30')
            break;
        case 'October':
            console.log(element + '-31')
            break;
        case 'November':
            console.log(element + '-30')
            break;
        case 'December':
            console.log(element + '-31')
            break;
        default:
            break;
    }
});


const date = new Date();
let ml = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = ml[date.getMonth()];
switch (month) {
    case 'January':
        console.log(month + '-31')
        break;
    case 'February':
        console.log(month + '-28-29')
        break;
    case 'March':
        console.log(month + '-31')
        break;
    case 'April':
        console.log(month + '-30')
        break;
    case 'May':
        console.log(month + '-31')
        break;
    case 'June':
        console.log(month + '-30')
        break;
    case 'July':
        console.log(month + '-31')
        break;
    case 'August':
        console.log(month + '-31')
        break;
    case 'September':
        console.log(month + '-30')
        break;
    case 'October':
        console.log(month + '-31')
        break;
    case 'November':
        console.log(month + '-30')
        break;
    case 'December':
        console.log(month + '-31')
        break;
    default:
        break;
}

var fullname = 'Shabnam Karimli'
var space = fullname.indexOf(" ");
var Name = fullname.slice(0, space);
var Surname = fullname.slice(space + 1, fullname.length);

if (Name.length < Surname.length) {
    Name = Name.padEnd(Surname.length, "X")
}
else {
    Surname = Surname.padEnd(Name.length, "X")
}
var arr = [];
for (i = 0; i < Name.length; i++) {
    arr.push([Name[i], Surname[i]])
}
console.log(arr)


var str = "Ey babeK kebaB ye!";
var rev = '';
for (i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
console.log(rev)



var obj = {
    key1: 0,
    key2: 3,
    key3: 2,
    key4: 4,
    key5: 53,
    key7: 7,
    key8: 8,
    key9: 91
}
