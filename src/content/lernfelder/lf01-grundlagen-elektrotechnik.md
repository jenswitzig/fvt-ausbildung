---
titel: "Grundlagen der Elektrotechnik"
nummer: 1
kuerzel: "LF01"
beschreibung: "Elektrische Grundgrößen, Gesetze und Sicherheitsvorschriften als Basis für alle elektrotechnischen Arbeiten in der Veranstaltungstechnik."
lernziele:
  - "Ohmsches Gesetz anwenden und Berechnungen durchführen"
  - "Kirchhoffsche Gesetze verstehen und anwenden"
  - "Wechselstrom- und Drehstromkreise beschreiben"
  - "VDE-Vorschriften und Schutzklassen kennen"
  - "Schutzmaßnahmen gegen elektrischen Schlag benennen"
stunden: 80
farbe: "amber"
---

## Elektrische Grundgrößen

Die Elektrotechnik bildet das Fundament der Veranstaltungstechnik. Ohne solides Wissen über elektrische Grundgrößen ist sicheres Arbeiten nicht möglich.

### Spannung (U)
Die elektrische Spannung gibt die potenzielle Energie pro Ladungseinheit an. Sie wird in **Volt (V)** gemessen. In Deutschland beträgt die Netzspannung:
- **Einphasig (L/N):** 230 V AC (Wechselstrom)
- **Dreiphasig (L1/L2/L3):** 400 V AC zwischen den Leitern

### Strom (I)
Der elektrische Strom beschreibt die gerichtete Bewegung von Ladungsträgern. Einheit: **Ampere (A)**.
- Gleichstrom (DC): konstante Richtung und Stärke
- Wechselstrom (AC): periodisch wechselnde Richtung (50 Hz in Europa)

### Widerstand (R)
Der elektrische Widerstand hemmt den Stromfluss. Einheit: **Ohm (Ω)**.

### Leistung (P)
Die elektrische Leistung beschreibt die Energieumsetzung pro Zeit. Einheit: **Watt (W)**.

---

## Das Ohmsche Gesetz

Das Ohmsche Gesetz ist die wichtigste Grundformel der Elektrotechnik:

$$U = R \cdot I$$

**Umstellungen:**
- `R = U / I` (Widerstand)
- `I = U / R` (Strom)
- `U = R · I` (Spannung)

**Leistungsformeln:**
- `P = U · I`
- `P = U² / R`
- `P = I² · R`

**Beispiel:** Ein Scheinwerfer mit 1000 W an 230 V zieht einen Strom von:
`I = P / U = 1000 W / 230 V ≈ 4,35 A`

---

## Kirchhoffsche Gesetze

### 1. Kirchhoffsches Gesetz (Knotenregel)
Die Summe aller in einen Knoten hineinfließenden Ströme ist gleich der Summe aller herausfließenden Ströme:

`ΣI_ein = ΣI_aus`

### 2. Kirchhoffsches Gesetz (Maschenregel)
In einer geschlossenen Masche ist die Summe aller Spannungen gleich null:

`ΣU = 0`

### Reihenschaltung
- Gleicher Strom durch alle Widerstände: `I_ges = I₁ = I₂ = I₃`
- Gesamtwiderstand: `R_ges = R₁ + R₂ + R₃`
- Spannungen addieren sich: `U_ges = U₁ + U₂ + U₃`

### Parallelschaltung
- Gleiche Spannung an allen Widerständen: `U_ges = U₁ = U₂ = U₃`
- Kehrwert des Gesamtwiderstands: `1/R_ges = 1/R₁ + 1/R₂ + 1/R₃`
- Ströme addieren sich: `I_ges = I₁ + I₂ + I₃`

---

## Wechselstrom (AC)

Wechselstrom ist in der Veranstaltungstechnik allgegenwärtig. Er wechselt seine Richtung periodisch mit einer Frequenz von **50 Hz** (in Europa).

### Wichtige Begriffe
- **Scheitelwert (Û):** maximaler Momentanwert
- **Effektivwert (U_eff):** äquivalenter Gleichspannungswert, der gleiche Heizleistung erzeugt
- Verhältnis: `Û = U_eff · √2` → Bei 230 V Netzspannung: `Û ≈ 325 V`

### Impedanz (Z)
In Wechselstromkreisen wird der "Gesamtwiderstand" als Impedanz bezeichnet:
`Z = √(R² + X²)`

- **Wirkwiderstand (R):** wandelt Energie in Wärme um
- **Reaktanz (X):** speichert und gibt Energie zurück
  - Induktiver Widerstand: `X_L = 2π · f · L`
  - Kapazitiver Widerstand: `X_C = 1 / (2π · f · C)`

### Leistung im Wechselstromkreis
- **Wirkleistung (P):** in Watt (W) – wird in Arbeit/Wärme umgewandelt
- **Blindleistung (Q):** in Var (var) – wird im Kondensator/Spule gespeichert
- **Scheinleistung (S):** in Voltampere (VA) – geometrische Summe
- **Leistungsfaktor (cos φ):** `cos φ = P / S`

---

## Drehstrom (Dreiphasenwechselstrom)

Drehstrom besteht aus drei um 120° phasenverschobenen Wechselspannungen. Er wird für leistungsstarke Verbraucher in der Veranstaltungstechnik eingesetzt.

### Kenngrößen
- **Strangspannung:** 230 V (zwischen Phase und Neutralleiter)
- **Leiterspannung:** 400 V (zwischen zwei Phasen)
- Verhältnis: `U_L = U_Str · √3`

### CEE-Stecker (Kraftstrom)
In der Veranstaltungstechnik werden CEE-Stecker verwendet:
- **Blau (2P+E):** 230 V, 16 A
- **Rot (3P+N+E):** 400 V Drehstrom, 16 A / 32 A / 63 A / 125 A
- Farbcodierung der Pole: PE (gelb/grün), N (blau), L1 (braun), L2 (schwarz), L3 (grau)

### Leistung bei Drehstrom
`P = √3 · U_L · I · cos φ`

---

## VDE-Vorschriften und Schutzklassen

### VDE-Normen (Verband der Elektrotechnik, Elektronik und Informationstechnik)
- **VDE 0100:** Errichten von Niederspannungsanlagen
- **VDE 0701/0702:** Prüfung elektrischer Betriebsmittel nach Instandsetzung / Wiederholungsprüfung
- **BGV A3 / DGUV V3:** Elektrische Anlagen und Betriebsmittel

### Schutzklassen elektrischer Betriebsmittel

| Schutzklasse | Kennzeichen | Schutzmaßnahme | Beispiele |
|---|---|---|---|
| **SK I** | Schutzleiter-Symbol | Schutzleiter (PE) | Scheinwerfer, Dimmer |
| **SK II** | Doppeltes Quadrat | Schutzisolierung (doppelt isoliert) | Handwerkzeug, Handscheinwerfer |
| **SK III** | Drei waagerechte Linien | Schutzkleinspannung (≤50 V AC) | LED-Strips (12/24 V) |

### Schutzarten (IP-Code)
**IP XY** – Internationaler Schutzgrad:
- Erste Ziffer (X): Schutz gegen Berühren und Fremdkörper (0–6)
- Zweite Ziffer (Y): Schutz gegen Wasser (0–8)

Typische IP-Schutzarten in der VA-Technik:
- **IP20:** Innenbereich, trockene Umgebung (normale Scheinwerfer)
- **IP44:** Spritzwasserschutz (Outdoor-Einsatz bei Regen)
- **IP65:** Staubdicht, Strahlwasser (robuste Outdoor-Geräte)

---

## Schutzmaßnahmen gegen elektrischen Schlag

### Direkte Berührung (Schutz gegen direktes Berühren)
- Isolierung spannungsführender Teile
- Abdeckungen, Gehäuse
- Sicherheitsabstände

### Indirekte Berührung (Schutz bei indirektem Berühren)
- **Schutzerdung:** Fehlerströme fließen sicher über PE ab
- **Fehlerstromschutzschalter (FI/RCD):** Abschaltung bei Differenzstrom > 30 mA
- **Sicherungsautomaten (LS-Schalter):** Abschaltung bei Überstrom

### Leitwert (G)
Der Leitwert ist der Kehrwert des Widerstands:
`G = 1 / R` (Einheit: Siemens, S)

Ein hoher Leitwert bedeutet gute elektrische Leitfähigkeit.

### Sicherheitsregeln (5 Sicherheitsregeln nach VDE)
1. **Freischalten** – Anlage spannungsfrei machen
2. **Gegen Wiedereinschalten sichern** – Schloss, Schild
3. **Spannungsfreiheit feststellen** – mit Messgerät prüfen
4. **Erden und Kurzschließen** – bei Hochspannung
5. **Benachbarte spannungsführende Teile abdecken**

---

## Praktische Anwendung in der Veranstaltungstechnik

### Stromkreisberechnung
**Beispiel:** Lichtanlage mit mehreren Scheinwerfern

Gegeben: 12× Scheinwerfer à 500 W, 230 V
- Gesamtleistung: `P_ges = 12 × 500 W = 6000 W`
- Gesamtstrom: `I_ges = P_ges / U = 6000 W / 230 V ≈ 26,1 A`
- Absicherung: Mindestens 32 A-Sicherung erforderlich

### Leitungsquerschnitt
Faustregel für Kupferleitungen bei 230 V:
- 1,5 mm²: bis 16 A (≈ 3680 W)
- 2,5 mm²: bis 20 A (≈ 4600 W)
- 4 mm²: bis 25 A (≈ 5750 W)
- 6 mm²: bis 32 A (≈ 7360 W)

### Verlustleistung in Leitungen
`P_Verlust = I² · R_Leitung`

Wichtig bei langen Kabelwegen auf Veranstaltungen!
