import { useState } from 'react';

const useInput = (defaultValue) => {
  const [input, setInput] = useState(defaultValue);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeInput];
};

export default useInput;