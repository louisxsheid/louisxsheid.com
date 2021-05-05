/* eslint-disable @typescript-eslint/no-var-requires */
export {};
import express, { Application, Request, Response, NextFunction } from "express";
var appRoot = require("app-root-path");
const app: Application = express();
const PORT: String | Number = process.env.PORT || 3000;
const path = require("path");

//@ts-ignore
app.use(express.json());
//@ts-ignore
app.use(express.urlencoded({ extended: false }));

app.use(express.static(appRoot + "/dist"));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.resolve(appRoot + "/dist/index.html"));
});

app.get("/projects", (req: Request, res: Response) => {
  res.sendFile(path.resolve(appRoot + "/dist/index.html"));
});

app.get("/til", (req: Request, res: Response) => {
  res.sendFile(path.resolve(appRoot + "/dist/index.html"));
});

// Global Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultError = {
    log: "Error caught in global error handler",
    status: 500,
    msg: {
      err: err,
    },
  };
  const output = Object.assign(defaultError, err);
  res.send(output);
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
