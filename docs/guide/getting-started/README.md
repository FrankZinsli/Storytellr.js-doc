---
title: Erste Schritte
lang: de-CH
canonicalUrl: https://storytellr.netlify.app/guide/getting-started/
meta:
- name: description
  content: Hier erfährst du, wie du Storytellr.js in dein eigenes Projekt integrierst.
- name: Keywords
  content: Storytellr.js Storytellr MMP Storytelling Erste Schritte
---

# Erste Schritte
![Erste Schritte mit Storytellr.js](../../assets/illustration/undraw_maker_launch.svg)

[[toc]]

Damit du Storytellr.js nutzen kannst, musst du die Bibliothek in dein Projekt integrieren.
Du hast dafür zwei Möglichkeiten. Entweder kannst du die Bibliothek herunterladen und dann in dein
Projekt integrieren, oder du kannst ein Content Delivery Network (kurz CDN) nutzen.

## Download
Wenn du Storytellr.js lokal in dein Projekt einbinden möchtest, dann kannst du die Bibliothek hier herunterladen.

<a class="button-a" href="https://storytellr.netlify.app/downloads/Storytellr-V1.0.1.zip">
  <button>
    Storytellr.js - Download
  </button>
</a>

## Quick start
1. Kopiere den folgenden CSS `<link>` in den `<head>` Bereich deiner Webseite.

*CDN*
```html
<link href="https://cdn.jsdelivr.net/npm/storytellr.js@1.0.1/storytellr.min.css" rel="stylesheet" crossorigin="anonymous">
```

*Lokal*
```html
<link href="../path/to/storytellr.min.css" rel="stylesheet" crossorigin="anonymous">
```

2. Kopiere den folgenden `<script>` Code und füge ihn vor deinem schliessenden `</body>` Tag ein.

*CDN*
```html
<script src="https://cdn.jsdelivr.net/npm/storytellr.js@1.0.1/storytellr.min.js" crossorigin="anonymous"></script>
```

*Lokal*
```html
<script src="../path/to/storytellr.min.js" crossorigin="anonymous"></script>
```

## Starter-Template
Möchtest du keine Zeit verschwenden und direkt mit dem Entwickeln deiner Storytelling-Webseite starten? Dann
nutze das Starter-Template.

Du kannst den Code kopieren und nach deinen eigenen Vorstellungen anpassen.
```html
<!doctype html>
<html lang="de-CH">
<head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1" name="viewport">

    <title>Storytellr.js</title>
    <meta name="description" content="Die JavaScript-Bibliothek für Geschichtenerzähler" />
    <meta name="keywords" content="Storytellr.js, MMP-Storytelling, Storytelling im Web" />
  
    <!-- Open Graph Tags für Facebook -->
    <meta property="og:title" content="Storytellr.js" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://storytellr.netlify.app/" />
    <meta property="og:image" content="https://storytellr.netlify.app/assets/logo/storytellr-large.svg" />
    <meta property="og:description" content="Die JavaScript-Bibliothek für Geschichtenerzähler" />
    <meta property="og:site_name" content="Storytellr.js" />
  
    <!-- Twitter Card für Twitter -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:site" content="@Publisher">
    <meta name="twitter:title" content="Storytellr.js">
    <meta name="twitter:description" content="Die JavaScript-Bibliothek für Geschichtenerzähler">
    <meta name="twitter:creator" content="@Autor">
    <meta name="twitter:image" content="https://storytellr.netlify.app/assets/logo/storytellr-large.svg">
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/storytellr.js@1.0.1/storytellr.min.css">
</head>

<body>
  <header class="story-header">
    <!-- Dein Header -->
  </header>
  
  <main class="story-container">
    <!-- Deine Geschichte -->

    <section class="story-section">
      <!-- Dein Inhaltsverzeichnis der Geschichte -->
      <h1 class="story-text-h1">Inhalt</h1>
      <div class="story-table-of-contents" id="inhaltsverzeichnis"></div>
    </section>

    <section class="story-section">
      <!-- Deine erste Section -->
      <h1 id="titel-01" class="story-text-h1 story-toc-element-1">Title 1</h1>
      <p class="story-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      
      <h2 id="titel-02" class="story-text-h2 story-toc-element-2">Titel 2</h2>
      <p class="story-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </section>
  </main>
  
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/storytellr.js@1.0.1/storytellr.min.js" ></script>
  <script type="text/javascript">
    // Aufruf der Storytellr-Funktionen
    new $story.TocGenerator({
      id: "inhaltsverzeichnis", // deine definierte ID
      listType: "ol", // default: "ol" 
      navLink: true // default: true
    });

  </script>
</body>
</html>
```
