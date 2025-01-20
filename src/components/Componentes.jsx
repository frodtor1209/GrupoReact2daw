import React from "react";

const Componentes = ({ titulo, ChildComponent,...childProps}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{titulo}</h2>
      <div>
      {ChildComponent ? <ChildComponent {...childProps} /> : <p></p>}
      </div>
    </div>
  );
};

export default Componentes;
