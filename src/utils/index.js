import { Items } from '../constants';

export const getRandomItem = () => Items[Math.floor(Math.random() * Items.length)];

export function startTimer(callback, milliseconds) {
    setTimeout(callback, milliseconds);
}
