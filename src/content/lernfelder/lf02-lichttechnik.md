---
titel: "Lichttechnik"
nummer: 2
kuerzel: "LF02"
beschreibung: "Lichtphysikalische Grundlagen, Leuchtmitteltypen, DMX-Steuerung und professionelle Lichtgestaltung für Veranstaltungen."
lernziele:
  - "Photometrische Größen kennen und berechnen"
  - "Leuchtmitteltypen und ihre Eigenschaften unterscheiden"
  - "DMX512-Protokoll verstehen und konfigurieren"
  - "Grundlegende Lichtstile und Farbmischung anwenden"
  - "Scheinwerfertypen und Optiken kennen"
stunden: 100
farbe: "yellow"
---

## Photometrische Grundgrößen

Die Photometrie befasst sich mit der Messung von Licht, wie es das menschliche Auge wahrnimmt.

### Lichtstrom (Φ) – Lumen (lm)
Der Lichtstrom beschreibt die gesamte von einer Lichtquelle abgegebene Lichtmenge pro Zeiteinheit.
- Einheit: **Lumen (lm)**
- Beispielwerte: Glühlampe 60 W ≈ 700 lm | LED 10 W ≈ 800–1000 lm | 1000-W-Halogenlampe ≈ 22.000 lm

### Lichtstärke (I) – Candela (cd)
Die Lichtstärke beschreibt den Lichtstrom pro Raumwinkel in eine bestimmte Richtung.
- Einheit: **Candela (cd)**
- Formel: `I = Φ / Ω`
- Die Candela ist eine SI-Basiseinheit

### Beleuchtungsstärke (E) – Lux (lx)
Die Beleuchtungsstärke gibt an, wie viel Lichtstrom auf eine Fläche trifft.
- Einheit: **Lux (lx) = lm/m²**
- Formel: `E = Φ / A` oder `E = I / d²` (Abstandsgesetz)
- **Abstandsgesetz:** Verdopplung des Abstands → Viertelung der Beleuchtungsstärke

Richtwerte für Veranstaltungen:
| Anwendung | Beleuchtungsstärke |
|---|---|
| Notbeleuchtung | 1 lx |
| Filmausleuchtung (Grundlicht) | 500–1000 lx |
| TV-Studio | 1000–2000 lx |
| Bühnenspot | 5000–50.000 lx |

### Leuchtdichte (L) – Candela pro Quadratmeter (cd/m²)
Die Leuchtdichte beschreibt die wahrgenommene Helligkeit einer leuchtenden oder beleuchteten Fläche.
- Einheit: **cd/m²** (auch: Nit)
- Relevant für LED-Walls und Projektionen

### Farbtemperatur (T) – Kelvin (K)
Die Farbtemperatur beschreibt den Farbton von Weißlicht.
- **2700–3000 K:** Warmweiß (Glühlampe)
- **4000–4500 K:** Neutralweiß (Tageslichtlampe)
- **5500–6500 K:** Tageslicht (Daylight-LEDs, HMI-Lampen)
- **6500+ K:** Kaltweiß / bläulich

### Farbwiedergabeindex (CRI / Ra)
- Misst, wie natürlich Farben unter der Lichtquelle erscheinen
- Skala von 0–100 (100 = ideales Tageslicht)
- Veranstaltungstechnik: Ra ≥ 80–90 empfohlen

---

## Leuchtmitteltypen

### Halogenlampen
- **Wirkprinzip:** Glühwendel aus Wolfram mit Halogenfüllung (Iod-Wolfram-Kreislauf)
- Farbtemperatur: ca. 3200 K
- Wirkungsgrad: ca. 20–25 lm/W
- Vorteile: guter CRI (Ra ≈ 100), dimmbr, günstig
- Nachteile: hohe Wärmeentwicklung, kurze Lebensdauer (50–2000 h)
- **Achtung:** Halogenlampen NIE mit bloßen Händen anfassen! Hautfett zerstört die Quarzkolbenhülle.

### Entladungslampen (Discharge)
Licht entsteht durch elektrische Entladung in einem Gas.

**HMI (Halogen Metal Iodide)**
- Farbtemperatur: 5600 K (Tageslicht)
- Sehr hoher Lichtstrom (ca. 90–110 lm/W)
- Benötigt Vorschaltgerät (EVG/KVG)
- Einbrennzeit ca. 15–30 Minuten, nicht kalt wieder einschalten
- Einsatz: Tageslichtlampen, Follow-Spots, Filmbeleuchtung

**MSR (Medium Source Rare Earth)**
- Ähnlich HMI, kompakter
- Einsatz in Moving Heads (z.B. MAC 700)

### LED (Light Emitting Diode)
- **Wirkprinzip:** Elektrolumineszenz in Halbleitermaterialien
- Wirkungsgrad: 80–200+ lm/W (stark wachsend)
- Lebensdauer: 50.000–100.000 Betriebsstunden
- Sofort dimmbar und farbwechselbar (RGBW, RGBWA)
- Farbtemperatur je nach Ausführung
- **Kein UV/IR im Lichtstrahl** (Vorteil für Museen, empfindliche Materialien)

LED-Farbsysteme:
- **RGB:** Rot, Grün, Blau (additive Mischung)
- **RGBW:** + Weiß-LED für höhere Helligkeit und reineres Weiß
- **RGBWA:** + Amber für wärmere Weißtöne
- **Tunable White:** Zwei Weiß-LEDs mit verschiedenen Farbtemperaturen

---

## DMX512-Protokoll

DMX512 (Digital Multiplex) ist das Standardprotokoll zur digitalen Steuerung von Lichtequipment.

### Technische Grundlagen
- **Norm:** USITT DMX512-A (ANSI E1.11)
- **Übertragungsrate:** 250 kBaud
- **Kabel:** RS-485 (XLR 5-polig oder 3-polig)
  - Pin 1: Schirmung/Masse
  - Pin 2: Data– (negativ)
  - Pin 3: Data+ (positiv)
  - Pin 4+5: (zweites Datenpaar, selten genutzt)
- **Topologie:** Daisy-Chain (Linie), kein Stern
- **Abschlusswiderstand:** 120 Ω am Ende jeder DMX-Linie!

### Universum und Adressen
- 1 DMX-Universum = **512 Kanäle (Slots)**
- Jedes Gerät benötigt eine **Startadresse**
- Kanalanzahl pro Gerät variiert (z.B. LED-Par: 3 Kanäle für RGB, Moving Head: 20+ Kanäle)

**Adressberechnung:**
Letzte belegte Adresse = Startadresse + Kanalanzahl − 1

Beispiel: Moving Head auf Adresse 101 mit 18 Kanälen belegt Kanäle 101–118.

### DMX-Werte
- Pro Kanal: 1 Byte = Wert 0–255
- 0 = aus/minimum, 255 = an/maximum
- Entspricht je nach Kanal: Helligkeit, Farbe, Position, Gobo-Auswahl, etc.

### Art-Net und sACN
Für größere Installationen werden DMX-Universen über Netzwerk übertragen:
- **Art-Net:** weit verbreitet, UDP-basiert, Port 6454
- **sACN (E1.31):** ANSI-Standard, Multicast-fähig
- Beide unterstützen 256+ Universen

---

## Scheinwerfertypen

### Profilscheinwerfer (Ellipsoidal / Leko)
- Harter, scharf abgrenzbarer Lichtkegel
- Mit Formrahmen (Framing-Shutters), Gobo, Iris
- Einsatz: gezielte Ausleuchtung, Gobo-Projektion, Abblenden
- Beispiele: ETC Source Four, Robert Juliat

### Fresnel-Scheinwerfer
- Weich, breit einstellbarer Lichtkegel (Spot/Flood per Fokus)
- Typisches Bühnenlicht für gleichmäßige Grundausleuchtung
- Typische Leistungen: 500 W, 1000 W, 2000 W

### PAR-Scheinwerfer (Parabolic Aluminised Reflector)
- Geschlossene Einheit aus Lampe und Reflektor
- Ovaler Lichtfleck, keine Scharfstellung möglich
- LED-PARs heute Standard

### Moving Heads (Intelligente Scheinwerfer)
**Spot-Moving-Heads:**
- Harter Lichtkegel, Gobo, Prism, Iris, Zoom
- Beispiele: Martin MAC Aura, Robe Pointe, Claypaky Sharpy

**Wash-Moving-Heads:**
- Weicher, breiter Lichtkegel, kein Gobo
- Für Flächenausleuchtung und Farbwechsel
- Beispiele: Martin MAC Quantum Wash

**Beam-Moving-Heads:**
- Extrem eng und intensiv (Laser-ähnlich)
- Sichtbarer Strahl in Dunst/Nebel
- Beispiele: Sharpy, Claypaky B-Eye

### Follow-Spot
- Manuell gesteuerter Verfolgungsscheinwerfer
- Verfolgt bewegte Personen auf der Bühne
- Iris und Komet zur Größenanpassung

---

## Optische Elemente und Zubehör

### Gobo
- Metallscheibe oder Glasscheibe mit Ausschnitten
- Projiziert Muster oder Logos
- **Metalgobo:** einfache Muster (Silhouetten)
- **Glasgobo:** mehrfarbige, detaillierte Motive

### Iris
- Variable Blende zur Änderung des Leuchtfleckdurchmessers

### Framing-Shutters (Abschneideklappen)
- 4 Metallklappen zur stufenlosen Formgebung des Lichtkegels
- Ermöglichen präzises Abblenden an Architektur oder Bühnenrand

### Prism
- Optisches Element zur Vervielfachung des Lichtstrahls
- 3-Fach-Prism, 5-Fach-Prism, Linear-Prism

### Farbfilter (Gel)
- Farbige Folien aus Polyester (Lee, Rosco, Gamcolor)
- Werden in den Farbrahmen vor dem Scheinwerfer gesetzt
- Durch Wärme begrenzte Lebensdauer (bei Halogen)

---

## Farbmischung

### Additive Farbmischung (Licht)
Mischung von farbigem Licht – die Farben summieren sich:
- **Rot + Grün = Gelb**
- **Rot + Blau = Magenta**
- **Grün + Blau = Cyan**
- **Rot + Grün + Blau = Weiß**

Anwendung: RGB-LEDs, Farbscheinwerfer nebeneinander

### Subtraktive Farbmischung (Farbfilter)
Mischung von Farbfiltern – Farben werden aus dem weißen Licht herausgefiltert:
- **Cyan + Magenta = Blau**
- **Cyan + Yellow = Grün**
- **Magenta + Yellow = Rot**
- **Cyan + Magenta + Yellow = Schwarz (kein Licht)**

Anwendung: CMY-Farbmischer in Moving Heads

---

## Lichtgestaltung

### Lichtstile und -richtungen

**Frontlicht**
- Licht von vorne (aus der Richtung des Publikums)
- Gleichmäßige, flache Ausleuchtung ohne Schattenwurf
- Wirkt zweidimensional, "flach"

**Seitenlicht**
- Licht von der Seite (90°)
- Betont Körperformen, plastische Wirkung
- Klassisch im Tanztheater

**Gegenlicht (Backlight)**
- Licht von hinten
- Trennt Person vom Hintergrund
- Erzeugt Halo-Effekt, dramatisch wirkend

**Spitzlicht (Toplight)**
- Licht von oben (60°–90° Einfall)
- Modelliert Gesicht und Körper
- Schafft Tiefe und Dramatik

**Streifenlicht (Raking Light)**
- Flach einfallend von der Seite
- Betont Textur von Oberflächen

### Drei-Punkt-Ausleuchtung
Klassisches System aus:
1. **Key Light (Hauptlicht):** Dominantes, 45° von vorne-seitlich
2. **Fill Light (Aufhellicht):** Schwächeres Licht von gegenüberliegender Seite
3. **Back Light (Gegenlicht):** Trennt Motiv vom Hintergrund

### Farbpsychologie im Bühnenbereich
- **Warmtöne (rot, orange, gelb):** Wärme, Leidenschaft, Gefahr, festlich
- **Kühle Töne (blau, cyan):** Kälte, Trauer, Nacht, ruhig
- **Violett/Magenta:** Mystik, Luxus, Romantik
- **Grün:** Natur, Gift, Übernatürliches
