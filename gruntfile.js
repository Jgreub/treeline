module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({

        // ***************** //
        //  Grunt Variables  //
        // ***************** //

        TreelineJs: 'src/main/js/**/*.js',
        BuiltDir: 'src/main/resources/static/built',

        // ***************** //
        //    Grunt Tasks    //
        // ***************** //

        uglify: {
            treeline: {
                src: [
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
        }
    });

    // **************************** //
    //    Grunt Registered Tasks    //
    // **************************** //

    grunt.registerTask('build', ['uglify:treeline', 'uglify:dependencies']);
};
