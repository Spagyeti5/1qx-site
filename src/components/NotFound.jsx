import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-700 mb-6">The page you were looking for doesn't exist anymore. But there's plenty to explore!</p>
      <Link to="/" className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded">
        Go to Homepage
      </Link>
    </div>
  );
}
