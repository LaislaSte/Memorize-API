import { Router } from "express";
import { contPost, contProfile, contReview, contUser } from "../executors";

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
userRouter.put("/update-user/:id", (req, res) => {
    contUser.update(req, res).then((contUser) => {
        return contUser
    })
})
userRouter.delete("/delete-user/:id", (req, res) => {
    contUser.delete(req, res).then((contUser) => {
        return contUser
    })
})

//PROFILE ROUTES
userRouter.post("/create-profile", (req, res) => {
    contProfile.create(req, res).then((contProfile) => {
        return contProfile
    })
})
userRouter.get("/read-profile", (req, res) => {
    contProfile.read(req, res).then((contProfile) => {
        return contProfile
    })
})
userRouter.get("/read-profile/:id", (req, res) => {
    contProfile.readProfile(req, res).then((contProfile) => {
        return contProfile
    })
})
userRouter.put("/update-profile/:id", (req, res) => {
    contProfile.update(req, res).then((contProfile) => {
        return contProfile
    })
})
userRouter.delete("/delete-profile/:id", (req, res) => {
    contProfile.delete(req, res).then((contProfile) => {
        return contProfile
    })
})
userRouter.get("/filter-profile/", (req, res) => {
    contProfile.filter(req, res).then((contProfile) => {
        return contProfile
    })
})


//POST ROUTES
userRouter.post("/create-post", (req, res) => {
    contPost.create(req, res).then((contPost) => {
        return contPost
    })
})
userRouter.get("/read-post", (req, res) => {
    contPost.read(req, res).then((contPost) => {
        return contPost
    })
})
userRouter.get("/read-post/:id", (req, res) => {
    contPost.readPost(req, res).then((contPost) => {
        return contPost
    })
})
userRouter.put("/update-post/:id", (req, res) => {
    contPost.update(req, res).then((contPost) => {
        return contPost
    })
})
userRouter.delete("/delete-post/:id", (req, res) => {
    contPost.delete(req, res).then((contPost) => {
        return contPost
    })
})
userRouter.get("/filter-post/", (req, res) => {
    contPost.filter(req, res).then((contPost) => {
        return contPost
    })
})

//POST REVIEW
userRouter.post("/create-review", (req, res) => {
    contReview.create(req, res).then((contReview) => {
        return contReview
    })
})
userRouter.get("/read-review", (req, res) => {
    contReview.read(req, res).then((contReview) => {
        return contReview
    })
})
userRouter.put("/update-review/:id", (req, res) => {
    contReview.update(req, res).then((contReview) => {
        return contReview
    })
})
userRouter.delete("/delete-review/:id", (req, res) => {
    contReview.delete(req, res).then((contReview) => {
        return contReview
    })
})

module.exports = { userRouter }