export function getAppointmentsForDay(state, day) {
  const filteredAppointments = [];

  if (state.days.length !== 0){
    const daySelected = state.days.find(daysArr => daysArr.name === day);
    if (daySelected) {
      for (const apt of daySelected.appointments) {
        filteredAppointments.push(state.appointments[apt])
      }
    }
  }
  return filteredAppointments;
}