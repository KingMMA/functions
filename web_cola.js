const products = [
    { name: "Веб-кола", calories: 150, color: "чорний" },
    { name: "Веб-апельсин", calories: 120, color: "помаранчевий" },
    { name: "Веб-лимонад", calories: 100, color: "жовтий" },
    { name: "Веб-вишня", calories: 130, color: "червоний" },
];
  
function sortProducts(products, key, reverse = false) {
    if (!["name", "calories", "color"].includes(key)) {
      document.write("Неправильний ключ сортування.");
      return [];
    }
    /* [...products] потрібно щоб "скопіювати масив, 
    так як якщо цього не зробити, то ми змінемо глобальний масив" */
    const sorted = [...products].sort((a, b) => {
      if (parseInt(a[key]) || parseFloat(a[key])) {
        return a[key] - b[key];
      }

      return a[key] === b[key]; // Якщо це рядок, перевіряємо чи дорівнюють вони один одному
    });
  
    return reverse ? sorted.reverse() : sorted;
}
  
function printProducts(products) {
    document.write("<h3>Список продукції:</h3>");
    for (let i = 0; i < products.length; i++) {
      document.write(
        `Назва: ${products[i].name}, Калорії: ${products[i].calories}, Колір: ${products[i].color}<br>`
      );
    }
}
  

const sortedByName = sortProducts(products, "name");
document.write("<h4>Сортування за назвою:</h4>");
printProducts(sortedByName);

const sortedByCaloriesDesc = sortProducts(products, "calories", true);
document.write("<h4>Сортування за калоріями (зворотне):</h4>");
printProducts(sortedByCaloriesDesc);

const sortedByColor = sortProducts(products, "color");
document.write("<h4>Сортування за кольором:</h4>");
printProducts(sortedByColor);
