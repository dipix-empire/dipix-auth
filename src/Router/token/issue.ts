import { JsonWebTokenError } from "jsonwebtoken";
import Token from "../../Service/Token";
import Route from "../../Types/Route";
import { Request, Response } from "express";

export default new Route("/issue", "post", (req: Request, res: Response) => {
	res.status(200).json({key: Token.issue()})
})
