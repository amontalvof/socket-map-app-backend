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

            socket.emit('active-markers', this.markerList.actives);

            socket.on('new-marker', (marker) => {
                this.markerList.addMarker(marker);
                socket.broadcast.emit('new-marker', marker);
            });

            socket.on('updated-marker', (marker) => {
                this.markerList.updateMarker(marker);
                socket.broadcast.emit('updated-marker', marker);
            });
        });
    }
}

module.exports = Sockets;
