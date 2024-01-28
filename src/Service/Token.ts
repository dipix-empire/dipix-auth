import jwt from "jsonwebtoken"
import fs from "fs"
import config from "../../config"

const privateKey = fs.readFileSync(process.cwd() + config.keys.private)
const publicKey = fs.readFileSync(process.cwd() + config.keys.public)

function issue() {
	return jwt.sign({type: "service"}, privateKey, { algorithm: 'RS256' })
}

function validate(token: string) {
	return jwt.verify(token, publicKey, { algorithms: ['RS256'] })
}

export default {
	issue, validate
}
