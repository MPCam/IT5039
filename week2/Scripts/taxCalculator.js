
function calculate() {
    let salary = document.getElementById("enterSalary").value;
    salary = parseFloat(salary);
    let tax;

    if (salary > 0) {
        if ( salary <= 15600) {
            tax = .105 * salary;
        }else if (salary > 15600 && salary <= 53500) {
            tax = .105 * 15600 + .175 * (salary - 15600);
        }else if (salary > 53500 && salary <= 78100) {
            tax = .105 * 15600 + .175 * (53500 - 15600) + .300 * (salary - 53500);
        }else if (salary > 78100 && salary <= 180000) {
            tax = .105 * 15600 + .175 * (53500 - 15600) + .300 * (78100 - 53500) + .330 * (salary - 78100);
        }else if (salary > 180000) {
            tax = .105 * 15600 + .175 * (53500 - 15600) + .300 * (78100 - 53500) + .330 * (180000 - 78100) + .390 * (salary - 180000);
        }

        document.getElementById("results").innerText = `Your salary is ${salary}. Your tax is ${tax}`;
    }else {
        document.getElementById("results").innerText = 'Invalid salary value entered. Please enter a positive number';
    }
    
}