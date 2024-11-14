export const DatePicker = (() => {
  console.log("DatePicker");
  const $datePickerInput = document.querySelector(".calendar");
  const $datePickerCalendar = document.querySelector(".calendar");
  const $datePickerIcon = document.querySelector(".datepicker-icon");

  const init = () => {
    console.log("Init datepicker");
    $datePickerCalendar.classList.add("hidden");
    eventHandlers();
  };

  const renderCalendar = (e) => {
    console.log("Render calendar");
    console.log({ e });
    $datePickerCalendar.classList.toggle("hidden");
  };

  const eventHandlers = () => {
    $datePickerIcon.addEventListener("click", renderCalendar);
  };

  return {
    init,
  };
})();
