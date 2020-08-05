import React from "react";

function DetailView({ person }) {
  const style = {
    width: "18rem",
  };
  return (
    <div style={style} className="card">
      <div className="card-body">
        <p>
          Выбран пользователь <b>{person.firstName + " " + person.lastName}</b>
        </p>
        <p>
          Описание: <br />
          <textarea defaultValue={person.description}></textarea>
        </p>
        <p>Адрес проживания: {person.address.streetAddress}</p>
        <p>Город проживания: {person.address.city}</p>
        <p>Провинция/Штат: {person.address.state}</p>
        <p>Индекс: {person.address.zip}</p>
      </div>
    </div>
  );
}

export default DetailView;
