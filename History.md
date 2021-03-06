### 0.3.0 / 2016-03-24

* Remove SPM support.
* Update mocha to 2.4.5, chai to 3.5.0.
* Change minimal version of node.js for generated projects up to 0.12.

### 0.2.2 / 2015-11-21

* Update version of [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc), add [ink-docstrap](https://github.com/terryweiss/docstrap) dependency.
* Fix [#1](https://github.com/gamtiq/grunt-init-pack/issues/1).

### 0.2.1 / 2015-11-09

* Add table of contents into README.md.
* Display final (`after`) message depending on `npm_install` prompt.

### 0.2.0 / 2015-07-16

* `Licenses` prompt has replaced by `license` prompt (to conform to [npm package.json](https://docs.npmjs.com/files/package.json#license) requirements).

### 0.1.4 / 2015-06-09

* Added question about use of ECMAScript 6 features.

### 0.1.3 / 2015-05-16

* Added information about usage with [Duo](http://duojs.org).
* Updated mocha to 2.2.4, chai to 2.1.0.

### 0.1.2 / 2015-01-16

* Updated SPM configuration according to [specification](http://spmjs.io/documentation/package.json).
* Updated mocha to 2.1.0, chai to 1.10.0.

### 0.1.1 / 2015-01-05

* Updated `component.json` according to [specification](https://github.com/componentjs/spec/blob/master/component.json/specifications.md).

### 0.1.0 / 2014-07-06

* Added ability to prepare [SPM](http://spmjs.io) package for created project
* Updated versions of mocha & chai
* Refactoring

### 0.0.6 / 2014-05-28

* Added ability to include contents of `package.json`/`bower.json`/`component.json` in Gruntfile configuration
* Added ability to use [matchdep](https://github.com/tkellen/node-matchdep) to load plugins in Gruntfile
* Default value of project version restored to 0.1.0

### 0.0.5 / 2014-03-17

* Added ability to include release tasks in Gruntfile
* Added ability to redefine default prompt answers via [defaults.json](http://gruntjs.com/project-scaffolding#specifying-default-prompt-answers)
* Minimal `grunt-umd` version is changed to `1.7.3`

### 0.0.4 / 2014-02-17

* JSDoc template changed to [DocStrap](https://github.com/terryweiss/docstrap).
* Added `jsdoc-conf.json`: support for markdown is enabled, `spacelab` theme from DocStrap is set.
* Added copyright snippet.

### 0.0.3 / 2014-02-08

* add Grunt task to simplify integration with Travis CI
* add means to create scaffolding for command-line interface

### 0.0.2 / 2014-01-20

* add possibility to include `History.md` in project files
