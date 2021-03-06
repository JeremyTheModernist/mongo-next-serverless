import connectDb from './connectDb'
import withCors from './withCors'
import nc from 'next-connect'

const all = nc();

// use all of your middleware
all.use(withCors).use(connectDb) 

export default all;