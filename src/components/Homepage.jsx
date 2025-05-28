import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">Welcome to 1qx.com!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/guess-the-invention-year" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          Guess the Invention Year
        </Link>
        <Link to="/uk-history-quiz" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          UK History Quiz
        </Link>
        <Link to="/us-history-quiz" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          US History Quiz
        </Link>
        <Link to="/maths" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          Maths Challenge
        </Link>
        <Link to="/true-or-false/science" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          True or False: Science
        </Link>
        <Link to="/true-or-false/politics" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          True or False: Politics
        </Link>
        <Link to="/daily/one-word-challenge" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          One Word Challenge
        </Link>
        <Link to="/rebus" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          Rebus Puzzle
        </Link>
        <Link to="/games/insultle" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          Insultle Word Game
        </Link>
        <Link to="/pirate-memory-game" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
          Pirate Memory Game
        </Link>
          <Link to="/robot-ball" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
             A Robot Stole My Ball!
        </Link>
	  <Link to="/misunderstood-phrases" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg text-xl text-center">
	    Misunderstood Phrases Quiz
        </Link>
      </div>
      <div className="text-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity mx-auto" />
        </Link>
      </div>
      <footer className="mt-4 text-gray-600 text-sm">© 2025 1qx.com - Play, Learn, Puzzle.</footer>
    </div>
  );
}

export default Homepage;


