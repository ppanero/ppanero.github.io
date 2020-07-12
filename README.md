# ppanero.github.io

![Travis](https://img.shields.io/travis/ppanero/ppanero.github.io.svg)

## Getting Started

Pablo Panero's personal webpage uses [Lektor](https://www.getlektor.com>), a
powerful static content management system.

Install and running Lektor
--------------------------

Copy/paste the following to your command prompt to install Lektor (or see
the [downloads](https://www.getlektor.com/downloads/) page for alternative
ways):

```console
$ curl -sf https://www.getlektor.com/install.sh | sh
```

Add the webpack plugin and install the required libraries:

```console
$ lektor plugins add webpack-support
$ cd webpack
$ npm install
```

**IMPORTANT NOTE**: All webpack related files are in the `/webpack` folder
since the plugin expects said folder to exist.

Next, go into the root directory of the repository and run
the following command and open
[localhost:5000](http://localhost:5000/) in your browser afterwards:

```console
$ lektor server -f webpack
```

Lektor provided an installable version on macOS, but it is no longer supported.

## About

This repository contains sources of the http://ppanero.github.io
web site.  Please go there to see the web site in action.

**IMPORTANT NOTE**: The content of the site is hosted on the `development` branch due to the fact
that GitHub pages for personal sites must be build from master. Therefore,
master hosts the automated builds.