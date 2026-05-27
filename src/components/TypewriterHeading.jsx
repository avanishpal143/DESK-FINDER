import React, { useState, useEffect } from 'react';

export default function TypewriterHeading({ text1, text2 = '', className = '', speed = 120 }) {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let timer1;
    let timer2;

    // Reset states if props change
    setLine1('');
    setLine2('');
    setIsFinished(false);

    timer1 = setInterval(() => {
      if (index1 < text1.length) {
        setLine1(text1.substring(0, index1 + 1));
        index1++;
      } else {
        clearInterval(timer1);
        if (text2) {
          timer2 = setInterval(() => {
            if (index2 < text2.length) {
              setLine2(text2.substring(0, index2 + 1));
              index2++;
            } else {
              clearInterval(timer2);
              setIsFinished(true);
            }
          }, speed);
        } else {
          setIsFinished(true);
        }
      }
    }, speed);

    return () => {
      clearInterval(timer1);
      if (timer2) clearInterval(timer2);
    };
  }, [text1, text2, speed]);

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {line1}
      {line1 && text2 && <br />}
      {text2 && (
        <span className="inline-block">
          {line2}
        </span>
      )}
      <span className={`inline-block w-[3px] h-[0.75em] bg-[#0B0B0B] ml-1.5 align-middle ${isFinished ? 'animate-none opacity-0' : 'animate-pulse'}`} />
    </h1>
  );
}
