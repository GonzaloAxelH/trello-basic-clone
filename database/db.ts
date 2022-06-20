import mongoose from "mongoose";

/*
    0:disconecrted
    1:Conected
    2:connecting
    3:disconecting

*/

const mongooseConnection = {
  isContected: 0,
};

export const connect = async () => {
  if (mongooseConnection.isContected) {
    console.log("Ya estamos conectados");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongooseConnection.isContected = mongoose.connections[0].readyState;
    if (mongooseConnection.isContected === 1) {
      console.log("Usando conexion anterior");
    }
    await mongoose.disconnect();
  }

  await mongoose.connect("...");
  mongooseConnection.isContected = 1;
  console.log("Conectando a MongoDB in ", "...");
};

export const disconnect = async () => {
  if (mongooseConnection.isContected === 0) return;
  await mongoose.disconnect();
  console.log("Desconectado de mongoDB");
};
