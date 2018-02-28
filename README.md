# boilerplate-cli [![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

CLI to search and download everyone's boilerplates on github.

## Required

* Git(>=2) installed
* NodeJS(>=9) installed

## Install

```bash
$ npm install -g boilerplate-cli
```

## Usage

```bash
$ boil -h
boil [command]

Commands:
  boil list                            show all boilerpates                               [aliases: l]
  boil home [author_and_bilerpate]     go to the github repository                        [aliases: H]
  boil search [keyword]                search boilerplates                                [aliases: s]
  boil create [boilerplate] [project]  install the boilerplate into the project directory [aliases: c]
  boil authors                         show all authors of boilerplates                   [aliases: a]
  boil tap [author]                    add the new author of boilerplates                 [aliases: t]
  boil untap [author]                  remove the author of boilerplates                  [aliases: ut]
  boil reset                           reset all configuration to default                 [aliases: r]

Options:
  --version, -v  Show version                                [boolean]
  --global, -g   expand the range to search and create       [default: false]
  --help, -h     Show help                                   [boolean]
```

## How to use everyone's boilerplates

You can use this command to use everyone's boilerplates.
And my boilerplates are included as default.

```bash
$ boil tap any-user
$ boil search react
$ boil create any-user/boilerplate-react my-project
```

## How to search and create any boilerplate of anyone expect authors

You can expand the range to search and create with '--global' option.

```bash
$ boil search bootstrap4 -g
$ boil create any-user/boilerplate-bootstrap4 my-project -g
```

[npm-url]: https://npmjs.org/package/boilerplate-cli
[npm-image]: https://badge.fury.io/js/boilerplate-cli.svg
[npm-downloads-url]: https://npmjs.org/package/boilerplate-cli
[npm-downloads-image]: https://img.shields.io/npm/dt/boilerplate-cli.svg
[travis-url]: https://travis-ci.org/keidrun/boilerplate-cli
[travis-image]: https://secure.travis-ci.org/keidrun/boilerplate-cli.svg?branch=master
[depstat-url]: https://david-dm.org/keidrun/boilerplate-cli
[depstat-image]: https://david-dm.org/keidrun/boilerplate-cli.svg
