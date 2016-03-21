# {%= name %} <a name="start"></a>

{%= description %}

{% if (npm_badge) { %}[![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}){% } %}
{% if (travis_badge) { %}[![Build Status](https://secure.travis-ci.org/{%= git_user %}/{%= git_repo %}.png?branch=master)](http://travis-ci.org/{%= git_user %}/{%= git_repo %}){% } %}
{% if (grunt_badge) { %}[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/){% } %}

* [Usage](#usage)
* [Examples](#examples)
* [Documentation](#documentation)
* [API](#api)
* [Contributing](#contributing)
* [Release History](#history)
* [License](#license)

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
{% if (distrib) { %}
### AMD, &lt;script&gt;

Use `dist/{%= dist_file %}` or `dist/{%= dist_file_name %}.min.js` (minified version).

{% } %}
## Usage <a name="usage"></a> [&#x2191;](#start)

### Node{% if (component) { %}, Component{% } %}

```js
var {%= js_safe_name %} = require("{%= name %}");
```

{% if (component) { %}
### [Duo](http://duojs.org)

```js
var {%= js_safe_name %} = require("{%= git_user %}/{%= name %}");
```

{% } %}
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
### Examples <a name="examples"></a> [&#x2191;](#start)

```js
{%= js_safe_name %}(); // "awesome"
```

## Documentation <a name="documentation"></a> [&#x2191;](#start)
_(Coming soon)_

{% if (jsdoc) { %}
## API <a name="api"></a> [&#x2191;](#start)

See `doc` folder.

{% } %}
## Contributing <a name="contributing"></a> [&#x2191;](#start)
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History <a name="history"></a> [&#x2191;](#start)
_(Nothing yet)_

## License <a name="license"></a> [&#x2191;](#start)
{%= copyright %}  
Licensed under the {%= license %} license.
