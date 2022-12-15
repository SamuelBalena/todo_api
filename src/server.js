const express = require("express");
const db = require("./database/config");
const cors = require("cors");
const mongoose = require("mongoose");

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middleware();
    this.routes();

    this.express.listen(3001, () =>
      console.log("Está rodando na porta 3001😀")
    );
  }

  async database() {
    try {
      await mongoose.connect(db.uri, { useNewUrlParser: true });
      console.log("Banco conectado");
    } catch (error) {
      handleError(error);
    }
  }

  middleware() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
