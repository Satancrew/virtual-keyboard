
//Создаем переменные Body и Head
const BODY = document.querySelector('body'); 
const HEAD = document.querySelector('head');


// Добавляем стили

function addCssToHtml() {
    const LINK = document.createElement('link');
    LINK.rel = 'stylesheet';
    LINK.type = 'text/css';
    LINK.href = './style.css';
    HEAD.appendChild(LINK);
}

addCssToHtml();


const KEYS_BUTTON = [
    { key: 'Backquote', type: 'letter', valueEn: '`', shiftValueEn: '~', valueRu: 'ё', shiftValueRu: 'Ё' },
    { key: 'Digit1', type: 'digit', valueEn: '1', shiftValueEn: '!', valueRu: '1', shiftValueRu: '!' },
    { key: 'Digit2', type: 'digit', valueEn: '2', shiftValueEn: '@', valueRu: '2', shiftValueRu: '"' },
    { key: 'Digit3', type: 'digit', valueEn: '3', shiftValueEn: '#', valueRu: '3', shiftValueRu: '№' },
    { key: 'Digit4', type: 'digit', valueEn: '4', shiftValueEn: '$', valueRu: '4', shiftValueRu: ';' },
    { key: 'Digit5', type: 'digit', valueEn: '5', shiftValueEn: '%', valueRu: '5', shiftValueRu: '%' },
    { key: 'Digit6', type: 'digit', valueEn: '6', shiftValueEn: '^', valueRu: '6', shiftValueRu: ':' },
    { key: 'Digit7', type: 'digit', valueEn: '7', shiftValueEn: '&', valueRu: '7', shiftValueRu: '?' },
    { key: 'Digit8', type: 'digit', valueEn: '8', shiftValueEn: '*', valueRu: '8', shiftValueRu: '*' },
    { key: 'Digit9', type: 'digit', valueEn: '9', shiftValueEn: '(', valueRu: '9', shiftValueRu: '(' },
    { key: 'Digit0', type: 'digit', valueEn: '0', shiftValueEn: ')', valueRu: '0', shiftValueRu: ')' },
    { key: 'Minus', type: 'letter', valueEn: '-', shiftValueEn: '_', valueRu: '-', shiftValueRu: '_' },
    { key: 'Equal', type: 'letter', valueEn: '=', shiftValueEn: '+', valueRu: '=', shiftValueRu: '+' },
    { key: 'Backspace', type: 'service', valueEn: 'Backspace', shiftValueEn: 'Backspace', valueRu: 'Backspace', shiftValueRu: 'Backspace' },
    { key: 'Tab', type: 'service', valueEn: 'Tab', shiftValueEn: 'Tab', valueRu: 'Tab', shiftValueRu: 'Tab' },
    { key: 'KeyQ', type: 'letter', valueEn: 'q', shiftValueEn: 'Q', valueRu: 'й', shiftValueRu: 'Й' },
    { key: 'KeyW', type: 'letter', valueEn: 'w', shiftValueEn: 'W', valueRu: 'ц', shiftValueRu: 'Ц' },
    { key: 'KeyE', type: 'letter', valueEn: 'e', shiftValueEn: 'E', valueRu: 'у', shiftValueRu: 'У' },
    { key: 'KeyR', type: 'letter', valueEn: 'r', shiftValueEn: 'R', valueRu: 'к', shiftValueRu: 'К' },
    { key: 'KeyT', type: 'letter', valueEn: 't', shiftValueEn: 'T', valueRu: 'е', shiftValueRu: 'Е' },
    { key: 'KeyY', type: 'letter', valueEn: 'y', shiftValueEn: 'Y', valueRu: 'н', shiftValueRu: 'Н' },
    { key: 'KeyU', type: 'letter', valueEn: 'u', shiftValueEn: 'U', valueRu: 'г', shiftValueRu: 'Г' },
    { key: 'KeyI', type: 'letter', valueEn: 'i', shiftValueEn: 'I', valueRu: 'ш', shiftValueRu: 'Ш' },
    { key: 'KeyO', type: 'letter', valueEn: 'o', shiftValueEn: 'O', valueRu: 'щ', shiftValueRu: 'Щ' },
    { key: 'KeyP', type: 'letter', valueEn: 'p', shiftValueEn: 'P', valueRu: 'з', shiftValueRu: 'З' },
    { key: 'BracketLeft', type: 'letter', valueEn: '[', shiftValueEn: '{', valueRu: 'х', shiftValueRu: 'Х' },
    { key: 'BracketRight', type: 'letter', valueEn: ']', shiftValueEn: '}', valueRu: 'ъ', shiftValueRu: 'Ъ' },
    { key: 'Backslash', type: 'letter', valueEn: '\\', shiftValueEn: '|', valueRu: '\\', shiftValueRu: '/' },
    { key: 'Delete', type: 'service', valueEn: 'Del', shiftValueEn: 'Del', valueRu: 'Del', shiftValueRu: 'Del' },
    { key: 'CapsLock', type: 'service', valueEn: 'CapsLock', shiftValueEn: 'CapsLock', valueRu: 'CapsLock', shiftValueRu: 'CapsLock' },
    { key: 'KeyA', type: 'letter', valueEn: 'a', shiftValueEn: 'A', valueRu: 'ф', shiftValueRu: 'Ф' },
    { key: 'KeyS', type: 'letter', valueEn: 's', shiftValueEn: 'S', valueRu: 'ы', shiftValueRu: 'Ы' },
    { key: 'KeyD', type: 'letter', valueEn: 'd', shiftValueEn: 'D', valueRu: 'в', shiftValueRu: 'В' },
    { key: 'KeyF', type: 'letter', valueEn: 'f', shiftValueEn: 'F', valueRu: 'а', shiftValueRu: 'А' },
    { key: 'KeyG', type: 'letter', valueEn: 'g', shiftValueEn: 'G', valueRu: 'п', shiftValueRu: 'П' },
    { key: 'KeyH', type: 'letter', valueEn: 'h', shiftValueEn: 'H', valueRu: 'р', shiftValueRu: 'Р' },
    { key: 'KeyJ', type: 'letter', valueEn: 'j', shiftValueEn: 'J', valueRu: 'о', shiftValueRu: 'O' },
    { key: 'KeyK', type: 'letter', valueEn: 'k', shiftValueEn: 'K', valueRu: 'л', shiftValueRu: 'Л' },
    { key: 'KeyL', type: 'letter', valueEn: 'l', shiftValueEn: 'L', valueRu: 'д', shiftValueRu: 'Д' },
    { key: 'Semicolon', type: 'letter', valueEn: ';', shiftValueEn: ':', valueRu: 'ж', shiftValueRu: 'Ж' },
    { key: 'Quote', type: 'letter', valueEn: '\'', shiftValueEn: '"', valueRu: 'э', shiftValueRu: 'Э' },
    { key: 'Enter', type: 'service', valueEn: 'Enter', shiftValueEn: 'Enter', valueRu: 'Enter', shiftValueRu: 'Enter' },
    { key: 'ShiftLeft', type: 'service', valueEn: 'Shift', shiftValueEn: 'Shift', valueRu: 'Shift', shiftValueRu: 'Shift' },
    { key: 'KeyZ', type: 'letter', valueEn: 'z', shiftValueEn: 'Z', valueRu: 'я', shiftValueRu: 'Я' },
    { key: 'KeyX', type: 'letter', valueEn: 'x', shiftValueEn: 'X', valueRu: 'ч', shiftValueRu: 'Ч' },
    { key: 'KeyC', type: 'letter', valueEn: 'c', shiftValueEn: 'C', valueRu: 'с', shiftValueRu: 'С' },
    { key: 'KeyV', type: 'letter', valueEn: 'v', shiftValueEn: 'V', valueRu: 'м', shiftValueRu: 'М' },
    { key: 'KeyB', type: 'letter', valueEn: 'b', shiftValueEn: 'B', valueRu: 'и', shiftValueRu: 'И' },
    { key: 'KeyN', type: 'letter', valueEn: 'n', shiftValueEn: 'N', valueRu: 'т', shiftValueRu: 'Т' },
    { key: 'KeyM', type: 'letter', valueEn: 'm', shiftValueEn: 'M', valueRu: 'ь', shiftValueRu: 'Ь' },
    { key: 'Comma', type: 'letter', valueEn: ',', shiftValueEn: '<', valueRu: 'б', shiftValueRu: 'Б' },
    { key: 'Period', type: 'letter', valueEn: '.', shiftValueEn: '>', valueRu: 'ю', shiftValueRu: 'Ю' },
    { key: 'Slash', type: 'letter', valueEn: '/', shiftValueEn: '?', valueRu: '.', shiftValueRu: ',' },
    { key: 'ArrowUp', type: 'letter', valueEn: '↑', shiftValueEn: '↑', valueRu: '↑', shiftValueRu: '↑' },
    { key: 'ShiftRight', type: 'service', valueEn: 'Shift', shiftValueEn: 'Shift', valueRu: 'Shift', shiftValueRu: 'Shift' },
    { key: 'ControlLeft', type: 'service', valueEn: 'Ctrl', shiftValueEn: 'Ctrl', valueRu: 'Ctrl', shiftValueRu: 'Ctrl' },
    { key: 'MetaLeft', type: 'service', valueEn: 'Win', shiftValueEn: 'Win', valueRu: 'Win', shiftValueRu: 'Win' },
    { key: 'AltLeft', type: 'service', valueEn: 'Alt', shiftValueEn: 'Alt', valueRu: 'Alt', shiftValueRu: 'Alt' },
    { key: 'Space', type: 'service', valueEn: '', shiftValueEn: '', valueRu: '', shiftValueRu: '' },
    { key: 'AltRight', type: 'letter', valueEn: 'Alt', shiftValueEn: 'Alt', valueRu: 'Alt', shiftValueRu: 'Alt' },
    { key: 'ArrowLeft', type: 'letter', valueEn: '←', shiftValueEn: '←', valueRu: '←', shiftValueRu: '←' },
    { key: 'ArrowDown', type: 'letter', valueEn: '↓', shiftValueEn: '↓', valueRu: '↓', shiftValueRu: '↓' },
    { key: 'ArrowRight', type: 'letter', valueEn: '→', shiftValueEn: '→', valueRu: '→', shiftValueRu: '→' },
    { key: 'ControlRight', type: 'service', valueEn: 'Ctrl', shiftValueEn: 'Ctrl', valueRu: 'Ctrl', shiftValueRu: 'Ctrl'},
];


// Создаем блок по центру с text-area, клавиатурой и описанием

function startPage() {

    let bigDiv = document.createElement('div');
    bigDiv.classList.add('div-main');

    let textArea = document.createElement('textarea');
    textArea.setAttribute('id', 'text-area');

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    let description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML += 'Для смены языка зажмите левые Ctrl и Alt.';

    for (let i = 0; i < 64; i++) {

        if (i === 13 || i === 29 || i === 41 || i === 42 || i === 54 ) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard', 'button-keyboard-special');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            keyboard.appendChild(button);
        } else if (i === 14) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard', 'button-keyboard-special');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            button.style.width = '64px';
            keyboard.appendChild(button);
        } else if (i === 58) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard', 'button-keyboard-special');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            button.style.width = '300px';
            keyboard.appendChild(button);
        } else if (i === 56) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            button.style.width = '75px';
            keyboard.appendChild(button);
        } else if (i === 55 || i === 57 || i == 63 || i == 59) {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            keyboard.appendChild(button);
        } else {
            let button = document.createElement('button');
            button.textContent = KEYS_BUTTON[i].valueEn;
            button.classList.add('button-keyboard');
            button.setAttribute('data-key', KEYS_BUTTON[i].key);
            button.setAttribute('data-type', KEYS_BUTTON[i].type);
            keyboard.appendChild(button);
        }

    }

    bigDiv.appendChild(textArea);
    bigDiv.appendChild(keyboard);
    bigDiv.appendChild(description);

    BODY.appendChild(bigDiv);
}

startPage();


// Метки с флагами языка, капса и шифта

let lang = 'en';
let capsOn = false;
let shiftOn = false;

// Тестируем обработчик 
function handlerEvent () {
    
    //Нажатие клавиши 
    BODY.addEventListener('keydown', event => {

        event.preventDefault();
        

        const BUTTON = document.querySelector(`button[data-key=${event.code}]`);
        const TEXT_AREA = document.getElementById('text-area');
        const TEXT_AREA_CONTEXT = TEXT_AREA.value;
        const buttonType = BUTTON.getAttribute('data-type');
        const buttonContext = BUTTON.innerText;
        const buttonTypeServise = BUTTON.getAttribute('data-key');
        BUTTON.classList.add('button-keyboard-active');

        if (buttonType === 'letter' || buttonType === 'digit') {
            TEXT_AREA.value += buttonContext;
            
        }

        switch (buttonTypeServise) {
            case ('ControlLeft' && 'AltLeft'):
                if (lang === 'ru') {
                    lang = 'en';
                } else if (lang === 'en') {
                    lang = 'ru'
                }
                makeNewButtons(KEYS_BUTTON);
                console.log(lang);
                break;

            case 'Tab':
                TEXT_AREA.value += '\t';
                break;

            case 'Enter':
                TEXT_AREA.value += '\n';
                break;

            case 'CapsLock':
                capsOn = !capsOn;
                makeNewButtons(KEYS_BUTTON);
                break;

            case 'ShiftLeft':
            case 'ShiftRight':
                shiftOn = !shiftOn;
                makeNewButtons(KEYS_BUTTON);
                break;

            case 'Backspace':
                TEXT_AREA.value = TEXT_AREA_CONTEXT.slice(0, TEXT_AREA.selectionStart - 1) + TEXT_AREA_CONTEXT.slice(TEXT_AREA.selectionStart, TEXT_AREA_CONTEXT.length);
                break;    

            case 'Space':
                TEXT_AREA.value += ' ';
                break;
                        
            }
        });

    // Отпускание клавиши
    BODY.addEventListener('keyup', event => {
        const BUTTON = document.querySelector(`button[data-key=${event.code}]`);
        BUTTON.classList.remove('button-keyboard-active');

        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            shiftOn = !shiftOn;
            makeNewButtons(KEYS_BUTTON);
        }
    });

    //Нажатие мыши
    BODY.addEventListener('mousedown', event => {
        const TEXT_AREA = document.getElementById('text-area');
        const TEXT_AREA_CONTEXT = TEXT_AREA.value;
        const buttonPressed = event.target;
        const buttonType = buttonPressed.getAttribute('data-type');
        const buttonContext = buttonPressed.innerText;
        const buttonTypeServise = buttonPressed.getAttribute('data-key');
        if (buttonType === 'letter' || buttonType === 'digit' || buttonType === 'service') {
            buttonPressed.classList.add('button-keyboard-active');
        }

        if (buttonType === 'letter' || buttonType === 'digit') {
            TEXT_AREA.value += buttonContext;
        }

        if (buttonType === 'service') {
            switch (buttonTypeServise) {

                case ('ControlLeft' && 'AltLeft'):
                    if (lang === 'ru') {
                        lang = 'en';
                    } else if (lang === 'en') {
                        lang = 'ru'
                    }
                    makeNewButtons(KEYS_BUTTON);
                    console.log(lang);
                    break;

                case 'Tab':
                    TEXT_AREA.value += '\t';
                    break;

                case 'Enter':
                    TEXT_AREA.value += '\n';
                    break;

                case 'CapsLock':
                    capsOn = !capsOn;
                    makeNewButtons(KEYS_BUTTON)
                    break;

                case 'Backspace':
                    TEXT_AREA.value = TEXT_AREA_CONTEXT.slice(0, TEXT_AREA.selectionStart - 1) + TEXT_AREA_CONTEXT.slice(TEXT_AREA.selectionStart, TEXT_AREA_CONTEXT.length);
                    break;

                case 'Delete':
                    TEXT_AREA.value = TEXT_AREA_CONTEXT.slice(0, TEXT_AREA.selectionStart) + TEXT_AREA_CONTEXT.slice(TEXT_AREA.selectionStart + 1, TEXT_AREA_CONTEXT.length);
                    break;

                case 'Space':
                    TEXT_AREA.value += ' ';
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    shiftOn = !shiftOn;
                    makeNewButtons(KEYS_BUTTON)
                    break;
            }
        }
    })

    // Отпускание мыши
    BODY.addEventListener('mouseup', event => {
        const buttonPressed = event.target;
        const buttonType = buttonPressed.getAttribute('data-type');
        const buttonTypeServise = buttonPressed.getAttribute('data-key');
        if (buttonType === 'letter' || buttonType === 'digit' || buttonType === 'service') {
            buttonPressed.classList.remove('button-keyboard-active');
        }
        if (buttonType === 'service' && buttonTypeServise === 'ShiftLeft' || buttonTypeServise === 'ShiftRight') {
            shiftOn = !shiftOn;
            makeNewButtons(KEYS_BUTTON);
        }
    })
    
    }

handlerEvent()


// Рисуем новые клавиши 

function makeNewButtons(test) {
    test.forEach(element => {
            const BUTTON = document.querySelector(`button[data-key=${element.key}]`);
            const TYPE = BUTTON.getAttribute('data-type');
            if (lang == 'ru' && !capsOn && !shiftOn) {
                BUTTON.innerText = element.valueRu;
            } else if (lang == 'ru' && capsOn && !shiftOn && element.type === 'letter') {
                BUTTON.innerText = element.shiftValueRu;
            } else if (lang == 'ru' && capsOn && shiftOn) {
                if (element.type === 'letter') {
                    BUTTON.innerText = element.valueRu;
                } else if (element.type === 'digit') {
                    BUTTON.innerText = element.shiftValueRu;
                }
            } else if (lang == 'ru' && shiftOn) {
                BUTTON.innerText = element.shiftValueRu;
            }
            if (lang == 'en' && !capsOn && !shiftOn) {
                BUTTON.innerText = element.valueEn;
            } else if (lang == 'en' && capsOn && !shiftOn && element.type === 'letter') {
                BUTTON.innerText = element.shiftValueEn;
            } else if (lang == 'en' && capsOn && shiftOn) {
                if (element.type === 'letter') {
                    BUTTON.innerText = element.valueEn;
                } else if (element.type === 'digit') {
                    BUTTON.innerText = element.shiftValueEn;
                }
            } else if (lang == 'en' && shiftOn) {
                BUTTON.innerText = element.shiftValueEn;
            }
        })}
    
// makeNewButtons(KEYS_BUTTON)