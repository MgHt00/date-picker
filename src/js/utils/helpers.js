import { Global } from "../services/global.js";
import { calendarManager } from "../components/calendar.js";
import { displayUtils } from "./displayUtils.js";

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
  },

  onCalendarDayClick(selectedDay, month, year){
    /*console.info("%s is clicked", selectedDay);*/

    const dateInput = globalInstance.dateInput;
    const calendarContainer = globalInstance.calendarContainer;

    // Construct the full date in YYYY-MM-DD format (for database storage)
    const fullDateForDB = new Date(year, month, selectedDay).toISOString().split('T')[0]; // Store this in DB
    globalInstance.dateManager.setFullDate(fullDateForDB);
    console.info("Full date: %s stored to Globals.", globalInstance.dateManager.getFullDate());

    // Format for user display (DD-MM-YYYY)
    const formattedDateForUI = globalInstance.dateManager.formatDateForDisplay(fullDateForDB);

    // Display the formatted date on the input field (DD-MM-YYYY for UI)
    displayUtils
      .addTextContent(dateInput, formattedDateForUI)
      .addClass(calendarContainer, 'hidden');
  }
}