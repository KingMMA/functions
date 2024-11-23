function printReceipt(orders) {
    const menu = {
      "еспресо": 40,
      "капучино": 50,
      "латте": 60,
      "гарячий шоколад": 70
    };
  
    let total = 0;
    let receipt = "ЧЕК\n------------------\n";
  
    for (let order of orders) {
      const { name, quantity } = order;
      if (!menu[name]) {
        alert(`Напій "${name}" не знайдено у меню.`);
        continue;
      }
      const price = menu[name] * quantity;
      total += price;
      receipt += `${name} x${quantity} - ${menu[name]} грн (усього: ${price} грн)\n`;
    }
  
    receipt += "------------------\n";
    receipt += `ЗАГАЛЬНА СУМА: ${total} грн`;
    alert(receipt);
  }
  
function startOrdering() {
    const orders = [];
    while (true) {
        const drink = prompt("Введіть назву напою (еспресо, капучино, латте, гарячий шоколад) або 'завершити':").toLowerCase();
        if (drink === "завершити") break;

        const quantity = +prompt(`Скільки порцій "${drink}" ви хочете замовити?`);
        if (quantity <= 0 || isNaN(quantity)) {
        alert("Будь ласка, введіть коректну кількість порцій.");
        continue;
        }

        orders.push({ name: drink, quantity });
    }

    if (orders.length > 0) {
        printReceipt(orders);
    } else {
        alert("Замовлення не зроблено.");
    }
}

startOrdering();
