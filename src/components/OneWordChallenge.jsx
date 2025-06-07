import { useState, useRef, useEffect } from 'react';
import oneWordChallengeData from '../data/oneWordChallengeData';
import { Link } from 'react-router-dom';

const correctAudio = [
  new Audio('/sounds/correct1.wav'),
  new Audio('/sounds/correct2.wav'),
  new Audio('/sounds/correct3.wav'),
  new Audio('/sounds/correct4.wav'),
  new Audio('/sounds/correct5.wav'),
  new Audio('/sounds/correct6.wav')
];

const wrongAudio = [
  new Audio('/sounds/wrong1.wav'),
  new Audio('/sounds/wrong2.wav'),
  new Audio('/sounds/wrong3.wav'),
  new Audio('/sounds/wrong4.wav'),
  new Audio('/sounds/wrong5.wav'),
  new Audio('/sounds/wrong6.wav')
];

const correctSounds = () => {
  const sound = correctAudio[Math.floor(Math.random() * correctAudio.length)];
  sound.play();
};

const wrongSounds = () => {
  const sound = wrongAudio[Math.floor(Math.random() * wrongAudio.length)];
  sound.play();
};

const snarkyComments = {
  correct: [
    "Well, look at you!",
    "Somebody's been studying!",
    "You just guessed that one, didn't you?",
    "I'm almost impressed.",
    "Wow, I didn't think you would get that.",
    "Yeah, that was an easy one."
  ],
  wrong: [
    "Oof. Better luck next time.",
    "That was... a choice.",
    "Swing and a miss!",
    "I'd be embarrassed with that answer.",
    "I thought you'd be better at this.",
    "In fairness, most kids get that wrong too."
  ]
};

const getRandomSnarkyComment = (isCorrect) => {
  const pool = isCorrect ? snarkyComments.correct : snarkyComments.wrong;
  return pool[Math.floor(Math.random() * pool.length)];
};

function OneWordChallenge() {
useEffect(() => {
  document.title = 'One Word Daily Challenge Quiz - 1qx.com';
}, []);

  const todayIndex = new Date().getDate() % oneWordChallengeData.length;
  const challenge = oneWordChallengeData[todayIndex];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [snark, setSnark] = useState('');
  const [finalGuess, setFinalGuess] = useState('');
  const [showFinal, setShowFinal] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;
    const isCorrect = answer === challenge.questions[currentIndex].correctAnswer;
    setSelectedAnswer(answer);
    if (isCorrect) {
      correctSounds();
      setScore(score + 1);
      if (Math.random() < 0.3) setSnark(getRandomSnarkyComment(true));
    } else {
      wrongSounds();
      if (Math.random() < 0.3) setSnark(getRandomSnarkyComment(false));
    }
    setFeedback(challenge.questions[currentIndex].fact);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback('');
    setSnark('');
    if (currentIndex < challenge.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowFinal(true);
    }
  };

  const handleFinalGuess = () => {
    const isCorrect = finalGuess.trim().toLowerCase() === challenge.finalAnswer.toLowerCase();
    setFinalResult(isCorrect);
    if (isCorrect) {
      correctSounds();
    } else {
      wrongSounds();
    }
    setShowResult(true);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl text-gray-800 font-bold mb-2">One Word Challenge</h1>
      <p className="text-gray-600 mb-4">Answer five related questions, then guess the common theme. A new challenge every day!</p>

      <div className="bg-white rounded-xl shadow-md p-6">
        {!showFinal && !showResult && (
          <>
            <h2 className="text-lg font-semibold mb-2">{challenge.questions[currentIndex].question}</h2>
            <ul className="mb-4">
              {challenge.questions[currentIndex].answers.map((answer, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleAnswer(answer)}
                    className={`w-full text-left my-1 px-4 py-2 rounded border transition duration-300 ${selectedAnswer === answer ? (answer === challenge.questions[currentIndex].correctAnswer ? 'bg-green-200 border-green-400' : 'bg-red-200 border-red-400') : 'bg-gray-100 hover:bg-orange-100 border-gray-300'}`}
                    disabled={selectedAnswer !== null}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
            {feedback && (
              <div className="mb-2">
                <p className="text-sm italic">{feedback}</p>
                {snark && <p className="text-sm text-orange-600 mt-1">{snark}</p>}
              </div>
            )}
            {selectedAnswer && (
              <button
                onClick={nextQuestion}
                className="block mx-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-2"
              >
                Next Question
              </button>
            )}
          </>
        )}

        {showFinal && !showResult && (
          <div>
            <h2 className="text-lg font-semibold mb-2">{challenge.finalClue}</h2>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mb-2"
              value={finalGuess}
              onChange={(e) => setFinalGuess(e.target.value)}
            />
            <button
              onClick={handleFinalGuess}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Submit Final Answer
            </button>
          </div>
        )}

        {showResult && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">{finalResult ? 'Correct!' : 'Wrong!'}</h2>
            <p className="mb-2">The answer was: <strong>{challenge.finalAnswer}</strong></p>
            <p className="mb-4">Your score: {score} / {challenge.questions.length}</p>
            <p className="text-sm italic">Come back tomorrow for a new challenge!</p>
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

      <div className="flex justify-center mt-4">
        <a href="/" className="block">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity" />
        </a>
      </div>
    </div>
  );
}

export default OneWordChallenge;
