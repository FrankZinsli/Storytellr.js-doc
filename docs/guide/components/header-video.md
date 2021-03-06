---
title: Header-Video
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/header-video.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie Header-Videos eingesetzt werden.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Header-Video
![Header-Video in Storytellr.js](../../assets/illustration/undraw_online_media.svg)

Um ein Vollbild Header-Video in deiner Storytelling-Webseite zu integrieren, hast du zwei Möglichkeiten.
Einerseits kannst du dafür ein lokales Video verwenden oder du kannst ein Video von **Vimeo** nutzen.

#### Inhalt in diesem Abschnitt
[[toc]]

::: warning Vimeo
Damit du ein Video von **Vimeo** als Hintergrund-Video nutzen kannst, benötigst du ein *Plus-, Pro-, Business- oder Premium-Account*.
:::

::: danger YouTube
Wenn du ein **YouTube**-Video als Hintergrund-Video nutzen möchtest, dann muss ich dich leider enttäuschen. YouTube bietet keine
Option, damit die Hintergrund-Videos auf allen Geräten funktionieren.
:::

## Lokal
<video width="1920" height="1080" autoplay  muted loop playsinline >
  <source src="../../assets/videos/Header-Video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

Storytellr.js bietet dir zwei vordefinierte Klassen, damit das Video optimal dargestellt wird:
`story-header` und `story-header-video`.

Bei allfälligen gestalterischen Änderungen, kannst du diese beiden Klassen mit deinem CSS überschreiben.

#### Komponent einsetzen
``` html{2-7}
<header class="story-header story-header-video">
  <video poster="../assets/images/image-header-video.jpg" autoplay playsinline muted loop>
    <source src="../assets/video/header-video.mp4" type="video/mp4">
    <source src="../src/assets/video/header-video.ogg" type="video/ogg">
    Leider unterstützt dein Browser keine Video-Tags. Wenn du möchtest, kannst du das Video
    <a href="../src/assets/video/header-video.mp4">herunterladen</a> und in deinem eigenen Video-Player anschauen.
  </video>

  <div class="story-header-video-text">
    <h1>Heading</h1>
    <p>Lorem ipsum...</p>
  </div>
</header>
```

Achte beim Einbinden des Videos auf die folgenden Parameter innerhalb des `<video>` Tags:
| Parameter | Beschreibung |
| ------------- | ------------- |
| `autoplay` | Das Video wird automatisch abgespielt. |
| `loop` | Das Video wird in einer Schlaufe wiedergegeben. |
| `muted` | Einige Browser verweigern das automatische Abspielen von Videos mit Ton. Wenn du das Video stumm schaltest, kann es auch direkt abgespielt werden. |
| `playsinline` | Das Video wird von Smartphones nicht im Video-Modus geöffnet, sondern bleibt an Ort und Stelle. |
| `poster` | Mit dem Poster-Parameter kannst du ein Bild definieren, das angezeigt werden soll, wenn das Video nicht abgespielt werden kann oder es gerade lädt. |
| `src` | Pfad zum Video. |

Wenn du über dem Video einen Text einblenden möchtest, kannst du wie im obigen Beispiel ein `div` Element definieren mit der Klasse `story-header-video-text`. Der Text wird über dem Video angezeigt.

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-header` | Klasse für das Styling des `<header>` Elements. |
| `.story-header-video` | Klasse für das Styling des `<div>` Elements, um das `<video>` Element herum. |
| `.story-header-video-text` | Klasse für das Styling für den Text auf dem Header Element. |

## Vimeo
Wichtig ist dabei, dass du dem `<header>` die Klassen `story-header` und `story-header-video` mitgibst. Zusätzlich benötigt
das Element eine individuelle ID, damit Storytellr.js erkennt, wo das Video platziert werden soll.

#### Komponent einsetzen
``` html{1}
<header class="story-header story-header-video" id="YourHeaderVideoId">
  <div class="story-header-video-text">
    <h1>Heading</h1>
    <p>Lorem ipsum...</p>
  </div>
</header>
```

Damit das **Header-Video** generiert wird, muss die entsprechende Funktion aufgerufen werden. Rufe die Funktion auf und definiere die Parameter.

```js
new $story.VideoPlayer({
  id: "YourHeaderVideoId", // deine definierte ID
  vimeo: {
    videoId: "76979871", // deine ID des Vimeo-Videos
    background: true // default: false
  }
});
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | Header-Video-ID| Deine zuvor definierte ID im HTML. |
| `vimeo.videoId` | `String`  |  `12345678` | Die ID des Videos auf Vimeo. |
| `vimeo.background` | `Boolean`  |  `true` / `false` | Generiert das Header-Video. |

Wenn du über dem Video einen Text einblenden möchtest, kannst du wie im obigen Beispiel ein `div` Element definieren mit der Klasse `story-header-video-text`. Der Text wird über dem Video angezeigt.

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<header class="story-header story-header-video" id="YourHeaderVideoId">
  <div class="story-video-container">
    <iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" title="vimeo-header-player" class="story-vimeo-header-player" src="https://player.vimeo.com/video/12345678?background=1;autoplay=1;loop=1;byline=0;title=0" frameborder="0"></iframe>
  </div>
  <div class="story-header-video-text">
    <h1>Heading</h1>
    <p>Lorem ipsum...</p>
  </div>
</header>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-header` | Klasse für das Styling des `<header>` Elements. |
| `.story-header-video` | Klasse für das Styling des Wrappers für den Header-Video-Container.  |
| `.story-video-container` | Klasse für das Styling des Containers für Videos. |
| `.story-vimeo-header-player` | Klasse für das Styling des `<iframe>` Elements. |
| `.story-header-video-text` | Klasse für das Styling des Textes auf dem Header Element. |
