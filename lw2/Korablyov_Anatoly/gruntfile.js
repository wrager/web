module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cachebreaker: {
			dev: {
				options: {
					match: [{
						'style.css': 'build/style.css'
					}],
					replacement: 'md5',
				},
				files: {
					src: ['build/index.html']
				}
			}
		},
		ts: {
			default : {
				src: ["src/js/*.ts", "!node_modules/**"],
				tsconfig: true
			}
		},
		tslint: {
			options: {
				configuration: "tslint.json"
			},
			your_target: {
				src: ["src/js/*.ts"]
			}
		},
        concat: {
            css: {
                src: ['src/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/style.css'
            },
            js: {
                src: ['src/ts/Script.js', 'src/ts/Shape.js', 'src/ts/Circle.js', 'src/ts/Rectangle.js', 'src/ts/Triangle.js'],
                dest: 'build/scripts.js'
            },
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
			}
        },
		clean: {
			src: ["src/ts/*.js", "src/ts/*.js.map"]
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080,
					livereload: true,
					base: 'build/'
				}
			}
		},
        watch: {
			options: {
				livereload: true
			},
            css: {
                files: ['src/styles/*.css'],
                tasks: ['concat:css', 'cachebreaker']
            },
            ts: {
                files: ['src/ts/*.ts'],
                tasks: ['tslint', 'ts', 'concat:js', 'clean', 'cachebreaker']
            },
			html: {
				files: ['src/index.html'],
                tasks: ['cachebreaker']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks("grunt-tslint");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['tslint', 'ts', 'concat', 'clean', 'cachebreaker', 'connect', 'watch']);
};