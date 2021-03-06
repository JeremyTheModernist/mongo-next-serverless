import Cors from 'cors'

const cors =  Cors({
    origin: [`${process.env.FRONTEND_URL}`, 'http://localhost:3000'], 
    credentials: true, // allow credentials (e.g. cookies to be sent)
  })

export default cors;

// cors only works against client side calls, not server calls 
// when cors is not enabled, browsers implement the same-origin policy (request must come from the same origin as server)
// when cors is enabled, you can allow different (whitelisted) origins to make requests to the server
// however apps like POSTMAN can send any origin header they want, and even without one,
// servers will usually return the correct response anyways becuase there's no SOP (Single Origin Policy)
// So, don't rely on CORS for security, it simply helps with ensuring that only specific origins
// can access your server. 
// But in environment, like the server or POSTMAN, SOP doesn't apply. 