import React from "react";
import { useState } from "react";

export default function EventoArrastrarYSoltar() {
      const [imagen, setImagen] = useState(null);
    
      const manejarArrastre = (e) => {
        e.preventDefault();
      };
    
      const manejarSoltar = (e) => {
        e.preventDefault();
        const archivo = e.dataTransfer.files[0];
        if (archivo && archivo.type.startsWith("image/")) {
          setImagen(URL.createObjectURL(archivo)); // Esto me lo ha dado ChatGPT para crear la url para el archivo, pero temporal, para no usar POST y se quede permanente
        } else {
          alert("Debe ser obligatoriamente una imagen.");
        }
      };
    
      return (
        <div className="p-4 flex flex-col items-center gap-4">
          <div
            onDragOver={manejarArrastre}
            onDrop={manejarSoltar}
            className="w-64 h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-500">
            Arrastrar y soltar
          </div>
    
          {}
          {imagen && (
            <img
              src={imagen}
              alt="Imagen temporal"
              className="w-40 h-40"
            />
          )}
        </div>
      );
    }
    