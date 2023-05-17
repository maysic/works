import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
const app = express();

const PORT = process.env.PORT || 3000;

app.use("/static", express.static("./dist/client"));



app.get("/auth", (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  )
});


app.get('*', (request, response) => {
  response.send(
    indexTemplate(ReactDOM.renderToString(App()))
  )
})


app.listen(PORT, () => {
  console.log(`server started on port http://localhost:${PORT}`);
});
