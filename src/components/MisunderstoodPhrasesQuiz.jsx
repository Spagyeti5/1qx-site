// MisunderstoodPhrasesQuiz.jsx
import { useState } from 'react';
import misunderstoodQuestions from '../data/misunderstoodQuestions'; // Adjust the import path if needed
import { Link } from 'react-router-dom';

function MisunderstoodPhrasesQuiz() {
  const questions = misunderstoodQuestions.slice(0, 30); // Fixed 30 in order

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Optional: you can add snarky comments if you wish
  const correctSnarkyComments = [
    "Well, someone's a phrase-finding genius!",
    "You actually knew that? Impressive.",
    "You're not easily fooled, are you?",
    "That was kinda tough, nice job.",
    "Yeah, that was too easy.",
    "Excellent! You know your idioms."
  ];
  const wrongSnarkyComments = [
    "Tricky one, for you I guess.",
    "Ouch, fooled by the classics.",
    "I thought everyone knew that one.",
    "Come on, that was simple!",
    "That was really easy, but only if you know it.",
    "Obvious now, isn't it? Bet you'll remember next time.",
    "Phrase fail! But that's why you're here."
  ];

  // Fade-in/fade-out for nicer transitions
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  // Play sound effect (optional, like other quizzes)
  const playSound = (type) => {
    const sounds = type === 'correct'
      ? ['correct1.wav', 'correct2.wav', 'correct3.wav']
      : ['wrong1.wav', 'wrong2.wav', 'wrong3.wav'];
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(`/sounds/${randomSound}`);
    audio.play();
  };

  const handleAnswer = (answer) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);

      // Snarky comment 30% of the time
      let snark = '';
      if (Math.random() < 0.3) {
        if (answer === questions[currentIndex].correctAnswer) {
          snark = " " + correctSnarkyComments[Math.floor(Math.random() * correctSnarkyComments.length)];
        } else {
          snark = " " + wrongSnarkyComments[Math.floor(Math.random() * wrongSnarkyComments.length)];
        }
      }

      if (answer === questions[currentIndex].correctAnswer) {
        setScore((prev) => prev + 1);
        playSound('correct');
        setFeedback('Correct!' + snark);
      } else {
        playSound('wrong');
        setFeedback('Wrong!' + snark);
      }
      setShowAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
        setFeedback('');
        setShowAnswer(false);
        setFadeClass('fade-in');
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  if (questions.length === 0) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      {/* --- PAGE INTRODUCTION HEADER --- */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Misunderstood Phrases Quiz</h2>
        <p className="text-gray-700">Can you figure out the true meaning and origin of these tricky idioms and expressions?</p>
      </div>

      {/* --- MAIN QUIZ AREA --- */}
      {!showResult ? (
        <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center ${fadeClass}`}>
          {/* --- QUESTION PAGE --- */}
          {!showAnswer ? (
            <>
              <div className="flex flex-col items-center mb-4">
                <img
                  src={questions[currentIndex].questionImage}
                  alt={questions[currentIndex].phrase}
                  className="mb-4 max-h-56 w-auto object-contain rounded shadow"
                  style={{ margin: '0 auto' }}
                  loading="lazy"
                />
                <h2 className="text-2xl font-bold mb-4">{questions[currentIndex].question}</h2>
              </div>
              <div className="flex flex-col space-y-4">
                {questions[currentIndex].answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(answer)}
                    disabled={selectedAnswer !== null}
                    className={`py-2 px-4 rounded font-bold transition-all ${
                      selectedAnswer === answer
                        ? answer === questions[currentIndex].correctAnswer
                          ? 'bg-green-400'
                          : 'bg-red-400'
                        : 'bg-orange-400 hover:bg-orange-500 text-white'
                    }`}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* --- ANSWER/EXPLANATION PAGE --- */
            <>
              <div className="flex flex-col items-center mb-4">
                <img
                  src={questions[currentIndex].answerImage}
                  alt={questions[currentIndex].phrase + ' explanation'}
                  className="mb-4 max-h-56 w-auto object-contain rounded shadow"
                  style={{ margin: '0 auto' }}
                  loading="lazy"
                />
                <h2 className="text-2xl font-bold mb-2">{questions[currentIndex].phrase}</h2>
              </div>
              <div className="text-lg mb-2">
                <span className={selectedAnswer === questions[currentIndex].correctAnswer ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                  {feedback}
                </span>
              </div>
              <div className="mt-2 text-gray-700 text-base">{questions[currentIndex].explanation}</div>

              {currentIndex + 1 < questions.length && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                >
                  Next
                </button>
              )}
              {currentIndex + 1 === questions.length && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-6 bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded"
                >
                  See Results
                </button>
              )}
            </>
          )}
        </div>
      ) : (
        /* --- RESULTS PAGE --- */
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">Your Score: {score} / {questions.length}</p>
          <div className="mb-6 text-gray-600">Thanks for playing!</div>
        </div>
      )}

      <button
        onClick={() => navigator.share?.({
          title: '1qx.com',
          text: 'Try the Misunderstood Phrases Quiz on 1qx!',
          url: window.location.href,
        })}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
      >
        Share
      </button>

      <div className="flex justify-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity" />
        </Link>
      </div>
    </div>
  );
}

export default MisunderstoodPhrasesQuiz;
