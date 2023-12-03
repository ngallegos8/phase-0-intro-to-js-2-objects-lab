const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, updatedAddress) {
    const newAddress = {...employee};

    newAddress[streetAddress] = "11 Broadway"

    return newAddress;
}

const newAddress = updateEmployeeWithKeyAndValue(
    streetAddress,
    "11 Broadway",
    "12 Broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, updatedAddress) {
    employee[streetAddress] = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, streetAddress, updatedAddress) {
    return {
        ...employee,
        [streetAddress]: updatedAddress,
    };
}

function destructivelyDeleteFromEmployeeByKey(employee, streetAddress, updatedAddress) {
    delete employee[streetAddress];
    return employee;
    };

