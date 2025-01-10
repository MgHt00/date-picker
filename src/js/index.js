import { Global } from "./services/global.js";
import { listeners } from "./services/listeners.js";

const globalInstance = new Global();

(function initialize(){
  console.info("initialize()");
  listeners
    .documentListners(globalInstance)
})();