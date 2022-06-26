// given a temprature of array of one day. calculate th temprature amplitude keep in mind that some it throw a sensor error

const amplitude = () => {

 const temprature = [18, 42, 37, 47, 8, 55, "Error"];
 if(typeof temprature !=='number'){}



  let MaxTemp = Math.max(...temprature);
  let MinTemp = Math.min(...temprature);
  console.log(MaxTemp); 
  console.log(MinTemp)
    


};

amplitude()

