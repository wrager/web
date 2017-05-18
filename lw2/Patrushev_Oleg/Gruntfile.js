module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cachebreaker: {
			dev: {
				options: {
					match: [{
						'scripts.js': 'build/scripts.js',
						'styles.css': 'build/styles.css'
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
				src: ["project/js/*.ts", "!node_modules/**"],
				tsconfig: true
			}
		},
		tslint: {
			options: {
				configuration: "tslint.json"
			},
			your_target: {
				src: ["project/js/*.ts"]
			}
		},
        concat: {
            css: {
                src: ['project/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/styles.css'
            },
            js: {
                src: ['project/js/script.js', 'project/js/shape.js', 'project/js/circle.js', 'project/js/rectangle.js', 'project/js/triangle.js'],
                dest: 'build/scripts.js'
            },
			html: {
				src: ['project/index.html'],
                dest: 'build/index.html'
			}
        },
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080,
					livereload: true,
					base: 'build/'
				}
			}
		},
        watch: {
			options: {
				livereload: true
			},
            css: {
                files: ['project/styles/*.css'],
                tasks: ['concat:css', 'cachebreaker']
            },
            js: {
                files: ['project/js/*.ts'],
                tasks: ['concat:js', 'cachebreaker']
            },
			html: {
				files: ['project/index.html'],
                tasks: ['cachebreaker']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
	//grunt.loadNpmTasks('gruntify-eslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks("grunt-tslint");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['tslint', 'ts', 'concat', 'cachebreaker', 'connect', 'watch']);
};