import { Global } from "../services/global.js";
import { utils } from "../utils/utils.js";
import { calendarManager } from "../components/calendar.js";

const globalInstance = new Global();

export const helpers = {
  showCalendar() {
    const calendarContainer = globalInstance.calendarContainer;
    calendarContainer.classList.toggle('visible');
    calendarManager.generateCalendar(calendarContainer);
  }
}