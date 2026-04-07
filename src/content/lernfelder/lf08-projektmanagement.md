---
titel: "Projektmanagement"
nummer: 8
kuerzel: "LF08"
beschreibung: "Systematische Planung, Durchführung und Abschluss von Veranstaltungsprojekten mit modernen Projektmanagement-Methoden."
lernziele:
  - "Projektphasen kennen und anwenden"
  - "Netzplantechnik und Gantt-Charts erstellen"
  - "Effektiv im Team kommunizieren"
  - "Projekte kalkulieren und nachkalkulieren"
  - "Risikomanagement durchführen"
stunden: 60
farbe: "violet"
---

## Was ist ein Projekt?

Ein **Projekt** ist ein zeitlich begrenztes Vorhaben zur Erreichung eines definierten Ziels mit einem spezifischen Ressourceneinsatz.

### Merkmale eines Projekts (nach DIN 69901)
- **Einmaligkeit:** jedes Projekt ist einzigartig
- **Zeitliche Begrenzung:** definierter Anfang und Ende
- **Ressourcenbeschränkung:** begrenztes Budget, Personal, Material
- **Interdisziplinarität:** verschiedene Gewerke arbeiten zusammen
- **Projektspezifische Organisation:** temporäre Struktur

### Magisches Dreieck des Projektmanagements
Die drei Dimensionen stehen in Wechselwirkung:
```
         Leistung/Qualität
              /\
             /  \
            /    \
           /      \
    Zeit ------ Kosten
```
Verbessert man eine Dimension, leidet mindestens eine andere.

---

## Projektphasen

### Phase 1: Initiierung
**Ziel:** Machbarkeit prüfen, Grundentscheidung treffen

- Projektziel definieren (SMART-Formel)
- Stakeholder-Analyse
- Grobe Kosten- und Zeitschätzung
- Kick-off-Meeting
- **Ergebnis:** Projektauftrag / Projektcharta

**SMART-Ziele:**
- **S**pezifisch (konkret beschrieben)
- **M**essbar (Kriterien für Erfolg)
- **A**kzeptiert (von allen Beteiligten)
- **R**ealistisch (machbar)
- **T**erminiert (klares Enddatum)

### Phase 2: Planung
**Ziel:** Detaillierter Plan für Durchführung erstellen

- **Projektstrukturplan (PSP):** Aufgaben hierarchisch aufgliedern
- **Zeitplanung:** Gantt-Chart, Netzplan
- **Ressourcenplanung:** Personal, Technik, Budget
- **Risikoanalyse**
- **Kommunikationsplan**
- **Ergebnis:** Projektplan, Budgetfreigabe

### Phase 3: Durchführung
**Ziel:** Plan umsetzen, Fortschritt kontrollieren

- Aufgaben delegieren und verfolgen
- Regelmäßige Status-Updates
- Änderungsmanagement (Change Management)
- Qualitätssicherung
- **Ergebnis:** Lieferobjekte (fertige Veranstaltung)

### Phase 4: Abschluss
**Ziel:** Projekt ordentlich beenden, Erfahrungen sichern

- Abnahme der Leistungen
- Projektdokumentation vervollständigen
- Nachkalkulation
- Lessons Learned / Retrospektive
- Projektabschlussbericht
- **Ergebnis:** Abschlussbericht, Freigabe Ressourcen

---

## Netzplantechnik

Die Netzplantechnik dient der zeitlichen Planung von Projekten mit vielen Abhängigkeiten.

### Vorgangsknotenetz (VKN)
Jeder Vorgang (Aktivität) wird als Knoten dargestellt, Pfeile zeigen Abhängigkeiten.

**Knoteninhalt:**
```
┌──────────────────────────┐
│ FAZ  │ Dauer │    FEZ   │
├──────────────────────────┤
│      Vorgangsname        │
├──────────────────────────┤
│ SAZ  │  GP   │    SEZ   │
└──────────────────────────┘
```
- **FAZ:** Frühester Anfangszeitpunkt
- **FEZ:** Frühester Endzeitpunkt
- **SAZ:** Spätester Anfangszeitpunkt
- **SEZ:** Spätester Endzeitpunkt
- **GP:** Gesamtpuffer (GP = SAZ − FAZ)

### Kritischer Pfad
Der **kritische Pfad** ist die längste Kette von Vorgängen im Netzplan. Jede Verzögerung auf dem kritischen Pfad verzögert das Gesamtprojekt.
- Vorgänge auf dem kritischen Pfad: **GP = 0**

### Berechnung (Vorwärts- und Rückwärtsrechnung)

**Vorwärtsrechnung (früheste Zeitpunkte):**
- `FAZ(Start) = 0`
- `FEZ = FAZ + Dauer`
- `FAZ(Nachfolger) = max(FEZ aller Vorgänger)`

**Rückwärtsrechnung (späteste Zeitpunkte):**
- `SEZ(Ende) = FEZ(Ende)`
- `SAZ = SEZ − Dauer`
- `SEZ(Vorgänger) = min(SAZ aller Nachfolger)`

---

## Gantt-Chart (Balkendiagramm)

Das Gantt-Chart visualisiert den Zeitplan als horizontale Balken über einer Zeitachse.

### Aufbau
- Y-Achse: Vorgänge/Aufgaben
- X-Achse: Zeit (Tage, Wochen, Stunden)
- Balken: Dauer des Vorgangs
- Pfeile/Abhängigkeiten: Verbindungen zwischen Vorgängen
- Meilensteine: wichtige Ereignisse (Raute/Diamant)

### Vorteile des Gantt-Charts
- Schnell verständlich, übersichtlich
- Zeigt parallele Aktivitäten gut
- Ist-/Soll-Vergleich möglich

### Nachteile
- Abhängigkeiten schwer erkennbar (im Vergleich zum Netzplan)
- Bei vielen Vorgängen unübersichtlich

---

## Projektstrukturplan (PSP)

Der PSP (Work Breakdown Structure, WBS) zerlegt das Gesamtprojekt hierarchisch in handhabbare Arbeitspakete.

### Ebenen
1. **Projektebene:** Gesamtprojekt
2. **Phasenebene / Teilprojekte**
3. **Arbeitspakete:** kleinste planbare Einheit

### Beispiel PSP für ein Konzert
```
Konzert XY (1.0)
├── Planung (1.1)
│   ├── Venue buchen (1.1.1)
│   ├── Rider prüfen (1.1.2)
│   └── Technik beauftragen (1.1.3)
├── Aufbau (1.2)
│   ├── Bühne aufbauen (1.2.1)
│   ├── PA installieren (1.2.2)
│   └── Licht installieren (1.2.3)
├── Show (1.3)
│   ├── Soundcheck (1.3.1)
│   └── Konzert (1.3.2)
└── Abbau (1.4)
    ├── Technik abbauen (1.4.1)
    └── Venue übergeben (1.4.2)
```

---

## Risikomanagement

### Risikomatrix
Bewertung von Risiken nach **Eintrittswahrscheinlichkeit** und **Schadensausmaß**:

| | Gering | Mittel | Hoch |
|---|---|---|---|
| **Wahrscheinlich** | Mittel | Hoch | Kritisch |
| **Möglich** | Gering | Mittel | Hoch |
| **Unwahrscheinlich** | Gering | Gering | Mittel |

### Risikomaßnahmen
- **Vermeiden:** Risiko durch andere Planung eliminieren
- **Vermindern:** Wahrscheinlichkeit oder Schadensausmaß reduzieren
- **Transferieren:** Risiko auf Dritte übertragen (Versicherung)
- **Akzeptieren:** bewusst Risiko eingehen und Notfallplan bereithalten

### Typische Risiken in der Veranstaltungstechnik
- Technischer Ausfall von Equipment
- Personalmangel (Krankheit, Ausfall)
- Schlechtes Wetter (Outdoor)
- Lieferverzögerungen
- Budgetüberschreitung
- Sicherheitsprobleme / Unfälle

---

## Kommunikation im Team

### Kommunikationsmodelle

**Sender-Empfänger-Modell:**
`Sender → Kodierung → Kanal → Dekodierung → Empfänger`

Störungen können auf jeder Ebene auftreten.

**Vier-Seiten-Modell (Schulz von Thun):**
Jede Nachricht hat vier Seiten:
1. **Sachinhalt** (Information)
2. **Selbstoffenbarung** (Ich als Sender)
3. **Beziehungsebene** (Verhältnis zu dir)
4. **Appell** (Was ich von dir möchte)

### Meetings und Besprechungen
Effektive Meetings brauchen:
- **Agenda** (Tagesordnung) im Voraus
- **Zeitrahmen** einhalten
- **Protokoll** (Ergebnisse und Aufgaben dokumentieren)
- **Action Items:** klar, mit Verantwortlichen und Deadline

### Konfliktmanagement
Phasen der Eskalation (nach Glasl):
1. Verhärtung
2. Debatte/Polemik
3. Taten statt Worte
4. Koalitionen
5. Gesichtsverlust
6. Drohstrategien
7. Begrenzte Vernichtungsschläge
8. Zersplitterung
9. Gemeinsam in den Abgrund

**Frühzeitige Intervention** ist entscheidend – je früher desto besser.

---

## Kalkulation und Nachkalkulation

### Vorkalkulation (Angebotskalkulation)
Kostenschätzung vor dem Projekt:
- Personalkosten (Stundensätze × geplante Stunden)
- Materialkosten (Technik, Verbrauchsmaterial)
- Fremdleistungen (Subunternehmer, Miete)
- Gemeinkosten-Aufschlag
- Gewinnaufschlag

### Nachkalkulation
Nach dem Projekt: tatsächliche Kosten dokumentieren und mit der Vorkalkulation vergleichen.

**Ziele der Nachkalkulation:**
- Abweichungen identifizieren
- Kalkulationsfehler für die Zukunft vermeiden
- Rentabilität des Projekts prüfen
- Grundlage für Lessons Learned

### Stundensatz-Kalkulation
`Stundensatz = (Jahreskosten + Gewinn) / produktive Jahresstunden`

Produktive Jahresstunden: ca. 1.600–1.700 h (nach Abzug von Urlaub, Krankheit, Verwaltung)

---

## Evaluation und Lessons Learned

### Evaluationsmethoden
- **Quantitativ:** Besucherzahlen, Budgetabweichung, Terminverzug
- **Qualitativ:** Kundenzufriedenheit, Feedback-Gespräche, Fragebögen

### Retrospektive (nach Agile/Scrum-Methodik)
Strukturierte Rückschau mit dem Team:
1. Was lief gut?
2. Was lief schlecht?
3. Was können wir verbessern?
4. Konkrete Maßnahmen für das nächste Projekt

### Wissensmanagement
- Lessons Learned dokumentieren und zentral ablegen
- Nächstes Projekt baut auf Erkenntnissen auf
- Vorlagen, Checklisten, Standardprozesse entwickeln
