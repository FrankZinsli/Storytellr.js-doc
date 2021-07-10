# Video
Videos können den Nutzer mitreisen. Nutze Videos um Bewegung und Schwung in deine Geschichte zu bringen.
Storytellr.js bietet verschiedene Möglichkeiten, ein Video auf deiner Webseite zu platzieren.
Neben **lokal** gehosteten Videos, kannst du auch Videos von **YouTube** und **Vimeo** einfach einsetzen.
Storytellr.js bietet dir hierfür den Video-Player an. Dieser generiert dir den kompletten Code, so wie du Ihn gerade möchtest.

[[toc]]

## YouTube
<a href="https://www.youtube.com/watch?v=fKkzqk3RMLc" target="_blank">
    <video width="1920" height="1080" autoplay  muted loop playsinline >
      <source src="../../assets/videos/Video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video> 
</a>

Damit du YouTube Videos möglichst einfach und responsive auf deiner Storytelling-Webseite platzieren kannst,
benötigst du folgenden `<html>` Code. Die Klasse `story-video-container-wrapper` sorgt für das responsive Verhalten und
darf nicht gelöscht werden. Zusätzlich benötigst du eine `ID`.

#### Komponent einsetzen
Der Code für das Video wird durch den Aufruf der JavaScript-Funktion innerhalb des `<div>` Element generiert.
```html{2}
<section class="story-section">
  <div class="story-video-container-wrapper" id="videoPlayerID"></div>
</section>
```

Durch das Aufrufen der VideoPlayer-Funktion kannst du dein YouTube-Video individuell konfigurieren.

```js
new $story.VideoPlayer({
    id: "videoPlayerID",
    youtube: {
        videoId: "dgQfHeA6vOI",
        autoplay: false,
        loop: true,
        controls: true,
        start: '20',
        end: '25',
        allowFullScreen: true,
        mute: true,
        modestbranding: true,
        playsinline: true
    }
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span style="color:red">*</span> | `String` | VideoPlayer-ID| Deine zuvor definierte ID im HTML. |
| `youtube.videoId`<span style="color:red">*</span> |  `String`  | YouTube Video ID | Die ID deines YouTube-Videos. |
| `youtube.autoplay` | `Boolean`  |  `true` / `false` | Automatisches abspielen des Videos. Funktioniert in modernen Browsern nur, wenn das Video stumm geschalten wurde. `youtube.mute = true` |
| `youtube.loop` | `Boolean`  |  `true` / `false` | Video wird in einer Schlaufe wiedergegeben. |
| `youtube.controls` | `Boolean`  |  `true` / `false` | Soll die Toolbar mit `pause`, `play` usw. angezeigt werden? |
| `youtube.start` | `Integer`  |  Sekunden | Zeitpunkt zu dem das Video gestartet werden soll. Funktioniert nicht, wenn das Video im `loop` abgespielt wird. |
| `youtube.end` | `Integer`  |  Sekunden | Zeitpunkt zu dem das Video gestoppt werden soll. Funktioniert nicht, wenn das Video im `loop` abgespielt wird. |
| `youtube.allowFullScreen` | `Boolean`  |  `true` / `false` | Darf der Nutzer das Video im Vollbildmodus schauen? |
| `youtube.mute` | `Boolean`  |  `true` / `false` | Soll das Video stumm abgespielt werden? Muss `true` sein, wenn `youtube.autoplay`  `true` ist. |
| `youtube.modestbranding` | `Boolean`  |  `true` / `false` | Regelt das Anzeigen des YouTube-Logos in der Steuerleiste. |
| `youtube.playsinline` | `Boolean`  |  `true` / `false` | Wenn `true`, dann wird das Video auf IOS-Geräten nicht im Vollbildmodus dargestellt. |

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
| `.story-video-container-wrapper` | Wrapper für Video Container |
| `.story-video-container` | Container für Videos |
| `.story-youtube-player` | Klasse für das `<iframe>` Element  |

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
    id: "videoPlayerID",
    vimeo: {
        videoId: "120142633",
        autopause: true,
        autoplay: true,
        controls: false,
        loop: false,
        muted: true,
        quality: 'auto',
        allowFullScreen: true,
        playsinline: true
    }
})
```

| Parameter        | Type     | Wert  | Beschreibung
| ------------- | ------------- | ------------- |------------- |
| `id`<span style="color:red">*</span> | `String` | VideoPlayer-ID| Deine zuvor definierte ID im HTML. |
| `vimeo.videoId`<span style="color:red">*</span> |  `String`  | YouTube Video ID | Die ID deines Vimeo-Videos. |
| `vimeo.autoplay` | `Boolean`  |  `true` / `false` | Automatisches abspielen des Videos. Funktioniert in modernen Browsern nur, wenn das Video stumm geschalten wurde. `vimeo.mute = true` |
| `vimeo.autopause` | `Boolean`  |  `true` / `false` | Erkennt, wenn ein anderes Video gestartet wird und pausiert sich selbst. |
| `vimeo.loop` | `Boolean`  |  `true` / `false` | Video wird in einer Schlaufe wiedergegeben. |
| `vimeo.controls` | `Boolean`  |  `true` / `false` | Soll die Toolbar mit `pause`, `play` usw. angezeigt werden? |
| `vimeo.muted` | `Boolean`  | `true` / `false` |Soll das Video stumm abgespielt werden? Muss `true` sein, wenn `vimeo.autoplay`  `true` ist. |
| `vimeo.quality` | `String`  |  `240p` `360p` `540p` `720p` `1080p` `2k` `4k` `auto`. | Standardmässig wird `auto` eingestellt. **Beachte den untenstehenden Hinweis.** |
| `vimeo.allowFullScreen` | `Boolean`  |  `true` / `false` | Darf der Nutzer das Video im Vollbildmodus schauen? |
| `vimeo.playsinline` | `Boolean`  |  `true` / `false` | Wenn `true`, dann wird das Video auf IOS-Geräten nicht im Vollbildmodus dargestellt. |

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
| CSS-Klasse | Beschreibung |
| ------------- | ------------- |
| `.story-video-container-wrapper` | Wrapper für Video Container |
| `.story-video-container` | Container für Videos |
| `.story-vimeo-player` | Klasse für das `<iframe>` Element. |

## Lokal
