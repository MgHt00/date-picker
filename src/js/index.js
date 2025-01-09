import { Global } from "./services/global.js";
import { listenerManager } from "./services/listeners.js";

const globalInstance = new Global();

(function initialize(){
  console.info("initialize()");
  listenerManager
    .documentListners(globalInstance)
})();