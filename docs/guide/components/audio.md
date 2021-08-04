---
title: Audio
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/audio.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie Audio-Komponenten eingesetzt werden.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Audio
![Audio in Storytellr.js](../../assets/illustration/undraw_audio_player.svg)

#### Inhalt in diesem Abschnitt
[[toc]]

## Einzelnes Audio
#### Komponent einsetzen
Mit `HTML5` kannst du einfach deine eigenen lokal abgespeicherten Audios auf deiner Webseite einbetten.
Du kannst verschiedene Quellen mit verschiedenen Dateiformaten angeben, der Browser wählt die für ihn passende
Version aus. Storytellr bietet dir einige CSS-Klassen, die dir den Einsatz der Audios zusätzlich vereinfachen.

```html{2-9}
<section class="story-section">
  <div class="story-audio-container">
    <audio class="story-audio-player" controls>
      <source src="../src/assets/audio/audio.ogg" type="audio/ogg">
      <source src="../src/assets/audio/audio.mp3" type="audio/mpeg">
      Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
      <a href="../src/assets/audio/audio.mp3">herunterladen</a> und in deinem eigenen Audio-Player
      anhören.
    </audio>
    <div class="story-audio-caption">
      Caption 1
    </div>
  </div>
</section>
```

Du kannst deinen HTML5-Audios verschiedene Attribute für die Steuerung deiner Audios mitgeben.
| Attribute | Beschreibung |
| ------------- |------------- |
| `src`<span class="required-star">*</span> | Pfad zum Audio. |
| `autoplay` | Automatisches Abspielen des Audios. Funktioniert in modernen Browsern nur, wenn das Audio stumm `muted` geschalten wurde. |
| `controls` | Zeigt die Steuerelemente des Audios an. |
| `loop` | Audio wird in einer Schlaufe wiedergegeben. |
| `muted` | Audio wird stumm abgespielt. |


#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-audio-container` | Klasse für das Styling des Containers für das Audio. |
| `.story-audio-player` | Klasse für das Styling des `<audio>` Element. |
| `.story-audio-caption` | Klasse für das Styling der Beschreibung des Audios. |

## Slideshow
<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Audio-Slideshow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

#### Komponent einsetzen
Mit Storytellr kannst du einfach deine eigenen lokal abgespeicherten Audios auf deiner Webseite einbetten und eine Slideshow generieren lassen.
Du kannst verschiedene Quellen mit verschiedenen Dateiformaten angeben, der Browser wählt die für ihn passende
Version aus. Storytellr bietet dir zusätzlich einige CSS-Klassen, die dir den Einsatz der Audios zusätzlich vereinfachen.

```html
<section class="story-section">
  <div class="story-audio-slideshow" id="audioSlideshow">
    <div class="story-audio-slideshow-container">
      <div class="story-audio-slideshow-text">
        <p>Alfredo</p>
      </div>
      <audio class="story-audio-player" controls>
        <source src="../src/assets/audio/audio01.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio01.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio01.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-slideshow-caption">
        Beschreibung zu Audio eins.
      </div>
    </div>

    <div class="story-audio-slideshow-container">
      <div class="story-audio-slideshow-text">
        <p>Affra</p>
      </div>
      <audio class="story-audio-player" controls>
        <source src="../src/assets/audio/audio02.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio02.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio02.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-slideshow-caption">
        Beschreibung zu Audio zwei.
      </div>
    </div>

    <div class="story-audio-slideshow-container">
      <div class="story-audio-slideshow-text">
        <p>Bernardo</p>
      </div>
      <audio class="story-audio-player" controls>
        <source src="../src/assets/audio/audio03.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio03.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio03.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-slideshow-caption">
        Beschreibung zu Audio drei.
      </div>
    </div>
  </div>
</section>
```

Sobald das Grundgerüst für die Audio-Slideshow steht, kannst du diese nun mit der **Storytellr.js**-Funktion generieren lassen.
```js
new $story.AudioSlideshow({
  id: "audioSlideshow", // deine definierte ID
  count: true, // default: false
  autoplay: true // default: true
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | audioSlideshow| Deine zuvor definierte ID im HTML. |
| `count`      |  `Boolean`  | `true` / `false` | Nummerierung der einzelnen Audios. |
| `autoplay` | `Boolean`  |  `true` / `false` | Automatisches Abspielen beim durchklicken. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<section class="story-section">
  <div class="story-audio-slideshow" id="audioSlideshow">
    <div class="story-audio-slideshow-container" style="display: block;">
      <div class="story-audio-slideshow-text">
        <p>Alfredo</p>
      </div>
      <audio class="story-audio-player" controls="">
        <source src="../src/assets/audio/audio01.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio01.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio01.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-controllers">
        <span class="story-audio-controller story-audio-controller-0 active-audio-controller" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 0)"></span>
        <span class="story-audio-controller story-audio-controller-1" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 1)"></span>
        <span class="story-audio-controller story-audio-controller-2" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 2)"></span>
      </div>
      <div class="story-audio-slideshow-caption">(1 / 3) Beschreibung zu Audio eins.</div>
    </div>

    <div class="story-audio-slideshow-container" style="display: none;">
      <div class="story-audio-slideshow-text">
        <p>Affra</p>
      </div>
      <audio class="story-audio-player" controls="">
        <source src="../src/assets/audio/audio02.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio02.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio02.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-controllers">
        <span class="story-audio-controller story-audio-controller-0 active-audio-controller" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 0)"></span>
        <span class="story-audio-controller story-audio-controller-1" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 1)"></span>
        <span class="story-audio-controller story-audio-controller-2" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 2)"></span>
      </div>
      <div class="story-audio-slideshow-caption">(2 / 3) Beschreibung zu Audio zwei.</div>
    </div>

    <div class="story-audio-slideshow-container" style="display: none;">
      <div class="story-audio-slideshow-text">
        <p>Bernardo</p>
      </div>
      <audio class="story-audio-player" controls="">
        <source src="../src/assets/audio/audio03.ogg" type="audio/ogg">
        <source src="../src/assets/audio/audio03.mp3" type="audio/mpeg">
        Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
        <a href="../src/assets/audio/audio03.mp3">herunterladen</a> und in deinem eigenen Audio-Player
        anhören.
      </audio>
      <div class="story-audio-controllers">
        <span class="story-audio-controller story-audio-controller-0 active-audio-controller" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 0)"></span>
        <span class="story-audio-controller story-audio-controller-1" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 1)"></span>
        <span class="story-audio-controller story-audio-controller-2" onclick="$story.AudioSlideshow.showCurrentAudio(&quot;audioSlideshow&quot;, true, 2)"></span>
      </div>
      <div class="story-audio-slideshow-caption">(3 / 3) Beschreibung zu Audio drei.</div>
    </div>
  </div>
</section>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-audio-slideshow` | Klasse für das Styling des Wrappers der Slideshow. |
| `.story-audio-slideshow-container` | Klasse für das Styling des Containers der Slideshow. |
| `.story-audio-slideshow-text` | Klasse für das Styling des Textes oberhalb des Audio. |
| `.story-audio-player` | Klasse für das `<audio>` Element. |
| `.story-audio-controllers` | Klasse für das Styling des Wrappers der Controller. |
| `.story-audio-controller` | Klasse für das Styling der einzelnen Controller. |
| `.active-audio-controller` | Klasse für das Styling des aktiven Controllers. |

