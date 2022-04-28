import React from "react";
import classNames from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const dayListClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0,
  });

  let spots = props.spots;
  if (spots === 0) {
    spots = "no spots remaining";
  }
  if (spots === 1) {
    spots = "1 spot remaining";
  }
  if (spots > 1) {
    spots += " spots remaining";
  }

  return (
    <li className={dayListClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}
