export default function Learn() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">Learn</h1>
      <p className="text-gray-700 mb-6 max-w-xl">
        Dive deeper into the language, logic, and history with puzzles and games. This section offers background knowledge, learning tools, and surprising facts to sharpen your brainpower.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
         <a href="/maths" className="text-orange-600 hover:underline">
            🧠 Try the Maths Challenge
              </a>
        </li>

      </ul>
    </div>
  );
}

