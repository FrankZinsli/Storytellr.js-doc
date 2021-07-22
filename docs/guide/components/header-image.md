---
title: Header-Bild
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/header-image.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie Header-Bilder eingesetzt werden.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Header-Bild
![Header-Image in Storytellr.js](../../assets/illustration/undraw_Images.svg)

Ein impressives **Header-Foto** kann beim Rezipienten genauso gut aufgenommen werden wie ein Video.
Wichtig ist dabei, dass die Qualität stimmt und die Sinne und Emotionen angeregt werden.

Mit Storytellr lassen sich **Header-Bilder** sehr einfach einbinden.

[[toc]]

## Einzelnes Foto
<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Header-Image.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

Damit du dieses Element nutzen kannst, musst du dem `<header>` wiederum eine eindeutige ID geben. Zusätzlich
benötigt der `<header>` die Klassen `story-header` und `story-header-image`.

#### Komponent einsetzen
Durch den nachfolgenden Aufbau kannst du einfach deinen Titel und allenfalls den Untertitel direkt über das Bild legen.

```html{1}
<header class="story-header story-header-image" id="yourHeaderImageId">
  <div class="story-main-title">
    <h1 class="story-text-h1">Titel</h1>
    <h2 class="story-text-h2">Subtitel</h2>
  </div>
</header>
```

Sobald du das `<html>` definiert hast, kannst du nun die Funktion aufrufen.

``` js
new $story.HeaderImage({
  id: "yourHeaderImageId", // deine definierte ID
  src: "../assets/images/header-image.jpg", // Pfad zu deinem Bild
  focusPointLeft: "50%", // default: "50%"
  focusPointTop: "50%", // default: "50%"
});
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | Header-Foto-ID| Deine zuvor definierte ID im HTML. |
| `src`      |  `String`  | `../src/to/image.jpg` | Pfad zum Ablageort des Bildes. |
| `focusPointLeft` | `String`  |  `50%` | Zentrum des Bildes von Links. |
| `focusPointTop` | `String`  |  `50%` | Zentrum des Bildes von Oben. |

::: tip Was ist ein Focus-Point?
Durch den Einsatz von sogenannten Focus-Points kann gewährleistet werden, dass der zentrale Ausschnitt des Bildes auf jedem Gerät erscheint.
Dies ist wichtig, wenn es sich um ein Vollbild-Foto handelt, das auf verschiedenen Endgeräten angezeigt wird.
So wird beim Responsiven-Verhalten von Bildern immer der Ausschnitt gezeigt, der als Focus-Point definiert wurde.
:::

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<header class="story-header story-header-image" id="yourHeaderImageId" style="background-image: url(../../src/assets/images/image1.jpg;); background-position: 50% 50%;">
  <div class="story-header-image-text">
    <h1 class="story-text-h1">Titel</h1>
    <h2 class="story-text-h2">Subtitel</h2>
  </div>
</header>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-header` | Klasse für das `<header>` Element. |
| `.story-header-image` | Styling für das Header-Image. |
| `.story-header-image-text` | Wrapper für den Text im `<header>`. |

## Foto-Slideshow
Hast du mehrere Bilder, die du gerne im `<header>` verwenden möchtest? Dann kannst du eine **Foto-Slideshow** erstellen.
Mit einer Slideshow im `<header>` werden deine Bilder in einer automatisch abspielenden Slideshow angezeigt. Dadurch können mehr Sinne und Emotionen auf einmal hervorgerufen werden.

#### Komponent einsetzen
Um die **Foto-Slideshow** benötigst du ein etwas spezielleres `<html>`-Gerüst. Am einfachsten ist es, wenn du das nachfolgende Gerüst kopierst und für deinen Einsatzzweck anpasst.
1. Ändere die ID im `<header>`.
2. Ändere die `src` in den `<img>`-Tags.
3. Passe die `data-story-focus-left` und `data-story-focus-top` für jedes Bild an.

```html
<header class="story-header story-header-image-slideshow" id="YourHeaderImageSlideshowId">
  <div class="story-header-image">
    <img src="../assets/images/image1.jpg" data-story-focus-left="40%" data-story-focus-top="30%">
  </div>
  <div class="story-header-image">
    <img src="../assets/images/image2.jpg" data-story-focus-left="50%" data-story-focus-top="50%">
  </div>
  <div class="story-header-image">
    <img src="../assets/images/image3.jpg" data-story-focus-left="60%" data-story-focus-top="30%">
  </div>
  <div class="story-header-image-text">
    <h1 class="story-text-h1">Titel</h1>
    <h2 class="story-text-h2">Subtitel</h2>
  </div>
</header>
```

Als Nächstes muss die entsprechende Funktion von Storytellr.js aufgerufen werden.

``` js
new $story.HeaderImageSlideshow({
  id: "YourHeaderImageSlideshowId", // deine definierte ID
  autoplay: 9000, // default: 9000
});
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | Header-Slideshow-ID| Deine zuvor definierte ID im HTML. |
| `autoplay` | `Integer`  |  `9000` | Geschwindigkeit der Slideshow in Millisekunden. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
Die einzelnen Bilder werden ausgeblendet und automatisch in den Hintergrund des `<header>` Elements geladen.
```html
<header class="story-header story-header-image-slideshow" id="YourHeaderImageSlideshowId" style="background-image: url(.../assets/images/image1.jpg;); background-position: 10% 10%; animation-delay: 9s;">
  <div class="story-header-image" style="display: none; opacity: 0;">
    <img src="../assets/images/image1.jpg" data-story-focus-left="10%" data-story-focus-top="10%">
  </div>
  <div class="story-header-image" style="display: none; opacity: 0;">
    <img src="../assets/images/image2.jpg" data-story-focus-left="30%" data-story-focus-top="30%">
  </div>
  <div class="story-header-image" style="display: none; opacity: 0;">
    <img src="../assets/images/image3.jp" data-story-focus-left="60%" data-story-focus-top="60%">
  </div>
  <div class="story-header-image-text">
    <h1 class="story-text-h1" style="font-size: 3rem">Titel</h1>
    <h2 class="story-text-h2" style="font-size: 2.5rem">Subtitel</h2>
  </div>
</header>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-header` | Klasse für das `<header>` Element. |
| `.story-header-image-slideshow` | Klasse für das Styling der Slideshow. |
| `.story-header-image-text` | Wrapper für den Text im `<header>`. |
