import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Puzzles() {
useEffect(() => {
  document.title = 'Puzzles - 1qx.com';
}, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Puzzles</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Put your problem-solving skills to the test with our collection of visual, word, and logic puzzles. From rebuses to lateral thinking, this section is for those who love a mental workout.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link to="/rebus" className="text-orange-600 hover:underline">
            Rebus Challenge - What is the phrase hidden in the image?
          </Link>
        </li>
        <li>
          <Link to="/pirate-memory-game" className="text-orange-600 hover:underline">
            Pirate Memory Game - Match the pairs and find the hidden treasure!
          </Link>
        </li>
      </ul>
    </div>
  );
}


