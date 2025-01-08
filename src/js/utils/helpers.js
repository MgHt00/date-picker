import { Global } from "../services/global.js";
import { calendarManager } from "../components/calendar.js";

const globalInstance = new Global();

export const helpers = {
  showCalendar() {
    console.info("showCalendar()");
    const calendarContainer = globalInstance.calendarContainer;
    
    if (!(calendarContainer instanceof HTMLElement)) { // Check if the calendarContainer exists
      console.error("Invalid calendar container");
      return;
    }

    calendarContainer.classList.toggle('visible');

    const currentMonth = new Date().getMonth(); // Current month (0-11)
    const currentYear = new Date().getFullYear(); // Current year

    calendarManager.generateCalendar(calendarContainer, currentMonth, currentYear);
  }
}