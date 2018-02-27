# boilerplate-cli [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

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
$ bp -h
bp [command]

commands:
  bp list                            show all boilerpates
  bp home [author_and_bilerpate]     go to a github repository
  bp search [keyword]                search a boilerplate
  bp create [boilerplate] [project]  install a boilerplate into a project
                                           directory
  bp taps                            show all authors of boilerplates
  bp tap [author]                    add a new author of boilerplates
  bp untap [author]                  remove a author of boilerplates
  bp reset                           reset all configuration to default

options:
  --version, -v
  --help, -h
```

## How to use everyone's boilerplates

You can use this command to use everyone's boilerplates.
And my boilerplates are included as default.

```bash
$ bp tap any-user
$ bp search react
$ bp create any-user/boilerplate-react my-project
```

[npm-url]: https://npmjs.org/package/boilerplate-cli
[npm-image]: https://badge.fury.io/js/boilerplate-cli.svg
[travis-url]: http://travis-ci.org/keidrun/boilerplate-cli
[travis-image]: https://secure.travis-ci.org/keidrun/boilerplate-cli.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/boilerplate-cli
[depstat-image]: https://david-dm.org/keidrun/boilerplate-cli.svg
