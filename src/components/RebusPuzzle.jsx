import { useState, useEffect } from 'react';
import { rebusPuzzles } from '../data/rebusPuzzles';
import { Link } from 'react-router-dom';

function RebusPuzzle() {
  const [puzzles, setPuzzles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [score, setScore] = useState(0);

  useEffect(() => {
    const shuffled = [...rebusPuzzles]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setPuzzles(shuffled);
  }, []);

  const playSound = (type) => {
    const sounds = type === 'correct'
      ? ['correct1.wav', 'correct2.wav', 'correct3.wav', 'correct4.wav', 'correct5.wav', 'correct6.wav']
      : ['wrong1.wav', 'wrong2.wav', 'wrong3.wav', 'wrong4.wav', 'wrong5.wav', 'wrong6.wav'];

    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(`/sounds/${randomSound}`);
    audio.play();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = userInput.trim().toLowerCase() === puzzles[currentIndex].answer.toLowerCase();

    if (isCorrect) {
      setScore(prev => prev + 1);
      playSound('correct');
      goToNext();
    } else {
      playSound('wrong');
      // Stay on same puzzle for wrong answer
    }
  };

  const handleSkip = () => {
    playSound('wrong');
    goToNext();
  };

  const goToNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      if (currentIndex + 1 < puzzles.length) {
        setCurrentIndex(prev => prev + 1);
        setUserInput('');
        setFadeClass('fade-in');
      } else {
        setGameOver(true);
      }
    }, 300);
  };

  const restartGame = () => {
    const shuffled = [...rebusPuzzles]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
    setPuzzles(shuffled);
    setCurrentIndex(0);
    setUserInput('');
    setGameOver(false);
    setFadeClass('fade-in');
    setScore(0);
  };

  if (puzzles.length === 0) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">

      {/* --- PAGE INTRODUCTION HEADER --- */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Rebus Puzzle Challenge!</h2>
        <p className="text-gray-700">Each image represents a common phrase or saying. Can you solve them all?</p>
      </div>

      {!gameOver ? (
        <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center ${fadeClass}`}>
          {puzzles.length > 0 && puzzles[currentIndex] && (
            <>
              <img
                src={puzzles[currentIndex].image}
                alt="Rebus Puzzle"
                className="mx-auto mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your answer..."
                  className="border border-gray-300 rounded px-4 py-2 mb-4 w-full"
                />
                <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-6 rounded mb-2">
                  Submit
                </button>
              </form>
              <button onClick={handleSkip} className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-6 rounded">
                Skip
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center fade-in">
          <h2 className="text-3xl font-bold mb-4">Rebus Challenge Complete!</h2>
          <p className="text-xl mb-6">Your Score: {score} / {puzzles.length}</p>
          <button onClick={restartGame} className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg">
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

export default RebusPuzzle;

