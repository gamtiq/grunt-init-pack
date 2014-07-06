"use strict";

module.exports = function(grunt) {
    {% if (matchdep) { %}
    var matchdep = require("matchdep");
    {% } %}
    
    // Configuration
    grunt.initConfig({
        {% if (include_config) { %}
        pkg: grunt.file.readJSON("{%= include_config %}"),
        
        name: "<%= pkg.name %>",
        version: "<%= pkg.version %>",
        {% } else { %}
        name: "{%= name %}",
        {% } %}
        
        mainFile: "{%= main_file %}",
        distFile: "{%= dist_file %}",
        
        srcDir: "{%= source_dir %}",
        srcFiles: "**/*.js",
        src: "<%= srcDir %>/<%= srcFiles %>",
        
        destDir: "dist",
        
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            gruntfile: {
                src: "Gruntfile.js"
            },
            src: {
                src: ["<%= src %>"]
            },
            test: {
                src: ["test/*.js"]
            }
        },
        
        {% if (jsdoc) { %}
        jsdoc: {
            dist: {
                src: ["<%= src %>", "README.md"],
                options: {
                    destination: "doc",
                    template: "node_modules/grunt-jsdoc/node_modules/ink-docstrap/template",
                    configure: "jsdoc-conf.json"
                }
            }
        },
        {% } %}
        
        {% if (distrib) { %}
        clean: {
            dist: {
                src: ["<%= destDir %>"]
            }
        },
        
        uglify: {
            minify: {
                files: [
                    {
                        expand: true,
                        cwd: "<%= destDir %>/",
                        src: "<%= srcFiles %>",
                        dest: "<%= destDir %>/",
                        ext: ".min.js"
                    }
                ]
            }
        },
        
        umd: {
            dist: {
                src: "<%= srcDir %>/<%= mainFile %>",
                dest: "<%= destDir %>/<%= distFile %>",
                template: "unit",
                objectToExport: "module.exports",
                globalAlias: "<%= name %>",
                indent: "    "
            }
        },
        {% } %}
        
        {% if (release_task) { %}
        push: {
            options: {
                files: ["package.json"{% if (bower) { %}, "bower.json"{% } %}{% if (component) { %}, "component.json"{% } %}],
                commitMessage: "Release version %VERSION%",
                commitFiles: ["-a"],
                tagName: "%VERSION%",
                tagMessage: "Version %VERSION%"
            }
        },
        {% } %}
        
        mochacli: {
            all: {}
        }
    });
    
    // Plugins
    {% if (matchdep) { %}
    matchdep.filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    {% } else { %}
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-cli");
    {% if (distrib) { %}
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-umd");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    {% } %}
    {% if (jsdoc) { %}grunt.loadNpmTasks("grunt-jsdoc");{% } %}
    {% if (release_task) { %}grunt.loadNpmTasks("grunt-push-release");{% } %}
    {% } %}
    
    // Tasks
    {% if (distrib) { %}
    grunt.registerTask("build", ["clean", "umd", "uglify"]);
    {% } %}
    {% if (jsdoc) { %}grunt.registerTask("doc", ["jsdoc"]);{% } %}
    grunt.registerTask("test", ["mochacli"]);
    grunt.registerTask("default", ["jshint", "test"]);
    grunt.registerTask("all", ["default"{% if (distrib) { %}, "build"{% } %}{% if (jsdoc) { %}, "doc"{% } %}]);
    {% if (release_task) { %}
    grunt.registerTask("release", ["push"]);
    grunt.registerTask("release-minor", ["push:minor"]);
    grunt.registerTask("release-major", ["push:major"]);
    {% } %}
    {% if (travis) { %}
    // For Travis CI service
    grunt.registerTask("travis", ["all"]);
    {% } %}
};
