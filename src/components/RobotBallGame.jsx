import React, { useState } from 'react';
import {
  imagePools,
  snarkyComments,
  settleComments,
  sillyFacts,
  chooseImages
} from '../data/robotBallSnark';
import { Link } from 'react-router-dom';

const ROUNDS = 10;
const INITIAL_BALLS = { blue: 20, red: 60 };
const ORANGE_BALLS = 5;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getInitialBalls(round) {
  if (round < ROUNDS) return { ...INITIAL_BALLS, orange: 0 };
  return { ...INITIAL_BALLS, orange: ORANGE_BALLS };
}

export default function RobotBallGame({ onEnd }) {
  const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState('');
  const [hintUsed, setHintUsed] = useState(false);
  const [hintMsg, setHintMsg] = useState('');
  const [wager, setWager] = useState(0);
  const [wagerInput, setWagerInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({});
  const [queuePos, setQueuePos] = useState(null);
  const [ballValues, setBallValues] = useState(getRandomBallValues(1));
  const [ballsAvailable, setBallsAvailable] = useState(getInitialBalls(1));
  const [robotStats, setRobotStats] = useState({ blue: 0, red: 0, orange: 0 });
  const [prevRobotStats, setPrevRobotStats] = useState(null);
  const [mathsExplanation, setMathsExplanation] = useState('');
  const [chooseImg, setChooseImg] = useState(getRandomFrom(chooseImages));

  function getRandomBallValues(rnd) {
    let blue = randomInt(5, 12); // Blue generally higher
    let red = randomInt(2, 7);   // Red lower
    while (red === blue) red = randomInt(2, 7);
    let orange = (rnd === ROUNDS) ? blue * 10 : 0; // Orange = 10x blue!
    return { blue, red, orange };
  }

  function getRobotBias() {
    if (round === 1) return { blue: 0.5, red: 0.5, orange: 0 };
    if (round === ROUNDS) {
      return { blue: 0.45, red: 0.45, orange: 0.1 };
    }
    if (score >= round * 4) {
      if (ballValues.blue > ballValues.red) return { blue: 0.6, red: 0.4, orange: 0 };
      if (ballValues.red > ballValues.blue) return { blue: 0.4, red: 0.6, orange: 0 };
    }
    return { blue: 0.5, red: 0.5, orange: 0 };
  }

  function handleChoice(colour) {
    setPlayerChoice(colour);
  }

  function handleHint() {
    let hintMessage = "";
    if (prevRobotStats) {
      // Get predicted robot choice counts for this round
      const bias = getRobotBias();
      let currentExpected = {};
      let robotCount = 99;
      if (round === ROUNDS) {
        currentExpected.blue = Math.round(bias.blue * robotCount);
        currentExpected.red = Math.round(bias.red * robotCount);
        currentExpected.orange = Math.round(bias.orange * robotCount);
      } else {
        currentExpected.blue = Math.round(bias.blue * robotCount);
        currentExpected.red = robotCount - currentExpected.blue;
        currentExpected.orange = 0;
      }
      // Compare to prevRobotStats
      let diffs = {};
      for (let colour of ["blue", "red", "orange"]) {
        const prev = prevRobotStats[colour] || 0;
        const curr = currentExpected[colour] || 0;
        diffs[colour] = curr - prev;
      }
      // Build message
      let messages = [];
      for (let colour of ["blue", "red", "orange"]) {
        if (diffs[colour] > 0) {
          messages.push(`${diffs[colour]} more robots are expected to pick ${colour} than last round`);
        } else if (diffs[colour] < 0) {
          messages.push(`${Math.abs(diffs[colour])} fewer robots are expected to pick ${colour}`);
        }
      }
      if (messages.length === 0) {
        hintMessage = "Robot preferences haven't changed from last round.";
      } else {
        hintMessage = messages.join('. ') + '.';
      }
    } else {
      hintMessage = "This is the first round, so there's no trend yet!";
    }
    setScore(s => s - 1); // hint cost is 1
    setHintUsed(true);
    setHintMsg(`${hintMessage} Fun fact: ${getRandomFrom(sillyFacts)}`);
  }

  function handleWagerInput(e) {
    setWagerInput(e.target.value.replace(/\D/, ''));
  }

  function handleSubmitWager() {
    const w = parseInt(wagerInput, 10) || 0;
    if (w > 0 && w <= score) setWager(w);
  }

  function simulateRobotsAndPlayer() {
    const bias = getRobotBias();
    let robots = [];
    let robotChoiceCounts = { blue: 0, red: 0, orange: 0 };

    // Generate robot picks and count their choices for stats
    for (let i = 0; i < 99; i++) {
      let pick = Math.random();
      let colour;
      if (round === ROUNDS) {
        if (pick < bias.blue) colour = 'blue';
        else if (pick < bias.blue + bias.red) colour = 'red';
        else colour = 'orange';
      } else {
        colour = (pick < bias.blue ? 'blue' : 'red');
      }
      robots.push(colour);
      robotChoiceCounts[colour]++;
    }

    // Player position in the queue
    let pos = randomInt(1, 100);
    setQueuePos(pos);

    // Insert player into queue
    let queue = [...robots];
    queue.splice(pos - 1, 0, 'player');

    let remaining = { ...ballsAvailable };
    let totalBalls = Object.values(remaining).reduce((a, b) => a + b, 0);
    let ballsGiven = 0;
    let playerGot = null;

    // Maths explanation logic
    // Count robots before player that chose the same ball
    const robotsBeforePlayer = queue.slice(0, pos - 1);
    const robotsAheadChoosingSame = robotsBeforePlayer.filter(colour => colour === playerChoice).length;

    // Calculate chance of getting chosen ball (estimate)
    let estimatedChance;
    if (pos <= totalBalls) {
      // How many of the chosen ball left after robots ahead pick (worst-case all robots ahead who picked same colour get theirs)
      let ballsLeft = ballsAvailable[playerChoice] - robotsAheadChoosingSame;
      ballsLeft = Math.max(0, ballsLeft);
      estimatedChance = ballsLeft > 0 ? (ballsLeft / (totalBalls - pos + 1)) : 0;
      estimatedChance = Math.max(0, Math.min(1, estimatedChance));
    } else {
      estimatedChance = 0;
    }

    // Wager payout multipliers
    let wagerMultipliers = {
      red: 1.5,
      blue: 3,
      orange: 5
    };

    // Ball allocation logic
    for (let i = 0; i < queue.length; i++) {
      if (ballsGiven >= totalBalls) {
        if (queue[i] === 'player') playerGot = null;
        continue;
      }
      const pick = queue[i];
      if (pick === 'player') {
        if (remaining[playerChoice] > 0) {
          remaining[playerChoice]--;
          playerGot = playerChoice;
        } else {
          const alt = Object.keys(remaining).find(c => remaining[c] > 0);
          if (alt) {
            remaining[alt]--;
            playerGot = alt;
          }
        }
      } else {
        if (remaining[pick] > 0) {
          remaining[pick]--;
        } else {
          const alt = Object.keys(remaining).find(c => remaining[c] > 0);
          if (alt) {
            remaining[alt]--;
          }
        }
      }
      ballsGiven++;
    }

    setRobotStats(robotChoiceCounts);
    setPrevRobotStats(robotChoiceCounts); // Store this for hint/trend next round

    // Points and wager
    let points = playerGot ? ballValues[playerGot] : 0;
    let wagerResult = 0;
    if (wager && playerGot === playerChoice) {
      wagerResult = Math.round(wager * (wagerMultipliers[playerChoice] - 1));
    } else if (wager) {
      wagerResult = -wager;
    }
    setScore(s => Math.max(0, s + points + wagerResult));

    // Snarky comment selection
    let comment;
    if (!playerGot) {
      comment = getRandomFrom(snarkyComments.nothing);
    } else if (playerChoice !== playerGot) {
      comment = getRandomFrom(settleComments)(playerChoice, playerGot);
    } else {
      comment = getRandomFrom(snarkyComments[playerGot]);
    }

    // Maths explanation box (education)
    let explanation = "";

    if (!playerGot) {
      explanation = `You were at position ${pos} in the queue, but there were only ${totalBalls} balls to go around. 
Robots before you chose: ${robotStats[playerChoice]} wanted ${playerChoice}. 
Since you were after all balls had gone, the probability of getting any ball was effectively 0%.`;
    } else if (playerGot === playerChoice) {
      explanation = `You got your chosen ball (${playerChoice})! There were ${ballsAvailable[playerChoice]} ${playerChoice} balls to start. 
${robotsAheadChoosingSame} robots ahead of you also chose ${playerChoice}.
Estimated chance: (balls left when you picked) ÷ (positions left in the queue) ≈ ${(estimatedChance * 100).toFixed(1)}%. 
${pos <= totalBalls ? "Because your position was within the first " + totalBalls + ", you were guaranteed to get a ball—but the chance it would be your chosen colour depended on robot choices." : ""}`;
      if (wager && wagerResult > 0) {
        explanation += `\nWager maths: You wagered ${wager} points. The multiplier for ${playerChoice} is ${wagerMultipliers[playerChoice]}×, so you gained an extra ${wagerResult} points.`;
      }
    } else {
      explanation = `You wanted a ${playerChoice} ball, but by your turn at position ${pos}, they were gone (robots ahead choosing ${playerChoice}: ${robotsAheadChoosingSame}).
You got a ${playerGot} ball instead. Estimated chance of getting your pick: ${(estimatedChance * 100).toFixed(1)}%.`;
      if (wager) {
        explanation += ` You lost your wager of ${wager} points because you did not get your pick.`;
      }
    }

    setResult({
      got: playerGot,
      points,
      wager: wagerResult,
      img: playerGot ? getRandomFrom(imagePools[playerGot]) : getRandomFrom(imagePools.nothing),
      snark: comment,
    });
    setMathsExplanation(explanation);
    setShowResult(true);
  }

  function nextRound() {
    if (round === ROUNDS) return;
    setRound(r => r + 1);
    setPlayerChoice('');
    setHintUsed(false);
    setHintMsg('');
    setWager(0);
    setWagerInput('');
    setShowResult(false);
    setChooseImg(getRandomFrom(chooseImages));
    const vals = getRandomBallValues(round + 1);
    setBallValues(vals);
    setBallsAvailable(getInitialBalls(round + 1));
    setMathsExplanation('');
  }

  // On first render, ensure a random chooseImg
  React.useEffect(() => {
    setChooseImg(getRandomFrom(chooseImages));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-8 w-full max-w-xl flex flex-col items-center">
        {showResult ? (
          <>
            <img src={result.img} alt="" className="w-40 h-40 mb-4" />
            <div className="text-xl mb-2 font-bold">{result.snark}</div>
            <div className="mb-3">
              <div>Queue position: <b>{queuePos}</b></div>
              <div>You chose: <b>{playerChoice}</b></div>
              <div>You got: <b>{result.got ? result.got : 'Nothing'}</b></div>
              <div>Points this round: <b>{result.points}</b></div>
              {wager !== 0 && <div>Wager result: <b>{result.wager > 0 ? '+' : ''}{result.wager}</b></div>}
            </div>
            <div className="mb-3">
              Robots choosing blue: {robotStats.blue} &bull; red: {robotStats.red}
              {round === ROUNDS && <> &bull; orange: {robotStats.orange}</>}
            </div>
            <div className="mb-4 bg-orange-100 border border-orange-300 rounded-lg px-4 py-3 text-sm text-gray-900 whitespace-pre-line font-mono">
              {mathsExplanation}
            </div>
            <div className="mb-2">Score: <b>{score}</b> &bull; Rounds left: <b>{ROUNDS - round}</b></div>
            {round < ROUNDS ? (
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded mt-6"
                onClick={nextRound}
              >
                Next Round
              </button>
            ) : (
              <button
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded mt-6"
                onClick={() => onEnd(score)}
              >
                Final Results
              </button>
            )}
          </>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Round {round} / {ROUNDS}</h2>
              <div className="flex space-x-4 mb-2">
                <div className="px-4 py-2 bg-blue-200 rounded font-bold">
                  Blue: {ballValues.blue} points
                </div>
                <div className="px-4 py-2 bg-red-200 rounded font-bold">
                  Red: {ballValues.red} points
                </div>
                {round === ROUNDS && (
                  <div className="px-4 py-2 bg-orange-300 rounded font-bold">
                    Orange: {ballValues.orange} points
                  </div>
                )}
              </div>
              <div className="mb-3">
                <span>Score: <b>{score}</b></span> &bull; <span>Rounds left: <b>{ROUNDS - round + 1}</b></span>
              </div>
              {round === ROUNDS && (
                <div className="mb-4 text-orange-700 font-semibold bg-orange-100 rounded-lg px-4 py-2">
                  <span>
                    <b>Special final round!</b> There are now <b>5 orange balls</b> available.
                    <br />
                    Orange balls are worth <b>massive points</b>—but there are even fewer to go around, and robots may target them!
                    <br />
                    Choose wisely. Good luck!
                  </span>
                </div>
              )}
            </div>
            {/* --- Pick Image --- */}
            <img
              src={chooseImg}
              alt="Pick a ball"
              className="w-40 h-40 mb-4 object-contain"
              style={{ maxHeight: '150px' }}
            />
            <div className="mb-4">
              <span className="block mb-2 font-semibold">Choose your ball:</span>
              <button className={`px-4 py-2 mr-2 rounded ${playerChoice === 'blue' ? 'bg-blue-500 text-white' : 'bg-blue-100'}`}
                      onClick={() => handleChoice('blue')}>Blue</button>
              <button className={`px-4 py-2 mr-2 rounded ${playerChoice === 'red' ? 'bg-red-500 text-white' : 'bg-red-100'}`}
                      onClick={() => handleChoice('red')}>Red</button>
              {round === ROUNDS && (
                <button className={`px-4 py-2 rounded ${playerChoice === 'orange' ? 'bg-orange-500 text-white' : 'bg-orange-100'}`}
                        onClick={() => handleChoice('orange')}>Orange</button>
              )}
            </div>
            {round > 1 && score > 0 && (
              <div className="mb-3">
                <span className="block mb-1 font-semibold">Wager? (Optional, max {score}):</span>
                <input
                  type="number"
                  min="0"
                  max={score}
                  value={wagerInput}
                  onChange={handleWagerInput}
                  className="border px-2 py-1 rounded w-20"
                  disabled={wager > 0}
                />
                <button
                  className="ml-2 px-4 py-2 bg-gray-300 rounded"
                  disabled={wager > 0 || !wagerInput || +wagerInput <= 0 || +wagerInput > score}
                  onClick={handleSubmitWager}
                >Set Wager</button>
                {wager > 0 && <span className="ml-2 text-green-700">Wager: {wager}</span>}
              </div>
            )}
            {!hintUsed && score >= 1 && getRobotBias().blue !== getRobotBias().red && (
              <button
                className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded mb-2"
                onClick={handleHint}
              >Use Hint (costs 1 point)</button>
            )}
            {hintUsed && <div className="mb-2 text-orange-700">{hintMsg}</div>}
            <button
              disabled={!playerChoice}
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded mt-4"
              onClick={simulateRobotsAndPlayer}
            >Submit Choice</button>
          </>
        )}
      </div>
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







