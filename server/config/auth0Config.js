import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience:"https://real-estate-website-server.vercel.app",
    issuerBaseURL:"https://dev-socpkrvdquf6tfcy.us.auth0.com",
    tokenSigningAlg:"RS256"
})

export default jwtCheck