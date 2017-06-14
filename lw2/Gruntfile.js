module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cachebreaker: {
			dev: {
				options: {
					match: [{
						'scripts.js': '.build/scripts.js',
						'styles.css': '.build/styles.css'
					}],
					replacement: 'md5',
				},
				files: {
					src: ['.build/index.html']
				}
			}
		},
		eslint: {
			options: {
				configFile: "eslint.json",
			},
			src: ['.build/scripts.js']
		},
        concat: {
            css: {
                src: ['project/css/style.css'],
                dest: '.build/styles.css'
            },
            js: {
                src: ['project/js/common/*.js', 'project/js/shapes/*.js', 'project/js/ShapeManager.js', 'project/js/main.js'],
                dest: '.build/scripts.js'
            },
			html: {
				src: ['project/index.html'],
                dest: '.build/index.html'
			}
        },
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080,
					livereload: true,
					base: '.build/',
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
                files: ['project/styles/*.css'],
                tasks: ['concat:css', 'cachebreaker']
            },
            js: {
                files: ['project/js/*.js'],
                tasks: ['concat:js', 'eslint', 'cachebreaker']
            },
			html: {
				files: ['project/index.html'],
                tasks: ['cachebreaker']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'eslint', 'cachebreaker', 'connect', 'watch']);
};