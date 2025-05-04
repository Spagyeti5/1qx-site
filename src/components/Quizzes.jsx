export default function Quizzes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Test your knowledge with a growing collection of quirky, challenging, and themed quizzes. Whether you're into historical trivia, obscure laws, or scientific oddities, this section has something to surprise you.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a href="/guess-the-invention-year" className="text-orange-600 hover:underline">
            Guess the Invention Year Quiz
          </a>
        </li>
        <li>
          <a href="/uk-history-quiz" className="text-orange-600 hover:underline">
            UK History Quiz
          </a>
        </li>
        <li>
          <a href="/us-history-quiz" className="text-orange-600 hover:underline">
            U.S. History Quiz
          </a>
        </li>
        <li>
          <a href="/true-or-false/science" className="text-orange-600 hover:underline">
            Science True or False Quiz
          </a>
        </li>
	<li>
          <a href="/true-or-false/politics" className="text-orange-600 hover:underline">
            Weird Political Facts
          </a>
        </li>
      </ul>
    </div>
  );
}

