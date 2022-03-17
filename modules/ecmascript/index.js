//import Logger from "./logger.js";
import { url, log } from "./logger.js";
console.log(url);

import Db from "./Db.js";

console.log(Db);

const db = new Db();
console.log(db.query(1));
