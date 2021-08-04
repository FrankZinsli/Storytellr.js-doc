---
title: Videos
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/components/video.html
meta:
- name: description
  content: Mit dem Storytellr-Guide erfährst du wie Videos eingesetzt werden.
- name: Keywords
  content: Storytellr.js MMP-Storytelling Guide
---

# Videos
![Video in Storytellr.js](../../assets/illustration/undraw_Video_streaming.svg)

Videos können den Nutzer mitreisen. Nutze Videos, um Bewegung und Schwung in deine Geschichte zu bringen.
Storytellr.js bietet verschiedene Möglichkeiten, ein Video auf deiner Webseite zu platzieren.
Neben **lokal** gehosteten Videos, kannst du auch Videos von **YouTube** und **Vimeo** einfach einsetzen.
Storytellr.js bietet dir hierfür den Video-Player an. Dieser generiert dir den kompletten Code, so wie du ihn gerade möchtest.

#### Inhalt in diesem Abschnitt
[[toc]]

## YouTube
<a href="https://www.youtube.com/watch?v=fKkzqk3RMLc" target="_blank">
    <video width="1920" height="1080" autoplay  muted loop playsinline >
      <source src="../../assets/videos/Video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> 
</a>

Damit du **YouTube**-Videos möglichst einfach und responsive auf deiner Storytelling-Webseite platzieren kannst,
benötigst du folgenden `<html>` Code. Die Klasse `story-video-container-wrapper` sorgt für das responsive Verhalten und
darf nicht gelöscht werden. Zusätzlich benötigst du eine `ID`.

#### Komponent einsetzen
Der Code für das Video wird durch den Aufruf der JavaScript-Funktion innerhalb des `<div>` Element generiert.
```html{2}
<section class="story-section">
  <div class="story-video-container-wrapper" id="videoPlayerID"></div>
</section>
```

Durch das Aufrufen der VideoPlayer-Funktion kannst du dein **YouTube**-Video individuell konfigurieren.

```js
new $story.VideoPlayer({
    id: "videoPlayerID", // deine definierte ID
    youtube: {
        videoId: "dgQfHeA6vOI", // deine ID des YouTube-Videos
        allowFullScreen: true, // default: true
        autoplay: false, // default: false
        controls: true, // default: true
        end: 25, // default: false
        loop: true, // default: false
        modestbranding: true, // default: false
        mute: true, // default: false
        playsInline: false, // default: false
        start: 20 // default: false
    }
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | VideoPlayer-ID| Deine zuvor definierte ID im HTML. |
| `youtube.videoId`<span class="required-star">*</span> |  `String`  | YouTube Video ID | Die ID deines YouTube-Videos. |
| `youtube.allowFullScreen` | `Boolean`  |  `true` / `false` | Darf der Nutzer das Video im Vollbildmodus schauen? |
| `youtube.autoplay` | `Boolean`  |  `true` / `false` | Automatisches abspielen des Videos. Funktioniert in modernen Browsern nur, wenn das Video stumm geschalten wurde. `youtube.mute = true` |
| `youtube.controls` | `Boolean`  |  `true` / `false` | Soll die Toolbar mit `pause`, `play` usw. angezeigt werden? |
| `youtube.end` | `Integer`  |  Sekunden | Zeitpunkt zu dem das Video gestoppt werden soll. Funktioniert nicht, wenn das Video im `loop` abgespielt wird. |
| `youtube.loop` | `Boolean`  |  `true` / `false` | Video wird in einer Schlaufe wiedergegeben. |
| `youtube.modestbranding` | `Boolean`  |  `true` / `false` | Regelt das Anzeigen des YouTube-Logos in der Steuerleiste. |
| `youtube.mute` | `Boolean`  |  `true` / `false` | Soll das Video stumm abgespielt werden? Muss `true` sein, wenn `youtube.autoplay`  `true` ist. |
| `youtube.playsInline` | `Boolean`  |  `true` / `false` | Wenn `true`, dann wird das Video auf IOS-Geräten nicht im Vollbildmodus dargestellt. |
| `youtube.start` | `Integer`  |  Sekunden | Zeitpunkt zu dem das Video gestartet werden soll. Funktioniert nicht, wenn das Video im `loop` abgespielt wird. |

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<div class="story-video-container-wrapper" id="Your-Youtube-Video-Name">
  <div class="story-video-container">
    <iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" class="story-youtube-player" src="http://www.youtube.com/embed/M7lc1UVf-VE?playlist=M7lc1UVf-VE;loop=1;modestbranding=1;start=20;end=25;mute=1; allowfullscreen" style="width:100%; height: 100%"></iframe>
  </div>
</div>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-video-container-wrapper` | Wrapper für den Video-Container. |
| `.story-video-container` | Container für das Video. |
| `.story-youtube-player` | Klasse für das `<iframe>` Element.  |

## Vimeo
#### Komponent einsetzen
Damit du Vimeo Videos möglichst einfach und responsive auf deiner Storytelling-Webseite platzieren kannst,
benötigst du folgenden `<html>` Code. Die Klasse `story-video-container-wrapper` sorgt für das responsive Verhalten und
darf nicht gelöscht werden. Zusätzlich benötigst du eine `ID`. Der Aufbau ist gleich wie bei YouTube-Videos.

Der Code für das Video wird durch den Aufruf der JavaScript-Funktion innerhalb des `<div>` Element generiert.
```html{2}
<section class="story-section">
  <div class="story-video-container-wrapper" id="videoPlayerID"></div>
</section>
```

Durch das Aufrufen der VideoPlayer-Funktion kannst du dein Vimeo-Video individuell konfigurieren.

```js
new $story.VideoPlayer({
    id: "videoPlayerID", // deine definierte ID
    vimeo: {
        videoId: "120142633", // deine ID des YouTube-Videos
        allowFullScreen: true, // default: false
        autopause: true, // default: false
        autoplay: true, // default: false
        controls: false, // default: true
        loop: false, // default: false
        muted: true, // default: false
        playsInline: false, // default: false
        quality: "auto" // default: "auto"
    }
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | VideoPlayer-ID| Deine zuvor definierte ID im HTML. |
| `vimeo.videoId`<span class="required-star">*</span> |  `String`  | YouTube Video ID | Die ID deines Vimeo-Videos. |
| `vimeo.allowFullScreen` | `Boolean`  |  `true` / `false` | Darf der Nutzer das Video im Vollbildmodus schauen? |
| `vimeo.autoplay` | `Boolean`  |  `true` / `false` | Automatisches Abspielen des Videos. Funktioniert in modernen Browsern nur, wenn das Video stumm geschalten wurde. `vimeo.mute = true` |
| `vimeo.autopause` | `Boolean`  |  `true` / `false` | Erkennt, wenn ein anderes Video gestartet wird und pausiert sich selbst. |
| `vimeo.controls` | `Boolean`  |  `true` / `false` | Soll die Toolbar mit `pause`, `play` usw. angezeigt werden? |
| `vimeo.loop` | `Boolean`  |  `true` / `false` | Video wird in einer Schlaufe wiedergegeben. |
| `vimeo.muted` | `Boolean`  | `true` / `false` |Soll das Video stumm abgespielt werden? Muss `true` sein, wenn `vimeo.autoplay`  `true` ist. |
| `vimeo.playsInline` | `Boolean`  |  `true` / `false` | Wenn `true`, dann wird das Video auf IOS-Geräten nicht im Vollbildmodus dargestellt. |
| `vimeo.quality` | `String`  |  `240p` `360p` `540p` `720p` `1080p` `2k` `4k` `auto`. | Standardmässig wird `auto` eingestellt. **Beachte den untenstehenden Hinweis.** |

::: warning Vimeo-Hinweis
Für das Einstellen der Parameter `vimeo.controls` und `vimeo.quality`, muss das Video von einem *Plus-, Pro-, Business- oder Premium-Account* stammen.
:::

#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<div class="story-video-container-wrapper" id="videoPlayerID">
  <div class="story-video-container">
    <iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" title="vimeo-player" class="story-vimeo-player" src="https://player.vimeo.com/video/120142633?loop=1;muted=1;quality=1080p" style="width:100%; height: 100%"></iframe>
  </div>
</div>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-video-container-wrapper` | Wrapper für den Video-Container. |
| `.story-video-container` | Container für das Video. |
| `.story-vimeo-player` | Klasse für das `<iframe>` Element. |

## Lokal
#### Komponent einsetzen
Mit `HTML5` kannst du einfach deine eigenen lokal abgespeicherten Videos auf deiner Webseite einbetten.
Du kannst verschiedene Quellen mit verschiedenen Dateiformaten angeben, der Browser wählt die für ihn passende
Version aus. Storytellr bietet dir einige CSS-Klassen, die dir den Einsatz der Videos zusätzlich vereinfachen.

```html{2-12}
<section class="story-section">
  <div class="story-video-container-wrapper">
    <div class="story-video-container">
      <video class="story-video-local" width="1440" height="810" poster="../src/assets/video/local-video-poster.jpg" autoplay muted >
        <source src="../src/assets/video/local-video.mp4" type="video/mp4">
        <source src="../src/assets/video/local-video.ogg" type="video/ogg">
        Leider unterstützt dein Browser keine Video-Tags. Wenn du möchtest, kannst du das Video
        <a href="../src/assets/video/Header-Image.mp4">herunterladen</a> und in deinem eigenen Video-Player
        anschauen.
      </video>
    </div>
  </div>
</section>
```

Du kannst deinen HTML5-Videos verschiedene Attribute für die Steuerung deiner Videos mitgeben.
| Attribute | Beschreibung |
| ------------- |------------- |
| `src`<span class="required-star">*</span> | Pfad zum Video. |
| `autoplay` | Automatisches Abspielen des Videos. Funktioniert in modernen Browsern nur, wenn das Video stumm `muted` geschalten wurde. |
| `controls` | Zeigt die Steuerelemente des Videos an. |
| `height` | Höhe des Videos in Pixel. |
| `width` | Breite des Videos in Pixel. |
| `loop` | Video wird in einer Schlaufe wiedergegeben. |
| `muted` | Video wird stumm abgespielt. |
| `poster` | Pfad zum Standbild des Videos. |


#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-video-container-wrapper` | Wrapper für den Video-Container. |
| `.story-video-container` | Container für das Video. |
| `.story-video-local` | Klasse für das `<video>` Element. |

## Slideshow
Mit **Storytellr.js** hast du die Möglichkeit eine Slideshow von verschiedenen Videos zu erstellen.
Storytellr bietet dir hierfür eine Funktion, welche dir den `HTML-Code` generiert und zusätzlich einige `CSS-Klassen` für ein individuelles Styling.

#### Komponent einsetzen
Der folgende `HTML-Code` wird für den Grundaufbau benötigt. Du kannst zusätzlich zum Video ein `poster` als Standbild des Videos nutzen. 
Zusätzlich kannst du alle Parameter die in [Lokal/ Komponent einsetzen](#lokal) beschrieben sind nutzen und mehrere Quellen für das Video angeben.

```html{16-22}
    <section class="story-section">
      <div class="story-media-slideshow" id="videoSlideshow">
        <div class="story-media-slideshow-container">
          <div class="story-media-image">
            <video class="story-media-image-player" width="1920" height="1280" controls poster="../assets/img/poster-video01.jpg">
              <source src="../assets/video/video01.mp4" type="video/mp4">
              Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
              <a href="../assets/video/video01.mp4">herunterladen</a> und in deinem eigenen Audio-Player
              anhören.
            </video>
          </div>
        </div>

        <div class="story-media-slideshow-container">
          <div class="story-media-image">
            <video class="story-media-image-player" width="1920" height="1280" controls poster="../assets/img/poster-video02.jpg">
              <source src="../assets/video/video01.mp4" type="video/mp4">
              <source src="../assets/video/video01.ogg" type="video/ogg">
              Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
              <a href="../assets/video/video01.mp4">herunterladen</a> und in deinem eigenen Audio-Player
              anhören.
            </video>
          </div>
        </div>
      </div>
    </section>
```

Wenn du den `HTML-Grundaufbau` erstellt hast, kannst du anschliessend die **Storytellr-Funktion** für multimediale-Slideshows
aufrufen.

```js
new $story.MediaSlideshow({
  id: "videoSlideshow", // deine definierte ID
  autoplay: true // default true
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span class="required-star">*</span> | `String` | videoSlideshow| Deine zuvor definierte ID im HTML. |
| `autoplay` | `Boolean` | `true` / `false`| Sollen die Videos beim durchklicken der Slideshow automatisch gestartet und gestoppt werden? |


#### Generierter HTML-Code
Aus den obenstehenden Konfigurationen wird folgender HTML-Code generiert.
```html
<section class="story-section">
  <div class="story-media-slideshow" id="videoSlideshow">
    <div class="story-media-slideshow-container" style="display: block;">
      <div class="story-media">
        <video class="story-media-player" width="1920" height="1280" controls poster="../assets/img/poster-video01.jpg">
          <source src="../assets/video/video01.mp4" type="video/mp4">
          Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
          <a href="../assets/video/video01.mp4">herunterladen</a> und in deinem eigenen Audio-Player
          anhören.
        </video>
      </div>
      <div class="story-media-controllers">
        <span class="story-media-controller story-media-controller-0 active-media-controller" onclick="$story.MediaSlideshow.showCurrentMedia(&quot;videoSlideshow&quot;, 0)"></span>
        <span class="story-media-controller story-media-controller-1" onclick="$story.MediaSlideshow.showCurrentMedia(&quot;videoSlideshow&quot;, 1)"></span>
      </div>
    </div>

    <div class="story-media-slideshow-container" style="display: none;">
      <div class="story-media">
        <video class="story-media-player" width="1920" height="1280" controls poster="../assets/img/poster-video02.jpg">
          <source src="../assets/video/video01.mp4" type="video/mp4">
          <source src="../assets/video/video01.ogg" type="video/ogg">
          Leider unterstützt dein Browser keine Audio-Tags. Wenn du möchtest, kannst du das Audio
          <a href="../assets/img/poster-video02.jpg">herunterladen</a> und in deinem eigenen Audio-Player
          anhören.
        </video>
      </div>
      <div class="story-media-controllers">
        <span class="story-media-controller story-media-controller-0 active-media-controller" onclick="$story.MediaSlideshow.showCurrentMedia(&quot;videoSlideshow&quot;, 0)"></span>
        <span class="story-media-controller story-media-controller-1" onclick="$story.MediaSlideshow.showCurrentMedia(&quot;videoSlideshow&quot;, 1)"></span>
      </div>
    </div>
  </div>
</section>
```

#### Verfügbare CSS-Klassen für Styling
Die folgenden **CSS-Klassen** können für ein individuelles Styling genutzt werden.

| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-media-slideshow` | Klasse für das Styling des Wrappers der Slideshow. |
| `.story-media-slideshow-container` | Klasse für das Styling des Containers der Slideshow. |
| `.story-media-controllers` | Klasse für das Styling des Wrappers der Controller. |
| `.story-media-controller` | Klasse für das Styling der einzelnen Controller. |
| `.active-media-controller` | Klasse für das Styling des aktiven Controllers. |
