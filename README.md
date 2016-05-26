nodejs v6
https://nodejs.org/api/
npm init --yes
/*
serve
  "dependencies": {
    "serve": "^1.4.0"
  },
  "devDependencies": {
    "babel-preset-es2015": "^6.1.18",
    "babelify": "^7.2.0",
    "browserify": "^12.0.1"
  },
  "scripts": {
    "public": "mkdir -p public",
    "build-js": "browserify -t [ babelify --presets [ es2015 ] ] app.js > public/app.js",
    "serve": "serve public",
    "copy-files": "copy src/index.css public/app.css && cp src/index.html public/index.html",
    "build": "npm run public && npm run build-js && npm run copy-files",
  }
  */
  

