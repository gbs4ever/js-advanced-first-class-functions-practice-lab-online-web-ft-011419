// Code your solution in this file!
function logDriverNames(driver) {
  for (const el of driver){
  console.log(el.name)}
}
<<<<<<< HEAD
function logDriversByHometown(drivers, location){
  drivers.forEach(function (driver){
    if (driver.hometown === location){
    console.log(driver.name)
    }
  });
}
function driversByRevenue(drivers){
return  drivers.slice().sort(function(a,b) {
  return a.revenue - b.revenue

  })
}
function driversByName(drivers){
return  drivers.slice().sort(function(a,b) {
   return a.name.localeCompare(b.name)

  })
}
const totalRevenue = function(drivers){
return drivers.reduce(function(total,el){
  return total + el.revenue
},0)
}
// when we average we need to do that math after reduce closes and returns a value !!
const averageRevenue = function(drivers){
return   totalRevenue(drivers) /drivers.length
}
=======
>>>>>>> 6fafb3a84e1e6d676ddee65140f467990da38a7e
