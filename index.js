// Code your solution in this file!

const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers, hometown) {
  drivers.forEach(function(driver) {
    if (driver.hometown === hometown){
      console.log(driver.name);
    }
  });
};

const driversByRevenue = function(drivers) {
  const newDrivers = [...drivers]
  newDrivers.sort(function(driver1, driver2) {
    return driver1.revenue = driver2.revenue
  });
  return newDrivers
};
