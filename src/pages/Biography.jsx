import { motion } from 'framer-motion';
import './Biography.css';

/* ── KEY FIGURES ─────────────────────────────────────────── */
const figures = [
  {
    name: 'Gladys Presley',
    role: 'Mother',
    emoji: '👩',
    bio: `Gladys Love Smith was the most important person in Elvis's life — full stop. Born in 1912 in Pontotoc County, Mississippi, she married Vernon Presley in 1933. When Elvis's twin brother Jesse Garon was stillborn, Gladys became fiercely protective of her surviving son, and that bond never loosened. She called Elvis "my precious" and he called her "Satnin." They shared a private baby-talk language well into his adult years.

Gladys was a deeply religious, emotionally intense woman who carried a gift for singing that she passed directly to Elvis. She scraped together the $3.98 for his first Sun Studio recording session and was his most loyal first audience. When Elvis was drafted, Gladys was devastated — she aged visibly during his two years away. She died on August 14, 1958, of a heart attack, just two months after he left for Germany, at only 46 years old. Elvis was granted emergency leave and was inconsolable. He later said, "She was the one I lived for." He never fully recovered from her loss.`,
  },
  {
    name: 'Vernon Presley',
    role: 'Father',
    emoji: '👨',
    bio: `Vernon Elvis Presley was a man of simple means who spent a period in Parchman Farm prison (1938–39) for check forgery — a fact that haunted the family and was kept quiet for decades. Gentle but not especially driven, he relied heavily on Gladys and later on his son's enormous success to define his life's purpose.

After Gladys died, Vernon remained close to Elvis, eventually becoming his business manager — a role he was poorly suited for but which Elvis trusted him with anyway. Vernon had an eye for younger women; his second marriage, to Dee Stanley in 1960, upset Elvis deeply. In Elvis's final years, Vernon watched helplessly as his son's health deteriorated. He outlived Elvis by two years, dying in 1979, and is buried at Graceland alongside Gladys and Elvis.`,
  },
  {
    name: 'Colonel Tom Parker',
    role: 'Manager',
    emoji: '🎩',
    bio: `"Colonel" Tom Parker — real name Andreas Cornelis van Kuijk — was born in Breda, Netherlands in 1909. He entered the United States illegally sometime in the late 1920s and lived the rest of his life under an assumed identity, which is almost certainly why he refused to let Elvis tour internationally: a passport application would have exposed him.

Parker had managed country acts like Eddy Arnold and Hank Snow before he locked onto Elvis in 1955, negotiating the landmark $35,000 sale of Elvis's Sun Records contract to RCA Victor. His deal-making was audacious — he orchestrated movie contracts, merchandising, and TV appearances that made Elvis a global phenomenon. But his 25% management fee (later rumoured to be 50%) was exploitative, and his fondness for gambling meant he was often motivated by his own debts. He steered Elvis away from the international tours that could have refreshed his career in the late 1960s and 1970s and pushed him into the relentless Vegas treadmill that ground him down. Most historians agree Parker was as much a trap as a springboard.`,
  },
  {
    name: 'Scotty Moore & Bill Black',
    role: 'Original Band',
    emoji: '🎸',
    bio: `Guitarist Scotty Moore and bassist Bill Black were the two men in the room on July 5, 1954, when Elvis launched into a spontaneous, sped-up version of Arthur Crudup's "That's All Right" during a Sun Studio session break. Sam Phillips hit record. History was made.

Scotty's clean, echo-drenched guitar style — influenced by Chet Atkins, Merle Travis, and blues players — gave Elvis's early recordings their distinct rockabilly snap. Bill Black's slapping upright bass gave it the groove. Together the three performed the Louisiana Hayride circuit and early tours before drummer D.J. Fontana joined. Both Scotty and Bill left Elvis's employ in 1958 after a pay dispute. Elvis never quite replaced them artistically — the magic of those Sun sides has never been duplicated.`,
  },
  {
    name: 'Priscilla Presley',
    role: 'Wife',
    emoji: '💍',
    bio: `Priscilla Ann Beaulieu was 14 years old when she first met Elvis at a party in Bad Nauheim, Germany in 1959, while he was stationed there with the Army. He was 24. The relationship was scandalous in retrospect, but her father, a U.S. Air Force officer, eventually agreed to let her visit Graceland on the condition that she complete high school there.

She moved to Memphis in 1963, finished school under Elvis's arrangements, and the two were surrounded by his entourage at all times. They married on May 1, 1967, in a private ceremony at the Aladdin Hotel in Las Vegas — a event that Colonel Parker orchestrated primarily for publicity purposes. Their daughter Lisa Marie was born exactly nine months later, on February 1, 1968.

As Elvis sank into pill dependency and the Vegas grind, Priscilla became increasingly lonely. She began studying karate with instructor Mike Stone, eventually starting a relationship with him. She filed for divorce in 1972 and it was finalized in 1973. Despite everything, she and Elvis maintained a friendship. She was not at Graceland when he died, but she was among the most broken by his passing. She later resurrected the Presley brand as executor of his estate, turning Graceland into the landmark it is today.`,
  },
  {
    name: 'Linda Thompson',
    role: 'Companion (1972–1976)',
    emoji: '❤️',
    bio: `After Priscilla left, Elvis met Linda Thompson, a Memphis beauty queen and aspiring actress, in July 1972. She became his most devoted companion during the most difficult years of his life — essentially a full-time caregiver as his health declined.

Linda moved into Graceland and, for four years, stayed by his side through hospitalizations, erratic behaviour, and the haze of prescription drugs. She later wrote candidly that she would sleep lightly so she could hear if his breathing changed. She eventually left in late 1976, exhausted and concerned for her own mental health. "I loved him completely," she wrote, "but I couldn't save him." She later married musician David Foster. Her accounts of those final years are among the most vivid portraits of the real, unguarded Elvis.`,
  },
  {
    name: 'Ginger Alden',
    role: 'Fiancée (1976–1977)',
    emoji: '🌹',
    bio: `Ginger Alden, a 20-year-old Memphis beauty queen, met Elvis in November 1976 through his friend George Klein. Elvis became smitten almost immediately, proposing in the bathroom of Graceland with a 11.5-carat diamond ring in January 1977.

Ginger was with Elvis at Graceland on August 16, 1977. She was asleep in the bedroom when Elvis got up in the early afternoon to use the bathroom — his usual habit of reading in the bathroom for hours. When he didn't return, she found him on the floor and called for help. He was pronounced dead at Baptist Memorial Hospital later that afternoon. Their relationship — and her version of that final day — has been debated and scrutinised ever since.`,
  },
  {
    name: 'Sam Phillips',
    role: 'Sun Records Founder',
    emoji: '🎙️',
    bio: `Sam Phillips founded Sun Studio (Sun Records) in Memphis in 1950 with a single, inspired mission: to record the music of Black Southern artists who had no mainstream outlet. He recorded Howlin' Wolf, B.B. King, Rufus Thomas, and many others before Elvis walked through his door.

Phillips had been saying for years that if he could find a white man who had the Negro feel for music, he'd make a million dollars. When Elvis's session tape crossed his desk, he knew. Phillips produced "That's All Right," "Blue Moon of Kentucky," and four more Sun singles before selling Elvis's contract to RCA for $35,000 — a sum that let him invest in Jerry Lee Lewis, Carl Perkins, Roy Orbison, and Johnny Cash. He made a fortune, but his true legacy is the four walls of 706 Union Avenue, where rock and roll was born.`,
  },
];

/* ── CHAPTER TIMELINE ────────────────────────────────────── */
const chapters = [
  {
    period: '1935 – 1953',
    title: 'Tupelo: The Making of a King',
    body: [
      `Elvis Aaron Presley was born at 4:35 a.m. on January 8, 1935, in a two-room shotgun house at 306 Old Saltillo Road in Tupelo, Mississippi — a structure his father Vernon had built himself with a $180 loan. His identical twin, Jesse Garon Presley, was stillborn thirty-five minutes earlier. Elvis would be an only child. The loss of Jesse cast a long, quiet shadow over the family, and Elvis later said he always felt the presence of a brother he never knew.`,
      `The Presleys were desperately poor, surviving on Vernon's piecework wages and Gladys's shifts at a garment factory. They lived among sharecroppers, labourers, and tenant farmers in a neighbourhood where the church was the social centre of life and music — gospel, blues, and country — seeped through every wall and screen door. The First Assembly of God church, where the family worshipped, gave Elvis his first sustained exposure to music: congregational singing, shaped-note harmonies, and the ecstatic emotionalism of Pentecostal praise.`,
      `For his 11th birthday Elvis had wanted a bicycle. His mother, believing a guitar was safer, bought him a $7.75 guitar from the Tupelo Hardware Company. He was initially disappointed, but within weeks he was obsessively learning chords from his uncles and a local minister named Frank Smith. By the time the family relocated to Memphis in 1948, after Vernon's work dried up and a series of failed schemes left them nearly destitute, Elvis carried the guitar with him on the bus like a compass.`,
    ],
  },
  {
    period: '1948 – 1954',
    title: 'Memphis: Finding a Voice',
    body: [
      `Memphis hit Elvis like a voltage shock. After the rural quiet of Tupelo, Beale Street — with its juke joints, blues clubs, and record shops blasting B.B. King, Muddy Waters, and Bobby "Blue" Bland — was another world. Elvis spent hours haunting those blocks, soaking in sounds he had never heard at such close range. He dressed differently from his classmates at Humes High School: pink shirts, pegged trousers, long greased hair, a look borrowed partly from the Black musicians and hustlers on Beale.`,
      `He was painfully shy and mostly anonymous at Humes — a C-average student who ate lunch alone and was largely invisible to his peers. Music was his only real confidence. He played guitar alone in the school basement. When a teacher suggested he perform at the school's talent show in his senior year, he did — and the crowd erupted. He was stunned.`,
      `After graduating in 1953, Elvis went to work at Crown Electric Company as a truck driver, earning $41 a week. That summer he walked into the Memphis Recording Service at 706 Union Avenue — the commercial arm of Sam Phillips's Sun Records — and paid $3.98 to cut two songs: "My Happiness" and "That's When Your Heartaches Begin." He told the receptionist, Marion Keisker, it was a birthday present for his mother. Gladys's birthday had been in April. He came back in January 1954 and cut two more. Sam Phillips's assistant Marion Keisker noticed something in his voice and wrote his name down: "Good ballad singer. Hold."`,
    ],
  },
  {
    period: '1954 – 1955',
    title: 'Sun Records: The Birth of Rock and Roll',
    body: [
      `On June 26, 1954, Sam Phillips called Elvis in to try recording a Bing Crosby–style ballad — it went nowhere. He brought in local guitarist Scotty Moore and bassist Bill Black to help. After hours of fruitless attempts, during a break, Elvis picked up his guitar and launched into a wild, speeded-up version of "That's All Right," a 1946 blues number by Arthur "Big Boy" Crudup — half mocking, half playing around. Scotty and Bill jumped in. Phillips stuck his head out of the control booth and asked, "What are you doing?" Nobody knew. "Well, back up and do it again," he said.`,
      `"That's All Right" was pressed and sent to Memphis disc jockey Dewey Phillips (no relation to Sam), who played it on his Red Hot & Blue show on July 8, 1954. His phone lines exploded. He played it fourteen times in a row. The next morning, people were lining up at record stores. On the flip side was "Blue Moon of Kentucky," a Bill Monroe bluegrass standard that Elvis had turned into something entirely new — a churning, loose-hipped hybrid that had no name yet. Within a year, it would be called rockabilly, and then rock and roll.`,
      `Over the next year, Elvis, Scotty, and Bill toured the Southern circuit — Louisiana Hayride, schoolhouse dances, county fairs — honing a live show of increasingly dangerous energy. Elvis's leg would start to shake. Girls screamed. Older men in the crowd looked alarmed. He recorded four more singles at Sun — including "Mystery Train" and "Milkcow Blues Boogie" — each one pushing further into uncharted territory. Country stations called him too Black. Black stations called him too country. Elvis didn't care.`,
    ],
  },
  {
    period: '1956 – 1958',
    title: 'The Explosion: National Fame',
    body: [
      `In November 1955, Colonel Tom Parker brokered the sale of Elvis's Sun contract to RCA Victor for $35,000 — the largest sum ever paid for a recording artist at that time. Within two months, Elvis was in RCA's Nashville studio recording "Heartbreak Hotel." Released January 27, 1956, it hit #1 on the pop charts, stayed for eight weeks, and sold over a million copies. It was the sound of a generation finding itself.`,
      `In 1956 alone, Elvis appeared on national television six times, including four appearances on The Ed Sullivan Show — though Ed initially refused to book him, calling his act "unfit for family viewing." When Elvis appeared, Sullivan agreed to film him only from the waist up. It didn't matter. 60 million Americans — roughly one in three — watched. Girls fainted. Parents wrote letters of protest. Ministers delivered sermons about the Devil's music. Elvis just smiled and kept moving his hips.`,
      `He released three more #1 singles that year: "I Want You, I Need You, I Love You," "Don't Be Cruel," and "Hound Dog" (which spent eleven weeks at #1). His self-titled debut album became the first rock and roll album to hit #1 on the Billboard chart. He appeared in his first film, Love Me Tender, and bought Graceland — the 17-acre Memphis mansion — for $102,500 in March 1957. He was 22 years old.`,
      `This was also the era of the Memphis Mafia: a rotating inner circle of friends, bodyguards, and yes-men that Elvis kept around him at all times. Childhood friends like Red West, Lamar Fike, and later Marty Lacker became part of a personal entourage that kept the outside world at bay. Elvis paid their salaries, bought their cars, and expected their unconditional loyalty. It was the beginning of an isolation that would only deepen.`,
    ],
  },
  {
    period: '1958 – 1960',
    title: 'The Army: Duty and Loss',
    body: [
      `On December 20, 1957, Elvis received his draft notice. Colonel Parker had rejected multiple offers of special service arrangements — including a proposal that Elvis serve in Special Services entertaining troops, as other celebrities had done. Parker wanted the service to be genuine, calculating that it would make Elvis more broadly appealing to adult America when he returned. Elvis reported for induction on March 24, 1958.`,
      `He served in the 3rd Armoured Division in Friedberg, West Germany, living in a rented house off-base where Vernon, his grandmother Minnie Mae, and friends including Red West joined him. He was assigned as a scout jeep driver and later a sergeant — a real rank, not ceremonial. His fellow soldiers respected him; he ate in the mess hall, pulled KP duty, and refused any accommodation that set him apart.`,
      `Two months into his service, on August 14, 1958, Gladys Presley died of a heart attack at Graceland at age 46. Elvis was granted emergency compassionate leave and flew home. At the funeral he wept openly, throwing himself across her casket, whispering to her. He returned to duty but was never quite the same. His use of prescription amphetamines — introduced by sergeants in the field to stay awake during manoeuvres — began during this period.`,
      `It was also in Germany that he met 14-year-old Priscilla Beaulieu at a party. He was captivated. Her father was initially opposed, but Elvis was charming and persistent. The relationship would define — and in some ways destroy — the next fifteen years of both their lives.`,
    ],
  },
  {
    period: '1960 – 1968',
    title: 'Hollywood: The Lost Decade',
    body: [
      `Elvis returned from the Army on March 5, 1960, to a hero's welcome. He appeared on Frank Sinatra's TV special wearing his uniform and immediately began work on the film G.I. Blues. The post-Army reinvention was exactly what Parker had planned: a sanitised, all-American Elvis, safe for moms and dads. It worked commercially. It was a disaster artistically.`,
      `Between 1960 and 1969, Elvis made 27 films. Most were formulaic musical comedies — Kissin' Cousins, Harum Scarum, Girl Happy, Spinout — with thin plots, forgettable songs, and no serious dramatic challenge. Parker had negotiated studio deals that prioritised his own cut over creative quality, and Elvis grew quietly miserable. He wanted to be a serious actor. He had been offered the role of Chance Wayne in Sweet Bird of Youth (which went to Paul Newman) and was interested in West Side Story, but Parker blocked anything that didn't include a soundtrack album — his primary revenue stream.`,
      `The soundtrack albums sold millions. The films grossed reliably. And Elvis sank further into a gilded cage, surrounded at Graceland and on set by the Memphis Mafia, playing touch football at midnight, renting out Libertyland amusement park for private all-night sessions, and buying cars and jewellery for friends on impulse. He was bored, overweight by Hollywood standards, and increasingly dependent on prescription uppers and downers to manage his schedule.`,
      `The Beatles arrived in America in February 1964, and the cultural ground shifted beneath Elvis's feet. Suddenly the slick soundtrack Elvis felt dated. He watched the British Invasion with a mixture of admiration and dread. John Lennon once said that before Elvis, there was nothing. But by the mid-1960s, the king had been dethroned in the cultural conversation, even if the box office receipts hadn't caught up yet.`,
    ],
  },
  {
    period: '1968',
    title: "The '68 Comeback: The King Returns",
    body: [
      `By 1967, Colonel Parker was negotiating a Christmas television special with NBC — originally conceived as a holiday sing-along with Elvis in a tuxedo crooning carols. Then director Steve Binder got involved. Binder, a young television director with an eye for spontaneity, pushed back hard against the safe concept. He believed Elvis still had something raw and real inside him, and he fought to let it out.`,
      `The result, broadcast on December 3, 1968, is one of the most electric hours in television history. The centrepiece was an informal, semi-circular jam session with Elvis in a black leather suit, sitting knee-to-knee with old bandmates Scotty Moore and D.J. Fontana, and telling stories and playing songs in front of a small audience. No teleprompter. No safety net. Just Elvis, 33 years old, looking like a panther, singing like the world depended on it.`,
      `He sang "That's All Right," "Heartbreak Hotel," "Blue Suede Shoes," "Lawdy Miss Clawdy" — songs he hadn't performed live in years — with a ferocity that shocked everyone in the room. Between songs he was funny, self-deprecating, occasionally profane. It was the most human anyone had seen him in a decade. The special, later titled simply Elvis, drew 42% of the television audience that night. Critics called it a revelation. Rolling Stone said it was the finest music special ever made. Elvis reportedly wept watching the playback.`,
      `The special produced one original song, written by Mac Davis: "If I Can Dream" — a gospel-influenced ballad that closed the show and addressed the turbulent America of 1968, the year of the King assassination, Robert Kennedy's murder, and Vietnam. Elvis threw everything into it. It was not a safe, commercial gesture. It was a statement.`,
    ],
  },
  {
    period: '1969 – 1973',
    title: 'Las Vegas: The Colossus',
    body: [
      `Flush with the energy of the Comeback Special, Elvis entered American Sound Studio in Memphis in January 1969 and recorded what many consider his greatest album: From Elvis in Memphis. Working with producer Chips Moman and a team of world-class session musicians, Elvis cut "Suspicious Minds," "In the Ghetto," "Kentucky Rain," and "Mama Liked the Roses" in a two-week burst of creative liberation — free, for the first time in years, from Hollywood obligations and Parker's constant supervision.`,
      `"Suspicious Minds," released in August 1969, became his first #1 single since "Good Luck Charm" in 1962. The song — a dramatic, seven-minute epic about a relationship trapped by jealousy — was perfectly suited to his voice in its full, mature power. It remains one of the defining recordings of his career.`,
      `That same month, Elvis opened at the International Hotel in Las Vegas — a 2,000-seat showroom — for a 28-night run. He had not performed live in eight years. The band he assembled was extraordinary: James Burton on lead guitar, Glen D. Hardin on piano, Jerry Scheff on bass, Ronnie Tutt on drums, and the Sweet Inspirations plus the Imperials providing the vocal backdrop. The opening night performance has been described by everyone present as one of the greatest live shows in popular music history. Cary Grant was in the audience. Fats Domino. Sam Phillips. Pat Boone. They all gave standing ovations.`,
      `The Vegas years produced some of his most iconic images — the white jumpsuits, designed by Bill Belew, with their jewelled eagles and peacocks; the long scarves thrown into the audience; the karate moves incorporated into live performance. For the first few years, it was an artistic triumph. He filmed the documentary Elvis: That's the Way It Is (1970) and the satellite concert Aloha from Hawaii (1973), which was watched by an estimated 1.5 billion people worldwide — more than the Apollo moon landings.`,
    ],
  },
  {
    period: '1967 – 1973',
    title: 'Love, Marriage & Lisa Marie',
    body: [
      `Elvis and Priscilla Beaulieu married on May 1, 1967, in a private ceremony in Suite 1222 of the Aladdin Hotel in Las Vegas. The ceremony lasted eight minutes. There were fourteen guests. Colonel Parker had orchestrated the whole event as a press moment, tipping off photographers and holding a reception for the media immediately after. Elvis wore a black brocade tuxedo; Priscilla wore a white chiffon gown with a chapel train she had designed herself. She later wrote that on the morning of the wedding she was terrified — less of marriage than of finally being alone with Elvis without the buffer of Graceland's constantly crowded rooms.`,
      `On February 1, 1968 — exactly nine months after the wedding — Lisa Marie Presley was born at Baptist Memorial Hospital in Memphis, weighing six pounds, fifteen ounces. Elvis was overwhelmed with joy. He held her in the delivery room and reportedly wept. He called her "Buttonhead" and "Yisa." For a brief window, Graceland felt like a real home: Elvis teaching himself to bathe a newborn, Priscilla watching him pace the nursery floor at 3 a.m., talking softly to his daughter.`,
      `But the peace didn't last. The Vegas residency began in 1969 and consumed his life: rehearsals, two shows a night, recording sessions, an entourage that never slept. Elvis and Priscilla grew apart across the miles between Memphis and Las Vegas. She was lonely and restless; he was surrounded by women who adored him and a bubble of enablers who told him only what he wanted to hear. She began studying karate with instructor Mike Stone in 1971 and fell in love with him. She told Elvis in January 1972. He was devastated — genuinely, completely shattered, in a way he hadn't been since his mother died.`,
      `They separated in February 1972. The divorce was finalized on October 9, 1973, in Santa Monica, California. They divided their assets and agreed to joint custody of Lisa Marie. Elvis cried in the courtroom. Despite everything — the infidelities, the pills, the years of distance — he had never stopped loving her in his fashion. Priscilla later said that walking away was the hardest thing she had ever done.`,
      `Lisa Marie split her time between her parents' worlds — the disciplined, fashionable life Priscilla was building in Los Angeles, and the chaotic, nocturnal Graceland universe where her father lived by no clock at all. She adored him. He spoiled her extravagantly — horses, trips, late-night drives through Memphis — and she saw through the circus around him to the gentle, funny man underneath. She was nine years old when he died. She spent the rest of her life processing that loss in public, through music, through marriage, and through advocacy for his legacy. She died on January 12, 2023, at age 54, and is buried at Graceland beside her father.`,
    ],
  },
  {
    period: '1973 – 1977',
    title: 'The Downfall: A Man Consumed',
    body: [
      `The divorce from Priscilla in October 1973 broke something in Elvis. He had already been in and out of Baptist Memorial Hospital through 1973 for what was publicly described as fatigue and breathing problems — in reality, a constellation of conditions exacerbated by years of prescription drug abuse. He was addicted to Demerol, Dilaudid, Quaalude, Placidyl, Dexedrine, and a rotating pharmacy of barbiturates and sleeping pills, prescribed by his personal physician, Dr. George Nichopoulos ("Dr. Nick"), who later lost his medical licence over the matter.`,
      `The Vegas engagements continued — Parker needed the money, and so did Elvis, who spent lavishly on gifts, planes, jewellery, and his entourage. But the shows became increasingly erratic. Sometimes he was extraordinary; other nights he forgot lyrics, rambled between songs, or arrived on stage visibly impaired. His weight fluctuated wildly — the result of bingeing (his favourite was a deep-fried peanut butter, banana, and bacon sandwich known as the "Fool's Gold Loaf") and the metabolic disruption of the drug cocktails.`,
      `He was hospitalised five times in the final two years of his life. His colon, damaged by years of opioid use, was distended and functioned poorly — an autopsy revealed that at the time of death, Elvis's colon was two to three times the normal size and impacted. His face was puffy, his eyes glazed. He gained and lost the same 40 pounds repeatedly. Close friends begged Parker to cancel tours and get Elvis proper help. Parker refused — he owed the Las Vegas Hilton over a million dollars in gambling debts and needed the show income.`,
      `Red West, Sonny West, and Dave Hebler — three members of the Memphis Mafia who had been with Elvis for years — were abruptly fired by Vernon Presley in 1976, ostensibly to cut costs. Bitter, they co-authored a tell-all book, Elvis: What Happened?, which was published just days before his death. Elvis read galley copies before publication and was devastated. He knew it was true. He had lost the ability to pretend otherwise.`,
      `On the morning of August 16, 1977, Elvis was scheduled to depart Graceland for the first date of a new tour. He read in the bathroom for several hours, something he routinely did through the night. Girlfriend Ginger Alden woke at 2:30 p.m. and found him on the floor, unresponsive. Paramedics arrived and rushed him to Baptist Memorial Hospital. He was pronounced dead at 3:30 p.m. The official cause of death was listed as cardiac arrhythmia — but multiple forensic cardiologists and the coroner's team have since argued that polypharmacy — the toxic accumulation of multiple prescription drugs — was the true cause. He was 42 years old.`,
      `The outpouring of grief was unlike anything since the death of a head of state. Over 75,000 people lined the streets outside Graceland. The phone lines of radio stations across America were jammed for days. His face appeared on the covers of every major newspaper and magazine in the world. President Carter issued a statement calling Elvis "a symbol of his country's vitality, rebelliousness, and good humour." In the decades since, his music has never gone out of print, Graceland has never gone quiet, and the question of who he really was has never stopped being asked.`,
    ],
  },
  {
    period: '1977 – Present',
    title: 'The Eternal King: Legacy, Las Vegas & Global Icon',
    body: [
      `Elvis Presley has been dead for nearly fifty years. He has never been less present. His recordings sell hundreds of thousands of copies each year. Graceland — opened to the public in 1982 by Priscilla, who transformed it from a crumbling memory into a thriving landmark — draws over 600,000 visitors annually, making it the second most-visited private residence in the United States after the White House. His image appears on stamps in over 40 countries. A hologram of him has performed in concert. AI-reconstructed versions of his voice have topped streaming charts.`,
      `The global reach of his influence is staggering and still not fully mapped. In Japan, where he has been worshipped since the 1950s, tribute artists perform to packed venues every night. In Scandinavia, there are more Elvis impersonators per capita than anywhere else on Earth. In India, his hip movements became the template for Bollywood choreography. In Brazil, his music merged with baião and forró to create entirely new genres. Bob Dylan, Bruce Springsteen, Bono, Thom Yorke, Alicia Keys, Justin Timberlake — all have cited him as the DNA of what they do.`,
      `In America, his place in the cultural fabric goes beyond music. He is woven into the mythology of the country itself — the dirt-poor Southern boy who became the most famous person on the planet, who crossed the racial lines of mid-century America through music, who was consumed by the same machinery that created him. He is a Rorschach test: liberals see in him a story of appropriation; conservatives see a patriot who served his country and loved his mother; rock fans see the original; gospel fans see the believer; the Memphis community sees their native son. All of them are right.`,
      `Las Vegas carries his shadow in almost every block. The city was built on the same era that built Elvis's second act, and the two are inseparable. The Westgate Las Vegas — formerly the International Hotel, where Elvis opened in 1969 — still hosts an Elvis suite on the 30th floor: the actual suite he lived in during his residencies, preserved with his original furniture, his piano, his gold drapes. The hotel's showroom, now called the International Theater, keeps a full-size Elvis statue at its entrance. His name appears in the marquee history in the lobby like a hall of fame unto himself: 837 consecutive sold-out shows between 1969 and 1976.`,
      `On Fremont Street — the old downtown strip that Las Vegas was built on — the neon signs and the sequined nostalgia feel like Elvis's natural habitat. The Golden Gate Hotel, the oldest casino in Vegas, has played his music in its lobby since the 1970s. Street performers in white jumpsuits work the crowds outside the Fremont Street Experience seven nights a week. The city holds an official Elvis Festival. The marriage chapels that made Las Vegas famous were popularised in part because Elvis married Priscilla there. The "Elvis chapel wedding" is an industry unto itself.`,
      `Baz Luhrmann's 2022 biopic Elvis, starring Austin Butler in a performance that earned a BAFTA and an Oscar nomination, introduced Elvis to a generation born long after his death — and broke box office records in the process. Luhrmann's follow-up, EPiC: Elvis Presley in Concert (2026), assembled 68 boxes of previously unknown concert footage from a salt mine in Kansas — footage that had been sitting undiscovered for decades — and restored it for IMAX. Critics described the result as watching a man who had been dead for 50 years come back to life on a 70-foot screen.`,
      `What persists, beyond the industry and the iconography, is the music. "That's All Right." "Mystery Train." "Heartbreak Hotel." "Hound Dog." "Suspicious Minds." "In the Ghetto." "An American Trilogy." "If I Can Dream." These are not oldies. They are not nostalgia. They are primary documents — recordings that contain, in compressed form, everything America was and wanted to be in the second half of the twentieth century. As long as music exists, the voice of Elvis Presley will be part of what it means to be human and alive and trying to feel something true.`,
    ],
  },
];

// (figures array follows below)

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export default function Biography() {
  return (
    <div className="page bio-page">
      <motion.h1 className="page-title" {...fadeUp}>Biography</motion.h1>
      <motion.p className="page-subtitle" {...fadeUp} transition={{ duration: 0.55, delay: 0.1 }}>
        The life and legacy of Elvis Aaron Presley
      </motion.p>
      <div className="divider" />

      {/* ── CHAPTERS ── */}
      {chapters.map((ch, ci) => (
        <motion.section
          key={ch.period}
          className="bio-chapter"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="chapter-header">
            <span className="chapter-period">{ch.period}</span>
            <h2 className="chapter-title">{ch.title}</h2>
          </div>
          <div className="chapter-body">
            {ch.body.map((para, pi) => (
              <p key={pi}>{para}</p>
            ))}
          </div>
        </motion.section>
      ))}

      {/* ── KEY FIGURES ── */}
      <motion.h2
        className="section-title figures-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        The People Around the King
      </motion.h2>
      <div className="divider" />

      <div className="figures-grid">
        {figures.map((fig, i) => (
          <motion.div
            key={fig.name}
            className="figure-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <div className="figure-header">
              <span className="figure-emoji">{fig.emoji}</span>
              <div>
                <h3 className="figure-name">{fig.name}</h3>
                <span className="figure-role">{fig.role}</span>
              </div>
            </div>
            <div className="figure-bio">
              {fig.bio.split('\n\n').map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
