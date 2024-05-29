const express = require("express")

let AdminRouter = express.Router()

const {
    CreateUser,
    RegisterUser,
    GetUser,
    GetAllUsers,
    UpdateUser,
    DeleteUser
} = require("../Controller/User.Controller")

AdminRouter.get("/tokyo-hotel/api/v1/register", CreateUser)
AdminRouter.post("/tokyo-hotel/api/v1/login", RegisterUser)
AdminRouter.get("/tokyo-hotel/api/v1/get-a-user/:id", GetUser)
AdminRouter.get("/tokyo-hotel/api/v1/get-all-users", GetAllUsers)
AdminRouter.put("/tokyo-hotel/api/v1/update-a-user/:id", UpdateUser)
AdminRouter.delete("/tokyo-hotel/api/v1/delete-a-user/:id", DeleteUser)

module.exports = AdminRouter;