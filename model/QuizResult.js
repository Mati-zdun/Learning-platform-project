const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  userAnswers: [String], // Array of user answers (e.g., ['a', 'b', 'c'])
  score: Number, // Number of correct answers
  // Add any other relevant fields if needed
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);
