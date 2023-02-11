function century(year) {
  let newCentury = 0;
  while (year > 0) {
    year = year - 100;
    newCentury = newCentury + 1;
  }

  return newCentury;
}
console.log(century(1705));
