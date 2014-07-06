/**
 * Command-line interface.
 * 
 * @module {%= cli_name %}
 */

{% if (js_safe_name.indexOf("_") > -1) { %}
/*jshint camelcase:false*/
{% } %}

var {%= js_safe_name %} = require("./{%= main_file %}");
console.log({%= js_safe_name %}());
