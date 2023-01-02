let str = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            str = eval(str);
            document.getElementById("input").value = str;
        }
        else if (e.target.innerHTML == 'AC') {
            str = "";
            document.getElementById("input").value = str;
        }
        else {
            str = str + e.target.innerHTML;
            document.getElementById("input").value = str;
        }
    })
})





setInterval(()=>{
    
let date = new Date();
let timeHour = date.getHours();
let timeMinute = date.getMinutes();
// let timeSec = date.getSeconds();
let time = document.getElementById("time");
    if (timeHour >= 12) {
        if (timeMinute < 10) {
            time.innerHTML = timeHour - 12 + ":" + "0" + timeMinute;
        }
        else {
            time.innerHTML = timeHour - 12 + ":" + timeMinute;
        }
    
    }
    else {
        if (timeMinute < 10) {
            time.innerHTML = timeHour + ":" + "0" + timeMinute;
        }
        else {
            time.innerHTML = timeHour + ":" + timeMinute;
        }
    }
},1000)







// let btn = document.getElementById("click");
// btn.addEventListener('click', ()=>{
//     let num = Math.floor(Math.random() * 100)
//     let num1 = Math.floor(Math.random() * 100)
//     btn.style.position = "absolute";
//     btn.style.top = `${num}px`;
//     btn.style.right = `${num1}px`;
// })