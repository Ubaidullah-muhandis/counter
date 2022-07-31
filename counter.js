let count = 0;
let outPut = document.querySelector(".value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function (btn)  {
    btn.addEventListener("click", function (e) {
        const style = e.target.classList;
        if (style.contains("decrease")) {
            count--
        } else if (style.contains("increase")) {
            count++
        } else {
            count = 0
        }
        outPut.innerHTML = count;
        if (outPut.innerHTML < 0) {
            outPut.style.color = "yellow"
        } else if (outPut.innerHTML > 0) {
             outPut.style.color = "#0fb"
        } else {
             outPut.style.color = "#bbb"
        }
    })
    
})
