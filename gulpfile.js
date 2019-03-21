var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); // Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического
        
    gulp.task('sass', function() { // Создаем таск "sass"
      return gulp.src('app/sass/**/*.scss') // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку css
      });

    gulp.task('watch', function() {
      gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
    });

    gulp.task('default', function () {
    return gulp.src('app/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
    });

    gulp.task('default', gulp.parallel('sass', 'watch'));
