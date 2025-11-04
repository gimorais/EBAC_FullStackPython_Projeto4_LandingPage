const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SCSS
function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

// Copiar imagens
function images() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'));
}

// Tarefas exportadas
exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
};