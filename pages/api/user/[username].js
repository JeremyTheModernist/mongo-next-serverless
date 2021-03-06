import nextConnect from 'next-connect';
import all from '../../../middlewares/all';
import User from '../../../models/User';

const handler = nextConnect();

handler.use(all)

handler.get(async (req, res) => {
  console.log('incoming request query', req.query);
  console.log('and I keep GOING')
  const uppercaseFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1); // need this to correctly match the name in the db.
  }
  const allUsers = await User.findOne({
    username: {
      $eq: uppercaseFirstLetter(req.query.username) || req.query.username, // can use the dynamic api route here
    },
  });
  console.log("YOUR USER IS FOUND!", allUsers)
  res.status(200).json(allUsers);
});

export default handler;
