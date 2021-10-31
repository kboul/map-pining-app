import router, { Request, Response } from "express";
import Marker from "../models/marker";

const appRouter = router.Router();

// create a marker
appRouter.post("/", async (req: Request, res: Response) => {
  const newMarker = new Marker(req.body);

  try {
    const savedMarker = await newMarker.save();
    res.status(201).send(savedMarker);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all markers
appRouter.get("/", async (req: Request, res: Response) => {
  try {
    const markers = await Marker.find();
    res.status(200).send(markers);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default appRouter;
