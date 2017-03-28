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
		assets_hash: {
			assets: {
				options: {
					algorithm: 'md5',
					jsonFile: 'versions.json',
					length: 10,
					clear: false,
					suffix: true
				},
				src: ['build/scripts.js', 'build/styles.css']
			}
		},
		eslint: {
			options: {
				configFile: "eslint.json",
			},
			src: ['project/js/*.js']
		},
        concat: {
            css: {
                src: ['project/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/styles.css'
            },
            js: {
                src: ['project/js/*.js'],
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
                tasks: ['concat:css', 'assets_hash', 'cachebreaker']
            },
            js: {
                files: ['project/js/*.js'],
                tasks: ['eslint', 'concat:js', 'assets_hash', 'cachebreaker']
            },
			html: {
				files: ['project/index.html'],
                tasks: ['assets_hash', 'cachebreaker']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks("gruntify-eslint");
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-assets-hash');
	grunt.loadNpmTasks('grunt-cache-breaker');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['eslint', 'concat', 'assets_hash', 'cachebreaker', 'connect', 'watch']);
};