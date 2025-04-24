function addBorder(image) {
    if (image.style.border) {
        image.style.border = "";
    } else {
        image.style.border = "2px solid red";
    }
}

function checkStickers() {
    const number1 = Number(document.getElementById("sticker1").value);
    const number2 = Number(document.getElementById("sticker2").value);
    const number3 = Number(document.getElementById("sticker3").value);
    
    const sum = number1 + number2 + number3;

    if (sum > 10) {
        document.querySelector("#respuesta-p2").innerHTML = `Llevas demasiados stickers!!! (${sum})`;
    }

    else if (sum < 10) {
        document.querySelector("#respuesta-p2").innerHTML = `Llevas ${sum} stickers`;
    }

    else {
        document.querySelector("#respuesta-p2").innerHTML = `Llevas exactamente 10 stickers`;
    }

}

function checkPass() {
    const number1 = Number(document.getElementById("numero_1").value);
    const number2 = Number(document.getElementById("numero_2").value);
    const number3 = Number(document.getElementById("numero_3").value);

    if (number1 === 9 && number2 === 1 && number3 === 1) {
        document.querySelector("#respuesta-p3").innerHTML = `Password 1 correcto`;
    }

    else if (number1 === 7 && number2 === 1 && number3 === 4) {
        document.querySelector("#respuesta-p3").innerHTML = `Password 2 correcto`;
    }

    else {
        document.querySelector("#respuesta-p3").innerHTML = `Password incorrecto`;
    }
}