export const listenerManager ={
  documentListners(globalInstance){
    const dateIcon = globalInstance.dateIcon;
    const calendarContainer = globalInstance.calendarContainer;

    console.info("documentListners");
    dateIcon.addEventListener('click', () => {
      console.info("IT IS CLICKED");
      calendarContainer.classList.toggle('visible');
    });
  }
}