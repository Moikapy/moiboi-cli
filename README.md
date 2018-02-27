# boilerplate-cli [![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

CLI to search and download everyone's boilerplates on github.

## Required

* Git installed
* NodeJS isntalled

## Install

```bash
$ npm install -g boilerplate-cli
```

## Usage

```bash
$ boil -h
boil [command]

commands:
  boil list                            show all boilerpates
  boil home [author_and_bilerpate]     go to the github repository
  boil search [keyword]                search boilerplates
  boil create [boilerplate] [project]  install the boilerplate into the project directory
  boil authors                         show all authors of boilerplates
  boil tap [author]                    add the new author of boilerplates
  boil untap [author]                  remove the author of boilerplates
  boil reset                           reset all configuration to default

options:
  --version, -v
  --help, -h
```

## How to use everyone's boilerplates

You can use this command to use everyone's boilerplates.
And my boilerplates are included as default.

```bash
$ boil tap any-user
$ boil search react
$ boil create any-user/boilerplate-react my-project
```

[npm-url]: https://npmjs.org/package/boilerplate-cli
[npm-image]: https://badge.fury.io/js/boilerplate-cli.svg
[npm-downloads-url]: https://npmjs.org/package/boilerplate-cli
[npm-downloads-image]: https://img.shields.io/npm/dt/boilerplate-cli.svg
[travis-url]: https://travis-ci.org/keidrun/boilerplate-cli
[travis-image]: https://secure.travis-ci.org/keidrun/boilerplate-cli.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/boilerplate-cli
[depstat-image]: https://david-dm.org/keidrun/boilerplate-cli.svg
