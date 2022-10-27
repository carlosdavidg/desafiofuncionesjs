let ele = document.getElementById("ele1")

pintar = function( color = "green") {
    ele.style.backgroundColor = color;
}
ele.addEventListener("click", function() {
    pintar("yellow")

} )

let cajaColor = document.getElementById("muestra");
let guardarColor = "";

document.addEventListener("keydown", function (event) {
    if (event.key.toLocaleLowerCase() === "a") {
        cajaColor.style.backgroundColor = "lightcoral";
        cajaColor.textContent = "A";
        guardarColor = "lightcoral";
    } 
    else if (event.key.toLocaleLowerCase() === "b") {
        cajaColor.style.backgroundColor = "lawngreen";
        cajaColor.textContent = "B";
        guardarColor = "lawngreen";

    }
    else if (event.key.toLocaleLowerCase() === "c") {
        cajaColor.style.backgroundColor = "gold";
        cajaColor.textContent = "C";
        guardarColor = "gold";


    }
    else if (event.key.toLocaleLowerCase() === "d") {
        cajaColor.style.backgroundColor = "lightseagreen";
        cajaColor.textContent = "D";
        guardarColor = "lightseagreen";
    }

    else {guardarColor = "";
}})

let caja1 = document.getElementById("div1");
let caja2 = document.getElementById("div2");
let caja3 = document.getElementById("div3");
let caja4 = document.getElementById("div4");

caja1.addEventListener("click", function() {caja1.style.backgroundColor = guardarColor})
caja2.addEventListener("click", function() {caja2.style.backgroundColor = guardarColor})
caja3.addEventListener("click", () => caja3.style.backgroundColor = guardarColor)
caja4.addEventListener("click", () => caja4.style.backgroundColor = guardarColor)



    

