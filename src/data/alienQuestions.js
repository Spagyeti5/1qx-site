const alienQuestions = [

  {
    type: "logic",
    difficulty: "medium",
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
    difficulty: "medium",
    question: "Tall athletes are 3 times more likely to win than short athletes. If 60 medals are won, how many by short athletes?",
    answer: 15,
    explanation: "Ratio is 1 short : 3 tall → total parts = 4. 1/4 of 60 = 15."
  },
  {
    type: "logic",
    difficulty: "easy",
    question: "You see 10 birds on a wire. You scare one and it flies away. How many are left?",
    answer: ["0", "none", "zero"],
    explanation: "If you scare one, the rest will likely fly away too."
  },
  {
    type: "logic",
    difficulty: "medium",
    question: "A bat and a ball cost £1.10 in total. The bat costs £1 more than the ball. How much does the ball cost?",
    answer: ["0.05", "5p", "0.05p", "5 pence", "£0.05", "£0.05p"],
    explanation: "£0.05 for the ball, £1.05 for the bat. Total = £1.10.",
    prefix: "£"
  },
  {
    type: "numerical",
    difficulty: "hard",
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
    difficulty: "hard",
    question: "John drinks a barrel of water in 6 days, Mary in 12. How long to drink it together?",
    answer: 4,
    explanation: "1/6 + 1/12 = 1/4 per day. So it takes 4 days together."
  },
  {
    type: "numerical",
    difficulty: "diabolical",
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
  },
{
  type: "logic",
  difficulty: "easy",
  question: "You walk into a room with a match, a candle, a lamp, and a fireplace. Which do you light first?",
  answer: "match",
  explanation: "You need to light the match before you can light anything else."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 25% of 200?",
  answer: 50,
  explanation: "25% of 200 is 200 × 0.25 = 50."
},
{
  type: "logic",
  difficulty: "easy",
  question: "A farmer has 10 sheep. All but 7 run away. How many are left?",
  answer: 7,
  explanation: "All but 7 ran away, so 7 sheep are left."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "How many sides does a triangle have?",
  answer: 3,
  explanation: "A triangle has 3 sides by definition."
},
{
  type: "logic",
  difficulty: "easy",
  question: "If you divide 30 by 1/2 and add 10, what do you get?",
  answer: 70,
  explanation: "30 ÷ 0.5 = 60; 60 + 10 = 70."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 12 + 4 ÷ 2?",
  answer: 14,
  explanation: "Follow order of operations: 4 ÷ 2 = 2, then 12 + 2 = 14."
},
{
  type: "logic",
  difficulty: "easy",
  question: "Some months have 31 days. How many have 28 days?",
  answer: 12,
  explanation: "All 12 months have at least 28 days."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "A toy costs £15. You pay with a £20 note. How much change do you get?",
  answer: 5,
  explanation: "20 - 15 = 5.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "easy",
  question: "What comes next in the sequence: 2, 4, 6, 8, ?",
  answer: 10,
  explanation: "The pattern increases by 2 each time: 2, 4, 6, 8, 10."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is half of 100?",
  answer: 50,
  explanation: "Half of 100 is 50."
},
{
  type: "logic",
  difficulty: "easy",
  question: "A red house is made of red bricks. A blue house is made of blue bricks. What is a greenhouse made of?",
  answer: "glass",
  explanation: "A greenhouse is made of glass, not green bricks."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 9 × 1?",
  answer: 9,
  explanation: "Anything multiplied by 1 stays the same: 9 × 1 = 9."
},
{
  type: "logic",
  difficulty: "easy",
  question: "How many legs do three dogs have?",
  answer: 12,
  explanation: "Each dog has 4 legs. 3 × 4 = 12."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "You have £100, spend £30, then £20. How much do you have left?",
  answer: 50,
  explanation: "100 - 30 - 20 = 50.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "easy",
  question: "Which number is the odd one out: 2, 4, 6, 7, 8?",
  answer: 7,
  explanation: "All numbers are even except 7, which is odd."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 100 - 25?",
  answer: 75,
  explanation: "100 minus 25 equals 75."
},
{
  type: "logic",
  difficulty: "easy",
  question: "If a plane crashes on the border between England and Scotland, where do they bury the survivors?",
  answer: "nowhere",
  explanation: "You don't bury survivors."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is the square root of 81?",
  answer: 9,
  explanation: "9 × 9 = 81, so the square root of 81 is 9."
},
{
  type: "logic",
  difficulty: "easy",
  question: "Which weighs more: a kilogram of feathers or a kilogram of bricks?",
  answer: "same",
  explanation: "They both weigh one kilogram, so they are the same."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 10% of 300?",
  answer: 30,
  explanation: "10% of 300 = 300 × 0.10 = 30."
},
{
  type: "logic",
  difficulty: "easy",
  question: "What colour is an orange?",
  answer: "orange",
  explanation: "The fruit is named after its colour: orange."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 8 + 6 ÷ 2?",
  answer: 11,
  explanation: "Follow order of operations: 6 ÷ 2 = 3, then 8 + 3 = 11."
},
{
  type: "logic",
  difficulty: "easy",
  question: "If you have one, you want to share it. Once you share it, you don't have it. What is it?",
  answer: "secret",
  explanation: "A secret stops being a secret once it’s shared."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "You buy a sandwich for £3.50 and a drink for £1.50. How much is the total?",
  answer: 5,
  explanation: "£3.50 + £1.50 = £5.00.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "easy",
  question: "Before Mt. Everest was discovered, what was the tallest mountain?",
  answer: "everest",
  explanation: "Mt. Everest was still the tallest even before it was discovered."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "If you double 12, what do you get?",
  answer: 24,
  explanation: "12 × 2 = 24."
},
{
  type: "logic",
  difficulty: "easy",
  question: "What has hands but can't clap?",
  answer: "clock",
  explanation: "A clock has hands but can’t clap."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "How many 5p coins are there in £1?",
  answer: 20,
  explanation: "100p ÷ 5p = 20 coins."
},
{
  type: "logic",
  difficulty: "easy",
  question: "If an electric train is moving north at 100mph and the wind is blowing west at 50mph, which way does the smoke blow?",
  answer: ["nowhere", "there isn't any", "there isn't any smoke", "electric trains don't produce smoke", "no smoke", "there is not any", "there is not any smoke", "no smoke from an electric train"],
  explanation: "Electric trains don’t produce smoke unless something has gone very wrong."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 5 × 5?",
  answer: 25,
  explanation: "5 × 5 = 25."
},
{
  type: "logic",
  difficulty: "easy",
  question: "What can travel around the world while staying in the same corner?",
  answer: "stamp",
  explanation: "A stamp stays in the corner of a letter while it travels."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "How many hours are there in 2 days?",
  answer: 48,
  explanation: "24 hours × 2 = 48 hours."
},
{
  type: "logic",
  difficulty: "easy",
  question: "You can catch me but not throw me. What am I?",
  answer: "cold",
  explanation: "You can catch a cold, but not throw it."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "If you have £10 and spend £4.25, how much is left?",
  answer: 5.75,
  explanation: "£10 - £4.25 = £5.75.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "easy",
  question: "Which number is larger: 1/2 or 1/3?",
  answer: ["1/2", "half"],
  explanation: "1/2 is greater than 1/3."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "What is 6 squared?",
  answer: 36,
  explanation: "6 × 6 = 36."
},
{
  type: "logic",
  difficulty: "easy",
  question: "What gets wetter the more it dries?",
  answer: "towel",
  explanation: "A towel dries things and gets wet itself."
},
{
  type: "numerical",
  difficulty: "easy",
  question: "How many tens are there in 100?",
  answer: 10,
  explanation: "100 ÷ 10 = 10."
},
{
  type: "logic",
  difficulty: "hard",
  question: "I am a three-digit number. My tens digit is five more than my ones digit. My hundreds digit is eight less than my tens digit. What number am I?",
  answer: 194,
  explanation: "Tens digit is 9, ones is 4, hundreds is 1. So the number is 194."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a shirt costs £20 and is on sale for 25% off, what is the sale price?",
  answer: 15,
  explanation: "25% of £20 is £5. £20 - £5 = £15.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "What is the next number in the sequence: 1, 4, 9, 16, 25, ?",
  answer: 36,
  explanation: "These are square numbers: 1², 2², 3²... next is 6² = 36."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "How many minutes are there in 2.5 hours?",
  answer: [150, "150 minutes", "150 mins"],
  explanation: "2.5 hours = 2 × 60 + 30 = 150 minutes."
},
{
  type: "logic",
  difficulty: "medium",
  question: "I am a number. Multiply me by 4 and subtract 6. The result is 18. What number am I?",
  answer: 6,
  explanation: "4x - 6 = 18 → x = 6."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "What is 15% of 120?",
  answer: 18,
  explanation: "15% × 120 = 0.15 × 120 = 18."
},
{
  type: "logic",
  difficulty: "medium",
  question: "A man has 53 socks in his drawer: 21 identical blue, 15 identical black, and 17 identical red. The lights are out and he is completely in the dark. How many socks must he take out to ensure he has at least one matching pair?",
  answer: 4,
  explanation: "In the worst case, he could pick one of each colour. The fourth sock must match one."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If 5 machines take 5 minutes to make 5 widgets, how long would 100 machines take to make 100 widgets?",
  answer: ["5", "5 minutes", "five", "five minutes", "5 mins", "5 min", "5m"],
  explanation: "Each machine takes 5 minutes per widget. 100 machines still take 5 minutes to make 100 widgets in parallel."
},
{
  type: "logic",
  difficulty: "medium",
  question: "A family has two children. One is a boy. What is the probability the other is also a boy?",
  answer: "1/3",
  explanation: "Possible combinations: BB, BG, GB. Only 1 of 3 has both boys. So, probability = 1/3."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a car travels 60 miles in 1.5 hours, what is its average speed in mph?",
  answer: ["40", "40 mph", "40mph"],
  explanation: "Speed = distance ÷ time = 60 ÷ 1.5 = 40 mph."
},
{
  type: "logic",
  difficulty: "medium",
  question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
  answer: ["echo", "an echo"],
  explanation: "An echo is sound that reflects, has no body or mouth, and depends on the environment."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a rectangle has a length of 10 and a width of 5, what is its area?",
  answer: 50,
  explanation: "Area of a rectangle is length × width = 10 × 5 = 50."
},
{
  type: "logic",
  difficulty: "medium",
  question: "You see a boat filled with people. It hasn’t sunk, but when you look again you don’t see a single person. Why?",
  answer: ["they're all married", "they are all married", "they are married", "all married", "married people", "just married couples", "married couples", "all married couples", "only married couples", "only married people", "all couples", "only couples", "just couples"],
  explanation: "Not a 'single' person means all are married."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a book costs £1.50 and a pen costs £2.20, what is the total?",
  answer: [3.7, "3.70"],
  explanation: "£1.50 + £2.20 = £3.70.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "A girl has as many brothers as sisters, but each brother has only half as many brothers as sisters. How many brothers and sisters are there?",
  answer: ["4 sisters and 3 brothers", "4 sisters, 3 brothers", "4 sisters 3 brothers", "3 brothers and 4 sisters", "3 brothers, 4 sisters", "3 brothers 4 sisters"],
  explanation: "From one sister’s view: 3 sisters, 3 brothers. From one brother’s view: 4 sisters, 2 brothers. So, there are 3 brothers and 4 sisters overall."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a car uses 8 litres of fuel for 100km, how many litres does it use for 250km?",
  answer: [20, "20 litres"],
  explanation: "8 × 2.5 = 20 litres."
},
{
  type: "logic",
  difficulty: "medium",
  question: "Which word is always spelt incorrectly in every dictionary?",
  answer: "incorrectly",
  explanation: "It’s a trick question. 'Incorrectly' is spelt 'incorrectly'."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "What is the median of the numbers 5, 8, 12, 15, 20?",
  answer: 12,
  explanation: "Median is the middle value in an ordered list. Here, it's 12."
},
{
  type: "logic",
  difficulty: "medium",
  question: "You throw a red stone into the blue sea. What does it become?",
  answer: "wet",
  explanation: "Simple logic - it becomes wet."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "What number comes next: 2, 6, 12, 20, ?",
  answer: 30,
  explanation: "Pattern: add 4, 6, 8... so next is 20 + 10 = 30."
},
{
  type: "logic",
  difficulty: "medium",
  question: "What gets broken without being held?",
  answer: ["promise", "a promise"],
  explanation: "A promise is something you can break without physically holding it."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If a loaf of bread costs £1.20 and you buy 3, how much do you spend?",
  answer: [3.6, "3.60"],
  explanation: "£1.20 × 3 = £3.60.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "Forward I am heavy, but backward I am not. What am I?",
  answer: "ton",
  explanation: "'Ton' backward is 'not'."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "A train travels 180 miles in 3 hours. What is its average speed?",
  answer: [60, "60mph", "60 mph"],
  explanation: "Speed = distance ÷ time = 180 ÷ 3 = 60 mph."
},
{
  type: "logic",
  difficulty: "medium",
  question: "Which comes once in a minute, twice in a moment, but never in a thousand years?",
  answer: "m",
  explanation: "The letter 'm' fits this pattern."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "What is 20% of 250?",
  answer: 50,
  explanation: "250 × 0.20 = 50."
},
{
  type: "logic",
  difficulty: "medium",
  question: "What belongs to you, but other people use it more than you do?",
  answer: ["your name", "my name"],
  explanation: "Others use your name more often when speaking to or about you."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "You spend £5 on lunch every weekday. How much do you spend in 4 weeks?",
  answer: 100,
  explanation: "£5 × 5 days × 4 weeks = £100.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "Which two numbers come next in this pattern: 1, 1, 2, 3, 5, 8, ?",
  answer: ["13 and 21", "13, 21", "13 21"],
  explanation: "This is the Fibonacci sequence: 8 + 5 = 13, then 13 + 8 = 21."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "A pizza is divided into 8 slices. If you eat 3 slices, what fraction is left?",
  answer: "5/8",
  explanation: "8 - 3 = 5 slices remaining. 5 out of 8 = 5/8."
},
{
  type: "logic",
  difficulty: "medium",
  question: "If two's company and three's a crowd, what are four and five?",
  answer: ["nine", "9"],
  explanation: "It's a wordplay. 4 + 5 = 9."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "A shop offers 3 for £1.50. How much do 6 items cost?",
  answer: [3, "3.00"],
  explanation: "Each group of 3 costs £1.50. Two groups = £3.00.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "You see me once in June, twice in November, but not at all in May. What am I?",
  answer: "e",
  explanation: "The letter 'e' appears once in 'June', twice in 'November', and not in 'May'."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "How many prime numbers are there between 10 and 20?",
  answer: 4,
  explanation: "The primes are 11, 13, 17, and 19."
},
{
  type: "logic",
  difficulty: "medium",
  question: "A man pushes his car to a hotel and tells the owner he’s bankrupt. What is he doing?",
  answer: ["playing monopoly", "monopoly"],
  explanation: "It's a reference to the board game Monopoly."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If 6 pencils cost £1.20, what’s the cost per pencil?",
  answer: [0.2, "0.20", "20p"],
  explanation: "£1.20 ÷ 6 = £0.20 per pencil.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "What can fill a room but takes up no space?",
  answer: "light",
  explanation: "Light can fill a space but has no mass or volume."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "You are charged £2.40 for 3 items. How much does 1 item cost?",
  answer: [0.8, "0.80", "80p"],
  explanation: "£2.40 ÷ 3 = £0.80 per item.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "What comes once in a year, twice in a week, but never in a day?",
  answer: "e",
  explanation: "The letter 'e'."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "If 3x + 4 = 19, what is x?",
  answer: 5,
  explanation: "3x + 4 = 19 → 3x = 15 → x = 5."
},
{
  type: "logic",
  difficulty: "hard",
  question: "A clock chimes once at 1 o’clock, twice at 2 o’clock, and so on up to 12 o’clock. How many chimes in total?",
  answer: 78,
  explanation: "Sum of 1+2+3+...+12 = (12×13)/2 = 78."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "What is the smallest number divisible by 3, 4, 5, and 6?",
  answer: 60,
  explanation: "LCM of 3, 4, 5, and 6 is 60."
},
{
  type: "logic",
  difficulty: "hard",
  question: "I have keys but no locks. I have space but no room. You can enter but not go outside. What am I?",
  answer: "keyboard",
  explanation: "A riddle. A keyboard fits the description metaphorically."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "What is the next number in the sequence: 2, 3, 5, 9, 17, ?",
  answer: 33,
  explanation: "Each term is previous × 2 - 1: 17×2 -1 = 33."
},
{
  type: "logic",
  difficulty: "hard",
  question: "Five people are sitting in a row. Tom is to the right of John but to the left of Sam. Who is in the middle if Anna is at one end and Mary at the other?",
  answer: "Tom",
  explanation: "Arranged as: Anna, John, Tom, Sam, Mary. Tom is in the middle."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "You invest £1000 at 5% compound interest per year. How much after 3 years?",
  answer: ["1157.63", "1158"],
  explanation: "1000×1.05^3 = 1157.63 (rounded to 2 decimal places).",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "hard",
  question: "A rope is 60cm long. It is cut into halves, and one half is cut into quarters. How many pieces are there?",
  answer: 5,
  explanation: "Two halves. One half becomes four quarters. Total = 1 + 4 = 5 pieces."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A baker has 240 muffins. He packs them in boxes of 12 and sells each box for £5. How much does he earn?",
  answer: 100,
  explanation: "240 ÷ 12 = 20 boxes × £5 = £100.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "hard",
  question: "Three people check into a hotel room costing £30. They each pay £10. Later the hotel realises the room is only £25 and sends £5 back. The bellboy keeps £2 and gives £1 back to each guest. Each paid £9, totalling £27. Where’s the missing pound?",
  answer: ["there is no missing pound", "nothing is missing", "nowhere", "it isn't missing"],
  explanation: "It's a trick of wording. £27 = £25 (room) + £2 (bellboy)."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "If 2 pencils and 3 rubbers cost £1.20, and 4 pencils and 6 rubbers cost £2.40, how much is one pencil?",
  answer: [0.20, "20p"],
  explanation: "Let’s call the cost of a pencil p and a rubber r.\nThe question gives two equations:\n2p + 3r = £1.20\n4p + 6r = £2.40\n\nThe second equation is just double the first one, so we can’t solve for both values. But the question only asks for the price of one pencil.\n\nTry p = 20p:\n2 × £0.20 = £0.40\nThen 1.20 - 0.40 = £0.80 → That would be the cost of 3 rubbers.\n\nIt works! So the price of a pencil is 20p, even if we don’t know exactly how much a rubber costs.",
  prefix: "£"
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A car is sold for £6000 at a 20% loss. What was the original price?",
  answer: 7500,
  explanation: "Let x be the original price. x - 0.20x = 6000 → 0.80x = 6000 → x = 7500.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "medium",
  question: "You’re in a race. You pass the person in second place. What place are you in now?",
  answer: [2, "2nd", "second", "second place", "2nd place"],
  explanation: "If you pass second place, you take their position. You’re now second."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "If x + y = 10 and x² + y² = 58, what is xy?",
  answer: 21,
  explanation: "(x + y)² = x² + 2xy + y² → 100 = 58 + 2xy → xy = 21"
},
{
  type: "logic",
  difficulty: "medium",
  question: "A farmer has 17 sheep. All but 9 run away. How many are left?",
  answer: 9,
  explanation: "All but 9 ran away, so 9 are left."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A recipe uses 2.5 cups of flour for every 4 servings. How many cups for 10 servings?",
  answer: [6.25, "6.25 cups"],
  explanation: "Use a ratio: (2.5 / 4) × 10 = 6.25 cups."
},
{
  type: "logic",
  difficulty: "hard",
  question: "You see two doors: one leads to freedom, the other to death. One guard always lies, the other always tells the truth. You can ask one question to one guard. What do you ask?",
  answer: ["which door would the other guard say leads to death?", "which door would the other guard say", "which door would the other guard say?", "what door would the other guard say", "what door would the other guard say?", "ask what the other guard would say", "ask one guard what would the other say", "ask one guard what would the other guard would say", "ask one guard what the other guard would say"],
  explanation: "Ask: 'Which door would the other guard say leads to death?' Then choose the opposite."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A 20% discount followed by a 20% increase is equal to what net percentage change?",
  answer: [-4, "-4%"],
  explanation: "Start with £100. 20% off = £80. 20% increase = £96. Net change = -4%."
},
{
  type: "logic",
  difficulty: "hard",
  question: "You have 3 boxes: one with apples, one with oranges, and one with both. All labels are wrong. You can pick one fruit from one box. How do you identify all boxes?",
  answer: ["pick from the box labelled both", "pick from the box labeled both", "choose from the box labelled both", "pick the mixed box", "choose the mixed box", "choose from the box labeled both", "pick the box with both", "pick the box with both apples and oranges", "pick the box with both oranges and apples", "choose the mislabelled mixed box", "choose the mislabeled mixed box", "choose both", "choose the both box", "pick from the both box", "pick the both box", "pick both", "choose from the third box", "pick from the third box"], 
  explanation: "Pick from the box labelled 'both'. Whatever you get is what’s inside. Use logic to fix the rest."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "If a number is increased by 20% and then decreased by 20%, what is the result relative to the original?",
  answer: 96,
  explanation: "100 + 20% = 120. Then 20% off 120 = 96. Net = -4%."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "If 3y - 4 = 17, what is y?",
  answer: 7,
  explanation: "3y = 21 → y = 7."
},
{
  type: "logic",
  difficulty: "hard",
  question: "A cube has 6 faces. How many faces can be seen if 4 cubes are stacked vertically?",
  answer: 17,
  explanation: "Each cube has 4 visible sides. 4 cubes × 4 sides = 16. Only the top of the top cube is visible, so 16 + 1 = 17."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A triangle has angles of 35° and 65°. What is the third angle?",
  answer: 80,
  explanation: "Sum of angles in a triangle = 180°. 180 - 35 - 65 = 80°."
},
{
  type: "logic",
  difficulty: "hard",
  question: "What is the value of the Roman numeral XCIV?",
  answer: 94,
  explanation: "X = 10, C = 100, I = 1, V = 5 → XC = 90, IV = 4 → 94."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A £90 item is reduced by 10%, then 10% again. What is the final price?",
  answer: [72.9, "72.90"],
  explanation: "£90 → £81 after first 10%, then £81 - 8.10 = £72.90.",
  prefix: "£"
},
{
  type: "logic",
  difficulty: "hard",
  question: "Which three-digit number equals the sum of the cubes of its digits?",
  answer: 153,
  explanation: "1³ + 5³ + 3³ = 1 + 125 + 27 = 153."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "A runner completes a 400m lap in 80 seconds. What is their average speed in m/s?",
  answer: 5,
  explanation: "Speed = distance ÷ time = 400 ÷ 80 = 5 m/s."
},
{
  type: "logic",
  difficulty: "hard",
  question: "What number is 3 more than one-fifth of 50?",
  answer: 13,
  explanation: "One-fifth of 50 is 10. 10 + 3 = 13."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "How many factors does the number 36 have?",
  answer: 9,
  explanation: "Factors: 1, 2, 3, 4, 6, 9, 12, 18, 36 → Total = 9."
},
{
  type: "logic",
  difficulty: "hard",
  question: "If today is Monday, what day will it be 45 days from now?",
  answer: "wednesday",
  explanation: "45 ÷ 7 = 6 weeks + 3 days → Monday + 3 = Wednesday."
},
{
  type: "logic",
  difficulty: "hard",
  question: "Which number is the only even prime number?",
  answer: 2,
  explanation: "2 is the only even number that is also prime."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "If f(x) = x² - 4x + 4, what is f(3)?",
  answer: 1,
  explanation: "f(3) = 9 - 12 + 4 = 1."
},
{
  type: "logic",
  difficulty: "medium",
  question: "A man has 4 daughters. Each daughter has a brother. How many children does he have?",
  answer: 5,
  explanation: "All daughters share the same one brother. 4 daughters + 1 brother = 5 children."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "If log₁₀(1000) = x, what is x?",
  answer: 3,
  explanation: "10³ = 1000 → log₁₀(1000) = 3."
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which word fits the pattern: b_t, c_t, d_t?",
  answer: "bat",
  explanation: "Only 'bat', 'cat', and 'dat' make real words. The most common and fitting one is 'bat'."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "A train departs at 09:15 and arrives at 13:40. How long was the journey?",
  answer: ["4 hours 25 minutes", "4 hours and 25 minutes", "4 hours, 25 minutes", "4:25"],
  explanation: "13:40 - 09:15 = 4 hours and 25 minutes."
},
{
  type: "logic",
  difficulty: "medium",
  question: "Rearrange the letters 'O E N D' to make a word meaning 'completed'.",
  answer: "done",
  explanation: "Rearranged letters form the word 'done'."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "A square has a perimeter of 36cm. What is the length of one side?",
  answer: 9,
  explanation: "Perimeter = 4 × side → 36 ÷ 4 = 9 cm."
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which letter comes next in the sequence: A, C, F, J, O, ?",
  answer: "U",
  explanation: "Add +2, +3, +4, +5... A (1) → C (3) → F (6) → J (10) → O (15) → U (21)."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the least common multiple (LCM) of 8, 12, and 15?",
  answer: 120,
  explanation: "The smallest number divisible by 8, 12, and 15 is 120."
},
{
  type: "logic",
  difficulty: "hard",
  question: "What single digit is equal to the sum of the digits of its square?",
  answer: 9,
  explanation: "9² = 81 → 8 + 1 = 9."
},
{
  type: "numerical",
  difficulty: "medium",
  question: "What is the cube root of 27²?",
  answer: 9,
  explanation: "27² = 729 → ∛729 = 9."
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which is the only number that is both a square and a cube between 1 and 1000?",
  answer: 64,
  explanation: "64 = 8² and 4³."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "How many trailing zeroes are there in 25 factorial (25!)?",
  answer: 6,
  explanation: "25 ÷ 5 = 5, then 25 ÷ 25 = 1 → 5 + 1 = 6 trailing zeroes."
},
{
  type: "logic",
  difficulty: "hard",
  question: "If ALL BLOOPS are RAZZIES and ALL RAZZIES are LUPPERS, are ALL BLOOPS definitely LUPPERS?",
  answer: "yes",
  explanation: "It's a transitive logic: If A → B and B → C, then A → C."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the smallest positive integer divisible by both 12 and 18?",
  answer: 36,
  explanation: "LCM of 12 and 18 = 36."
},
{
  type: "logic",
  difficulty: "medium",
  question: "In a 31-day month, with Tuesday on the 1st, how many Tuesdays are there in the month?",
  answer: "tuesday",
  explanation: "A 31-day month with a Tuesday on the 1st will have Tuesdays on 1, 8, 15, 22, and 29 → 5 total."
},
{
  type: "numerical",
  difficulty: "hard",
  question: "If 6 people can paint 6 walls in 6 hours, how many walls can 3 people paint in 3 hours?",
  answer: 1.5,
  explanation: "Productivity is 1 wall per person per 6 hours. So 3 people × 3 hours = 1.5 walls."
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "In binary, what is the result of 1101 + 101?",
  answer: "10010",
  explanation: "13 + 5 = 18 → 10010 in binary."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the sum of the interior angles of a decagon?",
  answer: 1440,
  explanation: "(10 - 2) × 180 = 1440°."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "A cylinder has a radius of 3 cm and height of 10 cm. What is its volume in cm³? (Use π ≈ 3.14)",
  answer: [282.6, "282.6 cm³", "282.6cm³"],
  explanation: "Volume = πr²h = 3.14 × 3² × 10 = 282.6 cm³"
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which number comes next in the sequence: 31, 28, 31, 30, 31, 30, ?",
  answer: 31,
  explanation: "It's the number of days in each month from January onward. The next is July: 31."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the sum of the first 20 positive even numbers?",
  answer: 420,
  explanation: "Sum = n(n+1) where n = 20 → 20 × 21 = 420"
},
{
  type: "logic",
  difficulty: "medium",
  question: "A palindrome is a word that reads the same backward. What is the smallest 3-digit palindromic number?",
  answer: 101,
  explanation: "The smallest 3-digit number that is the same forward and backward is 101."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "How many diagonals does a regular octagon have?",
  answer: 20,
  explanation: "n(n−3)/2 → 8×5/2 = 20"
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which number has exactly 3 positive divisors?",
  answer: 4,
  explanation: "Only squares of primes have exactly 3 positive divisors. 4 = 2² → divisors: 1, 2, 4"
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "A right triangle has legs of 9 and 12. What is the hypotenuse?",
  answer: 15,
  explanation: "a² + b² = c² → 81 + 144 = 225 → √225 = 15"
},
{
  type: "logic",
  difficulty: "hard",
  question: "Which five-letter word becomes shorter when you add two letters to it?",
  answer: "short",
  explanation: "The word 'short' becomes 'shorter' when you add 'e' and 'r'."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "How many seconds are there in 12 hours?",
  answer: 43200,
  explanation: "12 × 60 × 60 = 43,200 seconds"
},
{
  type: "logic",
  difficulty: "diabolical",
  question: "Which English word has three consecutive double letters?",
  answer: "bookkeeper",
  explanation: "Double o, double k, double e → 'bookkeeper'"
},
{
  type: "logic",
  difficulty: "hard",
  question: "A man is looking at a photograph. He says, 'Brothers and sisters, I have none, but that man's father is my father's son.' Who is in the photograph?",
  answer: ["his son", "son"],
  explanation: "'My father's son' = himself. So, 'that man's father' is himself → the man is his son."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the 10th prime number?",
  answer: 29,
  explanation: "The first 10 prime numbers are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29."
},
{
  type: "logic",
  difficulty: "hard",
  question: "How many squares are there on a standard chessboard?",
  answer: 64,
  explanation: "There are 64 squares (8×8) on the chessboard."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "If a = 2, b = 3, c = 4, what is the value of a² + b² + c²?",
  answer: 29,
  explanation: "2² + 3² + 4² = 4 + 9 + 16 = 29."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the square root of 2025?",
  answer: 45,
  explanation: "45 × 45 = 2025."
},
{
  type: "logic",
  difficulty: "easy",
  question: "Which is heavier: a kilogram of steel or a kilogram of feathers?",
  answer: ["same", "they are the same", "they're the same", "they are the same weight", "same weight", "they're the same weight"],
  explanation: "They both weigh one kilogram."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "What is the value of 7 factorial (7!)?",
  answer: [5040, "5,040"],
  explanation: "7! = 7×6×5×4×3×2×1 = 5040."
},
{
  type: "logic",
  difficulty: "hard",
  question: "If two typists can type two pages in two minutes, how many typists will it take to type 18 pages in six minutes?",
  answer: 6,
  explanation: "Typing rate = 1 page/minute per typist. To type 18 pages in 6 minutes = 3 pages per minute → needs 6 typists."
},
{
  type: "numerical",
  difficulty: "diabolical",
  question: "A car's value decreases by 20% each year. If it's worth £10,000 now, what will it be worth in two years?",
  answer: [6400, "6,400"],
  explanation: "Year 1: £10,000 × 0.8 = £8000; Year 2: £8000 × 0.8 = £6400.",
  prefix: "£"
}

];

export default alienQuestions;
