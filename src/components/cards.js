import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import './card.js';

export class Cards extends LitElement {
  static properties = {
    asanas: { type: Array }
  };

  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }

    .asanas {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
  `;

  constructor() {
    super();
    this.asanas = [
      /* POZYCJE STOJĄCE */
      {
        name: 'Tadasana',
        polishName: 'Pozycja góry',
        przeciwskazania: 'problemy ze stawami skokowymi',
        korzysci: 'wzmacnia nogi i stopy, poprawia postawę i równowagę, uczy świadomości ciała',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Hasta Utthanasana',
        polishName: 'Wygięcie do tyłu z uniesionymi ramionami',
        przeciwskazania: 'urazy pleców i szyi, wysokie ciśnienie',
        korzysci: 'rozciąga przód ciała, wzmacnia ramiona i nogi, otwiera klatkę piersiową',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Akarna Dhanurasana',
        polishName: 'Pozycja łuku i strzały',
        przeciwskazania: 'kontuzje ramion i szyi',
        korzysci: 'wzmacnia ramiona i szyję, poprawia koncentrację i skupienie na celu',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Tiryaka Tadasana',
        polishName: 'Kołysząca się palma',
        przeciwskazania: 'urazy nóg, ramion i barków',
        korzysci: 'rozciąga boki tułowia, poprawia balans ciała',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Kati Chakrasana',
        polishName: 'Skręt talii',
        przeciwskazania: 'urazy kręgosłupa, bioder, barków, szyi',
        korzysci: 'poprawia mobilność kręgosłupa, tonizuje talię i biodra',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Tiryaka Kati Chakrasana',
        polishName: 'Huśtająca się talia',
        przeciwskazania: 'problemy z plecami',
        korzysci: 'poprawia koordynację i elastyczność kręgosłupa',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Meru Prishtasana',
        polishName: 'Skręt kręgosłupa ze skłonem',
        przeciwskazania: 'problemy z plecami i barkami',
        korzysci: 'rozciąga kręgosłup, wzmacnia plecy, wysmukla talię',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Samakonasana',
        polishName: 'Pozycja kąta prostego',
        przeciwskazania: 'problemy z dolnym odcinkiem kręgosłupa',
        korzysci: 'wzmacnia barki i ramiona, poprawia stabilność',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Dwikonasana',
        polishName: 'Podwójny kąt prosty',
        przeciwskazania: 'problemy z kręgosłupem lędźwiowym',
        korzysci: 'koryguje postawę, wzmacnia ramiona i plecy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Trikonasana',
        polishName: 'Pozycja trójkąta',
        przeciwskazania: 'problemy z karkiem, równowagą, niskie ciśnienie',
        korzysci: 'rozciąga boki ciała, otwiera biodra, wzmacnia nogi',
        image: 'https://via.placeholder.com/150'
      },

      /* SKŁONY DO PRZODU */
      {
        name: 'Paschimottanasana',
        polishName: 'Skłon do przodu w siadzie',
        przeciwskazania: 'problemy z kręgosłupem, nadciśnienie',
        korzysci: 'rozciąga tył ciała, uspokaja układ nerwowy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Gatyatmak Paschimottanasana',
        polishName: 'Dynamiczny skłon do przodu',
        przeciwskazania: 'choroby serca, problemy z kręgosłupem',
        korzysci: 'poprawia metabolizm i elastyczność ciała',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Pada Prasar Paschimottanasana',
        polishName: 'Skłon do przodu z rozstawionymi nogami',
        przeciwskazania: 'jak w paschimottanasanie',
        korzysci: 'rozciąga wewnętrzne strony nóg i plecy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Janu Sirshasana',
        polishName: 'Głowa do kolana',
        przeciwskazania: 'problemy z kręgosłupem',
        korzysci: 'rozciąga plecy i nogi, przygotowuje do medytacji',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Padma Paschimottanasana',
        polishName: 'Pół lotosu ze skłonem',
        przeciwskazania: 'problemy z kolanami i biodrami',
        korzysci: 'masuje narządy wewnętrzne, poprawia trawienie',
        image: 'https://via.placeholder.com/150'
      },

      /* WYGIĘCIA W TYŁ */
      {
        name: 'Saral Bhujangasana',
        polishName: 'Prosta kobra',
        przeciwskazania: 'brak poważnych – bezpieczna dla początkujących',
        korzysci: 'wzmacnia plecy, poprawia ruchomość kręgosłupa',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Bhujangasana',
        polishName: 'Pozycja kobry',
        przeciwskazania: 'urazy kręgosłupa, wrzody, przepuklina',
        korzysci: 'otwiera klatkę piersiową, wzmacnia plecy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Tiryaka Bhujangasana',
        polishName: 'Skrętna kobra',
        przeciwskazania: 'urazy barków i kręgosłupa',
        korzysci: 'masuje narządy wewnętrzne, zwiększa elastyczność',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Shalabhasana',
        polishName: 'Pozycja szarańczy',
        przeciwskazania: 'choroby serca, wysokie ciśnienie',
        korzysci: 'wzmacnia dolne plecy i narządy miednicy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Saral Dhanurasana',
        polishName: 'Uproszczony łuk',
        przeciwskazania: 'urazy kręgosłupa i barków',
        korzysci: 'poprawia postawę, wzmacnia plecy i klatkę piersiową',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Kandharasana',
        polishName: 'Pozycja oparcia (stania) na ramionach',
        przeciwskazania: 'wrzody żołądka lub dwunastnicy, przepuklina brzuszna',
        korzysci: 'pomaga w ponownym ustawieniu kręgosłupa, łagodzi ból pleców, koryguje zaokrąglone ramiona. Masuje narządy jamy brzusznej, poprawia trawienie. Tonizuje żeńskie narządy rozrodcze, wspiera układ oddechowy i tarczycę',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Chandrasana',
        polishName: 'Pozycja półksiężyca w wypadzie',
        przeciwskazania: 'kontuzje kolan, kostek lub pleców',
        korzysci: 'rozciąga i wzmacnia całą strukturę szkieletu, poprawia równowagę, rozciąga szyję, ramiona, plecy i klatkę piersiową, uwalnia uczucie przekrwienia',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Gomukhasana',
        polishName: 'Pozycja twarzy krowy',
        przeciwskazania: 'poważne urazy kolan, ramion, szyi lub kręgosłupa',
        korzysci: 'głęboko relaksuje, łagodzi napięcie i niepokój, poprawia postawę, otwiera klatkę piersiową, rozluźnia ramiona, szyję i biodra, zwiększa elastyczność nóg',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Utthan Pristhasana',
        polishName: 'Pozycja jaszczurki',
        przeciwskazania: 'problemy z kolanami, biodrami lub dolnym odcinkiem kręgosłupa',
        korzysci: 'intensywnie otwiera biodra, rozciąga pachwiny i uda, poprawia elastyczność miednicy, przygotowuje ciało do głębszych wygięć i pozycji siedzących',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ustrasana',
        polishName: 'Pozycja wielbłąda',
        przeciwskazania: 'urazy kręgosłupa, nadciśnienie, migreny',
        korzysci: 'otwiera klatkę piersiową, wzmacnia plecy, rozciąga przód ciała, poprawia postawę i oddech, stymuluje układ hormonalny',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Supta Vajrasana',
        polishName: 'Leżąca pozycja diamentu',
        przeciwskazania: 'problemy z kolanami, kostkami lub dolnym odcinkiem pleców',
        korzysci: 'rozciąga uda, brzuch i klatkę piersiową, poprawia trawienie, działa regenerująco na kręgosłup',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Matsyasana',
        polishName: 'Pozycja ryby',
        przeciwskazania: 'urazy szyi, nadciśnienie, problemy z kręgosłupem',
        korzysci: 'otwiera klatkę piersiową i gardło, poprawia oddychanie, stymuluje tarczycę, łagodzi napięcia szyi i barków',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Setu Bandhasana',
        polishName: 'Pozycja mostu',
        przeciwskazania: 'urazy kręgosłupa szyjnego, nadciśnienie',
        korzysci: 'wzmacnia plecy i pośladki, otwiera klatkę piersiową, poprawia elastyczność kręgosłupa, uspokaja układ nerwowy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Viparita Karani',
        polishName: 'Pozycja odwrócona – nogi w górze',
        przeciwskazania: 'poważne problemy z szyją lub oczami (jaskra)',
        korzysci: 'regeneruje układ nerwowy, poprawia krążenie żylne, redukuje zmęczenie nóg, działa silnie relaksująco',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Shavasana',
        polishName: 'Pozycja trupa / głębokiego relaksu',
        przeciwskazania: 'brak szczególnych przeciwwskazań, może być niewygodna dla osób z problemami z dolnym odcinkiem kręgosłupa (można podłożyć poduszkę pod kolana)',
        korzysci: 'głęboki relaks fizyczny i psychiczny, regeneracja organizmu, redukcja stresu i napięcia, normalizacja ciśnienia krwi, poprawa jakości snu, integracja efektów praktyki jogi',
        image: 'https://via.placeholder.com/150'
      },

      /* POZYCJE RELAKSACYJNE */
      {
        name: 'Advasana',
        polishName: 'Pozycja odwróconego trupa',
        przeciwskazania: 'urazy kręgosłupa, problemy z oddychaniem, wysokie ciśnienie krwi, choroby serca, wrzody żołądka, przepuklina',
        korzysci: 'głęboki relaks, łagodzi astmę i inne dolegliwości płuc, rozluźnia plecy i ramiona, uspokaja umysł',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Jyestikasana',
        polishName: 'Pozycja najstarszego / wyższości',
        przeciwskazania: 'problemy z kolanami, biodrem, kręgosłupem',
        korzysci: 'łagodzi ból pleców, rozluźnia mięśnie nóg i miednicy, uspokaja układ nerwowy, pomaga w medytacji',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Makarasana',
        polishName: 'Pozycja krokodyla',
        przeciwskazania: 'ciąża, przepuklina brzuszna, poważne problemy z kręgosłupem',
        korzysci: 'rozluźnia obszar krzyżowo-lędźwiowy, łagodzi rwę kulszową, poprawia oddychanie, redukuje napięcie w szyi i ramionach, korzystna przy astmie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Matsya Kridasana',
        polishName: 'Pozycja bawiącej się ryby',
        przeciwskazania: 'wrzody żołądka, przepuklina, nadciśnienie, choroby serca, zaburzenia tarczycy, zaawansowana ciąża',
        korzysci: 'łagodzi napięcie nerwowe, poprawia trawienie, masuje narządy jamy brzusznej, rozluźnia biodra i plecy, korzystna w ciąży (z modyfikacjami)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Paschimottanasana',
        polishName: 'Pozycja skłonu do przodu / intensywnego rozciągania tyłu ciała',
        przeciwskazania: 'wszelkie problemy z kręgosłupem, przede wszystkim z jego dolnym odcinkiem (np. przepukliny krążkowe), zapalenie stawów kręgosłupa szyjnego i lędźwiowego, wrzody lub nadciśnienie',
        korzysci: 'rozciąga tył ud, łydki, ścięgna podkolanowe, miednicę, pośladki. Wydłuża kręgosłup, wzmacnia ramiona, stymulacja organów wewnętrznych',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Gatyatmak Paschimottanasana',
        polishName: 'Dynamiczne rozciąganie pleców',
        przeciwskazania: 'problemy z kręgosłupem, przepukliny krążkowe, zapalenie stawów, wrzody, nadciśnienie, choroby serca',
        korzysci: 'poprawia metabolizm, elastyczność całego ciała, stymuluje energię fizyczną i praniczną',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Pada Prasar Paschimottasana',
        polishName: 'Pozycja rozciągania pleców z rozwartymi nogami',
        przeciwskazania: 'te same co w podstawowej paschimottanasanie',
        korzysci: 'rozciąganie wewnętrznej strony nóg i mięśni pod i między łopatkami, bardziej otwarta klatka piersiowa niż w paschimottanasanie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Janu Sirshasana',
        polishName: 'Pozycja głowa do nogi',
        przeciwskazania: 'te same co w podstawowej paschimottanasanie',
        korzysci: 'takie same jak paschimottanasana, dodatkowo rozluźnia nogi w przygotowaniu do asan medytacyjnych',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Padma Paschimottansana',
        polishName: 'Pozycja pół lotosu z rozciąganiem pleców',
        przeciwskazania: 'jak w poprzednich pozycjach skłonu do przodu',
        korzysci: 'podobne jak janu sirshasana i paschimottanasana, intensywny masaż narządów jamy brzusznej, stymuluje perystaltykę jelit, łagodzi zaparcia',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Hasta Pada Angushthasana',
        polishName: 'Leżąca pozycja ręki do dużego palca',
        przeciwskazania: 'rwa kulszowa',
        korzysci: 'uelastycznia stawy biodrowe, redukuje nadmiar masy ciała na biodrach i udach, rozwija poczucie równowagi i koordynacji, stabilizuje postawę i chód',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Padahastasana',
        polishName: 'Skłon do przodu z dłońmi pod stopami',
        przeciwskazania: 'poważne dolegliwości pleców, rwa kulszowa, choroby serca, wysokie ciśnienie krwi, przepuklina brzuszna',
        korzysci: 'masuje i tonizuje narządy trawienne, łagodzi wzdęcia, zaparcia i niestrawność, stymuluje nerwy rdzeniowe, zwiększa witalność, poprawia metabolizm i koncentrację',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Utthita Janu Sirshasana',
        polishName: 'Pozycja głowy pomiędzy kolanami',
        przeciwskazania: 'problemy z kręgosłupem',
        korzysci: 'stymuluje trzustkę, rozluźnia stawy biodrowe, rozciąga mięśnie ścięgien podkolanowych, masuje nerwy rdzeniowe i rewitalizuje mózg',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Saral Bhujangasana',
        polishName: 'Prosta pozycja kobry',
        przeciwskazania: 'urazy kręgosłupa, szczególnie w odcinku lędźwiowym',
        korzysci: 'wzmacnia ramiona i barki, dobra na sztywne plecy, łagodna forma idealna dla początkujących',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Bhujangasana',
        polishName: 'Pozycja kobry',
        przeciwskazania: 'wrzody żołądka, przepuklina, gruźlica jelit, nadczynność tarczycy, urazy kręgosłupa szczególnie w odcinku lędźwiowym',
        korzysci: 'poprawia i pogłębia oddychanie, pomaga pozbyć się bólu pleców, utrzymuje kręgosłup giętkim i zdrowym, tonizuje jajniki i macicę, łagodzi zaparcia, korzystna dla wątroby i nerek',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Tiryaka Bhujangasana',
        polishName: 'Pozycja obrotowa kobry',
        przeciwskazania: 'jak w pozycji kobry, dodatkowo urazy związane z barkami',
        korzysci: 'podobnie jak bhujangasana, dodatkowo zwiększone oddziaływanie na ramiona i jelita',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sarpasana',
        polishName: 'Pozycja węża',
        przeciwskazania: 'wrzody żołądka, przepuklina, gruźlica jelit, nadczynność tarczycy, choroby serca, wysokie ciśnienie krwi',
        korzysci: 'zasadniczo takie same jak bhujangasana, dodatkowo koryguje postawę (zaokrąglone ramiona), głęboki efekt wzmacniający na mięśnie pleców',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Shalabhasana',
        polishName: 'Pozycja pół szarańczy (świerszcza)',
        przeciwskazania: 'nie podano szczegółowych',
        korzysci: 'doskonała asana dla pleców i narządów miednicy, może uwolnić napięcie w okolicy miednicy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Shalabhasana',
        polishName: 'Pozycja szarańczy (świerszcza)',
        przeciwskazania: 'słabe serce, zakrzepica wieńcowa, wysokie ciśnienie krwi, wrzody żołądka, przepuklina, gruźlica jelit',
        korzysci: 'wzmacnia dolną część pleców i narządy miednicy, przynosi ulgę w bólu pleców, łagodzi zapalenie korzonków nerwowych i wypadnięcie dysku (łagodne przypadki), tonizuje wątrobę, żołądek, jelita i trzustkę',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Saral Dhanurasana',
        polishName: 'Pozycja łuku uproszczona',
        przeciwskazania: 'niedawno przebyte operacje brzucha, kręgosłupa lub barków, przepuklina, silne bóle głowy lub migrena, uszkodzenia dolnej części pleców, urazy szyi, ramion, głowy',
        korzysci: 'takie same jak pełna dhanurasana na niższych poziomach, pomocna w bólu dolnej części pleców spowodowanym wypadnięciem dysku lub zapaleniem stawów, tonizuje serce i płuca, pomaga poprawić postawę',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Kandharasana',
        polishName: 'Pozycja oparcia (stania) na ramionach',
        przeciwskazania: 'wrzody żołądka lub dwunastnicy, przepuklina brzuszna',
        korzysci: 'ponowne ustawienie kręgosłupa, eliminacja zaokrąglonych ramion, łagodzenie bólu pleców, masaż okrężnicy i narządów jamy brzusznej, tonizuje żeńskie narządy rozrodcze, pomocna przy poronieniach, zaburzeniach miesiączkowania, astmie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Chandrasana',
        polishName: 'Pozycja półksiężyca w wypadzie nogi do przodu',
        przeciwskazania: 'kontuzje kolan, kostek lub pleców',
        korzysci: 'rozciąga i wzmacnia całą strukturę szkieletową, rozciąga szyję, ramiona, plecy i klatkę piersiową, poprawia poczucie równowagi',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Gomukhasana',
        polishName: 'Pozycja krowiego pyska / twarz krowy',
        przeciwskazania: 'problemy z szyją, poważne urazy kolan, urazy i problemy z ramionami, bóle kręgosłupa',
        korzysci: 'doskonała asana do wywoływania relaksu, łagodzi zmęczenie, napięcie i niepokój, łagodzi ból pleców, rwę kulszową, reumatyzm i sztywność ramion i szyi, poprawia postawę, łagodzi skurcze nóg',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Utthan Pristhasana',
        polishName: 'Pozycja jaszczurki (szczeniaka)',
        przeciwskazania: 'kontuzje kolan lub bioder, słabe stawy barkowe lub przedramiona',
        korzysci: 'ćwiczy i wzmacnia klatkę piersiową i przeponę, tonizuje całe plecy, łagodzi napięcie między łopatkami, łagodzi zaparcia i hemoroidy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Setu Asana',
        polishName: 'Pozycja mostu',
        przeciwskazania: 'wysokie ciśnienie krwi, choroby serca, problemy w okolicy szyi, przepuklina, wrzody żołądka, słabe nadgarstki',
        korzysci: 'wzmacnia ramiona, uda i nadgarstki, tonizuje odcinek lędźwiowy kręgosłupa i ścięgna Achillesa',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Chakrasana',
        polishName: 'Pozycja koła',
        przeciwskazania: 'jakakolwiek choroba, słabe nadgarstki, słaby kręgosłup, ciąża, ogólne zmęczenie',
        korzysci: 'wzmacnia nogi, korzystna dla układu nerwowego, trawiennego, oddechowego, sercowo-naczyniowego i gruczołowego, wpływa na wszystkie wydzieliny hormonalne, łagodzi zaburzenia ginekologiczne',
        image: 'https://via.placeholder.com/150'
      },

      /* SKRĘTY */
      {
        name: 'Meru Wakrasana',
        polishName: 'Pozycja skrętu kręgosłupa',
        przeciwskazania: 'urazy kręgosłupa, niedawne operacje, brak połączenia ciała z oddechem',
        korzysci: 'rozciąga kręgosłup, rozluźnia kręgi i tonizuje nerwy, łagodzi bóle pleców, szyi, lumbago i łagodne formy rwy kulszowej, dobra asana dla początkujących',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Bhu Namanasana',
        polishName: 'Pozycja powitania ziemi',
        przeciwskazania: 'problemy z plecami, wrzód żołądka, przepuklina, nadczynność tarczycy, wysokie ciśnienie krwi, problemy z sercem',
        korzysci: 'rozciąga kręgosłup i dolną część pleców, uelastycznia mięśnie i stymuluje nerwy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Matsyendrasana',
        polishName: 'Pozycja półskrętu mędrca',
        przeciwskazania: 'ciąża, wrzód trawienny, przepuklina, nadczynność tarczycy, rwa kulszowa, wypadnięty dysk',
        korzysci: 'rozciąga i napina mięśnie pleców i brzucha, tonizuje nerwy kręgosłupa, uelastycznia mięśnie pleców, łagodzi lumbago i skurcze mięśni, masuje narządy jamy brzusznej',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Parivritti Janu Sirshasana',
        polishName: 'Pozycja głowy obróconej do kolan',
        przeciwskazania: 'ciąża, dolegliwości pleców',
        korzysci: 'rozciąga ciało na boki, rozciąga ścięgna podkolanowe i tył barków, kompresja i rozciąganie mięśni brzucha i narządów, przygotowuje do asan medytacyjnych',
        image: 'https://via.placeholder.com/150'
      },

      /* POZYCJE MEDYTACYJNE */
      {
        name: 'Vajrasana',
        polishName: 'Pozycja pioruna',
        przeciwskazania: 'ból w dolnym odcinku kręgosłupa, problemy z kolanami, problemy ze stawami skokowymi',
        korzysci: 'zmienia przepływ krwi i impulsy nerwowe w okolicy miednicy, wzmacnia mięśnie miednicy, zapobiega przepuklinie, łagodzi hemoroidy, zmniejsza przepływ krwi do narządów płciowych, poprawia układ trawienny, ważna pozycja medytacyjna',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ananda Madirasana',
        polishName: 'Pozycja upajającej błogości',
        przeciwskazania: 'jak w vajrasanie',
        korzysci: 'przebudzenie czakry ajna (trzecie oko), uspokaja umysł, relaksuje układ nerwowy, wszystkie korzyści vajrasany',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Bhadrasana',
        polishName: 'Pozycja łaski / łaskawa',
        przeciwskazania: 'jak w vajrasanie',
        korzysci: 'stymulujący wpływ na czakrę mooladhara, doskonała pozycja medytacyjna, korzyści takie same jak w vajrasanie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Simhasana',
        polishName: 'Pozycja lwa',
        przeciwskazania: 'jak w vajrasanie',
        korzysci: 'wyraźne rozciągnięcie rdzenia kręgowego, całkowita stabilność fizyczna',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Veerasana',
        polishName: 'Pozycja bohatera / myśliciela / filozofa',
        przeciwskazania: 'nie podano szczegółowych',
        korzysci: 'równoważy umysł, zwiększa siłę koncentracji, pozwala na większą świadomość sfer nieświadomości, szybki relaks fizyczny i psychiczny, klarowność myślenia, dobra dla nerek, wątroby, narządów rozrodczych i brzucha',
        image: 'https://via.placeholder.com/150'
      },

      /* POZYCJE DYNAMICZNE */
      {
        name: 'Marjariasana',
        polishName: 'Pozycja kociego grzbietu',
        przeciwskazania: 'problemy z kręgosłupem (odcinek szyjny, lędźwiowy), słabe nadgarstki',
        korzysci: 'poprawia elastyczność szyi, ramion i kręgosłupa, tonizuje żeński układ rozrodczy, łagodzi skurcze menstruacyjne i upławy, bezpieczna w ciąży (bez silnego skurczu brzucha)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Vyaghrasana',
        polishName: 'Pozycja tygrysa',
        przeciwskazania: 'problemy z kolanami (urazy, przewlekłe problemy), ból dolnej części pleców',
        korzysci: 'ćwiczy i rozluźnia plecy, tonizuje nerwy rdzeniowe, rozluźnia nerwy kulszowe (łagodzi rwę kulszową), rozluźnia nogi i stawy biodrowe, tonizuje żeńskie narządy rozrodcze (korzystna po porodzie), rozciąga mięśnie brzucha, wspomaga trawienie i krążenie, redukuje wagę z bioder i ud',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Shashankasana',
        polishName: 'Pozycja dziecka (zająca)',
        przeciwskazania: 'bardzo wysokie ciśnienie krwi, wypadnięty dysk, zawroty głowy',
        korzysci: 'rozciąga i wzmacnia mięśnie pleców, rozdziela kręgi (uwalnia nacisk na dyski), reguluje funkcjonowanie nadnerczy, tonizuje mięśnie miednicy i nerwy kulszowe, korzystna dla narządów rozrodczych, łagodzi zaparcia',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Shashank Bhujangasana',
        polishName: 'Pozycja uderzającej kobry',
        przeciwskazania: 'bardzo wysokie ciśnienie krwi, wypadnięty dysk, zawroty głowy, wrzody żołądka, przepuklina, gruźlica jelit, nadczynność tarczycy (bez wskazówek kompetentnego nauczyciela)',
        korzysci: 'podobne korzyści jak bhujangasana i shashankasana, tonizuje męskie i żeńskie narządy rozrodcze, łagodzi zaburzenia miesiączkowania, doskonała asana poporodowa, wzmacnia obszar brzucha i miednicy, poprawia funkcje wątroby, nerek i innych narządów wewnętrznych, wzmacnia mięśnie pleców',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Naman Pranamasana',
        polishName: 'Pozycja przygotowawcza do stania na głowie',
        przeciwskazania: 'zawroty głowy, słaba szyja, wysokie ciśnienie krwi',
        korzysci: 'pozwala mózgowi stopniowo przystosować się do dodatkowego nacisku na głowę, daje wiele korzyści z sirshasany w mniejszym stopniu',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Usthraasana',
        polishName: 'Pozycja pół wielbłąda',
        przeciwskazania: 'poważne dolegliwości pleców',
        korzysci: 'podobne jak ushtrasana na zmniejszonym poziomie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ushtrasana',
        polishName: 'Pozycja wielbłąda',
        przeciwskazania: 'poważne dolegliwości pleców (lumbago) - tylko pod okiem kompetentnego nauczyciela',
        korzysci: 'korzystna dla układu trawiennego i rozrodczego, rozciąga żołądek i jelita (łagodzi zaparcia), rozluźnia kręgi i stymuluje nerwy rdzeniowe (łagodzi ból pleców, zaokrąglone plecy, opadające ramiona), poprawia postawę, rozciąga przednią część szyi (tonizuje narządy, reguluje tarczycę), pomocna przy astmie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Supta Vajrasana',
        polishName: 'Pozycja leżącego pioruna',
        przeciwskazania: 'problemy z szyją, rwa kulszowa, wypadnięty dysk, dolegliwości krzyżowe, dolegliwości kolan',
        korzysci: 'masuje narządy jamy brzusznej (łagodzi dolegliwości trawienne i zaparcia), tonizuje nerwy rdzeniowe, uelastycznia plecy, prostuje zaokrąglone ramiona, wpływa na nerwy w szyi i tarczycę, rozciąga i rozszerza klatkę piersiową (korzystna przy astmie, zapaleniu oskrzeli), rozluźnia nogi w przygotowaniu do asan medytacyjnych, przekierowuje energię seksualną do mózgu',
        image: 'https://via.placeholder.com/150'
      },

      /* POZYCJE RÓWNOWAGI */
      {
        name: 'Eka Pada Pranamasana',
        polishName: 'Pozycja modlitewna na jednej nodze / Vrksasana (Pozycja drzewa)',
        przeciwskazania: 'przepuklina kręgosłupa, wysokie ciśnienie krwi (nie trzymać rąk zbyt długo nad głową - lepiej na klatce piersiowej), częste migreny, bezsenność',
        korzysci: 'rozwija równowagę nerwową, wzmacnia mięśnie nóg, kostek i stóp',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Garudasana',
        polishName: 'Pozycja orła',
        przeciwskazania: 'niedawne urazy kostki, kolana lub łokcia',
        korzysci: 'poprawia koncentrację, wzmacnia mięśnie i rozluźnia stawy ramion, rąk i nóg, dobra dla górnej części pleców',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Saral Natarajasana',
        polishName: 'Prosta pozycja Shivy / tancerza',
        przeciwskazania: 'słabe serce, wysokie ciśnienie krwi, problemy z plecami, przepuklina, zapalenie okrężnicy, wrzody żołądka lub dwunastnicy, zawroty głowy',
        korzysci: 'wzmacnia plecy, ramiona, biodra i nogi, pomaga rozwinąć poczucie równowagi i koordynacji, poprawia koncentrację',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Eka Padasana',
        polishName: 'Pozycja stojąca na jednej nodze / Virabhadrasana III (Wojownik III)',
        przeciwskazania: 'problemy z dolną częścią pleców, problemy z sercem, wysokie ciśnienie krwi',
        korzysci: 'wzmacnia ramiona, nadgarstki, plecy, biodra i mięśnie nóg, pomaga rozwijać koordynację mięśniową, równowagę nerwową i koncentrację',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Bakasana',
        polishName: 'Pozycja żurawia / pełnego kruka',
        przeciwskazania: 'wysokie ciśnienie krwi, choroby serca, zakrzepica mózgowa',
        korzysci: 'równoważy układ nerwowy, wzmacnia ramiona i nadgarstki, rozwija poczucie równowagi fizycznej',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Baka Dhyanasana',
        polishName: 'Pozycja cierpliwego kruka / Kakasana',
        przeciwskazania: 'wysokie ciśnienie krwi, choroby serca, zakrzepica mózgowa',
        korzysci: 'równoważy układ nerwowy, wzmacnia ramiona i nadgarstki, rozwija poczucie równowagi fizycznej',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Utthita Hasta Padangusthasana',
        polishName: 'Pozycja ręki wyciągniętej do dużego palca u stopy',
        przeciwskazania: 'rwa kulszowa, dolegliwości bioder',
        korzysci: 'poprawia koncentrację i koordynuje równowagę mięśniową i nerwową, wzmacnia i ujędrnia mięśnie bioder i nóg, rozciąga ścięgna podkolanowe (pomaga kolanom i stawom skokowym)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Merudandasana',
        polishName: 'Pozycja kręgosłupa',
        przeciwskazania: 'wysokie ciśnienie krwi, choroby serca, wypadnięty dysk, infekcje krzyżowe, rwa kulszowa',
        korzysci: 'tonizuje narządy jamy brzusznej (szczególnie wątrobę), wzmacnia mięśnie brzucha, stymuluje perystaltykę jelit (łagodzi zaparcia), tonizuje układ współczulny i przywspółczulny, wzmacnia mięśnie pleców, pomaga w ponownym ustawieniu kręgosłupa, usuwa zmęczenie nóg, dobra dla kolan',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Ardha Padmottanasana',
        polishName: 'Pozycja pół lotosu z wyciągniętą nogą',
        przeciwskazania: 'jak w innych wcześniejszych pozycjach równowagi',
        korzysci: 'pomaga poprawić poczucie równowagi, aktywuje perystaltykę jelit (łagodzi zaparcia)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Eka Hasta Bhujasana',
        polishName: 'Pozycja jednej ręki na ramieniu / trąby słonia',
        przeciwskazania: 'uraz lub operacja barku, nadgarstka lub biodra, zespół cieśni nadgarstka, jakąkolwiek choroba nadgarstka',
        korzysci: 'wzmacnia mięśnie ramion, zwiększa elastyczność ramion, bioder i dolnej części pleców, wzmacnia narządy jamy brzusznej, tonizuje perineum (zachowuje energię seksualną dla celów duchowych)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Santolanasana',
        polishName: 'Pozycja deski',
        przeciwskazania: 'nadciśnienie, choroby serca, przepuklina',
        korzysci: 'poprawia równowagę nerwową, rozwija poczucie wewnętrznej równowagi i harmonii, wzmacnia mięśnie ud, ramion, barków i kręgosłupa',
        image: 'https://via.placeholder.com/150'
      },

      /* POZYCJE ODWRÓCONE */
      {
        name: 'Bhumi Pada Mastakasana',
        polishName: 'Pozycja pół stania na głowie',
        przeciwskazania: 'wysokie ciśnienie krwi, choroby serca, zapalenie ucha, słabe naczynia włosowate oka, ciężka krótkowzroczność, problemy z przysadką mózgową lub tarczycą, miażdżyca, zakrzepica mózgowa, ciężka astma, gruźlica, przeziębienie lub zapalenie zatok, nadmiernie zanieczyszczona krew, wypadnięty dysk, słaby kręgosłup, zawroty głowy',
        korzysci: 'pomaga w przypadkach niskiego ciśnienia krwi, wyrównuje układ nerwowy, wzmacnia mięśnie szyi, zapewnia obfite ukrwienie mózgu, przyzwyczaja mózg do zwiększonego napływu krwi jako wstęp do sirshasany',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Moordhasana',
        polishName: 'Pozycja oparcia na koronie głowy',
        przeciwskazania: 'jak w bhumi pada mastakasana',
        korzysci: 'jak w bhumi pada mastakasana',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Poorwa Halasana',
        polishName: 'Prosta pozycja pługa',
        przeciwskazania: 'osoby starsze lub schorowane, przepuklina, rwa kulszowa, wypadnięty dysk',
        korzysci: 'rozciąga miednicę, reguluje pracę nerek, aktywuje jelita, usuwa nadmiar wagi, dobra pozycja przygotowawcza przed halasaną',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Vipareeta Karani Asana',
        polishName: 'Pozycja odwrócona / przygotowawcza do stania na barkach',
        przeciwskazania: 'obowiązują ogólne przeciwwskazania dla pozycji odwróconych',
        korzysci: 'podobne korzyści jak sarvangasana z mniejszym naciskiem na szyję, praktyka przygotowawcza do sarvangasany',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sarvangasana',
        polishName: 'Pozycja stania na barkach / świeca',
        przeciwskazania: 'powiększona tarczyca, wątroba lub śledziona, zapalenie stawów kręgosłupa szyjnego, wypadnięty dysk, wysokie ciśnienie krwi, inne choroby serca, słabe naczynia krwionośne w oczach, zakrzepica, zanieczyszczona krew, menstruacja, zaawansowane stadia ciąży',
        korzysci: 'stymuluje tarczycę, równoważy układy: krążenia, oddechowy, trawienny, rozrodczy, nerwowy i hormonalny, uspokaja umysł, łagodzi stres psychiczny i emocjonalny, wzmacnia układ odpornościowy, wpływa na przytarczyce (rozwój i regeneracja kości), poprawia oddychanie brzuszne, masuje narządy jamy brzusznej, uwalnia ciśnienie z mięśni odbytu (łagodzi hemoroidy), wzmacnia nogi, brzuch i narządy rozrodcze, poprawia elastyczność kręgów szyjnych, wzmacnia nerwy do mózgu, rewitalizuje uszy, oczy i migdałki',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Halasana',
        polishName: 'Pozycja pługa',
        przeciwskazania: 'przepuklina, wypadnięty dysk, rwa kulszowa, wysokie ciśnienie krwi, poważne problemy z plecami (zwłaszcza zapalenie stawów szyi)',
        korzysci: 'masuje narządy wewnętrzne, aktywuje trawienie (łagodzi zaparcia i niestrawność), rewitalizuje śledzionę i nadnercza, wspomaga produkcję insuliny, poprawia pracę wątroby i nerek, wzmacnia mięśnie brzucha, łagodzi skurcze mięśni pleców, tonizuje nerwy rdzeniowe, zwiększa krążenie, reguluje tarczycę (równoważy metabolizm), poprawia układ odpornościowy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Druta Halasana',
        polishName: 'Dynamiczna pozycja pługa',
        przeciwskazania: 'przepuklina, rwa kulszowa, inne dolegliwości pleców lub szyi, wysokie ciśnienie krwi, choroby serca',
        korzysci: 'zalety halasany i paschimottanasany, wzmacnia mięśnie pleców i brzucha, aktywuje perystaltykę jelit (poprawia trawienie, usuwa zaparcia), ułatwia rozkład tłuszczów (ćwiczy wątrobę i pęcherzyk żółciowy), rozciąga okolicę miednicy',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Padma Sarvangasana',
        polishName: 'Pozycja stania na barkach w lotosie',
        przeciwskazania: 'rwa kulszowa, osłabienie lub kontuzje kolan, powiększona tarczyca, wątroba lub śledziona, zapalenie stawów kręgosłupa szyjnego, wypadnięty dysk, wysokie ciśnienie krwi, choroby serca, słabe naczynia krwionośne w oczach, zakrzepica, zanieczyszczona krew, menstruacja, ciąża',
        korzysci: 'podobnie jak sarvangasana (z wyjątkiem hemoroidów i żylaków), dodatkowo rozciąga i masuje okolicę miednicy i narządy wewnętrzne, wzmacnia i koordynuje mięśnie nóg, poprawia poczucie równowagi',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Sirshasana',
        polishName: 'Pozycja stania na głowie',
        przeciwskazania: 'problemy szyi, ból głowy lub migrena, wysokie ciśnienie krwi, choroby serca, zakrzepica, miażdżyca, przewlekły katar, przewlekłe zaparcia, problemy z nerkami, nieczysta krew, ciężka krótkowzroczność, słabe naczynia krwionośne w oku, zapalenie spojówek, przewlekła jaskra, zapalenie uszu, jakikolwiek krwotok w głowie, ciąża, menstruacja',
        korzysci: 'bardzo skuteczna w przebudzaniu czakry sahasrara, uważana za najlepszą ze wszystkich asan, rewitalizuje całe ciało i umysł, łagodzi niepokój i zaburzenia psychiczne, pomaga w astmie, katarze siennym, cukrzycy, zaburzeniach menopauzalnych, koryguje zaburzenia nerwowe i gruczołowe (szczególnie układ rozrodczy), odwraca wpływ grawitacji, łagodzi napięcie pleców, wspomaga regenerację tkanek, sprzyja głębokiemu wydechowi (usuwa CO2 z płuc)',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Salamba Sirshasana',
        polishName: 'Pozycja stania na głowie z podparciem',
        przeciwskazania: 'jak w sirshasanie',
        korzysci: 'jak w sirshasanie',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Nirlamba Sirshasana',
        polishName: 'Pozycja stania na głowie bez podparcia',
        przeciwskazania: 'jak w sirshasanie',
        korzysci: 'jak w sirshasanie, ale mniej stabilna - nie nadaje się do utrzymywania przez dłuższy czas',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'Kapali Asana',
        polishName: 'Pozycja z podpartym czołem',
        przeciwskazania: 'jak w sirshasanie, większe napięcie w okolicach szyi',
        korzysci: 'jak w sirshasanie',
        image: 'https://via.placeholder.com/150'
      }
    ];
  }

  render() {
    return html`
      <div class="asanas">
        ${repeat(this.asanas, (asana) => asana.name, (asana) => html`
          <yoga-card .asana=${asana}></yoga-card>
        `)}
      </div>
    `;
  }
}

customElements.define('yoga-cards', Cards);

