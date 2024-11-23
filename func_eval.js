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


  
function getExpressionAndCalculateTable() {
    const expr = prompt("Введіть вираз для функції (наприклад, x * x або Math.sqrt(x))");
    const from = parseInt(prompt("Введіть початкове значення x"));
    const to = parseInt(prompt("Введіть кінцеве значення x"));
    const step = parseInt(prompt("Введіть крок"));

    // const f = new Function("x", "return " + expr);
    const f = eval(`(x) => ${expr}`)
  
    printTable(from, to, step, f);
}
  
getExpressionAndCalculateTable();
