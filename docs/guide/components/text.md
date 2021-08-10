---
title: Text
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/text.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du, wie du Texte und Text-Slideshows einsetzen kannst.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Texte
![Texte beim Storytelling](../../assets/illustration/undraw_font.svg)

Für die Erzählung einer Geschichte sind Texte nicht ganz unwichtig. Mit emotionalisierenden, spannenden und 
zielgruppenorientierten Texten kann sehr gut gepunktet werden.
Dabei gibt es verschiedenes, das zu beachten ist.

#### Inhalt in diesem Abschnitt
[[toc]]

## Tipps für Texte
Auf einer Storytelling Webseite wird oft und viel Text eingesetzt. Jedoch sollte man versuchen, ein abwechslungsreiches
Erlebnis zu schaffen. Dafür muss nicht immer Text eingesetz werden. Kurze Texte machen neugierig und können 
einen roten Faden zu weiteren medialen Elementen herstellen. Lange eher langweilige Texte sind abstossend und
kommen bei der Zielgruppe in der Regel nicht gut an.

Damit du mit deinen Texten die Zielgruppe erreichst, musst du diese zuerst kennen.
Mache eine ausführliche Zielgruppenanalyse, damit du später deine Erkenntnisse in den Texten nutzen kannst.

Hier einige Tipps, die du bei deinen Texten nutzen kannst:
1. **Emotion** &#8594; Nutze emotionalisierende Texte, gehe dabei auf deine Erkenntnisse aus der Zielgruppenanalyse ein.
2. **Sinne** &#8594; Versuche, durch sensorisches Wording die Sinne der Zielgruppe anzusprechen.
3. **Fakten** &#8594; Verzichte auf langweilige Fakten. Spannende und unbekannte Fakten darfst du aber sehr gerne verwenden.
4. **Erinnerungen** &#8594; Gehe bei deinen Texten auf Erinnerungswerte oder Erfahrungen der Zielgruppe ein. So kann sie sich besser mit dem Text identifizieren.
5. **Struktur** &#8594; Strukturiere deine Texte und mache sie scannbar. Oft möchte die Zielgruppe längere Texte nur überfliegen.

#### Syntax
Strukturierte Texte sind nicht nur für die Rezipienten wichtig, beim richtigen Einsatz dankt dir auch Google bei der Bewertung deiner Webseite.
Um ein gut strukturierter Text zu schreiben, ist es sinnvoll, semantische HTML-Elemente zu verwenden. 
Semantische HTML-Elemente sind Elemente, die eine spezielle Bedeutung haben. Google kennt diese Bedeutung. 

| HTML-Tag        |  Beschreibung  | Beispiel
| ------------- | ------------- | ------------- |
| `<abbr>` | Wird für Abkürzungen genutzt. Beim Hovern über der Abkürzung wird die Beschreibung angezeigt. | <p><abbr title="Abbreviation">Abbr</abbr> ist die Abkürzung für Abkürzung.😊</p>  `<p><abbr title="Abbreviation">Abbr</abbr> ist die Abkürzung für Abkürzung.</p>` |
| `<blockquote>` | Wird für Zitate genutzt. Beim Einsatz von `<blockquote>` kann mittels `<blockquote cite="">` direkt die Quelle des Zitats angegeben werden. | <blockquote cite="https://storytellr.netlify.app/downloads/Leitfaden%20zu%20Storytelling%20auf%20Webseiten.pdf"><p>Der Leitfaden wurde auf der Basis verschiedener wissenschaftlicher Methoden aufgebaut.</p></blockquote> `<blockquote cite="https://storytellr.netlify.app/downloads/Leitfaden%20zu%20Storytelling%20auf%20Webseiten.pdf"><p>Der Leitfaden wurde auf der Basis verschiedener Wissenschaftlicher Methoden aufgebaut.</p></blockquote>` |
| `<dfn>` | Wird bei der Begriffsdefinition verwendet. | <p><dfn>Storytelling auf Webseiten</dfn> ist vereinfacht gesagt, das Erzählen von Geschichten auf einer Webseite. </p> `<p><dfn>Storytelling auf Webseiten</dfn> ist vereinfacht gesagt, das Erzählen von Geschichten auf einer Webseite. </p>`|
| `<code>` | Der `<code>` Tag definiert einen Code-Schnipsel. | <p><code>Storytellr.js</code> vereinfacht das programmieren.</p> `<p><code>Storytellr.js</code> vereinfacht das programmieren.</p>` |
| `<del>` | Manchmal möchtest du deinen Nutzern zeigen, welche Änderungen gemacht wurden. Mit `<del>` kannst du zeigen, welche Ausschnitte gelöscht wurden. | <p><del>Dieser Text wurde gelöscht.</del></p> `<p><del>Dieser Text wurde gelöscht.</del></p>`|
| `<ins>` | Ähnlich wie bei `<del>` kannst du auch aufzeigen, was alles neu ist. | <p><ins>Dieser Text ist neu.</ins></p> `<p><ins>Dieser Text ist neu.</ins></p>` |
| `<h1>` `<h2>` `<h3>` ... | Headings sind **wichtige** Elemente. Du kannst deinen Text dadurch strukturieren und scannbar machen.| <h1>Heading 1</h1> <h2>Heading 1.1</h2> `<h1>Heading 1</h1> <h2>Heading 1.1</h2>` |
| `<section>` | Wird genutzt, um die Webseite in verschiedene Abschnitte zu unterteilen. | <section>Section 1</section><section>Secttion 2</section> `<section>Section 1</section><section>Secttion 2</section>` |
| `<article>` | Um einzelne `<section>` Elemente noch weiter zu unterteilen, kannst du `<article>` Elemente einsetzten. | <section><article>Article 1</article><article>Article 2</article></section> `<section><article>Article 1</article><article>Article 2</article></section>`|

## Vordefinierte Klassen für Texte
Damit du das grundlegende Styling für deine Texte erhältst, bietet dir Storytellr verschiedene Klassen mit einem grundlegenden Styling.

```html{2-8}
<section class="story-section">
  <h1 class="story-text-h1">Title 1</h1>
  <h2 class="story-text-h2">Title 1.1</h2>
  <h1 class="story-text-h1">Title 2</h1>
  <h2 class="story-text-h2">Title 2.1</h2>
  <h3 class="story-text-h3">Title 2.2</h3>
  <h4 class="story-text-h4">Title 2.3</h4>
  <p class="story-text">Text in Paragraph</p>
</section>
```

Dieses Hinzufügen der Klassen führt dazu, dass die Texte wie folgt aussehen:
![Storytellr Klassen für Texte](../../assets/images/Texte.jpg)

### Warum nutzt Storytellr eigene Klassen für `h1` `h2` `h3` etc.
Der Grund, warum es Sinn macht, das Styling für die Überschriften in eigene Klassen zu verpacken ist, da es 
so einfacher ist, die Texte zu strukturieren. Viele Entwickler stylen direkt die Tags `<h1>`, `<h2>` etc. Dadurch 
gerät man aber in Versuchung, einen falschen Tag für die Überschrift zu verwenden, nur weil es vom Styling her passt.
Dies ist zwar für den Nutzer kein Problem, SEO-Technisch ist es aber nicht optimal. 

Storytellr hat aus diesem Grund die Überschriften auf einen Standard zurückgesetzt.

```css
h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
  font-style: normal;
  font-size: 1rem;
}
```

Natürlich darfst du auch eigene Klassen für das Styling verwenden oder du erweiterst die Stroytellr-Klassen.

## Slideshow
Mit **Storytellr.js** kannst du auch eine Slideshow für Texte nutzen. Das können zum Beispiel Fakten, Zitate oder Daten zu etwas sein.

#### Komponent einsetzen
Mit dem folgenden Code kannst du Text-Slideshows in deiner Storytelling Webseite einsetzen.
```html{2-17}
<section class="story-section">
 <div class="story-text-slideshow" id="textSlideshowID">
   <div class="story-text-slideshow-container">
     <h1>Titel</h1>
     <p>Text paragraph</p>
   </div>

   <div class="story-text-slideshow-container">
     <h1>Titel 2</h1>
     <p>Text paragraph 2</p>
   </div>

    <div class="story-text-slideshow-container">
      <h1>Titel 3</h1>
      <p>Text paragraph3</p>
    </div>
  </div>
</section>
```

Sobald du das `<html>` definiert hast, kannst du nun die Funktion aufrufen.

```js
new $story.TextSlideshow({
  id: "textSlideshowID" // deine definierte ID
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | textSlideshowID| Deine zuvor definierte ID im HTML. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.

```html
<section class="story-section">
  <div class="story-text-slideshow" id="textSlideshowID">
    <div class="story-text-slideshow-container" style="display: block;">
      <h1>Titel</h1>
      <p>Text paragraph</p>
      <div class="story-text-controllers">
        <span class="story-text-controller story-text-controller-0 active-text-controller" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 0)"></span>
        <span class="story-text-controller story-text-controller-1" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 1)"></span>
        <span class="story-text-controller story-text-controller-2" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 2)"></span>
      </div>
    </div>

    <div class="story-text-slideshow-container" style="display: none;">
      <h1>Titel 2</h1>
      <p>Text paragraph 2</p>
      <div class="story-text-controllers"><span class="story-text-controller story-text-controller-0 active-text-controller" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 0)"></span>
        <span class="story-text-controller story-text-controller-1" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 1)"></span>
        <span class="story-text-controller story-text-controller-2" onclick="$story.TextSlideshow.showCurrentText(&quot;Your-Text-Slideshow-Name&quot;, 2)"></span>
      </div>
    </div>

    <div class="story-text-slideshow-container" style="display: none;">
      <h1>Titel 3</h1>
      <p>Text paragraph3</p>
      <div class="story-text-controllers">
        <span class="story-text-controller story-text-controller-0 active-text-controller" onclick="$story.TextSlideshow.showCurrentText(&quot;textSlideshowID&quot;, 0)"></span>
        <span class="story-text-controller story-text-controller-1" onclick="$story.TextSlideshow.showCurrentText(&quot;textSlideshowID&quot;, 1)"></span>
        <span class="story-text-controller story-text-controller-2" onclick="$story.TextSlideshow.showCurrentText(&quot;textSlideshowIDe&quot;, 2)"></span>
      </div>
    </div>
    
  </div>
</section>
```
#### Verfügbare CSS-Klassen für Styling
Die folgende **CSS-Klasse** kann für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-text-slideshow` | Klasse für das Styling des Wrappers der Slideshow. |
| `.story-text-slideshow-container` | Klasse für das Styling des Containers der Slideshow. |
| `.story-text-controllers` | Klasse für das Styling des Wrappers der Controller. |
| `.story-text-controller` | Klasse für das Styling der einzelnen Controller. |
| `.active-text-controller` | Klasse für das Styling des aktiven Controllers. |
