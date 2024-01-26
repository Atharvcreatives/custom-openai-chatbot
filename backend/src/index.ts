import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connetions and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("server open and connected to database"));
  })
  .catch((err) => console.log(err));
