function calculate() {
    // get values from the input fields
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;

    // check if values are in range
    if ((num1 < 10 || num1 > 500) || (num2 < 1 || num2 > 5) || (num3 < 10 || num3 > 500) || (num4 < 1 || num4 > 5)) {
        alert('Inputs are out of range!');
        return;
    }

    // calculate the product of the first two numbers
    let product1 = num1 * num2;

    // if num3 is given, calculate num4
    if (num3) {
        num4 = product1 / num3;

        // check if the calculated value is in range
        if (num4 < 1 || num4 > 5) {
            alert('Calculated value is out of range!');
            return;
        }

        document.getElementById('num4').value = num4;
    }
    // else if num4 is given, calculate num3
    else if (num4) {
        num3 = product1 / num4;

        // check if the calculated value is in range
        if (num3 < 10 || num3 > 500) {
            alert('Calculated value is out of range!');
            return;
        }

        document.getElementById('num3').value = num3;
    }
    // else, give an error message
    else {
        alert('You need to provide either num3 or num4!');
        return;
    }
}
