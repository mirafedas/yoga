export const fazy = [
  {
    n: 1,
    nazwa: 'Intencja i peak pose',
    czakra: 'Sahasrara',
    kolor: 'violet',
    opis: 'Ustal, co sekwencja ma rozwinąć (fizycznie, energetycznie lub emocjonalnie) i jaka jest pozycja szczytowa. Planuj od tyłu.',
    asany: []
  },
  {
    n: 2,
    nazwa: 'Rozgrzewka',
    czakra: 'Muladhara',
    kolor: 'red',
    opis: 'Mobilizacja stawów, kręgosłupa, bioder i barków.',
    asany: [
      'Pawanmuktasana',
      'Surya Namaskar',
      'Marjariasana',
      'Jathara Parivartanasana (łagodnie)'
    ]
  },
  {
    n: 3,
    nazwa: 'Asany stojące',
    czakra: 'Muladhara · Swadhisthana · Manipura',
    kolor: 'orange',
    opis: 'Fundament: od Tadasany przez skłon z bioder, psa, rotacje zewnętrzne, wewnętrzne, równowagi, do skrętów stojących.',
    asany: [
      'Tadasana',
      'Uttanasana',
      'Adho Mukha Svanasana',
      'Virabhadrasana II',
      'Trikonasana',
      'Virabhadrasana I',
      'Parsvottanasana',
      'Eka Pada Pranamasana',
      'Garudasana'
    ]
  },
  {
    n: 4,
    nazwa: 'Aktywacja tułowia',
    czakra: 'Manipura',
    kolor: 'yellow',
    opis: 'Krótkie serie core tuż przed wyzwaniem: balansem na rękach, odwróconą albo wymagającą pozycją stojącą.',
    asany: [
      'Navasana',
      'Santolanasana',
      'Pada Sanchalanasana',
      'Dandayamana Bharmanasana'
    ]
  },
  {
    n: 5,
    nazwa: 'Kulminacja: wygięcia, balanse, odwrócone',
    czakra: 'Anahata · Vishuddha',
    kolor: 'green',
    opis: 'Ekspansja. Od lekkich do intensywnych wygięć; po drodze neutralizacja.',
    asany: [
      'Bhujangasana',
      'Shalabhasana',
      'Dhanurasana',
      'Kandharasana',
      'Ustrasana',
      'Matsyasana'
    ]
  },
  {
    n: 6,
    nazwa: 'Skręty',
    czakra: 'Manipura · Swadhisthana',
    kolor: 'yellow',
    opis: 'Integracja. Skręty kierują energię do centrum i neutralizują wygięcia.',
    asany: [
      'Ardha Matsyendrasana',
      'Jathara Parivartanasana',
      'Parivritti Janu Sirshasana'
    ]
  },
  {
    n: 7,
    nazwa: 'Skłony w przód i biodra',
    czakra: 'Swadhisthana',
    kolor: 'indigo',
    opis: 'Wyciszenie i introspekcja. Najpierw asymetryczne, potem symetryczne.',
    asany: [
      'Janu Sirshasana',
      'Paschimottanasana',
      'Baddha Konasana',
      'Supta Baddha Konasana'
    ]
  },
  {
    n: 8,
    nazwa: 'Relaksacja',
    czakra: 'Sahasrara',
    kolor: 'violet',
    opis: 'Ugruntowanie. Savasana, oddech i tętno wracają do normy.',
    asany: ['Savasana', 'Advasana']
  }
];

export const grupy = [
  {
    id: 'OG',
    nazwa: 'Zasady ogólne',
    kolor: 'violet',
    reguly: [
      {
        id: 'OG1',
        waga: 'ważna',
        tekst: 'Sekwencja ma intencję (fizyczną, energetyczną lub emocjonalną) i pozycję szczytową. Planuj od tyłu: co trzeba przygotować anatomicznie i energetycznie, żeby dojść do szczytu.',
        przyklad: 'Peak Ashta Chandrasana → wcześniej: ugruntowanie stóp, mobilizacja bioder, aktywacja barków i core.'
      },
      {
        id: 'OG2',
        waga: 'ważna',
        tekst: 'Kolejność faz (Bihar): rozgrzewka → aktywacja → stojące → kulminacja → kontrpozycja → relaksacja.'
      },
      {
        id: 'OG3',
        waga: 'ważna',
        tekst: 'Vinyasa Krama: od prostszych do bardziej złożonych. Wyzwanie rośnie stopniowo, nie skokami.'
      },
      {
        id: 'OG4',
        waga: 'wskazówka',
        tekst: 'Kierunek energetyczny: od ziemi do nieba i od zewnętrznego wysiłku do wewnętrznej ciszy (sthira → sukha).'
      },
      {
        id: 'OG5',
        waga: 'ważna',
        tekst: 'Po każdym intensywnym bloku pozycja neutralizująca, zanim zmienisz kierunek pracy kręgosłupa. Neutralizacja to świadomy reset napięć, nie odpoczynek.'
      },
      {
        id: 'OG6',
        waga: 'wskazówka',
        tekst: 'Płynne przejścia: sąsiednie pozycje mają punkty wspólne (linia stopy, ustawienie miednicy). Brak płynności to marnowanie energii.',
        przyklad: 'Trikonasana → Parsvakonasana przez zmniejszenie rozstawu stóp i przeniesienie ciężaru.'
      },
      {
        id: 'OG7',
        waga: 'ważna',
        tekst: 'Symetria: pełny blok na jedną stronę, wyrównanie w Tadasanie, potem druga strona. Tyle samo oddechów na każdą stronę.'
      },
      {
        id: 'OG8',
        waga: 'wskazówka',
        tekst: 'Powroty do motywów: powtórzenie wcześniejszej pozycji integruje efekty praktyki.'
      },
      {
        id: 'OG9',
        waga: 'wskazówka',
        tekst: 'Skalowanie: dla każdej asany wersja podstawowa, modyfikowana i pogłębiona. Tempo, liczba oddechów i propsy to parametry.'
      },
      {
        id: 'OG10',
        waga: 'krytyczna',
        tekst: 'Sprawdź przeciwwskazania każdej asany (kolana, lędźwie, ciśnienie, ciąża). Aktywacja core chroni przed urazami w pozycjach stojących.'
      },
      {
        id: 'OG11',
        waga: 'ważna',
        tekst: 'W każdej sekwencji co najmniej jeden skręt.'
      }
    ]
  },
  {
    id: 'ST',
    nazwa: 'Asany stojące',
    kolor: 'orange',
    reguly: [
      {
        id: 'ST1',
        waga: 'ważna',
        tekst: 'Blok stojący zaczyna się od dobrze zbudowanej Tadasany.'
      },
      {
        id: 'ST2',
        waga: 'wskazówka',
        tekst: 'Po Tadasanie skłon z bioder: Uttanasana lub Ardha Uttanasana. Uczy, że skłon pochodzi z bioder, kręgosłup prosty, tyły ud rozciągają się powoli.'
      },
      {
        id: 'ST3',
        waga: 'wskazówka',
        tekst: 'Adho Mukha Svanasana: wejście z deski (Santolanasana) albo z Marjariasany, dłonie o długość dłoni do przodu. Prosty kręgosłup ważniejszy niż proste nogi.'
      },
      {
        id: 'ST4',
        waga: 'ważna',
        tekst: 'Rotacje zewnętrzne bioder przed wewnętrznymi (są łatwiejsze).',
        przyklad: 'Virabhadrasana II, Trikonasana → Virabhadrasana I, Parsvottanasana.'
      },
      {
        id: 'ST5',
        waga: 'ważna',
        tekst: 'Wersja bez skrętu musi być zbudowana, zanim pojawi się wersja ze skrętem.',
        przyklad: 'Trikonasana przed Parivrtta Trikonasaną; Utkatasana przed Parivrtta Utkatasaną.'
      },
      {
        id: 'ST6',
        waga: 'wskazówka',
        tekst: 'Skręty stojące od najłatwiejszego.',
        przyklad: 'Parivrtta Utkatasana → Parivrtta Ardha Chandrasana → Parivrtta Trikonasana.'
      },
      {
        id: 'ST7',
        waga: 'ważna',
        tekst: 'Równowagi stojące: u początkujących wcześniej w bloku, bo wymagają świeżości. Rotacja zewnętrzna przed wewnętrzną.',
        przyklad: 'Eka Pada Pranamasana → Garudasana.'
      },
      {
        id: 'ST8',
        waga: 'ważna',
        tekst: 'Objętość bloku. Początkujący: maks. 2 asany na stronę, kilka świadomych oddechów, bez długiego trzymania. Grupa ogólna: 3–5 asan z wydłużonymi oddechami.'
      },
      {
        id: 'ST9',
        waga: 'ważna',
        tekst: 'Po bloku stojącym pozycja neutralizująca.',
        przyklad: 'Padahastasana (chwyt łokci, luźne barki i szyja), Adho Mukha Svanasana, Uttanasana, Moordhasana po asymetrycznych, Tadasana.'
      },
      {
        id: 'ST10',
        waga: 'wskazówka',
        tekst: 'Miejsce w lekcji: po rozgrzewce lub Surya Namaskar, przed pozycjami zaawansowanymi (wygięcia, głębokie skręty, balanse), przed partią parterową.'
      },
      {
        id: 'ST11',
        waga: 'wskazówka',
        tekst: 'Grupuj pozycje o tej samej biomechanice, np. blok w płaszczyźnie czołowej.',
        przyklad: 'Virabhadrasana II → Parsvakonasana → Trikonasana.'
      },
      {
        id: 'ST12',
        waga: 'wskazówka',
        tekst: 'Praca z barkami w stojących: Virabhadrasana I z rękami w koszyczku za plecami lub jak w Gomukhasanie; płytsza Moordhasana; Sirsha Angustha Yogasana z ugiętą przednią nogą.'
      },
      {
        id: 'ST13',
        waga: 'ważna',
        tekst: 'Przed balansami na rękach stojące aktywujące ramiona: Virabhadrasana I lub Parsvottanasana z koszyczkiem, reverse namaste lub chwytem łokci. Uwaga na przeprost w lędźwiach.'
      }
    ]
  },
  {
    id: 'TU',
    nazwa: 'Aktywacja tułowia (core)',
    kolor: 'yellow',
    reguly: [
      {
        id: 'TU1',
        waga: 'ważna',
        tekst: 'Wstawiaj tuż przed: balansami na rękach (Bakasana), pozycjami odwróconymi, wymagającą stojącą z asymetrycznym transferem siły.',
        przyklad: 'Navasana lub rowerki przed Virabhadrasaną I z mocnym skrętem bioder albo przed Utthita Lolasaną.'
      },
      {
        id: 'TU2',
        waga: 'wskazówka',
        tekst: 'Dobre miejsce także po dynamicznej rozgrzewce, gdy układ nerwowy jest wrażliwy i łatwo wzmocnić propriocepcję.'
      },
      {
        id: 'TU3',
        waga: 'ważna',
        tekst: 'Krótkie serie: 30–60 s lub 6–10 powtórzeń (Navasana 20–40 s, deska 30–60 s). Celowe wstawki zamiast długich ćwiczeń „fitnessowych”, żeby nie zmęczyć mięśni przed szczytem.'
      },
      {
        id: 'TU4',
        waga: 'ważna',
        tekst: 'Po core: Balasana (Shashankasana) lub inna pozycja uspokajająca tętno, potem delikatne skręty.'
      },
      {
        id: 'TU5',
        waga: 'krytyczna',
        tekst: 'Nie wchodź w głębokie wygięcia w tył zaraz po core: brzuch jest napięty, rośnie ryzyko urazu kręgosłupa. Najpierw pozycje rozluźniające brzuch.'
      },
      {
        id: 'TU6',
        waga: 'wskazówka',
        tekst: 'Core po intensywnych wygięciach jest w porządku, jeśli między nimi są pozycje neutralizujące.',
        przyklad: 'Jathara Parivartanasana z ugiętymi kolanami.'
      },
      {
        id: 'TU7',
        waga: 'wskazówka',
        tekst: 'W sekwencji asymetrycznej reset pośrodku (leżący skręt lub Navasana), zanim zaczniesz drugą stronę.'
      },
      {
        id: 'TU8',
        waga: 'krytyczna',
        tekst: 'Przeciwwskazania: ciąża, problemy z odcinkiem lędźwiowym.'
      },
      {
        id: 'TU9',
        waga: 'wskazówka',
        tekst: 'Neutralizacja po core: Kandharasana, Supta Baddha Konasana lub Supta Matsyendrasana, Balasana.'
      }
    ]
  },
  {
    id: 'WT',
    nazwa: 'Wygięcia w tył',
    kolor: 'green',
    reguly: [
      {
        id: 'WT1',
        waga: 'ważna',
        tekst: 'Rozgrzewka przed wygięciami: Surya Namaskar, balansy na rękach i stojące otwierające czworogłowe, zginacze bioder i pachwiny. Pogłębiaj rozciąganie tylnej nogi, pięta dociśnięta do wyobrażonej ściany.',
        przyklad: 'Virabhadrasana I i II, Ashta Chandrasana, Ardha Chandrasana.'
      },
      {
        id: 'WT2',
        waga: 'krytyczna',
        tekst: 'Bardzo napięte czworogłowe i zginacze bioder blokują wygięcie: najpierw je rozluźnij albo nie wprowadzaj głębokich wygięć.'
      },
      {
        id: 'WT3',
        waga: 'ważna',
        tekst: 'Przygotuj barki (rotacja zewnętrzna ramion).',
        przyklad: 'Gomukhasana, Vajrasana z objęciem siebie i rękami za plecami, koszyczek za plecami w Wojowniku lub Ardha/Ashta Chandrasanie, Moordhasana, Kandharasana przed Ustrasaną.'
      },
      {
        id: 'WT4',
        waga: 'ważna',
        tekst: 'Przygotuj biodra.',
        przyklad: 'Baddha Konasana siedząc → leżąc (wałek pod kręgosłup), Ardha Chandrasana, Ashta Chandrasana.'
      },
      {
        id: 'WT5',
        waga: 'ważna',
        tekst: 'Stopniuj: najpierw lekkie wygięcia, potem intensywne, na końcu neutralizacja.',
        przyklad: 'Bhujangasana, Kandharasana → Shalabhasana → Dhanurasana → Ustrasana.'
      },
      {
        id: 'WT6',
        waga: 'krytyczna',
        tekst: 'Po wygięciach nie od razu skłony w przód. Seria wygięć → pozycje neutralizujące → dopiero skłony.'
      },
      {
        id: 'WT7',
        waga: 'krytyczna',
        tekst: 'Nie łącz bezpośrednio głębokich wygięć z głębokimi skrętami. Potrzebna pozycja przejściowa.',
        przyklad: 'Makarasana lub Adho Mukha Svanasana.'
      },
      {
        id: 'WT8',
        waga: 'ważna',
        tekst: 'Neutralizuj zgodnie z rodzajem wygięcia (zob. tabelę neutralizacji).'
      },
      {
        id: 'WT9',
        waga: 'krytyczna',
        tekst: 'Przy nadmiernej lordozie lędźwiowej tylko Saral Bhujangasana, Ardha Shalabhasana i Gomukhasana.'
      },
      {
        id: 'WT10',
        waga: 'wskazówka',
        tekst: 'Oddech: wdech otwiera i unosi klatkę piersiową.'
      },
      {
        id: 'WT11',
        waga: 'wskazówka',
        tekst: 'Makarasana: im dalej łokcie od ciała, tym łagodniejsze wygięcie. W Dhanurasanie chwyt stopy od wewnątrz przygotowuje do Ustrasany.'
      }
    ]
  },
  {
    id: 'SK',
    nazwa: 'Skręty',
    kolor: 'yellow',
    reguly: [
      {
        id: 'SK1',
        waga: 'ważna',
        tekst: 'Główny blok skrętów po wygięciach: wygięcia budzą energię, skręty kierują ją do centrum. Łagodne skręty mogą być wcześniej, w rozgrzewce i jako przygotowanie kręgosłupa.'
      },
      {
        id: 'SK2',
        waga: 'wskazówka',
        tekst: 'Skręt jako neutralizacja także po głębokich skłonach w przód.'
      },
      {
        id: 'SK3',
        waga: 'ważna',
        tekst: 'Skręty stojące przed siedzącymi: są łatwiejsze, uczą stabilizacji miednicy i wydłużenia kręgosłupa.'
      },
      {
        id: 'SK4',
        waga: 'wskazówka',
        tekst: 'Trudniejsze skręty, gdy ciało jest rozgrzane i aktywne: po wygięciach, po skłonach, szczególnie bocznych.'
      },
      {
        id: 'SK5',
        waga: 'krytyczna',
        tekst: 'Technika: najpierw wydłuż kręgosłup. Guzy kulszowe na macie; jeśli się unoszą, zmniejsz skręt. Skręt z kręgosłupa, nie z pracy rąk. Klatka nie zapada się, barki nie rotują do przodu. Lędźwia rotują najmniej, szyja najwięcej, ale najłatwiej ją przeciążyć.'
      },
      {
        id: 'SK6',
        waga: 'ważna',
        tekst: 'Neutralizacja po skrętach.',
        przyklad: 'Łagodne skłony w przód, Supta Baddha Konasana, Savasana.'
      },
      {
        id: 'SK7',
        waga: 'krytyczna',
        tekst: 'Przeciwwskazania: ciąża (zwłaszcza II i III trymestr), ostre bóle kręgosłupa i dyskopatia, problemy z jelitami (ból, stan pooperacyjny, wrzód).'
      },
      {
        id: 'SK8',
        waga: 'wskazówka',
        tekst: 'Oddech: skręt na wydechu.'
      },
      {
        id: 'SK9',
        waga: 'wskazówka',
        tekst: 'Progresja siedząca.',
        przyklad: 'Ardha Matsyendrasana → Jathara Parivartanasana → Parivritti Janu Sirshasana.'
      }
    ]
  },
  {
    id: 'SP',
    nazwa: 'Skłony w przód',
    kolor: 'indigo',
    reguly: [
      {
        id: 'SP1',
        waga: 'ważna',
        tekst: 'Skłony bliżej końca albo po szczycie, bo wyciszają. Unikaj ich na początku zajęć. Wyjątek: Uttanasana w bloku stojącym jako nauka zgięcia z bioder (ST2).'
      },
      {
        id: 'SP2',
        waga: 'ważna',
        tekst: 'Przygotowanie: stojące (pracują z tyłami nóg), skłony w leżeniu na plecach (Supta Padangusthasana z paskiem, najbezpieczniejsze), Gomukhasana, Veerasana z rękami jak w Garudasanie.'
      },
      {
        id: 'SP3',
        waga: 'ważna',
        tekst: 'Asymetryczne przed symetrycznymi.',
        przyklad: 'Janu Sirshasana na obie strony → Paschimottanasana; Eka Padottanasana → Paschimottanasana.'
      },
      {
        id: 'SP4',
        waga: 'wskazówka',
        tekst: 'Łącz skłony z otwieraniem bioder.',
        przyklad: 'Malasana, Baddha Konasana.'
      },
      {
        id: 'SP5',
        waga: 'wskazówka',
        tekst: 'Po wielu lub długich skłonach na końcu dodaj lekkie wygięcie: Kandharasana wolno i delikatnie, kocie grzbiety na siedząco, fale klatką piersiową.'
      },
      {
        id: 'SP6',
        waga: 'ważna',
        tekst: 'Technika: skłon ze stawu biodrowego, brzuch na uda, bez zaokrąglania lędźwi. Bez siłowego przyciągania; ręce nie są dźwignią („odłóż ręce, zejdź, potem dodaj ręce”). Stopy aktywne, kolana mogą być lekko ugięte. Bez pośpiechu.'
      },
      {
        id: 'SP7',
        waga: 'wskazówka',
        tekst: 'Uprzedź grupę, że skłony mogą uwalniać emocje.'
      }
    ]
  },
  {
    id: 'BI',
    nazwa: 'Otwieranie bioder',
    kolor: 'orange',
    reguly: [
      {
        id: 'BI1',
        waga: 'ważna',
        tekst: 'Kolejność w sekwencji biodrowej: stojące aktywujące uda → łagodne otwarcia → skręty i skłony → otwieracze zewnętrzne i wewnętrzne w równowadze → pozycje uspokajające.',
        przyklad: 'Wojownicy, Ashta Chandrasana, Eka Pada Pranamasana → Veerasana → Uttanasana, skręt → … → Supta Baddha Konasana.'
      },
      {
        id: 'BI2',
        waga: 'krytyczna',
        tekst: 'Lotos i pół lotosu tylko bez napięcia w kolanach; napięcie w kolanie oznacza sztywne biodra. Przed lotosem Baddha Konasana.'
      },
      {
        id: 'BI3',
        waga: 'ważna',
        tekst: 'Równowaga rotacji zewnętrznych i wewnętrznych bioder.'
      },
      {
        id: 'BI4',
        waga: 'wskazówka',
        tekst: 'Przed Eka Pada Rajakapotasaną „czwórka” w leżeniu na plecach (łydka na udzie, stopa flex). Happy Baby: chwyt od wewnątrz, biodra na macie.'
      },
      {
        id: 'BI5',
        waga: 'wskazówka',
        tekst: 'Stopniowo i bez forsowania: biodra uwalniają emocje. Supta Baddha Konasana pasuje na początek, środek i koniec.'
      }
    ]
  },
  {
    id: 'OD',
    nazwa: 'Pozycje odwrócone',
    kolor: 'violet',
    reguly: [
      {
        id: 'OD1',
        waga: 'ważna',
        tekst: 'Dopiero po przygotowaniu innymi grupami asan. Łatwiejsze warianty przed trudniejszymi: półodwrócone (Poorwa Halasana, Moordhasana) → pełne (Sirshasana).'
      },
      {
        id: 'OD2',
        waga: 'ważna',
        tekst: 'Przed odwróconymi aktywacja tułowia (TU1).'
      },
      {
        id: 'OD3',
        waga: 'krytyczna',
        tekst: 'Nie bezpośrednio po intensywnym wysiłku i nie wcześniej niż 3 godziny po posiłku.'
      },
      {
        id: 'OD4',
        waga: 'ważna',
        tekst: 'Po odwróconej Savasana, aż oddech i tętno wrócą do normy, potem przeciwpozycja (np. Matsyasana po Sarvangasanie).'
      },
      {
        id: 'OD5',
        waga: 'ważna',
        tekst: 'Początkujący zostają w pozycji końcowej tylko kilka sekund.'
      },
      {
        id: 'OD6',
        waga: 'krytyczna',
        tekst: 'Przeciwwskazania: choroby serca, nadciśnienie, jaskra, infekcja ucha, problemy z odcinkiem szyjnym i dyskami, ciąża i menstruacja, rekonwalescencja.'
      }
    ]
  }
];

export const neutralizacja = [
  {
    po: 'Intensywne stojące (Wojownik I/II, Parsvakonasana)',
    czym: 'Adho Mukha Svanasana, Uttanasana, Padahastasana, Moordhasana (po asymetrycznych), Tadasana',
    nie: ''
  },
  {
    po: 'Aktywacja tułowia (Navasana, Padotthanasana)',
    czym: 'Balasana, Kandharasana, Supta Baddha Konasana, Supta Matsyendrasana',
    nie: 'głębokie wygięcia w tył'
  },
  {
    po: 'Wygięcia w leżeniu na brzuchu',
    czym: 'leżenie na plecach, Balasana z szeroko kolanami i złączonymi dużymi palcami, Happy Baby, Savasana z wałkiem pod kolanami',
    nie: 'skłony w przód, głębokie skręty'
  },
  {
    po: 'Wygięcia na stojąco',
    czym: 'Adho Mukha Svanasana z akcentem na wydłużanie pleców',
    nie: 'skłony w przód, głębokie skręty'
  },
  {
    po: 'Leżące wygięcia z nogami jak w Veerasanie',
    czym: 'na plecach, stopy na krańcach maty, kolana razem, delikatne „wycieraczki” na boki',
    nie: ''
  },
  {
    po: 'Mostki, pozycje odwrócone',
    czym: 'Matsyasana; po odwróconych najpierw Savasana',
    nie: ''
  },
  {
    po: 'Skręty',
    czym: 'łagodne skłony w przód, Supta Baddha Konasana, Savasana',
    nie: ''
  },
  {
    po: 'Długie lub liczne skłony w przód',
    czym: 'lekkie wygięcie (Kandharasana wolno), kocie grzbiety siedząc, skręt',
    nie: ''
  }
];

export const poziomy = [
  {
    nazwa: 'Początkujący',
    punkty: [
      'Równowagi stojące wcześnie w bloku.',
      'Maks. 2 asany stojące na stronę, kilka świadomych oddechów.',
      'Odwrócone: kilka sekund w pozycji końcowej.',
      'Skręty nie głębiej, niż pozwala elastyczność.'
    ]
  },
  {
    nazwa: 'Grupa ogólna',
    punkty: [
      '3–5 asan stojących z wydłużonymi oddechami.',
      'Więcej równowag, mogą uzupełniać mini-sekwencje.',
      'Wersje pogłębione jako opcja, nie norma.'
    ]
  }
];

export const progresje = [
  {
    nazwa: 'Wygięcia na brzuchu',
    kroki: ['Makarasana', 'Sfinks', 'Saral Dhanurasana', 'Dhanurasana']
  },
  {
    nazwa: 'Wygięcia z klęku',
    kroki: ['Veerasana', 'Supta Veerasana', 'Matsyasana']
  },
  {
    nazwa: 'Szarańcza',
    kroki: ['Ardha Shalabhasana', 'Shalabhasana']
  },
  {
    nazwa: 'Seria wygięć',
    kroki: ['Bhujangasana', 'Shalabhasana', 'Dhanurasana', 'Ustrasana']
  },
  {
    nazwa: 'Skręty stojące',
    kroki: [
      'Parivrtta Utkatasana',
      'Parivrtta Ardha Chandrasana',
      'Parivrtta Trikonasana'
    ]
  },
  {
    nazwa: 'Skręty siedzące',
    kroki: [
      'Ardha Matsyendrasana',
      'Jathara Parivartanasana',
      'Parivritti Janu Sirshasana'
    ]
  },
  {
    nazwa: 'Skłony siedzące',
    kroki: ['Janu Sirshasana', 'Paschimottanasana']
  },
  {
    nazwa: 'Biodra',
    kroki: [
      'Baddha Konasana siedząc',
      'Supta Baddha Konasana',
      'Ardha Padmasana',
      'Padmasana'
    ]
  },
  {
    nazwa: 'Odwrócone',
    kroki: ['Poorwa Halasana', 'Moordhasana', 'Sarvangasana', 'Sirshasana']
  }
];

export const tadasana = [
  'Stopy razem; przy kłopotach z równowagą lekko rozstawione.',
  'Ciężar równo rozłożony: pochyl się lekko w przód, w tył i na boki, znajdź środek.',
  'Unieś palce stóp, rozszerz je i połóż ponownie.',
  'Stawy skokowe aktywne.',
  'Kolano wskazuje mniej więcej środkowy palec stopy.',
  'Rzepki podciągnięte, uda aktywne, bez przeprostu w kolanach.',
  'Miednica neutralna: bez nadmiernego przodo- ani tyłopochylenia, przepona pracuje swobodnie.',
  'Głowa przedłuża kręgosłup.',
  'Barki lekko rotują na zewnątrz, klatka otwarta.',
  'Ramiona aktywne, palce razem, skierowane w dół.',
  'Ciało aktywne, ale nie napięte. Sprawdź twarze uczniów.'
];

export const uniwersalne = [
  [
    'Adho Mukha Svanasana',
    'neutralizuje większość pracy nóg, bioder i kręgosłupa'
  ],
  ['Tadasana', 'przywraca pion i równowagę'],
  ['Balasana (Shashankasana)', 'przywraca oddech, uspokaja układ nerwowy'],
  ['Supta Baddha Konasana', 'rozluźnia dolny brzuch i przeponę']
];

export const wektory = [
  ['Ziemia', 'Niebo', 'uziemienie → lekkość'],
  ['Wysiłek zewnętrzny', 'Cisza wewnętrzna', 'sthira → sukha'],
  ['Ekspansja', 'Integracja → Ugruntowanie', 'wygięcia → skręty → relaks'],
  [
    'Otwórz',
    'Rozszerz → Scentruj',
    'stojące, core, biodra → wygięcia → skręty i regeneracja'
  ]
];
