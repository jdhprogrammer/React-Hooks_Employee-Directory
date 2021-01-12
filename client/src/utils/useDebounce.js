import {useState, useEffect} from "react";

const useDebounce = (value, delay) => {
  // useState using statusState to represent state, and setStatusState to set that specific state
  const [dbounceValue, setdbcounceValue] = useState(value);

  // returning the state and the status object which will be used the capture the value from the form.
  useEffect(() => {
    const timeoutId = setTimeout(() => setdbcounceValue(value), delay)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [value, delay])

  return dbounceValue;
}
export default useDebounce;
