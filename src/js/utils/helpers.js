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
    console.info("seletedDay: %s", selectedDay);
    console.info("month: %s", month);
    console.info("year: %s", year);

    const dateInput = globalInstance.dateInput;
    const calendarContainer = globalInstance.calendarContainer;

    // Construct the date object in local time zone
    const localDate = new Date(year, month, selectedDay);

    // Manually format the date as YYYY-MM-DD (without time zone adjustments)
    const fullDateForDB = `${localDate.getFullYear()}-${String(localDate.getMonth() + 1).padStart(2, '0')}-${String(localDate.getDate()).padStart(2, '0')}`; // [LE04]
    /*const fullDateForDB = new Date(year, month, selectedDay).toISOString().split('T')[0]; // with time zone adjustment */

    // Store the date in global instance
    globalInstance.dateManager.setFullDate(fullDateForDB);
    console.info("Full date: %s stored to Globals.", globalInstance.dateManager.getFullDate());

    // Format for user display (DD-MM-YYYY)
    const formattedDateForUI = globalInstance.dateManager.formatDateForDisplay(fullDateForDB);

    // Display the formatted date on the input field (DD-MM-YYYY for UI)
    displayUtils
      .addTextContent(dateInput, formattedDateForUI)
      .hide(calendarContainer);
  }
}