function calculateBmi() {
    let weight = document.getElementById("weight").value; 
    let height= document.getElementById("height").value;

    weight = parseFloat(weight);
    height = parseFloat(height);

    if (weight > 0 && height > 0) {
        
        let bmi = weight / (height * height);   
        bmi = bmi.toFixed(2);

        let healthStatus;

        if (bmi < 18.5) {
            healthStatus = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            healthStatus = 'Healthy Weight';
        } else if (bmi >= 25 && bmi < 30) {
            healthStatus = 'Overweight';
        }

    
        document.getElementById("bmi-result").innerText = `Your BMI is ${bmi}`;
        document.getElementById("health-status").innerText = `Your health status is ${healthStatus}`;
    } else {
        document.getElementById("bmi-result").innerText = `You have entered invalid number, please a positive number for weight and height`;
    }
}