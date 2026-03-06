import { useState } from 'react';
import './Trivia.css';

const questions = [
  {
    q: 'Where was Elvis Presley born?',
    options: ['Memphis, Tennessee', 'Tupelo, Mississippi', 'Nashville, Tennessee', 'Jackson, Mississippi'],
    answer: 1,
    fact: 'Elvis was born in a two-room house in Tupelo, Mississippi on January 8, 1935. His family moved to Memphis when he was 13.',
  },
  {
    q: "What was Elvis's first single released on Sun Records?",
    options: ['Heartbreak Hotel', 'Hound Dog', "That's All Right", 'Blue Suede Shoes'],
    answer: 2,
    fact: "'That's All Right' (1954) was recorded at Sun Studio in Memphis and became Elvis's debut single on Sun Records.",
  },
  {
    q: 'How many weeks did "Hound Dog" stay at #1 on the pop charts?',
    options: ['7 weeks', '9 weeks', '11 weeks', '14 weeks'],
    answer: 2,
    fact: '"Hound Dog" was #1 for 11 consecutive weeks in 1956 — making it Elvis\'s longest-running #1 hit.',
  },
  {
    q: 'How much did Elvis pay for Graceland in 1957?',
    options: ['$54,000', '$102,500', '$250,000', '$75,000'],
    answer: 1,
    fact: 'Elvis purchased Graceland for $102,500 in March 1957. Today it is one of the most visited private homes in America.',
  },
  {
    q: "What was the name of Elvis's twin brother who was stillborn?",
    options: ['Jesse Aaron', 'Jesse Garon', 'James Aaron', 'Vernon Elvis'],
    answer: 1,
    fact: "Elvis's twin brother Jesse Garon Presley was stillborn on January 8, 1935. Elvis often said he felt his brother's spirit with him throughout his life.",
  },
  {
    q: 'How many feature films did Elvis star in?',
    options: ['21', '27', '33', '38'],
    answer: 2,
    fact: 'Elvis starred in 33 feature films between 1956 and 1972, making him one of the most prolific musical film stars in Hollywood history.',
  },
  {
    q: 'Which film is widely considered Elvis\'s best acting performance?',
    options: ['Jailhouse Rock', 'Blue Hawaii', 'King Creole', 'Viva Las Vegas'],
    answer: 2,
    fact: "King Creole (1958), directed by Michael Curtiz, is widely considered Elvis's finest dramatic acting. Director Curtiz called him a natural actor.",
  },
  {
    q: "What was Elvis's last #1 hit on the Billboard Hot 100?",
    options: ['In the Ghetto', 'Suspicious Minds', 'Burning Love', 'Way Down'],
    answer: 1,
    fact: '"Suspicious Minds" (1969) was Elvis\'s last #1 hit on the Billboard Hot 100, ending a seven-year gap since his previous chart-topper.',
  },
  {
    q: 'How many Grammy Awards did Elvis win during his lifetime?',
    options: ['1', '3', '5', '0'],
    answer: 1,
    fact: 'Elvis won 3 Grammy Awards — all for gospel recordings: "How Great Thou Art" (1967), "He Touched Me" (1972), and a live gospel album in 1974.',
  },
  {
    q: "Elvis's 'Aloha from Hawaii' concert was broadcast live via satellite to how many countries?",
    options: ['12 countries', '20 countries', 'Over 40 countries', 'Over 80 countries'],
    answer: 2,
    fact: 'The January 1973 concert was broadcast live via satellite to over 40 countries, reaching an estimated 1.5 billion viewers — more than watched the moon landing.',
  },
  {
    q: 'What instrument did Elvis teach himself to play as a child?',
    options: ['Piano', 'Drums', 'Guitar', 'Harmonica'],
    answer: 2,
    fact: 'Elvis taught himself to play guitar as a young boy in Tupelo, Mississippi, after his mother Gladys bought him a guitar for his 11th birthday instead of a bicycle.',
  },
  {
    q: "Elvis's manager was known as 'Colonel' Tom Parker. What was his real nationality?",
    options: ['American', 'British', 'Dutch', 'Canadian'],
    answer: 2,
    fact: 'Colonel Tom Parker was born Andreas Cornelis van Kuijk in Breda, Netherlands. He immigrated illegally to the US and adopted a fake American identity.',
  },
];

export default function Trivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answered, setAnswered] = useState(false);

  const q = questions[current];

  function pick(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    if (idx === q.answer) setScore(s => s + 1);
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
    setAnswered(false);
  }

  const pct = Math.round((score / questions.length) * 100);

  if (done) {
    return (
      <div className="page">
        <h1 className="page-title">Trivia</h1>
        <div className="divider"></div>
        <div className="trivia-result">
          <div className="result-badge">
            <span className="result-score">{score}/{questions.length}</span>
            <span className="result-pct">{pct}%</span>
          </div>
          <h2 className="result-title">
            {pct === 100 ? '🏆 Perfect Score! You ARE the King!' :
             pct >= 75 ? '⭐ Excellent! True Elvis fan!' :
             pct >= 50 ? '🎸 Not bad! Keep studying!' :
             '🎤 Keep listening and try again!'}
          </h2>
          <p className="result-sub">You answered {score} out of {questions.length} questions correctly.</p>
          <button className="restart-btn" onClick={restart}>Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Trivia</h1>
      <p className="page-subtitle">How well do you know The King?</p>
      <div className="divider"></div>

      <div className="trivia-container">
        {/* Progress */}
        <div className="trivia-progress">
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${((current) / questions.length) * 100}%` }}
            />
          </div>
          <span className="progress-label">{current + 1} / {questions.length}</span>
        </div>

        {/* Score */}
        <div className="trivia-score">Score: {score}</div>

        {/* Question */}
        <div className="question-card">
          <h2 className="question-text">{q.q}</h2>
          <div className="options-grid">
            {q.options.map((opt, idx) => {
              let cls = 'option-btn';
              if (answered) {
                if (idx === q.answer) cls += ' correct';
                else if (idx === selected) cls += ' wrong';
                else cls += ' dimmed';
              }
              return (
                <button key={idx} className={cls} onClick={() => pick(idx)}>
                  <span className="option-letter">{['A', 'B', 'C', 'D'][idx]}</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {answered && (
            <div className={`fact-box ${selected === q.answer ? 'correct-fact' : 'wrong-fact'}`}>
              <span className="fact-icon">{selected === q.answer ? '✓' : '✗'}</span>
              <p>{q.fact}</p>
            </div>
          )}

          {answered && (
            <button className="next-btn" onClick={next}>
              {current < questions.length - 1 ? 'Next Question →' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
