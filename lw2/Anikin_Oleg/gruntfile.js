module.exports = function( grunt ) {
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                src: ['src/styles/*.css', 'node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'],
                dest: 'build/styles.css'
            },
            js: {
                src: ['src/js/*.js'],
                dest: 'build/script.js'
            },
			html: {
				src: ['src/index.html'],
                dest: 'build/index.html'
			}
        },
	eslint: {
		options: {
			configFile: "eslint.json",
		},
		src: ['build/script.js']
	},
	connect: {
		server: {
			options: {
				hostname: 'localhost',
				keepalive: true,
				port: 8080,
				base: 'build/',
				open: {
					target: 'http://localhost:8080'
				}
			}
		}
	},
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks("gruntify-eslint");
    grunt.registerTask('default', ['concat', 'eslint', 'connect']);
};