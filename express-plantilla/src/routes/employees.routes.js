import { Router } from "express";
import employeesController from "../employees/employees.controller.js";

const router = Router();
router.get("/", employeesController.getEmployees);
router.get("/:id", employeesController.getEmployeeById);
router.post("/", employeesController.addEmployee);
router.put("/:id", employeesController.updateEmployee);
router.delete("/:id", employeesController.deleteEmployee);

export default router;
