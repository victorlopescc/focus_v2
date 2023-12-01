import state from './state';
import * as events from './events';
import * as timer from './timer';

export function start(minutes, seconds) {
    state.minutes = minutes;
    state.seconds = seconds;

    timer.updateDisplay();
    events.registerControls();
}