# boilerplate-cli

CLI to search and download Keid's boilerplates.

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
  index.js home [author/boilerpate]        go to a github repository
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
