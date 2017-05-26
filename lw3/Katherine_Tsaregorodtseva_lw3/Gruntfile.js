// Обязательная обёртка
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		eslint: {
			src: ['build/scripts.js'],
			options: {
				configFile: "eslint.json"
			}
		},
		// Склеиваем
		concat: {
			html:{
				src: ['index.html'],
				dest: 'build/index.html'
			},
			js: {
				src: ['js/*.js'],
				dest: 'build/scripts.js'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
					'css/style.css'],
				dest: 'build/styles.css'
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
				files: ['styles/*.css'],
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
							'scripts.js': 'build/scripts.js',
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
	// Загрузка плагинов, установленных с помощью npm install
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Задача по умолчанию
	grunt.registerTask('default', ['concat', 'eslint', 'connect', 'watch', 'cachebreaker']);
};