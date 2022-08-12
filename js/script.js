// 'use strict';

const numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели?', '1');
console.log(numberOfFiles);

let personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных Вами фильмов?'),
      b = prompt('На сколько оцените его?', '7.4'),
      c = prompt('Один из просмотренных Вами фильмов?'),
      d = prompt('На сколько оцените его?', '7.4');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB['movies']);