---
titel: "Medientechnik"
nummer: 7
kuerzel: "LF07"
beschreibung: "Videosignale, Projektionssysteme, LED-Walls und digitale Medienübertragung für professionelle Veranstaltungsproduktionen."
lernziele:
  - "Videoauflösungen und Frameraten unterscheiden"
  - "Videoschnittstellen und -protokolle kennen"
  - "Projektionssysteme planen und einsetzen"
  - "LED-Wall-Systeme verstehen und konfigurieren"
  - "Videoserver und Mediaplayer einsetzen"
stunden: 80
farbe: "cyan"
---

## Videosignale und Auflösungen

### Auflösungsstandards

| Standard | Auflösung | Pixel | Verwendung |
|---|---|---|---|
| **SD (Standard Definition)** | 720 × 576 | 414.720 | PAL (Europa, alt) |
| **HD Ready** | 1280 × 720 | 921.600 | TV, einfache Displays |
| **Full HD (1080p)** | 1920 × 1080 | 2.073.600 | Broadcast-Standard |
| **2K (DCI)** | 2048 × 1080 | 2.211.840 | Kino |
| **4K (UHD)** | 3840 × 2160 | 8.294.400 | Produktion, High-End |
| **4K (DCI)** | 4096 × 2160 | 8.847.360 | Kino |
| **8K (UHD)** | 7680 × 4320 | 33.177.600 | Zukunft |

### Frameraten (FPS – Frames per Second)

| Framerate | Anwendung |
|---|---|
| 24 fps | Kinofilm (cineastisches Aussehen) |
| 25 fps | PAL-Standard (Europa, Broadcast) |
| 29,97 fps | NTSC (USA, Japan) |
| 50 fps | Flüssige Bewegungen, Sport (EU) |
| 60 fps | Flüssige Bewegungen, Sport (US) |
| 120+ fps | Zeitlupe, Gaming |

### Interlaced vs. Progressive
- **Progressive (p):** alle Zeilen werden gleichzeitig dargestellt (1080p)
- **Interlaced (i):** abwechselnd ungerade/gerade Zeilen (1080i) – Flimmern möglich
- Moderne Systeme: Progressive bevorzugt

### Seitenverhältnis (Aspect Ratio)
- **4:3:** Alter Standard (TV, Diaprojektion)
- **16:9:** Aktueller Widescreen-Standard (HDTV, Beamer)
- **21:9:** Cinemascope (Kino, Gaming)
- **2.39:1:** Anamorphes Kinoformat

---

## Videoschnittstellen

### HDMI (High-Definition Multimedia Interface)
- Verbreitetster Standard für Consumer und professionell
- Überträgt Audio und Video über ein Kabel
- Versionen:
  - **HDMI 1.4:** bis 4K@30fps
  - **HDMI 2.0:** bis 4K@60fps, HDR
  - **HDMI 2.1:** bis 8K@60fps, 4K@120fps
- **Maximale Kabellänge:** ca. 5–10 m (ohne Verstärker)
- Nachteil: kein locking-Mechanismus, nicht für Touring geeignet

### SDI (Serial Digital Interface)
- **Profi-Standard** für Broadcast und Film
- Koaxialkabel (BNC-Stecker), entriegelbar
- Versionen:
  - **SD-SDI:** 270 Mbit/s
  - **HD-SDI:** 1,5 Gbit/s (1080i/p, 720p)
  - **3G-SDI:** 3 Gbit/s (1080p60)
  - **12G-SDI:** 12 Gbit/s (4K60)
- Maximale Länge: bis 200 m (HD-SDI), mit Reclockern weiter
- Vorteil: Robuste Verbindung, hohe Reichweite, Audio-Einbettung

### DisplayPort
- PC/Workstation-Standard
- **DisplayPort 1.4:** bis 8K@60fps
- Locking-Mechanismus vorhanden
- Einsatz: Grafikkarten-Ausgabe, Mediaplayer

### DVI (Digital Visual Interface)
- Älterer Standard, nur Video
- Single-Link: bis 1920×1200
- Dual-Link: bis 2560×1600
- Wird zunehmend durch HDMI und DisplayPort ersetzt

### VGA (Video Graphics Array)
- Analoges Signal, veraltet
- Kein digitales Signal, anfällig für Störungen
- Noch in älteren Installationen vorhanden

---

## NDI (Network Device Interface)
- **IP-basiertes Videoübertragungsprotokoll** von NewTek/Vizrt
- Überträgt Video über Standard-LAN-Netzwerk (Gigabit Ethernet)
- Kein spezifisches Videokabel notwendig
- Geringe Latenz (ca. 1–3 Frames)
- Einsatz: Broadcast, virtuelle Produktion, große Installations
- **NDI HX:** komprimiertes Format für schmalere Bandbreite
- Gleichzeitig viele Signale über ein Netzwerk möglich

---

## Projektionstechnik

### Projektionstypen

**DLP (Digital Light Processing)**
- Digitaler Mikrospiegel-Chip (DMD)
- Hoher Kontrast, scharfe Bilder
- Für große Veranstaltungsbeamer weit verbreitet
- Kein "Ausbrennen" des Chips

**LCD (Liquid Crystal Display)**
- Drei LCD-Panels für RGB
- Gute Farbwiedergabe, günstiger
- Pixelgitter sichtbar bei großen Bildern

**LCOS (Liquid Crystal on Silicon)**
- Kombination aus LCD und DLP
- Sehr hohe Auflösung, hochwertig

**Laserprojektor**
- Festkörperlaser als Lichtquelle
- Hohe Helligkeit, lange Lebensdauer (> 20.000 h), kein Lampenwechsel
- Sofortstart, keine Abkühlphase
- Kontrast: bis 10.000:1 und mehr

### Wichtige Kenngrößen

**ANSI-Lumen**
- Standardisierter Messwert für Lichtstrom von Projektoren
- Gemessen nach ANSI-Norm (IT7.228)
- Typische Werte:
  - Meetingroom-Projektor: 3.000–5.000 ANSI-Lumen
  - Veranstaltungsprojektor: 10.000–30.000 ANSI-Lumen
  - Großprojektion: 30.000–100.000+ ANSI-Lumen

**Throw Ratio (Wurfverhältnis)**
Verhältnis von Projektionsabstand zu Bildbreite:
`Throw Ratio = Abstand / Bildbreite`

- **Short Throw:** < 1:1 (z.B. 0,5:1 – sehr kurzer Abstand)
- **Standard:** 1,5:1 – 2:1
- **Long Throw:** > 2,5:1

Beispiel: Projektor mit Throw Ratio 2:1, gewünschte Bildbreite 4 m:
`Abstand = 2 × 4 m = 8 m`

**Kontrastverhältnis**
- Native (echtes) Kontrastverhältnis wichtiger als dynamisches
- Typisch: 1000:1 bis 10.000:1

### Projektionsflächen
- **Frontprojektion:** Leinwand reflektiert, Projektor vor der Leinwand
  - Matt weiß: gleichmäßige Streuung, geringe Helligkeit
  - Gain > 1: Licht wird stärker reflektiert, aber Sichtwinkel verringert sich
- **Rückprojektion:** Projektor hinter Leinwand, Zuschauer schauen auf Vorderseite
  - Kein Lichtschattenwurf durch Personen vor Leinwand
  - Benötigt spezielle Rückprojektionsfolie/-leinwand

### Edge Blending
Bei mehreren Projektoren zur Erstellung eines nahtlosen Gesamtbildes:
- Überlappungsbereich (Overlap) der benachbarten Projektoren
- Software/Hardware blendet Ränder weich aus (Gamma-Korrektur)
- **Warping:** geometrische Entzerrung für gebogene oder unregelmäßige Flächen

---

## LED-Walls

### Grundprinzip
LED-Walls bestehen aus einzelnen **LED-Tiles (Modulen)**, die zu einer großen Displayfläche zusammengesetzt werden. Jedes Modul enthält viele RGB-LED-Cluster.

### Pixel-Pitch
Der Pixel-Pitch (PP) ist der Abstand zwischen zwei benachbarten LED-Clustern in Millimetern.

| Pixel-Pitch | Mindestbetrachtungsabstand | Anwendung |
|---|---|---|
| PP 1,5 – 2,5 mm | 1,5 – 3 m | Studio, nahes Backstage-Display |
| PP 2,6 – 4 mm | 2,5 – 5 m | Indoor, Konzert-Screen |
| PP 5 – 8 mm | 5 – 10 m | Große Indoor-Events |
| PP 8 – 16 mm | 8 – 20 m | Outdoor, LED-Displays auf Stadien |

**Faustformel Mindestabstand:** `Mindestabstand (m) ≈ Pixel-Pitch (mm) × 1`

### Helligkeit (Brightness)
- Einheit: **cd/m² (Nit)**
- Indoor: 800–2.000 cd/m²
- Outdoor (direkte Sonneneinstrahlung): 5.000–10.000+ cd/m²

### Refresh-Rate
- Wie oft die LED-Wall pro Sekunde neu berechnet wird
- Niedrige Refresh-Rate: **Flimmern auf Videokameras** (Rolling Shutter-Artefakte)
- ≥ 3840 Hz: kamerasicher (flimmerfrei auf Video)

### LED-Wall-Controller und Prozessoren
- **Novastar, Colorlight, Brompton Technology:** gängige Controller-Hersteller
- Verarbeiten das Eingangssignal (HDMI/SDI) und verteilen auf die Tiles
- Steuern Helligkeit, Farbkalibrierung, Bildgeometrie

### Aufbau und Verbindung
- Tiles über proprietäre Datenverbindungen verbunden (Kabelnetz im Gerüst)
- Stromversorgung über integrierte Netzteile (230 V je Tile oder zentrale Verteilung)
- Kühlung: passive (ohne Lüfter) oder aktive Kühlung

---

## Videoserver und Mediaplayer

### Videoserver
Professionelle Systeme zur Wiedergabe und Live-Manipulation von Videoinhalten:
- **Resolume Arena / Avenue:** populäre VJ-Software für Events
- **Disguise (d3):** High-End für große Produktionen, virtuelle Produktion
- **Green Hippo:** Wandelbare Installation und Events
- **Dataton Watchout:** Multiscreen-Playout für große Installationen

**Funktionen:**
- Mehrere Ausgänge gleichzeitig
- Echtzeit-Effekte und -Manipulation
- Synchronisation mit Licht- und Tonanlagen (SMPTE-Timecode, MIDI)
- Mapping auf beliebige Flächen (Projection Mapping)

### Mediaplayer
Einfachere Wiedergabe-Hardware für Loops und Show-Playback:
- **Barco E2 / S3:** Event-Controller mit integriertem Playback
- **Black Magic HyperDeck:** professioneller Broadcast-Mediaplayer

### SMPTE-Timecode
- Zeitsynchronisationsformat für Audio-/Video-Synchronisation
- Format: `HH:MM:SS:FF` (Stunden:Minuten:Sekunden:Frames)
- Ermöglicht absolute Zeitreferenz für alle Systeme gleichzeitig
- In professionellen Shows: Licht, Ton, Video, Pyrotechnik laufen synchron
