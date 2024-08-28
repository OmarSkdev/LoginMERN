import app from "./app.js";
import { conectDB } from "./db.js";

conectDB();

app.listen(3001)
console.log('Corriendo Servidor en Puerto', 3001);
