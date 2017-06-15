module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cachebreaker: {
			dev: {
				options: {
					match: [{
						'script.js': 'build/script.js',
						'style.css': 'build/style.css'
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
				src: ["src/TypeScript/*.ts", "!node_modules/**"],
				tsconfig: true
			}
		},
		tslint: {
			options: {
				configuration: "tslint.json"
			},
			your_target: {
				src: ["src/TypeScript/*.ts"]
			}
		},
        concat: {
            css: {
                src: ['src/css/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/style.css'
            },
            js: {
                src: ['src/TypeScript/class_shape.js', 'src/TypeScript/class_circle.js', 'src/TypeScript/class_rectangle.js', 'src/TypeScript/class_triangle.js', 'src/TypeScript/main.js'],
                dest: 'build/script.js'
            },
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
			}
        },
		clean: {
			src: ["src/TypeScript/*.js", "src/TypeScript/*.js.map"]
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 8080,
					livereload: true,
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
                files: ['src/css/*.css'],
                tasks: ['concat:css', 'cachebreaker']
            },
            ts: {
                files: ['src/TypeScript/*.ts'],
                tasks: ['tslint', 'ts', 'concat:js', 'clean', 'cachebreaker']
            },
			html: {
				files: ['src/index.html'],
                tasks: ['cachebreaker']
			}
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks("grunt-tslint");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['tslint', 'ts', 'concat', 'clean', 'cachebreaker', 'connect', 'watch']);
};