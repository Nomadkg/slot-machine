import { items } from '../../common/constants';

export const getRandomItem = () => items[Math.floor(Math.random() * items.length)];

export const getWheels = (data) => {
    return Object.values(data).filter(value => value && value.endsWith('.png'));
};

export function startTimer(callback, milliseconds) {
    setTimeout(callback, milliseconds);
}

export function getImageURL(name) {
    return new URL(`../../common/assets/images/${name}`, import.meta.url).href
}
