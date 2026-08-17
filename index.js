const calculateMortage = () => {
// 1. Get input values
const principal = parseFloat(document.getElementById("amount").value);
const annualInterest = parseFloat(document.getElementById("interset").value);
const years = parseFloat(document.getElementById("years").value);

// safety check for empty inputs
if (isNaN(principal) || isNaN(annualInterest) || isNaN(years) || principal <= 0 || years <= 0) {
    document.getElementById("result").innerText = "$0.00";
    return;
}

// convert annual rate to monthly decimal rate
const monthlyInterset = (annualInterest / 100) /12;

// convert years to total months
const totalPayments = years *12;

// Mortage calculation formula
const x = Math.pow(1 + monthlyInterset, totalPayments);
const montlyPayments = (principal * x * monthlyInterset) / (x-1);

// display result rounded to 2 decimal places
document.getElementById("result").innerText = `$${montlyPayments.toFixed(2)}`;
};
document.querySelectorAll(".calculator input").forEach(input => {
    input.addEventListener("input", calculateMortage);
});  

document.getElementById("calcBtn").addEventListener("click", calculateMortage);

