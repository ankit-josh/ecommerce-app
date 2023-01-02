import * as React from "react";

const Dropdown1 = () => {
  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label>
        Select your size :
        <select value={value} onChange={handleChange}>
          <option value="fruit">Small</option>

          <option value="vegetable">Medium</option>

          <option value="meat">Large</option>
        </select>
      </label>

      {/* <p>We eat {value}!</p> */}
    </div>
  );
};

export default Dropdown1;
