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
					keepalive: 'true',
					open: {
						target: 'http://localhost:8080'
					}
				}		
			}
		}
	});
	grunt.loadNpmTasks('grunt-eslint');	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['eslint', 'concat', 'connect']);
};