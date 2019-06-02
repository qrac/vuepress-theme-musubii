const pjt = require("./project.json")

module.exports = {
  locales: {
    "/": {
      lang: "ja",
      title: pjt.site.title,
      description: pjt.site.description
    }
  },
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      }
    ],
    [
      "meta",
      {
        name: "format-detection",
        content: "telephone=no, email=no, address=no"
      }
    ],
    [
      "meta",
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      }
    ],
    ["meta", { property: "og:title", content: pjt.site.title }],
    [
      "meta",
      {
        property: "og:description",
        content: pjt.site.description
      }
    ],
    [
      "meta",
      {
        property: "og:url",
        content: pjt.site.url
      }
    ],
    [
      "meta",
      {
        property: "og:image",
        content: pjt.site.url + "/img/apple-touch-icon.png"
      }
    ],
    ["meta", { property: "og:site_name", content: pjt.site.title }],
    ["meta", { property: "og:type", content: pjt.site.og.type }],
    ["meta", { name: "twitter:card", content: pjt.site.twitter.card }],
    ["meta", { name: "twitter:creator", content: "@" + pjt.site.twitter.id }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900"
      }
    ],
    ["link", { rel: "apple-touch-icon", href: "/img/apple-touch-icon.png" }],
    ["link", { rel: "icon", href: "/img/favicon.png" }]
  ],
  theme: require.resolve("../.."),
  themeConfig: {
    repo: "qrac/musubii",
    editLinks: true,
    lastUpdated: "Last Updated",
    logo: "/img/logo.svg",
    logoDark: "/img/logo-dark.svg",
    nav: [
      {
        text: "Getting Started",
        link: "/getting-started/"
      },
      {
        text: "Documentation",
        link: "/documentation/"
      },
      {
        text: "Customize",
        link: "/customize/"
      }
    ],
    sidebar: {
      "/getting-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: ["", "use", "support"]
        }
      ],
      "/documentation/": [
        {
          title: "Documentation",
          collapsable: false,
          children: [""]
        },
        {
          title: "Layout",
          collapsable: false,
          children: ["section", "space", "grid"]
        },
        {
          title: "Module",
          collapsable: false,
          children: [
            "heading",
            "text",
            "button",
            "list",
            "table",
            "form",
            "icon",
            "alert",
            "wysiwyg"
          ]
        },
        {
          title: "Utility",
          collapsable: false,
          children: ["size", "deco", "display", "clearfix"]
        }
      ],
      "/customize/": [
        {
          title: "Customize",
          collapsable: false,
          children: ["", "gulp", "nuxt", "variables"]
        }
      ]
    }
  }
}
