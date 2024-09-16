// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Exercise 5: Car Discount Calculator
    document.getElementById("carForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const carModel = document.getElementById("carModel").value;
        let discount = 0;
        let carName = "";

        switch (carModel) {
            case "fiesta":
                discount = 5;
                carName = "Ford Fiesta";
                break;
            case "focus":
                discount = 10;
                carName = "Ford Focus";
                break;
            case "escape":
                discount = 20;
                carName = "Ford Escape";
                break;
        }

        document.getElementById("carResult").innerHTML = `
            <p>Selected car: ${carName}</p>
            <p>Discount: ${discount}%</p>
        `;
    });

    // Exercise 7: Number Analysis
    document.getElementById("numberForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const numbers = document.getElementById("numbers").value.split(",").map(Number);
        let negatives = 0,
            positives = 0,
            multiples15 = 0,
            sumEvens = 0;

        numbers.forEach((num) => {
            if (num < 0) negatives++;
            if (num > 0) positives++;
            if (num % 15 === 0) multiples15++;
            if (num % 2 === 0) sumEvens += num;
        });

        document.getElementById("numberResult").innerHTML = `
            <p>Negative numbers: ${negatives}</p>
            <p>Positive numbers: ${positives}</p>
            <p>Multiples of 15: ${multiples15}</p>
            <p>Sum of even numbers: ${sumEvens}</p>
        `;
    });

    // Exercise 8: Multiplication Table
    document.getElementById("multiplicationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const multiplier = parseInt(document.getElementById("multiplier").value);
        let table = '<table class="table table-striped"><thead><tr><th>Multiplier</th><th>Result</th></tr></thead><tbody>';

        for (let i = 1; i <= 10; i++) {
            table += `<tr><td>${multiplier} x ${i}</td><td>${multiplier * i}</td></tr>`;
        }

        table += "</tbody></table>";
        document.getElementById("multiplicationResult").innerHTML = table;
    });

    // Exercise 9: Temperature Converter
    document.getElementById("temperatureForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const celsius = parseFloat(document.getElementById("celsius").value);
        const fahrenheit = (celsius * 9) / 5 + 32;
        let message = "";

        if (fahrenheit >= 14 && fahrenheit < 32) {
            message = "Temperatura baja";
        } else if (fahrenheit >= 32 && fahrenheit < 68) {
            message = "Temperatura adecuada";
        } else if (fahrenheit >= 68 && fahrenheit < 96) {
            message = "Temperatura alta";
        } else {
            message = "Temperatura desconocida";
        }

        document.getElementById("temperatureResult").innerHTML = `
            <p>Celsius: ${celsius}°C</p>
            <p>Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
            <p>Result: ${message}</p>
        `;
    });

    // Exercise 10: Student Age Analysis
    document.getElementById("ageForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const morningAges = document.getElementById("morningAges").value.split(",").map(Number);
        const afternoonAges = document.getElementById("afternoonAges").value.split(",").map(Number);
        const eveningAges = document.getElementById("eveningAges").value.split(",").map(Number);

        const avgMorning = morningAges.reduce((a, b) => a + b, 0) / morningAges.length;
        const avgAfternoon = afternoonAges.reduce((a, b) => a + b, 0) / afternoonAges.length;
        const avgEvening = eveningAges.reduce((a, b) => a + b, 0) / eveningAges.length;

        const highestAvg = Math.max(avgMorning, avgAfternoon, avgEvening);
        let highestShift = "";

        if (highestAvg === avgMorning) highestShift = "Morning";
        else if (highestAvg === avgAfternoon) highestShift = "Afternoon";
        else highestShift = "Evening";

        document.getElementById("ageResult").innerHTML = `
            <p>Morning shift average age: ${avgMorning.toFixed(2)}</p>
            <p>Afternoon shift average age: ${avgAfternoon.toFixed(2)}</p>
            <p>Evening shift average age: ${avgEvening.toFixed(2)}</p>
            <p>Shift with highest average age: ${highestShift}</p>
        `;
    });
});
