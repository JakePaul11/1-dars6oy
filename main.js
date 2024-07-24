
// // n vaqtda 1 marta ishlaydigan funksiya,  1 sekund=1000
// setTimeout(()=>{
//     alert("Assolomu aleykum")
// }, 5000)


// let body = document.querySelector('body')

// // n vaqtda cheksiz ishlaydigan funksiya,  1 sekund=1000
// let infinity = setInterval(()=>{
//     let text = document.createElement('p')
//     text.innerHTML = "Assalomu aleykum"
//     body.appendChild(text)
// }, 2000)

// // funksiyani toxtatib beradi
// clearInterval(infinity)




function Soat() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours <= 10 ? '0' + hours : hours;
    minutes = minutes <= 10 ? '0' + minutes : minutes;
    seconds = seconds <= 10 ? '0' + seconds : seconds;

    let timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('soat').textContent = timeString;
}

setInterval(Soat, 1000);