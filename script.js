function generatePlan() {
    const age = document.getElementById("age").value;
    const goal = document.getElementById("goal").value;
    const outputDiv = document.getElementById("output");

    if (!age || !goal) {
        outputDiv.innerHTML = "<p style='color:red;'>Please select both age and goal.</p>";
        return;
    }

    outputDiv.innerHTML = `<h3>Your Montessori Plan</h3>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <p>✨ Here is your tailored plan... (this can be connected to AI later!)</p>`;
}
