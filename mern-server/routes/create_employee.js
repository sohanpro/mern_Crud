const express = require("express")
const router = express.Router();
const book = require("../models/employees")

router.post("./add_employee", async(req,res)=>
{

    try{
        const newEmployee = new employeeSchema(
            {
                employee_name: req.body.employee_name,
                emp_age: req.body.emp_age,
                birth_date: req.body.birth_date,
                phone_number: req.body.phone_number,
                gender: req.body.gender
    
    
            }
        )
    
        const saveEmployee = await newEmployee.save()
        res.json(saveEmployee)
    } catch(err)
    {
        console.error("error:",err)
    }
   
})
module.exports = router