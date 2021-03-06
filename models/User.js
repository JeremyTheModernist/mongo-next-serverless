import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// could also do mongoose.models = {}, to clear existing models
// let User = mongoose.models.habits || mongoose.model('user', UserSchema); // this way is best as it provides type hinting
let User;
try {
    User = mongoose.model('user'); // if the model exist, then get it.
} catch(e){
    User = mongoose.model('user', UserSchema);
}

export default User;
