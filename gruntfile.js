'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-symlink');


    var viewsSrc = [
    	'/modules/**/*.jsx'
    ];

	grunt.initConfig({
        clean: {
            all: ['modules'],
            jsx: ['modules']
        },

        react: {
        	single_file_output: {
        		files: {
        			'build/index.js': 'index.jsx'
        		}
        	},
        	combined_file_output: {
        		files: {
        			'build/combined.js': [
        			'modules/*.jsx'
        			]
        		}
        	},
        	dynamic_mappings: {
        		files: [
        		{
        			expand: true,
        			cwd: 'modules/',
        			src: ['**/*.jsx'],
        			dest: 'build/',
        			ext: '.js'
        		}
        		]
        	}
        },
        babel: {
        	options: {
        		sourceMap: true
        	},
        	dist: {
        		files: {
        			'dist/app.js': 'src/app.js'
        		}
        	}
        }
        // ,
        // browserify:     {
        // 	options:      {
        // 		transform:  [ require('grunt-react').browserify ]
        // 	},
        // 	app:          {
        // 		src:        'path/to/source/main.js',
        // 		dest:       'path/to/target/output.js'
        // 	}
        // }
        ,
        watch: {
        	jsx: {
        		files: ['**/*.jsx'],
        		tasks: ['clean', 'build'],
        		options: {
        			debounceDelay: 250
        		}
        	}
        }
    });

grunt.registerTask('build', ['react']);
grunt.registerTask('watch', ['watch:jsx']);
grunt.registerTask('default', ['build']);

};
