module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		eslint: {
			options: {
				target: ['project/js/*.js']
			},
			target: ['file.js']
		},
		connect: {
			server: {
				options: {
					port: 8080,
					base: 'www-root'
				}
			}
		},
        concat: {
            css: {
                src: ['project/styles/*.css'],
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
        watch: {
			options: {
				livereload: 8080
			},
            css: {
                files: ['project/styles/*.css'],
                tasks: ['concat:css', 'default']
            },
            js: {
                files: ['project/js/*.js'],
                tasks: ['concat:js', 'default']
            },
			html: {
				files: ['project/index.html'],
                tasks: ['default']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'eslint']);
};