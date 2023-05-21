function timeConversion(s) {
  const timeHour = s.slice(s.length - 2, s.length); //PM or AM
  const hour = Number(s.slice(0, 2)); // 01 -> 1 number ,  00 -> 0 number 
  const restHour = s.slice(2, s.length - 2); // :05:45
  let format12Hour = ''

  if (hour == 12 && timeHour == "PM") format12Hour = "12";
  else if (hour == 12 && timeHour == "AM") format12Hour = "00";
  else if ( timeHour == "PM" ) format12Hour = (hour + 12).toString();
  else format12Hour = (s.slice(0, 2))
   
  const format12 = format12Hour + restHour;
  //return format12;
 
  
  console.log("initial input:", s)
  console.log("timeHour:", timeHour);
  console.log("hour:", hour);
  console.log("format12Hour:",format12Hour);
  console.log("format12:", format12)
}

timeConversion("12:05:45AM");