import Route from "../../Types/Route";
import { Request, Response } from "express";

export default new Route("/refresh", "post", (req: Request, res: Response) => {
	res.status(501).json({})
})
