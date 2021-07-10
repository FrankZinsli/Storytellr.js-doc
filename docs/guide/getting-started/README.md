---
title: Erste Schritte
meta:
- name: description
  content: Hier erfährst du, wie du Storytellr.js in dein eigenes Projekt integrierst.
- name: Keywords
  content: Storytellr.js Storytellr MMP Storytelling Getting-Started
---

# Erste Schritte

[[toc]]

Damit du Storytellr.js nutzen kannst, musst du die Bibliothek in dein Projekt integrieren.
Du hast dafür zwei Möglichkeiten. Entweder kannst du die Bibliothek herunterladen und dann in dein
Projekt integrieren, oder du kannst ein Content Delivery Network (kurz CDN) nutzen.

## Download
Wenn du Storytellr.js lokal in dein Projekt einbinden möchtest, dann kannst du die Bibliothekt hier herunterladen.

<a class="button-a" href="https://github.com/FrankZinsli/Storytellr.js/archive/refs/heads/master.zip">
  <button>
    Storytellr.js - Download
  </button>
</a>

## Quick start :rocket:
1. Kopiere den folgenden CSS `<link>` in den `<head>` Bereich deiner Webseite.

*CDN*
```html
<link href="https://cdn.jsdelivr.net/npm/storytellr@1.0.0/dist/css/storytellr.min.css" rel="stylesheet" crossorigin="anonymous">
```

*Lokal*
```html
<link href="../path/to/storytellr.min.css" rel="stylesheet" crossorigin="anonymous">
```

2. Kopiere den folgenden `<script>` Code und füge ihn vor deinem schliessenden `</bod>` Tag ein.

*CDN*
```html
<script src="https://cdn.jsdelivr.net/npm/storytellr@1.0.0/dist/js/storytellr.min.js" crossorigin="anonymous"></script>
```

*Lokal*
```html
<script src="../path/to/storytellr.min.js" crossorigin="anonymous"></script>
```

## Starter Template
Möchtest du keine Zeit verschwenden und direkt mit dem entwickeln deiner Storytelling-Webseite starten? Dann
nutze das Starter Template.

Du kannst den Code kopieren und nach deinen eigenen Vorstellungen anpassen.
```html
<!doctype html>
<html lang="de">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1" name="viewport">
    <title>Titel</title>
    <link href="style/storytellr.min.css" rel="stylesheet">
</head>

<body>
  <header class="story-header" id="YourHeaderImageSlideshowId">
    <h1 class="story-text-h1">Titel</h1>
    <h2 class="story-text-h2">Untertitel</h2>
  </header>
  
  <main class="story-container">
    <section class="story-section">
      <h3 class="story-text-h3">Deine Section</h3>   
    </section>
  </main>
      
  <script src="script/storytellr.min.js"></script>
  <script>// Aufruf der Storytellr-Funktionen</script>
</body>
</html>
```
