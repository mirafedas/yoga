---
name: ocena-sekwencji
description: Ocenia sekwencję asan jogi według reguł sekwencjonowania (szkoła Bihar) – kolejność faz, przygotowanie, neutralizacja, bezpieczeństwo, poziom grupy – i proponuje poprawki. Użyj, gdy dostaniesz plan zajęć lub listę asan do oceny, sprawdzenia albo poprawy.
---

# Ocena sekwencji jogi

Oceniasz sekwencję asan nauczycielki jogi według jej własnych reguł. Reguły są w `references/reguly.md` (kody OG, ST, TU, WT, SK, SP, BI, OD, tabela NE i ścieżki PR). Katalog asan i ich kategorie: `references/asany.md`. Odpowiadaj po polsku, zwięźle, bez wstępów.

Zawsze najpierw przeczytaj `references/reguly.md` w całości. Oceniaj tylko według tych reguł; własną wiedzę o jodze dodawaj wyłącznie w sekcji „Poza regułami”, wyraźnie oznaczoną.

## Krok 1. Zbierz dane wejściowe

Potrzebne:
- **Sekwencja**: lista asan w kolejności (z wiadomości, pliku .md/.txt/.js albo z projektu). Zachowaj numerację pozycji.
- **Poziom grupy**: początkujący albo grupa ogólna.
- **Intencja i peak pose**.
- Opcjonalnie: czas trwania, liczba oddechów, przeciwwskazania w grupie (ciąża, lędźwie, kolana, ciśnienie).

Jeśli brakuje poziomu, intencji albo peak pose, nie przerywaj. Wywnioskuj je z sekwencji (peak = najbardziej wymagająca pozycja w drugiej połowie), napisz na początku raportu, co przyjęto, i oceń dalej.

## Krok 2. Rozpoznaj i oznacz każdą pozycję

Dopasuj każdą nazwę do katalogu (`references/asany.md`). Jeśli w projekcie jest `asanas.js`, możesz w nim sprawdzić przeciwwskazania danej asany (`grep -n "name: 'Nazwa'" -A 6`).

Częste synonimy (nazwa z sekwencji → nazwa w katalogu):
- Balasana, pozycja dziecka → Shashankasana
- deska, plank → Santolanasana
- drzewo, Vrksasana → Eka Pada Pranamasana
- Wojownik I / II / III → Virabhadrasana I / II, Eka Padasana
- piramida → Parsvottanasana
- Prasarita Padottanasana → Moordhasana
- półmostek, mostek na barkach → Kandharasana; mostek → Setu asana
- kot-krowa → Marjariasana; pies z głową w dół → Adho Mukha Svanasana
- wielbłąd → Ustrasana; ryba → Matsyasana; łuk → Dhanurasana; kobra → Bhujangasana
- motyl → Baddha Konasana; motyl w leżeniu → Supta Baddha Konasana (brak w katalogu, traktuj jako biodra/neutralizującą)
- gołąb → Eka Pada Rajakapotasana; łódka → Navasana; rowerki → Pada Sanchalanasana
- skręt w leżeniu → Jathara Parivartanasana; półskręt mędrca → Ardha Matsyendrasana
- Uttanasana / Ardha Uttanasana: brak w katalogu, traktuj jako skłon stojący (jak Padahastasana)
- Savasana / Shavasana: relaksacja

Nazwy nierozpoznane wypisz w raporcie i oceniaj je według opisu, nie zgaduj w ciszy.

Każdej pozycji nadaj **funkcję** (nie tylko kategorię z pliku):
- `rozgrzewka`, `stojąca` (+ `rot-zewn` / `rot-wewn` biodra), `równowaga-stojąca`, `skręt-stojący`, `core`, `balans-na-rękach`,
- `wygięcie-lekkie` (Bhujangasana, Saral Bhujangasana, Kandharasana, Makarasana, Ardha Shalabhasana, Sfinks) / `wygięcie-głębokie` (Dhanurasana, Ustrasana, Chakrasana, Matsyasana, Supta Vajrasana, Natarajasana, Eka Pada Rajakapotasana z wygięciem),
- `skręt-leżący/siedzący`, `skłon-asymetryczny` / `skłon-symetryczny`, `biodra`, `odwrócona` (pół / pełna), `neutralizująca`, `relaksacja`.

Zaznacz też, czy pozycja jest wykonywana na jedną stronę (asymetryczna).

## Krok 3. Sprawdź reguły

Przejdź przez sekwencję i sprawdź po kolei:

1. **Łuk (OG2, OG3, OG4)**: czy fazy idą w kolejności z łuku sekwencji; czy trudność rośnie stopniowo; czy koniec jest wyciszony.
2. **Peak (OG1)**: czy przed szczytem są pozycje, które go przygotowują (anatomicznie: stawy, mięśnie, barki, biodra, core).
3. **Przejścia par sąsiednich**: dla każdej pary (n, n+1) sprawdź reguły „po X nie od razu Y”: TU5 (core → głębokie wygięcie), WT6 (wygięcia → skłon), WT7 (głębokie wygięcie ↔ głęboki skręt), OD3 (intensywny wysiłek → odwrócona), oraz czy po intensywnym bloku jest neutralizacja zgodna z tabelą NE (OG5, ST9, TU4, WT8, SK6, OD4).
4. **Bloki**: zasady wewnątrz bloku stojącego (ST1–ST13), core (TU), wygięć (WT), skrętów (SK), skłonów (SP), bioder (BI), odwróconych (OD).
5. **Kolejność trudności**: porównaj z ścieżkami PR (np. Dhanurasana przed Bhujangasaną = naruszenie WT5).
6. **Symetria (OG7)**: każda asymetryczna pozycja wykonana na obie strony, tyle samo oddechów.
7. **Obecność (OG11)**: co najmniej jeden skręt.
8. **Poziom grupy (ST7, ST8, OD5, sekcja „Poziom grupy”)**: liczba asan stojących na stronę, miejsce równowag, czas w odwróconych.
9. **Bezpieczeństwo (OG10, TU8, WT2, WT9, SK7, BI2, OD6)**: jeśli podano przeciwwskazania w grupie, wskaż pozycje, które ich dotyczą, i zaproponuj zamiennik.
10. **Jakość (wskazówki)**: płynność przejść (OG6), grupowanie biomechaniki (ST11), powroty do motywów (OG8), skalowanie (OG9).

Reguły z sekcji „Rozstrzygnięte sprzeczności” stosuj tak, jak tam zapisano.

Nie wymyślaj naruszeń: każde musi wskazywać kod reguły i numery pozycji. Jeśli reguła nie pasuje jednoznacznie, daj ją w „Do rozważenia”, nie w naruszeniach.

## Krok 4. Raport

Użyj dokładnie tego układu:

```markdown
## Ocena sekwencji: <intencja lub peak>

**Przyjęto:** poziom <…>, peak <…>, intencja <…> (tylko jeśli coś wywnioskowano)
**Werdykt:** <Gotowa | Drobne poprawki | Do przebudowy> – <jedno zdanie dlaczego>
**Wynik:** krytyczne <n> · ważne <n> · wskazówki <n>

### Łuk
| # | Asana | Funkcja | Faza | Uwagi |
|---|---|---|---|---|
| 1 | … | … | … | ✓ albo kod reguły |

### Naruszenia
**Krytyczne**
- **[KOD] poz. n→m** – co jest nie tak. **Popraw:** konkretna zmiana (wstaw / przenieś / zamień na …).

**Ważne**
- …

**Wskazówki**
- …

### Co działa
- 2–4 punkty z kodami reguł, które sekwencja dobrze spełnia.

### Poprawiona sekwencja
Pełna lista po poprawkach; zmienione pozycje oznacz **pogrubieniem** i dopiskiem (nowa / przeniesiona z poz. n).

### Do rozważenia
- Niejednoznaczne przypadki, nierozpoznane nazwy, pytania do nauczycielki.

### Poza regułami
- (opcjonalnie) uwagi z ogólnej wiedzy, wyraźnie spoza jej notatek.
```

Werdykt:
- **Do przebudowy** – co najmniej jedno naruszenie krytyczne albo zła kolejność faz.
- **Drobne poprawki** – tylko naruszenia ważne lub wskazówki.
- **Gotowa** – brak naruszeń krytycznych i ważnych.

Pomiń puste sekcje (poza „Naruszenia”, gdzie przy braku napisz „Brak.”). „Poprawiona sekwencja” tylko gdy są zmiany.

## Gdy nauczycielka zmienia reguły

Reguły są w `references/reguly.md`. Jeśli nauczycielka poprosi o zmianę lub dodanie reguły, edytuj ten plik: zachowaj format `- **KOD** [waga] treść _Np.: …_`, nadaj nowy kolejny kod w danej grupie i nie zmieniaj istniejących kodów.
