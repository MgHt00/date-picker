import { displayUtils } from './displayUtils.js';
import { domUtils } from './domUtils.js';

export const calendarManager = {
  generateCalendar(calendarContainer, month, year) {
    console.info("generateCalendar()");
    calendarContainer.innerHTML = ''; // Clear any existing calendar content

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    
    // Create the header for days of the week
    const headerRow = createDaysOfWeekHeader();
    calendarContainer.appendChild(appendDaysOfWeekToHeader(headerRow));

    // Create the grid for the days and populate it
    const daysGrid = createDaysGrid();
    appendBlankSpacesBeforeFirstDay(daysGrid, firstDay);
    appendMonthDaysToGrid(daysGrid, daysInMonth)
    calendarContainer.appendChild(daysGrid);

    // HELPER functions
    function createDaysOfWeekHeader() {
      // Create the header for days of the week
      const headerRow = domUtils.createElement(document, 'div');
      displayUtils.addClass(headerRow, 'calendar-header');
      return headerRow;
    }

    function appendDaysOfWeekToHeader(headerRow){
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      daysOfWeek.forEach(day => {
        
        const dayElement = domUtils.createElement(document, 'div');
        displayUtils
          .addClass(dayElement, 'calendar-day')
          .addTextContent(dayElement, day)
        headerRow.appendChild(dayElement);
      });
      return headerRow;
    }

    function createDaysGrid() {
      // Create the grid for the days
      const daysGrid = domUtils.createElement(document, 'div');
      displayUtils.addClass(daysGrid, 'calendar-days');
      return daysGrid;
    }

    function appendBlankSpacesBeforeFirstDay(daysGrid, firstDay) {
      // Add blank spaces for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = domUtils.createElement(document, 'div');
        displayUtils.addClass(emptyCell, 'calendar-day-empty');
        daysGrid.appendChild(emptyCell);
      }
    }

    function appendMonthDaysToGrid(daysGrid, daysInMonth) {
      // Add the days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = domUtils.createElement(document, 'div');
        displayUtils
          .addClass(dayCell, 'calendar-day')
          .addTextContent(dayCell, day)
        daysGrid.appendChild(dayCell);
      }
    }
    // HELPER ends
  },
}