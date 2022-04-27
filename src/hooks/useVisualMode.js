import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    // setHistory((prev) => {
    //   if (replace) {
    //     return [...prev.slice(0, prev.length - 1), newMode];
    //   }
    //   return [...prev, newMode]
    // })
    // setMode(newMode)

    setMode(mode);
    if (replace) {
      history[history.length - 1] = mode;
    } else {
      history.push(mode);
    }
    setHistory([...history]);
  }

  function back() {
    if (history.length > 1) {
      history.pop();
    }
    setMode(history[history.length - 1]);
    setHistory([...history]);
    // setHistory((prev) => {
    //   if (prev.length > 1) {
    //     setMode(history[history.length - 2])
    //     return [...prev.slice(0, prev.length - 1)]
    //   }
    // })
  }
  return { mode, transition, back };
}
