# {%= name %}

{%= description %}

{% if (npm_badge) { %}[![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}){% } %}
{% if (travis_badge) { %}[![Build Status](https://secure.travis-ci.org/{%= git_user %}/{%= git_repo %}.png?branch=master)](http://travis-ci.org/{%= git_user %}/{%= git_repo %}){% } %}
{% if (grunt_badge) { %}[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/){% } %}

## Installation

### Node

    npm install {%= name %}

{% if (component) { %}
### [Component](https://github.com/componentjs/component)

    component install {%= git_user %}/{%= name %}

{% } %}
{% if (jam) { %}
### [Jam](http://jamjs.org)

    jam install {%= name %}

{% } %}
{% if (bower) { %}
### [Bower](http://bower.io)

    bower install {%= name %}

{% } %}
{% if (spm) { %}
### [SPM](http://spmjs.io)

    spm install {%= name %}

{% } %}
{% if (distrib) { %}
### AMD, &lt;script&gt;

Use `dist/{%= dist_file %}` or `dist/{%= dist_file_name %}.min.js` (minified version).

{% } %}
## Usage

### Node{% if (component) { %}, Component{% } %}{% if (spm) { %}, SPM{% } %}

```js
var {%= js_safe_name %} = require("{%= name %}");
```

{% if (jam) { %}
### Jam

```js
require(["{%= name %}"], function({%= js_safe_name %}) {
    ...
});
```

{% } %}
{% if (distrib) { %}
### AMD

```js
define(["path/to/dist/{%= dist_file %}"], function({%= js_safe_name %}) {
    ...
});
```

### {% if (bower) { %}Bower, {% } %}&lt;script&gt;

```html
{% if (bower) { %}
<!-- Use bower_components/{%= name %}/dist/{%= dist_file %} if the library was installed by Bower -->
{% } %}
<script type="text/javascript" src="path/to/dist/{%= dist_file %}"></script>
<script type="text/javascript">
    // {%= name %} is available via {%= name %} field of window object
    {% if (name !== js_safe_name) { %}
    var {%= js_safe_name %} = window["{%= name %}"];
    {% } %}
    ...
</script>
```

{% } %}
### Examples

```js
{%= js_safe_name %}(); // "awesome"
```

## Documentation
_(Coming soon)_

{% if (jsdoc) { %}
## API

See `doc` folder.

{% } %}
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
{%= copyright %}  
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
