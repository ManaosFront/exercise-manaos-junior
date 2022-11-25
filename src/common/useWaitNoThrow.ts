import { useState, useEffect } from 'react';

export const useWaitNoThrow = <T>(fn: () => T, untilTimestamp = Date.now() + 1000): T | undefined => {
  const [result, setResult] = useState<T | undefined>();

  useEffect(() => {
    let timeoutId: number | null = null;

    const newTry = () => {
      timeoutId = setTimeout(() => {
        try {
          setResult(fn());
        } catch (e) {
          if (Date.now() > untilTimestamp) {
            throw e;
          }
        }
      }, 1) as unknown as number;
    };

    newTry();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  return result;
};
