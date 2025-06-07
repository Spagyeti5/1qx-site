import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WordGames() {
useEffect(() => {
  document.title = 'Word Games - 1qx.com';
}, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Word Games</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Challenge your vocabulary and wit with creative word-based games. From playful guessing to language twists, these games are perfect for lovers of clever words and cunning clues.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link to="/games/insultle" className="text-orange-600 hover:underline">
            Insultle - Guess the archaic insults
          </Link>
        </li>
      </ul>
    </div>
  );
}

