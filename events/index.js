//---create an 'eventing' library out of 
// EVENT class. The events class should
//have methods 'on', 'trigger' and 'off'


class Events {

    constructor(){
        this.events = {};
    }
    //register and event handler
    on(eventName, callBack) {
        if(this.events[eventName]) {
            this.events[eventName].push(callBack);
        } else {
            this.events[eventName] = [callBack];
        }
        
    }

    //Trigger all callbacks associated
    //with a given eventName

    trigger(eventName) {
        if (this.events[eventName]) {
            for (let cb of this.events[eventName]) {
                cb();   
            }
        }
    }

    //remove all event handlers associated
    //with the given eventName

    off(eventName) {
        delete this.events[eventName];
    }
}

module.exports = Events;