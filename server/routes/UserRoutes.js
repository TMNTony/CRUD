const express = require("express")
const router = express.Router()
const userController = require("../controlers/userController")

router.get("/", userController.get_users)
router.get("/getUser/:id", userController.get_user)
router.put("/updateUser/:id", userController.update_user)
router.post("/createUser", userController.create_user)
router.delete("/deleteUser/:id", userController.delete_user)

module.exports = router;