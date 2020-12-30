const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/contact.js"))),
  "component---src-pages-experience-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/experience.js"))),
  "component---src-pages-fun-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/fun.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/projects.js"))),
  "component---src-pages-whoami-js": hot(preferDefault(require("/Users/cztheday25/git/mysite/src/pages/whoami.js")))
}

