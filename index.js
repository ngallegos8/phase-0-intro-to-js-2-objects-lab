const employee = {
    name: "Link",
    streetAddress: "1 Tarrey Town Road"
}

//funtion to non-destructively change key and value (using spread operator)
function updateEmployeeWithKeyAndValue (object, key, value) {
    return {
        ...object,
        [key]: value
    }
}

//executing non-destructive function for specific values of 'Sam' & '11 Broadway'

const employeeOne = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
)

//destructively mutate object
function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value){
    object[key] = value
    return object;

    // return {
    //     object,
    //     [key]: value
    // }
}

// function deleteFromEmployeeByKey(object, key, value){
//     return{
//         ...object,
//         [key]: value

//         delete 
//     }
// }

function deleteFromEmployeeByKey(object, key, value){
    return {
        ...object,
        [key]: value,
    }

    delete [key]
}

function destructivelyDeleteFromEmployeeByKey (object, key){
    // object[key] = value;
    delete object[key];
    return object
}






















































// const employee = {
//     name: "Sam",
//     streetAddress: "11 Broadway",
// }

// function updateEmployeeWithKeyAndValue(employee, streetAddress, updatedAddress) {
//     const newAddress = {...employee};

//     newAddress[streetAddress] = "11 Broadway"

//     return newAddress;
// }

// const newAddress = updateEmployeeWithKeyAndValue(
//     streetAddress,
//     "11 Broadway",
//     "12 Broadway"
// );

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, updatedAddress) {
//     employee[streetAddress] = "12 Broadway";
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, streetAddress, updatedAddress) {
//     return {
//         ...employee,
//         [streetAddress]: updatedAddress,
//     };
// }

// function destructivelyDeleteFromEmployeeByKey(employee, streetAddress, updatedAddress) {
//     delete employee[streetAddress];
//     return employee;
//     };

