import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const blogContent = {
"memory-games": {
  title: "Can Memory Games Help Prevent Memory Problems as You Age?",
  date: "8 June 2025",
  content: (
    <>
      <p>
        It’s no secret that ageing can bring about a few forgetful moments. Where are the keys? Why did I walk into this room? It's something we can all suffer from, but when witnessing this happening to a loved one, it can be distressing.
              </p>
      <p>Watching a relative slowly deteriorate, to the point where they can no longer take care of themselves is difficult. So, are there things you can do to slow down these age-related memory issues, or even prevent them from happening in the first place?
      </p>
      <p>You might have heard that <strong>playing memory games might actually help keep your brain sharp</strong> - and even delay memory-related conditions like dementia, but can it really help?
      </p>
      <p>
        There's been plenty of research into how memory games can help and how giving your brain a daily challenge could pay off in the long run. Let's take a look.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">🧠 The Brain is a Muscle (Sort of)</h2>
      <p>
        Your brain thrives on use. Just like physical exercise strengthens your body, <strong>mental workouts keep your cognitive abilities in shape</strong>.
        From matching pirate symbols to solving word puzzles, the goal is the same; <strong>engage your memory, logic, and attention</strong>.
      </p>

      <h2 className="text-xl font-bold mt-6 mb-2">📚 What the Research Says</h2>
      <p>
        Here are four landmark studies that show how memory training can help prevent cognitive decline:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>ACTIVE Study (2002) - Effects of Cognitive Training Interventions With Older Adults: A Randomised Controlled Trial</strong>: Nearly 3,000 adults aged 65 and older were given 10 training sessions in either memory, reasoning, or processing information speed. There were clear improvements in the subjects where training was given, and this lasted for up to 10 years, as shown in follow-up studies.
          <em> (Ball et al., JAMA)</em>
        </li>
        <li>
          <strong>Neurocognitive Scaffolding (2009) - The Adaptive Brain: Aging and Neurocognitive Scaffolding</strong>: This paper introduces the idea that as we age and cognitively decline, we form backup connections. Engaging additional regions of the brain can be created and strengthened through playing memory games and similar activities that reinforce these links.
          <em> (Park & Reuter-Lorenz)</em>
        </li>
        <li>
          <strong>Meta-Analysis (2014) - Computerised Cognitive Training in Cognitively Healthy Older Adults: A Systematic Review and Meta-Analysis</strong>: This research looked at 52 studies where computer-based training improved memory and processing speed, especially when brief and frequent. The findings show that sessions under 30 minutes are better, but they should be frequent and require adaptation.
          <em> (Lampit et al.)</em>
        </li>
        <li>
          <strong>Word Puzzle Use (2019) - Frequency of Word Puzzle Use is Associated With Cognitive Function in a Large Online Sample of Older Adults</strong>: In a survey of 19,000+ adults aged 50+, frequent puzzle solvers showed better overall cognitive function. It showed better memory, reasoning, and attention. And also showed that the more frequently people played, the better their results.
          <em> (Williams et al., Int. J. Geriatric Psychiatry)</em>
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">🎮 Try a Game Now</h2>
      <p>
        You can boost your brainpower right now with our{" "}
        <Link to="/pirate-memory-game" className="text-orange-600 hover:underline font-semibold">
          Pirate Memory Game
        </Link>{" "}
        - match pairs and find hidden treasure in a fun, pirate-themed challenge! We also have other fun games to test and enhance your puzzle-solving abilities.
      </p>
<p>
In creating the Pirate Memory Game I found noticible improvements in my memory. I was surprised at how I was able to remember the location of the symbols the more I played the game, and it only took a few days for noticible improvements in my speed at clearing the pairs to start to become apparent. If you want to see improvements in your short-term recall, give this simple game a try.
</p>
      <h2 className="text-xl font-bold mt-6 mb-2">✅ Tips to Keep Your Brain Fit</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Play daily - even 10–15 minutes helps</li>
        <li>Mix up game types - logic, memory, word, and visual games</li>
        <li>Increase difficulty gradually to encourage adaptation</li>
        <li>Play socially - games with friends or family boost engagement</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">🎉 Final Thoughts</h2>
      <p>
        Cognitive decline isn’t inevitable. With consistent mental exercise - especially the kind that’s genuinely fun -
        <strong> you can help your brain stay sharp, engaged, and curious well into later life</strong>.
      </p>
      <p>
        So next time you crack a quiz or match some symbols, remember, <strong>you’re not just playing - you’re training your brain</strong>.
      </p>

      <div className="mt-4 text-sm text-gray-500">
        <strong>Tags:</strong>{" "}
        <span className="text-orange-600">#MemoryGames</span>,{" "}
        <span className="text-orange-600">#HealthyAging</span>,{" "}
        <span className="text-orange-600">#BrainTraining</span>,{" "}
        <span className="text-orange-600">#Neuroplasticity</span>
      </div>
    </>
  )
},

  "lie": {
    title: "When is Someone Lying to You?",
    date: "6 June 2025",
    content: (
<><p>
Everyone has to lie from time to time. People lie to avoid hurting someone's feelings or to save them from embarrassment. But unfortunately there are other people, people not as honest as us, that are career liars. So how do you avoid the con-men and scamsters trying to cheat you out of your money? Asking people to take a lie detector test isn't really practical. Some clues to a person's honesty are explained below.
</p><p>
Lying is a stressful business for all but the habitual liar. The guilt and fear of getting caught produce symptoms which can point to a liar. One of these actions alone may not mean anything but several of them may be significant. You have to look at the whole picture when judging truthfulness.
</p><p>
When children lie, they often cover their mouth as if to hide the words from you. Adults do the same thing. To try and mask the lie they will place their hand across their mouth or try to disguise this by coughing. A variation on this is scratching or stroking the nose with the lightest of touches. It is set apart from someone with an itchy nose who will touch their nose in a more deliberate manner. If however, you see this when you are speaking to someone, it may mean they think you are lying.
</p>
<h2 className="text-xl font-bold mt-6 mb-2">Open Palms</h2>

<p>Open palms are a traditional sign of honesty, with palms facing upwards it shows the person has nothing to hide. This stems from when two people would show their palms on meeting, to show they weren't hiding any weapons. People generally find it difficult to lie with open palms and if they try, it will look contrived. The professional scam-artist will have learned to do this convincingly, to help him charm people into parting with their cash.
</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Eye Contact</h2>
    <p>When someone is telling you a lie, they will often find it difficult to look you directly in the eye. To avoid eye contact they may rub their eyes. Men will rub their eyes briskly or look down when lying. Women are more likely to rub below their eyes or stare up whilst lying.

</p><p>Prolonged eye contact may also be a clue to a lie. The liar may overcompensate because he knows a lack of eye contact can look suspicious. As with other possible symptoms this should be taken in context with other behaviour.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Eye Accessing Cues</h2>
    <p>

If you watch someone's eyes carefully you get clues to the way they are thinking. This can only be used as a general rule of thumb because everyone thinks in a different way so this won't apply to everybody. In my experience this does work most of the time, but you have to think carefully about what the person's thought process is when the eye movement takes place.

</p><p>When someone looks up and to the left from your point of view (their right) they are constructing an image, in other words they are making up a situation in their mind, clearly this could mean they are lying. If they look left but their eye's stay level they are constructing a sound, for example they could be imagining a conversation that they haven't had.

</p><p>When they look up and to the right they are remembering an image (probably not lying) and when they look right but keep their eye's level they are remembering a sound.

</p><p>If someone looks down and to the left they are accessing their feelings and when they look down and to the right they are having an internal dialogue with themselves.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">The Conundrum</h2>
    <p>

If someone says they were at a certain place at a certain time and you don't believe them you can always ask them a question about it. Better yet ask them a question that you know the answer to. But how would you know the answer if you yourself weren't there? You wouldn't, so ask about something you know didn't happen. 
</p><p>For example, you could ask if they saw anything of a stabbing incident near where they were and were they stuck in the traffic because of the police investigation on the way there. If the person wasn't where they said, they will struggle to decide how to answer. If they agree with you that an incident took place then they must be lying, but if they didn't recall such an incident they may have been telling the truth.

</p><p>When they give their answer, carefully notice how much they hesitate and stumble over their words. The more they struggle to answer, the more likely they are to be lying.

</p><p>This is a really good way to find out if someone is lying as long as it was the location they were lying about and not the people they were with. You should also make sure that the incident is big enough so that they realistically could not have missed it if they had actually been there, but not so big that it is totally unbelievable.</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Micro Expressions</h2>
    <p>One of the things that can manifest itself under the pressure of a lie, is an unusual expression on the face. What I mean by this is an expression that is shorter in duration than you would normally expect. In fact the expression can be so quick that it's easy to miss. However, it is an extremely effective method of uncovering a liar and so should always be looked for.

</p><p>These short expressions commonly come in the form of a lifting of both eyebrows and/or a small frown in the middle of the forehead.

</p><p>Such expressions intriguingly occurred during President Clinton's denial of sexual relations speech, and when Michael Jackson denied impropriety with a child. Both of these people were suspected of lying at the time and the use of this method would concur with that assumption.

</p><p>The fact that such a politician was unable prevent such an expression could mean either they didn't know about such a give away, didn't think anyone would notice or more likely he was unable to stop the micro expression.

</p><p>Unfortunately, the micro expression only lasts for a fraction of a second, so you need to practice carefully monitoring people's expressions for the clues they betray.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Follow the Pattern</h2>
    <p>

The easiest people to spot lying are the last people you want to lie to you. Your friends and family are the people you know best and therefore you know their patterns of behaviour. When they act in a slightly different way to normal your suspicions should be aroused.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Other Clues</h2>
    <p>

The guilt of lying will manifest itself in many other ways. The person may sweat more making them adjust their clothing or scratch more. Their pupils may dilate and they will blink more often. Their face may blush or develop a twitch. When questioned they may be hesitant and give a short answer. A truthful person will be able to easy elaborate and be more animated in their answering. An untruthful story will lack details and will be vague in places.

</p><p>People can learn to banish most of the unconscious movements that show untruthfulness. Politicians are good people to watch for this, they make sure they keep their movements to a minimum to appear credible.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Conclusion</h2>
    <p>

You shouldn't assume someone is lying just because they fall down on one of the above tests, but if there are multiple clues this will remove all doubt for you. Ideally you should take everything into consideration before acting on your suspicions. The person may not be lying for the reason you think they are lying, for instance they may be lying out of embarrassment or perhaps they are planning a surprise for you. Just because you now know how to tell when someone is lying, make sure you don't get caught up in paranoia.
</p>  
</>
),
  },
  "20-great": {
    title: "Twenty Great Things to Sell by Mail or Email",
    date: "6 June 2025",
    content: (
<><p>
For decades, the dream of making money through mail order (and now, e-commerce) has inspired countless entrepreneurs. Yet for every success story, many others never gain traction. The difference is rarely down to raw talent - it's more often about choosing the right product or service to sell.
</p><p>
A great product for mail or online order is typically compact, lightweight, and difficult to find in local shops. Even better if it serves a recurring need or appeals to a specific niche. Here's a fresh take on twenty proven or promising mail-order ideas, many of which are easily adapted to the digital age.
</p>
    <h2 className="text-xl font-bold mt-6 mb-2">1. Virtual Address & Mail Forwarding Services</h2>
    <p>

Still useful for remote businesses, expats, and digital nomads. Offer a prestigious city address, mail scanning, and optional call handling. Services like these have grown with remote work and privacy concerns.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">2. Unusual or Niche Products</h2>
    <p>

Items that solve quirky problems or meet specific needs always find buyers. Think ergonomic left-handed tools, novelty gifts, or phone accessories with a twist. The weirder (and useful), the better.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">3. Paid Newsletters & Subscriptions</h2>
    <p>

From money-saving tips to productivity hacks or wellness routines - people still pay for curated insight. Substack and Patreon have reignited this market.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">4. Startup & Business Opportunity Guides</h2>
    <p>

Well-researched guides, toolkits, and eBooks for starting side hustles or micro-businesses. There’s a strong appetite for actionable, real-world business advice. You could create a YouTube channel or stick with mailing or emailing customers.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">5. Dropshipping & Wholesale Catalogues</h2>
    <p>

If you can curate a set of trending products and build trust, you don’t need to hold stock. Create a niche-focused catalogue and source from ethical suppliers or local makers.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">6. Digital Content Creation Services</h2>
    <p>

Today, digital design services are in demand - from eBook formatting and Canva templates to branding kits and downloadable social media graphics. Ideal for skilled creators who want to productise their work.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">7. Writing Services</h2>
    <p>

Ghostwriting blog posts, product descriptions, email sequences or social media content. You can also sell your own digital guides, short fiction, or how-to eBooks. AI isn't always the best option for creating content and there is still a market for writers.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">8. Copywriting & Marketing Letters</h2>
    <p>

Writing persuasive copy for websites, landing pages, or email campaigns is a high-demand skill. Many small businesses are willing to pay for clear, effective writing that converts.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">9. 'How-To' Books & Mini Courses</h2>
    <p>

Think small, focused eBooks or video tutorials like "How to Build a Capsule Wardrobe" or "Beginner’s Guide to Freelance Accounting." Micro-learning is popular and profitable.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">10. Niche Research & Curation Services</h2>
    <p>

Run a clipping-style research service for journalists, authors, or marketers. Or offer curated collections (e.g. vintage ads, old recipe scans, stock music playlists) as downloadable packs.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">11. Collectibles & Antiques</h2>
    <p>

Curate and sell collectible items online - stamps, coins, old postcards, or pop culture memorabilia. Etsy and niche Facebook groups make this more accessible than ever.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">12. Personalised Artwork & Illustrations</h2>
    <p>

Offer custom cartoon portraits, pet illustrations, or wedding invites. With print-on-demand and online galleries, this has never been easier to scale.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">13. Craft Supplies or DIY Kits</h2>
    <p>

From embroidery to woodworking, hobbyists need materials. Sell bundles, starter kits, or monthly project boxes. Repeat customers are common here.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">14. Run a Membership Club</h2>
    <p>

Create exclusive content, community access, or product bundles. Think fan clubs, fiction writer groups, or local history buffs, you can create a membership club around anything. Paid Facebook groups and websites like Skool are a great way to create an online community that pays you.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">15. Sell Home Study Courses</h2>
    <p>

Offer downloadable courses on skills you know - from photography and coding to gardening. Combine lessons with video or quizzes.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">16. Leaflet Distribution</h2>
    <p>

Today, this can mean running a newsletter sponsorship service, managing local digital bulletin boards, or brokering influencer shoutouts. Delivering leaflets still has a place even when many things have moved online. People at least look at the mail that comes through their door, something you can't always say about email.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">17. Astrology & Personal Insight Products</h2>
    <p>

Astrology charts, tarot readings, numerology reports - these still sell well online, especially when presented with flair and personalisation.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">18. CV Writing & Career Coaching</h2>
    <p>

Many people need help standing out on paper. Combine templates with a writing service or offer interview coaching.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">19. Personalised Gifts</h2>
    <p>

Custom mugs, bookmarks, stationery, baby name prints, or digital portraits. Print-on-demand services handle fulfilment for you.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">20. Proofreading & Editing</h2>
    <p>

Offer proofreading for blog posts, student essays, or self-published authors. Also valuable; converting documents into accessible formats or rewriting content for clarity. While AI might be great for many things, it can stand out in ways you don't want so a personal service like this still has value.

</p>

    <h2 className="text-xl font-bold mt-6 mb-2">Conclusion</h2>
    <p>

These ideas can be run part-time, scaled up, or evolved into digital-first businesses. The core principle remains; find something people want, package it conveniently, and deliver it reliably. Some of these ideas can be combined to create a better product for the customer, and a better opportunity for you.
</p><p>
Reviving the mail-order mindset in the digital world might be your most profitable pivot yet.
</p>
  </>
)
}
};


export default function BlogPost() {
  const { slug } = useParams();
  const post = blogContent[slug];

  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} - 1qx.com`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-orange-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-700 mb-4">We couldn't find a post with that name.</p>
        <Link to="/blog" className="text-orange-600 hover:underline font-semibold">
          Browse all blog posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-8">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Published {post.date}</p>
      <div className="text-gray-800 text-lg space-y-4">{post.content}</div>

      {/* Share button */}
      <button
        onClick={() =>
          navigator.share?.({
            title: post.title,
            text: 'Check out this blog post on 1qx.com!',
            url: window.location.href,
          })
        }
        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mt-6"
      >
        Share
      </button>

      {/* Orangelogo */}
      <div className="flex justify-center mt-6">
        <Link to="/">
          <img src="/Orangelogo.png" alt="1qx logo" className="h-16 hover:opacity-90 transition-opacity" />
        </Link>
      </div>

      {/* Back to Blog */}
      <div className="mt-6">
        <Link to="/blog" className="text-orange-600 hover:underline font-semibold">
          ← Back to blog
        </Link>
      </div>
    </div>
  );
}
