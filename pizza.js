function orderingPizza(...args) {
    const pizzaMenu = {
        1: "піца з грибами",
        2: "піца з куркою і ананасом",
        3: "піца з салямі",
        4: "піца з морепродуктами",
    };

    const [type, quantity] = args;

    if (args.length === 0) {
        return "Ваше замовлення: фірмова піца - 1шт.";
    }

    if (args.length === 1 && parseInt(type) && pizzaMenu[type]) {
        return `Ваше замовлення: ${pizzaMenu[type]} - 1шт.`;
    }

    if (
        args.length === 2 && parseInt(type) && pizzaMenu[type] &&
        parseInt(quantity) && quantity > 0
    ) {
        return `Ваше замовлення: ${pizzaMenu[type]} - ${quantity}шт.`;
    }

    return "Відбулася помилка, повторіть замовлення.";
}
  
console.log(orderingPizza());
console.log(orderingPizza(1));
console.log(orderingPizza(2, 3));
console.log(orderingPizza(5));
console.log(orderingPizza(2, -1));
console.log(orderingPizza(3, "дві"));
