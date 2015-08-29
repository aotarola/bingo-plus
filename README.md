# Bingo!
Bingo app from [pragmaticstudio](https://pragmaticstudio.com/elm) course.

The idea behind this app is to learn Elm language and add new features on Bingo app while at it.

## How to run

1.- Let's start by downloading elm packages

```bash
elm-package install
```

2.- Now we need Grunt to help us re-compile whenever there is any change in the code.

```bash
npm install -g grunt-cli --save-dev
npm install grunt --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-elm --save-dev
```

3.- Start watching the changes!

```bash
grunt watch
```

4.- Open the `index.html` file in a browser and start playing Bingo!
