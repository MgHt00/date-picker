import { Global } from "../services/global.js";

const globalInstance = new Global();

export const helpers = {
  showCalendar() {
    console.info("showCalendar()");
    /*const calendarContainer = globalInstance.calendarContainer;
    calendarContainer.classList.toggle('visible');
    calendarManager.generateCalendar(calendarContainer);*/
  }
}