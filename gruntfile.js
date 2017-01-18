module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.initConfig({

        // ***************** //
        //  Grunt Variables  //
        // ***************** //

        TreelineJsMain: 'src/main/js/treeline.js',
        TreelineJs: 'src/main/js/**/*.js',
        TreelineSassMain: 'src/main/resources/static/styles/treeline.scss',
        TreelineSass: 'src/main/resources/static/styles/**/*.scss',
        BuiltDir: 'src/main/resources/static/built',

        // ***************** //
        //    Grunt Tasks    //
        // ***************** //

        uglify: {
            treeline: {
                src: [
                    '<%= TreelineJsMain %>',
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
        sass: {
            treeline: {
                options: {
                    noCache: true,
                    style: 'compact',
                    sourcemap: 'none'
                },
                files: {
                    '<%= BuiltDir %>/treeline.min.css': '<%= TreelineSassMain %>'
                }
            },
            dependencies: {
                options: {
                    noCache: true,
                    style: 'compact',
                    sourcemap: 'none'
                },
                files: {
                    '<%= BuiltDir %>/dependencies.min.css': 'node_modules/bootstrap/dist/css/bootstrap.css'
                }
            }
        },
        watch: {
           js: {
               files: ['<%= TreelineJs %>'],
               tasks: ['uglify:treeline']
           },
           sass: {
               files: ['<%= TreelineSass %>'],
               tasks: ['sass:treeline']
           }
       }
    })

    // **************************** //
    //    Grunt Registered Tasks    //
    // **************************** //

    grunt.registerTask('build', ['uglify:treeline', 'uglify:dependencies', 'sass:treeline', 'sass:dependencies'])
}
