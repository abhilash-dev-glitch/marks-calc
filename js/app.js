// This file contains the JavaScript code for the Grade Calculator app.

function calculateGrade() {
    let totalMarks = 0;
    let numberOfSubjects = 5;

    for (let i = 1; i <= numberOfSubjects; i++) {
        let marks = parseFloat(prompt(`Enter marks for subject ${i}:`));
        if (!isNaN(marks)) {
            totalMarks += marks;
        } else {
            alert("Please enter a valid number.");
            i--; // Decrement i to repeat the input for the same subject
        }
    }

    let averageMarks = totalMarks / numberOfSubjects;
    let grade;

    if (averageMarks >= 90) {
        grade = 'A+';
    } else if (averageMarks >= 80) {
        grade = 'A';
    } else if (averageMarks >= 70) {
        grade = 'B';
    } else if (averageMarks >= 60) {
        grade = 'C';
    } else if (averageMarks >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display results on the page instead of alert
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Results</h2>
        <p><strong>Total Marks:</strong> ${totalMarks}</p>
        <p><strong>Average Marks:</strong> ${averageMarks.toFixed(2)}</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}

// Remove the immediate call to calculateGrade()
// The function will be called by a button in index.html