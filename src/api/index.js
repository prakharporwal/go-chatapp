var socket = new WebSocket("ws://localhost:8000/ws");

let connect = (cb) => {
    console.log("connecting")

    socket.onopen = () => {
        console.log("successfully connected!")
    }

    socket.onmessage = (msg) => {
        console.log(msg.data)
    }

    socket.onclose = (event) => {
        console.log("connnection closed!", event)
    }

    socket.onerror = () => {
        console.log("socket error", console.error())
    }
}

let sendMsg = (msg) => {
    console.log("sending msg", msg);
    socket.send(JSON.stringify(msg));
}

export { connect, sendMsg }