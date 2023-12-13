const questions = require("./questions.json");

function getRandomQuestion(topic) {
  if (topic === "случайный вопрос") {
    const topics = Object.keys(questions);
    const randomNumber = Math.floor(Math.random() * topics.length);
    topic = topics[randomNumber].toLowerCase();
  }
  const randomNumber = Math.floor(Math.random() * questions[topic].length);

  return {
    question: questions[topic][randomNumber],
    questionTopic: topic,
  };
}

function getCorrectAnswer(topic, id) {
  let foundQuestion;
  if (topic !== "случайный вопрос") {
    foundQuestion = questions[topic].find((question) => question.id === id);
  } else {
    foundQuestion = allQuestionsWithNewId.find((question) => question.id === id);
  }
  if (!foundQuestion.hasOptions) {
    return foundQuestion.answer;
  }

  return foundQuestion.options.find((option) => option.isCorrect).text;
}

module.exports = { getRandomQuestion, getCorrectAnswer };
