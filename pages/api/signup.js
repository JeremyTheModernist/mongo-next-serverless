import bcrypt from 'bcrypt';
import nextConnect from 'next-connect';
import generateToken from '../../lib/generateToken';
import User from '../../models/User';
import all from '../../middlewares/all';

const handler = nextConnect();

handler.use(all)

const Signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    if (user) {
      return res.status(400).json({
        msg: 'User already exists',
      });
    }
    // if the user doesn't exist, create a new one:
    user = new User({
      username,
      email,
      password,
    });
    // create a hashed password using bcrypt
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    // store that password in your MongoDB database
    await user.save();

    // what to send back to the client encrypted in the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };
    console.log("YOUR INCOMING RESPONSE OBJ", res)
    generateToken(req, res, payload);
    res.send({message:'cookie has been set'})
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Error in saving');
  }
};

handler.post(Signup)

export default handler;