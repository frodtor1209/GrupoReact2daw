import { useState } from "react";

export default function Formulario() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Escribe algo"
        className="border border-gray-300 rounded-lg p-2 w-full"
      />
      <p className="mt-4 text-gray-600">Has escrito: {value}</p>
    </div>
  );
}
