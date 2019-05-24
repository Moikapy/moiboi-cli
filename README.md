# Moiboi-cli [![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![License: MIT][license-image]][license-url]

> CLI using github to turn repos into boilerplates

## Required

* Git(>=2) installed
* NodeJS(>=10) installed

## Install

```bash
$ npm install -g moiboi-cli
```

## Usage

```bash
$ moiboi -h
moiboi [command]

Commands:
  moiboi list                            show all repos                                     [aliases: L]
  moiboi home [author/bilerpate]         go to the github repository                        [aliases: H]
  moiboi search [keyword]                search repos                                       [aliases: S]
  moiboi create [repo] [project]         install the boilerplate into the project directory [aliases: C]
  moiboi authors                         show all authors of repos                          [aliases: A]
  moiboi tap [author]                    add the new author of repos                        [aliases: T]
  moiboi untap [author]                  remove the author of repos                         [aliases: ut]
  moiboi reset                           reset all configuration to default                 [aliases: R]

Options:
  --version, -v  Show version                                [boolean]
  --global, -g   expand the range to search and create       [default: false]
  --help, -h     Show help                                   [boolean]
```

## How to use github repo as boilerplate

You can use this command to use a repo as a boilerplate.
My repos are included as default.

```bash
$ moiboi tap github-username
$ moiboi search react
$ moiboi create github-username/react your-project
```

## How to search and create repos with moiboi

You can expand the range to search and create with '--global' option.

```bash
$ moiboi search bootstrap4 -g
$ moiboi create github-username/bootstrap4 my-project -g
```

[npm-url]: https://npmjs.org/package/moiboi-cli
[npm-image]: https://badge.fury.io/js/moiboi-cli.svg
[npm-downloads-url]: https://npmjs.org/package/moiboi-cli
[npm-downloads-image]: https://img.shields.io/npm/dt/moiboi-cli.svg
[travis-url]: https://travis-ci.org/moikapy/moiboi-cli
[travis-image]: https://secure.travis-ci.org/moikapy/moiboi-cli.svg?branch=master
[depstat-url]: https://david-dm.org/moikpay/moiboi-cli
[depstat-image]: https://david-dm.org/moikpay/moiboi-cli.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg


- Credit to [keidrun](https://github.com/keidrun/boilerplate-cli) for providing the foundation of this project