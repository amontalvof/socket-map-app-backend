const MarkerList = require('./markerList');
class Sockets {
    constructor(io) {
        this.io = io;
        this.markerList = new MarkerList();
        this.socketsEvents();
    }

    socketsEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            console.log('Client connected!', socket.id);

            // TODO: active-markers

            // TODO: new-marker

            // TODO: updated-marker
        });
    }
}

module.exports = Sockets;
