import { Router } from "express";
import { contUser } from "../executors";

const userRouter = Router();

//USER ROUTES
userRouter.post("/create-user", (req, res) => {
    contUser.create(req, res).then((contUser) => {
        return contUser
    })
})
userRouter.get("/read-users", (req, res) => {
    contUser.read(req, res).then((contUser) => {
        return contUser
    })
})
userRouter.get("/read-user/:id", (req, res) => {
    contUser.readUser(req, res).then((contUser) => {
        return contUser
    })
})
userRouter.put("/update-user", (req, res) => {
    contUser.update(req, res).then((contUser) => {
        return contUser
    })
})
userRouter.delete("/delete-user/:id", (req, res) => {
    contUser.delete(req, res).then((contUser) => {
        return contUser
    })
})

module.exports = { userRouter }