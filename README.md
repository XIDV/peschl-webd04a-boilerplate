# Dokumentation zur Lösung des Praxisteils der ESA-7

Sebastian Peschl | &copy; 2022

![SubService-Logo](favicon.ico)

## Inhalt

* Basisinformationen
* Informationen zu `index.html`
* Informationen zu `main.css`
* Informationen zu `main.js`

---

## Basisinformationen

Dieses Projekt entstand im Rahmen eines Fernstudiums zum Web-Entwickler und setzt auf das HTML5 Boilerplate-Framework (Version 7) auf. Weitere Informationen zu HTML5 Boilerplate finden Sie [hier](https://html5boilerplate.com/). Die nachfolgenden Erläuterungen beziehen sich ausdrücklich **nicht** auf das Framework sondern ausschließlich auf die erstellten Inhalte.

Dieses Projekt dient als Demonstration für die HTML-Elemente `main`, `header`, `nav`, `footer`, `Sektion`, `article` und `aside`. Ferner werden die Elemente `figure` und `figcaption` vorgestellt.  
Darüber hinaus werden Formular-Elemente, das `canvas`-Element und die native Einbindung von Videos mithilfe des `video`-Elements präsentiert.

Um einen passenden Rahmen für die Demonstration zu schaffen wurde die Website eines fikiven Dienstleistungsunternehmens implementiert. Im Rahmen der Gestaltung einiger Schaltflächen und Links wird auf die frei verfügbaren Inhalte von [Fontawesome](https://fontawesome.com/icons) zurückgegriffen.

---

## Informationen zu `index.html`

Im `head`-Bereich der Seite wurde das `title`-Element sowie die `meta`-Elemente für `description` und `author` modifiziert bzw. ergänzt.

Innerhalb des `body`-Elements dient das DIV mit der ID `mainWrapper` als primäres Container-Element für den Content der Seite. Innerhalb dieses Containers befinden sich die Hauptelemente ...

* `nav` mit der ID `mainNav`
* `header` mit der ID `mainHeader`
* `main`
* `footer` mit der ID `mainFooter`

Bis auf das `main`-Element wurden alle diese Komponenten mit einer ID versehen, da diese Elemente auf der Seite an anderer Stelle und in einem anderen Zusammenhang nochmal auftauchen, bzw. auftauchen könnten. Um eben diese Komponenten mit CSS bzw. JS zielgerichtet selektieren bzw. ausschließen zu können erfolgt die Vergabe von IDs.

### Der Bereich `mainNav`

Der primäre Navigationsbereich der Seite gliedert sich in zwei Teile. Der ausschließlich internen `pageNav` und der `secondNav`. Letztere hält Links zu hypothetischen Social-Media-Kanälen, sowie ein Suchformular (`searchWrapper`) bereit.  
Im Rahmen des `searchWrapper` wird ein `input`-Element vom Typ `search` verwendet. Dieses verfügt einerseits über die Eigenschaft `autofocus` und ist andererseits mittels der Eigenschaft `list` mit einem `datalist`-Element mit der ID `searchList` verknüpft.

### Der Bereich `mainHeader`

Der Header-Bereich der Seite gliedert sich in zwei aufgabenspezifische Bereiche entsprechend ihrer jeweiligen IDs `logoContainer` und `headerTxtContainer`.

### Der Bereich `main`

`main` beinhaltet vier Elemente vom Typ `Sektion`. Alle diese Sektionen verfügen über die Klasse `mainSektion`, besitzen jedoch alle eine eigene ID. Die Sektionen schaffen eine thematische Strukturierung.

* `welcome`
* `services`
* `about`
* `contact`

Jede der Sektionen verfügt über ein `header`-Element mit der Klasse `SektionHeader` und einem DIV mit der Klasse `SektionContent`.

#### Die Sektion `welcome`

Innerhalb dieser Sektion wurd das `video`-Element verwendet. Es verfügt hier zusätzlich über die Klasse `videoContent` die Eigenschaften `loop` um die Wiedergabe in Dauerschleife zu aktivieren, `muted` damit **keine** Ausgabe von Ton erfolgt, sowie `autoplay` um eine automatische Wiedergabe beim laden der Seite zu realisieren. Die Bedienelemente (`controls`) wurden hier absichtlich **nicht** eingeblendet!   
Innerhalb von `video` befinden sich zwei `source`-Elemente um dem Browser zwei Auswahlmöglichkeiten bereitstellen zu können, welches Format (mp4 oder ogv) abgespielt werden soll. Sollte der Browser mit keinem der angebotenen Formate etwas anfangen können wird als Fallback ein entsprechender Text angezeigt.

#### Die Sektion `services`

Innerhalb dieser Sektion wird eine weitere Stufe der Strukturierung realisiert. Der `SektionContent` wird hierfür in vier `article`-Elemente unterteilt. Jeder dieser Artikel hat eine andere (hypothetische) Dienstleistung zum Thema.  
In jedem Artikel findet eine weitere Unterteilung statt. Neben textlichen Inhalten werden hier die Elemente `figure`, `figcaption`, sowie `aside` mit `details` und `summary` verwendet.

In diesem Zusammenhang verfügt das `details`-Element des ersten Artikels eine Besonderheit. Diese verfügt über die Eigenschaft `open`. Das sorgt dafür, dass es beim laden der Seite direkt geöffnet ist.

#### Die Sektion `about`

Innerhalb dieser Sektion erfolgt die Demonstration des `canvas`-Elements. Mehr hierzu finden Sie im Abschnitt "Informationen zu `main.js`" dieses Dokuments.

#### Die Sektion `contact`

Diese Sektion beinhaltet ein Beispiel eines Kontaktformulars. Es kommen `input`-Elemente vom Typ `radio`, `text`, `email`, `tel`, `range`, `number` und `checkbox` zum Einsatz. Darüber hinaus finden Sie die Elemente `label`, `datalist` und `textarea`.

Ein paar der `input`-Elemente verfügen über die Eigenschaft `placeholder="..."` und/oder `required`.  
Das `input`-Element mit der ID `numOfTraveler` ist mit der Eigenschaft `list` mit dem `datalist`-Element `travelerSteps` verknüpft. Hiermit wird die Anzeige von Beschriftungen enlang des Sliders ermöglicht.

---

## Informationen zu `main.css`

Nachfolgend werden die wichtigsten CSS-Anpassungen aufgelistet:

* Einbindung der Schriftart "Open Sans" via `@import`-Anweisung und Verwendung von [Google Fonts](https://fonts.google.com/).
* Definiton von CSS-(Farb)Variablen in `:root`.
* Definition von `font-size` und `font-family` in `html`

Die übrigen Anweisungen im Bereich "Author's custom styles" der `main.css` sind selbsterklärend und bedürfen daher keiner detaillierten Erläuterung.  
Ziel war es ein responsives Layout zu erstellen. Hierfür wurde ein Gestaltungsraster verwendet welches auf den `#mainWrapper` angewendet wurde. Entsprechend des jeweils verwendeten Viewport wird das Layout mittels Mediaqueries sinnvoll angepasst. Die Breakpoints befinden sich bei 820px, bzw. 1000px.

**Anmerkung:** In der Aufgabenanweisung waren feste Größen für das `video`- und `canvas`-Element gefordert! Dementsprechend kommt es bei sehr kleinen VP zu einem overvlow kommen, dem mit einem an passender Stelle definierten `overflow: hidden;` begegnet wird.

Die `#mainNav` wurde mit `position: sticky; top: 0;` an der oberen Kante des VP fixiert. In Abhängigkeit von der Breite des VP wird die `#pageNav` angezeigt, bzw. versteckt. Hierzu erfahren Sie mehr im folgenden Abschnitt "Informationen zu `main.js`".

---

## Informationen zu `main.js`

Einstiegspunkt in das Script ist `$(function () {...})`. Dies stellt in jQuery das Äquivalent des EventListeners `DOMContentLoaded` dar.  
erhalb dieser Funktion sind weitere EventListener definiert. Ferner erfolgen hier die initialen Aufrufe der Funktionen `setMenuVisibility()` und `initMyNameCanvas()`. Das gesamte Skript dient der Steuerung / Manipulation der HTML-Elemente mit den IDs `#pageNav`, `#mainNavButton` und `#myName`.

### Die Steuerung / Manipulation der `#pageNav` und des `#mainNavButton`

Die HTML-Elemente `#pageNav` und `#mainNavButton` werden über die Konstanten `menu` und `mnB` referenziert, wobei im Fall von `mnB` die eigentliche Referenz über die Property `button` hergestellt wird.

#### Das Objekt `mnB`

Neben `button` verfügt `mnB` über die folgenden Properties, bzw. Methoden:

* `topBar`
* `middleBar`
* `bottomBar`
* `menShown`
* `config`
* `setMenuButton()`
* `resetButton()`

| Property / Methode | Erläuterung |
| ------------------ | ----------- |
| `button` | Referenz auf das Element `#mainNavButton`. In Abhängigkeit v. s. VP-Breite wird dieses ein-, bzw. ausgeblendet.
| `topBar`, `middleBar`, `bottomBar` | Diese Properties referenzieren jeweils auf die entsprechenden DIVs aus denen des "Hamburger"-Symbol besteht. Diese Elemente werden in Abhängigkeit von MouseEvents, bzw. in Abhängigkeit des Wertes der Property `menShown` mithilfe der Methode `setMenuButton()` und eines entsprechenden Ojektes der `config`-Property manipuliert.
| `menShown` | Wert der Property gibt an ob `#pageNav` angezeigt wird. (Typ: boolean) |
| `config` | Innerhalb dieser Property sind mehrere Konfigurationsobjekte hinterlegt. Mit Hilfe der hier gesicherten CSS-Anweisungen wird der "Hamburger" der Schalftläche manipuliert. |
| `setMenueButton()` | Manipulation des "Hamburger". Die Methode wählt entsprechend des Parameters `status` das passende Konfigurationsobjekt aus `config` aus. Die eingelesenen CSS-Konfigurationen werden in der Konstanten `selection` gesichert. Nachfolgend wird über dies Konfigurationen mittels einer `for in`-Schleife Iteriert und die CSS-Konfigurationen mittels der jQuery-Methode `css()` auf die entsprechenden, über die Properties `topBar`, `middleBar`, `bottomBar` referenzierten HTML-Elemente angewendet. |
| `resetButton` | Methode welche den ausgangszustand des "Hamburgers" wiederherstellt. |

**Anmerkung zur Property `config`**: Um den Code innerhalb der `main.js` nicht unnötig aufzublähen wäre es sinnvoll die CSS-Konfigurationsanweisungen auszulagern. Diese Möglichkeit habe ich in auskommentierter Form im Code belassen. In diesem Zusammenahang wurden die Konfigurationsanweisungen in leicht modifizierter Form in eine `.json`-Datei ausgelagert und mit der jQuery-Methode `getJSON()` beim laden der Seite geladen.  
In diesem Kontext muss jedoch darauf geachtet werden, das der initiale Aufruf der Methode zwingend (etwas) zeitverzögert stattfinden muss. Ansonsten versucht das Script die initiale Button-Konfiguration auszuführen, obwohl die erforderlichen Konfigurationsanweisungen noch nicht geladen sind. Ich habe hier ein Delay von 50ms mit `setTimeout()` eingestellt.

#### EventListener und Funktionen

Die folgenden EventListener werden an `mnB.button` registriert:

* `mouseover`
* `mouseleave`
* `click`

Die Callback-Funktion des `click`-EL an `mnB.button` wendet die Methode `slideToggle()` von `menu` an. Hierdurch wird das Element `#pageNav` ein-, bzw. ausgeblendet.  
Außerdem wird hier der Wert von `menShown` invertiert.  
Abschließend wird die Methode `setMenuButton` aufgerufen, abhängig vom Wert von `menShown` mit passendem Parameter.

Ein weiterer `click`-EL ist an allen HTML-Elementen mit der Klasse `.mainNavLink` registriert:  
Hierüber wird sichergestellt, dass sich das Menü bei einm Klick auf einen Navigationslink das Menü bei kleinen VP automatisch ausblendet. Die Callback-Funktion prüft zunächst die aktuelle Breite des VP. Ist der VP kleiner als 1000px werden die folgenden Anweisungen ausgeführt.

* ausblenden von `#pageNav` mit Hilfe von `slideToggle`
* Invertierung des Wertes von `menShown`
* Aufruf d. Methode `resetButton()` zur Wiederherstellung der Ausgangskonfiguration des "Hamburgers".

Ein letzter EL an dieser Stelle ist am `(window)`-Objekt registriert und behandelt Events vom Typ `resize`. Bei Veränderungen der VP-Abmessungen wird die Funktion `setMenuVisibility()` aufgerufen, welche nachfolgend erläutert wird.

`setMenuVisibility()` prüft zu Beginn die Breite des VP.  
Ist die Breite kleiner 1000px wird `#pageNav` mit `menu.hide()` ausgeblendet und der "Hamburger"-Button mit der Methode `css()` und der Anweisung `display: block` angezeigt. Außerdem wird geprüft, ob das Menü bei Aufruf d. Methode sichtbar war. Dies geschieht durch Abfrage der Property `menShown`. Hat diese den Wert true wird die Methode `resetButton()` aufgerufen um sicherzustellen, dass sich der Button in der Grundkonfiguration befindet. Ansonsten kommt es in der Folge zu Anzeigefehlern des "Hamburger"-Buttons. Abschließend wird der Wert von `menShown` auf `false` korrigiert.  
Ist hingegen der VP größer (oder gleich) 1000px wird der "Hamburger"-Button über `css()` und `display: none;` ausgeblendet und die `#pageNav` mit `menu.show()` eingeblendet.

### Konfiguration und Manipulation von `canvas` `#myName`

Zur Ausgabe meines Namens durch "gezeichnete" Elemente kommen aufgabenspezifische Funktionen und ein eigens zu diesem Zweck erstelltes Anweisungs-/ Konfigurationsobjekt zum Einsatz.  
Zunächst zu den Funktionen:

| Funktion | Erläuterung |
| --- | --- |
| `initMyNameCanvas()` | Einstiegspunkt in die Konfiguration und Manipulation des CanvasRenderingContext2D <ul><li>Das `canvas`-Element `#myName` wird über die Konstante `myNameCanvas` referenziert.</li><li>Der CanvasRenderingContext2D von `myNameCanvas` wird mit Hilfe der Methode `getContext('2d')` erfasst und über die Konstante `ctx` referenziert.</li><li>Die Properties `strokeStyle` (Linienfarbe), `lineWidth` (Linienstärke) und `lineCap` (Linienenden) werden definiert.</li><li>Mit dem Aufruf der Methode `translate(20, 20)` wird der Koordinatenursprung des CanvasRenderingContext2D um jeweils 20px in x- und y-Richtung verschoben. Hierdurch wird für die folgenden Operationen etwas Abstand zu den Rändern des `canvas`-Elements hergestellt.</li><li>Die erforderlichen Zeichenanweisungen werden durch aufruf der Funktion `getCmdStack('Sebastain Peschl')` generiert und in der Konstanten `cmdStack` gesichert.</li><li>Mittels einer `for`-Schleife wird über das Array `cmdStack` iteriert.</li><li>Es wird geprüft ob das Aktuelle Element (`cmdStack[i]`) ebenfalls ein Array ist. Wenn dies der Fall ist wird die Funktion `drawLetter()` aufgerufen, welche als Parameter den CanvasRenderingContext2D und `cmdStack[i]` erhält. - Ist `cmdStack[i]` kein Array handelt es sich somit um eine "Einzelanweisung" welche direkt auf `ctx` angewendet werden kann. Hier handelt es sich immer um eine `translate`-Anweisung welche den Koordinatenursprung entweder um eine spezifische Zeichenbreite auf der x-Achse nach rechts, oder bei einem Wortende (Zeilenwechsel und Wagenrücklauf) auf x-Achse nach links und y-Achse nach unten verschiebt. Somit erübrigt sich an dieser Stelle eine weitere Differenzierung, welche jedoch bei komplexeren Operationen erforderlich sein könnte.</li></ul> |
| `getCmdStack('Sebastian Peschl SP')` | Diese Funktion erstellt aus einem ihr übergebenen String und mit Hilfe des Anweisungs-/ Konfigurationsobjekts `letters` eine Anweisungssequenz mit der dieser String auf den Canvas gezeichnet werden kann. <ul><li>Zuerst erfolgt die Lokalisation etwaiger Leerstellen innerhalb des übergebenen Strings. Hierfür wird die Funktion `getStringBreaks()` aufgerufen. Diese Funktion liefert ein Array mit den Indeces der Position der Leerstellen zurück. Diese werden in der Konstanten `stringBreaks` gesichert.</li><li>Eine Variable vom Typ Array mit dem Namen `substrings` wird deklariert.</li><li>In Abhänigkeit von der Anzahl der gefundenen `stringBreaks` wird die folgende Schleife n-mal durchlaufen. Hierbei wird unter Verwendung der Methoden `push()` und `substring()` der `nameString` "aufgetrennt" und die einzelnen Worte als separate Strings in `substings` gesichert.</li><li>Die lokale Variable `cmdStack` vom Typ Array wird deklariert. In dieser werden nachfolgend die einzelnen Anweisungen zum Zeichnen auf dem `canvas`-Element gesichert.</li><li>Deklaration und Initialisierung der Variablen `writtenLetter`. Der Wert dieser Variable definiert die gesamte Laufweite für die "Zeichnung" eines Wortes. Um diese Laufweite muss der Koordinatenursprung (am Ende des Wortes) nach Links (ins Negative) verschoben werden um eine linksbündige Ausrichtung zu erreichen.</li><li>Die beiden verschachtelten `for`-Schleifen iterieren über jedes Wort und jeden Buchstaben eines Wortes.</li><li>Hier erfolgt schließlich der Zugriff auf das Anweisungs-/ Konfigurationsobjekts `letters`. <ol><li>Zuerst wird der `letterOffset` (die Laufweite) des aktuellen Buchstabens bestimmt. Hierfür wird auf `letters` zugegriffen, der entsprechende Buchstabe selektiert und das **letzte** Element des Anweisungsarrays ausgelesen. Dies ist immer das Objekt `config` mit der Property `width`. Dieser Wert wird ausgelesen und um 5 weitere Pixel erhöht. Dies ist die Laufweite eines Buchstabens.</li><li>Im folgenden Schritt werden alle spezifischen Anweisungen des Aktuellen Buchstabens aus `letters` kopiert und mit der Methode `push()` dem Array `cmdStack` hinzugefügt.</li><li>`writtenLetter` wird der aktuelle Wert von `letterOffset` hinzuaddiert.</li><li>Abschließend wird `cmdStack` eine einzelne `translate`-Anweisung hinzugefügt. (Für die positive Verschiebung des Koordinatenursprungs auf der x-Achse entsprechend der ermittelten Laufweite des Buchstabens.)</li><li>Bei jedem Verlassen der inneren Schleife wird ebenfalls eine `translate`-Anweisung dem `cmdStack` hinzugefügt. Diese bewirkt jedoch den "Wagenrücklauf" am Ende eines Wortes. Hier kommt dann auch die Variable `writtenLetters`zum Einsatz, um eine exakte Verschiebung des Koordinatenursprungs nach Links zu bewirken.</li></ol></li><li>Mit der `return`-Anweisung wird die generierte Anweisungssequenz an die Funktion `initMyNameCanvas()` zurückgegeben.</li></ul> |
| `getStringBreaks()` | Es wird mittels einer `for`-Schleife über den übergebenen String iteriert und die ermittelten Indices an denen Leerstellen lokalisiert wurden mittels `push(i)` in das Array `breakIndeces` gesichert und an `getCmdStack()` zurückgegeben. |
| `drawLetter(ctx, letter)` | Diese Funktion führt die ihr übergeben Anweisungen zum Zeichnen der grafischen Elemente, aus denen die Buchstaben zusammengesetzt sind, aus. <ul><li>Mit der Methode `beginPath()` wird mit einem neuen Pfad begonnen. (Jeder Buchstabe welche auf den Canvas gezeichnet wird ist ein separater Pfad.)</li><li>Die spezifischen Anweisungen zum Zeichnen eines Buchstabens werden nacheinander ausgeführt. Hierfür werden das Kommando (der Name der auszuführenden Methode) und die entsprechenden Parameter in den Konstanten `cmd` und `param` gesichert und ausgeführt.</li><li>Abschließend wird der Pfad durch aufrufen der Methoden `stroke()` und  `closePath()` auf den Canvas gezeichnet und beendet.</li> </ul> |

#### Das Anweisungs-/ Konfigurationsobjekt `letters`

Dieses Objekt stellt einen stark vereinfachten und limitierten Zeichensatz dar. In ihm sind die Anweisungen zum Erstellen der erforderlichen Buchstaben in der Form gleichlautender Properties gesichert. So beinhaltet beispielsweise die Property `S` alle Anweisungen, welche zum zeichnen eines solchen Buchstaben auf den Canvas erforderlich sind und zusätzlich eine Konfigurationsobjekt, welches hier jedoch nur eine Information über die Breite des Buchstabens bereit hält. (Weitere Konfigurationsparameter für komplexere Anwendungen könnten hier hinterlegt werden.)  
Die einzelnen Zeichenanweisungen sind in der Form von Objekten organisiert. Sie beinhalten als Properties den Methodennamen (`cmd`) und die passenden Parameter (`param`) mit den entsprechenden Werten.

**Anmerkungen:** Auch hier wäre es sinnvoll dieses Objekt in eine `.json`-Datei auszulagern um den JS-Code übersichtlicher zu halten.  
Ferner könnte eine Erweiterung und Verfeinerung des Zeichensatzes weitaus komplexere Anwendungsmöglichkeiten ermöglichen.
