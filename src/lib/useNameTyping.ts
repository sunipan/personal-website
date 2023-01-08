import { useEffect, useState } from 'react';

export const useNameTyping = () => {
  /* State */
  const [name, setName] = useState<string>('');
  const [nameArr, setNameArr] = useState<string[]>([
    'S',
    'e',
    'b',
    'i',
    ' ',
    'U',
    'n',
    'i',
    'p',
    'a',
    'n',
  ]);

  /* Lifecycle */
  useEffect(() => {
    if (nameArr.length === 0) return;
    const interval = setInterval(() => {
      setName(name + nameArr[0]);
      setNameArr(nameArr.slice(1));
    }, 250);
    return () => clearInterval(interval);
  }, [name, nameArr]);

  return name;
};
