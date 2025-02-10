import { useEffect, useState } from "react";
import axios from "axios";

export default function Profesores() {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/profesores")
      .then((response) => setProfesores(response.data))
      .catch((error) => console.error("Error obteniendo datos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Profesores</h1>
      <ul>
        {profesores.map((est) => (
          <li key={est.id}>{est.nombre} - {est.asignatura} </li>
        ))}
      </ul>
    </div>
  );
}