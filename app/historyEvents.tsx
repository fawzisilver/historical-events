
export type HistoricalEvents = {
    id: number;
    title: string;
    description: string;
    position: [number, number];
    category: string;
    image: string;
    funFact: string;
  }

  export const historyEvents: HistoricalEvents[] = [
    {
      id: 1,
      title: "First Manned Moon Landing",
      description: "On July 20, 1969, Apollo 11 landed the first humans on the Moon. Neil Armstrong became the first person to walk on its surface, marking a major milestone in space exploration.",
      position: [0.6741, 23.4729], // Moon (Tranquility Base)
      category: "Science",
      image: "Apollo11.avif",
      funFact: "Neil Armstrong’s famous quote was accidentally misquoted due to static, leaving out 'a' before 'man.'"
  },
  {
      id: 2,
      title: "Van Gogh Paints Starry Night",
      description: "In 1889, Vincent van Gogh painted Starry Night, a masterpiece that later became one of the most recognized works of post-impressionism.",
      position: [43.946, 5.7721],
      category: "Art",
      image: "/starry_night_full.jpg",
      funFact: "Van Gogh painted Starry Night while in a mental asylum in Saint-Rémy, France."
  },
  {
      id: 3,
      title: "Battle of Waterloo",
      description: "The Battle of Waterloo took place on June 18, 1815, marking Napoleon Bonaparte's final defeat. This battle effectively ended the Napoleonic Wars.",
      position: [50.6807, 4.4124],
      category: "War",
      image: "/waterloo.webp",
      funFact: "Waterloo’s defeat ended Napoleon's rule and reshaped Europe's political landscape."
  },
  {
      id: 4,
      title: "Invention of the Telephone by Alexander Graham Bell",
      description: "In 1876, Alexander Graham Bell patented the telephone, revolutionizing global communication. It laid the groundwork for modern telecommunications.",
      position: [42.3601, -71.0589],
      category: "Science",
      image: "/alexander.jpg",
      funFact: "Bell’s first words on the telephone: “Mr. Watson, come here, I want to see you.”"
  },
  {
      id: 5,
      title: "Pele Wins First World Cup",
      description: "In 1958, 17-year-old Pele led Brazil to its first FIFA World Cup victory. He became an international soccer legend and remains a symbol of Brazil's dominance in the sport.",
      position: [-22.9068, -43.1729],
      category: "Sports",
      image: "/Pele Wins First World Cup.jpg",
      funFact: "Pele was just 17 when he led Brazil to World Cup victory, scoring twice in the final."
  },
  {
      id: 6,
      title: "American Civil War Begins",
      description: "The American Civil War began in 1861 following the secession of southern states from the Union. It became one of the deadliest conflicts in U.S. history.",
      position: [32.7522, -79.8746],
      category: "War",
      image: "/American Civil War Begins.jpg",
      funFact: "The Civil War led to over 600,000 deaths, transforming the future of the United States."
  },
  {
      id: 7,
      title: "First Successful Human Heart Transplant",
      description: "On December 3, 1967, Dr. Christiaan Barnard performed the first successful human heart transplant in South Africa. It marked a major advancement in medicine.",
      position: [-33.9258, 18.4232],
      category: "Science",
      image: "/First Successful Human Heart Transplant.jpg",
      funFact: "The recipient lived for 18 days, a historic step for future heart transplants."
  },
  {
      id: 8,
      title: "Claude Monet Paints Water Lilies",
      description: "Monet's Water Lilies series, created from 1899 to 1926, became one of the greatest achievements of Impressionist art. It inspired countless artists.",
      position: [49.0833, 1.5333],
      category: "Art",
      image: "/Claude Monet Paints Water Lilies.jpg",
      funFact: "Monet painted over 250 versions of Water Lilies, inspired by his garden."
  },
  {
      id: 9,
      title: "Nelson Mandela Released from Prison",
      description: "On February 11, 1990, Nelson Mandela was released from prison after 27 years. His release signaled the beginning of the end of apartheid in South Africa.",
      position: [-33.9249, 18.4241],
      category: "Politics",
      image: "/Nelson Mandela Released from Prison.jpg",
      funFact: "After 27 years, Mandela’s release marked the fall of apartheid in South Africa."
  },
  {
      id: 10,
      title: "First Vatican Council",
      description: "The First Vatican Council, held between 1869 and 1870, established papal infallibility as a doctrine of the Catholic Church. It marked a pivotal moment in the relationship between the church and modern states.",
      position: [41.9029, 12.4534],
      category: "Religion",
      image: "/First Vatican Council.webp",
      funFact: "The council declared the Pope infallible on matters of faith and morals."
  },
  {
    id: 11,
    title: "Discovery of DNA Structure by Watson and Crick",
    description: "In 1953, James Watson and Francis Crick discovered the double-helix structure of DNA. This discovery paved the way for modern genetics.",
    position: [51.7592, -1.2623],
    category: "Science",
    image: "/Discovery of DNA Structure by Watson and Crick.jpg",
    funFact: "DNA’s structure was discovered in a pub, the Eagle, in Cambridge where Watson and Crick celebrated."
},
{
    id: 12,
    title: "Battle of Stalingrad",
    description: "The Battle of Stalingrad took place from 1942 to 1943, marking a major turning point in World War II. The Soviet victory dealt a significant blow to Nazi Germany.",
    position: [48.708, 44.5133],
    category: "War",
    image: "/Battle of Stalingrad.jpg",
    funFact: "Stalingrad was one of WWII's bloodiest battles, with an estimated 2 million casualties."
},
{
    id: 13,
    title: "Isaac Newton's Laws of Motion",
    description: "In 1687, Isaac Newton published his laws of motion in the 'Principia.' These laws became the foundation for classical mechanics.",
    position: [51.752, -1.2577],
    category: "Science",
    image: "/Isaac Newton's Laws of Motion.png",
    funFact: "Newton’s laws transformed physics, explaining everything from falling apples to planetary orbits."
},
{
    id: 14,
    title: "Muhammad Ali Wins Rumble in the Jungle",
    description: "In 1974, Muhammad Ali defeated George Foreman in Kinshasa, Zaire, reclaiming the world heavyweight title. This victory solidified Ali's legacy as one of the greatest boxers in history.",
    position: [-4.4419, 15.2663],
    category: "Sports",
    image: "/Muhammad Ali Wins Rumble in the Jungle.jpg",
    funFact: "Ali won using his 'rope-a-dope' technique, letting Foreman tire himself out before attacking."
},
{
    id: 15,
    title: "Rembrandt Paints The Night Watch",
    description: "In 1642, Rembrandt painted The Night Watch, one of the most famous works from the Dutch Golden Age. It remains a masterpiece of Baroque art.",
    position: [52.3667, 4.8945],
    category: "Art",
    image: "/Rembrandt Paints The Night Watch.webp",
    funFact: "The Night Watch was trimmed in 1715 to fit a new frame, losing parts of the original."
},
{
    id: 16,
    title: "Albert Einstein Publishes the Theory of Relativity",
    description: "In 1915, Albert Einstein published his theory of general relativity. It reshaped our understanding of space, time, and gravity.",
    position: [52.5163, 13.3777],
    category: "Science",
    image: "/Albert Einstein Publishes the Theory of Relativity.avif",
    funFact: "Einstein’s relativity predicted black holes and time dilation, profoundly influencing modern physics."
},
{
    id: 17,
    title: "Second Vatican Council",
    description: "The Second Vatican Council, held between 1962 and 1965, brought sweeping reforms to the Catholic Church. It modernized liturgy, improved relations with other religions, and addressed social issues.",
    position: [41.9029, 12.4534],
    category: "Religion",
    image: "/Second Vatican Council.jpg",
    funFact: "The Council’s reforms made Mass available in local languages, not just Latin."
},
{
    id: 18,
    title: "Barack Obama Becomes U.S. President",
    description: "On January 20, 2009, Barack Obama was inaugurated as the 44th President of the United States, becoming the country's first African-American president.",
    position: [38.9072, -77.0369],
    category: "Politics",
    image: "/Barack Obama Becomes U.S. President.jpg",
    funFact: "Obama won the Nobel Peace Prize in 2009, just months into his first term."
},
{
    id: 19,
    title: "Salvador Dalí Paints The Persistence of Memory",
    description: "In 1931, Salvador Dalí painted The Persistence of Memory, a surrealist masterpiece known for its melting clocks. It became a symbol of modern art.",
    position: [41.379, 2.1699],
    category: "Art",
    image: "/Salvador Dalí Paints The Persistence of Memory.jpg",
    funFact: "Dalí’s melting clocks were inspired by melting cheese, according to the artist."
},
{
    id: 20,
    title: "The Korean War Begins",
    description: "The Korean War broke out in 1950 when North Korea invaded South Korea. It drew in major powers like the United States and China.",
    position: [37.5665, 126.9780],
    category: "War",
    image: "/The Korean War Begins.jpg",
    funFact: "The Korean War is often called 'The Forgotten War' due to limited media coverage."
},
{
  id: 21,
  title: "Invention of the Light Bulb by Thomas Edison",
  description: "In 1879, Thomas Edison invented the practical electric light bulb. It revolutionized daily life by providing a reliable source of light.",
  position: [40.7357, -74.1724],
  category: "Science",
  image: "/Invention of the Light Bulb by Thomas Edison.webp",
  funFact: "Edison tested over 3,000 designs before creating a practical light bulb."
},
{
  id: 22,
  title: "Completion of the Sistine Chapel Ceiling",
  description: "Michelangelo completed the ceiling of the Sistine Chapel in Vatican City. His masterpiece became one of the most renowned works of art in history.",
  position: [41.9029, 12.4545],
  category: "Art",
  image: "/Completion of the Sistine Chapel Ceiling.jpg",
  funFact: "Michelangelo painted the Sistine Chapel ceiling while standing on scaffolding he designed himself."
},
{
  id: 23,
  title: "Discovery of Penicillin",
  description: "In 1928, Alexander Fleming discovered penicillin, the first antibiotic. This breakthrough revolutionized medicine and saved countless lives by treating bacterial infections.",
  position: [51.5074, -0.1278],
  category: "Science",
  image: "/Discovery of Penicillin.jpg",
  funFact: "Penicillin was discovered accidentally by Alexander Fleming in a petri dish contaminated by mold."
},
{
  id: 24,
  title: "Operation Desert Storm",
  description: "Operation Desert Storm began in January 1991, as coalition forces led by the U.S. launched a military campaign to liberate Kuwait from Iraqi occupation.",
  position: [29.3759, 47.9774],
  category: "War",
  image: "/Operation Desert Storm.jpg",
  funFact: "Operation Desert Storm was one of the first wars with live televised coverage."
},
{
  id: 25,
  title: "The Birth of Venus by Botticelli",
  description: "In the 1480s, Botticelli painted The Birth of Venus, which became a cornerstone of Renaissance art. It is celebrated for its beauty and symbolism.",
  position: [43.7687, 11.2569],
  category: "Art",
  image: "/The Birth of Venus by Botticelli.avif",
  funFact: "The Birth of Venus is one of the earliest works painted on canvas instead of wood."
},
{
  id: 26,
  title: "Fall of the Berlin Wall",
  description: "On November 9, 1989, the Berlin Wall fell, symbolizing the end of the Cold War. This marked the beginning of Germany's reunification.",
  position: [52.5163, 13.3777],
  category: "Politics",
  image: "/Fall of the Berlin Wall.jpg",
  funFact: "The fall of the Berlin Wall inspired global celebrations and symbolized freedom."
},
{
  id: 27,
  title: "Invention of the World Wide Web by Tim Berners-Lee",
  description: "In 1989, Tim Berners-Lee invented the World Wide Web. This invention transformed how we communicate and access information globally.",
  position: [51.5074, -0.1278],
  category: "Science",
  image: "/Invention of the World Wide Web by Tim Berners-Lee.webp",
  funFact: "The first website, created by Tim Berners-Lee, explained how the World Wide Web works."
},
{
  id: 28,
  title: "The Spanish Civil War Begins",
  description: "The Spanish Civil War started in 1936, pitting Nationalists against Republicans. It was a precursor to the ideological battles of World War II.",
  position: [40.4168, -3.7038],
  category: "War",
  image: "/The Spanish Civil War Begins.webp",
  funFact: "The Spanish Civil War drew in international volunteers fighting on both sides."
},
{
  id: 29,
  title: "First Artificial Satellite (Sputnik 1)",
  description: "On October 4, 1957, the Soviet Union launched Sputnik 1, the first artificial satellite. It marked the beginning of the space age.",
  position: [55.7558, 37.6173],
  category: "Science",
  image: "/First Artificial Satellite (Sputnik 1).jpg",
  funFact: "Sputnik 1 orbited Earth every 96 minutes, sparking the space race."
},
{
  id: 30,
  title: "Pope John Paul II Becomes Pope",
  description: "On October 16, 1978, Karol Wojtyła was elected Pope John Paul II, becoming the first non-Italian pope in 455 years. His papacy lasted for over 26 years, and he became one of the most influential religious leaders in history.",
  position: [41.9029, 12.4534],
  category: "Religion",
  image: "/Pope John Paul II Becomes Pope.jpg",
  funFact: "Pope John Paul II traveled more than any other pope in history."
},
{
  id: 31,
  title: "The 1936 Berlin Olympics",
  description: "The 1936 Olympics in Berlin became infamous for Adolf Hitler's attempts to promote Aryan supremacy. However, African-American athlete Jesse Owens won four gold medals, defying Nazi propaganda.",
  position: [52.5200, 13.4050],
  category: "Sports",
  image: "/The 1936 Berlin Olympics.webp",
  funFact: "Jesse Owens’ victories in Berlin defied Hitler’s propaganda, showcasing equality and sportsmanship."
},
{
  id: 32,
  title: "Independence of India",
  description: "On August 15, 1947, India gained independence from British colonial rule. This marked the end of British Raj and led to the partition of India and Pakistan.",
  position: [28.6139, 77.2090],
  category: "Politics",
  image: "/Independence of India.jpg",
  funFact: "India's independence also led to Pakistan’s formation, resulting in massive migration and violence."
},
{
  id: 33,
  title: "The Great Schism",
  description: "In 1054, the Great Schism between the Roman Catholic Church and the Eastern Orthodox Church occurred. This division remains one of the most significant events in Christian history.",
  position: [41.9029, 12.4534],
  category: "Religion",
  image: "/The Great Schism.jpg",
  funFact: "The Great Schism resulted in a permanent division between the Catholic and Orthodox Churches."
},
{
  id: 34,
  title: "The End of Apartheid",
  description: "In 1994, the system of apartheid in South Africa was officially dismantled following the election of Nelson Mandela. It marked a new era of racial equality and democracy in the country.",
  position: [-25.7461, 28.1881],
  category: "Politics",
  image: "/The End of Apartheid.webp",
  funFact: "The end of apartheid led to South Africa’s first multi-racial election in 1994."
},
{
  id: 35,
  title: "The First FIFA World Cup",
  description: "In 1930, the first-ever FIFA World Cup was held in Uruguay. The host nation emerged as the champions, defeating Argentina in the final.",
  position: [-34.9011, -56.1645],
  category: "Sports",
  image: "/The First FIFA World Cup.jpg",
  funFact: "The first FIFA World Cup had only 13 teams and was won by Uruguay."
},
{
  id: 36,
  title: "Signing of the Magna Carta",
  description: "In 1215, King John of England signed the Magna Carta, a document that limited the power of the monarchy and laid the foundation for modern democracy.",
  position: [51.4975, -0.1357],
  category: "Politics",
  image: "/Signing of the Magna Carta.webp",
  funFact: "Magna Carta influenced democratic principles worldwide, including the U.S. Constitution."
},
{
  id: 37,
  title: "The Protestant Reformation",
  description: "In 1517, Martin Luther published his 95 Theses, criticizing the Catholic Church. This act sparked the Protestant Reformation, which led to the division of Christianity into Catholic and Protestant branches.",
  position: [51.1657, 10.4515],
  category: "Religion",
  image: "/The Protestant Reformation.jpg",
  funFact: "Martin Luther’s 95 Theses were nailed to a church door, sparking religious reform across Europe."
},
{
  id: 38,
  title: "Fidel Castro Comes to Power",
  description: "In 1959, Fidel Castro and his revolutionary forces overthrew the Cuban government, establishing a communist regime. Castro would remain in power for nearly five decades.",
  position: [23.1136, -82.3666],
  category: "Politics",
  image: "/Fidel Castro Comes to Power.webp",
  funFact: "Castro survived over 600 assassination attempts during his time in power."
},
{
  id: 39,
  title: "John F. Kennedy Assassination",
  description: "On November 22, 1963, U.S. President John F. Kennedy was assassinated while riding in a motorcade in Dallas, Texas. His death shocked the world and remains a topic of speculation.",
  position: [32.7767, -96.7970],
  category: "Politics",
  image: "/John F. Kennedy Assassination.jpg",
  funFact: "JFK's assassination sparked numerous conspiracy theories still discussed today."
},
{
  id: 40,
  title: "First Woman in Space: Valentina Tereshkova",
  description: "In 1963, Valentina Tereshkova of the Soviet Union became the first woman to travel to space aboard Vostok 6. This marked a significant milestone in space exploration.",
  position: [55.7558, 37.6173],
  category: "Science",
  image: "/First Woman in Space Valentina Tereshkova.jpg",
  funFact: "Valentina Tereshkova orbited Earth 48 times on her historic space mission."
},
{
  id: 41,
  title: "Muhammad's First Revelation",
  description: "Around 610 CE, the Prophet Muhammad received his first revelation from the Angel Gabriel in a cave near Mecca. This event is considered the beginning of Islam.",
  position: [21.4225, 39.8262],
  category: "Religion",
  image: "/Muhammad's First Revelation.jpg",
  funFact: "Muhammad’s first revelation marked Islam's beginning, significantly impacting Arabian society and religious history."
},
{
  id: 42,
  title: "The First Tour de France",
  description: "In 1903, the first Tour de France bicycle race was held. It has since become one of the most famous and prestigious cycling events in the world.",
  position: [48.8566, 2.3522],
  category: "Sports",
  image: "/The First Tour de France.webp",
  funFact: "The 1903 Tour de France covered nearly 2,500 kilometers, marking the popularity of endurance cycling."
},
{
  id: 43,
  title: "The Cuban Missile Crisis",
  description: "The Cuban Missile Crisis of 1962 brought the world to the brink of nuclear war. It was a tense 13-day standoff between the U.S. and the Soviet Union over the presence of Soviet missiles in Cuba.",
  position: [23.1136, -82.3666],
  category: "War",
  image: "/The Cuban Missile Crisis.jpg",
  funFact: "The Cuban Missile Crisis led the world close to nuclear war during a tense 13-day standoff."
},
{
  id: 44,
  title: "Rwandan Genocide",
  description: "In 1994, nearly 800,000 people, mostly Tutsi, were killed in a genocide carried out by the Hutu-led government in Rwanda. The event remains one of the darkest chapters in African history.",
  position: [-1.9441, 30.0619],
  category: "War",
  image: "/Rwandan Genocide.avif",
  funFact: "Nearly 800,000 Tutsi were killed in the 1994 Rwandan genocide, a dark chapter in African history."
},
{
  id: 45,
  title: "Women's Suffrage in the U.S.",
  description: "In 1920, the 19th Amendment to the U.S. Constitution was ratified, granting women the right to vote. This was a major victory for the women's suffrage movement.",
  position: [38.9072, -77.0369],
  category: "Politics",
  image: "/suffrage-protest.jpg",
  funFact: "The 19th Amendment’s ratification in 1920 marked a major milestone for women’s rights in the U.S."
},
{
  id: 46,
  title: "Construction of the Colosseum",
  description: "The Colosseum in Rome, Italy, was completed around 80 CE. It became a symbol of Roman engineering and entertainment, hosting gladiatorial contests and public spectacles.",
  position: [41.8902, 12.4922],
  category: "Art",
  image: "/Construction of the Colosseum.webp",
  funFact: "Rome’s Colosseum, completed in 80 CE, hosted grand spectacles and became an engineering marvel."
},
{
  id: 47,
  title: "Formation of the European Union",
  description: "The European Union was formally established in 1993 with the signing of the Maastricht Treaty. It aimed to foster economic and political cooperation among its member states.",
  position: [50.8503, 4.3517],
  category: "Politics",
  image: "/Formation of the European Union.webp",
  funFact: "The EU’s 1993 founding fostered political and economic cooperation among European nations."
},
{
  id: 48,
  title: "Babe Ruth's 60-Home Run Season",
  description: "In 1927, American baseball player Babe Ruth hit 60 home runs in a single season, setting a record that stood for decades. He remains one of the greatest athletes in the sport's history.",
  position: [40.7128, -74.0060],
  category: "Sports",
  image: "/Babe Ruth's 60-Home Run Season.webp",
  funFact: "Babe Ruth's legendary 1927 season set a record with 60 home runs, inspiring generations of athletes."
},
{
  id: 49,
  title: "The Wright Brothers' First Flight",
  description: "On December 17, 1903, Orville and Wilbur Wright achieved the first powered, controlled flight at Kitty Hawk, North Carolina. This marked the birth of modern aviation.",
  position: [36.1313, -75.7466],
  category: "Science",
  image: "/The Wright Brothers' First Flight.webp",
  funFact: "The Wright brothers’ 1903 flight revolutionized aviation, marking humanity’s first controlled, powered flight."
},
{
  id: 50,
  title: "The French Revolution Begins",
  description: "The French Revolution began in 1789 with the storming of the Bastille. It led to the fall of the monarchy, the rise of Napoleon, and widespread political and social changes across Europe.",
  position: [48.8566, 2.3522],
  category: "Politics",
  image: "/The French Revolution Begins.jpg",
  funFact: "The storming of the Bastille in 1789 signified the start of the French Revolution and societal transformation."
},
{
  id: 51,
  title: "Yuri Gagarin Becomes the First Human in Space",
  description: "In 1961, Soviet cosmonaut Yuri Gagarin became the first human to journey into outer space aboard Vostok 1. His mission marked a major milestone in the space race.",
  position: [55.7558, 37.6173],
  category: "Science",
  image: "/Yuri Gagarin Becomes the First Human in Space.jpg",
  funFact: "Yuri Gagarin’s 1961 spaceflight made him an international hero and sparked global fascination with space."
},
{
  id: 52,
  title: "The Olympics Return to Greece (2004)",
  description: "The 2004 Summer Olympics were held in Athens, Greece, marking a return to the birthplace of the ancient Olympic Games. It was the first time Greece hosted the Olympics since 1896.",
  position: [37.9838, 23.7275],
  category: "Sports",
  image: "/The Olympics Return to Greece (2004).jpg",
  funFact: "Athens hosted the 2004 Olympics, celebrating the Games’ ancient origins and modern athletic achievements."
},
{
  id: 53,
  title: "Assassination of Julius Caesar",
  description: "In 44 BCE, Roman dictator Julius Caesar was assassinated by a group of senators, including Brutus and Cassius. His death led to the fall of the Roman Republic and the rise of the Roman Empire.",
  position: [41.9028, 12.4964],
  category: "Politics",
  image: "/Assassination of Julius Caesar.jpg",
  funFact: "Caesar’s assassination ended the Roman Republic, marking a pivotal moment in ancient history."
},
{
  id: 54,
  title: "The Emancipation Proclamation",
  description: "On January 1, 1863, U.S. President Abraham Lincoln issued the Emancipation Proclamation, freeing all slaves in Confederate-held territory. It was a turning point in the American Civil War.",
  position: [38.9072, -77.0369],
  category: "Politics",
  image: "/The Emancipation Proclamation.webp",
  funFact: "Lincoln’s Emancipation Proclamation shifted the American Civil War’s purpose, focusing on freedom and equality."
},
{
  id: 55,
  title: "The Renaissance Begins",
  description: "The Renaissance, a cultural movement that began in Italy in the 14th century, saw a revival of interest in art, science, and philosophy. It marked the transition from the Middle Ages to the modern world.",
  position: [43.7696, 11.2558],
  category: "Art",
  image: "/The Renaissance Begins.webp",
  funFact: "The Renaissance fueled art, science, and cultural revival, ushering Europe into the modern era."
},
{
  id: 56,
  title: "Formation of NATO",
  description: "In 1949, the North Atlantic Treaty Organization (NATO) was formed as a military alliance between the U.S., Canada, and several Western European nations. It was created in response to the growing threat of Soviet expansion.",
  position: [50.8503, 4.3517],
  category: "Politics",
  image: "/Formation of NATO.jpg",
  funFact: "NATO's 1949 formation created a defense alliance to strengthen Western nations against Soviet expansion."
},
{
  id: 57,
  title: "The Inquisition Begins",
  description: "In 1478, the Spanish Inquisition was established to root out heresy within the Catholic Church. It became infamous for its brutal methods and persecution of Jews and Muslims.",
  position: [40.4168, -3.7038],
  category: "Religion",
  image: "/The Inquisition Begins.png",
  funFact: "The Spanish Inquisition aimed to enforce Catholic orthodoxy, becoming infamous for its harsh persecution methods."
},
{
  id: 58,
  title: "Neil Armstrong's Walk on the Moon",
  description: "On July 20, 1969, Neil Armstrong became the first human to walk on the Moon during NASA's Apollo 11 mission. His famous words 'That's one small step for man, one giant leap for mankind' remain iconic.",
  position: [0.6741, 23.4729],
  category: "Science",
  image: "/Neil Armstrong's Walk on the Moon.jpg",
  funFact: "Neil Armstrong’s 1969 moonwalk captivated millions, symbolizing the U.S. success in the space race."
},
{
  id: 59,
  title: "The Fall of Constantinople",
  description: "In 1453, the Ottoman Empire captured Constantinople, bringing an end to the Byzantine Empire. This event marked the rise of the Ottoman Empire as a major power in the Mediterranean.",
  position: [41.0082, 28.9784],
  category: "War",
  image: "/The Fall of Constantinople.jpg",
  funFact: "The 1453 fall of Constantinople marked the end of the Byzantine Empire, expanding Ottoman power."
},
{
  id: 60,
  title: "The Coronation of Queen Elizabeth II",
  description: "On June 2, 1953, Queen Elizabeth II was crowned as the monarch of the United Kingdom in a televised ceremony. Her reign became the longest in British history.",
  position: [51.5014, -0.1419],
  category: "Politics",
  image: "/The Coronation of Queen Elizabeth II.png",
  funFact: "Elizabeth II’s 1953 coronation was the first major event broadcast globally, solidifying television’s role in media."
},
{
  id: 61,
  title: "Establishment of the United Nations",
  description: "In 1945, the United Nations was founded in the aftermath of World War II to promote peace and cooperation among nations. It remains the largest international organization in the world.",
  position: [40.7128, -74.0060],
  category: "Politics",
  image: "/Establishment of the United Nations.jpg",
  funFact: "The UN was founded in 1945 to foster peace and global cooperation after the devastation of WWII."
},
{
  id: 62,
  title: "The Concorde's First Commercial Flight",
  description: "In 1976, the Concorde supersonic jet made its first commercial flight, cutting travel time between Europe and the U.S. in half. It remained a symbol of luxury air travel until it was retired in 2003.",
  position: [48.8566, 2.3522],
  category: "Science",
  image: "/The Concorde's First Commercial Flight.jpg",
  funFact: "The 1976 Concorde launch made supersonic travel a reality, cutting transatlantic flight times dramatically."
},
{
  id: 63,
  title: "The Black Death",
  description: "The Black Death, a devastating plague, swept across Europe in the 14th century, killing an estimated 25 million people. It had profound social and economic impacts on medieval Europe.",
  position: [51.1657, 10.4515],
  category: "Science",
  image: "/The Black Death.webp",
  funFact: "The Black Death killed an estimated 25 million people in Europe, reshaping medieval society and economics."
},
{
  id: 64,
  title: "The Construction of the Eiffel Tower",
  description: "Completed in 1889 for the World's Fair, the Eiffel Tower became a symbol of Paris and France. Originally criticized, it is now one of the most visited landmarks in the world.",
  position: [48.8584, 2.2945],
  category: "Art",
  image: "/The Construction of the Eiffel Tower.webp",
  funFact: "Initially criticized, the Eiffel Tower became one of the world’s most recognized symbols of France."
},
{
  id: 65,
  title: "The Berlin Airlift",
  description: "In 1948, the Soviet Union blocked access to West Berlin, prompting the Allies to launch the Berlin Airlift. Over the next year, planes delivered food and supplies to the city's residents.",
  position: [52.5200, 13.4050],
  category: "War",
  image: "/The Berlin Airlift.webp",
  funFact: "The Berlin Airlift provided food and supplies to West Berliners during the Soviet blockade of 1948-49."
},
{
  id: 66,
  title: "The Great Fire of London",
  description: "In 1666, a fire broke out in a bakery on Pudding Lane in London and spread rapidly, destroying much of the city. It led to major rebuilding efforts, including the construction of St. Paul's Cathedral.",
  position: [51.5074, -0.1278],
  category: "Science",
  image: "/The Great Fire of London.jpg",
  funFact: "The Great Fire of London in 1666 led to the city’s major rebuilding, including St. Paul’s Cathedral."
},
{
  id: 67,
  title: "The Spanish Armada Defeated",
  description: "In 1588, the Spanish Armada, sent by King Philip II of Spain to invade England, was defeated by the English navy. This marked a turning point in naval warfare and England's rise as a global power.",
  position: [50.7680, -1.2077],
  category: "War",
  image: "/The Spanish Armada Defeated.jpg",
  funFact: "The Spanish Armada's 1588 defeat marked England’s naval dominance, shifting European power dynamics."
},
{
  id: 68,
  title: "Mahatma Gandhi Leads the Salt March",
  description: "In 1930, Mahatma Gandhi led the Salt March, a nonviolent protest against British salt taxes in colonial India. The march became a symbol of resistance and played a key role in India's independence movement.",
  position: [22.5726, 88.3639],
  category: "Politics",
  image: "/Mahatma Gandhi Leads the Salt March.jpg",
  funFact: "Gandhi’s 1930 Salt March opposed British salt laws, becoming a symbolic act in India’s independence movement."
},
{
  id: 69,
  title: "The War of 1812",
  description: "The War of 1812 was fought between the United States and Britain over issues like trade restrictions and territorial expansion. It ended in a stalemate but solidified U.S. sovereignty.",
  position: [38.9072, -77.0369],
  category: "War",
  image: "/The War of 1812.webp",
  funFact: "The War of 1812 helped solidify U.S. sovereignty, showcasing resilience against Britain’s influence post-independence."
},
{
  id: 70,
  title: "The Harlem Renaissance",
  description: "The Harlem Renaissance was a cultural movement in the 1920s that celebrated African-American culture through literature, music, and art. It helped shape the identity of African Americans in the 20th century.",
  position: [40.8116, -73.9465],
  category: "Art",
  image: "/The Harlem Renaissance.jpg",
  funFact: "The 1920s Harlem Renaissance celebrated African-American art, music, and literature, inspiring future cultural movements."
},
{
  id: 71,
  title: "Wright Brothers' First Powered Flight",
  description: "On December 17, 1903, Orville and Wilbur Wright achieved the first powered, controlled flight at Kitty Hawk, North Carolina. This marked the birth of modern aviation.",
  position: [36.1313, -75.7466],
  category: "Science",
  image: "/Wright Brothers' First Powered Flight.jpg",
  funFact: "The Wright brothers’ 1903 flight at Kitty Hawk pioneered powered aviation, launching the era of flight."
},
{
  id: 72,
  title: "The United States Declares Independence",
  description: "On July 4, 1776, the American colonies declared their independence from Britain with the signing of the Declaration of Independence. This marked the birth of the United States.",
  position: [39.9526, -75.1652],
  category: "Politics",
  image: "/The United States Declares Independence.webp",
  funFact: "The 1776 Declaration of Independence officially marked the American colonies’ break from Britain."
},
{
  id: 73,
  title: "Nelson Mandela Becomes President of South Africa",
  description: "In 1994, Nelson Mandela became South Africa's first Black president after decades of apartheid. His presidency marked the beginning of a new era of democracy in South Africa.",
  position: [-25.7461, 28.1881],
  category: "Politics",
  image: "/Nelson Mandela Becomes President of South Africa.jpg",
  funFact: "Mandela’s 1994 election ended apartheid, ushering in an era of multiracial democracy in South Africa."
},
{
  id: 74,
  title: "The Invention of the Printing Press",
  description: "In the 1440s, Johannes Gutenberg invented the printing press, revolutionizing the spread of information. This invention is considered one of the most important in human history.",
  position: [49.9929, 8.2473],
  category: "Science",
  image: "/The Invention of the Printing Press.png",
  funFact: "Gutenberg’s printing press democratized knowledge, transforming the spread of information in the 15th century."
},
{
  id: 75,
  title: "Nelson Mandela's Release from Prison",
  description: "In 1990, Nelson Mandela was released from prison after 27 years. His release marked the beginning of the end of apartheid in South Africa.",
  position: [-33.9249, 18.4241],
  category: "Politics",
  image: "/Nelson Mandela's Release from Prison.jpg",
  funFact: "Mandela’s 1990 release after 27 years symbolized apartheid’s imminent collapse and change for South Africa."
},
{
  id: 76,
  title: "The Spanish Civil War",
  description: "From 1936 to 1939, the Spanish Civil War was fought between the Republicans and Nationalists. The war ended with the victory of Francisco Franco and the establishment of a fascist dictatorship.",
  position: [40.4168, -3.7038],
  category: "War",
  image: "/The Spanish Civil War.jpg",
  funFact: "The Spanish Civil War ended in 1939 with Franco’s victory, establishing a fascist dictatorship in Spain."
},
{
  id: 77,
  title: "The Suez Crisis",
  description: "In 1956, Egypt nationalized the Suez Canal, leading to a military intervention by Britain, France, and Israel. The crisis highlighted the decline of European colonial powers and the rise of Cold War tensions.",
  position: [30.0444, 31.2357],
  category: "Politics",
  image: "/The Suez Crisis.jpg",
  funFact: "The 1956 Suez Crisis highlighted Cold War tensions and the decline of European colonial influence."
},
{
  id: 78,
  title: "The 1916 Easter Rising",
  description: "In 1916, Irish nationalists launched the Easter Rising in an attempt to end British rule and establish an independent Ireland. The rebellion was suppressed, but it inspired future independence movements.",
  position: [53.3498, -6.2603],
  category: "Politics",
  image: "/The 1916 Easter Rising.jpg",
  funFact: "The Easter Rising of 1916, though initially suppressed, spurred Ireland’s independence movement from British rule."
},
{
  id: 79,
  title: "The Formation of the African Union",
  description: "In 2002, the African Union (AU) was formed, replacing the Organization of African Unity (OAU). The AU promotes economic and political cooperation among African countries.",
  position: [9.0307, 38.7406],
  category: "Politics",
  image: "/The Formation of the African Union.png",
  funFact: "The AU, replacing the OAU in 2002, fosters cooperation among African nations for mutual growth."
},
{
  id: 80,
  title: "The Renaissance Begins in Florence",
  description: "The Renaissance, a cultural movement that began in Florence in the 14th century, saw a revival of interest in art, science, and philosophy. It marked the transition from the Middle Ages to the modern world.",
  position: [43.7696, 11.2558],
  category: "Art",
  image: "/The Renaissance Begins in Florence.jpg",
  funFact: "Florence’s 14th-century Renaissance sparked advances in art, science, and philosophy, marking a new era."
},
{
  id: 81,
  title: "The Discovery of Tutankhamun's Tomb",
  description: "In 1922, British archaeologist Howard Carter discovered the tomb of Pharaoh Tutankhamun in Egypt. The tomb was filled with treasures and provided valuable insights into ancient Egyptian civilization.",
  position: [25.7344, 32.6014],
  category: "Science",
  image: "/The Discovery of Tutankhamun's Tomb.jpg",
  funFact: "Tutankhamun’s tomb, found in 1922, revealed treasures that offered insight into ancient Egyptian civilization."
},
{
  id: 82,
  title: "The Declaration of Human Rights",
  description: "In 1948, the United Nations adopted the Universal Declaration of Human Rights, outlining the basic rights and freedoms to which all human beings are entitled.",
  position: [40.7128, -74.0060],
  category: "Politics",
  image: "/The Declaration of Human Rights.jpg",
  funFact: "The UN’s 1948 Declaration of Human Rights defined universal freedoms, striving for equality and justice worldwide."
},
{
  id: 83,
  title: "Construction of the Panama Canal",
  description: "The Panama Canal was completed in 1914, connecting the Atlantic and Pacific Oceans. It revolutionized global trade and remains one of the most important engineering feats in history.",
  position: [9.1012, -79.4055],
  category: "Science",
  image: "/Construction of the Panama Canal.webp",
  funFact: "The Panama Canal, finished in 1914, transformed global trade by linking the Atlantic and Pacific Oceans."
},
{
  id: 84,
  title: "The Apollo 13 Mission",
  description: "In 1970, NASA's Apollo 13 mission to the Moon suffered a critical failure. The crew survived thanks to the heroic efforts of the astronauts and ground control, making the mission a 'successful failure.'",
  position: [0.6741, 23.4729],
  category: "Science",
  image: "/The Apollo 13 Mission.jpg",
  funFact: "Apollo 13’s crew survived a critical failure in 1970, showcasing the heroism of astronauts and NASA control."
},
{
  id: 85,
  title: "Hernán Cortés Conquers the Aztec Empire",
  description: "In 1521, Spanish conquistador Hernán Cortés overthrew the Aztec Empire, capturing Tenochtitlan and marking the beginning of Spanish colonization in the Americas.",
  position: [19.4326, -99.1332],
  category: "War",
  image: "/Hernán Cortés Conquers the Aztec Empire.avif",
  funFact: "Cortés’s 1521 conquest of the Aztec Empire marked the beginning of Spanish influence in the Americas."
},
{
  id: 86,
  title: "Nelson Mandela Wins the Nobel Peace Prize",
  description: "In 1993, Nelson Mandela was awarded the Nobel Peace Prize for his role in dismantling apartheid and establishing multiracial democracy in South Africa.",
  position: [-25.7461, 28.1881],
  category: "Politics",
  image: "/Nelson Mandela Wins the Nobel Peace Prize.jpeg",
  funFact: "Mandela won the 1993 Nobel Peace Prize for his efforts in ending apartheid and promoting democracy."
},
{
  id: 87,
  title: "The Creation of the State of Israel",
  description: "In 1948, the State of Israel was officially established following the end of the British Mandate in Palestine. The creation of Israel led to ongoing conflicts with Arab nations.",
  position: [31.7683, 35.2137],
  category: "Politics",
  image: "/The Creation of the State of Israel.jpg",
  funFact: "Israel’s 1948 establishment followed the British Mandate’s end, sparking conflicts with neighboring Arab nations."
},
{
  id: 88,
  title: "The Discovery of Fire",
  description: "Though the exact time is unknown, early humans discovered how to control fire around 1.7 million years ago. This discovery revolutionized survival, cooking, and development.",
  position: [-1.2864, 36.8172],
  category: "Science",
  image: "/The Discovery of Fire.webp",
  funFact: "Fire control by early humans revolutionized survival, cooking, and societal development around 1.7 million years ago."
},
{
  id: 89,
  title: "JFK's 'Man on the Moon' Speech",
  description: "In 1961, U.S. President John F. Kennedy delivered a speech calling for the United States to land a man on the Moon before the end of the decade. This speech inspired NASA's Apollo program.",
  position: [38.9072, -77.0369],
  category: "Politics",
  image: "/JFK's 'Man on the Moon' Speech.webp",
  funFact: "Kennedy’s 1961 speech inspired the Apollo program, leading to the first successful Moon landing in 1969."
},
{
  id: 90,
  title: "The Reign of King Louis XIV",
  description: "King Louis XIV of France, known as the 'Sun King,' reigned from 1643 to 1715. His rule centralized power in France and expanded French influence across Europe.",
  position: [48.8049, 2.1204],
  category: "Politics",
  image: "/The Reign of King Louis XIV.jpg",
  funFact: "Louis XIV’s reign centralized power in France, symbolized by his grand palace at Versailles."
}
      
  ];
  
  
