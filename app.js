const express = require("express")
const app = express()

require("dotenv").config();
require("./db");

const port = process.env.PORT || 3000;
const connectDB = require("./db");  

const userRouter = require("./routes/user");
const comerRouter = require("./routes/comer");  
const beberRouter = require("./routes/beber");

app.use("/user", userRouter);
app.use("/comer", comerRouter);
app.use("/beber", beberRouter);

connectDB().then(() => {
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  }).catch(err => {
    console.error("❌ Falha ao iniciar o servidor:", err);
  });