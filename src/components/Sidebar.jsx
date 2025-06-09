import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sectionLinks = {
    '/quizzes': [
      { to: '/guess-the-invention-year', label: 'Invention Year Quiz' },
      { to: '/uk-history-quiz', label: 'UK History Quiz' },
      { to: '/us-history-quiz', label: 'US History Quiz' },
      { to: '/maths', label: 'Maths Challenge' },
      { to: '/misunderstood-phrases', label: 'Misunderstood Phrases Quiz' },
    ],
    '/true-or-false': [
      { to: '/true-or-false/science', label: 'True or False: Science' },
      { to: '/true-or-false/politics', label: 'True or False: Politics' },
    ],
    '/games': [
      { to: '/games/insultle', label: 'Insultle' },
    ],
    '/daily': [
      { to: '/daily/one-word-challenge', label: 'One Word Challenge' },
    ],
'/puzzles': [
      { to: '/rebus', label: 'Rebus Puzzle' },
      { to: '/pirate-memory-game', label: 'Pirate Memory Game' },
    ],
    '/learn': [
      { to: '/robot-ball', label: 'A Robot Stole My Ball!' },
      { to: '/maths', label: 'Maths Challenge' },
    ],
    '/word-games': [
      { to: '/games/insultle', label: 'Insultle' },
    ]
  };

  const defaultLinks = [
    { to: '/games/insultle', label: 'Featured Game: Insultle' },
    { to: '/galactic-intelligence-survey/easy', label: 'New: Logical and Numerical Reasoning Questions' },
    { to: '/robot-ball', label: 'New: A Robot Stole My Ball!' },
    { to: '/pirate-memory-game', label: 'Pirate Memory Game' },
    { to: '/misunderstood-phrases', label: 'Misunderstood Phrases Quiz' },
    { to: '/rebus', label: 'Try a Rebus' },
    { to: '/guess-the-invention-year', label: 'When was it invented?' },
    { to: '/true-or-false/science', label: 'Science - True or False' },
    { to: '/true-or-false/politics', label: 'Weird Political Facts' },
    { to: '/us-history-quiz', label: 'How well do you know US history?' },
    { to: '/maths', label: 'Get better at equations!' }
  ];

  const matchingSection = Object.keys(sectionLinks).find(section => location.pathname.startsWith(section));
  const linksToShow = matchingSection ? sectionLinks[matchingSection] : [];

  return (
    <div className="md:w-64 w-full md:block hidden bg-white shadow-md">
      <div className="p-4">
        <button onClick={toggleSidebar} className="md:hidden text-orange-500 font-semibold">
          {isOpen ? 'Close Menu' : 'Menu'}
        </button>
      </div>
      <div className={`p-4 space-y-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
        {linksToShow.length > 0 && (
          <div className="mb-4">
            {linksToShow.map((link, idx) => (
              <Link key={idx} to={link.to} className="block text-orange-600 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        )}
        <div className="text-sm text-gray-500 mt-4 mb-1">More to try</div>
        {defaultLinks.map((link, idx) => (
          <Link key={`default-${idx}`} to={link.to} className="block text-gray-700 hover:text-orange-500">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
