import React from "react";
import classNames from "classnames";

import "components/InterviewerListItem.scss"

export default function InterviewerListItem(props) {
  const interviewerListClass = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
  });

  return (
    <li className={interviewerListClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt="Sylvia Palmer"
      />
      {props.selected && props.name}
    </li>
  );
}