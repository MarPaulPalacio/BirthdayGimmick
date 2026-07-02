import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import happyPhoto from './assets/happy.jpg'
import Song from './assets/song.mp3'
import Horrendous from './assets/horrendous.png'
import Bustle from './assets/bustle.avif'
import hi from './assets/hi.jpg'
import nailong from './assets/nailong.jpg'

/* ------------------------------------------------------------------
   ✏️  EDIT ME
   This is the only part you should need to touch. Fill in real
   memories, replace `photo: null` with an image path/URL once you
   have one (e.g. photo: '/photos/first-day.jpg'), and write your
   own "secret" line for the little heart gimmick on each chapter.
   For a poem-style secret, use an array of strings — one string per
   line, and an empty string '' wherever you want a stanza break.
------------------------------------------------------------------- */
const chapters = [
  {
    id: 1,
    icon: '🌅',
    title: 'Sunrise',
    body: [
      'Uy! It has been 6 months? Eto pinagppraktisan na kita sa paggawa ng website HAHAHAHA. Pero happy birthday!! Ito yung 5 random stuffs na naisip ko HAHAHAHA Enjoy',
    ],
    photoCaption: 'May Picture Dito',
    photo: happyPhoto,
    secret: 'baka nahalata mo na pero I love giving especially to my closest friends so kahit papano here is how I give without spending too much HAHAHAHAHA',
  },
  {
    id: 2,
    icon: '💬',
    title: 'Oh teka lang di pa lampas 10pm',
    body: [
      'Mapa sama ng loob, shower thoughts, o katatawanan andun ka hahahhaha. ',
    ],
    photoCaption: 'May Picture dito',
    photo: Bustle,
    secret: 'Sobrang comfortable makipag-usap sayo kung alam mo lang. Nasasabi ko gusto ko sabihin tas alam ko na andyan ka rin, nakikinig sakin. Solid trait.',
  },
  {
    id: 3,
    icon: '✨',
    title: 'Its so fricking hard',
    body: [
      "Its so fricking hard pero focus lang sa goal. Kakayanin hahahahaha. Sana always remember that I am here for you, your friends are there for you. And your family is always there to support you.",
    ],
    photoCaption: 'May Picture dito',
    photo: Horrendous,
    secret: 'Di ko alam kung sino papanigan ko sainyo ni jj pag kayo naghaharutan (esp nun sa uela) bahala kayo dyan wala lang random thought lang HAHAHAHA',
  },
  {
    id: 4,
    icon: '🎉',
    title: 'I tried, do not laugh',
    body: [
      ' poem to hindi essay. testing hobbies lang kaya pacheck kung pede na HAHAHAHAHA',
    ],
    photoCaption: 'May Picture dito',
    photo: nailong,
    secret: [
      'Its raining outside',
      'But colder inside',
      'No bonfire could help me',
      'relieve the misery that flies',
      '__',
      'I shatter away',
      'Like leaves gone astray',
      'And the moon flickers at night',
      '__',
      'Water gently pouring',
      'Distracted from what was missing',
      'No blue light can help me', 
      'forget this mysterious feeling',
      '__',
      'I saw yesterday',
      'A mystery to sway',
      'And the moon flickers at night',
      '__',
      'A sweet velvet red',
      'The warmth of everything you said',
      'The smile that melts the mountains to butter',
      'You made it shine better instead',
      '__',
      'I looked in your eyes',
      'I saw you so bright',
      'And the moon flickers at night',
      '__',
      'Saw through your disguise',
      'A grandeur sublime',
      'And your eyes flickers tonight',
    ],
  },
  {
    id: 5,
    icon: '🎁',
    title: 'Happy Birthday!!',
    body: [
      'To be honest, I am really grateful that I met you. Sobrang out of the blue na nagkita tayo at random places at random moments and yet it is easy to enjoy your company. I do not want to elaborate but it helped me become better, strive harder, and go outside of the box for once. You make people feel special and for that, you yourself are special. I hope you have a great birthday and I hope we meet again soon!',
    ],
    photoCaption: 'Weeyuweeyuwee',
    photo: hi,
    secret: 'Grateful to be your friend!!',
    finale: true,
    gifts: [
      'Gift stub - Worth 1 favor lang tipid muna',
      'If one song could be played on your birthday, it would be Have it All by Jason Mraz.',
    ],
    song: {
      title: 'Have It All — Jason Mraz',
      src: Song,
    },
  },
]

const RECIPIENT_NAME = 'elina'
const RECIPIENT_DISPLAY = 'Elina'

function PhotoFrame({ caption, photo }) {
  return (
    <div className="photo-frame">
      {photo ? (
        <img src={photo} alt={caption} />
      ) : (
        <div className="photo-placeholder">
          <span className="photo-icon">📷</span>
          <span className="photo-caption">{caption}</span>
        </div>
      )}
    </div>
  )
}

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        size: 10 + Math.round(Math.random() * 14),
        duration: 9 + Math.random() * 8,
        delay: Math.random() * 10,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    [],
  )
  return (
    <div className="hearts-field" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        delay: Math.random() * 1.2,
        duration: 2.4 + Math.random() * 1.6,
        rotate: Math.round(Math.random() * 360),
        color: ['#ff8fab', '#ffd166', '#ff5c7f', '#ffffff', '#ffb3c6'][i % 5],
      })),
    [],
  )
  return (
    <div className="confetti-field" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            background: p.color,
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const [nameInput, setNameInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const [activeChapter, setActiveChapter] = useState(1)
  const [unlockedUpTo, setUnlockedUpTo] = useState(1)
  const [revealedSecrets, setRevealedSecrets] = useState({})

  const chapter = chapters.find((c) => c.id === activeChapter)
  const isFinale = chapter?.finale
  const isLastRead = activeChapter === unlockedUpTo && activeChapter < chapters.length

  const handleConfirm = () => {
    setAttempted(true)
    if (nameInput.trim().toLowerCase() === RECIPIENT_NAME) {
      setUnlocked(true)
    }
  }

  const goToChapter = (id) => {
    if (id <= unlockedUpTo) setActiveChapter(id)
  }

  const handleContinue = () => {
    if (isLastRead) {
      const next = activeChapter + 1
      setUnlockedUpTo(next)
      setActiveChapter(next)
    }
  }

  const toggleSecret = (id) => {
    setRevealedSecrets((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="page-shell">
      <div className="glow-grid" />
      <FloatingHearts />

      <div className="content-card">
        {!unlocked ? (
          <div className="envelope-gate">
            <motion.div
              className="envelope"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="envelope-seal">💌</div>
              <h1>A letter, written chapter by chapter</h1>
              <p className="hero-copy">
                Uy Happy Birthday!! Ano muna pangalan mo?
              </p>
              <div className="name-box">
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                  placeholder="Name"
                  aria-label="Name"
                />
                <button type="button" onClick={handleConfirm}>
                  Open the letter
                </button>
              </div>
              {attempted && nameInput.trim().toLowerCase() !== RECIPIENT_NAME && (
                <p className="hint-text">Hmm, that&apos;s not quite it. Try again.</p>
              )}
            </motion.div>
          </div>
        ) : (
          <>
            <header className="hero-panel">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Happy Birthday!!
              </motion.h1>
              <p className="hero-copy">
                Read each chapter in order, or visit any one you&apos;ve already opened again.
                
              </p>
            </header>

            <nav className="toc">
              {chapters.map((c) => {
                const isUnlocked = c.id <= unlockedUpTo
                const isActive = c.id === activeChapter
                return (
                  <button
                    key={c.id}
                    type="button"
                    className={`toc-chip ${isActive ? 'active' : ''} ${
                      isUnlocked ? '' : 'locked'
                    }`}
                    onClick={() => goToChapter(c.id)}
                    disabled={!isUnlocked}
                  >
                    <span className="toc-icon">{isUnlocked ? c.icon : '🔒'}</span>
                    <span className="toc-label">
                      Ch. {c.id}
                      <em>{c.title}</em>
                    </span>
                  </button>
                )
              })}
            </nav>

            <AnimatePresence mode="wait">
              <motion.section
                key={chapter.id}
                className={`chapter-card ${isFinale ? 'finale' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4 }}
              >
                {isFinale && <Confetti />}

                <div className="chapter-grid">
                  <PhotoFrame caption={chapter.photoCaption} photo={chapter.photo} />

                  <div className="chapter-text">
                    <span className="chapter-eyebrow">Chapter {chapter.id}</span>
                    <h2>{chapter.icon} {chapter.title}</h2>
                    {chapter.body.map((para, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                      >
                        {para}
                      </motion.p>
                    ))}

                    <button
                      type="button"
                      className="secret-toggle"
                      onClick={() => toggleSecret(chapter.id)}
                    >
                      {revealedSecrets[chapter.id] ? '💗 Hide the secret' : '🤍 Tap for a secret'}
                    </button>
                    <AnimatePresence>
                      {revealedSecrets[chapter.id] && (
                        <motion.div
                          className="secret-text"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          {Array.isArray(chapter.secret)
                            ? chapter.secret.map((line, i) =>
                                line === '' ? (
                                  <div key={i} className="poem-stanza-break" />
                                ) : (
                                  <div key={i} className="poem-line">
                                    {line}
                                  </div>
                                ),
                              )
                            : chapter.secret}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {isFinale && (
                      <div className="finale-panel">
                        <ul className="gift-list">
                          {chapter.gifts.map((g, i) => (
                            <li key={i}>{g}</li>
                          ))}
                        </ul>
                        <div className="music-box">
                          <h3>🎶 {chapter.song.title}</h3>
                          <audio controls src={chapter.song.src}>
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="chapter-controls">
                  <button
                    type="button"
                    onClick={() => goToChapter(activeChapter - 1)}
                    disabled={activeChapter <= 1}
                  >
                    ← Back
                  </button>
                  {!isFinale && (
                    <button
                      type="button"
                      className="primary"
                      onClick={handleContinue}
                      disabled={!isLastRead}
                    >
                      {activeChapter < unlockedUpTo ? 'Already read →' : 'Continue →'}
                    </button>
                  )}
                </div>
              </motion.section>
            </AnimatePresence>
          </>
        )}
      </div>
    </div>
  )
}

export default App