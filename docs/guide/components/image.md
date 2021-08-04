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

#### Inhalt in diesem Abschnitt
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
| `.story-image-zoom` | Klasse für das Styling des Bildes, das *normal* auf der Webseite dargestellt wird. |
| `.story-image-zoom-modal` | Klasse für das Styling des Modals, das beim Klick aufgerufen wird. |
| `.story-image-zoom-close` | Klasse für das Styling des Icons `x` zum Schliessen des Modals. |
| `.story-image-zoom-modal-content` | Klasse für das Styling des Bildes im Modal. |
| `.story-image-zoom-modal-caption` | Klass für das Styling der Bildbeschreibung im Modal. |

## Slideshow
<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Image-Slideshow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

Die Bilder-Slideshow gehört zu der Grundausstattung des Storytellings auf Webseiten.
Mit **Storytellr** kannst du eine sehr einfache Slideshow generieren und anschliessend individuell stylen.

#### Komponent einsetzen
Um den Slideshow-Komponenten einzusetzen, benötigst du folgendes `HTML-Grundgerüst`.
Achte beim Einsatz der Bilder darauf, dass du die `alt`-Attribute definierst. 
Dadurch können die Bilder besser bei Google gefunden werden.

```html{4,10,16}
<section class="story-section">
  <div class="story-image-slideshow" id="imageSlideshow">
    <div class="story-image">
      <img alt="Beschreibung zu Bild 1" src="../src/assets/images/image1.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 1
      </div>
    </div>
    <div class="story-image">
      <img alt="Beschreibung zu Bild 2" src="../src/assets/images/image2.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 2
      </div>
    </div>
    <div class="story-image">
      <img alt="Beschreibung zu Bild 3" src="../src/assets/images/image3.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 3
      </div>
    </div>
  </div>
</section>
```

Sobald das `HTML-Grundgerüst` für die Bilder-Slideshow steht, kannst du die Funktion `$story.ImageSlideshow()` aufrufen.
Diese generiert dir die Slideshow.
```js
new $story.ImageSlideshow({
  id: "imageSlideshow", // deine definierte ID
  imageCount: true, // default: false
  autoplay: 9000, // default: false
  arrows: true, // default: false
  controller: "dot" // default: false
});
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | "imageSlideshow"| Deine zuvor definierte ID im HTML. |
| `imageCount` | `Boolean` | `true` / `false`| Die Nummerierung der Bilder wird oben-links angezeigt. |
| `autoplay` | `Integer` | Zahl oder `false`| Die Slideshow wird automatisch abgespielt. (Angabe in Millisekunden). |
| `arrows` | `Boolean` | `true` / `false` | Benötigst du Pfeile links und rechts als Navigation durch die Slideshow. |
| `controller` | `String` | "dot" oder `false` | Zusätzliche Navigationsmöglichkeit über Bullet-Points. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.

```html
<section class="story-section">
  <div class="story-image-slideshow" id="imageSlideshow">
    <div class="story-image" style="display: none;">
      <div class="story-slideNumber">1 / 3</div>
      <img alt="Beschreibung zu Bild 1" src="../src/assets/images/image1.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 1
      </div>
    </div>
    
    <div class="story-image active-slide" style="display: block;">
      <div class="story-slideNumber">2 / 3</div>
      <img alt="Beschreibung zu Bild 2" src="../src/assets/images/image2.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 2
      </div>
    </div>
    
    <div class="story-image" style="display: none;">
      <div class="story-slideNumber">3 / 3</div>
      <img alt="Beschreibung zu Bild 3" src="../src/assets/images/image3.jpg">
      <div class="story-image-caption">
        Beschreibung zu Bild 3
      </div>
    </div>
    
    <a class="story-prevImage" onclick="$story.ImageSlideshow.showNextSlide(&quot;imageSlideshow&quot;, -1)">❮</a>
    <a class="story-nextImage" onclick="$story.ImageSlideshow.showNextSlide(&quot;imageSlideshow&quot;, 1)">❯</a>
    
    <div class="story-image-controllers">
      <span class="story-image-controller-dot" onclick="$story.ImageSlideshow.showCurrentSlide(&quot;imageSlideshow&quot;, 0)"></span>
      <span class="story-image-controller-dot active-controller" onclick="$story.ImageSlideshow.showCurrentSlide(&quot;imageSlideshow&quot;, 1)"></span>
      <span class="story-image-controller-dot" onclick="$story.ImageSlideshow.showCurrentSlide(&quot;imageSlideshow&quot;, 2)"></span>
    </div>
  </div>
</section>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-image-slideshow` | Klasse für das Styling des Wrappers der Slideshow. |
| `.story-image` | Klasse für das Styling des Containers des Bildes. |
| `.story-slideNumber` | Klasse für das Styling der Nummerierung der Bilder. |
| `.story-image-caption` | Klasse für das Styling der Beschreibung der Bilder. |
| `.story-prevImage` | Klasse für das Styling des Pfeiles zum vorherigen Bild. |
| `.story-nextImage` | Klasse für das Styling des Pfeiles zum nächsten Bild. |
| `.story-image-controllers` | Klasse für das Styling des Wrappers der Controller. |
| `.story-image-controller-dot` | Klasse für das Styling der einzelnen Controller. |
| `.active-controller` | Klasse für das Styling des aktiven Controllers. |
