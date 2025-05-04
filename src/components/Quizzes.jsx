import { Link } from 'react-router-dom';

export default function Quizzes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
      <p className="text-gray-700 mb-6">
        A collection of fun, challenging, and sometimes snarky quizzes to test your knowledge on history, inventions, and more.
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li>
          <Link to="/guess-the-invention-year" className="text-orange-600 hover:underline">
            Guess the Invention Year Quiz
          </Link>
        </li>
        <li>
          <Link to="/uk-history-quiz" className="text-orange-600 hover:underline">
            How well do you know UK history?
          </Link>
        </li>
        <li>
          <Link to="/us-history-quiz" className="text-orange-600 hover:underline">
            How well do you know US history?
          </Link>
        </li>
        <li>
          <Link to="/maths" className="text-orange-600 hover:underline">
            Get better at equations?
          </Link>
        </li>
      </ul>
    </div>
  );
}


