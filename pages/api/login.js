import bcrypt from 'bcrypt';
import generateToken from '../../lib/generateToken'
import User from '../../models/User'
import nextConnect from 'next-connect'
import all from '../../middlewares/all.js';

const handler = nextConnect();

handler.use(all) // call all middleware

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    // if the user does not exist:
    if (!user) {
      return res.status(400).json({
        message: 'User does not exist',
      });
    }
    // see if there is a match between mongoose encrypted password and user supplied password:
    const match = await bcrypt.compare(password, user.password);

    // if the password's don't match, then send a 400 response to the client
    if (!match) {
      return res.status(400).json({
        message: 'Incorrect password!',
      });
    }
    // if there is a match, then proceed:
    // what to send back to the client encrypted in the JWT
    const payload = {
      user: {
        id: user.id,
      },
    };

    // create a new token for the client and send it:
    generateToken(req, res, payload);
    // res.send(token)
    res.send({message:'cookie has been set'})
  } catch (e) {
    console.log(e.message);
    res.status(500).send('Error in saving');
  }
};

handler.post(Login)

export default handler;
