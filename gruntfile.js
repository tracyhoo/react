'use strict';


module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-symlink');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-sizediff');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-styl');
    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-bower-requirejs');

    require('load-grunt-tasks')(grunt);

    var viewsSrc = [
    '/modules/**/*.jsx'
    ];

    grunt.initConfig({
        clean: {
            all: ['build'],
            jsx: ['build']
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
        	}
         //    ,
        	// dynamic_mappings: {
        	// 	files: [
        	// 	{
        	// 		expand: true,
        	// 		cwd: 'modules/',
        	// 		src: ['**/*.jsx'],
        	// 		dest: 'build/',
        	// 		ext: '.js'
        	// 	}
        	// 	]
        	// }
        },
        babel: {
        	options: {
        		sourceMap: false
        	},
        	dist: {
        		files: {
        			'dist/combined.js': 'out/combined.js'
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
          files: ['**/*.jsx'],
          tasks: ['clean', 'build'],
          options : {
            debounceDelay: 250,
        }

    }
});

grunt.registerTask('build', ['clean','react']);
grunt.registerTask('w', ['watch']);
grunt.registerTask('bb', ['babel']);
grunt.registerTask('default', ['build']);

};
