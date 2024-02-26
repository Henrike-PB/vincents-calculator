    // querySelector pega pela tag
const display = document.querySelector('#display');
// querySelectorAll pega todos os elementos
const buttons = document.querySelectorAll('button');

// utilizamos o ponto para fazer ligação á uma função, no caso "buttons. (função)forEach"
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === '=') {
            display.value = eval(display.value);
        } else if (btn.id === 'ac') {
            display.value = '';
        } else if (btn.id === 'de') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }       
    });
});