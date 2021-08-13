// Get the values from the user. We need to get the fizz and the buzz value 
function getValues() {

    // Get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // We need to validate the inputs
    // Parse into Integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // We call fizzBuzz function
        let fbArray = fizzBuzz(fizzValue, buzzValue);

        // We call displayData function and write the array to the page
        displayData(fbArray);
    } else {
        // Display error message
        alert("Please enter an integer");
    }
}

// Generate numbers from fizzValue to buzzValue
// do fizzBuzz
function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    // Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        // Check to see if divisible by Both (3 and 5)
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }

    return returnArray;
}

// Loop over the array and create a tablerow for each item  
function displayData(fbArray) {

    // Get the table body element from the page
    let tableBody = document.getElementById("results");

    // Get the template row
    let templateRow = document.getElementById("fbTemplate");

    // Clear the table first
    tableBody.innerHTML = "";
    // Loop over the array and create a tablerow for each item
    for (let index = 0; index < fbArray.length; index += 5) {
    
        let tableRow = document.importNode(templateRow.content, true);

        // Grab us the to put into array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index +1]);
        rowCols[1].textContent = fbArray[index +1];

        rowCols[2].classList.add(fbArray[index +2]);
        rowCols[2].textContent = fbArray[index + 2];

        rowCols[3].classList.add(fbArray[index +3]);
        rowCols[3].textContent = fbArray[index + 3];

        rowCols[4].classList.add(fbArray[index +4]);
        rowCols[4].textContent = fbArray[index + 4];


        tableBody.appendChild(tableRow);

    }

    // Add all the rows to the table


}
