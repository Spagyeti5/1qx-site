import { useState, useEffect } from 'react';
import usHistoryQuestions from '../data/usHistoryQuestions';
import { Link } from 'react-router-dom';

function USHistoryQuiz() {
useEffect(() => {
  document.title = 'US History Quiz Questions - 1qx.com';
}, []);

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [fadeClass, setFadeClass] = useState('fade-in');
  
const correctSnarkyComments = [
    "Genius detected!",
    "You must have a time machine!",
    "Nailed it like a boss!",
    "You clearly know your stuff.",
    "Einstein would be proud!",
    "Time traveler alert!",
    "Someone's been paying attention in history class!",
    "Well, look at you!",
    "Somebody's been studying!",
    "You just guessed that one, didn't you?",
    "I'm almost impressed.",
    "Wow, I didn't think you would get that.",
    "Give yourself a gold star.",
    "Yeah, that was an easy one."
];

const wrongSnarkyComments = [
    "Better luck next time!",
    "Off by a few years... or decades.",
    "Time travel isn't easy!",
    "Close! In another timeline maybe.",
    "Good effort, wrong century!",
    "Not quite - but good guess!",
    "You might need a new DeLorean!",
    "Close... but no cigar!",
    "Oof. Better luck next time.",
    "That was... a choice.",
    "Swing and a miss!",
    "I'd be embarrassed with that answer.",
    "I thought you'd be better at this.",
    "In fairness, most kids get that wrong too."
];

  useEffect(() => {
    const shuffledQuestions = [...usHistoryQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map(q => ({
        ...q,
        answers: [...q.answers].sort(() => 0.5 - Math.random()) // Shuffle answers too
      }));
    setQuestions(shuffledQuestions);
  }, []);

  const playSound = (type) => {
    const sounds = type === 'correct'
      ? ['correct1.wav', 'correct2.wav', 'correct3.wav', 'correct4.wav', 'correct5.wav', 'correct6.wav']
      : ['wrong1.wav', 'wrong2.wav', 'wrong3.wav', 'wrong4.wav', 'wrong5.wav', 'wrong6.wav'];

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(`/sounds/${randomSound}`);
    audio.play();
  };

  const handleAnswer = (answer) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);

      const randomChance = Math.random();  // Random 0–1
      let snark = '';

      if (randomChance < 0.3) {  // 30% chance for snark
        if (answer === questions[currentIndex].correctAnswer) {
          snark = " " + correctSnarkyComments[Math.floor(Math.random() * correctSnarkyComments.length)];
        } else {
          snark = " " + wrongSnarkyComments[Math.floor(Math.random() * wrongSnarkyComments.length)];
        }
      }

      if (answer === questions[currentIndex].correctAnswer) {
        setScore(prev => prev + 1);
        playSound('correct');
        setFeedback('Correct!' + snark);
      } else {
        playSound('wrong');
        setFeedback('Wrong!' + snark);
      }
      // Wait for "Next Question" manually
    }
  };

  const handleNextQuestion = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(prev => prev + 1);
        setSelectedAnswer(null);
        setFadeClass('fade-in');
        setFeedback('');
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const restartQuiz = () => {
    const shuffled = [...usHistoryQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10)
      .map(q => ({
        ...q,
        answers: [...q.answers].sort(() => 0.5 - Math.random())
      }));
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setFeedback('');
    setFadeClass('fade-in');
  };

  if (questions.length === 0) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">

      {/* --- PAGE INTRODUCTION HEADER --- */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">U.S. History Quiz</h2>
        <p className="text-gray-700">Test your knowledge of significant events and milestones in American history.</p>
      </div>

      {!showResult ? (
        <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center ${fadeClass}`}>

          {/* --- SAFE QUESTION RENDERING --- */}
          {questions.length > 0 && questions[currentIndex] && (
            <>
              <h2 className="text-2xl font-bold mb-4">{questions[currentIndex].question}</h2>
              <div className="flex flex-col space-y-4">
                {questions[currentIndex].answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(answer)}
                    disabled={selectedAnswer !== null}
                    className={`py-2 px-4 rounded font-bold ${
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

              {/* Feedback and Fact */}
              <div className="mt-4 text-gray-700">
                {feedback}
                {selectedAnswer && questions[currentIndex] && (
                  <div className="mt-2 text-sm text-gray-500">{questions[currentIndex].fact}</div>
                )}
              </div>

              {/* Next Question Button */}
              {selectedAnswer && (
                <button
                  onClick={handleNextQuestion}
                  className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
                >
                  Next Question
                </button>
              )}
            </>
          )}

        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
          <p className="text-xl mb-6">Your Score: {score} / {questions.length}</p>
          <button onClick={restartQuiz} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg">
            Try Again
          </button>
        </div>
      )}
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

<div className="flex justify-center mt-6">
  <Link to="/">
    <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity" />
  </Link>
</div>
    </div>
  );
}

export default USHistoryQuiz;
