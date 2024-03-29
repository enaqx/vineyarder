'use strict';
var _ = require('lodash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = function(grunt) {
  var config = {
    clean: ['./build', './static'],
    concurrent: {
      dev: ['nodemon:dev', 'webpack:dev'],
      options: {
        logConcurrentOutput: true
      }
    },
    execute: {
      static: {
        options: {
          cwd: './static'
        },
        src: ['./app/static.js']
      }
    },
    copy: {
      static: {
        files: [{
          expand: true,
          cwd: 'app/assets/',
          src: ['**/*'],
          dest: 'static/'
        }, {
          expand: true,
          cwd: 'build/',
          src: 'client.css*',
          dest: 'static/'
        }]
      }
    },
    nodemon: {
      dev: {
        script: './app/server.js',
        options: {
          ignore: ['./build/**'],
          ext: 'js, jsx'
        }
      }
    },
    webpack: {
      dev: {
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        entry: './app/client.js',
        output: {
          path: './build',
          filename: 'client.js'
        },
        module: {
          loaders: [
            { test: /\.css$/, loader: 'style!css' },
            // Use 'css-loader?minimize!less-loader' for minification
            { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader',
              'css-loader!less-loader') },
            { test: /\.jsx$/, loader: 'jsx-loader'}
          ]
        },
        plugins: [new ExtractTextPlugin('client.css')],
        stats: {
          colors: true
        },
        devtool: 'source-map',
        watch: true,
        keepalive: true
      }
    },
    uglify: {
      options: {
      },
      static: {
        files: {
          "static/client.js": ['build/client.js']
        }
      }
    },
    eslint: {
      target: ['Gruntfile.js', 'app/**/*.js', 'app/**/*.jsx']
    }
  };

  // Copy the dev webpack configuration but don't watch
  config.webpack.static = _.clone(config.webpack.dev);
  config.webpack.static.watch = false;
  config.webpack.static.keepalive = false;

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-execute');
  grunt.loadNpmTasks('grunt-aws');
  grunt.loadNpmTasks('grunt-npm-install');
  grunt.loadNpmTasks('grunt-eslint');

  // Run the node server and watch for changes
  grunt.registerTask('default', ['clean', 'npm-install', 'concurrent:dev']);

  // Build the static site
  grunt.registerTask('static', ['clean', 'npm-install', 'webpack:static',
    'copy:static', 'uglify:static', 'execute:static']);

  // For testing, just execute the static script
  grunt.registerTask('static-only', ['execute:static']);
};
