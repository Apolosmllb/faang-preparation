// employees.repository.js
import pool from "../database.js";

const getEmployees = async () => {
  const [result] = await pool.query("SELECT * FROM employees");
  return result;
};

const addEmployee = async ({ employee }) => {
  await pool.query("INSERT INTO employees SET ?", [employee]);
};

const getEmployeeById = async ({ id }) => {
  const [result] = await pool.query("SELECT * FROM employees WHERE id = ?", [
    id,
  ]);
  return result?.[0];
};

const updateEmploye = async ({ employee, id }) => {
  const { name, lastname, age } = employee;
  const updateEmployee = {
    name,
    lastname,
    age,
  };
  const [result] = await pool.query("UPDATE employees SET ? WHERE id = ?", [
    updateEmployee,
    id,
  ]);
  return result;
};

const deleteEmployee = async ({ id }) => {
  await pool.query("DELETE FROM employees WHERE id = ?", [id]);
};

export default {
  getEmployees,
  addEmployee,
  getEmployeeById,
  updateEmploye,
  deleteEmployee,
};
