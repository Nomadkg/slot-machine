import { wheelNames } from '../../common/constants';

const getRandomWheel = () => wheelNames[Math.floor(Math.random() * wheelNames.length)];

export function getWheels() {
    return {
        firstWheel: getRandomWheel(),
        secondWheel: getRandomWheel(),
        thirdWheel: getRandomWheel(),
    }
}

export function startTimer(callback, seconds) {
    return setTimeout(callback, seconds * 1000);
}

export function getImages(name, path) {
    return new URL(`${path}${name}`, import.meta.url).href
}
