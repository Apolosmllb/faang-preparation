// employees.service.js
import employeeRepository from "./employees.repository.js";

const getEmployees = async () => {
  return await employeeRepository.getEmployees();
};

const getEmployeeById = async ({ id }) => {
  const result = await employeeRepository.getEmployeeById({ id });
  if (!result) {
    return null;
  }
  return result;
};

const addEmployee = async ({ employee }) => {
  await employeeRepository.addEmployee({ employee });
};

const updateEmployee = async ({ employee, id }) => {
  await employeeRepository.updateEmploye({ employee, id });
};

const deleteEmployee = async ({ id }) => {
  await employeeRepository.deleteEmployee({ id });
};

export default {
  getEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
