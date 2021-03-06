import nextConnect from 'next-connect'
import all from '../../middlewares/all.js';
import Cookies from 'cookies';

const handler = nextConnect();

handler.use(all)

const Logout = (req, res) => {
    const cookies = new Cookies(req,res);
    cookies.set('token',null,{
        maxAge: 0 // by setting the maxAge to 0 ms it will expire the token immediately
    })
    res.send('cookie has been cleared');
  };
  
  export default Logout;
  