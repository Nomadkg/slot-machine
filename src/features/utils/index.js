import { reelNames } from '../../common/constants';

const getRandomReel = () => reelNames[Math.floor(Math.random() * reelNames.length)];

export function getReels() {
    return {
        firstReel: getRandomReel(),
        secondReel: getRandomReel(),
        thirdReel: getRandomReel(),
    }
}

export function startTimer(callback, seconds) {
    return setTimeout(callback, seconds * 1000);
}

export function getImages(name, path) {
    return new URL(`${path}${name}`, import.meta.url).href
}
