import React, { memo } from "react";
import { useCountRenders } from "../hooks/useCountRenders";
import "../styles.css";

const Button = memo(({ children, action }) => {
  useCountRenders();
  return (
    <div>
      <button className="Button" onClick={action}>
        {children}
      </button>
    </div>
  );
});

export default Button;
