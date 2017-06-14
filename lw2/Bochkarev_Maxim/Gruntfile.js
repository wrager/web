module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		clean: {
			build: {
                src: ['build/*']
			},
			js: {
                src: ['src/Scripts/*.js']
            }
		},
        ts: {
            default : {
                src: ["src/Scripts/*.ts", "!node_modules/**"],
				tsconfig: true
            }
        },
        tslint: {
            options: {
                configuration: "tslint.json"
            },
            your_target: {
                src: ["src/Scripts/*.ts"]
            }
        },
		concat: {
			js: {
				src: ['src/Scripts/*js'],
				dest: 'build/scripts.js'
			},
			html: {
				src: ['src/site.html'],
				dest: 'build/index.html'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'src/styles/style.css'],
				dest: 'build/styles.css'
			},
			systemjs: {
				src: ['node_modules/systemjs/dist/system.js'],
				dest: 'build/system.js'
			}
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost', 
					port: 8080,
					base: 'build/',
					livereload: 35729,
					open: {
						target: 'http://localhost:8080'
					}
				}		
			}
		},
		watch: {
			ts: {
				files: ['src/Scripts/*ts'],
				tasks: ['tslint', 'ts', 'concat:js', 'clean:js']
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

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
	
	grunt.registerTask('default', ['clean:build', 'tslint', 'ts', 'concat', 'clean:js', 'cachebreaker', 'connect', 'watch']);
};