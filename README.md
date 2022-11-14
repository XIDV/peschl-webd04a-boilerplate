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

Dieses Projekt dient als Demonstration für die HTML-Elemente `main`, `header`, `nav`, `footer`, `section`, `article` und `aside`. Ferner werden die Elemente `figure` und `figcaption` vorgestellt.  
Darüber hinaus werden Formular-Elemente, das `canvas`-Element und die native Einbindung von Vidos mithilfe des `video`-Elments präsentiert.

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

`main` beinhaltet vier Elemente vom Typ `section`. Alle diese Sectionen verfügen über die Klasse `mainSection`, besitzen jedoch alle eine eigene ID. Die Sektionen schaffen eine thematische Strukturierung.

* `welcome`
* `services`
* `about`
* `contact`

Jede der Sektionen verfügt über ein `header`-Element mit der Klasse `sectionHeader` und einem DIV mit der Klasse `sectionContent`.

#### Die Section `welcome`

Innerhalb dieser Sektion wurd das `video`-Element verwendet. Es verfügt hier zusätzlich über die Klasse `videoContent` die Eigenschaften `loop` um die Wiedergabe in Dauerschleife zu aktivieren, `muted` damit **keine** Ausgabe von Ton erfolgt, sowie `autoplay` um eine automatische Wiedergabe beim laden der Seite zu realisieren. Die Bedienelemente (`controls`) wurden hier absichtlich **nicht** eingeblendet!   
Innerhalb von `video` befinden sich zwei `source`-Elemente um dem Browser zwei Auswahlmöglichkeiten bereitstellen zu können, welches Format (mp4 oder ogv) abgespielt werden soll. Sollte der Browser mit keinem der angebotenen Formate etwas anfangen können wird als Fallback ein entprechender Text angezeigt.

#### Die Sektion `services`

Innerhalb dieser Sektion wird eine weitere Stufe der Strukturierung realisiert. Der `sectionContent` wird hierfür in vier `article`-Elemente unterteilt. Jeder dieser Artikel hat eine andere (hypthetische) Dienstleistung zum Thema.  
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

Die übrigen Anweisungen im Bereich "Author's custom styles" der `main.css` sind selbsterklärend und bedürfen daher keiner detailierten Erläuterung.  
Ziel war es ein responsives Layout zu erstellen. Hierfür wurde ein Gestaltungsraster verwendet welches auf den `#mainWrapper` angewendet wurde. Entsprechend des jeweils verwendeten Viewport wird das Layout mittels Mediaqueries sinnvoll angepasst. Die Breakpoints befinden sich bei 820px, bzw. 1000px.

**Anmerkung:** In der Aufgabenanweisung waren feste Größen für das `video`- und `canvas`-Element gefordert! Dementsprechend kommt es bei sehr kleinen VP zu einem overvlow kommen, dem mit einem an passender Stelle definierten `overflow: hidden;` begegnet wird.

Die `#mainNav` wurde mit `position: sticky; top: 0;` an der oberen Kante des VP fixiert. In Abhägigkeit von der Breite des VP wird die `#pageNav` angezeigt, bzw. versteckt. Hierzu erfahren Sie mehr im folgenden Abschnitt "Informationen zu `main.js`".

---

## Informationen zu `main.js`

Einstiegspunkt in das Script ist `$(function () {...})`. Dies stellt in jQuery das Äquivalent des EventListeners `DOMContentLoaded` dar.  
Innheralb dieser Funktion sind weitere EventListener definiert. Ferner erfolgen hier die initialen Aufrufe der Funktionen `setMenuVisibility()` und `initMyNameCanvas()`. Das gesamte Skript dient der Steuerung / Manipulation der HTML-Elemente mit den IDs `#pageNav`, `#mainNavButton` und `#myName`.

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

