function century(year) {
  let newCentury = 0;
  while (year > 0) {
    year = year - 100;
    newCentury = newCentury + 1;
  }

  return newCentury;
}

//If you can't sleep, just count sheep!!
var countSheep = function (num) {
  let empty = " ";
  for (let i = 1; i <= num; i++) {
    empty += `${i}sheep...`;
  }
  return empty;
};
