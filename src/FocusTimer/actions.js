import state from './state.js';
import * as timer from './timer.js';
import * as elements from './elements.js';
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

// plus

// minus

// sounds