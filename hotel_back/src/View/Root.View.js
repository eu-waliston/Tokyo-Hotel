const express = require("express")

let RootRouter = express.Router()

RootRouter.get("/", async (req,res) => {
    res.render("../../public/views/index.ejs")
})

module.exports = RootRouter;