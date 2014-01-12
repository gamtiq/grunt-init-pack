"use strict";
/*global chai, describe, it{% if (distrib) { %}, window{% } %}*/

// Tests for {%= name %}
describe("{%= name %}", function() {
    var expect, {%= js_test_safe_name %};
    
    // node
    if (typeof chai === "undefined") {
        {%= js_test_safe_name %} = require("../src/{%= name %}.js");
        expect = require("./lib/chai").expect;
    }
    {% if (distrib) { %}// browser
    else {
        {%= js_test_safe_name %} = window.{%= name %};
        expect = chai.expect;
    }
    {% } %}
    
    describe("suite 1", function() {
        it("should pass", function() {
            expect({%= js_test_safe_name %}())
                .equal("awesome");
        });
    });
});
