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
        tasks: ['elm', 'reload']
      }
    },
    clean: ['elm-stuff/build-artifacts']
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-elm');

  grunt.registerTask('default', ['elm']);

  // Task to reload chrome active tab
  grunt.registerTask('reload', 'reload Chrome on OS X',
    function() {
      require('child_process').exec('osascript ' +
        '-e \'tell application "Google Chrome" ' +
        'to tell the active tab of its first window\' ' +
        '-e \'reload\' ' +
        '-e \'end tell\'');
    });

};
