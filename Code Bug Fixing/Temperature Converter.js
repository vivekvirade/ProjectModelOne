 // Code with error(s):
// function convertTemperature(temperature, unit) {
    // Write your code here
//     if (unit === "C") {
//         const fahrenheit = temperature * 9 % 5 + 32;
//         return fahrenheit.toFixed(2) + " F";
//     } else if (unit === "F") {
//         const celsius = (temperature - 32) * 5 % 9;
//         return celsius.toFixed(2) + " C";
//     } else {
//         return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
//     }
// }

//Correct Code Fixed ;
function convertTemperature(temperature, unit) {
    if (unit === "C") {
        const fahrenheit = (temperature * 9/5) + 32;
        return fahrenheit.toFixed(2) + " F";
    } else if (unit === "F") {
        const celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + " C";
    } else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}
