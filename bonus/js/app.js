
const lightOff = document.querySelector('.lamp-off')

const buttonOff = document.querySelector('button')

// con src.match

// buttonOff.addEventListener(
//     'click', function () {
//         if (lightOff.src.match('img/white_lamp.png')) {
//             lightOff.src = 'img/yellow_lamp.png'
//             lightOff.alt = 'lampadina accesa'
//             buttonOff.innerHTML='spegni'
//         } else {
//             lightOff.src = 'img/white_lamp.png'
//             lightOff.alt = 'lampadina spenta'
//             buttonOff.innerHTML='accendi'
//         }
//     }
// )


// oppure con innerText.includes

buttonOff.addEventListener(
    'click', function () {
        if (buttonOff.innerText.includes("Accendi")) {
            lightOff.src = 'img/yellow_lamp.png'
            lightOff.alt = 'lampadina accesa'
            buttonOff.innerHTML='spegni'
        } else {
            lightOff.src = 'img/white_lamp.png'
            lightOff.alt = 'lampadina spenta'
            buttonOff.innerHTML='Accendi'
        }
    }
)