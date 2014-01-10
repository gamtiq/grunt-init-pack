"use strict";

var path = require("path");

// Basic template description.
exports.description = "Create a project that has Node package and optionally Bower, Component, Jam and/or UMD package. " +
    "Includes jshint, mocha+chai tests, jsdoc (optionally).";

// Template-specific notes to be displayed before question prompts.
exports.notes = "_Project name_ shouldn't contain \"node\" or \"js\" and should " +
    "be a unique ID not already in use at search.npmjs.org.";

// Template-specific notes to be displayed after question prompts.
exports.after = "You should now install project dependencies with _npm " +
    "install_ if you have not answered 'yes' to the corresponding question. " + 
    "After that, you may execute project tasks with _grunt_. For " +
    "more information about installing and configuring Grunt, please see " +
    "the Getting Started guide:" +
    "\n\n" +
    "http://gruntjs.com/getting-started";

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = "*";

// The actual init template.
exports.template = function(grunt, init, done) {
    
    var yesRegExp = /^\s*y[es\s]*/i,
        spaceRegExp = /\s+/,
        trimRegExp = /^\s+|\s+$/g;

    // Sanitize function for Yes/No values
    function convertYesNo(value, data, done) {
        done( false, yesRegExp.test(value) );
    }
    
    init.process({type: "node"}, 
        [
            // Prompt for these values.
            init.prompt("name"),
            init.prompt("description"),
            {
                name: "keywords",
                message: "Project keywords (separated by space)",
                sanitize: function(value, data, done) { 
                    done(false, value 
                                    ? value.replace(trimRegExp, "")
                                            .split(spaceRegExp)
                                    : []); 
                }
            },
            init.prompt("version", "0.0.1"),
            init.prompt("repository"),
            init.prompt("homepage"),
            init.prompt("bugs"),
            init.prompt("licenses"),
            init.prompt("author_name"),
            init.prompt("author_email"),
            init.prompt("author_url"),
            init.prompt("node_version", ">= 0.10.0"),
            init.prompt("main", function(value, data, done) {
                done(null, "src/" + data.name);
            }),
            init.prompt("npm_test", "grunt test"),
            {
                name: "bower",
                message: "Will this project have Bower package?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "component",
                message: "Will this project have Component package?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "jam",
                message: "Will this project have Jam package? (Instead of 'yes' you can enter list of categories separated by space)",
                "default": "Y/n",
                sanitize: function(value, data, done) {
                    value = value.replace(trimRegExp, "");
                    if (/^no?$/i.test(value)) {
                        value = false;
                    }
                    else if (yesRegExp.test(value)) {
                        value = true;
                    }
                    else {
                        value = value.split(spaceRegExp);
                    }
                    done(false, value);
                }
            },
            {
                name: "umd",
                message: "Will this project have AMD package or standalone script file?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "jsdoc",
                message: "Will this project use JSDoc?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "travis",
                message: "Will this project be tested with Travis CI?",
                "default": "Y/n",
                warning: "If selected, you must enable Travis support for this project in https://travis-ci.org/profile",
                sanitize: convertYesNo
            },
            {
                name: "travis_badge",
                message: "Would you like to include Travis build status badge into README.md?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "npm_badge",
                message: "Would you like to include NPM version badge into README.md?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "grunt_badge",
                message: "Would you like to include Grunt badge into README.md?",
                "default": "Y/n",
                sanitize: convertYesNo
            },
            {
                name: "npm_install",
                message: "Would you like to run `npm install` command automatically after initialization of the project?",
                "default": "Y/n",
                sanitize: convertYesNo
            }
        ], 
        function(err, props) {
            props.main_file = path.basename(props.name, ".js");
            props.distrib = props.bower || props.jam || props.umd;
            
            var devDepend = props.devDependencies = {
                "grunt": ">=0.4.2",
                "grunt-contrib-jshint": ">=0.7.2",
                "grunt-mocha-cli": ">=1.3.0"
            };
            if (props.distrib) {
                devDepend["grunt-contrib-clean"] = ">=0.5.0";
                devDepend["grunt-contrib-uglify"] = ">=0.2.7";
                devDepend["grunt-umd"] = ">=1.3.0";
            }
            if (props.jsdoc) {
                devDepend["grunt-jsdoc"] = ">=0.4.2";
            }
        
            // Files to copy (and process).
            if (! props.distrib) {
                init.renames["test/lib/mocha.*"] = false;
            }
            var files = init.filesToCopy(props);
            if (! props.bower) { 
                delete files["bower.json"]; 
            }
            if (! props.component) { 
                delete files["component.json"]; 
            }
            if (! props.travis) { 
                delete files[".travis.yml"]; 
            }
            if (! props.distrib) {
                delete files["test/index.html"];
            }
        
            // Add properly-named license files.
            init.addLicenseFiles(files, props.licenses);
        
            // Actually copy (and process) files.
            init.copyAndProcess(files, props);
        
            // Generate package.json file.
            init.writePackageJSON("package.json", props, function(pkg, props) {
                if (props.jam) {
                    pkg.jam = {
                        "main": "dist/" + props.main_file + ".js",
                        "include": [
                            "dist",
                            "doc",
                            "README.md"
                        ]
                    };
                    if (Array.isArray(props.jam)) {
                        pkg.categories = props.jam;
                    }
                }
                return pkg;
            });
        
            if (props.npm_install) {
                console.log("\nnpm install...\n");
                // Run npm install in project's directory
                grunt.util.spawn({cmd: "npm", args: ["install"], 
                                        opts: {cwd: init.destpath, stdio: "inherit"}}, 
                    function(error, result, code) {
                        // All done!
                        done();
                    });
            }
            else {
                // All done!
                done();
            }
            
  });

};
