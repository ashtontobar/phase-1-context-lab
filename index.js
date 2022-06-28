/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = (array) => {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

const createEmployeeRecords = (arrayOfRecords) => {
  const newRecord = arrayOfRecords.map(createEmployeeRecord);

  return newRecord;
};

const createTimeInEvent = function(date) {
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date.slice(-4)),
        date: date.slice(0, 10),
      }
    this.timeInEvents.push(timeIn) 

      return this    
}

const createTimeOutEvent = function(date) {
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date.slice(-4)),
        date: date.slice(0, 10),
      }
    this.timeOutEvents.push(timeOut) 

      return this    
}

const hoursWorkedOnDate = function(dateWorked) {
   const inDate = this.timeInEvents.find(inDate => inDate.date === dateWorked)
   const outDate =  this.timeOutEvents.find(outDate => outDate.date === dateWorked)

   return (outDate.hour - inDate.hour)/100
}

const wagesEarnedOnDate = function(dateWorked) {
    return hoursWorkedOnDate.call(this, dateWorked) * this.payPerHour
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
    return e.date;
  });

  const payable = eligibleDates.reduce(
    function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this),
    0
  ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable;
};

const findEmployeeByFirstName = function(srcArray, firstName) {
    const employeeName = srcArray.find(employeeName => employeeName.firstName === firstName)

    return employeeName
}

const calculatePayroll = function(arrayOfEmployees) {
    return arrayOfEmployees.reduce((acc, record) => {
        return allWagesFor.call(record) + acc
    }, 0)
}
