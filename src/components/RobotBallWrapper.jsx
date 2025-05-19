import React, { useState } from 'react';
import RobotBallGame from './RobotBallGame';
import RobotBallResult from './RobotBallResult';

export default function RobotBallWrapper() {
  const [finalScore, setFinalScore] = useState(null);

  // If game is over, show result, otherwise show game.
  return finalScore === null ? (
    <RobotBallGame onEnd={score => setFinalScore(score)} />
  ) : (
    <RobotBallResult
      score={finalScore}
      onRestart={() => setFinalScore(null)}
    />
  );
}
