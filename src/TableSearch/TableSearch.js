import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("");
  const valueChangedHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input-group mt-3 mb-3">
      <div className="input-group-prepend">
        <button
          className="btn-outline-secondary"
          onClick={() => props.onSearch(value)}
        >
          Search
        </button>
      </div>
      <input
        type="text"
        className="form-control"
        onChange={valueChangedHandler}
        value={value}
      />
    </div>
  );
};
