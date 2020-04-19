class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callBack){
    if (this.events[eventName]){
      this.events[eventName].push(callBack);
    } else {
      this.events[eventName] = [callBack];
    }
  }

  trigger(eventName, ...rest){
    if(this.events[eventName]){
      this.events[eventName].forEach(cb => {
        cb.apply(null, rest);
      })
    }
  }
}

const ee = new EventEmitter();
ee.on('change', () => {
  console.log("Hello there!");
});

ee.trigger('change');