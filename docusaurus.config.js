// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Study",
  tagline: "Keep a record of some study documents",
  url: "https://marknote.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cpcl1217", // Usually your GitHub org/user name.
  projectName: "marknote.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/tech",
          routeBasePath: "tech-notes",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/cpcl1217/marknote.github.io/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-6WT9XWQMQ5",
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects: (path) => {
          if (path.includes("/learning-notes")) {
            return [path.replace("/learning-notes", "/tech-notes")];
          }
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `⭐️ If you like this website, give it a star on <a style="color: purple" target="_blank" rel="noopener noreferrer" href="https://github.com/cpcl1217/marknote.github.io">GitHub</a>⭐ `,
        // isCloseable: false, // Whether it can be turned off
      },
      navbar: {
        title: "My-Notes",
        logo: {
          alt: "My Site Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Tech-Notes",
          },
          {
            href: "https://github.com/cpcl1217",
            position: "right",
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: "dark",

        links: [
          {
            title: "Learning",
            items: [
              {
                label: "Tech-Notes",
                to: "/tech-notes",
              },
            ],
          },
          {
            title: "Profiles",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/cpcl1217",
              },
            ],
          },
          {
            title: "Tools",
            items: [
              {
                label: "Docusaurus",
                href: "https://docusaurus.io",
              },
              {
                label: "GitHub Pages",
                href: "https://pages.github.com",
              },
            ],
          },
          /*{
            title: "License",
            items: [
              {
                html: `<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="CC BY-SA License" height="40px" width="114px" ></a>`,
              },
            ],
          },*/
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oceanicNext,
        additionalLanguages: ["bash", "hcl", "yaml"],
      },
    }),
};

module.exports = config;