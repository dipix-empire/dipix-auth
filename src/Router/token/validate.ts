import { JsonWebTokenError } from "jsonwebtoken";
import Token from "../../Service/Token";
import Route from "../../Types/Route";
import { Request, Response } from "express";

export default new Route("/validate", "post", (req: Request, res: Response) => {
	try {
		let token = req.body.token
		res.status(200).json(Token.validate(token))
	} catch(err) {
		if (err instanceof JsonWebTokenError && err.message == "invalid signature") {
			res.status(400).json({})
			return
		}
		res.status(500).send()
	}
})
