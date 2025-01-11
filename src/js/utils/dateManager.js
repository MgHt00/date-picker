import { displayUtils } from "./displayUtils.js";

export class DateManager {
  constructor() {
    this.fullDateForDB = null;
  }

  setFullDate(fullDateForDB) {
    this.fullDateForDB = fullDateForDB;
  }

  getFullDate() {
    return this.fullDateForDB;
  }

  formatDateForDisplay(date) {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`; // Convert YYYY-MM-DD to DD-MM-YYYY
  }

  highlightSelectedDay(selectedDay) {
    console.group("selectedDay");
    //const selectedDay = `calendar-day-${day}`;
    console.info("selectedDay:", selectedDay);
    const selectedDOM = document.querySelector(`#${selectedDay}`);
    displayUtils.addClass(selectedDOM, 'selected-day');
    console.groupEnd();
  }
}