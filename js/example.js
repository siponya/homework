function getTimeFromMinutes(min) {
    let result = ''
    if (typeof(min) != 'number' || min < 0 || !Number.isInteger(min)) {
        console.log('Ошибка, проверьте данные');
    } else if (min === 0) {
        return `Это 0 часов 0 минут`;
    } else {
        let num = min / 60;
        const  hour = Math.trunc(num);
        const minute = Math.trunc((num - hour)*60);
        switch (hour) {
            case 1: 
                result = `Это ${hour} час ${minute} минут`;
                break;
            case 2: 
                result = `Это ${hour} часа ${minute} минут`;
                break;
            case 3: 
                result = `Это ${hour} часа ${minute} минут`;
                break;
            case 4: 
                result = `Это ${hour} часа ${minute} минут`;
                break;
            default: 
                result = `Это ${hour} часов ${minute} минут`;
                break;
        }
    }
    console.log(result);
    return result;
}

getTimeFromMinutes(100);

function findMaxNumber(first, second, third, fourth) {
    if (typeof(first) !== 'number' ||
        typeof(second) !== 'number' ||
        typeof(third) !== 'number' ||
        typeof(fourth) !== 'number') {
        return 0;
    } else {
        console.log(Math.max(first, second, third, fourth));
        return Math.max(first, second, third, fourth);
    }
};

findMaxNumber('3', 15, 22.1, 10);

function fib(num) {
    result = '01123581321345589144233377610987';
    if (typeof(num) != 'number' || num < 0) {
        return '';
    } else {
        result = result.substr(0,num);
    }
    console.log(result);
    return result;
}

fib(2);
fib(0);
fib(10);
fib(5);