import { displayUtils } from "../utils/displayUtils.js";
import { domUtils } from "../utils/domUtils.js";
import { listeners } from "../services/listeners.js";
import { Global } from "../services/global.js";

export const calendarManager = {
  generateCalendar(globalInstance, month, year) { // [LE03]
    const calendarContainer = globalInstance.calendarContainer;

    try {
      calendarContainer.innerHTML = ''; // Clear any existing calendar content

      const daysInMonth = new Date(year, month + 1, 0).getDate(); // [LE02] Calculate Days in Month and First Day of the Month:
      const firstDay = new Date(year, month, 1).getDay(); // Calculates which day of the week the 1st day of the month falls on (0 = Sunday, 1 = Monday, etc.)

      // Create the navigation buttons
      const navigationRow = createNavigationRow(month, year);
      calendarContainer.appendChild(navigationRow);

      // Create the header for days of the week
      const headerRow = createDaysOfWeekHeader();
      calendarContainer.appendChild(appendDaysOfWeekToHeader(headerRow));

      // Create the grid for the days and populate it
      const daysGrid = createDaysGrid();
      appendBlankSpacesBeforeFirstDay(daysGrid, firstDay);
      appendMonthDaysToGrid(daysGrid, daysInMonth)
      calendarContainer.appendChild(daysGrid);

      calendarManager.checkSelectedDay(globalInstance);
      listeners.addCalendarDayListeners(month, year);


    } catch (error) {
      console.error(error.message);
      alert("There was an issue generating the calendar in generateCalendar().");
    }

    // HELPER functions
    function createNavigationRow(month, year) {
      const navRow = domUtils.createElement(document, 'div');
      displayUtils.addClass(navRow, 'calendar-navigation');

      // Create the previous button
      const prevButton = domUtils.createElement(document, 'button');
      displayUtils
        .addMultipleClass(prevButton, ['calendar-nav-button', 'poppins-thin'])
        .addTextContent(prevButton, '<');

      // Remove any existing event listener before adding a new one
      prevButton.removeEventListener('click', changeMonth);
      prevButton.addEventListener('click', () => changeMonth(-1)); // Previous month

      // Format the month to display its full name
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const formattedMonth = monthNames[month];

      // Display month and year
      const currentMonth = domUtils.createElement(document, 'span');
      displayUtils
        .addMultipleClass(currentMonth, ['calendar-nav-info', 'right-align', 'poppins-regular'])
        .addTextContent(currentMonth, formattedMonth);

      const currentYear = domUtils.createElement(document, 'span');
      displayUtils
        .addMultipleClass(currentYear, ['calendar-nav-info', 'left-align', 'poppins-regular'])
        .addTextContent(currentYear, year);

      // Create the next button
      const nextButton = domUtils.createElement(document, 'button');
      displayUtils
        .addMultipleClass(nextButton, ['calendar-nav-button', 'poppins-thin'])
        .addTextContent(nextButton, '>');
      
      // Remove any existing event listener before adding a new one
      nextButton.removeEventListener('click', changeMonth);
      nextButton.addEventListener('click', () => changeMonth(1)); // Next month

      // Append all elements to the navigation row
      navRow.appendChild(prevButton);
      navRow.appendChild(currentMonth);
      navRow.appendChild(currentYear);
      navRow.appendChild(nextButton);

      return navRow;
    }

    // Change the month and adjust the year accordingly
    function changeMonth(direction) {
      month += direction;
      if (month < 0) {
        month = 11;
        year -= 1;
      } else if (month > 11) {
        month = 0;
        year += 1;
      }

      // Generate the updated calendar for the new month and year
      calendarManager.generateCalendar(globalInstance, month, year);
    }

    // Creates a div element to serve as the header for the calendar 
    function createDaysOfWeekHeader() {
      const headerRow = domUtils.createElement(document, 'div');
      displayUtils.addClass(headerRow, 'calendar-header');
      return headerRow;
    }
    
    // Populates the header row with individual day names 
    function appendDaysOfWeekToHeader(headerRow){
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      daysOfWeek.forEach(day => {
        const dayElement = domUtils.createElement(document, 'div');
        displayUtils
          .addClass(dayElement, 'day-of-week')
          .addTextContent(dayElement, day)
        headerRow.appendChild(dayElement);
      });
      return headerRow;
    }

    // Creates the main grid (div) that will hold all the day cells.
    function createDaysGrid() {
      const daysGrid = domUtils.createElement(document, 'div');
      displayUtils.addClass(daysGrid, 'calendar-days');
      return daysGrid;
    }

    // Adds empty div elements to account for any days before the 1st of the month
    function appendBlankSpacesBeforeFirstDay(daysGrid, firstDay) {
      for (let i = 0; i < firstDay; i++) {
        const emptyCell = domUtils.createElement(document, 'div');
        displayUtils.addClass(emptyCell, 'calendar-day-empty');
        daysGrid.appendChild(emptyCell);
      }
    }

    // Adds the actual days of the month to the grid
    function appendMonthDaysToGrid(daysGrid, daysInMonth) {
      for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = domUtils.createElement(document, 'div');
        displayUtils
          .addClass(dayCell, 'calendar-day')
          .addTextContent(dayCell, day);
        domUtils
          .addID(dayCell, `calendar-day-${String(day).padStart(2, '0')}`);
        daysGrid.appendChild(dayCell);
      }
    }
    // HELPER ends
  },

  checkSelectedDay(globalInstance) {
    const selectedDate = globalInstance.dateManager.getFullDate();

    if (selectedDate) { // if selectedDate is not null, (not the first time seeing the calendar)
      const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Validate date format (simple regex for YYYY-MM-DD)
      if (!datePattern.test(selectedDate)) {
        console.error("selectedDate is not in the expected YYYY-MM-DD format.");
        return;
      }

      const [year, month, day] = selectedDate.split('-');
      const selectedDayId = `calendar-day-${String(day).padStart(2, '0')}`; // Pad day to ensure two digits
      globalInstance.dateManager.highlightSelectedDay(selectedDayId);
    }
  },
}