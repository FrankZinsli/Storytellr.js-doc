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
    locales: {
        '/': {
            lang: 'de-De',
            title: 'Storytellr.js',
            description: 'Die JavaScript-Bibliothek für Geschichtenerzähler',
        },
    },
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
        ['meta', { name: 'theme-color', content: '#f3722c' }]
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
                '/en/': {
                message: "New content is available.",
                buttonText: "Refresh"
                }
            }
        }],
        ['social-share', {
            autoQuote: true,
            extendsNetworks,
            fallbackImage: '/assets/logo/b_logo.svg',
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
        ['code-switcher'],
        ['img-lazy'],
        ['vuepress-plugin-code-copy', {
            staticIcon: true,
            successText: 'Kopiert!',
            color: '#f3722c',
        }],
        ['container', {
            type: 'theorem',
            before: info => `<div class="theorem"><p class="title">${info}</p>`,
            after: '</div>',
        }],
        ['@vuepress/medium-zoom'],
        ['robots', {
            host: "https://storytellr.frankzinsli.ch",
            disallowAll: true,
            sitemap: "/sitemap.xml",
            /*allowAll: true,
            policies: [
                {
                    userAgent: '*',
                    disallow: [
                        '/admin',
                        '/login'
                    ],
                    allow: [
                        'products','blog'
                    ]
                }
            ]*/
        }],
    ],

    themeConfig: {
        searchMaxSuggestions: 3,
        logo: '/assets/logo/a_logo.svg',
        nav: [
            { text: 'Start', link: '/' },
            { text: 'Über Storytellr', link: '/about/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Demo', link: 'https://google.com' }
        ],
        sidebar: [
            {
                title: 'Einstieg',   // required
                path: '/guide/introduction/',      // optional, link of the title, which should be an absolute path and must exist
                collapsable: false, // optional, defaults to true
                sidebarDepth: 2,    // optional, defaults to 1
                children: [
                    '/guide/introduction/',
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
                    '/guide/components/video',
                    '/guide/components/image',
                    '/guide/components/audio',
                    '/guide/components/multimedial'
                ]
            },
        ],
        repo: 'https://github.com/FrankZinsli/Storytellr.js',
        repoLabel: 'GitHub',
        smoothScroll: true,
    },

    markdown: {
        lineNumbers: true
    },
}
