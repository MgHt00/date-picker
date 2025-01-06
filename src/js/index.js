console.info("dummy log");

import { Global } from "./services/global.js";
import { listenerManager } from "./services/listeners.js";
import { calendarManager } from "./components/calendar.js";

const globalInstance = new Global();

(function initialize(){
  console.info("initialize()");
  listenerManager.documentListners(globalInstance);
})();