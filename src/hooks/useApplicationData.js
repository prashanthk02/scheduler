import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(initial) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  //set different day
  const setDay = day => setState({ ...state, day });

  //database calls to set initial state
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('api/interviewers')
    ]).then(responses => {
      setState(prev => ({...prev,
        days: responses[0].data,
        appointments: responses[1].data,
        interviewers: responses[2].data }));
    });
  }, [])

  //book new interview
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const spotsLeft = () => {
      state.days.map(day => {
        if (state.day === day.name) {
          day.spots--;
        }
        return day;
      })      
    }

    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => setState({...state, appointments}))
      .then(spotsLeft());
  }

  //delete existing interview
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const spotsLeft = () => {
      state.days.map(day => {
        if (state.day === day.name) {
          day.spots++;
        }
        return day;
      })      
    }

    return axios.delete(`/api/appointments/${id}`)
    .then(() => setState({...state, appointments}))
    .then(spotsLeft());
  }

  return { state, setDay, bookInterview, cancelInterview };
};