module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cachebreaker: {
			dev: {
				options: {
					match: [{
						'script.js': 'build/script.js',
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
				src: ["src/scripts/*.ts", "!node_modules/**"],
				tsconfig: true
			}
		},
		tslint: {
			options: {
				configuration: "tslint.json"
			},
			your_target: {
				src: ["src/scripts/*.ts"]
			}
		},
        concat: {
            css: {
                src: ['src/style/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/style.css'
            },
            js: {
                src: ['src/scripts/Shape.js', 'src/scripts/Circle.js', 'src/scripts/Rectangle.js', 'src/scripts/Triangle.js', 'src/scripts/script.js'],
                dest: 'build/script.js'
            },
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
			}
        },
		clean: {
			src: ["src/scripts/*.js", "src/scripts/*.js.map"]
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080,
					livereload: true,
					base: 'build/',
					open: {
						target: 'http://localhost:8080'
					}
				}
			}
		},
        watch: {
			options: {
				livereload: true
			},
            css: {
                files: ['src/style/*.css'],
                tasks: ['concat:css', 'cachebreaker']
            },
            ts: {
                files: ['src/scripts/*.ts'],
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
