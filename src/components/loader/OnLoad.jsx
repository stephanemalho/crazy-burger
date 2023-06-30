import React, { useState, useEffect } from "react";

import { dots } from "../../utils/dots";
import OnLoadStyled from "../../styled/loaderStyled/onloadStyled";

function OnLoad({ label }) {
  const [dotIndex, setDotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prevIndex) => (prevIndex + 1) % dots.length);
    }, 500); // Change la dot toutes les 0.5 secondes

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <OnLoadStyled>
      <div>
        {label}
        <span>{dots[dotIndex]}</span>
      </div>
    </OnLoadStyled>
  );
}

export default OnLoad;


