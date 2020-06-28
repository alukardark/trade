var gulp      = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass'), //Подключаем Sass пакет,
    concat      = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify      = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
var browserSync = require('browser-sync').create();

gulp.task('sass', function(done) {
    gulp.src("scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'node_modules/swiper/dist/js/swiper.min.js',
        'node_modules/simple-parallax-js/dist/simpleParallax.min.js',
        'node_modules/wow.js/dist/wow.min.js',
        'node_modules/@cycjimmy/swiper-animation/dist/swiper-animation.umd.min.js',
        'node_modules/tabbyjs/dist/js/tabby.min.js',
    ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('js')); // Выгружаем в папку js
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("scss/**/*.scss", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });
    gulp.watch("js/**/*.js").on('change', () => {
        browserSync.reload();
        done();
    });


    done();
});



gulp.task('default', gulp.series('sass','scripts', 'serve'));
