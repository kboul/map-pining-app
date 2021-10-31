import express, { Application, Response } from "express";

const app: Application = express();

app.get("/", (_, res: Response) => {
  res.send("Hello");
});

const port = 8800;
app.listen(port, () => console.log(`Server running at port ${port}`));
