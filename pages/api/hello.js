// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'], // allow get methods and head methods, same as get but without body
});

export default (req, res) => {
  res.status(200).json({ name: 'John Doe' });
};
