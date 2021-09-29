import { useEffect, useState } from 'react';

export default function useForm(initState = {}, update = false) {
  const [inputs, setInputs] = useState(initState);
  const isDiff = JSON.stringify(inputs) !== JSON.stringify(initState);
  useEffect(() => {
    if (update && isDiff) {
      setInputs(initState);
    }
  }, [initState, isDiff, update]);

  const handleChange = (e) => {
    let { name, value, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      [value] = e.target.files;
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initState);
  };

  const clearForm = () => {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );

    setInputs(blankState);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
