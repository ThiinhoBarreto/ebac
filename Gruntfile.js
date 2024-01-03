module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          'dest/styles/main.css': 'src/styles/main.less' 
        }
      }
    },
    uglify: {
     	target: {
        files: {
          'dest/main.min.js': ['src/main.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'uglify']);
};
