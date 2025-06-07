import { useState, useRef, useEffect } from 'react';
import mathsQuestions from '../data/mathsQuestions';
import { Link } from 'react-router-dom';

const correctSounds = [
  '/sounds/correct1.wav', '/sounds/correct2.wav', '/sounds/correct3.wav',
  '/sounds/correct4.wav', '/sounds/correct5.wav', '/sounds/correct6.wav'
];

const wrongSounds = [
  '/sounds/wrong1.wav', '/sounds/wrong2.wav', '/sounds/wrong3.wav',
  '/sounds/wrong4.wav', '/sounds/wrong5.wav', '/sounds/wrong6.wav'
];

const snarkyCorrect = [
  "Well, look at you!", "Somebody's been studying!", "You just guessed that one, didn't you?",
  "I'm almost impressed.", "Wow, I didn't think you would get that.", "Yeah, that was an easy one.", "You used to give an apple to teacher, didn't you." 
];

const snarkyWrong = [
  "Oof. Better luck next time.", "That was... a choice.", "LOL!",
  "I'd be embarrassed with that answer.", "I thought you'd be better at this.", "Let me help you, 2+2=4, not 5.", "In fairness, most kids get that wrong too."
];

const MathsQuiz = () => {
useEffect(() => {
  document.title = 'Maths Challenge - 1qx.com';
}, []);

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [fact, setFact] = useState("");

  useEffect(() => {
    const shuffled = [...mathsQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  }, []);

  const handleAnswer = (answer) => {
    if (selected !== null) return;
    setSelected(answer);
    const correct = questions[current].correctAnswer;
    const isCorrect = answer === correct;
    setShowNext(true);
    setFeedback(isCorrect ? 'Correct!' : 'Wrong!');
    setFact(questions[current].fact);
    if (isCorrect) setScore(score + 1);

    const sound = new Audio(isCorrect
      ? correctSounds[Math.floor(Math.random() * correctSounds.length)]
      : wrongSounds[Math.floor(Math.random() * wrongSounds.length)]);
    sound.play();

    if (Math.random() < 0.3) {
      setFeedback(prev => `${prev} ` + (isCorrect
        ? snarkyCorrect[Math.floor(Math.random() * snarkyCorrect.length)]
        : snarkyWrong[Math.floor(Math.random() * snarkyWrong.length)]));
    }
  };

  const handleNext = () => {
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected(null);
      setShowNext(false);
      setFeedback("");
      setFact("");
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    window.location.reload();
  };

  if (!questions.length) return <div className="text-center mt-8 text-white">Loading...</div>;

  return (
    <div className="text-gray text-center px-4">
      <h1 className="text-2xl font-bold mt-6 mb-1">🧠 Maths Challenge</h1>
      <p className="mb-4">Solve the problems without a calculator. Learn something. Or don’t. Up to you.</p>

      <div className="bg-white rounded-xl p-6 max-w-xl mx-auto shadow-md">
        {!showResult ? (
          <>
            <h2 className="text-xl font-semibold mb-2">Question {current + 1} of {questions.length}</h2>
            <p className="mb-4">{questions[current].question}</p>
            <div className="grid grid-cols-2 gap-4">
              {questions[current].answers.map((ans, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(ans)}
                  className={`py-2 px-4 rounded-xl transition-colors duration-200 ${selected === null ? 'bg-white text-black hover:bg-orange-200' : ans === questions[current].correctAnswer ? 'bg-green-500 text-white' : ans === selected ? 'bg-red-500 text-white' : 'bg-white text-gray-400'}`}
                >
                  {ans}
                </button>
              ))}
            </div>
            {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
            {fact && <p className="mt-2 italic text-sm">{fact}</p>}
            {showNext && (
              <button onClick={handleNext} className="mt-4 bg-black text-white px-4 py-2 rounded-xl hover:bg-orange-700">Next Question</button>
            )}
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">You scored {score} out of {questions.length}</h2>
            <button onClick={handleRetry} className="bg-black text-white px-4 py-2 rounded-xl hover:bg-orange-700">Try Again</button>
          </>
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

      <div className="mt-6 mb-4">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 mx-auto hover:opacity-90 transition-opacity" />
        </Link>
      </div>
    </div>
  );
};

export default MathsQuiz;
