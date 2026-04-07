---
titel: "Tontechnik"
nummer: 3
kuerzel: "LF03"
beschreibung: "Akustische Grundlagen, Mikrofontechnik, Mischpultbedienung und professionelle Beschallungsplanung für Veranstaltungen."
lernziele:
  - "Schallphysikalische Grundgrößen berechnen"
  - "Dezibel-Rechnung beherrschen"
  - "Mikrofone nach Typ und Richtcharakteristik auswählen"
  - "Mischpult-Signalfluss verstehen"
  - "PA-Systeme planen und aufbauen"
  - "Digitale Audiotechnik verstehen"
stunden: 120
farbe: "blue"
---

## Schallphysikalische Grundlagen

### Was ist Schall?
Schall ist eine mechanische Longitudinalwelle, die sich durch Verdichtungen und Verdünnungen in einem Medium ausbreitet.

**Schallgeschwindigkeit:**
- In Luft (20°C): **c ≈ 343 m/s**
- Faustregel: 1 m Laufweg = ca. 3 ms Laufzeitverzögerung

### Frequenz und Wellenlänge
`λ = c / f`

| Frequenz | Wellenlänge |
|---|---|
| 20 Hz (Infraschall) | 17,15 m |
| 100 Hz | 3,43 m |
| 1 kHz | 34,3 cm |
| 10 kHz | 3,43 cm |
| 20 kHz | 1,7 cm |

**Hörbereich des Menschen:** ca. 20 Hz – 20.000 Hz (20 kHz)

### Schalldruck (p) und Schalldruckpegel (L_p)
- **Schalldruck (p):** absolute Druckveränderung, Einheit: **Pascal (Pa)**
- Hörschwelle: p₀ = 20 µPa (0,00002 Pa)
- Schmerzgrenze: ca. 20 Pa (= 120 dB SPL)

---

## Dezibel-Rechnung

Da das Gehör logarithmisch arbeitet, wird der Schalldruckpegel in Dezibel (dB) angegeben.

### Definition Schalldruckpegel
`L_p = 20 · log₁₀(p / p₀)` [dB SPL]

Dabei ist p₀ = 20 µPa (Referenzschalldruck = Hörschwelle)

### Dezibel-Referenzwerte
| dB SPL | Entspricht | Empfindung |
|---|---|---|
| 0 dB | Hörschwelle | kaum hörbar |
| 30 dB | leises Zimmer | sehr leise |
| 60 dB | Gespräch | normal |
| 85 dB | Rasenmäher | laut |
| 90 dB | Grenzwert Arbeitsschutz | laut, Schutz notwendig |
| 110 dB | Rock-Konzert | sehr laut |
| 120 dB | Schmerzgrenze | unerträglich |
| 140 dB | Düsentriebwerk | physisch gefährlich |

### Pegeladdition gleichlauter Quellen
Bei zwei gleich lauten, inkohärenten Quellen addiert sich der Pegel um +3 dB:
`L_ges = L₁ + 10 · log(n)` (n = Anzahl gleicher Quellen)

| Anzahl Quellen | Pegelzuwachs |
|---|---|
| 2 | +3 dB |
| 4 | +6 dB |
| 10 | +10 dB |

### Abstandsgesetz für Schall
Im Freifeld (außen) gilt: Verdopplung des Abstands = Pegelabnahme um **6 dB**
`Δ L = 20 · log(d₂ / d₁)`

### Wahrgenommene Lautstärkeunterschiede
- **+3 dB:** gerade merklicher Unterschied
- **+6 dB:** deutlich lauter
- **+10 dB:** doppelt so laut (subjektiv)

---

## Mikrofone

### Wandlerprinzipien

**Dynamisches Mikrofon (Tauchspule)**
- Prinzip: bewegliche Spule im Magnetfeld (elektromagnetische Induktion)
- Robust, feuchtigkeitsunempfindlich, benötigt keine Phantomspeisung
- Niedriger Übertragungsbereich, gute Rückkopplungsfestigkeit
- Einsatz: Live-Gesang, Schlagzeug, Gitarrenverstärker
- Beispiele: Shure SM58 (Gesang), Shure SM57 (Instrumente)

**Kondensatormikrofon**
- Prinzip: Kapazitätsänderung zwischen Membran und Gegenelektrode
- Benötigt **Phantomspeisung (48 V P48)**
- Hohe Empfindlichkeit, breiterer Frequenzgang, natürlicher Klang
- Einsatz: Studio, Sprache, Akustik, Overhead-Drums
- Empfindlich gegenüber Feuchtigkeit und Schlägen
- Beispiele: Neumann KM 184, Shure SM81

**Bändchenmikrofon (Ribbon)**
- Prinzip: dünnes Metallband im Magnetfeld
- Sehr natürlicher Klang, typische Acht-Charakteristik
- Extrem empfindlich, keine Phantomspeisung (schadet dem Bändchen!)
- Einsatz: Studio, Blechbläser, Streicher
- Beispiele: Royer R-121, AEA R44

### Richtcharakteristiken

**Kugel (Omnidirektional)**
- Nimmt von allen Seiten gleich gut auf
- Kein Nahbesprechungseffekt
- Einsatz: Raummikrofonie, Tischkonferenzen, Grenzflächen

**Niere (Kardioid)**
- Herzförmige Charakteristik, frontal empfindlich, hinten unterdrückt
- Guter Schutz gegen Rückkopplungen auf der Bühne
- Einsatz: Gesang, Instrumentenmikrofonie, Sprache

**Superniere / Hyperniere**
- Schmalere Aufnahmecharakteristik als Niere
- Leichte Rückwärtsempfindlichkeit (Superniere: 125°, Hyperniere: 110° Nullstelle)
- Höhere Rückkopplungsfestigkeit
- Einsatz: Bühnenmonitore, Aufnahme in lauten Umgebungen

**Acht (Bidirektional)**
- Nimmt vorne und hinten gleich auf, Seiten stark unterdrückt
- Bändchenmikrofone haben oft diese Charakteristik
- Einsatz: Stereoaufnahme (MS-Technik), Interview

**Keule / Richtrohrmikrofon**
- Sehr enge Richtcharakteristik durch Interferenzrohr
- Einsatz: Film/TV (Angelmikrofon), Aufnahme aus Distanz

### Nahbesprechungseffekt
Bei Mikrofonen mit Druckgradienten-Kapsel (Niere, Acht) tritt bei Nahbesprechung (< 20 cm) eine Bassanhebung auf. Dieser Effekt kann gezielt für wärmere Klänge genutzt werden.

---

## Mischpultgrundlagen

### Signalfluss (Kanalzug)

1. **XLR-Eingang (Mic In)** oder **Klinke (Line In)**
2. **Gain (Vorverstärker):** richtige Eingangsempfindlichkeit einstellen
   - Ziel: Signal soll "grüne Zone" des Pegelzeigers ausleuchten
   - Clipping vermeiden (Verzerrung bei Übersteuerung)
3. **Insert:** Schleifeneingang für externe Effekte (EQ, Kompressor)
4. **EQ (Equalizer):** Frequenzgang formen
5. **Aux-Sends:** Signale zu Monitormischung oder Effektgeräten senden
6. **Pan (Panorama):** Links-Rechts-Positionierung im Stereobild
7. **Fader:** Lautstärke des Kanals
8. **Bus-Zuweisung:** welcher Mix-Bus empfängt das Signal

### EQ-Frequenzbereiche
| Bereich | Frequenz | Klangliche Wirkung |
|---|---|---|
| Sub-Bass | 20–80 Hz | Druck, Fundament |
| Bass | 80–250 Hz | Wärme, Körper |
| Untere Mitten | 250–500 Hz | Fülle, Schlamm |
| Mitten | 500 Hz–2 kHz | Präsenz, Durchsetzungsvermögen |
| Obere Mitten | 2–6 kHz | Schärfe, Klarheit |
| Hochton | 6–20 kHz | Luft, Brillanz |

### Gain-Struktur
- **Clipping:** Verzerrung durch Übersteuerung → unhörbare Obertöne, "hartes" Clipping
- **Rauschen:** zu schwaches Signal wird genauso verstärkt wie das Nutzsignal
- Optimale Einstellung: **Signal so laut wie möglich, ohne zu clippen** (unity gain)

### Phantomspeisung (48 V)
- Wird benötigt von: Kondensatormikrofonen, aktiven DI-Boxen
- Schadet: Bändchenmikrofonen (sofern keine eingebaute Schutzschaltung)
- Schaltet man sicher aus: Kanal stummschalten, dann P48 aus

### DI-Box (Direct Injection)
- Wandelt asymmetrisches Signal (Klinke) in symmetrisches Signal (XLR) um
- Erdschleife unterbrechen durch Groundlift-Schalter
- Aktive DI-Box: benötigt Phantomspeisung oder Batterie

---

## Lautsprecher und Beschallungssysteme

### Lautsprecherprinzip
Dynamisches Funktionsprinzip (Gegenpart zum dynamischen Mikrofon):
Elektrischer Strom → Schwingspule im Magnetfeld → Membranbewegung → Schallwellen

### Wichtige Kenngrößen
- **Nennimpedanz (Z):** elektrischer Widerstand, typisch 4 Ω, 8 Ω oder 16 Ω
- **Wirkungsgrad (η):** Verhältnis Schallleistung zu elektrischer Leistung
  - Typisch 90–100 dB/1W/1m
  - +3 dB durch doppelte Eingangsleistung
- **Frequenzgang:** abgegebener Frequenzbereich (z.B. 50 Hz – 20 kHz ±3 dB)
- **Maximaler Schalldruckpegel (SPL max):** höchster erreichbarer Pegel

### Lautsprecher-Typen nach Frequenz
- **Subwoofer:** 20–120 Hz (Bassfrequenzen, gerichtungsunabhängig)
- **Woofer:** 80–800 Hz
- **Midrange:** 500 Hz–5 kHz
- **Hochtöner (Tweeter):** 2–20 kHz

### PA-System-Komponenten

**FOH (Front of House)**
- Hauptbeschallungsanlage für das Publikum
- Typischer Aufbau: Line-Array-Türme oder Tops + Subwoofer

**Monitore (Wedges)**
- Bühnenmonitore für Musiker
- Separate Monitormischung vom FOH-Mischpult
- In-Ear-Monitoring (IEM): drahtloses individuelles Monitoring

**Delay-Tower**
- Zusätzliche Lautsprecher in größerem Abstand zur Bühne
- Müssen zeitlich verzögert werden, um Schall des Hauptsystems anzupassen
- Verzögerung: `t = d / c = d / 343` (in Sekunden)

**Sidefills**
- Große Lautsprecher seitlich der Bühne für die Band

### Line-Array
Moderne PA-Systeme nutzen Line-Array-Technologie:
- Mehrere Schallquellen in einer vertikalen Linie
- **Konstruktive Interferenz** = kontrollierte, weitreichende Abstrahlung
- Kurvenarray durch einstellbare Winkel zwischen den Boxen (gekurvt)
- Reichweite und Kontrolle gegenüber konventionellen Systemen erheblich besser

---

## Digitale Audiotechnik

### Analog-Digital-Wandlung (A/D)
Analoges Signal (kontinuierliche Spannung) → digitales Signal (Binärzahlen)

**Abtastrate (Sample Rate)**
- Wie oft wird das Signal pro Sekunde gemessen
- Einheit: **Hertz (Hz) bzw. kSamples/s (kS/s)**
- Standard-Audio: **44,1 kHz** (CD) oder **48 kHz** (Broadcast, Video)
- High-End: 88,2 kHz, 96 kHz, 192 kHz
- **Nyquist-Shannon-Abtasttheorem:** Abtastrate muss mindestens doppelt so hoch sein wie die höchste Frequenz → 44,1 kHz deckt bis 22,05 kHz ab

**Bittiefe (Bit Depth)**
- Auflösung des Pegels pro Sample
- 16 Bit = 65.536 Stufen ≈ 96 dB Dynamikumfang (CD-Standard)
- 24 Bit = 16.777.216 Stufen ≈ 144 dB Dynamikumfang (Profi-Audio)
- 32 Bit Float = praxisnah unendlicher Headroom in DAW-Bearbeitung

**Faustregel:** Pro Bit ca. 6 dB Dynamik

### Digitale Audioformate und -verbindungen

**AES/EBU (AES3)**
- Professionelles digitales Audiosignal (2 Kanäle)
- Symmetrische XLR-Verbindung, 110 Ω impedanzangepasst
- Einsatz: Studio, Broadcast, digitale Mischpulte

**S/PDIF (Consumer)**
- Cinch (koaxial) oder TOSLINK (optisch)
- Gleich zu AES/EBU, aber unsymmetrisch und 75 Ω

**MADI (AES10)**
- 56 oder 64 Kanäle über ein Koaxialkabel oder Glasfaser
- Einsatz: großzügige Stagebox-Verbindungen

**Dante**
- Audio over IP (via LAN-Netzwerk)
- 512 Kanäle pro Netzwerksegment möglich
- Standard in modernen Veranstaltungssystemen

**AVB (Audio Video Bridging)**
- IEEE-Standard für Audio/Video über Ethernet

### Latenzen in digitalen Systemen
- Jede A/D oder D/A-Wandlung erzeugt Latenz (Verzögerung)
- Typisch: 1–3 ms pro Wandlung
- Puffer (Buffer) in DAWs: 64–2048 Samples
- Bei 48 kHz und 512 Samples: ca. 10,7 ms Puffer-Latenz

---

## Systemaufbau einer Tonanlage

### Typischer Signalweg
```
Mikrofon → XLR-Kabel → Stage Box → digitales Pult (FOH)
                                  → Monitormischung
                                  → Effekte (Hall, Delay, Kompressor)
                                  → Hauptlautsprecher (Tops + Subs)
```

### Grundregeln für sauberen Aufbau
1. **Gain-Struktur** von Anfang bis Ende korrekt einstellen
2. **Symmetrische Leitungen** verwenden (XLR, TRS)
3. **Kabellänge** berücksichtigen (Leitungsverlust, Kapazitätsbelag)
4. **Massekonzept** sauber planen (Erdschleifen vermeiden)
5. **Systemverzögerungen** berücksichtigen und kompensieren
