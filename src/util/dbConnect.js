import mongoose from 'mongoose';
const connection = {};

async function connectToDatabase() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    'mongodb+srv://saifmohammed888:Saif1996@cluster0.awfj0.mongodb.net/Grostore?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
  return db.connections[0].readyState === 1 ? db.connections[0].db : null;
}
