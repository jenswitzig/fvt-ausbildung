---
nummer: 6
kuerzel: "T2.2"
titel: "Technische Umsetzung und Qualitätssicherung"
beschreibung: "Systemintegration verschiedener Gewerke, professionelle Fehlerdiagnose, Qualitätssicherung und Abnahme-Prozesse für komplexe Veranstaltungstechnik-Installationen."
stunden: 80
farbe: "emerald"
teil: "Teil 2 – Handlungsspezifische Qualifikationen"
lernziele:
  - "Komplexe Systemintegrationen verschiedener Gewerke koordinieren"
  - "Fehler systematisch diagnostizieren und beheben"
  - "Qualitätssicherungsmaßnahmen implementieren"
  - "Technische Abnahmen vorbereiten und durchführen"
  - "Mängel dokumentieren und Gewährleistungsansprüche verwalten"
---

## Systemintegration

### Gewerkübergreifende Koordination

**Integrationsreihenfolge beim Aufbau:**
1. Strukturelle Arbeiten (Bühne, Gitterroste, Gerüste)
2. Rigging (Traverse, Hängepunkte)
3. Stromanschluss und Verteilung
4. Licht-Hardware (Scheinwerfer hängen)
5. Ton-Hardware (PA, Monitore, Stagebox)
6. Video (Screens, Projektor, LED-Wall)
7. Dekoration und Branding
8. Kabelführung und -abdeckung
9. Tests und Checks
10. Generalprobe / Tech Rehearsal

**Systemschnittstellen:**
| Schnittstelle | Protokoll/Standard | Mögliche Konflikte |
|---------------|--------------------|--------------------|
| Licht ↔ Video | Art-Net / sACN | Netzwerkkollisionen |
| Ton ↔ Stagebox | Dante / MADI / Analog | Latenz, Groundloops |
| Video ↔ Steuerung | Ethernet, Serial | Kompatibilität |
| Licht ↔ Steuerung | DMX, RDM, Ethernet | Adresskonflikte |

**Netzwerkplanung:**
Professionelle Events benötigen ein dediziertes Show-Netzwerk:
- Trennung von Show-Netz und Internet/Verwaltung
- Managed Switches für VLAN-Trennung
- Dante: eigenes VLAN oder dediziertes Netz, Gigabit Ethernet
- QoS-Einstellungen für Echtzeitprotokolle (Dante, AES67)

### Elektrische Integration

**Stromverteilung:**
```
Hauptverteiler (CEE 32A 5-polig oder 63A/125A)
  ↓
Unterverteiler Licht
  ├── Dimmer-Racks (konventionell)
  └── Direktverteiler (LED, Moving Lights)
Unterverteiler Ton
  ├── Stageboxen und Patchräume
  └── Verstärker
Unterverteiler Video
  └── Prozessoren, Server, Displays
```

**Potenzialausgleich:**
- Alle metallischen Gehäuse auf gleichen Potenzial
- Ground-Loops vermeiden (Brummschleifen im Ton)
- DI-Box als Lösung bei Ground-Loop-Problemen

**Schutzmaßnahmen nach DIN VDE 0100:**
- PRCD (Portable Residual Current Device): FI-Schutzschalter für ortsveränderliche Anlagen
- Schutzleiterkontinuität prüfen
- Isolation messen (Erstmessung und nach Änderungen)

## Fehlerdiagnose

### Systematisches Fehlersuchen

**Fehlersuch-Methodik (Top-Down):**
1. Symptom genau beschreiben
2. Systembereich eingrenzen (Licht / Ton / Video)
3. Signal-Pfad systematisch durchgehen (von der Quelle zum Ziel)
4. Hypothese aufstellen
5. Hypothese testen
6. Ursache beheben
7. Funktion verifizieren

**Häufige Fehler und ihre Ursachen:**

**Licht:**
| Symptom | Mögliche Ursache |
|---------|-----------------|
| Scheinwerfer reagiert nicht | DMX-Adresse falsch, Kabel defekt |
| Flackern | Schlechter Kontakt, falscher Dimmer-Modus |
| Falsche Farbe | Parameterversatz, falsche Fixture-Library |
| Moving Head bewegt sich nicht | Motorüberhitzung, Kalibrierung nötig |

**Ton:**
| Symptom | Mögliche Ursache |
|---------|-----------------|
| Brummen (50 Hz) | Ground-Loop, Potenzialunterschiede |
| Kein Signal | Gain zu niedrig, Kanal gemuted, Kabel defekt |
| Verzerrung | Clipping (Pegel zu hoch), defekter Preamp |
| Feedback | Monitor-Gain zu hoch, Mikrofon-Positionierung |
| Latenz/Echo | Samplerate-Mismatch, falsche Delay-Einstellung |

**Video:**
| Symptom | Mögliche Ursache |
|---------|-----------------|
| Kein Bild | Kein Signal, Kabeldefekt, Edid-Problem |
| Flackern/Streifen | Kabel zu lang, HDMI-Kompatibilität |
| Falsche Auflösung | Scaler falsch konfiguriert |
| Zeitversatz Ton/Bild | Video-Latenz nicht kompensiert |

### Messgeräte und Werkzeuge

**Elektrische Messgeräte:**
- Multimeter: Spannung, Strom, Widerstand, Durchgang
- Isolationsmessgerät: Kabelisolation prüfen
- FI-Tester / PRCD-Tester
- Netzanalysator: Oberschwingungen, Phasenbalance

**Tontechnik-Messgeräte:**
- SPL-Meter: Schalldruckpegel messen
- RTA (Real Time Analyzer): Frequenzgang anzeigen
- Impuls-Response-Messung (z. B. Smaart): Raumakustik analysieren
- Kabelprüfer

**Lichttechnik:**
- DMX-Tester und -Monitor
- Lichtstrommessgerät (Luxmeter)
- Colorimeter (Farbtemperatur, CRI)

## Qualitätssicherung

### QS-Maßnahmen bei Veranstaltungstechnik

**Pre-Show-Checks:**
- Elektrische Sicherheitsprüfung aller neu angeschlossenen Geräte
- Mechanische Prüfung aller Rigging-Verbindungen
- Funktionstest jedes Geräts (Scheinwerfer einzeln ansteuern, jedes Mikrofon testen)
- Notfall-Redundanzen aktivieren und testen

**Checklisten:**
Wichtigstes QS-Instrument in der Veranstaltungstechnik:
- Abhaken ist Pflicht (nicht aus dem Gedächtnis)
- Zeichenverantwortlicher (Initialen statt anonymes Abhaken)
- Zeitstempel und Datum
- Bei kritischen Punkten: Vier-Augen-Prinzip

**Technische Probe / Tech Rehearsal:**
- Alle technischen Elemente im Zusammenspiel testen
- Abläufe mit Artist/Performer durchgehen
- Kue-Liste abarbeiten
- Änderungen dokumentieren

### Fehlerprotokoll und Punch List

**Punch List:**
Mängelliste die vor der Übergabe/Show abgearbeitet werden muss:
- Fehlende Geräte / Lieferengpässe
- Funktionsstörungen
- Optische Mängel (lose Kabel, fehlende Abdeckungen)
- Sicherheitsrelevante Mängel (Priorität!)

**Fehlerprotokoll:**
Systematische Dokumentation aufgetretener Fehler:
- Datum/Uhrzeit
- Betroffenes System
- Beschreibung des Fehlers
- Ursache (wenn bekannt)
- Durchgeführte Maßnahme
- Verantwortliche Person
- Status (behoben / nicht behoben / bekannt/akzeptiert)

## Abnahme und Übergabe

### Technische Abnahme

**Interne Abnahme:**
- Projektleiter/Meister prüft alle Gewerke gegen Leistungsverzeichnis
- Mängelprotokoll erstellen
- Frist zur Mangelbeseitigung setzen

**Externe Abnahme durch Behörden:**
Bei temporären Bauten und Großveranstaltungen:
- Bauabnahme durch Bauaufsicht oder Prüfstatiker
- Elektrische Abnahme bei Festinstallationen
- Abnahme durch Ordnungsamt (Brandschutz, Rettungswege)

**Abnahmeprotokoll:**
- Auftraggeber und Auftragnehmer unterzeichnen
- Alle Mängel und deren Status festgehalten
- Abnahmezeitpunkt relevant für Gewährleistungsbeginn (§ 640 BGB: Abnahme des Werks)

### Gewährleistung und Mängelansprüche

**Werkvertragsrecht (§§ 634, 634a BGB):**
Nach Abnahme eines Werks:
1. Nacherfüllung verlangen (Nachbesserung oder Neuherstellung)
2. Selbst beseitigen und Aufwendungsersatz verlangen
3. Rücktritt oder Minderung
4. Schadensersatz

**Gewährleistungsfrist:**
- Bewegliche Sachen: 2 Jahre
- Bauwerke: 5 Jahre
- Arglistig verschwiegene Mängel: 3 Jahre ab Kenntnis

**Praktischer Umgang mit Mängelansprüchen:**
- Mängel immer schriftlich rügen (mit Fristsetzung)
- Fotos und Protokolle sichern
- Keine eigenständige Mängelbeseitigung ohne Nacherfüllungsrecht zu wahren
- Bei kritischen Mängeln: sofortiger Handlungsbedarf trotz Rüge
