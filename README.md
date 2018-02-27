# boilerplate-cli [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

CLI to search and download Keid's or others boilerplates on github.

## Required

* Git installed
* NodeJS isntalled

## Install

```bash
$ npm install boilerplate-cli -g
```

## Usage

```bash
$ boilerplate-cli -h
boilerplate-cli [command]

commands:
  boilerplate-cli list                            show all boilerpates
  boilerplate-cli home [author_and_bilerpate]     go to a github repository
  boilerplate-cli search [keyword]                search a boilerplate
  boilerplate-cli create [boilerplate] [project]  install a boilerplate into a project
                                           directory
  boilerplate-cli taps                            show all authors of boilerplates
  boilerplate-cli tap [author]                    add a new author of boilerplates
  boilerplate-cli untap [author]                  remove a author of boilerplates
  boilerplate-cli reset                           reset all configuration to default

options:
  --version, -v
  --help, -h
```

## How to use everyone's boilerplates

You can use this command to use everyone's boilerplates.

```bash
$ boilerplate-cli tap any-user
$ boilerplate-cli search react
$ boilerplate-cli create any-user/boilerplate-react my-project
```

[npm-url]: https://npmjs.org/package/boilerplate-cli
[npm-image]: https://badge.fury.io/js/boilerplate-cli.svg
[travis-url]: http://travis-ci.org/keidrun/boilerplate-cli
[travis-image]: https://secure.travis-ci.org/keidrun/boilerplate-cli.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/boilerplate-cli
[depstat-image]: https://david-dm.org/keidrun/boilerplate-cli.svg
