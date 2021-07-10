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

<a class="button-a" href="https://github.com/FrankZinsli/Storytellr.js/archive/refs/heads/main.zip">
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
