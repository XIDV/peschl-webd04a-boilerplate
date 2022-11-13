# Dokumentation zur Lösung des Praxisteils der ESA-7

<small>Sebastian Peschl | &copy; 2022</small>

![SubService-Logo](favicon.ico)
## Inhalt

* Basisinformationen
* Informationen zu <code>index.html</code>
* Informationen zu <code>main.css</code>
* Informationen zu <code>main.js</code>

#

## Basisinformationen

Dieses Projekt entstand im Rahmen eines Fernstudiums zum Web-Entwickler und setzt auf das HTML5 Boilerplate-Framework (Version 7) auf. Weitere Informationen zu HTML5 Boilerplate finden Sie [hier](https://html5boilerplate.com/). Die nachfolgenden Erläuterungen beziehen sich ausdrücklich **nicht** auf das Framework sondern ausschließlich auf die erstellten Inhalte.

Dieses Projekt dient als Demonstration für die HTML-Elemente <code>main</code>, <code>header</code>, <code>nav</code>, <code>footer</code>, <code>section</code>, <code>article</code> und <code>aside</code>. Ferner werden die Elemente <code>figure</code> und <code>figcaption</code> vorgestellt.<br>
Darüber hinaus werden Formular-Elemente, das <code>canvas</code>-Element und die native Einbindung von Vidos mithilfe des <code>video</code>-Elments präsentiert.

Um einen passenden Rahmen für die Demonstration zu schaffen wurde die Website eines fikiven Dienstleistungsunternehmens implementiert. Im Rahmen der Gestaltung einiger Schaltflächen und Links wird auf die frei verfügbaren Inhalte von [Fontawesome](https://fontawesome.com/icons) zurückgegriffen.

#

## Informationen zu <code>index.html</code>
Im <code>head</code>-Bereich der Seite wurde das <code>title</code>-Element sowie die <code>meta</code>-Elemente für <code>description</code> und <code>author</code> modifiziert bzw. ergänzt.

Innerhalb des <code>body</code>-Elements dient das DIV mit der ID <code>mainWrapper</code> als primäres Container-Element für den Content der Seite. Innerhalb dieses Containers befinden sich die Hauptelemente ...

* <code>nav</code> mit der ID <code>mainNav</code>
* <code>header</code> mit der ID <code>mainHeader</code>
* <code>main</code>
* <code>footer</code> mit der ID <code>mainFooter</code>

Bis auf das <code>main</code>-Element wurden alle diese Komponenten mit einer ID versehen, da diese Elemente auf der Seite an anderer Stelle und in einem anderen Zusammenhang nochmal auftauchen, bzw. auftauchen könnten. Um eben diese Komponenten mit CSS bzw. JS zielgerichtet selektieren bzw. ausschließen zu können erfolgt die Vergabe von IDs.

### Der Bereich <code>mainNav</code>

Der primäre Navigationsbereich der Seite gliedert sich in zwei Teile. Der ausschließlich internen <code>pageNav</code> und der <code>secondNav</code>. Letztere hält Links zu hypothetischen Social-Media-Kanälen, sowie ein Suchformular (<code>searchWrapper</code>) bereit.<br>
Im Rahmen des <code>searchWrapper</code> wird ein <code>input</code>-Element vom Typ <code>search</code> verwendet. Dieses verfügt einerseits über die Eigenschaft <code>autofocus</code> und ist andererseits mittels der Eigenschaft <code>list</code> mit einem <code>datalist</code>-Element mit der ID <code>searchList</code> verknüpft.

### Der Bereich <code>mainHeader</code>

Der Header-Bereich der Seite gliedert sich in zwei aufgabenspezifische Bereiche entsprechend ihrer jeweiligen IDs <code>logoContainer</code> und <code>headerTxtContainer</code>.

### Der Bereich <code>main</code>

<code>main</code> beinhaltet vier Elemente vom Typ <code>section</code>. Alle diese Sectionen verfügen über die Klasse <code>mainSection</code>, besitzen jedoch alle eine eigene ID. Die Sektionen schaffen eine thematische Strukturierung.

* <code>welcome</code>
* <code>services</code>
* <code>about</code>
* <code>contact</code>

Jede der Sektionen verfügt über ein <code>header</code>-Element mit der Klasse <code>sectionHeader</code> und einem DIV mit der Klasse <code>sectionContent</code>.

#### <u>Die Section <code>welcome</code></u>

Innerhalb dieser Sektion wurd das <code>video</code>-Element verwendet. Es verfügt hier zusätzlich über die Klasse <code>videoContent</code> die Eigenschaften <code>loop</code> um die Wiedergabe in Dauerschleife zu aktivieren, <code>muted</code> damit **keine** Ausgabe von Ton erfolgt, sowie <code>autoplay</code> um eine automatische Wiedergabe beim laden der Seite zu realisieren. Die Bedienelemente (<code>controls</code>) wurden hier absichtlich **nicht** eingeblendet! <br>
Innerhalb von <code>video</code> befinden sich zwei <code>source</code>-Elemente um dem Browser zwei Auswahlmöglichkeiten bereitstellen zu können, welches Format (mp4 oder ogv) abgespielt werden soll. Sollte der Browser mit keinem der angebotenen Formate etwas anfangen können wird als Fallback ein entprechender Text angezeigt.

#### <u>Die Sektion <code>services</code></u>

Innerhalb dieser Sektion wird eine weitere Stufe der Strukturierung realisiert. Der <code>sectionContent</code> wird hierfür in vier <code>article</code>-Elemente unterteilt. Jeder dieser Artikel hat eine andere (hypthetische) Dienstleistung zum Thema. <br>
In jedem Artikel findet eine weitere Unterteilung statt. Neben textlichen Inhalten werden hier die Elemente <code>figure</code>, <code>figcaption</code>, sowie <code>aside</code> mit <code>details</code> und <code>summary</code> verwendet.

In diesem Zusammenhang verfügt das <code>details</code>-Element des ersten Artikels eine Besonderheit. Diese verfügt über die Eigenschaft <code>open</code>. Das sorgt dafür, dass es beim laden der Seite direkt geöffnet ist.

#### <u>Die Sektion <code>about</code></u>

Innerhalb dieser Sektion erfolgt die Demonstration des <code>canvas</code>-Elements. Mehr hierzu finden Sie im Abschnitt "Informationen zu <code>main.js</code>" dieses Dokuments.

#### <u>Die Sektion <code>contact</code></u>

Diese Sektion beinhaltet ein Beispiel eines Kontaktformulars. Es kommen <code>input</code>-Elemente vom Typ <code>radio</code>, <code>text</code>, <code>email</code>, <code>tel</code>, <code>range</code>, <code>number</code> und <code>checkbox</code> zum Einsatz. Darüber hinaus finden Sie die Elemente <code>label</code>, <code>datalist</code> und <code>textarea</code>.

Ein paar der <code>input</code>-Elemente verfügen über die Eigenschaft <code>placeholder="..."</code> und/oder <code>required</code>. <br>
Das <code>input</code>-Element mit der ID <code>numOfTraveler</code> ist mit der Eigenschaft <code>list</code> mit dem <code>datalist</code>-Element <code>travelerSteps</code> verknüpft. Hiermit wird die Anzeige von Beschriftungen enlang des Sliders ermöglicht.

#

## Informationen zu <code>main.css</code>