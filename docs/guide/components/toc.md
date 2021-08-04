---
title: TOC
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/toc.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie ein Inhaltsverzeichnis erstellt werden kann.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Table of Contents
![Table of Contents in Storytellr.js](../../assets/illustration/undraw_road_sign.svg)

Für das Storytelling auf einer Webseite ist es wichtig, dass der Nutzer schnell weiss, um was es geht. Mit einem Inhaltsverzeichnis (TOC)
weiss der Nutzer direkt, was ihn erwartet.

#### Komponent einsetzen
Um ein sogenanntes **TOC** (Table of contents) zu erstellen, musst du einen Ort definieren, an dem es platziert werden soll.

In diesem Beispiel wird das **TOC** innerhalb des div-Elements mit der ID `tableOfContentsID` erstellt.

Durch das Hinzufügen der Klasse `story-table-of-contents` wird das Standardstyling übernommen. Dies kannst du
in deinem CSS nach eigenen Wünschen abändern.

Damit **Storytellr.js** erkennt, welche Titel es in das **TOC** übernehmen soll, musst du dem jeweiligen Titel die Klasse
`story-toc-element-1` für ein Element in der ersten Ebene und die Klasse `story-toc-element-2` für ein Element in der zweiten Ebene hinzufügen.

Wenn du möchtest, dass ein **TOC** mit Ankerpunkten (Links zu den entsprechenden Titel) erstellt wird, musst du jedem Titel eine individuelle ID mitgeben.
```html{4,8-9,13-15}
<!-- Hier wird das Inhaltsverzeichnis erstellt -->
<section class="story-section">
  <h1 class="story-text-h1">Inhalt</h1>
  <div class="story-table-of-contents" id="tableOfContents"></div>
</section>
 
<section class="story-section">
  <h1 id="one" class="story-text-h1 story-toc-element-1">Title 1</h1>
  <h2 id="two" class="story-text-h2 story-toc-element-2">Title 1.1</h2>
</section>

<section class="story-section">
  <h1 id="three" class="story-text-h1 story-toc-element-1">Title 2</h1>
  <h2 id="four" class="story-text-h2 story-toc-element-2">Title 2.1</h2>
  <h3 id="five" class="story-text-h3 story-toc-element-2">Title 2.2</h3>
</section>
```

Damit das **TOC** generiert wird, muss die entsprechende Funktion aufgerufen werden. Rufe die Funktion auf und definiere die Parameter.

```js
new $story.TocGenerator({
  id: "tableOfContentsID", // deine definierte ID
  listType: "ul", // default: "ol" 
  navLink: true // default: true
});
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | TOC-ID| Deine zuvor definierte ID im HTML. |
| `listType`      |  `String`  | `ol` / `ul` | Nummerierte  oder umnummerierte Liste. |
| `navLink` | `Boolean`  |  `true` / `false` | Generiert Links zu den Anchor-Points. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<div class="story-table-of-contents" id="tableOfContents">
  <ol class="story-toc-list-ol">
    <li><a title="Title 1" href="#one">Title 1</a></li>
      <ol>
          <li><a title="Title 2" href="#two">Title 2</a></li>
      </ol>
    <li><a title="Title 1" href="#three">Title 1</a></li>
    <ol>
        <li><a title="Title 2" href="#four">Title 2</a></li>
        <li><a title="Title 2" href="#five">Title 2</a></li>
        <li><a title="Title 2" href="#six">Title 2</a></li>
    </ol>
  </ol>
</div>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-table-of-contents` | Klasse für das Styling des Wrappers des TOC. |
| `.story-toc-list-ol` | Klasse für das Styling der `<ol>` Liste. *(je nach Konfiguration)* |
| `.story-toc-list-ol` | Klasse für das Styling der `<ul>` Liste. *(je nach Konfiguration)*|
