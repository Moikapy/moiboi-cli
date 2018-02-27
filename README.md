# boilerplate-cli [![NPM version][npm-image]][npm-url] [![Dependency Status][depstat-image]][depstat-url]

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
  index.js list                            show all boilerpates
  index.js home [author_and_bilerpate]     go to a github repository
  index.js search [keyword]                search a boilerplate
  index.js create [boilerplate] [project]  install a boilerplate into a project
                                           directory
  index.js taps                            show all authors of boilerplates
  index.js tap [author]                    add a new author of boilerplates
  index.js untap [author]                  remove a author of boilerplates
  index.js reset                           reset all configuration to default

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
[depstat-url]: https://david-dm.org/keidrun/boilerplate-cli
[depstat-image]: https://david-dm.org/keidrun/boilerplate-cli.svg
