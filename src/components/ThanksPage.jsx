export default function ThanksPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 p-6">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Thanks for your message!</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        We've received your message and will get back to you as soon as possible. In the meantime, feel free to explore more puzzles and quizzes.
      </p>
      <a href="/" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg text-xl">
        Return Home
      </a>
      <div className="text-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity mx-auto" />
        </Link>
      </div>
    </div>
  );
}
