(function(){var e,a,t,r,u,i,n;window._version="v-1695217671916",window.taigaConfig={api:"http://localhost:8000/api/v1/",newsletterSubscriberUrl:"https://newsletter-subscriber.taiga.io",eventsUrl:null,tribeHost:null,eventsMaxMissedHeartbeats:5,eventsHeartbeatIntervalTime:6e4,debug:!1,defaultLanguage:"en",themes:["taiga","taiga-legacy","material-design","high-contrast"],defaultTheme:"taiga",publicRegisterEnabled:!0,feedbackEnabled:!0,supportUrl:null,privacyPolicyUrl:null,termsOfServiceUrl:null,maxUploadFileSize:null,enableAsanaImporter:!1,enableGithubImporter:!1,enableJiraImporter:!1,enableTrelloImporter:!1,contribPlugins:[],baseHref:"/"},window.taigaContribPlugins=[],window._decorators=[],window.addDecorator=function(n,e){return window._decorators.push({provider:n,decorator:e})},window.getDecorators=function(){return window._decorators},u=function(n){var e=document.createElement("link");return e.href=n,e.type="text/css",e.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(e)},a=function(r){return new Promise(function(n,e){var t=document.createElement("script");return t.type="text/javascript",t.src=r,t.onload=n,t.onerror=function(n){return e(n,s)},document.body.appendChild(t)})},t=function(r){return new Promise(function(o,n){var e=function(n){var e,t,r,i;if(n.isPack)for(e=0,r=(i=n.plugins).length;e<r;e++)t=i[e],window.taigaContribPlugins.push(t);else window.taigaContribPlugins.push(n);return n.css&&u(n.css),n.js?a(n.js).then(o):o()},t=function(n,e,t){return console.error("Error loading plugin",r,t)};return fetch(r).then(function(n){return n.json()}).then(e,t)})},r=function(n){var e=[];return n.forEach(function(n){return e.push(t(n))}),Promise.all(e)},i=function(){var n=fetch(window._version+"/emojis/emojis-data.json").then(function(n){return n.json()}).then(function(n){return window.emojis=n});return(0<window.taigaConfig.contribPlugins.length?a(window._version+"/js/libs.js").then(function(){return a(window._version+"/js/templates.js")}).then(function(){return r(window.taigaConfig.contribPlugins)}):a(window._version+"/js/libs.js").then(function(){return a(window._version+"/js/templates.js")})).then(function(){return e(n)})},e=function(n){return a(window._version+"/js/elements.js").then(function(){return a(window._version+"/js/app.js").then(function(){return n.then(function(){return angular.bootstrap(document,["taiga"])})})})},(n=fetch("conf.json")).then(function(n){return n.json()}).then(function(n){return window.taigaConfig=Object.assign({},window.taigaConfig,n),(n=document.querySelector("base"))&&window.taigaConfig.baseHref?n.setAttribute("href",window.taigaConfig.baseHref):!n&&window.taigaConfig.baseHref&&((n=document.createElement("base")).setAttribute("href",window.taigaConfig.baseHref),document.head.appendChild(n)),i()}),n.catch(function(){return console.error("Your conf.json file is not a valid json file, please review it."),i()})}).call(this);