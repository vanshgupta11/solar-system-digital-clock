
// console.log(now);
// var hours = now.getHours();
// var miniutes = now.getMinutes();
timeNow();
function timeNow(){
    var now = new Date();
    var hours = String(now.getHours()).padStart(2,"0");
    var minutes = String(now.getMinutes()).padStart(2,"0");
    var seconds = String(now.getSeconds()).padStart(2,"0");
    document.querySelector(".clock").innerText =`${hours}:${minutes}:${seconds}` ;
    if(seconds >= '30'){
        document.querySelector(".star").classList.add("add");
        document.querySelector(".sun").classList.add("sunadd");
    }
    if(seconds == '00'){
        document.querySelector(".star").classList.remove("add");
        document.querySelector(".sun").classList.remove("sunadd");
    }
    setTimeout(timeNow,1000);
}


