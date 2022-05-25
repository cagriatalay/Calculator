let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.op');
let display = document.querySelector('.input');

let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');
let assign = document.querySelector('#assign');
let point = document.querySelector('#point');

let divide_op = document.querySelector('#divide');
let multiply_op = document.querySelector('#multiply');
let add_op = document.querySelector('#add');
let subtract_op = document.querySelector('#subtract');

let x = '';
let y = '';
let op = '';
let op_2 = '';
let result = '';



numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (op === '') {
            x += value;
            display.value += value;
        } else {
            y += value;
            display.value += value;
        };

        if (x[0] === '.') {
            display.value = display.value.slice(1);
            x = x.slice(0, -1);
            point.disabled = true;
        } else {
            point.disabled = false;
        };

        if (y[0] === '.' || y[0] === '0') {
            display.value = display.value.slice(0, -1);
            y = y.slice(0, -1);
            point.disabled = true;
        } else {
            point.disabled = false;
        }
    });
});

operators.forEach(operator => { // Check if operator is clicked
    operator.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (x) {
            op = value;
            display.value += value;
        };

        if (!x && op) {
            op = '';
            display.value = display.value.slice(0, -1);
        };

        if (op) {
            divide_op.disabled = true;
            multiply_op.disabled = true;
            add_op.disabled = true;
            subtract_op.disabled = true;
        };
    });
});

clear.addEventListener('click', () => { // Clear the display
    display.value = '';
    result = '';
    op = '';
    x = '';
    y = '';
    divide_op.disabled = false;
    multiply_op.disabled = false;
    add_op.disabled = false;
    subtract_op.disabled = false;
});

backspace.addEventListener('click', () => { // Delete the last character

    if (x && display.value.includes(op)) {
        y = y.slice(0, -1);
        display.value = display.value.slice(0, -1);
    };

    if (x && !op) {
        x = x.toString().slice(0, -1);
    };

    if (x && !y && !display.value.includes(op)) {
        op = '';
        divide_op.disabled = false;
        multiply_op.disabled = false;
        add_op.disabled = false;
        subtract_op.disabled = false;
    };

    if (display.value === '') {
        result = '';
        x = '';
        y = '';
        op = '';
        divide_op.disabled = false;
        multiply_op.disabled = false;
        add_op.disabled = false;
        subtract_op.disabled = false;
    };
});

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

assign.addEventListener('click', (a, b) => {
    a = parseFloat(x);
    b = parseFloat(y);

    if (display.value.includes('+')) {
        result = add(a, b);
        display.value = result;
    } else if (display.value.includes('-')) {
        result = subtract(a, b);
        display.value = result;
    } else if (display.value.includes('*')) {
        result = multiply(a, b);
        display.value = result;
    } else if (display.value.includes('/')) {
        result = divide(a, b);
        display.value = result;
    };

    if (result) {
        x = display.value;
        result = '';
        y = '';
        op = '';
        divide_op.disabled = false;
        multiply_op.disabled = false;
        add_op.disabled = false;
        subtract_op.disabled = false;
        console.log(x);
        console.log(result);
    }
});