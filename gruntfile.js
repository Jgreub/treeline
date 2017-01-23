module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.initConfig({

        // ***************** //
        //  Grunt Variables  //
        // ***************** //

        WebApp: 'webapp/main',
        TreelineJsMain: '<%= WebApp %>/Treeline.js',
        TreelineJs: '<%= WebApp %>/**/*.js',
        TreelineHtmlMain: '<%= WebApp %>/index.html',
        TreelineHtml: '<%= WebApp %>/**/*.html',
        TreelineSassMain: '<%= WebApp %>/treeline.scss',
        TreelineSass: '<%= WebApp %>/**/*.scss',
        StaticDir: 'src/main/resources/static',
        BuiltDir: '<%= StaticDir %>/built',
        TemplateDir: '<%= StaticDir %>/templates',

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
        clean: {
            static: {
                src: '<%= StaticDir %>/**'
            },
            templates: {
                src: '<%= TemplateDir %>/**'
            }
        },
        copy: {
            index: {
                src: '<%= TreelineHtmlMain %>',
                dest: '<%= StaticDir %>/index.html'
            },
            html: {
                expand: true,
                flatten: false,
                cwd: '<%= WebApp %>',
                src: ['**/*.html', '!index.html'],
                dest: '<%= TemplateDir %>'
            }
        },
        sass: {
            treeline: {
                options: {
                    noCache: true,
                    style: 'compact',
                    sourcemap: 'none',
                    loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
                },
                files: {
                    '<%= BuiltDir %>/treeline.min.css': '<%= TreelineSassMain %>'
                }
            }
        },
        watch: {
           js: {
               files: ['<%= TreelineJs %>'],
               tasks: ['uglify:treeline']
           },
           html: {
                files: ['<%= TreelineHtmlMain %>', '<%= TreelineHtml %>'],
                tasks: ['clean:templates', 'copy:index', 'copy:html']
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

    grunt.registerTask('build', ['clean:static', 'uglify:treeline', 'uglify:dependencies', 'copy:index', 'copy:html', 'sass:treeline'])
}
