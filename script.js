let d = document.querySelector(".table")
let p = document.querySelector("#line")

function multiplication() {
    let num = Number(document.getElementById("number").value)

    console.log(num);
    console.log(typeof num);

    let str = ""
    if (num > 0) {
        for (let i = 1; i <= 10; i++) {

            let mul = num * i
            console.log(`${num} x ${i} = ${mul}`);

            str += `${num} x ${i} = ${mul}\n`

        }
        p.innerText = `Multiplication Table of ${num}`
        d.innerText = str
    }
    else if (num == 0) {
        p.innerText = "Any number multiplied by 0 is always 0 😊"
        d.innerText = ""
    }
    else {
        p.innerText = "Please enter a positive number 😀"
        d.innerText = ""
    }
}