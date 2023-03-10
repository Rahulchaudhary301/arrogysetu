const express= require("express")
const router= express.Router()
const UserController= require("../controller/userController")
const AdminController= require("../controller/adminController")


router.post("/registration",UserController.createUser)
router.post("/login",UserController.userLogin)
router.post("/Vaccine",AdminController.createVaccine)
router.get("/VaccineData",UserController.getVaccineData)
router.put("/VaccineData",UserController.bookSlot)

// _________________________________for Admin_______________________________//
router.get("/UserData",AdminController.getUserData)
router.get("/vaccineDetails",AdminController.vaccineDetails)

module.exports=router