---
nummer: 5
kuerzel: "T2.1"
titel: "Technische Planung von Veranstaltungen"
beschreibung: "Systemplanung für Licht, Ton und Video, Erstellung von Sicherheitskonzepten, technische Dokumentation sowie relevante Normen und Vorschriften für den Meister der Veranstaltungstechnik."
stunden: 80
farbe: "emerald"
teil: "Teil 2 – Handlungsspezifische Qualifikationen"
lernziele:
  - "Komplexe Lichtsysteme, Tonsysteme und Videoprojektionen planen"
  - "Sicherheitskonzepte für Veranstaltungen erstellen"
  - "Technische Dokumentation normgerecht erstellen"
  - "Relevante Normen und Vorschriften kennen und anwenden"
  - "Systemintegration zwischen verschiedenen Gewerken koordinieren"
---

## Systemplanung Licht

### Lichtkonzept und -design

**Beleuchtungsaufgaben:**
- **Sehen (Primärfunktion):** Bühne ausleuchten, Darsteller sichtbar machen
- **Atmosphäre:** Stimmungen erzeugen (Farbe, Intensität)
- **Fokussierung:** Aufmerksamkeit lenken
- **Effekte:** Dynamisierung, visuelle Überraschungen

**Lichtstile:**
| Lichtstil | Beschreibung | Wirkung |
|-----------|-------------|---------|
| Frontlicht | Aus Zuschauerrichtung | Gesicht sichtbar, flach |
| Seitenlicht | Von links/rechts | Plastisch, körperbetont |
| Gegenlicht | Von hinten | Silhouette, dramatisch |
| Unterlicht | Von unten | Unheimlich, unnatürlich |
| Oberlicht | Von oben | Natürlich, Schattenbetont |
| Spitzlicht | Sehr steile Obersicht | Spot-Effekt |

**DMX-Systemplanung:**
- Universum = 512 DMX-Kanäle (1 Universum)
- Professionelle Produktionen: 4–32 Universen
- Art-Net / sACN für IP-basierte Verteilung
- Redundanz: Backup-Verbindungen bei kritischen Systemen

**Moving-Light-Planung:**
- Positionsplanung: Erreichbarkeit aller Spielbereiche
- Kanalberechnung: Scheinwerfer × Kanäle pro Gerät
- Gruppe und Preset-Planung im Voraus

### Dimmer und Stromversorgung

**Dimmerschrank-Planung:**
- Stromkreise nach Gewerken trennen
- Last pro Stromkreis berechnen (Scheinwerfer-Leistung addieren)
- Sicherungsautomaten nach IEC 60364 dimensionieren
- CEE-Stecker für Drei-Phasen-Anschluss

**LED vs. Konventionell:**
- LED: Geringerer Stromverbrauch, Dimm-Verhalten beachten (Flicker, Dimm-Kurve)
- Halogen: Wärmestrahlung, Lampenwechsel, hoher Stromverbrauch, aber natürliches Dimm-Verhalten
- Hybrid-Systeme: Kombination beider Technologien

## Systemplanung Ton

### Beschallungsplanung

**Schallphysikalische Grundlagen:**
- Schallgeschwindigkeit: 343 m/s bei 20°C
- Frequenzbereich Mensch: 20 Hz – 20 kHz
- Abstandsgesetz Schall: Abstandsverdopplung = −6 dB

**PA-System-Typen:**
| System | Einsatz | Vorteile |
|--------|---------|----------|
| Line Array | Große Venues, Konzerte | Gleichmäßige Abdeckung, lange Reichweite |
| Point Source | Mittelgroße Events | Einfach, kostengünstig |
| Distributed System | Konferenzen, flache Räume | Gleichmäßige Pegelverteilung |
| In-ear Monitor | Bühnenmonitoring | Bühnenlautstärke reduzieren |

**Coverage-Planung:**
- Öffnungswinkel der Lautsprecher berücksichtigen
- Verzögerungszeiten für Delay-Tower berechnen: `Delay (ms) = Distanz (m) / 0,343`
- SPL-Berechnungen für Grenzwerte (TRLV Lärm)

**Lärmschutz-Verordnung:**
- Expositionsgrenzwert für Besucher: 107 dB(C) über 4 h
- Tageslärmexposition für Musiker: 85 dB(A)
- In-ear-Monitoring als Schutzmaßnahme

### Tonsystem-Dokumentation

**Systemdiagramm (Signal Flow):**
- Quellen (Mikrofone, Playback) → Stagebox → Pult → Matrix → Verstärker → LS
- Redundante Wege einzeichen
- Patchplan (Stageboxkanäle ↔ Mischpult-Kanäle)

**Input-Liste:**
Tabelle mit allen Mikrofon-Inputs:
- Kanal, Bezeichnung, Mikrofon-Typ
- Phantomspeisung (48V) ja/nein
- Gain-Empfehlung
- Monitore (welcher Mix)

## Systemplanung Video

### Videokonzept

**Projektionssysteme:**
- **Projektor:** ANSI-Lumen wichtig für Umgebungslichtsituation
  - Throw Ratio = Abstand / Bildbreite (z. B. 1,5 = Abstand muss 1,5× Bildbreite sein)
  - Short Throw / Ultra Short Throw für enge Räume
- **LED-Wall:** Pixel-Pitch entscheidet über Mindestbetrachtungsabstand
  - Faustregel: Abstand in Metern ≈ Pixel-Pitch in mm (2 mm PP → 2 m Mindestabstand)
  - Refresh-Rate ≥ 3.840 Hz für kamerataugliche Aufnahmen

**Signalwege:**
- HDMI: Consumer, 5–10 m (ohne Extender)
- SDI/HD-SDI: Professionell, bis 100 m (mit gutem Kabel), Locking-Stecker
- NDI: Video over IP, Netzwerk-basiert, Latenz beachten
- Fiber: Über 100 m, lichtbasierte Übertragung, unterstörbar

**Bildwiedergabe:**
- Auflösungen: FHD 1920×1080, 4K 3840×2160
- Frameraten: 25 fps (EU), 50/60 fps (Sport), 24 fps (Film)
- Color Space: BT.709 (HD), BT.2020 (HDR)

## Sicherheitskonzepte

### Erstellung eines Sicherheitskonzepts

**Rechtsgrundlage:**
Je nach Veranstaltungsgröße und Bundesland ab 200–1.000 Besuchern Pflicht.
Versammlungsstättenverordnung (VStättVO) der jeweiligen Länder.

**Inhalt eines Sicherheitskonzepts:**
1. Beschreibung der Veranstaltung (Art, Ort, Zeit, Personenzahl)
2. Gefährdungsanalyse
3. Organisationsstruktur (Veranstaltungsleiter, Ordnerdienst, SAN)
4. Rettungswegplan und Evakuierungskonzept
5. Kommunikationsplan
6. Maßnahmen bei Störungen / Notfällen

**Veranstaltungsleiter:**
- Fachkundig, während gesamter Veranstaltung anwesend
- Entscheidungsbefugnis bei Sicherheitsfragen
- Berechtigung zur Unterbrechung und Abbruch der Veranstaltung

**Ordnerdienst:**
- Mindest-Ratio: 1 Ordner pro angefangene 100 Besucher
- Ordner müssen nachweislich unterwiesen sein
- Befugnisse: Hausrecht, kein staatliches Gewaltmonopol

**Sanitätsdienst:**
Berechnung nach Besucherzahl, Veranstaltungsart, Risikoklasse:
- Konzert open air 5.000 Personen → deutlich mehr SAN als Kongress
- Kooperation mit DRK, ASB, Malteser, JUH

### Strukturelle Sicherheit

**Temporäre Bauten:**
- Bühnen, Traversen, Tribünen → bauaufsichtliche Genehmigung
- Statisches Gutachten für Sonderbauten
- Prüfingenieur vor Abnahme

**Traversenbelastung:**
- Streckenlast (kg/m) und Einzellast (kg) unterscheiden
- Eigengewicht der Traverse einrechnen
- Sicherheitsfaktor SF = 2,5 für Traversen (Eigengewicht der Konstruktion)
- SF = 10 für Anschlagmittel über Personen (BGV C1)

**Kettenzüge:**
- Regelmäßige Prüfung nach DGUV V54 (BGV D8)
- Tragkraft und WLL auf Typenschild beachten
- Überlastrelevante Befestigung am Hängepunkt prüfen
- Synchronbetrieb: Motor-Controller erforderlich

## Normen und Vorschriften

### Übersicht relevanter Regelwerke

**Elektrotechnik:**
- DIN VDE 0100: Errichten von Niederspannungsanlagen
- DIN VDE 0700: Sicherheit elektrischer Geräte
- IEC 60364: Elektrische Installationen
- DGUV V3: Elektrische Anlagen und Betriebsmittel (Prüfpflichten)

**Bühnentechnik / Rigging:**
- BGV C1 / DGUV V17/18: Veranstaltungs- und Produktionsstätten
- DGUV V54 (BGV D8): Winden, Hub- und Zuggeräte
- DIN EN 1492: Hebebänder und Rundschlingen
- DIN EN 13411: Seilendverbindungen
- DIN EN 12385: Drahtseile

**Schallschutz:**
- TRLV Lärm: Technische Regeln Lärm-Vibrations-Arbeitsschutzverordnung
- DIN 18041: Hörsamkeit in kleinen bis mittelgroßen Räumen

**Brandschutz:**
- Landesbauordnungen (LBO)
- Musterversammlungsstättenverordnung (MVStättVO)
- DIN 14096: Brandschutzordnung

### Normkonformes Handeln als Meister

**Haftungskonsequenz:**
Nichteinhaltung von Normen ist ein Indiz für fahrlässiges Verhalten. Im Schadensfall: Beweislastumkehr!

**Stand der Technik vs. allgemein anerkannte Regeln:**
- Allgemein anerkannte Regeln: Verbreitete, erprobt, anerkannt (z. B. DIN-Normen)
- Stand der Technik: Aktuell verfügbare, bewährte Verfahren
- Stand der Wissenschaft: Neueste gesicherte Erkenntnisse

**Dokumentationspflicht:**
Jede sicherheitsrelevante Maßnahme dokumentieren:
- Prüfprotokoll (wer, was, wann, Ergebnis)
- Abweichungen von Normen begründen
- Mängel und Beseitigung festhalten
