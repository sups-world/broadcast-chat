import { Server } from "socket.io";

export const configureSocketIO = (server) => {
  const io = new Server(server);

  //for connection and it's activities
  io.on(`connection`, (socket) => {
    console.log(`A user connected`);

    // Handle chat-related socket events here
    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });

    //when user disconnects
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
