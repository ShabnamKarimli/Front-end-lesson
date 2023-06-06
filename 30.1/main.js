// var names=["Mina","Sebnem","Vuqar"]

// console.log(names)
// console.log(JSON.stringify(names))



fetch('https://api.aladhan.com/v1/calendarByCity/2023/3?city=Baku&country=Azerbaijan&method=2')
    .then(response => response.json())
    .then(json => console.log(json))


var city = document.getElementById("cityInput")
var year = document.getElementById("yearInput")
var month = document.getElementById("monthInput")
var btn = document.getElementById("showBtn")


btn.addEventListener("click", function () {

    var il = year.value
    var ay = month.value

    fetch(`https://api.aladhan.com/v1/calendarByCity/${il}/${ay}?city=${city.value}&country=Azerbaijan&method=2`)
        .then(response => response.json())
        .then(json => {
            var datas = '';
            var dataArr = json.data;
            dataArr.forEach(element => {
                datas += `
            <tr style="font-size: 13px;">
            <td>${element.date.gregorian.date}</td>
            <td>${element.date.hijri.date}</td>
            <td>${element.timings.Imsak}</td>
            <td>${element.timings.Sunrise}</td>
            <td>${element.timings.Sunrise}</td>
            <td>${element.timings.Dhuhr}</td>
            <td>${element.timings.Asr}</td>
            <td>${element.timings.Sunset}</td>
            <td>${element.timings.Maghrib}</td>
            <td>${element.timings.Isha}</td>
            <td>${element.timings.Firstthird}</td>
            </tr>
            `;
            });


            document.querySelector("table tbody").innerHTML = datas


        })
})




