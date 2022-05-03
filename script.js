
//Создаем Body
const BODY = document.querySelector('body'); 

const KEYS_BUTTON = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '/', 'DEL',
    'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', `'`, 'Enter',
    'Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '.', ',', '/', '↑', 'Shift', 
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '←', '↓', '→'
]


// Создаем блок по центру с text-area и клавиатурой

function startPage() {

    let bigDiv = document.createElement('div');
    bigDiv.classList.add('div-main');

    let textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'text-area');

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    // let button = document.createElement('button');
    // button.classList.add('button-keyboard');

    for (let i = 0; i < 65; i++) {

        if (i === 13 || i === 29 || i === 41 || i === 42 ) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i];
            button.classList.add('button-keyboard', 'button-keyboard-special');
            keyboard.appendChild(button);
        } else if (i === 14) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i];
            button.classList.add('button-keyboard', 'button-keyboard-special');
            button.style.width = '64px';
            keyboard.appendChild(button);
        } else if (i === 59) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i];
            button.classList.add('button-keyboard', 'button-keyboard-special');
            button.style.width = '300px';
            keyboard.appendChild(button);
        } else if (i === 56 || i == 61) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i];
            button.classList.add('button-keyboard');
            button.style.width = '75px';
            keyboard.appendChild(button);
        } else {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i];
            button.classList.add('button-keyboard');
            keyboard.appendChild(button);
        }

        

    }

    bigDiv.appendChild(textArea);
    bigDiv.appendChild(keyboard);

    BODY.appendChild(bigDiv);
}

startPage();

