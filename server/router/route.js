import { Router } from "express";
import * as controller from "../controllers/controller.js";

const router = Router();

router.route("/questions")
    .get(controller.getQuestions) //Get rwquest
    .post(controller.insertQuestions) //post request
    .delete(controller.dropQuestions) //delete request

router.route("/result")
    .get(controller.getResult) //get request
    .post(controller.storeResult) //post request
    .delete(controller.dropResult) //delete request


export default router;