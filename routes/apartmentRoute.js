import express from "express";
import {
  DeleteProduct,
  PostProduct,
  UpdateApartment,
  getApartment,
  getApartments,
} from "../controllers/apartmentsController.js";

const apartmentRouter = express.Router();

// start routes

apartmentRouter.post("/apartments", PostProduct);

apartmentRouter.get("/apartments", getApartments);

apartmentRouter.get("/apartments/:id", getApartment);

apartmentRouter.put("/apartments/:id", UpdateApartment);

apartmentRouter.delete("/apartments/:id", DeleteProduct);

// end of routes

export default apartmentRouter;
