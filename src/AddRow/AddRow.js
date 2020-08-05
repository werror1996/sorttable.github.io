import React from "react";

function addRow() {
  return (
    <div>
      <div
        className="items"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          ID
          <input type="number" placeholder="Input ID"></input>
        </div>
        <div>
          First name:
          <input type="text" placeholder="Input name"></input>
        </div>
        <div>
          Last name:
          <input type="text" placeholder="Input last name"></input>
        </div>
        <div>
          E-mail:
          <input type="text" placeholder="Input e-mail"></input>
        </div>
        <div>
          Phone:
          <input type="number" placeholder="Input phone"></input>
        </div>
        <div>
          ID
          <input type="number" placeholder="Введите ID"></input>
        </div>
      </div>
      <button>Добавить в таблицу</button>
    </div>
  );
}

export default addRow;
