// misunderstoodQuestions.js
const misunderstoodQuestions = [
  {
    phrase: "Pyrrhic victory",
    questionImage: "/phraseimages/pyrrhic_question.webp", // Suggestion: A happy winner standing in a field of wreckage or empty-handed.
    question: "What does the phrase 'Pyrrhic victory' mean?",
    answers: [
      "A victory through sheer luck",
      "A victory that leads to a lasting long-term peace",
      "A victory that came at such a great cost it was practically a defeat",
      "Winning through deception against the odds"
    ],
    correctAnswer: "A victory that came at such a great cost it was practically a defeat",
    answerImage: "/phraseimages/pyrrhic_answer.webp", // Suggestion: Ancient battle aftermath, exhausted 'winners', or a portrait of King Pyrrhus.
    explanation: "'Pyrrhic victory' comes from King Pyrrhus of Epirus, who defeated the Romans at Asculum in 279 BC, but with devastating losses. He reportedly said, 'If we are victorious in one more battle with the Romans, we shall be utterly ruined.'",
    date: "279 BC"
  },
  {
    phrase: "Potemkin village",
    questionImage: "/phraseimages/potemkin_question.webp", // Suggestion: Cartoon of a cardboard town, or a person holding up a painted backdrop.
    question: "What is a 'Potemkin village'?",
    answers: [
      "A village destroyed by invaders",
      "A deceptive appearance meant to hide the true situation",
      "A rural Russian village",
      "A military outpost"

    ],
    correctAnswer: "A deceptive appearance meant to hide the true situation",
    answerImage: "/phraseimages/potemkin_answer.webp", // Suggestion: Grigory Potemkin showing Empress Catherine fake facades, or a 'facade' falling over.
    explanation: "In 1787, Russian minister Grigory Potemkin allegedly built fake villages to impress Empress Catherine II during her visit to Crimea, creating the illusion of prosperity.",
    date: "1787"
  },
  {
    phrase: "Gordian knot",
    questionImage: "/phraseimages/gordian_question.webp", // Suggestion: A hopelessly tangled ball of string/rope, or a confused cartoon character.
    question: "What does it mean to 'cut the Gordian knot'?",
    answers: [
      "To solve a complex problem with a bold, decisive action",
      "To fail at an easy task that first appeared difficult",
      "To get hopelessly confused",
      "To tie up loose ends"
    ],
    correctAnswer: "To solve a complex problem with a bold, decisive action",
    answerImage: "/phraseimages/gordian_answer.webp", // Suggestion: Alexander the Great cutting a knot with a sword.
    explanation: "In 333 BC, Alexander the Great solved the unsolvable Gordian knot by cutting through it with his sword, symbolising bold solutions.",
    date: "333 BC"
  },
  {
    phrase: "Catch-22",
    questionImage: "/phraseimages/catch22_question.webp", // Suggestion: Someone at a crossroads, looking confused, or two doors marked 'No Entry' and 'No Exit'.
    question: "What does the phrase 'Catch-22' mean?",
    answers: [
      "A type of military ambush",
      "An easy often overlooked solution",
      "A mutually conflicting no win situation",
      "A type of card game popular with Romans"
    ],
    correctAnswer: "A mutually conflicting no win situation",
    answerImage: "/phraseimages/catch22_answer.webp", // Suggestion: A paradoxical sign or a reference to the novel's military paperwork.
    explanation: "From Joseph Heller's 1961 novel. In WWII, airmen couldn’t be declared insane unless they requested it - but if they requested, they proved they were sane. A perfect no-win situation.",
    date: "1961"
  },
  {
    phrase: "Pot calling the kettle black",
    questionImage: "/phraseimages/potkettle_question.webp", // Suggestion: Two angry kitchen pots arguing, both covered in soot.
    question: "What does 'the pot calling the kettle black' mean?",
    answers: [
      "Making tea the wrong way",
      "Refusing to admit a clear defeat",
      "Being excessively polite to someone undeserving",
      "Accusing someone of a fault you have yourself"
    ],
    correctAnswer: "Accusing someone of a fault you have yourself",
    answerImage: "/phraseimages/potkettle_answer.webp", // Suggestion: Both pot and kettle are dirty, perhaps with labels or speech bubbles.
    explanation: "First appeared in the 1600s. The expression refers to a situation in which somebody comments on or accuses someone else of a fault which they themselves are guilty of.",
    date: "1600s"
  },
  {
    phrase: "Bite the bullet",
    questionImage: "/phraseimages/bullet_question.webp", // Suggestion: Old-timey surgery scene with someone biting a bullet.
    question: "What does 'bite the bullet' mean?",
    answers: [
      "To refuse to surrender in the face of clear defeat",
      "To endure a painful or difficult situation bravely",
      "To act hastily without fear",
      "To say something really shocking"
    ],
    correctAnswer: "To endure a painful or difficult situation bravely",
    answerImage: "/phraseimages/bullet_answer.webp", // Suggestion: Patient biting a bullet during battlefield surgery.
    explanation: "Originating in the 19th century, soldiers would literally bite a bullet during surgery without anaesthesia to endure the pain.",
    date: "1800s"
  },
  {
    phrase: "Jump the shark",
    questionImage: "/phraseimages/shark_question.webp", // Suggestion: A cartoon character literally jumping over a shark (reference to TV trope).
    question: "What does it mean when a show 'jumps the shark'?",
    answers: [
      "It changes the storyline to be more realistic",
      "It wins a major award",
      "It ends abruptly when it still has a large audience",
      "It has passed its peak and resorts to gimmicks to stay interesting"
    ],
    correctAnswer: "It has passed its peak and resorts to gimmicks to stay interesting",
    answerImage: "/phraseimages/shark_answer.webp", // Suggestion: A TV character on waterskis over a shark.
    explanation: "From a 1977 episode of 'Happy Days', where Fonzie jumps over a shark on waterskis. Now used for any show or series in decline.",
    date: "1977"
  },
  {
    phrase: "Quixotic",
    questionImage: "/phraseimages/quixotic_question.webp", // Suggestion: Cartoon of Don Quixote charging a windmill.
    question: "If something is described as 'quixotic', what does it mean?",
    answers: [
      "Unrealistically idealistic and impractical",
      "Very quick and but still efficient",
      "Dangerous and unpredictable to the protagonist",
      "Annoying and overly loud"
    ],
    correctAnswer: "Unrealistically idealistic and impractical",
    answerImage: "/phraseimages/quixotic_answer.webp", // Suggestion: Don Quixote in rusty armour, charging at windmills.
    explanation: "From Cervantes' 'Don Quixote' (1605), whose hero attacked windmills thinking they were giants. 'Quixotic' now means foolishly idealistic.",
    date: "1605"
  },
  {
    phrase: "Throw down the gauntlet",
    questionImage: "/phraseimages/gauntlet_question.webp", // Suggestion: A knight dramatically throwing a metal glove on the ground.
    question: "What does 'throwing down the gauntlet' mean?",
    answers: [
      "Surrendering in a sword fight",
      "Issuing a challenge",
      "Telling a joke",
      "Finishing a task"
    ],
    correctAnswer: "Issuing a challenge",
    answerImage: "/phraseimages/gauntlet_answer.webp", // Suggestion: Two knights, one issuing a challenge, glove on the ground.
    explanation: "In medieval times, throwing down a gauntlet (armoured glove) was a formal way to challenge someone to a duel.",
    date: "Middle Ages"
  },
  {
    phrase: "Schadenfreude",
    questionImage: "/phraseimages/schadenfreude_question.webp", // Suggestion: Cartoon of someone laughing as another slips on a banana peel.
    question: "What is 'schadenfreude'?",
    answers: [
      "Reveling in a complicated problem",
      "A type of German pastry",
      "A sense of déjà vu",
      "Pleasure derived from another's misfortune"
    ],
    correctAnswer: "Pleasure derived from another's misfortune",
    answerImage: "/phraseimages/schadenfreude_answer.webp", // Suggestion: People watching slapstick or someone snickering at a pratfall.
    explanation: "'Schadenfreude' is a German word first used in the 18th century, literally meaning 'harm-joy'.",
    date: "1700s"
  },
{
  phrase: "White elephant",
  questionImage: "/phraseimages/whiteelephant_question.webp", // Suggestion: Cartoon of a literal white elephant in a grand palace.
  question: "What is a 'white elephant'?",
  answers: [
    "An expensive but useless possession",
    "A rare good luck charm",
    "An endangered animal",
    "A secret advantage"
  ],
  correctAnswer: "An expensive but useless possession",
  answerImage: "/phraseimages/whiteelephant_answer.webp", // Suggestion: A king looking upset with a pampered white elephant eating gold.
  explanation: "Origin: In Southeast Asia, rare white elephants were sacred and could not be put to work. Kings would gift them to rivals, knowing the cost of upkeep would ruin them. This tradition goes back centuries."
},
{
  phrase: "Crossing the Rubicon",
  questionImage: "/phraseimages/rubicon_question.webp", // Suggestion: Cartoon of Julius Caesar fording a river labelled 'Rubicon'.
  question: "What does 'crossing the Rubicon' mean?",
  answers: [
    "Escaping from danger",
    "Winning a major and decisive battle",
    "Changing sides in an argument",
    "Making an irreversible decision"
  ],
  correctAnswer: "Making an irreversible decision",
  answerImage: "/phraseimages/rubicon_answer.webp", // Suggestion: Caesar dramatically stepping across a river with his army.
  explanation: "In 49 BC, Julius Caesar crossed the Rubicon River, defying the Roman Senate and starting a civil war. 'Crossing the Rubicon' means passing the point of no return."
},
{
  phrase: "Fiddling while Rome burns",
  questionImage: "/phraseimages/rome_question.webp", // Suggestion: Emperor Nero playing violin obliviously as the city burns in the background.
  question: "What does 'fiddling while Rome burns' mean?",
  answers: [
    "Making things a lot worse in a disaster",
    "Ignoring a crisis while doing something trivial",
    "Playing music to boost morale",
    "Blaming others for a catastrophe"
  ],
  correctAnswer: "Ignoring a crisis while doing something trivial",
  answerImage: "/phraseimages/rome_answer.webp", // Suggestion: Close-up of Nero happily playing music with panicked people behind him.
  explanation: "Legend says Emperor Nero played music while Rome burned in AD 64. The phrase now means to ignore urgent problems and focus on trivialities."
},
{
  phrase: "Sword of Damocles",
  questionImage: "/phraseimages/damocles_question.webp", // Suggestion: Cartoon of a man enjoying a feast, oblivious to a sword dangling over his head by a thread.
  question: "What does 'the sword of Damocles' represent?",
  answers: [
    "A sudden burst of unbelievable luck",
    "A tool of justice",
    "An opportunity for advancement",
    "An ever-present threat or looming danger"
  ],
  correctAnswer: "An ever-present threat or looming danger",
  answerImage: "/phraseimages/damocles_answer.webp", // Suggestion: The sword above Damocles at the banquet, about to fall.
  explanation: "In an ancient Greek tale, Damocles enjoyed royal privilege until he noticed a sword hanging over him by a thread. This symbolised the constant danger that comes with power (4th century BC)."
},
{
  phrase: "Read the riot act",
  questionImage: "/phraseimages/riotact_question.webp", // Suggestion: Policeman or official reading a scroll to a rowdy crowd.
  question: "What does it mean to 'read the riot act'?",
  answers: [
    "To incite a rebellion",
    "To pretend to be angry and disruptive",
    "To sternly warn or reprimand people to stop misbehaving",
    "To pass a harsh law"
  ],
  correctAnswer: "To sternly warn or reprimand people to stop misbehaving",
  answerImage: "/phraseimages/riotact_answer.webp", // Suggestion: Crowd dispersing after hearing the proclamation.
  explanation: "The British 'Riot Act' (1714) required authorities to literally read a proclamation before dispersing an unruly crowd, under threat of punishment. Now means to sternly warn or reprimand to stop misbehaviour."
},
{
  phrase: "Saved by the bell",
  questionImage: "/phraseimages/bell_question.webp", // Suggestion: Cartoon of a boxer slumped in the ring, rescued by the round-ending bell.
  question: "What does 'saved by the bell' mean?",
  answers: [
    "Rescued from trouble at the last possible moment",
    "Winning a contest by a very narrow margin",
    "Receiving unexpected help when you need it most",
    "Running late for an important appointment"
  ],
  correctAnswer: "Rescued from trouble at the last possible moment",
  answerImage: "/phraseimages/bell_answer.webp", // Suggestion: Bell ringing as boxer stands up relieved.
  explanation: "From 19th-century boxing: a fighter who was about to lose could be 'saved by the bell' ending the round (not, as myths say, from being buried alive!)."
},
{
  phrase: "Throw in the towel",
  questionImage: "/phraseimages/towel_question.webp", // Suggestion: Cartoon of a boxer’s coach tossing a towel into a ring.
  question: "What does it mean to 'throw in the towel'?",
  answers: [
    "To start a new challenge",
    "To switch teams",
    "To protest unfairness",
    "To give up or admit defeat"
  ],
  correctAnswer: "To give up or admit defeat",
  answerImage: "/phraseimages/towel_answer.webp", // Suggestion: Boxer looking relieved or disappointed as the towel lands.
  explanation: "In boxing, a coach would throw a towel into the ring to signal surrender for a fighter. The phrase has meant giving up since the early 20th century."
},
{
  phrase: "Let the cat out of the bag",
  questionImage: "/phraseimages/catbag_question.webp", // Suggestion: Surprised shopper with a cat leaping from a bag instead of a piglet.
  question: "What does 'let the cat out of the bag' mean?",
  answers: [
    "To create confusion",
    "To make a hasty decision",
    "To reveal a secret, often by accident",
    "To free someone from a difficult situation"
  ],
  correctAnswer: "To reveal a secret, often by accident",
  answerImage: "/phraseimages/catbag_answer.webp", // Suggestion: Opened bag with a surprised cat and embarrassed seller.
  explanation: "The phrase dates to markets in the 18th century, where a 'pig in a poke' scam was exposed when a bag was opened to reveal a cat instead of a piglet - the secret was out!"
},
{
  phrase: "The writing is on the wall",
  questionImage: "/phraseimages/writingwall_question.webp", // Suggestion: Mysterious glowing letters on a stone wall, with people looking worried.
  question: "If 'the writing is on the wall', what does it suggest?",
  answers: [
    "A message of encouragement from an unexpected source",
    "A declaration of love",
    "An unavoidable disaster or bad outcome is coming",
    "A surprising opportunity in the face of adversity"
  ],
  correctAnswer: "An unavoidable disaster or bad outcome is coming",
  answerImage: "/phraseimages/writingwall_answer.webp", // Suggestion: Scene from the biblical story, king shocked by a ghostly hand writing.
  explanation: "From the Book of Daniel (Old Testament); a mysterious hand wrote a message warning of Babylon’s doom. Now, it means a clear sign of impending failure."
},
{
  phrase: "Flash in the pan",
  questionImage: "/phraseimages/flashpan_question.webp", // Suggestion: Cartoon of an old flintlock gun firing with a big flash, but the bullet failing to launch.
  question: "What is a 'flash in the pan'?",
  answers: [
    "A sudden realisation of things you've done wrong",
    "A brief success that fails to last",
    "An unexpected victory that was undeserved",
    "A dramatic announcement"
  ],
  correctAnswer: "A brief success that fails to last",
  answerImage: "/phraseimages/flashpan_answer.webp", // Suggestion: Pan flashes, but nothing happens, leaving the shooter confused.
  explanation: "From early firearms (17th-18th centuries); sometimes the gunpowder in the firing pan flashed, but the gun didn't fire. The phrase means a short-lived success or event."
},
{
  phrase: "Hobson's choice",
  questionImage: "/phraseimages/hobson_question.webp", // Suggestion: A puzzled customer offered only one item in a shop full of goods.
  question: "What is a 'Hobson's choice'?",
  answers: [
    "An impossible decision between two things",
    "A random selection",
    "A mutually beneficial agreement",
    "A choice where only one option is offered"
  ],
  correctAnswer: "A choice where only one option is offered",
  answerImage: "/phraseimages/hobson_answer.webp", // Suggestion: A shopkeeper saying “Take it or leave it” with just one horse.
  explanation: "Named after Thomas Hobson, a 16th-century Cambridge stable owner who only let customers take the horse nearest the door; 'take it or leave it'."
},
{
  phrase: "Send to Coventry",
  questionImage: "/phraseimages/coventry_question.webp", // Suggestion: Cartoon of a lone figure being ignored by a group, with a signpost to 'Coventry'.
  question: "What does it mean to 'send someone to Coventry'?",
  answers: [
    "To exile someone to a far place",
    "To deliberately ignore or ostracise someone",
    "To offer someone an undeserved new start",
    "To grant a secret promotion"
  ],
  correctAnswer: "To deliberately ignore or ostracise someone",
  answerImage: "/phraseimages/coventry_answer.webp", // Suggestion: Someone alone at a table, others chatting together.
  explanation: "From 17th-century England; soldiers sent to Coventry were shunned by townsfolk, so 'sending to Coventry' means deliberate ostracism."
},
{
  phrase: "A curate's egg",
  questionImage: "/phraseimages/curatesegg_question.webp", // Suggestion: A nervous curate eating an egg labelled ‘good in parts’ with parts clearly bad.
  question: "What does the phrase 'a curate's egg' mean?",
  answers: [
    "Something partly good but overall bad",
    "A religious paradox",
    "When you think you've found a hidden treasure",
    "A unexpected forbidden delight"
  ],
  correctAnswer: "Something partly good but overall bad",
  answerImage: "/phraseimages/curatesegg_answer.webp", // Suggestion: The curate politely smiling, but the egg is mostly rotten.
  explanation: "From an 1895 Punch cartoon; a curate, offered a bad egg, politely says it’s 'good in parts' - now meaning something with some positives but overall negative."
},
{
  phrase: "A busman’s holiday",
  questionImage: "/phraseimages/busman_question.webp", // Suggestion: A bus driver sightseeing by riding another bus on his day off.
  question: "What is a 'busman's holiday'?",
  answers: [
    "A spontaneous adventure that you wouldn't normally do",
    "A trip gone wrong for reasons out of your control",
    "Spending your time off doing something very similar to your work",
    "An unexpected vacation"
  ],
  correctAnswer: "Spending your time off doing something very similar to your work",
  answerImage: "/phraseimages/busman_answer.webp", // Suggestion: Bus driver with camera, riding as a passenger.
  explanation: "From the 1890s; bus drivers were said to spend holidays taking bus rides - so a 'busman’s holiday' means doing your usual work even when off duty."
},
{
  phrase: "To steal someone’s thunder",
  questionImage: "/phraseimages/thunder_question.webp", // Suggestion: Two playwrights, one looking shocked as the other grabs a literal thundercloud.
  question: "What does 'to steal someone’s thunder' mean?",
  answers: [
    "To take credit for someone else's idea or achievement",
    "To intentionally ruin someone's day by telling them things they didn't need to know",
    "To spoil a long-planned surprise",
    "To escape blame and place it on someone else"
  ],
  correctAnswer: "To take credit for someone else's idea or achievement",
  answerImage: "/phraseimages/thunder_answer.webp", // Suggestion: One person basking in applause, the other frustrated.
  explanation: "Dramatist John Dennis invented a thunder sound effect in 1709, only for rivals to use it in their own play. Now, it means taking credit for another’s idea."
},
{
  phrase: "To call a spade a spade",
  questionImage: "/phraseimages/spade_question.webp", // Suggestion: Someone holding a spade, labelled “spade”, while others look shocked by their bluntness.
  question: "What does 'call a spade a spade' mean?",
  answers: [
    "To tell a white lie",
    "To speak plainly and directly, even if it offends",
    "To keep a secret from someone that should be told",
    "To make wild and unwarranted accusations"
  ],
  correctAnswer: "To speak plainly and directly, even if it offends",
  answerImage: "/phraseimages/spade_answer.webp", // Suggestion: Same person bluntly speaking, everyone else surprised.
  explanation: "The phrase is ancient - found in Greek (3rd century BC) and English since the 16th century - meaning to call things as they are, bluntly and honestly."
},
{
  phrase: "To rest on one's laurels",
  questionImage: "/phraseimages/laurels_question.webp", // Suggestion: A runner relaxing with a laurel wreath on, ignoring a race starting behind him.
  question: "What does it mean to 'rest on your laurels'?",
  answers: [
    "To take an unnecessary risk",
    "To win an easy and expected victory",
    "To only rely on good luck",
    "To stop trying after past success"
  ],
  correctAnswer: "To stop trying after past success",
  answerImage: "/phraseimages/laurels_answer.webp", // Suggestion: The runner snoozing while the others take off.
  explanation: "Laurel wreaths were awarded to victors in ancient Greece and Rome. 'Resting on your laurels' means relying on old success instead of striving for more."
},
{
  phrase: "To fly off the handle",
  questionImage: "/phraseimages/handle_question.webp", // Suggestion: Cartoon axe head literally flying off its handle at a startled carpenter.
  question: "What does 'to fly off the handle' mean?",
  answers: [
    "To unexpectedly panic and run away",
    "To lose one's temper suddenly",
    "To make a hasty decision",
    "To make a fool of yourself"
  ],
  correctAnswer: "To lose one's temper suddenly",
  answerImage: "/phraseimages/handle_answer.webp", // Suggestion: Axe head in mid-air, people ducking.
  explanation: "19th-century American slang; axe heads that flew off their handles caused sudden chaos - so the phrase means to lose your temper unexpectedly."
},
{
  phrase: "To ride roughshod over",
  questionImage: "/phraseimages/roughshod_question.webp", // Suggestion: Rider on a powerful horse trampling a path, ignoring others.
  question: "What does it mean to 'ride roughshod over' someone or something?",
  answers: [
    "To conquer your opponent easily",
    "To offer your support someone who doesn't deserve it",
    "To treat others harshly or without consideration",
    "To quickly leave without any warning"
  ],
  correctAnswer: "To treat others harshly or without consideration",
  answerImage: "/phraseimages/roughshod_answer.webp", // Suggestion: Trampled field, ignored by the horseman.
  explanation: "In the 18th century, 'roughshod' horses had protruding nails in their shoes for grip, but could injure people - so 'riding roughshod' means acting with disregard for others."
},
{
  phrase: "To cut the mustard",
  questionImage: "/phraseimages/mustard_question.webp", // Suggestion: Chef slicing a large jar of mustard with a knife, onlookers bemused.
  question: "What does 'to cut the mustard' mean?",
  answers: [
    "To try something impossible",
    "To meet expectations or standards",
    "To be caught cheating in a contest",
    "To cause a mess in the kitchen"
  ],
  correctAnswer: "To meet expectations or standards",
  answerImage: "/phraseimages/mustard_answer.webp", // Suggestion: Chef triumphantly holding a 'perfect' slice of mustard.
  explanation: "First seen in American slang (late 1800s), it means to live up to a required standard. Its exact origin is uncertain, but has nothing to do with slicing condiments."
}
];

export default misunderstoodQuestions;
