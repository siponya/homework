"use strict";

let numberOfFiles;

function start() {
    numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели?', '1');
    while (numberOfFiles == '' || numberOfFiles == null || isNaN(numberOfFiles)) {
        numberOfFiles = +prompt('Сколько фильмов вы уже посмотрели?', '1');
    }
};
start();

let personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    let i = 0;
    while (i > 0 && i < 2) {
        const a = prompt('Один из просмотренных Вами фильмов?'),
              b = prompt('На сколько оцените его?', '7.4');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }    
        i++;
    };
};
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else {
        console.log('Вы киноман!');
    }
};
// detectPersonalLevel();


function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
};
writeYourGenres();

