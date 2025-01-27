import { useForm } from "react-hook-form";
import { edadValidator } from "./validator";
import { useState } from "react";

function FormularioDavidComponente() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [sexoFijo, setSexoFijo] = useState(null); // Estado para bloquear el sexo seleccionado.

  const onSubmit = (data) => {
    console.log(data); // Aquí verás todos los datos, incluido el sexo.
  };

  const bloquearSexo = (e) => {
    if (!sexoFijo) {
      const valorSeleccionado = e.target.value;
      setSexoFijo(valorSeleccionado); // Establece el sexo fijado.
      setValue("sexo", valorSeleccionado); // Actualiza el formulario con el valor fijado.
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Formulario
        </h2>

        {/* Nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            {...register("nombre", { required: true, maxLength: 10 })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.nombre?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className="text-red-500 text-sm mt-1">
              El campo nombre debe tener menos de 10 caracteres
            </p>
          )}
        </div>

        {/* Sexo */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Sexo
          </label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="masculino"
                {...register("sexo", { required: true })}
                checked={sexoFijo === "masculino"} // Mantiene el valor si es fijo
                onChange={bloquearSexo}
              />
              Masculino
            </label>
            <label>
              <input
                type="radio"
                value="femenino"
                {...register("sexo", { required: true })}
                checked={sexoFijo === "femenino"} // Mantiene el valor si es fijo
                onChange={bloquearSexo}
              />
              Femenino
            </label>
          </div>
          {errors.sexo && (
            <p className="text-red-500 text-sm mt-1">El campo sexo es requerido</p>
          )}
        </div>

        {/* Dirección */}
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-lg font-medium text-gray-700 mb-1">
            Dirección
          </label>
          <input
            id="direccion"
            type="text"
            {...register("direccion", { required: true })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.direccion?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              El campo dirección es requerido
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1">
              El formato del email es incorrecto
            </p>
          )}
        </div>

        {/* Edad */}
        <div className="mb-4">
          <label htmlFor="edad" className="block text-lg font-medium text-gray-700 mb-1">
            Edad
          </label>
          <input
            id="edad"
            type="text"
            {...register("edad", { validate: edadValidator })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.edad && (
            <p className="text-red-500 text-sm mt-1">
              La edad debe estar entre 18 y 65
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioDavidComponente;
