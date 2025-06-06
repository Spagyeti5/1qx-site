const alienQuestions = [
  // --- Logic Questions ---
  {
    type: "logic",
    difficulty: "easy",
    question: "Jerry is 15th from the top and 15th from the bottom in his class. How many students are there?",
    answer: 29,
    explanation: "There are 14 students above and 14 below Jerry. Add Jerry himself = 14 + 1 + 14 = 29."
  },
  {
    type: "logic",
    difficulty: "easy",
    question: "3 elves can wrap 3 toys in 1 hour. How many elves are needed to wrap 6 toys in 2 hours?",
    answer: 3,
    explanation: "1 elf = 1 toy/hour. To do 6 toys in 2 hours, you need 3 elves."
  },
  {
    type: "logic",
    difficulty: "easy",
    question: "Tall athletes are 3 times more likely to win than short athletes. If 60 medals are won, how many by short athletes?",
    answer: 15,
    explanation: "Ratio is 1 short : 3 tall → total parts = 4. 1/4 of 60 = 15."
  },
  {
    type: "logic",
    difficulty: "easy",
    question: "You see 10 birds on a wire. You scare one and it flies away. How many are left?",
    answer: 0,
    explanation: "If you scare one, the rest will likely fly away too."
  },
  {
    type: "logic",
    difficulty: "easy",
    question: "A bat and a ball cost £1.10 in total. The bat costs £1 more than the ball. How much does the ball cost?",
    answer: 0.05,
    explanation: "£0.05 for the ball, £1.05 for the bat. Total = £1.10.",
    prefix: "£"
  },

  // --- Numerical Questions ---
  {
    type: "numerical",
    difficulty: "easy",
    question: "Simon invests £8000. He loses 50%, then gains 75%. What does he have now?",
    answer: 7000,
    explanation: "£8000 → £4000 (after -50%), then +75% = £4000 + £3000 = £7000.",
    prefix: "£"
  },
  {
    type: "numerical",
    difficulty: "easy",
    question: "A man buys a pig for £60, sells it for £70, buys it back for £80, and sells it again for £90. Profit?",
    answer: 20,
    explanation: "+£10 then +£10 = £20 total profit.",
    prefix: "£"
  },
  {
    type: "numerical",
    difficulty: "easy",
    question: "John drinks a barrel of water in 6 days, Mary in 12. How long to drink it together?",
    answer: 4,
    explanation: "1/6 + 1/12 = 1/4 per day. So it takes 4 days together."
  },
  {
    type: "numerical",
    difficulty: "easy",
    question: "A clock shows 3:15. What angle is between the hour and minute hand?",
    answer: 7.5,
    explanation: "Hour hand moves 0.5° per minute. At 3:15, hour hand is at 97.5°, minute at 90°. Difference = 7.5°."
  },
  {
    type: "numerical",
    difficulty: "easy",
    question: "You have 5 apples, you eat 2 and give away 1. How many do you have left?",
    answer: 2,
    explanation: "5 - 2 eaten - 1 given = 2 apples left."
  }
];

export default alienQuestions;
