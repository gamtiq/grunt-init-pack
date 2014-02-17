# grunt-init-pack

[grunt-init](http://gruntjs.com/project-scaffolding) template for a project that has Node package and optionally
[Bower](http://bower.io), [Component](https://github.com/component/component), [Jam](http://jamjs.org)
and/or [UMD](https://github.com/umdjs/umd) package.
Includes [jshint](jshint.com), [mocha](http://visionmedia.github.io/mocha/)+[chai](http://chaijs.com) tests,
[jsdoc](http://usejsdoc.org) (optionally).

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

## License

MIT
