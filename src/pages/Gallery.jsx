import { useState } from 'react';
import './Gallery.css';

// Public domain images via Wikipedia Special:FilePath (Wikimedia Commons)
const WP = (filename) => `https://en.wikipedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;

const photos = [
  {
    id: 1,
    era: 'Early Career',
    year: '1954',
    caption: 'Promo Photo, 1954',
    desc: 'One of the earliest professional promotional photographs of Elvis Presley, taken just as his career with Sun Records was beginning.',
    img: WP('PresleyPromo1954PhotoOnly.jpg'),
  },
  {
    id: 2,
    era: 'Early Career',
    year: '1956',
    caption: 'Publicity Photo, 1956',
    desc: 'An official RCA Victor publicity photograph taken during the year Elvis became a national sensation.',
    img: WP('Elvis_Presley_Publicity_Photo_1956.jpg'),
  },
  {
    id: 3,
    era: 'Early Career',
    year: '1956',
    caption: 'First National TV Appearance',
    desc: "Elvis's first national television appearance in 1956. His performances on The Ed Sullivan Show were seen by a third of the US population.",
    img: WP('Elvis_Presley_first_national_television_appearance_1956.jpg'),
  },
  {
    id: 4,
    era: 'Early Career',
    year: '1956',
    caption: 'With Ed Sullivan',
    desc: 'Elvis with Ed Sullivan backstage in October 1956. Sullivan famously said he was "a real decent, fine boy."',
    img: WP('Elvis_Presley_and_Ed_Sullivan_October_1956.jpg'),
  },
  {
    id: 5,
    era: 'Hollywood',
    year: '1957',
    caption: 'Jailhouse Rock Promo',
    desc: "Elvis promoting his third film, Jailhouse Rock. The film's iconic dance sequence is considered the prototype for the modern music video.",
    img: WP('Elvis_Presley_promoting_Jailhouse_Rock.jpg'),
  },
  {
    id: 6,
    era: 'Hollywood',
    year: '1957',
    caption: 'King Creole',
    desc: "On the set of King Creole (1958), directed by Michael Curtiz. Elvis considered this his best film.",
    img: WP('Annex_-_Presley,_Elvis_(King_Creole)_01.jpg'),
  },
  {
    id: 7,
    era: 'Army',
    year: '1958',
    caption: 'Private Presley',
    desc: 'Elvis in his U.S. Army uniform. He refused special treatment and served as a regular soldier in West Germany.',
    img: WP('Elvis_Presley_Army_1958.jpg'),
  },
  {
    id: 8,
    era: 'Comeback',
    year: '1968',
    caption: "'68 Comeback Special",
    desc: "Elvis in black leather for his iconic NBC comeback special. The performance reminded the world why he was called The King.",
    img: WP('Elvis_68_Comeback_Special.jpg'),
  },
  {
    id: 9,
    era: 'Las Vegas',
    year: '1970',
    caption: 'Las Vegas Jumpsuit Era',
    desc: 'Elvis performing in one of his iconic jeweled jumpsuits during his legendary Las Vegas residency.',
    img: WP('Elvis_Presley_1970.jpg'),
  },
  {
    id: 10,
    era: 'Las Vegas',
    year: '1973',
    caption: 'Aloha from Hawaii',
    desc: 'The historic satellite concert broadcast to over 40 countries — watched by more people than the moon landing.',
    img: WP('Elvis_Aloha_from_Hawaii_1973.jpg'),
  },
  {
    id: 11,
    era: 'Personal',
    year: '1957',
    caption: 'Graceland',
    desc: "Elvis's beloved Memphis mansion, purchased in 1957. Now one of the most visited private homes in America.",
    img: WP('Graceland_2012.jpg'),
  },
  {
    id: 12,
    era: 'Personal',
    year: '1935',
    caption: 'Birthplace, Tupelo',
    desc: "Elvis's birthplace — a two-room 'shotgun house' in Tupelo, Mississippi, now a museum.",
    img: WP('Elvis_Presley_Birthplace.jpg'),
  },
];

const eras = ['All', 'Early Career', 'Hollywood', 'Army', 'Comeback', 'Las Vegas', 'Personal'];

export default function Gallery() {
  const [selectedEra, setSelectedEra] = useState('All');
  const [selected, setSelected] = useState(null);
  const [imgErrors, setImgErrors] = useState({});

  const filtered = selectedEra === 'All' ? photos : photos.filter(p => p.era === selectedEra);

  function handleImgError(id) {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  }

  return (
    <div className="page">
      <h1 className="page-title">Photo Gallery</h1>
      <p className="page-subtitle">Iconic moments from Wikimedia Commons (public domain)</p>
      <div className="divider"></div>

      <div className="gallery-filters">
        {eras.map(era => (
          <button
            key={era}
            className={`filter-btn ${selectedEra === era ? 'active' : ''}`}
            onClick={() => setSelectedEra(era)}
          >
            {era}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map(photo => (
          <div
            key={photo.id}
            className="gallery-item"
            onClick={() => setSelected(photo)}
          >
            <div className="gallery-photo-wrap">
              {!imgErrors[photo.id] ? (
                <img
                  src={photo.img}
                  alt={photo.caption}
                  className="gallery-photo"
                  onError={() => handleImgError(photo.id)}
                  loading="lazy"
                />
              ) : (
                <div className="gallery-photo-fallback">
                  <span className="fallback-era">{photo.era}</span>
                </div>
              )}
              <span className="gallery-era-tag">{photo.era}</span>
            </div>
            <div className="gallery-item-info">
              <span className="gallery-year">{photo.year}</span>
              <h3>{photo.caption}</h3>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-card" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
            <div className="lightbox-photo">
              {!imgErrors[selected.id] ? (
                <img
                  src={selected.img}
                  alt={selected.caption}
                  className="lightbox-img"
                  onError={() => handleImgError(selected.id)}
                />
              ) : (
                <div className="lightbox-fallback">
                  <span>{selected.era}</span>
                </div>
              )}
            </div>
            <div className="lightbox-info">
              <span className="lightbox-era">{selected.era} · {selected.year}</span>
              <h2>{selected.caption}</h2>
              <p>{selected.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
