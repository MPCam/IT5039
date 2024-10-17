let counter = 0;

counter = parseFloat(counter);

function show() {
    alert(`Cart quantity: ${counter}`);
}

function addOne() {
    counter = counter + 1;
    alert(`Cart quantity: ${counter}`);
}

function addTwo() {
    counter = counter + 2;
    alert(`Cart quantity: ${counter}`);
}

function addThree() {
    counter = counter + 3;
    alert(`Cart quantity: ${counter}`);
}

function reset() {
    counter = 0;
    alert(`Cart quantity: ${counter}`);
}