import React from "react";

import "components/Appointment/styles.scss"
import "components/Appointment/Header"
import "components/Appointment/Empty"
import "components/Appointment/Show"
import "components/Appointment/Confirm"
import "components/Appointment/Status"
import "components/Appointment/Error"

export default function Appointment(props) {
  return(
    <article className="appointment"></article>
  );
}