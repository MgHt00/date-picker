import { displayUtils } from "./displayUtils";

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

  highlightSelectedDay(day) {
    const targetDay = `calendar-day-${day}`;
    console.info("targetDay, %s", targetDay);

    //displayUtils.addClass(targetDay, 'selected-day');
  }
}