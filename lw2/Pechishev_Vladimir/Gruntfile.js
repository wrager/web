
module.exports = function(grunt) {
	'use strict';

	// ===========================================================================
	// НАСТРОЙКА GRUNT ===========================================================
	// ===========================================================================
	grunt.initConfig({
		// вся наша конфигурация будет здесь
		eslint: {
			src: ['/.build/script.js'],
			options: {
				configFile: "eslint.json"
			}
		},
		concat: {
			html: {
				src: ['index.html'],
				dest: '.build/index.html'
			},
			css: {
				src: ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/style.css'],
				dest: '.build/styles.css'
			},
			js: {
				src: [
					'js/ShapeType.js',
					'js/Position.js',
					'js/Shape.js',
					'js/Rectangle.js',
					'js/Circle.js',
					'js/Triangle.js',
					'js/ShapeManager.js',
					'js/main.js'],
				dest: '.build/script.js',
				options: {
					separator: ';'
				}
			}
		}
	});

	// ===========================================================================
	// ЗАГРУЗКА ПЛАГИНОВ GRUNT ===================================================
	// ===========================================================================
	// мы можем их загрузить, только если они находятся в нашем package.json
	// убедитесь, что вы запустили npm install, чтобы наше приложение могло их найти
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-cache-breaker');

	grunt.registerTask('default', ['concat', 'eslint']);

};