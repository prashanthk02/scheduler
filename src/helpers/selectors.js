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

export function getInterview(state, interview) {
  if (interview === null) {
    return null;
  }
  const interviewObj = {
    student: interview.student,
    interviewer: {
      id: state.interviewers[interview.interviewer].id,
      name: state.interviewers[interview.interviewer].name,
      avatar: state.interviewers[interview.interviewer].avatar
    }
  }
  return interviewObj;
}

export function getInterviewersForDay(state, day) {
  const filteredInterviewers = [];

  if (state.days.length !== 0){
    const daySelected = state.days.find(daysArr => daysArr.name === day);
    if (daySelected) {
      for (const apt of daySelected.interviewers) {
        filteredInterviewers.push(state.interviewers[apt])
      }
    }
  }
  return filteredInterviewers;
}