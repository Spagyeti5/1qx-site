import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import QuizApp from './components/QuizApp';
import RebusPuzzle from './components/RebusPuzzle';
import InsultlePage from './components/InsultlePage';
import OneWordChallenge from './components/OneWordChallenge';
import UKHistoryQuiz from './components/UKHistoryQuiz';
import USHistoryQuiz from './components/USHistoryQuiz';
import MathsQuiz from './components/MathsQuiz';
import ScienceQuiz from './components/ScienceQuiz';
import PoliticalQuiz from './components/PoliticalQuiz';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Quizzes from './components/Quizzes';
import Puzzles from './components/Puzzles';
import WordGames from './components/WordGames';
import TrueFalse from './components/TrueOrFalse';
import Learn from './components/Learn';
import Daily from './components/Daily';
import ThanksPage from './components/ThanksPage';
import PirateMemoryGame from './components/PirateMemoryGame';
import RobotBallIntro from './components/RobotBallIntro';
import RobotBallGame from './components/RobotBallGame';
import RobotBallResult from './components/RobotBallResult';
import RobotBallWrapper from './components/RobotBallWrapper';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/guess-the-invention-year" element={<QuizApp />} />
            <Route path="/uk-history-quiz" element={<UKHistoryQuiz />} />
            <Route path="/us-history-quiz" element={<USHistoryQuiz />} />
            <Route path="/true-or-false/science" element={<ScienceQuiz />} />
            <Route path="/true-or-false/politics" element={<PoliticalQuiz />} />
            <Route path="/maths" element={<MathsQuiz />} />
            <Route path="/rebus" element={<RebusPuzzle />} />
            <Route path="/games/insultle" element={<InsultlePage />} />
            <Route path="/daily/one-word-challenge" element={<OneWordChallenge />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/puzzles" element={<Puzzles />} />
            <Route path="/word-games" element={<WordGames />} />
            <Route path="/true-or-false" element={<TrueFalse />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<ThanksPage />} />
	    <Route path="/pirate-memory-game" element={<PirateMemoryGame />} />
            <Route path="/robot-ball" element={<RobotBallIntro />} />
            <Route path="/robot-ball/game" element={<RobotBallWrapper />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
