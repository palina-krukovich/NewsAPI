export default class EventEmitter {

    constructor() {
        this.events = {};
    }

    on(event, listener) {
        this.events[event] = this.events[event] || [];
        this.events[event].push(listener);
        return this; // for chaining
    }

    off(event, listener) {
        let listeners = this.events[event]; // listeners => this.events[event]

        if (!listeners)
            return this;

        for (let i = 0; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                listeners.splice(i, 1);
                break;
            }
        }

        return this;
    }

    once(event, listener) {
        this.events[event] = this.events[event] || [];
        const callOnce = function() {
            listener();
            this.off(event, callOnce);
        };
        this.events[event].push(callOnce);
        return this;
    }

    // rest parameters
    emit(event, ...args) {
        let listeners = this.events[event];

        if (!listeners)
            return false;

        listeners.forEach(function(listener) {
            listener(...args);
        });

        return true;
    }

    listenerCount(event) {
        let listeners = this.events[event] || [];
        return listeners.length;
    }

    rowListeners(event) {
        return this.events[event];
    }
}
