const validateUser = (user, descriptions) => {
  const missingFields = [];
  const validFields = [];

  for (const key in descriptions) {
    user[key]
      ? validFields.push([descriptions[key], user[key]])
      : missingFields.push(`no se registró el ${descriptions[key]}`);
  }
  return missingFields.length > 0 ? missingFields : validFields;
};

const user = {
  name: "Juan",
  ap_paterno: "Vilchez",
};

const descriptions = {
  name: "Nombres Completos:",
  ap_paterno: "Apellido Paterno:",
  ap_materno: "Apellido Materno:",
  birthday: "Cumpleaños:",
};

console.log(validateUser(user, descriptions));
