function randomArrayValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
  
function generateQuestionAnswers(questions, answers, numAnswers) {
    const question = randomArrayValue(questions);
  
    let selectedAnswers = [];
    for (let i = 0; i < numAnswers; i++) {
      const randomAnswer = randomArrayValue(answers);
      selectedAnswers.push(randomAnswer);
    }
  
    console.log(`Питання: ${question}\nВідповіді: ${selectedAnswers.join(", ")}`);
}

const questions = [
    "Що мені взяти з собою на ковзанку?",
    "Що мені покласти в холодильник?",
    "Що мені взяти із собою до школи?",
    "Що мені взяти із собою в басейн?",
    "Що мені взяти із собою на пікнік?"
];

const answers = ["ковзани", "яблука", "підручники", "рушник", "гриби", "шоколад"];

generateQuestionAnswers(questions, answers, 3);
