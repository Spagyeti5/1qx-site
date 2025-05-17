import React, { useState, useEffect } from "react";

// Placeholders for card symbols (swap these for pirate SVGs later!)
const symbols = [
  "\uD83D\uDCB0", "\uD83E\uDD9C", "\uD83C\uDFDF\uFE0F", "\uD83D\uDEA2", "\uD83E\uDDB4", "\u2693\uFE0F", "\uD83C\uDFDD\uFE0F", "\uD83E\uDD43", "\uD83D\uDDDAt\uFE0F",
  "\uD83E\uDE99", "\uD83E\uDD91", "\uD83D\uDD2B", "\uD83E\uDDEC", "\uD83E\uDD65", "\uD83E\uDDA1", "\uD83C\uDFF4", "\uD83E\uDD86", "\uD83E\uDD9C\u200D\u2642\uFE0F"
];

// Pirate comments
const pirateRightComments = [
  "Aye, a fine match, matey!",
  "Smart as a parrot, aren’t ye?",
  "Well shiver me timbers, ye found it!",
  "You’ve got an eye like a hawk, sailor!",
  "By Blackbeard’s beard, that's correct!"
];

const pirateWrongComments = [
  "Arrr, were ye at the rum again?",
  "Not quite, ye scallywag!",
  "Blimey, that’s not it!",
  "Even a blind pirate’d do better!",
  "No gold for that guess, landlubber!"
];

function getRandomLocation() {
  // Keep treasure well inside the map
  const min = 60, max = 540;
  return {
    x: Math.floor(Math.random() * (max - min)) + min,
    y: Math.floor(Math.random() * (max - min)) + min
  };
}

const treasureRadius = 50;

function shuffle(array) {
  return array
    .concat(array) // duplicate for pairs
    .sort(() => Math.random() - 0.5)
    .map((symbol, i) => ({
      id: i,
      symbol,
      flipped: false,
      matched: false
    }));
}

export default function PirateMemoryGame() {
  // Game phases: memory, treasure, win, lose
  const [gameStage, setGameStage] = useState("memory");
  const [cards, setCards] = useState(() => shuffle(symbols));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [clickLocation, setClickLocation] = useState(null);
  const [boardLocked, setBoardLocked] = useState(false); // NEW LOCK STATE
  const [proximityFeedback, setProximityFeedback] = useState(""); // FOR PROXIMITY
  const [treasureLocation, setTreasureLocation] = useState(getRandomLocation()); // TREASURE IN STATE

  // Reset all state for new game
  function restartGame(wonLastGame = false) {
    setGameStage("memory");
    setCards(shuffle(symbols));
    setFlipped([]);
    setMatched([]);
    setFeedback("");
    setClickLocation(null);
    setBoardLocked(false);
    setProximityFeedback("");
    if (wonLastGame) {
      setTreasureLocation(getRandomLocation());
    }
  }

  // Play pirate sound for matching
  function playPirateSound() {
    const pirateSounds = [
      "/sounds/pirate1.mp3",
      "/sounds/pirate2.wav"
    ];
    const chosen = pirateSounds[Math.floor(Math.random() * pirateSounds.length)];
    const audio = new Audio(chosen);
    audio.play();
  }

  // Play win song
  function playVictorySong() {
    const audio = new Audio("/sounds/DrunkenSailor.wav");
    audio.play();
  }

  // --- Memory Card Logic ---
  function handleFlip(idx) {
    if (
      flipped.length === 2 ||
      cards[idx].flipped ||
      cards[idx].matched ||
      gameStage !== "memory" ||
      boardLocked
    )
      return;

    const newFlipped = [...flipped, idx];
    const newCards = cards.map((card, i) =>
      i === idx ? { ...card, flipped: true } : card
    );
    setCards(newCards);

    if (newFlipped.length === 2) {
      setBoardLocked(true); // LOCK BOARD
      const [i1, i2] = newFlipped;
      setTimeout(() => {
        if (newCards[i1].symbol === newCards[i2].symbol) {
          // Matched!
          const updated = newCards.map((c, i) =>
            i === i1 || i === i2 ? { ...c, matched: true } : c
          );
          setCards(updated);
          setMatched((prev) => [...prev, i1, i2]);
          setFeedback(
            "Correct! " +
              pirateRightComments[
                Math.floor(Math.random() * pirateRightComments.length)
              ]
          );
          playPirateSound();
        } else {
          setCards(
            newCards.map((c, i) =>
              i === i1 || i === i2 ? { ...c, flipped: false } : c
            )
          );
          setFeedback(
            "Wrong! " +
              pirateWrongComments[
                Math.floor(Math.random() * pirateWrongComments.length)
              ]
          );
        }
        setFlipped([]);
        setBoardLocked(false); // UNLOCK BOARD
      }, 850);
    } else {
      setFlipped(newFlipped);
      setFeedback("");
    }
  }

  // When all pairs matched, advance to treasure phase
  useEffect(() => {
    if (matched.length === cards.length && gameStage === "memory") {
      setTimeout(() => {
        setGameStage("treasure");
        setFeedback("");
      }, 700);
    }
    // eslint-disable-next-line
  }, [matched, cards, gameStage]);

  // --- Treasure Map Click ---
  function handleMapClick(e) {
    if (gameStage !== "treasure") return;

    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickLocation({ x, y });

    // Check win/lose
    const dx = x - treasureLocation.x;
    const dy = y - treasureLocation.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance <= treasureRadius) {
      setGameStage("win");
      playVictorySong();
    } else {
      // Set proximity feedback
      let proximity = "";
      if (distance <= 60) proximity = "Red hot! You nearly struck gold!";
      else if (distance <= 150) proximity = "Warm! Not too far, matey.";
      else if (distance <= 250) proximity = "Cool. You’re a fair distance away.";
      else proximity = "Cold! The treasure is well hidden from here.";
      setProximityFeedback(proximity);
      setGameStage("lose");
    }
  }

  // --- Render Functions ---
  const mapUrl = "/pirateimages/map.webp";
  const happyPiratesUrl = "/pirateimages/pirateswin.webp";
  const sadPiratesUrl = "/pirateimages/pirateslose.webp";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">Pirate Memory Game</h2>
        <p className="text-gray-700">Match all the pairs to unlock the treasure map!</p>
      </div>

      {/* --- MEMORY GAME BOARD --- */}
      {gameStage === "memory" && (
        <div className="relative mx-auto mb-8"
          style={{
            width: 600, height: 600,
            backgroundImage: `url(${mapUrl})`,
            backgroundSize: "cover", backgroundPosition: "center",
            borderRadius: 24, boxShadow: "0 6px 24px rgba(0,0,0,0.15)"
          }}>
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-2">
            {cards.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => handleFlip(idx)}
                disabled={card.flipped || card.matched || flipped.length === 2 || boardLocked}
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow text-2xl sm:text-3xl font-bold flex items-center justify-center 
                  ${card.flipped || card.matched
                    ? "bg-white border-4 border-orange-400"
                    : "bg-orange-200 hover:bg-orange-300"}
                `}
                style={{ transition: "background 0.25s, border 0.25s" }}
              >
                {card.flipped || card.matched ? card.symbol : "?"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* --- TREASURE PHASE --- */}
      {gameStage === "treasure" && (
        <div className="flex flex-col items-center">
          <div className="mb-3 text-xl font-bold text-orange-700">
            All pairs matched! Now, find the hidden treasure.<br />
            <span className="text-base font-normal text-gray-700">
              Click anywhere on the map. You only get one chance!
            </span>
          </div>
          <div
            className="relative mx-auto"
            style={{
              width: 600, height: 600,
              backgroundImage: `url(${mapUrl})`,
              backgroundSize: "cover", backgroundPosition: "center",
              borderRadius: 24, boxShadow: "0 6px 24px rgba(0,0,0,0.13)",
              cursor: "crosshair"
            }}
            onClick={handleMapClick}
          >
            {/* Show X where clicked */}
            {clickLocation && (
              <div
                className="absolute"
                style={{
                  left: clickLocation.x - 18,
                  top: clickLocation.y - 18,
                  pointerEvents: "none"
                }}
              >
                <span className="text-3xl text-red-600 select-none font-extrabold">✖</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- WIN/LOSE SCREENS --- */}
      {gameStage === "win" && (
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center fade-in">
          <img src={happyPiratesUrl} alt="Happy Pirates" className="w-96 h-96 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-green-600">Treasure Found!</h2>
          <p className="text-xl mb-4 text-orange-700">Yo-ho-ho! You’ve found the treasure and made the pirates rejoice!</p>
          <button
            onClick={() => restartGame(true)}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mt-2"
          >
            Find New Treasure
          </button>
        </div>
      )}

      {gameStage === "lose" && (
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl text-center fade-in">
          <img src={sadPiratesUrl} alt="Sad Pirates" className="w-96 h-96 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-red-600">No Treasure Here!</h2>
          {proximityFeedback && (
            <div className="text-lg font-semibold text-orange-600 mb-2">{proximityFeedback}</div>
          )}
          <p className="text-lg mb-4 text-orange-700">
            Arrr, you didn’t find the treasure. The pirates are not amused.<br />
            Try again and you might strike gold!
          </p>
          <button
            onClick={() => restartGame(false)}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg mt-2"
          >
            Play Again
          </button>
        </div>
      )}

      {/* --- FEEDBACK (snarky comment or pair match) --- */}
      {gameStage === "memory" && (
        <div className="min-h-12 text-lg text-gray-700 mt-4">{feedback}</div>
      )}

      {/* --- Attribution (logo back to homepage) --- */}
      <div className="mt-4 text-center">
        <a href="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 mx-auto hover:opacity-90 transition-opacity" />
        </a>
      </div>
    </div>
  );
}

