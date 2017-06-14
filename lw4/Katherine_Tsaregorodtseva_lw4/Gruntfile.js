// ������������ �������
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ts: {
			default: {
				src:["js/*ts", "!node_modules/**"],
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
		// ���������
		concat: {
			html:{
				src: ['index.html'],
				dest: 'build/index.html'
			},
			js: {
				src: ['js/shape.js', 'js/circle.js', 'js/rectangle.js','js/triangle.js', 'js/main.js'],
				dest: 'build/scripts.js'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
					'css/style.css'],
				dest: 'build/styles.css'
			},
		},
		connect: {
			server: {
				options: {
					hostname: 'localhost',
					livereload: true,
					port: 8080,
					base: 'build/',
					open: {
						target: 'http://localhost:8080'
					}
				}
			}
		},
		clean: {
			src: ["js/*.js", "js/*.js.map"]
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['styles/*.css'],
				tasks: ['concat:css', 'cachebreaker']
			},
			ts: {
				files: ['js/*.ts'],
				tasks: ['tslint', 'ts', 'concat:js', 'clean', 'cachebreaker']
			},
			html: {
				files: ['index.html'],
				tasks: ['concat:html', 'cachebreaker']
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
	// �������� ��������, ������������� � ������� npm install
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-cache-breaker');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks('grunt-contrib-clean');
	// ������ �� ���������
	grunt.registerTask('default', ['tslint', 'ts', 'concat','clean', 'cachebreaker', 'connect', 'watch']);
};
