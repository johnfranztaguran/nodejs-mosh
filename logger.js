const EventEmitter = require('events');
// const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    //send an http request
    console.log(message);
  
    // Raise an event
  // emit - make a noise
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }

}


module.exports = Logger;