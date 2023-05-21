import { useState } from "react";
//etat
export const useDelayMessage = (delay) => {
  const [isSubmited, setIsSubmited] = useState(false);
  // comportement
  const displayMessage = () => {
    setIsSubmited(true);
    setTimeout(() => {
      setIsSubmited(false);
    }, delay);
  };
  return { isSubmited, displayMessage };
};
