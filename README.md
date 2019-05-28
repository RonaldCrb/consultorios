# consultorios

> This is a demo Universal app for webicultores.com

## Features

A- Server Side Rendered SSR (Generates HTML + CSS in the server for SEO and performance purposes)

B- Serverless (Authentication, Database, Storage and messaging managed using Firebase BaaS Platform)

C- Homescreen installable (only on Android, it will soon be available for all devices/browsers)

D- Service Workers (allow the messaging service to be active in the background)

## Tools Used

A- Nuxt.js (high level framework based on Vue)

B- Vuex (state management, the best)

C- Nuxt PWA plugin (manifest, icon, service workers, meta tags)

D- Firebase 

E- Vuetify (material design based UI framework for vue)

F- Moment.js (formating dates)

G- Dinero.js (formating figures)

H- js-cookie (auth related cookies)

I- sweetalert2 (in app alerts)


## Build Setup

1- Clone the repo

2- Install, you will need Node.js V 11+
``` bash
# install dependencies
$ npm install
```

3- commands:
``` bash
# start dev server
$ npm run dev
# lint + fix
$ npm run lintfix
# while on Universal mode, statically bundle the app for deployment in static hosting like amazon s3 bucket or whatever you prefer. 
$ npm run generate
```
4- add env variables inside the config object in nuxt.config.js; env variables are only invoked in the firebase config file in ./plugins/firebase.js

# Options

> this app can be deployed in 3 different modes:

A- Static hosting with Server Side Rendering: this mode basically generates the HTML for the pages right before deployment, in this way, one can have a universal app that loads very quickly, benefits from Search Engine Optimization and has all the power of Javascript on the client side; once the html pages are loaded, it behaves as a normal Single page application making asynchronous calls, although this information is not available at generation time, by placing static assets in the pre-rendered html, one can cut Time to first meaningfull paint and Time to interactive in a considerable manner. This is the mode that the app is deployed at the moment.

B- Full Node JS hosting with Server Side Rendering: this mode allows us to harness the full power of Server side rendering, by dynamically rendering the HTML on request and allowing us to place any data wether dynamic or static in the pages. this naturally comes with the cost and complexity burden of using a traditional server hosting/VPS/Dyno. 

C- Single Page App: it can be deployed just as a regular SPA, this is ideal for corporate applications or non-customer-facing apps that will not benefit from SEO.
