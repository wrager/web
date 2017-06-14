module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			src: ['build/script.js'],
			options: {
				configFile: "eslint.json"
			}
		},
		concat: {
			html:{
				src: ['index.html'],
				dest: 'build/index.html'
			},
			js: {
				src: ['js/*.js'],
				dest: 'build/script.js'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
					'css/style.css'],
				dest: 'build/style.css'
			},
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
				files: ['style/*.css'],
				tasks: ['concat:css', 'cachebreaker']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['concat:js', 'eslint', 'cachebreaker']
			},
			html: {
				files: ['index.html'],
				tasks: ['concat:html', 'cachebreaker']
			}
		},
		cachebreaker: {
			dev: {
				options: {
					match: [
						{
							'script.js': 'build/script.js',
							'style.css': 'build/style.css'
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
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['concat', 'eslint', 'connect', 'watch', 'cachebreaker']);
};