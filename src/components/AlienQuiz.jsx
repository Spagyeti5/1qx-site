import { useState, useEffect, useRef } from 'react';
import alienQuestions from '../data/alienQuestions';
import { Link } from 'react-router-dom';

function getRandomImage() {
  const imageCount = 6;
  const index = Math.floor(Math.random() * imageCount) + 1;
  return `/alienquiz/images/alien${index}.webp`;
}

function getRandomSound(type) {
  const correct = ['correct1.wav', 'correct2.wav'];
  const wrong = ['wrong1.wav', 'wrong2.wav', 'wrong3.wav'];
  const pool = type === 'correct' ? correct : wrong;
  return `/alienquiz/sounds/${pool[Math.floor(Math.random() * pool.length)]}`;
}

const snarkyCorrect = [
  'We may spare your planet...',
  'Impressive for a species with one sun.',
  'You may continue your Earth existence.',
  'Your neural network performs adequately.',
  'Perhaps Earth is not entirely doomed.',
  'We shall delay invasion - for now.',
  'Unexpected. Intriguing.',
  'Intellect confirmed. Proceed.'
];

const snarkyWrong = [
  'Your intellect is insufficient for salvation.',
  'Primitive brain patterns detected.',
  'Please locate your nearest leader for removal.',
  'We expected more from bipedal lifeforms.',
  'No sign of intelligent thought.',
  'Our octopus candidate outperformed this.',
  'Mark this subject for re-education.',
  'Prepare memory wipe protocols.'
];

export default function AlienQuiz() {
useEffect(() => {
  document.title = 'Galactic Intelligence Survey - 1qx.com';
}, []);

  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [image, setImage] = useState(getRandomImage());
  const [timer, setTimer] = useState(30);
  const [timeExpired, setTimeExpired] = useState(false);
  const countdownAudioRef = useRef(null);

  useEffect(() => {
    if (!difficulty) return;
    const filtered = alienQuestions.filter(q => q.difficulty === difficulty);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffled);
  }, [difficulty]);

  useEffect(() => {
    if (feedback || showResult || !difficulty) return;
    if (timer === 10) {
      countdownAudioRef.current = new Audio('/alienquiz/sounds/countdown.wav');
      countdownAudioRef.current.play();
    }
    if (timer === 0) {
      setTimeExpired(true);
      setFeedback({
        result: 'Time’s up!',
        snark: snarkyWrong[Math.floor(Math.random() * snarkyWrong.length)],
        explanation: questions[current]?.explanation,
        correct: false
      });
      const sound = new Audio(getRandomSound('wrong'));
      sound.play();
      return;
    }
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, feedback, showResult, current, questions, difficulty]);

  const handleSubmit = () => {
    if (countdownAudioRef.current) {
      countdownAudioRef.current.pause();
      countdownAudioRef.current.currentTime = 0;
    }
    const q = questions[current];
const normalise = (input) =>
  String(input).toLowerCase().replace(/[^a-z0-9£p.%\/-]/gi, '').trim();

const isCorrect = Array.isArray(q.answer)
  ? q.answer.map(normalise).includes(normalise(userAnswer))
  : normalise(userAnswer) === normalise(q.answer);
    if (isCorrect) setScore(s => s + 1);
    setFeedback({
      result: isCorrect ? 'Correct!' : 'Wrong!',
      snark: isCorrect
        ? snarkyCorrect[Math.floor(Math.random() * snarkyCorrect.length)]
        : snarkyWrong[Math.floor(Math.random() * snarkyWrong.length)],
      explanation: q.explanation,
      correct: isCorrect
    });
    const sound = new Audio(getRandomSound(isCorrect ? 'correct' : 'wrong'));
    sound.play();
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent(c => c + 1);
      setUserAnswer('');
      setFeedback(null);
      setTimer(30);
      setTimeExpired(false);
      setImage(getRandomImage());
    } else {
      const finalSound = new Audio(score >= 8 ? '/alienquiz/sounds/end-high.wav' : '/alienquiz/sounds/end-low.wav');
      finalSound.play();
      setShowResult(true);
    }
  };

  const restart = () => {
    setDifficulty(null);
    setQuestions([]);
    setCurrent(0);
    setUserAnswer('');
    setFeedback(null);
    setScore(0);
    setShowResult(false);
    setTimer(30);
    setTimeExpired(false);
    setImage(getRandomImage());
  };

  if (!difficulty) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
          <img src={getRandomImage()} alt="Alien survey intro" className="w-40 h-40 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Galactic Intelligence Survey</h1>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            Greetings, Earthling. You have been selected for a routine, non-invasive cognitive scan. Please choose a difficulty to begin the survey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['easy', 'medium', 'hard', 'diabolical'].map(level => (
              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded capitalize"
              >
                {level} Scan
              </button>
            ))}
          </div>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto"><br />
            No pressure, the future of the human race on the Earth isn't at steak. If someone told you that it was, it's fake news, don't listen to them.
          </p>
          <p className="text-gray-700 mb-6 max-w-lg mx-auto">
            These are just logical and numerical reasoning questions to help us get a better understanding of the human race, and their worth. We are definitely not going to exterminate humans, <strong>WE ARE NICE!</strong>
          </p>
        </div>
        <div className="mt-6">
          <Link to="/">
            <img src="/Orangelogo.png" alt="1qx logo" className="h-16 mx-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return <div className="p-8">Loading...</div>;

  const isAwaitingAnswer = !feedback && !timeExpired;
  const isAwaitingNext = !!feedback && !showResult;

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6">
      {!showResult ? (
        <>
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl text-center">
            {image && <img src={image} alt="Alien observer" className="w-40 h-40 mx-auto mb-4" />}
            <div className="text-gray-600 mb-2">Time left: {timer}s</div>
            <h2 className="text-xl font-bold mb-2">{questions[current].question}</h2>
            {!feedback ? (
              <>
                <input
  type="text"
  value={userAnswer}
  onChange={e => setUserAnswer(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      if (!feedback && !timeExpired && !showResult) {
        handleSubmit();
      }
    }
  }}
  className="border p-2 rounded w-full"
  disabled={timeExpired}
  autoFocus
/>
                <button
                  onClick={handleSubmit}
                  className="bg-orange-400 hover:bg-orange-500 text-white font-bold mt-4 py-2 px-6 rounded"
                  disabled={timeExpired}
                >
                  Submit
                </button>
              </>
            ) : (
              <div className="mt-4">
                <div className={feedback.correct ? 'text-green-600' : 'text-red-600'}>
                  {feedback.result}
                </div>
                <div className="italic text-gray-700">{feedback.snark}</div>
                <div className="text-sm text-gray-500 mt-2">{feedback.explanation}</div>
                <button
                   onClick={handleNext}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter') handleNext();
                   }}
                   className="bg-blue-400 hover:bg-blue-500 text-white font-bold mt-4 py-2 px-6 rounded"
                 >
                   Next Question
                 </button>
              </div>
            )}
          </div>
          <div className="mt-6">
            <Link to="/">
              <img src="/Orangelogo.png" alt="1qx logo" className="h-16 mx-auto hover:opacity-90 transition-opacity" />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl text-center">
            <img
              src={score >= 8 ? "/alienquiz/images/victory.webp" : "/alienquiz/images/disgust.webp"}
              alt="Result"
              className="w-60 h-60 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Mission Complete</h2>
            <p className="text-lg mb-4">Score: {score} / {questions.length}</p>
            <p className="text-gray-700 mb-4">
              {score >= 8 ? 'Earth may yet be spared.' : 'Recommend: immediate planetary extraction.'}
            </p>
            <button
              onClick={restart}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded mb-4"
            >
              Try Again or Change Difficulty
            </button>
          </div>
          <button
            onClick={() => navigator.share?.({
              title: 'Galactic Intelligence Survey',
              text: 'My Earth IQ was ' + score + '/10. Can you beat that?',
              url: window.location.href
            })}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-6"
          >
            Share
          </button>
          <div className="mt-6">
            <Link to="/">
              <img src="/Orangelogo.png" alt="1qx logo" className="h-16 mx-auto hover:opacity-90 transition-opacity" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}






