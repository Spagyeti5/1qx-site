import { Link } from 'react-router-dom';

export default function TrueOrFalse() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">True or False</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Can you separate fact from fiction? This section is filled with quick-fire statements where you'll have to decide whether they’re true or completely made up.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link to="/true-or-false/science" className="text-orange-600 hover:underline">
            Science True or False Quiz
          </Link>
        </li>
        <li>
          <Link to="/true-or-false/politics" className="text-orange-600 hover:underline">
            Weird Political Facts
          </Link>
        </li>
      </ul>
    </div>
  );
}

