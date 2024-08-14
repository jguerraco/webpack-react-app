import React, { useState } from "react";
import { debounce } from "lodash";

const DebouncedInput: React.FC = () => {
  const [value, setValue] = useState("");

  const handleChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    300
  );

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Debounced Value: {value}</p>
    </div>
  );
};

export default DebouncedInput;
