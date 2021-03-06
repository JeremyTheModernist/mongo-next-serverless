import mongoose from 'mongoose';

const connectDB = async (req, res, next) => {
  console.log('RUNNING THE DB!');
  if (mongoose.connection.readyState !== 1) {
    try {
      const connect = await mongoose.connect(`${process.env.MONGO_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      req.dbClient = connect; // make the mongoose connection available on the request object;
    } catch (e) {
      console.log('error', e);
    }
  }
  return next(); // after finished, proceed to the handler
};

const db = mongoose.connection;
db.once('open', () => {
  console.log('-----CONNECT DB------', 'now open!');
});

export default connectDB;
