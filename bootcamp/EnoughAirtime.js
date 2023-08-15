 function enoughAirtime(string, airtime) {
    // Define call, data, and sms costs
    const callCost = 1.88;
    const dataCost = 12;
    const smsCost = 0.75; 
  
    // Split the string of airtime usage into an array
    const newArr = string.split(",");
  
    // Loop through the array of airtime usage
    for (let i = 0; i < newArr.length; i++) {
      // Deduct call cost from airtime if call is in the usage string
      if (newArr[i].includes("call")) {
        airtime -= callCost;
      } 
      // Deduct sms cost from airtime if sms is in the usage string
      else if (newArr[i].includes("sms")) {
        airtime -= smsCost;
      } 
      // Deduct data cost from airtime if neither call nor sms is in the usage string
      else {
        airtime -= dataCost;
      }
    }	
      console.log("R" + Math.max(airtime, 0).toFixed(2));
    // Return the remaining airtime, rounded to 2 decimal places and with a "R" prefix
    return "R" + Math.max(airtime, 0).toFixed(2);
    
  }
  export default enoughAirtime;