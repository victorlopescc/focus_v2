import { controls } from './elements.js';
import { updateDisplay } from './timer.js';
import * as actions from './actions.js';
import * as elements from './elements.js';
import state from './state.js';

export function registerControls() {
    controls.addEventListener('click', event => {
        const action = event.target.dataset.action;
        if (typeof actions[action]() != 'funtion') {
            return;
        }

        actions[action]();
    });
}

// plus and minus