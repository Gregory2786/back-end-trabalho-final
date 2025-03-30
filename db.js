const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const mongoURI = process.env.URL;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    };

    await mongoose.connect(mongoURI, options);
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1); // Encerra o processo em caso de falha
  }
}

module.exports = connectDB;

