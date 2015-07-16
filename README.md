# grunt-init-pack

[grunt-init](http://gruntjs.com/project-scaffolding) template for a project that can have Node package and optionally
[Bower](http://bower.io), [Component](https://github.com/componentjs/component), [Duo](http://duojs.org),
[Jam](http://jamjs.org), [SPM](http://spmjs.io) and/or [UMD](https://github.com/umdjs/umd) package.
Includes [JSHint](jshint.com), [Mocha](http://visionmedia.github.io/mocha/)+[Chai](http://chaijs.com) tests,
[JSDoc](http://usejsdoc.org) (optionally).

## Getting started

### Installation

If you haven't already done so, install [grunt-init](http://gruntjs.com/project-scaffolding).

```bash
npm install -g grunt-init
```

Once [grunt-init](http://gruntjs.com/project-scaffolding) is installed, place this template in your `~/.grunt-init/` directory.
It's recommended that you use `git clone` to install this template into that directory as follows:

```bash
git clone https://github.com/gamtiq/grunt-init-pack.git ~/.grunt-init/pack
```

_(Windows users should use %USERPROFILE%\\.grunt-init\pack as the correct destination directory path)_

To force `grunt-init` to use custom default values, move the `defaults.json` file to your `~/.grunt-init/` directory,
and customize the values in that file.

**Note**: you can make the template available as any name you choose by simply changing the name of the folder
that the template is installed into. So instead of `~/.grunt-init/pack`, you may change the name to `~/.grunt-init/foo`
so that the template can be used with the following command: `grunt-init foo`.
Also you can clone the template into any subdirectory outside of `~/.grunt-init/` directory. For example:
```bash
git clone https://github.com/gamtiq/grunt-init-pack.git path/to/grunt-init/templates/pack
```
In this case you will have to specify path to the template when running `grunt-init` (see below).

### Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```bash
grunt-init pack
```
Or
```bash
grunt-init path/to/grunt-init/templates/pack
```
when the template was placed in subdirectory outside of `~/.grunt-init/` directory.

_Note that this template will generate files in the current directory, so be sure to change to a new directory first
if you don't want to overwrite existing files._

You might want to test that it works before you begin customizing the project:

* run `npm install` to install the project's dependencies; it is necessary only if you have answered `no`
  to the corresponding question
* run `grunt all` to build the project and test that it works

## Redefining default prompt answers

You can redefine default prompt answers using `defaults.json` file
(see [here](http://gruntjs.com/project-scaffolding#specifying-default-prompt-answers) for details).
Below supported prompt names are listed:

* `name` - project name
* `description` - project description
* `keywords` - project keywords
* `version` - initial version
* `repository` - project repository
* `homepage` - URL of project home page
* `bugs` - URL of project issues tracker
* `license` - project licenses ([SPDX license ID](https://spdx.org/licenses/) or [expression](http://npmjs.com/package/spdx))
* `author_name` - author name
* `author_email` - author email
* `author_url` - URL of author's site
* `node_version` - minimal Node.js version
* `main` - main file
* `cli` - whether project should have command-line interface
* `npm_test` - NPM test command
* `esnext` - whether project should be prepared for using of ECMAScript 2015 features
* `bower` - whether project should have [Bower](http://bower.io) package
* `component` - whether project should have [Component](https://github.com/componentjs/component) or [Duo](http://duojs.org) package
* `jam` - whether project should have [Jam](http://jamjs.org) package
* `spm` - whether project should have [SPM](http://spmjs.io) package
* `umd` - whether project should have AMD package or standalone script file
* `jsdoc` - whether project should use [JSDoc](http://usejsdoc.org)
* `travis` - whether support for [Travis CI](http://travis-ci.org) should be added
* `travis_badge` - whether [Travis CI build status badge](http://docs.travis-ci.com/user/status-images/) should be included into `README.md`
* `npm_badge` - whether [NPM version badge](https://badge.fury.io/for/js) should be included into `README.md`
* `grunt_badge` - whether [Grunt badge](http://gruntjs.com/built-with-grunt-badge) should be included into `README.md`
* `history_md` - to include or not `History.md` in the project files
* `include_config` - to include or not `package.json`/`bower.json`/`component.json` in Gruntfile configuration
* `matchdep` - to use or not [matchdep](https://github.com/tkellen/node-matchdep) module to simplify loading of plugins in Gruntfile
* `release_task` - to include or not release tasks into Gruntfile
* `npm_install` - to run or not `npm install` command automatically

## Related projects

* [grunt-pretest](https://github.com/gamtiq/grunt-pretest)
* [grunt-uniator](https://github.com/gamtiq/grunt-uniator)

## License

MIT
