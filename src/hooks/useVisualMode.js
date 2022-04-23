import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory((prev) => {
      if (replace) {
        return [...prev.slice(0, prev.length - 1), newMode];
      }
      return [...prev, newMode]
    })
    setMode(newMode)
  }

  function back() {
    setHistory((prev) => {
      if (prev.length > 1) {
        setMode(history[history.length - 2])
        return [...prev.slice(0, prev.length - 1)]
      }
    })
  }
  return { mode, transition, back };
}