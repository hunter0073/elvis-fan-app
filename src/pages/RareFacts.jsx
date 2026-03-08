import { motion } from 'framer-motion';
import './RareFacts.css';

const BASE = import.meta.env.BASE_URL;

const categories = [
  {
    id: 'origins',
    emoji: '🧬',
    label: 'Origins & Early Life',
    facts: [
      {
        title: 'Born Blonde',
        body: 'Elvis was born naturally blonde. His hair gradually darkened as a teen, and he spent three years slowly dyeing it darker — once a month touching up his hair, eyebrows, and famous sideburns.',
      },
      {
        title: 'Shoe Polish to Miss Clairol',
        body: 'He initially used shoe polish to dye his hair black, inspired by his favorite actor Tony Curtis. He later switched to a specific dye called Miss Clairol 51D in "Black Velvet" — and even dyed his eyelashes.',
      },
      {
        title: 'The $6.95 Guitar',
        body: 'His very first guitar was a cigar box with a hole cut in it and a string pulled across. His parents bought him a $6.95 guitar in 1946 — but what he actually wanted was a bike.',
      },
      {
        title: 'Rotten Fruit & Broken Strings',
        body: 'In school, kids called him "trashy" and threw rotten fruit at him. Some even cut his guitar strings — but classmates who knew how much he loved his guitar scraped money together to buy him new ones.',
      },
    ],
  },
  {
    id: 'music',
    emoji: '🎤',
    label: 'Music Secrets',
    facts: [
      {
        title: 'He Never Wrote a Song',
        body: 'Elvis never wrote a single song in his life. In a 1957 interview, he admitted: "I never wrote a song in my life… I\'ve never even had an idea for a song." He also admitted he couldn\'t actually play guitar despite carrying one on stage.',
      },
      {
        title: 'How the "Co-Writing" Credits Worked',
        body: 'His "co-writing" credits were the result of Colonel Parker strong-arming songwriters into giving up a third of their royalties in exchange for Elvis recording their song. Elvis recorded over 600 songs without writing any of them.',
      },
      {
        title: 'An Album With No Songs',
        body: 'He released an album in 1974 called "Having Fun with Elvis on Stage" — which contained not a single song. It was just recordings of him talking between performances.',
      },
      {
        title: 'Rejected by a Gospel Quartet',
        body: 'At 19, Elvis auditioned to join a gospel quartet called the Songfellows — and was rejected. They told him he couldn\'t sing.',
      },
      {
        title: 'A Recording His Mother Never Heard',
        body: 'His very first recording in 1953 — a $4 demo made as a birthday gift for his mother — was never heard by her, because the Presley family didn\'t own a record player.',
      },
    ],
  },
  {
    id: 'manager',
    emoji: '🌍',
    label: 'The Manager Who Trapped Him',
    facts: [
      {
        title: 'The Illegal Immigrant Who Kept Elvis Home',
        body: 'The real reason Elvis never performed outside the US (except 3 shows in Canada) was Colonel Tom Parker. Parker was actually born in the Netherlands as Andreas Cornelis van Kuijk and was living in the US illegally — he was terrified he wouldn\'t be allowed back in if he left.',
      },
      {
        title: '50% — Discovered Only After Death',
        body: 'Parker was secretly taking up to 50% of Elvis\'s earnings from music and films — a fact only fully discovered after Elvis\'s death.',
      },
    ],
  },
  {
    id: 'karate',
    emoji: '🥋',
    label: 'Karate Obsession',
    facts: [
      {
        title: '"The Tiger"',
        body: 'Elvis held black belts in two styles of karate: Tae Kwon Do and Kang Rhee. He even traveled all the way to Paris to track down a respected Korean karate teacher. He preferred to be called by his karate name: "The Tiger."',
      },
      {
        title: 'Jumpsuits Built for Kicks',
        body: 'His iconic jumpsuits were made from figure skater material specifically to accommodate his karate moves without tearing.',
      },
    ],
  },
  {
    id: 'personal',
    emoji: '🐒',
    label: 'Wild Personal Life',
    facts: [
      {
        title: 'Scatter the Chimp',
        body: 'Elvis owned a pet chimpanzee named Scatter, who once reportedly tried to attack his girlfriend. He also trained a mynah bird to repeat words to entertain friends.',
      },
      {
        title: 'The Collector',
        body: 'He collected antique guns, comic books, and medieval armor, filling entire rooms at Graceland with them.',
      },
      {
        title: 'Inspired by a Comic Book Hero',
        body: 'Many historians believe Elvis\'s iconic look — the hairstyle, sideburns, and cape-like jumpsuits — was secretly inspired by a comic book superhero named Captain Marvel Jr. His comic collection is still in Graceland\'s attic.',
      },
      {
        title: 'The Cadillac Giver',
        body: 'He regularly gave away Cadillacs to total strangers, just to watch their reaction.',
      },
    ],
  },
  {
    id: 'quirks',
    emoji: '😨',
    label: 'Superstitions & Quirks',
    facts: [
      {
        title: 'His Own Cutlery',
        body: 'Elvis carried his own personal cutlery to every restaurant — a habit from childhood. He also brushed his teeth compulsively after every meal.',
      },
      {
        title: 'Black Cats & Dressing Right',
        body: 'If a black cat crossed the road, he would take a completely different route — even if it added miles. He also always dressed right side first: right sleeve, right pant leg, right sock, right shoe — before touching his left side.',
      },
      {
        title: 'Suspicious of the Unsuperstitious',
        body: 'His cousin said: "Elvis was superstitious to the point of being suspicious of anyone who wasn\'t superstitious."',
      },
    ],
  },
  {
    id: 'food',
    emoji: '🍔',
    label: 'Food Obsessions',
    facts: [
      {
        title: 'Breakfast with Butter Running Down His Arms',
        body: 'His cook Mary Jenkins revealed his typical breakfast: homemade biscuits fried in butter, sausage patties, four scrambled eggs, and sometimes fried bacon — "with butter running down his arms."',
      },
      {
        title: 'The Fool\'s Gold — 8,000 Calories',
        body: 'His most extreme food obsession was the "Fool\'s Gold" sandwich — a hollowed-out loaf of bread stuffed with an entire jar of peanut butter, an entire jar of jelly, and a full pound of bacon. It clocked in at approximately 8,000 calories.',
      },
      {
        title: 'The Sandwich He Never Ate',
        body: 'His own daughter Lisa Marie said she never once saw him eat the famous fried peanut butter and banana sandwich that\'s become his most iconic food association.',
      },
    ],
  },
  {
    id: 'hollywood',
    emoji: '🎬',
    label: 'Hollywood & Fame',
    facts: [
      {
        title: 'The Tooth That Required Vocal Cord Surgery',
        body: 'While filming Jailhouse Rock, Elvis lost a tooth cap that became lodged in his lung during a dance scene. Surgery was required — which meant separating his vocal cords. The character he was playing in the film also had a vocal cord injury — a bizarre coincidence.',
      },
      {
        title: 'More Viewers Than the Moon Landing',
        body: 'His 1973 "Aloha From Hawaii" concert was broadcast to 40 countries and watched by more people than witnessed the first Moon landing.',
      },
      {
        title: 'The Vaccination That Moved a Nation',
        body: 'In 1956, Elvis publicly received the polio vaccine before his Ed Sullivan Show appearance. Historians believe this single act meaningfully boosted vaccination rates among American teenagers who idolized him.',
      },
    ],
  },
  {
    id: 'dark',
    emoji: '🕵️',
    label: 'Weird & Dark',
    facts: [
      {
        title: 'A German Wine Grower Named Pressler',
        body: 'Elvis\'s family surname "Presley" traces back to a German wine grower named Johann Valentin Pressler who emigrated from Germany in 1710. The name was anglicized to "Presley" by a family member fighting in the Confederate Army during the Civil War.',
      },
      {
        title: 'The Loaded Pistol & Alice Cooper',
        body: 'In 1971 in a Las Vegas hotel, Elvis summoned Alice Cooper, handed him a loaded pistol, and asked Cooper to put it to his own head — as a demonstration of how to stop someone with a gun.',
      },
      {
        title: 'His Last Words',
        body: 'His last words, spoken to his fiancée Ginger Alden, were: "I\'m going to the bathroom to read."',
      },
    ],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.48, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function RareFacts() {
  return (
    <div className="rare-facts">

      {/* ── HERO ── */}
      <section className="rf-hero">
        <div className="rf-hero-bg" aria-hidden="true" />
        <motion.div
          className="rf-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={`${BASE}logo.png`}
            alt="Elvis TCB"
            className="rf-logo"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <p className="rf-eyebrow">The Untold Stories</p>
          <h1 className="rf-title">Rare Facts</h1>
          <p className="rf-sub">
            Unknown & rare facts about The King — from the man behind the myth
          </p>
        </motion.div>
      </section>

      {/* ── CATEGORIES ── */}
      <div className="rf-categories">
        {categories.map((cat) => (
          <section key={cat.id} className="rf-category">
            <motion.div
              className="rf-cat-header"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="rf-cat-emoji" aria-hidden="true">{cat.emoji}</span>
              <h2 className="rf-cat-title">{cat.label}</h2>
            </motion.div>

            <div className="rf-grid">
              {cat.facts.map((fact, i) => (
                <motion.article
                  key={fact.title}
                  className="rf-card"
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="rf-card-title">{fact.title}</h3>
                  <p className="rf-card-body">{fact.body}</p>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
}
