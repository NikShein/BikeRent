import { useCallback, useState } from 'react';

export const useMessage = () => {
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState('');
  const message = useCallback((textAlert) => {
    setText((prev) => textAlert);
    setAlert((prev) => true);
    const timer = setTimeout(() => {
      setAlert((prev) => false);
      clearTimeout(timer);
    }, 1500);
  }, []);

  return { message, alert, text };
};
