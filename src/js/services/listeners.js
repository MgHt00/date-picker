import { helpers } from "../utils/helpers.js";

export const listenerManager ={
  documentListners(globalInstance){
    const dateIcon = globalInstance.dateIcon;

    dateIcon.addEventListener('click', helpers.showCalendar);
  }
}