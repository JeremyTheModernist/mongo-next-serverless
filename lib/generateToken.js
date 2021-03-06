import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

// this function is used in any route that needs to send a JWT back to the client
// usually this is a signup and login page
// recieves express response and a user object payload
const generateToken = (req, res, { user }) => {
  const { id } = user; // the id is needed so correct user data can be accessed on server;
  // cookie expiration in milliseconds;
  // 1hr or 24 hrs;
  const cookies = new Cookies(req,res); // have to use this package with next.js to generate the cookie
  const expiration =
    process.env.DB_ENV === 'testing' ? 60 * 60 * 1000 : 60 * 60 * 1000 * 24; // where each number is in milliseconds
  // JWT expiration set in seconds or string expressing the duration
  const token = jwt.sign({ id }, process.env.SECRET_JWT_KEY, {
    expiresIn: process.env.DB_ENV === 'testing' ? '1d' : '7d',
  });
  console.log('YOUR JWT COOKIE!', token);
  console.log('YOUR RESPONSE OBJECT', res.cookie);
  return cookies.set('token',token,{
    expires: new Date(Date.now() + expiration), // takes a date type
    secure: false, // set to true only if using https
    httpOnly: true, // only make cookie accessible within server
  });
};

export default generateToken;
