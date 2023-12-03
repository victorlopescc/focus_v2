import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function reset() {
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}

export function plusTime() {
    state.minutes += 5;
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}

export function minusTime() {
    state.minutes -= 5;
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}