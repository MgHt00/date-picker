import { DateManager } from "../utils/dateManager.js";

export class Global {
  constructor() {
    this.dateIcon = document.querySelector("#date-icon");
    this.calendarContainer = document.querySelector("#calendar-container");
    this.dateInput = document.querySelector("#date-input");
    this.dateManager = new DateManager();
  }
}