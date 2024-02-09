let bulb = document.querySelector("#bulb")
let Onbtn = document.querySelector("#OnButton")
let p = document.querySelector("#btntext")
let b = document.querySelector("#body")
let count = 0;

Onbtn.addEventListener("click", function(){
    if(count == 0){
        bulb.style.backgroundColor = "yellow"
        p.innerHTML = "OFF"
        b.style.backgroundColor = "white"
        count = 1
    }else{
        bulb.style.backgroundColor = "grey"
        p.innerHTML = "ON"
        b.style.backgroundColor = "black"
        count = 0
    }
})
