module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        // ***************** //
        //  Grunt Variables  //
        // ***************** //

        TreeLineJsModule: 'src/main/js/treeline.js',
        TreelineJs: 'src/main/js/**/*.js',
        BuiltDir: 'src/main/resources/static/built',

        // ***************** //
        //    Grunt Tasks    //
        // ***************** //

        uglify: {
            treeline: {
                src: [
                    '<%= TreeLineJsModule %>',
                    '<%= TreelineJs %>'
                ],
                dest: '<%= BuiltDir %>/treeline.min.js'
            },
            dependencies: {
                options: {
                    compress: true
                },
                src: [
                    'node_modules/angular/angular.js'
                ],
                dest: '<%= BuiltDir %>/dependencies.min.js'
            }
        },
        watch: {
           js: {
               files: ['<%= TreelineJs %>'],
               tasks: ['uglify:treeline']
           }
       }
    });

    // **************************** //
    //    Grunt Registered Tasks    //
    // **************************** //

    grunt.registerTask('build', ['uglify:treeline', 'uglify:dependencies']);
};
