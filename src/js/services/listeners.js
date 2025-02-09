import { helpers } from "../utils/helpers.js";
/*import { calendarManager } from "../components/calendar.js";*/

export const listeners = {
  documentListners(globalInstance){
    const dateIcon = globalInstance.dateIcon;
    
    dateIcon.addEventListener('click', helpers.showCalendar);
    return this;
  },

  addCalendarDayListeners(month, year){
    /*console.log("%s initiated", "calendarListener()");*/
    const allDays = document.querySelectorAll('.calendar-day');
    
    allDays.forEach(day => {
      day.addEventListener('click', function() {
        const selectedDay = this.textContent; // Get the selected date
        helpers.onCalendarDayClick(selectedDay, month, year)
      });
    });
    return this;
  }
}