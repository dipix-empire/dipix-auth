import Router from "../../Types/Router";
import issue from "./issue";
import refresh from "./refresh";
import validate from "./validate";

export default new Router(
	"/token",
	[
		issue, validate, refresh
	]
)
