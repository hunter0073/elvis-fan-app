import './Biography.css';

const timeline = [
  {
    year: '1935',
    title: 'Born in Tupelo, Mississippi',
    body: 'Elvis Aaron Presley was born on January 8, 1935, in a two-room house in Tupelo, Mississippi. His twin brother Jesse Garon was stillborn, leaving Elvis to grow up as an only child.',
  },
  {
    year: '1948',
    title: 'Move to Memphis, Tennessee',
    body: 'The Presley family moved to Memphis in search of better opportunities. Elvis attended Humes High School, where he was largely unknown until he began playing guitar.',
  },
  {
    year: '1953',
    title: 'First Recording at Sun Studio',
    body: 'Elvis paid $3.98 to record two songs at Sun Studio as a birthday gift for his mother. Studio owner Sam Phillips eventually took notice of the young singer.',
  },
  {
    year: '1954',
    title: 'That\'s All Right — Debut Single',
    body: "Elvis recorded 'That's All Right' with guitarist Scotty Moore and bassist Bill Black. The song blended country and rhythm & blues in a way never heard before, launching rockabilly.",
  },
  {
    year: '1956',
    title: 'National Breakthrough',
    body: "Elvis signed with RCA Victor and released 'Heartbreak Hotel,' which hit #1. His appearance on The Ed Sullivan Show drew 60 million viewers — one-third of the US population.",
  },
  {
    year: '1957',
    title: 'Graceland',
    body: "Elvis purchased Graceland mansion in Memphis for $102,500. It became his beloved home and refuge for the rest of his life, now one of the most visited private homes in America.",
  },
  {
    year: '1958',
    title: 'Army Service',
    body: "Elvis was drafted into the U.S. Army and served in West Germany. He refused special treatment and served as a regular soldier, earning the respect of fellow servicemen.",
  },
  {
    year: '1960',
    title: 'Return & Reinvention',
    body: "Elvis returned from the Army and pivoted toward Hollywood, starring in a series of successful musical films throughout the early 1960s while continuing to record hit records.",
  },
  {
    year: '1967',
    title: 'Marriage to Priscilla',
    body: "Elvis married Priscilla Beaulieu in Las Vegas on May 1, 1967. Their daughter Lisa Marie was born the following year on February 1, 1968.",
  },
  {
    year: '1968',
    title: "'68 Comeback Special",
    body: "Elvis returned to live performance with his iconic NBC television special, clad in black leather. The raw, electrifying performance reminded the world why he was called The King.",
  },
  {
    year: '1969',
    title: 'Las Vegas Residency',
    body: "Elvis began his legendary residency at the International Hotel (now Westgate) in Las Vegas, performing 57 sold-out shows to over 100,000 fans. He redefined the Las Vegas show format.",
  },
  {
    year: '1973',
    title: 'Aloha from Hawaii',
    body: "Elvis's concert special 'Aloha from Hawaii' was broadcast live via satellite to over 40 countries — the first entertainment special broadcast globally via satellite.",
  },
  {
    year: '1977',
    title: 'Passing of the King',
    body: "Elvis Presley passed away on August 16, 1977, at Graceland at the age of 42. The world mourned the loss of the man who had changed music, culture, and entertainment forever.",
  },
];

export default function Biography() {
  return (
    <div className="page">
      <h1 className="page-title">Biography</h1>
      <p className="page-subtitle">The life and legacy of Elvis Aaron Presley</p>
      <div className="divider"></div>

      <div className="timeline">
        {timeline.map((item, i) => (
          <div key={item.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-body">{item.body}</p>
            </div>
            <div className="timeline-dot" />
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
}
