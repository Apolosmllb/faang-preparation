const getTotalX = (a, b) => {
  //console.log(a, b);
  let mcm = [];
  let divisor = 0;
  let divide = 2;
  let multi = 1
  a.forEach((a) => {
    while (a >= divide) {
      console.log(`entrando a/div: ${a}/${divide}`);
      if (a % divide === 0 && divisor !== divide) {
        console.log("~ divisor:", divisor);
        if (a / divide === 1) divisor = divide;
        console.log("~ divisor:", divisor);
        console.log(`Sí Cumple a/div: ${a}/${divide}`);
        
        mcm.forEach(e => {
          multi = multi * e
         console.log('element ', e);
        });
        console.log('multi:', multi)
        mcm.push(divide)
      } else {
        console.log(`----No cumple a/div: ${a}/${divide}`);
      }
      divide++;
    }
    multi = 1
    divide = 2
  });
  console.log("~ mcm:", mcm);
};

a = [2, 6, 5];
b = [24, 36];

getTotalX(a, b);

// console.log("a / divide:", a / divide)

/*console.log(`${a}`, '/', `${divide}`)
a % divide === 0 && (a / divide !== 1 ) ? mcm.push(divide) : null;
*/

/*  a % divide === 0
  ? console.log(`Sí Cumple a/div: ${a}/${divide}`)
  : console.log(`----No cumple a/div: ${a}/${divide}`);*/
