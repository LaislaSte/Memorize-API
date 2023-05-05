import { ControllerUser } from "../controller/ControllerUser"
import { Profile } from "../model/bean/Profile";
import { User } from "../model/bean/User"


describe("testing funcionalitys of crud profile", () => {
    const user = new User({ name: "Rosana", email: "emailRosana" });
    const profile = new Profile({ user: user, bio: "Rosana's Bio" });
    const contUser = new ControllerUser();

    const createResult = contUser.create(user)
    it("should give a user created", () => {
        createResult.then((createResult) => {
            expect(createResult).not.toBeNull();
            expect(createResult.name).toBe("Rosana");
        })
    })

    const readUserResult = contUser.readUser("1");
    it("should return the user creted", () => {
        readUserResult.then((readUserResult) => {
            expect(readUserResult).not.toBeNull();
            expect(readUserResult?.id).toBe("1");
            expect(readUserResult?.name).toBe("Ciclano");
        })
    })

    const read = contUser.read();
    it("should return the users", () => {
        read.then((read) => {
            expect(read).not.toBeNull();
            expect(read.length).toBeGreaterThan(0);
            expect(read[0].name).toBe("Ciclano");
        })
    })

    let newUser = new User({ name: "Ciclano", email: "emailCiclano" }, "1")
    const update = contUser.update(newUser);
    it("should bring the user's name upteted to Ciclano", () => {
        update.then((update) => {
            expect(update.name).toBe("Ciclano");
            expect(update.email).toBe("emailCiclano");
        })
    })

    const deleted = contUser.delete("2");
    it("Should return the user's name deleted", () => {
        deleted.then((deleted) => {
            expect(deleted.name).toBe("Emylia");
        })
    })
})

// describe("testing funcionalitys of crud user", () => {
//     const user = new User({ name: "Rosana", email: "emailRosana" });
//     const contUser = new ControllerUser();

//     const createResult = contUser.create(user)
//     it("should give a user created", () => {
//         createResult.then((createResult) => {
//             expect(createResult).not.toBeNull();
//             expect(createResult.name).toBe("Rosana");
//         })
//     })

//     const readUserResult = contUser.readUser("1");
//     it("should return the user creted", () => {
//         readUserResult.then((readUserResult) => {
//             expect(readUserResult).not.toBeNull();
//             expect(readUserResult?.id).toBe("1");
//             expect(readUserResult?.name).toBe("Ciclano");
//         })
//     })

//     const read = contUser.read();
//     it("should return the users", () => {
//         read.then((read) => {
//             expect(read).not.toBeNull();
//             expect(read.length).toBeGreaterThan(0);
//             expect(read[0].name).toBe("Ciclano");
//         })
//     })

//     let newUser = new User({ name: "Ciclano", email: "emailCiclano" }, "1")
//     const update = contUser.update(newUser);
//     it("should bring the user's name upteted to Ciclano", () => {
//         update.then((update) => {
//             expect(update.name).toBe("Ciclano");
//             expect(update.email).toBe("emailCiclano");
//         })
//     })

//     const deleted = contUser.delete("2");
//     it("Should return the user's name deleted", () => {
//         deleted.then((deleted) => {
//             expect(deleted.name).toBe("Emylia");
//         })
//     })
// })