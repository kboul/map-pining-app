import router, { Request, Response } from "express";
import Pin from "../models/pin";

const appRouter = router.Router();

// create a marker
appRouter.post("/", async (req: Request, res: Response) => {
  const newPin = new Pin(req.body);

  try {
    const savedMarker = await newPin.save();
    res.status(201).send(savedMarker);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all pins
appRouter.get("/", async (req: Request, res: Response) => {
  try {
    const pins = await Pin.find();
    res.status(200).send(pins);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default appRouter;
