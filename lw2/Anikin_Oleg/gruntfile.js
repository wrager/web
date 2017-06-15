module.exports = function( grunt ) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
                src: ['src/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/styles.css'
			},
			js: {
				src: ["src/js/point.js", "src/js/shape.js", "src/js/triangle.js", "src/js/circle.js", "src/js/rectangle.js", "src/js/canvas.js", "src/js/painter.js", "src/js/main.js"],
				dest: 'build/script.js'
			},
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
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
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					livereload: true,
					port: 8080,
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
				files: ['src/styles/*.css'],
				tasks: ['concat:css', 'cachebreaker']
			},
			ts: {
				files: ['src/js/*.ts'],
				tasks: ['tslint', 'ts', 'concat:js', 'cachebreaker']
			},
			html: {
				files: ['src/index.html'],
				tasks: ['concat:html', 'cachebreaker']
			}
		},
		cachebreaker: {
			dev: {
				options: {
					match: [
						{
							'script.js': 'build/script.js',
							'styles.css': 'build/styles.css'
						}
					],
					replacement: 'md5'
				},
				files: {
					src: ['build/index.html']
				}
			}
		}
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks("grunt-tslint");
    grunt.registerTask('default', ['tslint', 'ts', 'concat', 'cachebreaker', 'connect', 'watch']);
};