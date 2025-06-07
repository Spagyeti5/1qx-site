import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function RobotBallIntro() {
useEffect(() => {
  document.title = 'A Robot Stole My Ball - Outsmart the robots to win - 1qx.com';
}, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl flex flex-col items-center">
        <img
          src="/robotimages/intro.webp"
          alt="Game Introduction"
          className="w-64 h-64 mb-8 rounded-xl shadow-lg object-cover"
        />
        <h1 className="text-4xl font-extrabold mb-4 text-orange-500 drop-shadow">
          A Robot Stole My Ball!
        </h1>
        <p className="text-lg max-w-lg mb-8 text-gray-700 text-center">
          In each round, pick your preferred ball based on the points on offer. There are 20 blue balls and 60 red balls each round.
          <br /><br />
          But beware: 99 robots are also choosing! And these robots might take the ball you want.
          <br /><br />
          Your position in the queue to pick your preferred ball is random. The earlier you are, the more likely you are to get your chosen ball. Robots might act unpredictably, especially if you’re doing well.
          <br /><br />
          If you’re feeling confident, you can wager some points for a bigger win. Need help? Spend points for a hint about the robots’ behaviour.
          <br /><br />
          Outsmart the robots, collect the best balls, and see how high you can score!
        </p>
        <button
          onClick={() => navigate('/robot-ball/game')}
          className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-lg text-xl transition"
        >
          Start Game
        </button>
      </div>
      {/* --- SHARE BUTTON --- */}
      <button
        onClick={() => navigator.share?.({
          title: 'A Robot Stole My Ball!',
          text: 'Try this puzzle on 1qx!',
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



