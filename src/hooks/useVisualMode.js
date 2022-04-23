import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setHistory((prev) => {
      const tHistory = [...history];
      if (replace) {
      tHistory.pop();
    }
    return [...tHistory, newMode]
    })
    setMode(newMode)
  }

  function back() {
    const bHistory = [...history];
    if (bHistory.length > 1) {
      setHistory(bHistory.pop());
    }
    setMode(bHistory[bHistory.length - 1]);
  }

  return { mode, transition, back };
}