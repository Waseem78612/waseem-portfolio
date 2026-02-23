// src/hooks/useTyping.js
import { useState, useEffect, useRef } from "react";

export function useTyping(titles, speed = 100, pauseMs = 1400) {
  const [typed, setTyped] = useState("");
  const idxRef   = useRef(0);
  const charRef  = useRef(0);
  const delRef   = useRef(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (pauseRef.current) return;
      const word = titles[idxRef.current];
      if (!delRef.current) {
        charRef.current += 1;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === word.length) {
          pauseRef.current = true;
          setTimeout(() => { pauseRef.current = false; delRef.current = true; }, pauseMs);
        }
      } else {
        charRef.current -= 1;
        setTyped(word.slice(0, charRef.current));
        if (charRef.current === 0) {
          delRef.current = false;
          idxRef.current = (idxRef.current + 1) % titles.length;
        }
      }
    };
    const timer = setInterval(tick, speed);
    return () => clearInterval(timer);
  }, [titles, speed, pauseMs]);

  return typed;
}
