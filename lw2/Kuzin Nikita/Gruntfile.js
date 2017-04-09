module.exports = function(grunt) {	

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
	
    pkg: grunt.file.readJSON('package.json'),
	concat: {
	  options: {
		separator: '\n\n'
	  },
	  scripts: {
		src: ['model/**/*.js', 'view/**/*.js', 'presenter/**/*.js'],
		dest: '.build/scripts.js'
	  },
	  index: {
		src: ['index.html'],
		dest: '.build/index.html'  
	  },
	  styles: {
		src: ['styles.css'],
		dest: '.build/styles.css'
	  },
	  bootstrap: {
		src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
		dest: '.build/bootstrap.min.css'
	  }
	},
	eslint: {
		options: {
                configFile: 'eslint.json',
                reset: true
            },
		target: ['model/**/*.js', 'view/**/*.js', 'presenter/**/*.js']
	},
	cachebreaker: {
		dev: {
			options: {
				match: [
					{
						'scripts.js' : '.build/scripts.js',
						'styles.css' : '.build/styles.css'
					}
				],
				replacement: 'md5'
			},
			files: {
				src: ['index.html']
			}
		}
	},
	watch: {
		scripts: {
			files: ['model/*.js', 'view/*.js', 'presenter/*.js', 'index.html', 'styles.css', 'Gruntfile.js'],
			tasks: ['main'],

			options: {
				spawn: false,
				livereload: true
			}
		}
	},
	connect: {
		server: {
			options: {
				port: 8080,
				base: '.build/',
				livereload: true,
				open:  {
				   target: 'http://localhost:8080',
				   appName: 'chromium-browser --incognito',
				}
			}
		}
	  }
  });
   
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-cache-breaker');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('main', ['eslint', 'concat', 'cachebreaker']);
  grunt.registerTask('default', ['main', 'connect', 'watch']);

};