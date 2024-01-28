import express from "express"
import config from "./config"
import Router from "./src/Router"

const app = express()
app.use(express.json())
app.use("/", Router.router)
app.listen(config.port, () => {
	console.log(`App listening on ${config.port}`)
})
