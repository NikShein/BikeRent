import { useCallback, useState } from 'react';

export const useMessage = () => {
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState('');
  const message = useCallback((textAlert) => {
    setText((prev) => textAlert);
    setAlert((prev) => true);
    setTimeout(() => {
      setAlert((prev) => false);
    }, 1500);
  }, []);

  return { message, alert, text };
};
