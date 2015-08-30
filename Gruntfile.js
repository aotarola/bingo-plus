module.exports = function(grunt) { //eslint-disable-line no-undef

  grunt.initConfig({
    elm: {
      compile: {
        files: {
          'main.js': ['Bingo.elm', 'Main.elm', 'BingoUtil.elm']
        }
      }
    },
    watch: {
      elm: {
        files: ['Main.elm', 'Bingo.elm', 'BingoUtils.elm'],
        tasks: ['elm']
      }
    },
    clean: ['elm-stuff/build-artifacts']
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['elm']);

};
