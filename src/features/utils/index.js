import { reelNames, SORRY_YOU_LOSE, YOU_WIN_HUNDRED_USD, YOU_WIN_TEN_USD, YOU_WIN_TWENTY_USD } from '../../common/constants';

const getRandomReel = () => reelNames[Math.floor(Math.random() * reelNames.length)];

export function getReels() {
    return {
        firstReel: getRandomReel(),
        secondReel: getRandomReel(),
        thirdReel: getRandomReel(),
    }
}

export function checkReels({ firstReel, secondReel, thirdReel }) {
    if (firstReel === undefined && secondReel === undefined && thirdReel === undefined) {
        return null
    }

    if (firstReel !== secondReel && firstReel !== thirdReel && secondReel !== thirdReel) {
        return SORRY_YOU_LOSE
    }

    if (firstReel === secondReel && firstReel === thirdReel) {
        return YOU_WIN_HUNDRED_USD
    }

    if (firstReel !== secondReel && firstReel === thirdReel) {
        return YOU_WIN_TEN_USD
    }

    if (firstReel === secondReel && secondReel !== thirdReel) {
        return YOU_WIN_TWENTY_USD
    }

    if (firstReel !== secondReel && secondReel === thirdReel) {
        return YOU_WIN_TWENTY_USD
    }
}

export function startTimer(callback, seconds) {
    return setTimeout(callback, seconds * 1000);
}

export function getImages(name, path) {
    return new URL(`${path}${name}`, import.meta.url).href
}
