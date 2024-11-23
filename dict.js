function dictionaryService(words, direction) {
    let mistakes_words = [];
    let mistakes = 0;
    let correctAnswers = 0;

    if (direction !== "enUa" && direction !== "uaEn") {
      alert("Неправильний напрямок перекладу. Використовуйте 'enUa' або 'uaEn'.");
      return;
    }
  
    let repetitions = prompt("Введіть кількість повторів для тесту (максимальний бал - 10)");
  
    if (isNaN(repetitions) || repetitions < 1) {
      alert("Неправильний ввід, повторіть запуск.");
      return;
    }
  
    repetitions = +repetitions;
  
    for (let i = 0; i < repetitions; i++) {
      for (const key in words) {
        let word, correctTranslation;
  
        if (direction === "enUa") {
          word = key;
          correctTranslation = words[key];
        } else {
          word = words[key];
          correctTranslation = key;
        }
  
        let input = prompt("Введіть переклад слова: " + word);
  
        if (input === "") {
          alert("!!! Пропущено відповідь");
        } else if (input === correctTranslation) {
          alert(":)");
          correctAnswers++;
        } else {
          alert(":(");
          mistakes++;
          mistakes_words.push({
            your_input: input,
            correctAnswer: correctTranslation
          });
        }
      }
    }
  
    alert(`Правильні відповіді: ${correctAnswers}, Помилки: ${mistakes}`);
    if (mistakes > 0) {
      alert("Помилки в словах: ");
      for (let obj of mistakes_words) {
        alert(`Ваша відповідь: ${obj["your_input"]}, Правильна відповідь: ${obj["correctAnswer"]}`);
      }
    }
}
  
  
const wordsEnUa = {
    "apple": "яблуко",
    "house": "будинок",
    "mouse": "миша"
};

const wordsUaEn = {
    "яблуко": "apple",
    "будинок": "house",
    "миша": "mouse"
};

const direction = prompt("Введіть 'enUa' для перекладу з англійської на українську або 'uaEn' для перекладу з української на англійську");
dictionaryService(wordsEnUa, direction);
