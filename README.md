# Moiboi-cli

> [![NPM version][npm-image]][npm-url] [![npm module downloads][npm-downloads-image]][npm-downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![License: MIT][license-image]][license-url]

## Introduction

The Moiboi-cli was created with the intention to make setting up projects easier by simplifying the git clone process. What Moiboi allows you to do is search github for any repository you would like to use and clone it into a new project directory all while taking care of removing the .git file and renaming the package.json file (if included).

## Required

- Git(>=2) installed
- NodeJS(>=10) installed

## Install

```bash
$ npm install -g moiboi-cli
```

## Usage

```bash
$ moiboi -h
moiboi [command]

Commands:
  moiboi list                            shows all repositories                                 [aliases: L]
  moiboi home [author/repository]        goes to the repository on github                       [aliases: H]
  moiboi search [keyword]                search for the repository                              [aliases: S]
  moiboi clone [repository] [project]    clones repository as new project into target directory [aliases: C]
  moiboi authors                         show all authors of repository                         [aliases: A]
  moiboi add [author]                    add the new author of repository                       [aliases: ad]
  moiboi remove [author]                 remove the author of repository                        [aliases: rm]
  moiboi reset                           reset all configuration to default                     [aliases: R]

Options:
  --version, -v  Show version                                [boolean]
  --global, -g   expand the range to search and create       [default: false]
  --help, -h     Show help                                   [boolean]
```

## How to use github repository as project

You can use this command to use a repository as a project.
My repositories are included as default.

```bash
$ moiboi add github-username
$ moiboi search react
$ moiboi clone github-username/react your-project
```

## How to search repositories and create projects with moiboi

You can expand the range to search and create with '--global' option.

```bash
$ moiboi search bootstrap4 -g
$ moiboi clone github-username/bootstrap4 my-project -g
```

[npm-url]: https://npmjs.org/package/moiboi-cli
[npm-image]: https://badge.fury.io/js/moiboi-cli.svg
[npm-downloads-url]: https://npmjs.org/package/moiboi-cli
[npm-downloads-image]: https://img.shields.io/npm/dt/moiboi-cli.svg
[travis-url]: https://travis-ci.org/moikapy/moiboi-cli
[travis-image]: https://secure.travis-ci.org/moikapy/moiboi-cli.svg?branch=master
[depstat-url]: https://david-dm.org/moikapy/moiboi-cli
[depstat-image]: https://david-dm.org/moikapy/moiboi-cli.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
