import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import politicalFacts from '../data/politicalFacts';

export default function PoliticalQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const shuffled = [...politicalFacts].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const correctSounds = [
    '/sounds/correct1.wav', '/sounds/correct2.wav', '/sounds/correct3.wav',
    '/sounds/correct4.wav', '/sounds/correct5.wav', '/sounds/correct6.wav'
  ];
  const wrongSounds = [
    '/sounds/wrong1.wav', '/sounds/wrong2.wav', '/sounds/wrong3.wav',
    '/sounds/wrong4.wav', '/sounds/wrong5.wav', '/sounds/wrong6.wav'
  ];

  const correctSnarkyComments = [
    "Well, look at you!",
    "Somebody's been studying!",
    "You just guessed that one, didn't you?",
    "I'm almost impressed.",
    "Wow, I didn't think you would get that.",
    "Politics nerd!",
    "Yeah, that was an easy one."
  ];

  const incorrectSnarkyComments = [
    "Oof. Better luck next time.",
    "That was... a choice.",
    "Swing and a miss!",
    "I'd be embarrassed with that answer.",
    "I thought you'd be better at this.",
    "In fairness, most kids get that wrong too."
  ];

  const playSound = (soundArray) => {
    const audio = new Audio(soundArray[Math.floor(Math.random() * soundArray.length)]);
    audio.play().catch(() => {});
  };

  const handleAnswer = (answer) => {
    if (showExplanation) return;

    const isCorrect = answer === current.answer;
    setSelectedAnswer(answer);
    if (isCorrect) {
      setScore(score + 1);
      playSound(correctSounds);
    } else {
      playSound(wrongSounds);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    const reshuffled = [...politicalFacts].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(reshuffled);
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const current = questions[currentIndex];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Weird Political Controversies Quiz</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Test your knowledge of bizarre political moments from around the world. True or false - can you tell fact from fiction?
      </p>

      <div className="bg-white p-6 rounded-xl shadow-md">
        {!showResult && current && (
          <>
            <p className="text-lg font-medium mb-4">{current.statement}</p>
            <div className="flex gap-4 mb-4">
              {["True", "False"].map((option) => (
                <button
                  key={option}
                  className={`px-4 py-2 rounded font-semibold border transition-colors duration-200 ${
                    selectedAnswer === option
                      ? (option === "True") === current.answer
                        ? 'bg-green-200 border-green-600 text-green-900'
                        : 'bg-red-200 border-red-600 text-red-900'
                      : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAnswer(option === "True")}
                  disabled={!!selectedAnswer}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanation && (
              <>
                <p className="mb-2 font-medium">
                  {selectedAnswer === current.answer ? 'Correct!' : 'Wrong!'}
                  {Math.random() < 0.3 && (
                    <span className="ml-2 italic text-sm text-gray-600">
                      {selectedAnswer === current.answer
                        ? correctSnarkyComments[Math.floor(Math.random() * correctSnarkyComments.length)]
                        : incorrectSnarkyComments[Math.floor(Math.random() * incorrectSnarkyComments.length)]}
                    </span>
                  )}
                </p>
                <p className="text-sm text-gray-700 mb-4">{current.fact}</p>
                <div className="text-center">
                  <button
                    className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {showResult && (
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">You scored {score} out of {questions.length}!</p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
              onClick={restartQuiz}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
<button
  onClick={() => navigator.share?.({
    title: '1qx.com',
    text: 'Try this puzzle on 1qx!',
    url: window.location.href,
  })}
  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
>
  Share
</button>
      <div className="text-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity mx-auto" />
        </Link>
      </div>
    </div>
  );
}
