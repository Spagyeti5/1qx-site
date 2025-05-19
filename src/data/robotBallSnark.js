// /src/data/robotBallSnark.js

export const imagePools = {
  nothing: [
    '/robotimages/mocking-nothing1.webp',
    '/robotimages/mocking-nothing2.webp'
  ],
  blue: [
    '/robotimages/grumpy-blue1.webp',
    '/robotimages/grumpy-blue2.webp',
    '/robotimages/angry-blue1.webp'
  ],
  red: [
    '/robotimages/grumpy-red1.webp',
    '/robotimages/grumpy-red2.webp',
    '/robotimages/angry-red1.webp'
  ],
  orange: [
    '/robotimages/grumpy-orange1.webp',
    '/robotimages/grumpy-orange2.webp',
    '/robotimages/angry-orange1.webp'
  ]
};

export const endImages = [
  '/robotimages/end1.webp',
  '/robotimages/end2.webp'
];

// Comments when player gets their chosen ball
export const snarkyComments = {
  blue: [
    "You grabbed the blue ball. The robots glare.",
    "Risky move! Enjoy your blue ball - this time.",
    "Against the odds, you got blue. Well played.",
    "You actually got the blue? Someone's living dangerously!",
    "Blue in hand! You must have been near the front of the queue.",
    "Nice! Blue balls are the rarest prize."
  ],
  red: [
    "You played it safe with red. The robots yawn.",
    "Red ball for you! Don’t get complacent.",
    "Red works! The robots barely noticed.",
    "Sticking to red, eh? Sometimes boring pays off.",
    "Red - safe, sensible, reliable. You do you.",
    "You went for red and it paid off. Solid."
  ],
  orange: [
    "The orange ball! Unbelievable!",
    "Jackpot! You got the orange ball.",
    "Robots are stunned as you grab the orange ball.",
    "Orange ball victory! That's a huge win.",
    "The rarest catch: orange. Well played!",
    "Robots will talk about this for seconds."
  ],
  nothing: [
    "No ball for you! The robots scooped them all up.",
    "You waited... but the robots don’t wait for anyone.",
    "Out of balls, out of luck. Try again next round!",
    "Queue position fail. Maybe try bribing a robot?",
    "Robots: 1, Player: 0. Better luck next round.",
    "You got nothing! Not even a participation award."
  ]
};

// Comments for when the player *didn't get their chosen ball* but got a different one
export const settleComments = [
  (choice, got) => `You aimed for ${choice}, but only ${got} was left. Sometimes you have to settle.`,
  (choice, got) => `No ${choice} for you! Here, have a ${got} instead.`,
  (choice, got) => `Wanted ${choice}, got ${got}. Robots show no mercy.`,
  (choice, got) => `You reached for ${choice} but the robots were faster. Enjoy your ${got}!`,
  (choice, got) => `You dreamed of ${choice}, but it's a ${got} kind of day.`,
  (choice, got) => `You went for ${choice}, but had to settle for ${got}. That's how the ball bounces.`
];

export const sillyFacts = [
  "42% of our robots also chose Pepsi.",
  "13% of robots can't do the Macarena.",
  "Robots are immune to dad jokes.",
  "99% of robots think they're smarter than you.",
  "Only 3 robots out of 100 like pineapple on pizza.",
  "Robots don't blink. Ever.",
  "0% of robots have been to Paris. Some have seen it online.",
  "Robots are still confused by daylight savings time.",
  "Robots have no idea where socks go in the wash.",
  "Most robots think balls are overrated."
];

export const chooseImages = [
  '/robotimages/pickone.webp',
  '/robotimages/decide.webp'
];

