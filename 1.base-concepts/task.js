"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const d = b**2-4*a*c;
    if (d < 0) {
  return arr;
} else if (d === 0) {
    const i = -b/(2*a);
    arr.push(i);
    return arr;
} else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent === 'string') {
    percent = Number(percent);
    }
  if (typeof contribution === 'string') {
    contribution = Number(contribution);
    }
  if (typeof amount === 'string') {
    amount = Number(amount);
    }
  if (typeof countMonths === 'string') {
    countMonths = Number(countMonths);
    }
  if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
    return false;
  }
  percent = percent / 100 / 12;
    let bodyCredit = amount - contribution;
    let monthlyPayment = bodyCredit * (percent + percent / ((1 + percent) ** countMonths - 1));
    let totalPayment = monthlyPayment * countMonths;

    return Math.round(totalPayment * 100) / 100;
}