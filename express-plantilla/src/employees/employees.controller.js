import employeeService from "./employees.service.js";

const getEmployees = async (_, res) => {
  try {
    const result = await employeeService.getEmployees();
    return res.status(200).json({
      message: "Employees retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await employeeService.getEmployeeById({ id });

    if (!result) return res.status(200).json({ message: "Employee not found" });

    return res.status(200).json({
      message: "Employee retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await employeeService.updateEmployee({
      employee: req.body,
      id,
    });
    return res.status(200).json({
      message: "Employees retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addEmployee = async (req, res) => {
  try {
    await employeeService.addEmployee({
      employee: req.body,
    });
    return res.status(200).json({
      message: "Employee added successfull",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    await employeeService.deleteEmployee({ id });
    return res.status(200).json({
      message: "Employee deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  getEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
