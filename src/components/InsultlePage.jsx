import { useState, useRef, useEffect } from 'react';
import wordList from '../data/insultleWords';
import { Link } from 'react-router-dom';

function getRandomWord() {
  const filtered = wordList.filter(word => word.word.length >= 3 && word.word.length <= 12);
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function evaluateGuess(guess, target) {
  const result = Array(guess.length).fill('gray');
  const used = Array(target.length).fill(false);

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      result[i] = 'green';
      used[i] = true;
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (result[i] === 'green') continue;
    for (let j = 0; j < target.length; j++) {
      if (!used[j] && guess[i] === target[j]) {
        result[i] = 'yellow';
        used[j] = true;
        break;
      }
    }
  }

  return result;
}

function playSound(type) {
  const sounds = type === 'correct'
    ? ['correct1.wav', 'correct2.wav', 'correct3.wav', 'correct4.wav', 'correct5.wav', 'correct6.wav']
    : ['wrong1.wav', 'wrong2.wav', 'wrong3.wav', 'wrong4.wav', 'wrong5.wav', 'wrong6.wav'];

  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(`/sounds/${randomSound}`);
  audio.play();
}

export default function InsultlePage() {
useEffect(() => {
  document.title = 'Insultle - Find the insult word game - 1qx.com';
}, []);

  const wordRef = useRef(getRandomWord());
  const targetWord = wordRef.current;

  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState([]);

  const handleGuess = () => {
    if (!targetWord || input.length !== targetWord.word.length || gameOver) return;
    const evaluation = evaluateGuess(input.toLowerCase(), targetWord.word);
    const newGuesses = [...guesses, { guess: input.toLowerCase(), evaluation }];
    setGuesses(newGuesses);
    setInput('');
    if (input.toLowerCase() === targetWord.word) {
      setGameOver(true);
      playSound('correct');
    } else {
      playSound('wrong');
    }
  };

  const resetGame = () => {
    wordRef.current = getRandomWord();
    setGuesses([]);
    setInput('');
    setGameOver(false);
    setRevealedLetters([]);
  };

  const revealLetter = () => {
    if (!targetWord) return;
    const unrevealedIndexes = [...targetWord.word].map((_, i) => i).filter(i => !revealedLetters.includes(i));
    if (unrevealedIndexes.length === 0) return;
    const randomIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];
    setRevealedLetters(prev => [...prev, randomIndex]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess();
    }
  };

  if (!targetWord) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-4">
      <h2 className="text-3xl font-bold mb-4">Insultle: {targetWord.word.length}-Letter Word</h2>
      <p className="text-gray-700 mb-6 text-center max-w-xl">
        Use your imagination to guess these genuine, often forgotten insults. Green is correct, yellow is the right letter in the wrong spot, and grey is incorrect. You don't need to guess complete words.
      </p>

      <div className="space-y-2 mb-4 w-full max-w-md">
        {guesses.map((g, index) => (
          <div key={index} className="flex justify-center space-x-1">
            {g.guess.split('').map((char, i) => (
              <span
                key={i}
                className={`w-10 h-10 flex items-center justify-center text-lg font-bold uppercase rounded shadow-md ${
                  g.evaluation[i] === 'green'
                    ? 'bg-green-400 text-white'
                    : g.evaluation[i] === 'yellow'
                    ? 'bg-yellow-300 text-white'
                    : 'bg-gray-300 text-gray-800'
                }`}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>

      {!gameOver ? (
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            maxLength={targetWord.word.length}
            className="border border-gray-400 rounded px-4 py-2 text-center uppercase tracking-widest text-lg"
            placeholder={`Enter ${targetWord.word.length}-letter word`}
          />
          <button
            onClick={handleGuess}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit Guess
          </button>
          <button
            onClick={revealLetter}
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Reveal a Letter
          </button>
          <div className="text-sm text-gray-600 mt-2">
            {revealedLetters.length > 0 && (
              <p>Revealed letters: {revealedLetters.map(i => `${i + 1} = "${targetWord.word[i].toUpperCase()}"`).join(', ')}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-green-700">Correct! The word was: <strong>{targetWord.word}</strong></p>
          <p className="text-sm italic text-gray-700 max-w-md mx-auto">{targetWord.definition}</p>
          <button
            onClick={resetGame}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
          >
            Play Again
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
