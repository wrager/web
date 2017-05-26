module.exports = function(grunt) {	

  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
	
    pkg: grunt.file.readJSON('package.json'),
	concat: {
	  scripts: {
		src: ['model/shape.ts',
		'model/rectangle.ts',
		'model/triangle.ts',
		'model/circle.ts', 
		'view/base_drawer.ts',
		'view/rectangle_drawer.ts',
		'view/circle_drawer.ts',
		'view/triangle_drawer.ts',
		'presenter/base_shape_presenter.ts',
		'presenter/circle_presenter.ts',
		'presenter/rectangle_presenter.ts',
		'presenter/triangle_presenter.ts',
		'presenter/window_presenter.ts',
		'presenter/main.ts'],
		dest: '.build/scripts.ts'
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
	tslint: {
		options: {
                configFile: 'tslint.json',
                reset: true
            },
		target: ['.build/scripts.ts']
	},
	cachebreaker: {
		dev: {
			options: {
				match: [
					{
						'scripts.ts' : '.build/scripts.ts',
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
	},
	ts: {
		default: {
		  src: '.build/scripts.ts',
		}
  },
  });
   
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-cache-breaker');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-tslint --force");

  
  grunt.registerTask('main', ['concat', 'tslint', 'cachebreaker', 'ts']);
  grunt.registerTask('default', ['main', 'connect', 'watch']);

};