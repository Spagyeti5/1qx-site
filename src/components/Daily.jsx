export default function Daily() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Daily Challenge</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        A new challenge awaits each day, designed to test your recall, logic, or lateral thinking. Come back regularly and see how well you do over time.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a href="/daily/one-word-challenge" className="text-orange-600 hover:underline">
            One Word Challenge Daily
          </a>
        </li>

      </ul>
    </div>
  );
}
