import React from "react";
import useVisualMode from "../../hooks/useVisualMode";

import "./styles.scss"
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Confirm from "./Confirm";
import Status from "./Status";
import Error from "./Error";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING"
const CONFIRM = "CONFIRM"

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY );

    function save(name, interviewer) {
      const interview = {
        student: name,
        interviewer
      };
      transition(SAVING)

      Promise.resolve(props.bookInterview(props.id, interview))
       .then(() => transition(SHOW));
    }

    function deleteInterview() {
      transition(DELETING, true);

      Promise.resolve(props.cancelInterview(props.id))
        .then(() => transition(EMPTY));
    }

  return(
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}

      {mode === SHOW && (
        <Show
          id={props.id}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}

      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={back}
        />)}

        {mode === SAVING && (<Status message="Saving" />)}

        {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={deleteInterview}
          onCancel={back}
        />)}

        {mode === DELETING && (<Status message="Deleting" />)}
    </article>
  );
}