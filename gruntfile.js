module.exports = function(grunt) {
	grunt.initConfig({

		watch: {
			options: {
				spawn: false,
				livereload:true
			},
			scripts: {
				files: ['builds/development/**/*.html', 
				'components/scripts/**/*.js'],
				tasks: ['eslint', 'concat']
			},
			css: {
				files: ['components/css/**/*.css'],
			   tasks: ['concat_css']
			}
		},


		eslint: {
			target: ['gruntfile.js', 'components/scripts/AHfullpage.js']
		},
		

		concat_css: {
		    options: {
		    },
		    all: {
		      src: ["components/css/*.css"],
		      dest: "builds/development/css/styles.css"
		    }
		  }, //concat_css


		concat : {
			dist: {
			src:['components/scripts/*.js'],
			dest: 'builds/development/js/script.js'
			}
		},  //concat

		bower_concat: {
      		all: {
				dest: {
					js: 'builds/development/js/_bower.js',
					css: 'builds/development/css/_bower.css'
				},
				mainFiles: {
					'jquery': [
				  	'dist/jquery.js'
				  	],


				  	'fullpage.js': [ 
				  	'jquery.fullpage.js', 
				  	'jquery.fullpage.css'
				  	],



				  'owl.carousel': [
				  	'dist/owl.carousel.js',
				  	'dist/assets/owl.carousel.css', 
				  	'dist/assets/owl.theme.css', 
				  	'dist/assets/owl.transitions.css'
				  	]
				}
			}
    	}, // bower-concat


		connect: {
		 server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'builds/development/',
					livereload: true
				}
			}
		} //connect



	}); //initConfig
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-concat-css');
	grunt.loadNpmTasks('grunt-bower-concat');
	

	grunt.registerTask('default', ['bower_concat', 'concat', 'concat_css', 'connect', 'watch']);

}; //wrapper function