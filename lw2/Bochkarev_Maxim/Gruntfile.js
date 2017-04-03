module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		eslint: {
			src: ['src/Scripts/*.js'],
			options: {
				configFile: "eslint_config.json",
			}		
		},
		concat: {
			js: {
				src: ['src/Scripts/*js'],
				dest: '.build/scripts.js'
			},
			html: {
				src: ['src/site.html'],
				dest: '.build/index.html'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'src/styles/style.css'],
				dest: '.build/styles.css'
			}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost', 
					port: 8080,
					base: '.build/',
					livereload: 35729,
					open: {
						target: 'http://localhost:8080'
					}
				}		
			}
		},
		watch: {
			js: {
				files: ['src/Scripts/*js'],
				tasks: ['eslint', 'concat:js']
			},
			html: {
				files: ['src/site.html'],
				tasks: ['concat:html']
			},
			css: {
				files: ['src/styles/style.css'],
				tasks: ['concat:css']			
			},
			options: {
				livereload: 35729
			}
		}
	});
	grunt.loadNpmTasks('grunt-eslint');	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['eslint', 'concat', 'connect', 'watch']);
};