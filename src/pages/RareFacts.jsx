import { motion } from 'framer-motion';
import './RareFacts.css';

const BASE = import.meta.env.BASE_URL;

const facts = [
  {
    num: '01',
    title: 'The Satellite Concert That Beat the Moon Landing',
    body: 'The "Aloha from Hawaii" concert on January 14, 1973 was the first live global satellite broadcast of a single performer. Watched by an estimated 1.5 billion people — more than tuned in for the Apollo 11 Moon landing. NBC alone pulled 51% of the U.S. audience.',
    tag: 'Vegas Era · 1973',
  },
  {
    num: '02',
    title: 'His Manager Was an Illegal Immigrant — and Elvis Never Knew',
    body: '"Colonel" Tom Parker\'s real name was Andreas Cornelis van Kuijk. He was a Dutch illegal immigrant who could never obtain a U.S. passport. That\'s the entire reason Elvis never performed outside North America. Parker\'s secret single-handedly imprisoned Elvis to a continent.',
    tag: 'Behind the Scenes',
  },
  {
    num: '03',
    title: 'The FBI File on The King',
    body: 'The FBI maintained a 663-page file on Elvis Presley for over 20 years, investigating alleged threats against his life, suspected ties to organized crime in Las Vegas, and a bizarre scheme where a promoter threatened to expose him for draft evasion. The file is publicly available today.',
    tag: 'Declassified',
  },
  {
    num: '04',
    title: 'He Walked Into the White House With a Gun',
    body: 'On December 21, 1970, Elvis showed up unannounced at the White House gate, handed Nixon a handwritten letter, and was granted an Oval Office meeting. He arrived in a black velvet cape and sunglasses and asked to be appointed a Federal Agent at Large — then offered Nixon a Colt .45 pistol as a gift. Nixon said yes to the badge.',
    tag: 'December 21, 1970',
  },
  {
    num: '05',
    title: 'He Held a 7th-Degree Black Belt in Karate',
    body: 'Elvis began training in karate while in the U.S. Army in Germany (1958) and never stopped. He held an 8th-degree black belt in the art of Tang Soo Do, trained almost daily in Las Vegas, and incorporated karate moves directly into his stage performance. He even co-founded a dojo in Memphis.',
    tag: 'TCB — Taking Care of Business',
  },
  {
    num: '06',
    title: 'The Man Who Gave Away Over a Hundred Cadillacs',
    body: 'Elvis gave away Cadillacs to friends, strangers in showrooms, police officers, nurses — anyone who crossed his path when generosity struck. General Motors quietly gave him a dealer\'s license so he could buy at wholesale price. In one day in 1975, he bought 14 Cadillacs as gifts.',
    tag: 'Generosity',
  },
  {
    num: '07',
    title: 'He Wore Three Religions at Once',
    body: 'Elvis wore a gold Christian cross, a Star of David, and the Hebrew letter "Chai" simultaneously around his neck. When asked why, he said: "I don\'t want to miss out on heaven due to a technicality." He was deeply and genuinely spiritual — not performatively religious.',
    tag: 'Personal',
  },
  {
    num: '08',
    title: 'The Jumpsuits Cost More Than a House',
    body: 'During the Vegas years, designer Bill Belew created over 300 custom jumpsuits for Elvis. Each one cost between $10,000 and $65,000 — equivalent to $80,000–$500,000 today. The "Aloha Eagle" suit worn at the satellite concert was insured for $10,000 and weighed 30 pounds with its gemstone work.',
    tag: 'Vegas Era · 1969–1977',
  },
  {
    num: '09',
    title: 'He Rented Memphis for the Night',
    body: 'Elvis regularly rented out Memphis Fairgrounds amusement park, Rainbow Skating Rink, and entire movie theaters for private use — always starting at midnight, after they closed to the public. He\'d invite 200+ friends and go until dawn. Graceland\'s staff called them "midnight raids."',
    tag: 'Memphis',
  },
  {
    num: '10',
    title: 'The Twin He Spoke to for the Rest of His Life',
    body: 'Elvis had a twin brother, Jesse Garon Presley, who was stillborn on January 8, 1935 — the same hour Elvis was born. Elvis kept Jesse\'s grave nearby and spoke about him throughout his life, believing he carried both of their spirits. "When one twin dies, the other gets the strength of both," he once said.',
    tag: 'January 8, 1935',
  },
  {
    num: '11',
    title: 'The 1968 Comeback Was Watched by 42% of America',
    body: 'Before the NBC Comeback Special aired on December 3, 1968, Elvis was widely written off as irrelevant — a Hollywood B-movie star. The special drew 42% of the entire U.S. television audience, the highest-rated show of the year, and is now ranked among the greatest moments in the history of television.',
    tag: 'December 3, 1968',
  },
  {
    num: '12',
    title: 'His Last Concert Was 52 Days Before He Died',
    body: 'Elvis performed his final concert on June 26, 1977 in Indianapolis, Indiana — Market Square Arena. He sang 24 songs, including "Suspicious Minds" and "Can\'t Help Falling in Love." Footage shows a clearly unwell performer who still brought the house down. He died 52 days later, on August 16, 1977. He was 42.',
    tag: 'June 26, 1977',
  },
];

export default function RareFacts() {
  return (
    <div className="rare-facts">

      {/* Hero */}
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
            alt="Elvis Fan Site"
            className="rf-logo"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          <p className="rf-eyebrow">The Untold Stories</p>
          <h1 className="rf-title">Rare Facts</h1>
          <p className="rf-sub">Twelve things even devoted fans rarely know about The King</p>
        </motion.div>
      </section>

      {/* Facts grid */}
      <section className="rf-grid-section">
        <div className="rf-grid">
          {facts.map(({ num, title, body, tag }, i) => (
            <motion.article
              key={num}
              className="rf-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div className="rf-card-header">
                <span className="rf-num">{num}</span>
                <span className="rf-tag">{tag}</span>
              </div>
              <h2 className="rf-card-title">{title}</h2>
              <p className="rf-card-body">{body}</p>
              <div className="rf-card-line" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
