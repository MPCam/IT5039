let salary = prompt('Please enter your salary');
let tax = 0;

if ( salary > 0 ) {
    if ( salary <= 14000 ) {
        tax = .105 * salary;
    }
    else if ( salary <= 48000) {
        tax = .105 * 14000 + .175 * (salary - 14000)
    }
    else if ( salary <= 70000 ) {
        tax = .105 * 14000 + .175 * (48000 -14000) + .300 * (salary - 48000)
    }
}

alert('Your tax is: ' + tax)