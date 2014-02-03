"use strict";

module.exports = function(grunt) {
    
    // Configuration
    grunt.initConfig({
        
        name: "{%= name %}",
        mainFile: "{%= main_file %}",
        
        srcDir: "src",
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
                src: ["<%= src %>"],
                options: {
                    destination: "doc"
                }
            }
        },
        {% } %}
        
        mochacli: {
            all: {}
        }{% if (distrib) { %},{% } %}
        
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
                src: "<%= srcDir %>/<%= mainFile %>.js",
                dest: "<%= destDir %>/<%= mainFile %>.js",
                template: "unit",
                objectToExport: "module.exports",
                globalAlias: "<%= name %>"
            }
        }
        {% } %}
        
    });
    
    // Plugins
    grunt.loadNpmTasks("grunt-contrib-jshint");
    {% if (distrib) { %}
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-umd");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    {% } %}
    {% if (jsdoc) { %}grunt.loadNpmTasks("grunt-jsdoc");{% } %}
    grunt.loadNpmTasks("grunt-mocha-cli");
    
    // Tasks
    {% if (distrib) { %}
    grunt.registerTask("build", ["clean", "umd", "uglify"]);
    {% } %}
    {% if (jsdoc) { %}grunt.registerTask("doc", ["jsdoc"]);{% } %}
    grunt.registerTask("test", ["mochacli"]);
    grunt.registerTask("default", ["jshint", "test"]);
    grunt.registerTask("all", ["default"{% if (distrib) { %}, "build"{% } %}{% if (jsdoc) { %}, "doc"{% } %}]);
    {% if (travis) { %}
    // For Travis CI service
    grunt.registerTask("travis", ["all"]);
    {% } %}
};
