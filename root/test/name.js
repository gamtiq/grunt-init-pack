"use strict";
/*global chai, describe, it{% if (distrib) { %}, window{% } %}*/

// Tests for {%= name %}
describe("{%= name %}", function() {
    var expect, pack;
    
    // node
    if (typeof chai === "undefined") {
        pack = require("../src/{%= name %}.js");
        expect = require("./lib/chai").expect;
    }
    {% if (distrib) { %}
    // browser
    else {
        pack = window.{%= name %};
        expect = chai.expect;
    }
    {% } %}
    
    describe("suite 1", function() {
        it("should pass", function() {
            expect(pack())
                .equal("awesome");
        });
    });
});
