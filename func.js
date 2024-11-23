function printTable(from, to, step=1, func) {
    if (func === undefined) {
        return;
    }
    document.write("<table border='1' cellspacing='0'>");
    for (let x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

const functionsArray = [
  (x) => x * x,
  (x) => Math.sqrt(x),
  (x) => x + 10,
  (x) => x * 3
];

function getFunctionFromUser() {
  const userChoice = prompt("Виберіть функцію: 1 - x^2, 2 - √x, 3 - x+10, 4 - x*3");
  const index = parseInt(userChoice) - 1;

  if (index >= 0 && index < functionsArray.length) {
    return functionsArray[index];
  } else {
    alert("Невірний вибір!");
  }
}

function getExpressionAndCalculateTable() {
    const selectedFunction = getFunctionFromUser();
    if (selectedFunction) {
        const from = parseInt(prompt("Введіть початкове значення x"));
        const to = parseInt(prompt("Введіть кінцеве значення x"));
        const step = parseInt(prompt("Введіть крок"));
    
        printTable(from, to, step, selectedFunction);
    }   
}

getExpressionAndCalculateTable()