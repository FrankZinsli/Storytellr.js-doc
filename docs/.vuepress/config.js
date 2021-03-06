const extendsNetworks = {
    pinterest: {
        sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
        type: 'popup',
        icon:
          '/assets/icons/pinterest.png',
      },
    linkedin: {
      sharer:
        'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
      type: 'popup',
      color: '#1786b1',
      icon:
        '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
    },
  }

module.exports = {
    base: '/',
    lang: 'de-CH',
    title: 'Storytellr.js',
    description: 'Die JavaScript-Bibliothek für Geschichtenerzähler. Entwickelt für MMP-Studenten und basiert auf dem Leitfaden für Storytelling auf Webseiten.',
    head: [
        ['meta', {name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"}],
        ['meta', {charset: "utf-8"}],
        ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/assets/favicons/apple-icon-57x57.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/assets/favicons/apple-icon-60x60.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/assets/favicons/apple-icon-72x72.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/assets/favicons/apple-icon-76x76.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/assets/favicons/apple-icon-114x114.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/assets/favicons/apple-icon-120x120.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/assets/favicons/apple-icon-144x144.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/assets/favicons/apple-icon-152x152.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-icon-180x180.png"}],
        ['link', { rel: "apple-touch-icon", sizes: "192x192", href: "/assets/favicons/apple-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/assets/favicons/android-icon-192x192.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/favicons/favicon-96x96.png"}],
        ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico"}],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['meta', { name: "msapplication-TileImage", content: "/assets/favicons/ms-icon-310x310.png"}],
        ['meta', { name: 'msapplication-TileColor', content: '#fff' }],
        ['meta', { name: 'theme-color', content: '#f3722c' }],

        <!-- Google Search Console -->
        ['meta', { name: 'google-site-verification', content: 'TxPdaiqxHbVnadyifkxFE6ri8CEzphPY4LOkLCdEF9Y' }],

        <!-- Open Graph für Facebook, LinkedIn und Pinterest -->
        ['meta', { property: "og:type", content: "website"}],
        ['meta', { property: "og:url", content: "https://storytellr.netlify.app/"}],
        ['meta', { property: "og:title", content: "Storytellr.js"}],
        ['meta', { property: "og:description", content: "Die JavaScript-Bibliothek für Geschichtenerzähler. Entwickelt für MMP-Studenten und basiert auf dem Leitfaden für Storytelling auf Webseiten."}],
        ['meta', { property: "og:image", content: "https://storytellr.netlify.app/assets/logo/storytellr-social-logo.png"}],

        <!-- Twitter -->
        ['meta', { property: "twitter:card", content: "summary_large_image"}],
        ['meta', { property: "twitter:url", content: "https://storytellr.netlify.app/"}],
        ['meta', { property: "twitter:title", content: "Storytellr.js"}],
        ['meta', { property: "twitter:description", content: "Die JavaScript-Bibliothek für Geschichtenerzähler. Entwickelt für MMP-Studenten und basiert auf dem Leitfaden für Storytelling auf Webseiten."}],
        ['meta', { property: "twitter:image", content: "https://storytellr.netlify.app/assets/logo/storytellr-social-logo.png"}]
      ],

    plugins: [
        ['@vuepress/pwa',{
            serviceWorker: true,
            popupComponent: 'MySWUpdatePopup',
            updatePopup: {
                '/': {
                message: "Neuer Inhalt ist verfügbar.",
                buttonText: "Aktualisieren"
                },
            }
        }],
        ['social-share', {
            autoQuote: true,
            extendsNetworks,
            fallbackImage: 'https://storytellr.netlify.app/assets/logo/storytellr-social-logo.png',
            networks: [
                'linkedin',
                'facebook',
                'twitter',
                'pinterest',
                'reddit',
                'whatsapp',
                'telegram',
            ],
            noGlobalSocialShare: true
        }],
        ['@vuepress/register-components'],
/*        ['code-switcher'], // remove*/
        ['img-lazy'],
        ['vuepress-plugin-code-copy', {
            staticIcon: true,
            successText: 'Kopiert!',
            color: '#f3722c',
        }],
/*        ['container', { // remove
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],*/
        ['robots', {
            host: "https://storytellr.netlify.app/",
            disallowAll: false,
            allowAll: false,
            sitemap: "/sitemap.xml",
            policies: [
                {
                    userAgent: '*',
                    disallow: [
                        '/assets/',
                        '/downloads/',
                        '/imprint.html'
                    ],
                    allow: [
                        '/downloads/Leitfaden zu Storytelling auf Webseiten.pdf'
                    ]
                },
                {
                    userAgent: 'Googlebot-Image',
                    disallow: [
                        '/'
                    ],
                },
            ]
        }],
    ],

    themeConfig: {
        searchMaxSuggestions: 3,
        logo: '/assets/logo/a_logo.svg',
        nav: [
            { text: 'Start', link: '/' },
            { text: 'Über', link: '/about/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Demo', link: 'https://storytellr-demo.netlify.app' }
        ],
        sidebar: [
            {
                title: 'Einstieg',   // required
                path: '/guide/introduction/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    '/guide/getting-started/',
                ]
            },
            {
                title: 'Guide',   // required
                path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    ['/guide/', 'Information'],
                    '/guide/components/header-video',
                    '/guide/components/header-image',
                    '/guide/components/toc',
                    '/guide/components/social-meta',
                    '/guide/components/text',
                    '/guide/components/video',
                    '/guide/components/image',
                    '/guide/components/audio',
                    '/guide/components/multimedial'
                ]
            },
        ],
        repo: 'https://github.com/FrankZinsli/Storytellr.js-Project',
        repoLabel: 'GitHub',
        smoothScroll: true,
    },
    markdown: {
        lineNumbers: true
    },
}
