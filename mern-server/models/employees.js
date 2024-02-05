const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema(
    {
        employee_name:{
            type: String,
            require:true
        },
        emp_age:{
            type:Number,
            require:true
        },
        birth_date: Date,
        phone_number:
        {
            type : Number,
            require:true
        },
        gender:{
            type: String,
            require: true
        }



    }

    
)
module.exports = mongoose.model("emp_details",employeeSchema)