module.exports = function( grunt ) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
                src: ['src/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/styles.css'
			},
			js: {
				src: ['src/js/*.js'],
				dest: 'build/script.js'
			},
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
			}
        },
		eslint: {
			options: {
				configFile: "eslint.json",
			},
			src: ['build/script.js']
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
			js: {
				files: ['src/js/*.js'],
				tasks: ['concat:js', 'eslint', 'cachebreaker']
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
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.registerTask('default', ['concat', 'eslint', 'cachebreaker', 'connect', 'watch']);
};