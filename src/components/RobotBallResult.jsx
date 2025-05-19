import React from 'react';
import { endImages } from '../data/robotBallSnark';
import { Link } from 'react-router-dom';

export default function RobotBallResult({ score, onRestart }) {
  const img = endImages[Math.floor(Math.random() * endImages.length)];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl flex flex-col items-center">
        <img src={img} alt="" className="w-48 h-48 mb-8" />
        <h2 className="text-3xl font-bold mb-2">Game Over!</h2>
        <p className="text-xl mb-6">Your final score: <b>{score}</b></p>
        <button
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg"
          onClick={onRestart}
        >
          Play Again
        </button>
      </div>
      {/* --- SHARE BUTTON --- */}
      <button
        onClick={() => navigator.share?.({
          title: 'A Robot Stole My Ball!',
          text: `Try this puzzle on 1qx! My score: ${score}`,
          url: window.location.href,
        })}
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-4"
      >
        Share
      </button>
      <div className="text-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity mx-auto" />
        </Link>
      </div>
    </div>
  );
}


