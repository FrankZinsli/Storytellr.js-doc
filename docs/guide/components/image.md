---
title: Bilder
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/image.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie Bilder eingesetzt werden.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Bilder
![Bilder in Storytellr.js](../../assets/illustration/undraw_image_viewer.svg)


[[toc]]

## Einzelnes Bild
Ein einzelnes Bild auf einer Webseite einzubinden ist keine Kunst. Storytellr.js bietet dir die Möglichkeit, die Klasse `story-image` zu nutzen.
Dadurch wird das Bild optimal in deine Storytelling-Webseite eingebunden.

#### Komponent einsetzen
Mit dem folgenden Code kannst du Bilder in deiner Storytelling Webseite einsetzen.

```html{2}
<section class="story-section">
  <img class="story-image" src="../path/to/image.jpg" alt="Beschreibung">
</section>
```

#### Verfügbare CSS-Klassen für Styling
Die folgende **CSS-Klasse** kann für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-image` | Klasse für das Styling der Bilder. |

## Vollbildmodus
Manchmal wird das eingebettete Bild für den Nutzer nicht gross genug dargestellt, mit Storytellr.js ist es möglich, dass du
das Bild durch einen Klick in einem Vollbildmodus öffnen kannst.

<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Image-Fullscreen.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### Komponent einsetzen
Zusätzlich musst du dem Bild eine individuelle ID und die Klasse `story-image-zoom` zuteilen.
Der `alt` Tag ist in diesem Fall besonders wichtig. Er wird im Vollbildmodus als Bildbeschreibung genutzt.

```html{2}
<section class="story-section">
  <img id="imageFullscreenID01" class="story-image-zoom" src="../path/to/image-zoom-01.jpg" alt="Beschreibung">
  <img id="imageFullscreenID02" class="story-image-zoom" src="../path/to/image-zoom-02.jpg" alt="Beschreibung">
</section>
```

Damit die Funktionalität bereitgestellt wird, musst du die Funktion `ImageFullscreen` aufrufen.
```js
new $story.ImageFullscreen({
  imageIds: [ // deine definierten IDs
    'imageFullscreenID01',
    'imageFullscreenID02'
  ]
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `imageIds`<span class="required-star">*</span> | `Array` | ImageFullscreen-IDs| Deine zuvor definierten IDs im HTML. |

#### Generierter HTML-Code
```html
<section class="story-section">
  <img id="yourImageZoomId" class="story-image-zoom" src="../path/to/image.jpg" alt="Beschreibung">
    <div id="modal-yourImageZoomId" class="story-image-zoom-modal" style="display: none;">
      <span id="closeModal-yourImageZoomId" class="story-image-zoom-close">×</span>
      <img id="modalContent-yourImageZoomId" class="story-image-zoom-modal-content" src="../path/to/image.jpg" alt="Snow">
      <div id="captionContent-yourImageZoomId" class="story-image-zoom-modal-caption">Beschreibung</div>
    </div>
</section>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-image-zoom` | Klasse für das Bild, das *normal* auf der Webseite dargestellt wird. |
| `.story-image-zoom-modal` | Klasse für das Modal, das beim Klick aufgerufen wird. |
| `.story-image-zoom-close` | Klasse für das Icon `x` zum Schliessen des Modals. |
| `.story-image-zoom-modal-content` | Klasse für das Bild im Modal. |
| `.story-image-zoom-modal-caption` | Klass für die Bildbeschreibung im Modal. |

## Slideshow
<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Header-Slideshow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### Komponent einsetzen
#### Generierter HTML-Code
#### Verfügbare CSS-Klassen für Styling

