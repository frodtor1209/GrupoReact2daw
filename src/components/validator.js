export const edadValidator = (value) => {
    const edad = parseInt(value, 10);
    return edad >= 18 && edad <= 65;
  };
  