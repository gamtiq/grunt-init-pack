/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today("yyyy") %} {%= author_name %}
 * Licensed under the {%= licenses.join(", ") %} license{%= licenses.length === 1 ? "" : "s" %}.
 */


/**
 * @module {%= name %}
 */


"use strict";

module.exports = function() {
    return "awesome";
};
