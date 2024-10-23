// Write your solution in this file!

/*const employeesFile = {};
employeesFile.employee;*/

const employee = {
    name: "BigXThaPlug",
    streetAddress: "3314 Drexel Dr"
};

/*function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee };
    
    newEmployee[key] = value;

    return newEmployee;
};*/

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}



