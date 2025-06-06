import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-orange-400 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="1qx logo" className="h-16 scale-150 transform origin-left" />
        </Link>
        <div className="space-x-4 text-sm sm:text-base">
          <Link to="/daily" className="hover:underline">Daily Challenge</Link>
          <Link to="/quizzes" className="hover:underline">Quizzes</Link>
          <Link to="/puzzles" className="hover:underline">Puzzles</Link>
          <Link to="/word-games" className="hover:underline">Word Games</Link>
          <Link to="/true-or-false" className="hover:underline">True or False</Link>
          <Link to="/learn" className="hover:underline">Learn</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}



